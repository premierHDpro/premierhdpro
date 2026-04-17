import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { services } from "../data/services";
import { PageHeader } from "../components/PageHeader";
import { CtaBand } from "../components/CtaBand";

export const Route = createFileRoute("/services")({
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
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Commercial & industrial contractor services across Georgia"
        subtitle="Maintenance, repairs, and renovations built around active warehouse and distribution center operations."
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Services" }]}
      />
      <section className="section-pad">
        <div className="container-pro grid gap-5 md:grid-cols-2">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <Link key={s.slug} to={s.to} className="group rounded-lg border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded bg-accent text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-bold">{s.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  View service <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
