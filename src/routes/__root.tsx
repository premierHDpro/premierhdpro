import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { Toaster } from "../components/ui/sonner";

function NotFoundComponent() {
  return (
    <>
      <SiteHeader />
      <div className="flex min-h-[60vh] items-center justify-center bg-background px-4">
        <div className="max-w-md text-center">
          <h1 className="text-7xl font-bold text-foreground">404</h1>
          <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="mt-6">
            <Link to="/" className="btn-primary">Go home</Link>
          </div>
        </div>
      </div>
      <SiteFooter />
    </>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Commercial Construction & Facility Solutions | Premier HD Pro" },
      {
        name: "description",
        content:
          "Industrial and commercial general contractor for warehouses, distribution centers, and active facilities across Metro Atlanta and Georgia.",
      },
      { name: "author", content: "Premier HD Pro" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Commercial Construction & Facility Solutions | Premier HD Pro" },
      {
        property: "og:description",
        content:
          "Commercial construction, warehouse renovations, tenant improvements, and ongoing facility services across Metro Atlanta and Georgia.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Commercial Construction & Facility Solutions | Premier HD Pro" },
      { name: "twitter:description", content: "Commercial construction, warehouse renovations, tenant improvements, and ongoing facility services across Metro Atlanta." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/6b7a0800-542e-4dff-a524-5e8928f0ba19" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/6b7a0800-542e-4dff-a524-5e8928f0ba19" },
      { property: "og:site_name", content: "Premier HD Pro" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "GeneralContractor",
          name: "Premier HD Pro",
          description:
            "Industrial and commercial general contractor serving warehouses, distribution centers, manufacturing facilities, and commercial buildings across Metro Atlanta and Georgia. Commercial construction, renovations, tenant improvements, and ongoing facility services.",
          url: "https://premierhdpro.com/",
          telephone: "+1-770-628-5444",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Locust Grove",
            addressRegion: "GA",
            addressCountry: "US",
          },
          areaServed: [
            { "@type": "City", name: "Atlanta" },
            { "@type": "City", name: "McDonough" },
            { "@type": "City", name: "Locust Grove" },
            { "@type": "AdministrativeArea", name: "Henry County" },
            { "@type": "State", name: "Georgia" },
          ],
          priceRange: "$$",
          knowsAbout: [
            "Commercial construction",
            "Industrial construction",
            "Warehouse renovations",
            "Tenant improvements",
            "Office buildouts",
            "Metal framing and drywall",
            "Concrete construction",
            "Demolition",
            "Facility services",
            "Dock equipment repair",
            "Warehouse maintenance",
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
      <Toaster />
    </>
  );
}
