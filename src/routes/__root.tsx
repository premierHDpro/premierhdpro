import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

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
      { title: "Premier HD Pro — Commercial Contractor for Warehouses & Distribution Centers in Georgia" },
      {
        name: "description",
        content:
          "Premier HD Pro is a commercial general contractor serving warehouses, distribution centers, and industrial facilities across Metro Atlanta and Georgia. Maintenance, repairs, renovations.",
      },
      { name: "author", content: "Premier HD Pro" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Premier HD Pro — Commercial Contractor in Georgia" },
      {
        property: "og:description",
        content:
          "Warehouse maintenance, concrete floor repair, dock door repair, industrial HVAC, and renovations across Metro Atlanta.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
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
    </>
  );
}
