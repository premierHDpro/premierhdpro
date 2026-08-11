import * as React from 'react'
import { render as renderAsync } from '@react-email/render'
import { TEMPLATES } from '@/lib/email-templates/registry'

export interface ContactLead {
  name: string
  company?: string
  email: string
  phone: string
  city?: string
  service?: string
  message?: string
}

export interface SendResult {
  status: number
  body: Record<string, unknown>
}

/**
 * Sends the contact-lead notification via the Resend HTTP API.
 * Pure fetch + env vars — works on any standard Node host (GoDaddy, etc.)
 * with no Lovable/Supabase-specific infrastructure.
 */
export async function sendContactEmail(lead: ContactLead): Promise<SendResult> {
  const apiKey = process.env['RESEND_API_KEY']
  const fromEmail = process.env['CONTACT_FROM_EMAIL']
  const toEmail = process.env['CONTACT_TO_EMAIL'] || 'office@premierhdpro.com'

  if (!apiKey || !fromEmail) {
    console.error('Missing required email environment variables', {
      hasApiKey: Boolean(apiKey),
      hasFromEmail: Boolean(fromEmail),
    })
    return { status: 500, body: { error: 'Server configuration error' } }
  }

  const template = TEMPLATES['contact-lead']
  if (!template) {
    return { status: 500, body: { error: 'Email template missing' } }
  }

  const element = React.createElement(template.component, lead)
  const html = await renderAsync(element)
  const text = await renderAsync(element, { plainText: true })
  const subject =
    typeof template.subject === 'function' ? template.subject(lead) : template.subject

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [template.to || toEmail],
      reply_to: lead.email,
      subject,
      html,
      text,
    }),
  })

  if (!res.ok) {
    const detail = await res.text().catch(() => '')
    console.error('Resend send failed', { status: res.status, detail })
    return { status: 502, body: { error: 'Failed to send notification' } }
  }

  return { status: 200, body: { success: true } }
}
