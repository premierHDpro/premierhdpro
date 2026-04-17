import { Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { PageHeader } from "./PageHeader";
import { CtaBand } from "./CtaBand";
import { ContactForm } from "./ContactForm";
import { services } from "../data/services";

export type ServicePageProps = {
  slug: string;
  intro: string;
  offers: string[];
  issues: string[];
  process: { title: string; body: string }[];
};

export function ServicePage({ slug, intro, offers, issues, process }: ServicePageProps) {
  const svc = services.find((s) => s.slug === slug)!;
  const others = services.filter((s) => s.slug !== slug).slice(0, 3);
  return (
    <>
      <PageHeader
        eyebrow="Service"
        title={svc.title}
        subtitle={svc.short}
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/services" },
          { label: svc.title },
        ]}
      />

      <section className="section-pad">
        <div className="container-pro grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="text-lg leading-relaxed text-foreground/85">{intro}</p>

            <h2 className="mt-12 text-2xl font-bold">What we offer</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {offers.map((o) => (
                <li key={o} className="flex items-start gap-2 rounded-md border border-border bg-card p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-safety" />
                  <span className="text-sm font-medium">{o}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-12 text-2xl font-bold">Common issues we see</h2>
            <ul className="mt-5 space-y-2">
              {issues.map((i) => (
                <li key={i} className="flex items-start gap-2 text-foreground/85">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-safety" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-12 text-2xl font-bold">Our process</h2>
            <ol className="mt-5 space-y-4">
              {process.map((p, i) => (
                <li key={p.title} className="flex gap-4 rounded-md border border-border bg-card p-5">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded bg-primary font-bold text-primary-foreground">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-base font-bold">{p.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{p.body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-12 rounded-lg border border-border bg-accent/40 p-6">
              <h3 className="text-lg font-bold">Serving facilities across Metro Atlanta</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Premier HD Pro delivers {svc.title.toLowerCase()} for warehouses, distribution centers,
                and industrial buildings throughout Atlanta, McDonough, Locust Grove, Henry County,
                and surrounding Georgia communities.
              </p>
              <Link to="/locations/atlanta" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                See our Atlanta service area <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
              <h3 className="text-lg font-bold">Get a facility assessment</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Tell us about your facility — we'll respond within one business day.
              </p>
              <div className="mt-5">
                <ContactForm compact />
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-pad bg-accent/40">
        <div className="container-pro">
          <h2 className="text-2xl font-bold">Other commercial services</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {others.map((s) => {
              const Icon = s.icon;
              return (
                <Link key={s.slug} to={s.to} className="group rounded-lg border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary">
                  <Icon className="h-6 w-6 text-safety" />
                  <h3 className="mt-3 text-base font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
