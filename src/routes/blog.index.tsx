import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock } from "lucide-react";
import { PageHeader } from "../components/PageHeader";
import { posts, type Post } from "../data/posts";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Facility Maintenance & Industrial Insights | Premier HD Pro Blog" },
      { name: "description", content: "Insights on warehouse maintenance, concrete floor repair, dock doors, industrial HVAC, and commercial renovations from Premier HD Pro." },
      { property: "og:title", content: "Facility Maintenance & Industrial Insights" },
      { property: "og:description", content: "Practical guidance for facility managers running warehouses and distribution centers in Georgia." },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const grouped = posts.reduce<Record<string, Post[]>>((acc, p) => {
    (acc[p.category] ||= []).push(p);
    return acc;
  }, {});
  const categoryOrder = ["Concrete", "Dock Doors", "HVAC", "Maintenance", "Renovations", "Authority"];
  const categories = Object.keys(grouped).sort(
    (a, b) => {
      const ai = categoryOrder.indexOf(a);
      const bi = categoryOrder.indexOf(b);
      return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
    },
  );

  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="Facility Maintenance & Industrial Insights"
        subtitle="Practical guidance for facility, operations, and property managers running warehouses and distribution centers."
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Insights" }]}
      />
      <section className="section-pad">
        <div className="container-pro">
          <nav className="mb-12 flex flex-wrap gap-2">
            {categories.map((c) => (
              <a
                key={c}
                href={`#${c.toLowerCase().replace(/\s+/g, "-")}`}
                className="rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:border-primary hover:text-primary"
              >
                {c} ({grouped[c].length})
              </a>
            ))}
          </nav>
          {categories.map((c) => (
            <div key={c} id={c.toLowerCase().replace(/\s+/g, "-")} className="mb-16 scroll-mt-24">
              <h2 className="mb-6 text-2xl font-bold md:text-3xl">{c}</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {grouped[c].map((p) => (
                  <Link
                    key={p.slug}
                    to="/blog/$slug"
                    params={{ slug: p.slug }}
                    className="group flex flex-col rounded-lg border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-lg"
                  >
                    <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider">
                      <span className="text-safety">{p.category}</span>
                      <span className="text-muted-foreground">·</span>
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="h-3 w-3" /> {p.readMin} min read
                      </span>
                    </div>
                    <h3 className="mt-3 text-xl font-bold">{p.title}</h3>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.description}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                      Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
