import * as React from 'react'
import { render as renderAsync } from '@react-email/render'
import { createClient } from '@supabase/supabase-js'
import { TEMPLATES } from '@/lib/email-templates/registry'

const SITE_NAME = "premier-facility-pros"
const SENDER_DOMAIN = "notify.premierhdpro.com"
const FROM_DOMAIN = "premierhdpro.com"

function redactEmail(email: string | null | undefined): string {
  if (!email) return '***'
  const [localPart, domain] = email.split('@')
  if (!localPart || !domain) return '***'
  return `${localPart[0]}***@${domain}`
}

function generateToken(): string {
  const bytes = new Uint8Array(32)
  crypto.getRandomValues(bytes)
  return Array.from(bytes).map((b) => b.toString(16).padStart(2, '0')).join('')
}

export interface SendTransactionalInput {
  templateName: string
  recipientEmail?: string
  idempotencyKey?: string
  templateData?: Record<string, any>
}

export interface SendTransactionalResult {
  status: number
  body: Record<string, any>
}

/**
 * Core transactional-email send logic, runnable in-process.
 * Used by both the public /lovable/email/transactional/send route
 * and internal callers (e.g. the contact form route) to avoid
 * cross-origin fetch loops when the worker calls its own public hostname.
 */
export async function sendTransactionalEmailCore(
  input: SendTransactionalInput,
): Promise<SendTransactionalResult> {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !supabaseServiceKey) {
    console.error('Missing required environment variables')
    return { status: 500, body: { error: 'Server configuration error' } }
  }

  const { templateName, recipientEmail, templateData = {} } = input
  const messageId = crypto.randomUUID()
  const idempotencyKey = input.idempotencyKey || messageId

  if (!templateName) {
    return { status: 400, body: { error: 'templateName is required' } }
  }

  const supabase = createClient(supabaseUrl, supabaseServiceKey)
  const template = TEMPLATES[templateName]

  if (!template) {
    console.error('Template not found in registry', { templateName })
    return {
      status: 404,
      body: {
        error: `Template '${templateName}' not found. Available: ${Object.keys(TEMPLATES).join(', ')}`,
      },
    }
  }

  const effectiveRecipient = template.to || recipientEmail
  if (!effectiveRecipient) {
    return {
      status: 400,
      body: {
        error: 'recipientEmail is required (unless the template defines a fixed recipient)',
      },
    }
  }

  // Suppression check
  const { data: suppressed, error: suppressionError } = await supabase
    .from('suppressed_emails')
    .select('id')
    .eq('email', effectiveRecipient.toLowerCase())
    .maybeSingle()

  if (suppressionError) {
    console.error('Suppression check failed — refusing to send', {
      error: suppressionError,
      recipient_redacted: redactEmail(effectiveRecipient),
    })
    return { status: 500, body: { error: 'Failed to verify suppression status' } }
  }

  if (suppressed) {
    await supabase.from('email_send_log').insert({
      message_id: messageId,
      template_name: templateName,
      recipient_email: effectiveRecipient,
      status: 'suppressed',
    })
    return { status: 200, body: { success: false, reason: 'email_suppressed' } }
  }

  // Get/create unsubscribe token
  const normalizedEmail = effectiveRecipient.toLowerCase()
  let unsubscribeToken: string

  const { data: existingToken, error: tokenLookupError } = await supabase
    .from('email_unsubscribe_tokens')
    .select('token, used_at')
    .eq('email', normalizedEmail)
    .maybeSingle()

  if (tokenLookupError) {
    console.error('Token lookup failed', { error: tokenLookupError })
    await supabase.from('email_send_log').insert({
      message_id: messageId,
      template_name: templateName,
      recipient_email: effectiveRecipient,
      status: 'failed',
      error_message: 'Failed to look up unsubscribe token',
    })
    return { status: 500, body: { error: 'Failed to prepare email' } }
  }

  if (existingToken && !existingToken.used_at) {
    unsubscribeToken = existingToken.token
  } else if (!existingToken) {
    unsubscribeToken = generateToken()
    const { error: tokenError } = await supabase
      .from('email_unsubscribe_tokens')
      .upsert(
        { token: unsubscribeToken, email: normalizedEmail },
        { onConflict: 'email', ignoreDuplicates: true },
      )

    if (tokenError) {
      console.error('Failed to create unsubscribe token', { error: tokenError })
      await supabase.from('email_send_log').insert({
        message_id: messageId,
        template_name: templateName,
        recipient_email: effectiveRecipient,
        status: 'failed',
        error_message: 'Failed to create unsubscribe token',
      })
      return { status: 500, body: { error: 'Failed to prepare email' } }
    }

    const { data: storedToken, error: reReadError } = await supabase
      .from('email_unsubscribe_tokens')
      .select('token')
      .eq('email', normalizedEmail)
      .maybeSingle()

    if (reReadError || !storedToken) {
      console.error('Failed to read back unsubscribe token after upsert', {
        error: reReadError,
      })
      await supabase.from('email_send_log').insert({
        message_id: messageId,
        template_name: templateName,
        recipient_email: effectiveRecipient,
        status: 'failed',
        error_message: 'Failed to confirm unsubscribe token storage',
      })
      return { status: 500, body: { error: 'Failed to prepare email' } }
    }
    unsubscribeToken = storedToken.token
  } else {
    console.warn('Unsubscribe token already used but email not suppressed', {
      email_redacted: redactEmail(normalizedEmail),
    })
    await supabase.from('email_send_log').insert({
      message_id: messageId,
      template_name: templateName,
      recipient_email: effectiveRecipient,
      status: 'suppressed',
      error_message:
        'Unsubscribe token used but email missing from suppressed list',
    })
    return { status: 200, body: { success: false, reason: 'email_suppressed' } }
  }

  // Render template
  const element = React.createElement(template.component, templateData)
  const html = await renderAsync(element)
  const plainText = await renderAsync(element, { plainText: true })

  const resolvedSubject =
    typeof template.subject === 'function'
      ? template.subject(templateData)
      : template.subject

  // Log pending then enqueue
  await supabase.from('email_send_log').insert({
    message_id: messageId,
    template_name: templateName,
    recipient_email: effectiveRecipient,
    status: 'pending',
  })

  const { error: enqueueError } = await supabase.rpc('enqueue_email', {
    queue_name: 'transactional_emails',
    payload: {
      message_id: messageId,
      to: effectiveRecipient,
      from: `${SITE_NAME} <noreply@${FROM_DOMAIN}>`,
      sender_domain: SENDER_DOMAIN,
      subject: resolvedSubject,
      html,
      text: plainText,
      purpose: 'transactional',
      label: templateName,
      idempotency_key: idempotencyKey,
      unsubscribe_token: unsubscribeToken,
      queued_at: new Date().toISOString(),
    },
  })

  if (enqueueError) {
    console.error('Failed to enqueue email', {
      error: enqueueError,
      templateName,
      recipient_redacted: redactEmail(effectiveRecipient),
    })
    await supabase.from('email_send_log').insert({
      message_id: messageId,
      template_name: templateName,
      recipient_email: effectiveRecipient,
      status: 'failed',
      error_message: 'Failed to enqueue email',
    })
    return { status: 500, body: { error: 'Failed to enqueue email' } }
  }

  console.log('Transactional email enqueued', {
    templateName,
    recipient_redacted: redactEmail(effectiveRecipient),
  })
  return { status: 200, body: { success: true, queued: true } }
}