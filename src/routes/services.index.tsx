import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { services } from "../data/services";
import { PageHeader } from "../components/PageHeader";
import { CtaBand } from "../components/CtaBand";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Commercial Facility Services in Georgia | Premier HD Pro" },
      { name: "description", content: "Warehouse maintenance, concrete floor repair, dock door repair, industrial HVAC, renovations, and safety barriers across Metro Atlanta and Georgia." },
      { property: "og:title", content: "Commercial Facility Services in Georgia" },
      { property: "og:description", content: "Industrial and commercial contractor services for warehouses and distribution centers in Georgia." },
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  const construction = services.filter((s) => s.category === "construction");
  const facility = services.filter((s) => s.category === "facility");
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Commercial & industrial contractor services across Georgia"
        subtitle="Maintenance, repairs, and renovations built around active warehouse and distribution center operations."
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Services" }]}
      />
      <section className="section-pad">
        <div className="container-pro space-y-16">
          <ServiceCategory
            eyebrow="Commercial Construction"
            title="Build, renovate, and expand industrial facilities"
            description="Ground-up scopes, tenant improvements, and structural work delivered inside active warehouses and distribution centers."
            items={construction}
          />
          <ServiceCategory
            eyebrow="Facility Services"
            title="Keep operations running with on-call facility support"
            description="Repairs, upgrades, and preventative programs that minimize downtime across your portfolio."
            items={facility}
          />
        </div>
      </section>
      <CtaBand />
    </>
  );
}

function ServiceCategory({
  eyebrow,
  title,
  description,
  items,
}: {
  eyebrow: string;
  title: string;
  description: string;
  items: typeof services;
}) {
  return (
    <div>
      <div className="mb-8 max-w-3xl border-l-4 border-primary pl-5">
        <div className="text-xs font-bold uppercase tracking-[0.18em] text-primary">{eyebrow}</div>
        <h2 className="mt-2 text-3xl font-bold md:text-4xl">{title}</h2>
        <p className="mt-3 text-muted-foreground">{description}</p>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {items.map((s) => {
          const Icon = s.icon;
          return (
            <Link
              key={s.slug}
              to="/services/$slug" params={{ slug: s.slug }}
              className="group rounded-lg border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded bg-accent text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                View service <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
