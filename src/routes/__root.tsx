import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { TaglineMarquee } from "../components/TaglineMarquee";
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
      { title: "Warehouse Construction & Facility Services | Premier HD" },
      {
        name: "description",
        content:
          "Premier HD Pro is a commercial general contractor serving warehouses, distribution centers, and industrial facilities across Metro Atlanta and Georgia. Maintenance, repairs, renovations.",
      },
      { name: "author", content: "Premier HD Pro" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Warehouse Construction & Facility Services | Premier HD" },
      {
        property: "og:description",
        content:
          "Warehouse maintenance, concrete floor repair, dock door repair, industrial HVAC, and renovations across Metro Atlanta.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Warehouse Construction & Facility Services | Premier HD" },
      { name: "twitter:description", content: "Full-service facility solutions for warehouses and distribution centers. Concrete, dock equipment, steel, HVAC, and maintenance with fast turnaround." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/6b7a0800-542e-4dff-a524-5e8928f0ba19" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/6b7a0800-542e-4dff-a524-5e8928f0ba19" },
      { name: "description", content: "Full-service facility solutions for warehouses and distribution centers. Concrete, dock equipment, steel, HVAC, and maintenance with fast turnaround." },
      { property: "og:description", content: "Full-service facility solutions for warehouses and distribution centers. Concrete, dock equipment, steel, HVAC, and maintenance with fast turnaround." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: "https://premier-facility-pros.lovable.app/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "GeneralContractor",
          name: "Premier HD Pro",
          description:
            "Commercial general contractor serving warehouses, distribution centers, and industrial facilities across Metro Atlanta and Georgia.",
          url: "https://premier-facility-pros.lovable.app/",
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
