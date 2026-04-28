import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  company: z.string().trim().max(120).optional(),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(7).max(40),
  city: z.string().trim().max(120).optional(),
  service: z.string().trim().max(120).optional(),
  message: z.string().trim().max(2000).optional(),
  // Honeypot — should always be empty for real users.
  website: z.string().max(0).optional(),
});

export const Route = createFileRoute("/api/public/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let payload: unknown;
        try {
          payload = await request.json();
        } catch {
          return Response.json({ error: "Invalid JSON" }, { status: 400 });
        }

        const parsed = ContactSchema.safeParse(payload);
        if (!parsed.success) {
          return Response.json(
            { error: "Invalid form data", issues: parsed.error.issues },
            { status: 400 },
          );
        }

        // Honeypot filled = spam bot → silently accept.
        if (parsed.data.website && parsed.data.website.length > 0) {
          return Response.json({ success: true });
        }

        const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
        const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
        if (!supabaseUrl || !supabaseServiceKey) {
          console.error("Contact form: missing supabase env");
          return Response.json(
            { error: "Server configuration error" },
            { status: 500 },
          );
        }

        // Forward to the internal send-transactional-email route, authenticating
        // as the service role. The 'contact-lead' template has a fixed `to`
        // address (office@premierhdpro.com), so recipientEmail is informational.
        const origin = new URL(request.url).origin;
        const idempotencyKey = `contact-${crypto.randomUUID()}`;

        const sendRes = await fetch(`${origin}/lovable/email/transactional/send`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${supabaseServiceKey}`,
          },
          body: JSON.stringify({
            templateName: "contact-lead",
            recipientEmail: "office@premierhdpro.com",
            idempotencyKey,
            templateData: {
              name: parsed.data.name,
              company: parsed.data.company,
              email: parsed.data.email,
              phone: parsed.data.phone,
              city: parsed.data.city,
              service: parsed.data.service,
              message: parsed.data.message,
            },
          }),
        });

        if (!sendRes.ok) {
          const errText = await sendRes.text().catch(() => "");
          console.error("Contact form: send failed", {
            status: sendRes.status,
            body: errText.slice(0, 500),
          });
          return Response.json(
            { error: "Failed to send notification" },
            { status: 502 },
          );
        }

        return Response.json({ success: true });
      },
    },
  },
});