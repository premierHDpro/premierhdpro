import { createStart, createMiddleware } from "@tanstack/react-start";
import { attachSupabaseAuth } from "@/integrations/supabase/auth-attacher";

// Baseline security headers applied to every SSR/server response.
// CSP is intentionally permissive enough for Vite/HMR in dev and for
// the Supabase + Lovable analytics endpoints used in prod.
const securityHeaders = createMiddleware().server(async ({ next }) => {
  const { getRequest } = await import("@tanstack/react-start/server");
  const request = getRequest();
  const url = new URL(request.url);
  // Bypass /lovable/* internal routes (webhooks, cron, previews) — they
  // self-authenticate and must not be touched by app middleware.
  if (url.pathname.startsWith("/lovable/") || url.pathname === "/email/unsubscribe") {
    return next();
  }
  const result = await next();
  const response = result.response;
  if (response instanceof Response) {
    const h = response.headers;
    if (!h.has("X-Content-Type-Options")) h.set("X-Content-Type-Options", "nosniff");
    if (!h.has("Referrer-Policy")) h.set("Referrer-Policy", "strict-origin-when-cross-origin");
    if (!h.has("Permissions-Policy"))
      h.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
    if (!h.has("Strict-Transport-Security"))
      h.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
    if (!h.has("Content-Security-Policy")) {
      h.set(
        "Content-Security-Policy",
        [
          "default-src 'self'",
          "base-uri 'self'",
          "frame-ancestors 'self' https://lovable.dev https://*.lovable.dev https://gptengineer.app https://*.gptengineer.app https://*.lovable.app https://*.lovableproject.com",
          "object-src 'none'",
          "img-src 'self' data: blob: https:",
          "font-src 'self' data: https:",
          "style-src 'self' 'unsafe-inline'",
          // 'unsafe-inline' is required for TanStack Start's hydration script
          "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
          "connect-src 'self' https: wss:",
          "form-action 'self'",
        ].join("; "),
      );
    }
  }
  return result;
});

export const startInstance = createStart(() => ({
  functionMiddleware: [attachSupabaseAuth],
  requestMiddleware: [securityHeaders],
}));