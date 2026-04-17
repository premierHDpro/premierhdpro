import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Truck,
  Building2,
  Factory,
  Warehouse,
} from "lucide-react";
import heroImg from "../assets/hero-warehouse.jpg";
import { services } from "../data/services";
import { CtaBand } from "../components/CtaBand";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Premier HD Pro — Commercial Contractor for Warehouses & Distribution Centers in Georgia" },
      {
        name: "description",
        content:
          "Commercial facility repairs, maintenance, and renovations for warehouses and distribution centers across Metro Atlanta and Georgia. Fast response, minimal downtime.",
      },
      { property: "og:title", content: "Premier HD Pro — Commercial Contractor in Georgia" },
      {
        property: "og:description",
        content:
          "Helping facility managers across Georgia reduce downtime, fix problems fast, and keep operations running.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <img
          src={heroImg}
          alt="Industrial warehouse with loading dock doors"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/40" />
        <div className="container-pro relative py-20 md:py-32">
          <div className="max-w-3xl">
            <div className="eyebrow">Commercial General Contractor · Georgia</div>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Commercial Facility Repairs & Maintenance for Warehouses and Distribution Centers
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-primary-foreground/80 md:text-xl">
              Helping facility managers across Georgia reduce downtime, fix problems fast,
              and keep operations running.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">
                Request a Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="btn-ghost-light">
                Schedule a Site Walk
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-primary-foreground/70">
              <Stat label="Avg. response" value="< 24 hrs" />
              <Stat label="Service area" value="Metro Atlanta + GA" />
              <Stat label="Specialty" value="Active industrial facilities" />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-pad">
        <div className="container-pro">
          <div className="mb-12 max-w-2xl">
            <div className="eyebrow">What We Do</div>
            <h2 className="text-3xl font-bold md:text-4xl">
              Specialized services for industrial and commercial facilities
            </h2>
            <p className="mt-4 text-muted-foreground">
              From dock doors to concrete floors to phased renovations — built around active
              warehouse operations and forklift traffic.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.slug}
                  to={s.to}
                  className="group flex flex-col rounded-lg border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-lg"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded bg-accent text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.short}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="section-pad bg-accent/40">
        <div className="container-pro grid gap-12 lg:grid-cols-2">
          <div>
            <div className="eyebrow">Who We Serve</div>
            <h2 className="text-3xl font-bold md:text-4xl">
              Built for high-traffic, active industrial environments
            </h2>
            <p className="mt-4 text-muted-foreground">
              Our crews are trained to work safely around forklift traffic, phase work
              around shipping schedules, and hand off clean spaces back to operations
              every shift. We minimize downtime so your facility never stops moving.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                { icon: Warehouse, label: "Distribution Centers" },
                { icon: Truck, label: "Warehouses" },
                { icon: Factory, label: "Industrial Facilities" },
                { icon: Building2, label: "Manufacturing Buildings" },
              ].map((it) => (
                <div key={it.label} className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
                  <it.icon className="h-5 w-5 text-safety" />
                  <span className="text-sm font-semibold">{it.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="eyebrow">Problems We Solve</div>
            <h2 className="text-3xl font-bold md:text-4xl">Fix the issues that actually slow operations down</h2>
            <ul className="mt-6 space-y-3">
              {[
                "Cracked or failing concrete floors",
                "Broken dock doors or entry systems",
                "HVAC not keeping up with large spaces",
                "Safety issues and compliance risks",
                "Facility upgrades without shutting down operations",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3 rounded-md border border-border bg-card p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-safety" />
                  <span className="text-sm font-medium">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="section-pad">
        <div className="container-pro">
          <div className="mb-12 max-w-2xl">
            <div className="eyebrow">Why Premier HD Pro</div>
            <h2 className="text-3xl font-bold md:text-4xl">
              A contractor your operations team can actually rely on
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Factory, title: "Active facility experience", body: "We work around forklifts, conveyors, and 24/7 shipping schedules — not in empty buildings." },
              { icon: Clock, title: "Fast response times", body: "Quick site walks and rapid quotes. We respond when downtime is on the line." },
              { icon: ShieldCheck, title: "Phased work, no shutdowns", body: "We sequence renovations and repairs so your facility keeps shipping." },
              { icon: CheckCircle2, title: "Long-term partner", body: "Built for ongoing maintenance — not one-off jobs and disappear." },
              { icon: Truck, title: "Metro Atlanta coverage", body: "Atlanta, McDonough, Locust Grove, Henry County, and surrounding areas." },
              { icon: Building2, title: "Commercial-grade work", body: "Industrial materials, code compliance, real warranties." },
            ].map((it) => (
              <div key={it.title} className="rounded-lg border border-border bg-card p-6">
                <it.icon className="h-6 w-6 text-safety" />
                <h3 className="mt-4 text-lg font-bold">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{it.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects placeholder */}
      <section className="section-pad bg-accent/40">
        <div className="container-pro">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="eyebrow">Recent Projects</div>
              <h2 className="text-3xl font-bold md:text-4xl">Work across Metro Atlanta facilities</h2>
            </div>
            <Link to="/contact" className="btn-outline">Discuss your project</Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { t: "Dock Door Overhaul", c: "350,000 sq. ft. distribution center · McDonough, GA", tag: "Doors & Docks" },
              { t: "Phased Concrete Joint Repair", c: "Active 24/7 fulfillment center · Henry County", tag: "Concrete" },
              { t: "HVAC Rooftop Replacement", c: "Multi-tenant industrial building · Atlanta, GA", tag: "HVAC" },
            ].map((p) => (
              <div key={p.t} className="overflow-hidden rounded-lg border border-border bg-card">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary to-steel" />
                <div className="p-5">
                  <div className="text-xs font-semibold uppercase tracking-wider text-safety">{p.tag}</div>
                  <h3 className="mt-1 text-lg font-bold">{p.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.c}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-widest text-primary-foreground/50">{label}</div>
      <div className="text-base font-bold">{value}</div>
    </div>
  );
}
