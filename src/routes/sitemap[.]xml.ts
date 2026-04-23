import { createFileRoute } from "@tanstack/react-router";
import { posts } from "../data/posts";

const SITE = "https://premier-facility-pros.lovable.app";

const STATIC_PATHS = [
  "/",
  "/services",
  "/contact",
  "/blog",
  "/locations/atlanta",
  "/locations/mcdonough",
  "/locations/locust-grove",
  "/locations/henry-county",
  "/concrete-floor-repair-atlanta",
  "/concrete-floor-repair-mcdonough",
  "/dock-door-repair-atlanta",
  "/warehouse-hvac-repair-atlanta",
  "/industrial-hvac-repair-georgia",
  "/warehouse-maintenance-atlanta",
  "/warehouse-maintenance-mcdonough",
  "/warehouse-maintenance-services-georgia",
  "/warehouse-services-locust-grove",
  "/warehouse-safety-installation-atlanta",
  "/commercial-renovations-atlanta",
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const today = new Date().toISOString().slice(0, 10);
        const urls = [
          ...STATIC_PATHS.map(
            (p) =>
              `<url><loc>${SITE}${p}</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq></url>`,
          ),
          ...posts.map(
            (p) =>
              `<url><loc>${SITE}/blog/${p.slug}</loc><lastmod>${p.date}</lastmod><changefreq>monthly</changefreq></url>`,
          ),
        ].join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml" },
        });
      },
    },
  },
});