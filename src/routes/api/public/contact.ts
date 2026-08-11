import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { sendContactEmail } from "@/server/send-contact-email.server";

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

        // Standard host-agnostic send (Resend HTTP API) — no Lovable-only
        // runtime endpoint or queue infrastructure required.
        const result = await sendContactEmail({
          name: parsed.data.name,
          company: parsed.data.company,
          email: parsed.data.email,
          phone: parsed.data.phone,
          city: parsed.data.city,
          service: parsed.data.service,
          message: parsed.data.message,
        });

        if (result.status >= 400) {
          console.error("Contact form: send failed", result);
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