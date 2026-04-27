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
  MapPin,
  Wrench,
  Hammer,
} from "lucide-react";
import heroImg from "../assets/hero-warehouse.jpg";
import projectDockDoors from "../assets/project-dock-doors.jpg";
import projectConcrete from "../assets/project-concrete.jpg";
import projectHvac from "../assets/project-hvac.jpg";
import projectRenovation from "../assets/project-renovation.jpg";
import { services } from "../data/services";
import { CtaBand } from "../components/CtaBand";
import { ContactForm } from "../components/ContactForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Premier HD Pro — Commercial Contractor for Warehouses & Distribution Centers in Georgia" },
      {
        name: "description",
        content:
          "Warehouse maintenance services Georgia. Commercial contractor Atlanta serving distribution centers, warehouses, and industrial facilities. Fast response, minimal downtime.",
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

const featuredArticles = [
  {
    slug: "cost-to-repair-concrete-floors-warehouse",
    title: "Cost to Repair Concrete Floors in a Warehouse",
    desc: "Breakdown of repair costs, causes, and what impacts pricing.",
    service: { to: "/concrete-floor-repair-atlanta", label: "Concrete Floor Repair" },
  },
  {
    slug: "commercial-door-replacement-guide",
    title: "Warehouse Door Won't Close Properly — Causes & Fixes",
    desc: "Common issues with dock doors and what to check first.",
    service: { to: "/dock-door-repair-atlanta", label: "Door & Dock Repair" },
  },
  {
    slug: "hvac-issues-large-warehouses",
    title: "HVAC Not Cooling Warehouse — What Could Be Wrong",
    desc: "Why large facilities struggle with temperature control.",
    service: { to: "/industrial-hvac-repair-georgia", label: "Industrial HVAC" },
  },
  {
    slug: "preventative-maintenance-plan-facilities",
    title: "Preventative Maintenance Plan for Distribution Centers",
    desc: "How to reduce downtime and avoid costly repairs.",
    service: { to: "/warehouse-maintenance-services-georgia", label: "Warehouse Maintenance" },
  },
] as const;

function HomePage() {
  return (
    <>
      {/* SECTION 1 — HERO */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <img
          src={heroImg}
          alt="Industrial warehouse with loading dock doors in Georgia"
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
              and keep operations running without disruption.
            </p>
            <p className="mt-6 inline-flex items-center gap-3 border-y-2 border-safety/70 py-2 text-sm font-bold uppercase tracking-[0.25em] text-safety">
              <span>Built on Relationships</span>
              <span className="text-safety/50">◆</span>
              <span>Driven by Integrity</span>
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

      {/* TRUST BAR */}
      <section className="border-b border-border bg-card py-6">
        <div className="container-pro">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Trusted by 80+ Georgia warehouse, distribution, and industrial facilities
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm font-bold text-foreground/60">
            <span>3PL Distribution</span>
            <span>·</span>
            <span>Cold Storage</span>
            <span>·</span>
            <span>Manufacturing</span>
            <span>·</span>
            <span>Last-Mile Fulfillment</span>
            <span>·</span>
            <span>Industrial Property Mgmt</span>
          </div>
        </div>
      </section>

      {/* SECTION 2 — TRUST / POSITIONING */}
      <section className="section-pad">
        <div className="container-pro grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="eyebrow">Why Premier HD Pro</div>
            <h2 className="text-3xl font-bold md:text-4xl">
              Built for High-Traffic Industrial Facilities
            </h2>
            <p className="mt-4 text-muted-foreground">
              We work with distribution centers, warehouses, and industrial facilities
              that can't afford downtime. From urgent repairs to planned upgrades, our
              team understands how to work inside active environments without slowing
              operations.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {[
              { icon: Factory, label: "Experience with active warehouse environments" },
              { icon: Clock, label: "Work phased around your operations" },
              { icon: Wrench, label: "Fast response for urgent repairs" },
              { icon: MapPin, label: "Atlanta, McDonough, Locust Grove & more" },
            ].map((it) => (
              <li
                key={it.label}
                className="flex items-start gap-3 rounded-lg border border-border bg-card p-4"
              >
                <it.icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-safety" />
                <span className="text-sm font-semibold">{it.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECTION 3 — SERVICES */}
      <section className="section-pad bg-accent/40">
        <div className="container-pro">
          <div className="mb-12 max-w-2xl">
            <div className="eyebrow">What We Do</div>
            <h2 className="text-3xl font-bold md:text-4xl">
              Commercial & Industrial Services
            </h2>
            <p className="mt-4 text-muted-foreground">
              Six core services built around active warehouse operations and forklift
              traffic — from dock doors to concrete floors to phased renovations.
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

      {/* SECTION 4 — COMMON PROBLEMS */}
      <section className="section-pad">
        <div className="container-pro grid gap-12 lg:grid-cols-2">
          <div>
            <div className="eyebrow">Problems We Solve</div>
            <h2 className="text-3xl font-bold md:text-4xl">
              Common Facility Problems We Solve
            </h2>
            <p className="mt-4 text-muted-foreground">
              If you're dealing with any of these issues, we can help. We'll walk your
              facility, document the scope, and recommend the most cost-effective path
              forward.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">
                Get a Facility Assessment <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <ul className="space-y-3">
            {[
              "Cracked or failing warehouse concrete floors",
              "Dock doors not opening or closing properly",
              "HVAC systems not keeping up with large spaces",
              "Safety risks from missing or damaged barriers",
              "Facility upgrades needed without shutting down operations",
            ].map((p) => (
              <li
                key={p}
                className="flex items-start gap-3 rounded-md border border-border bg-card p-4"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-safety" />
                <span className="text-sm font-medium">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECTION 5 — FEATURED ARTICLES */}
      <section className="section-pad bg-accent/40">
        <div className="container-pro">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <div className="eyebrow">Insights</div>
              <h2 className="text-3xl font-bold md:text-4xl">Facility Maintenance Insights</h2>
              <p className="mt-3 text-muted-foreground">
                Helpful guides for warehouse and facility managers.
              </p>
            </div>
            <Link to="/blog" className="btn-outline">
              View all articles
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {featuredArticles.map((a) => (
              <article
                key={a.slug}
                className="flex flex-col rounded-lg border border-border bg-card p-6"
              >
                <h3 className="text-lg font-bold">
                  <Link
                    to="/blog/$slug"
                    params={{ slug: a.slug }}
                    className="hover:text-primary"
                  >
                    {a.title}
                  </Link>
                </h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{a.desc}</p>
                <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4 text-sm">
                  <Link
                    to="/blog/$slug"
                    params={{ slug: a.slug }}
                    className="inline-flex items-center gap-1 font-semibold text-primary"
                  >
                    Read article <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link to={a.service.to} className="text-muted-foreground hover:text-primary">
                    Related: <span className="font-semibold">{a.service.label}</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — WHY CHOOSE US */}
      <section className="section-pad">
        <div className="container-pro">
          <div className="mb-12 max-w-2xl">
            <div className="eyebrow">Why Choose Us</div>
            <h2 className="text-3xl font-bold md:text-4xl">
              Why Facility Managers Choose Premier HD Pro
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Factory,
                title: "Industrial facility experience",
                body: "Direct experience with distribution centers, warehouses, and manufacturing buildings.",
              },
              {
                icon: ShieldCheck,
                title: "Work in active environments",
                body: "We phase work around shipping schedules and forklift traffic — no shutdowns required.",
              },
              {
                icon: Clock,
                title: "Fast turnaround & reliable scheduling",
                body: "Quick site walks, written scopes, and crews that show up when they say they will.",
              },
              {
                icon: Wrench,
                title: "One contractor, multiple needs",
                body: "Concrete, doors, HVAC, renovations, safety — managed under a single point of contact.",
              },
              {
                icon: MapPin,
                title: "Metro Atlanta coverage",
                body: "Atlanta, McDonough, Locust Grove, Henry County, and surrounding Georgia areas.",
              },
              {
                icon: CheckCircle2,
                title: "Long-term partner",
                body: "Built for ongoing maintenance relationships — not one-off jobs and disappear.",
              },
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

      {/* SECTION 7 — RECENT PROJECTS */}
      <section className="section-pad bg-accent/40">
        <div className="container-pro">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="eyebrow">Recent Projects</div>
              <h2 className="text-3xl font-bold md:text-4xl">Work across Metro Atlanta facilities</h2>
            </div>
            <Link to="/contact" className="btn-outline">
              Discuss your project
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                t: "Dock Door Overhaul",
                c: "350,000 sq. ft. distribution center · McDonough, GA",
                tag: "Doors & Docks",
                value: "$85,000",
                img: projectDockDoors,
              },
              {
                t: "Phased Concrete Joint Repair",
                c: "Active 24/7 fulfillment center · Henry County",
                tag: "Concrete",
                value: "$42,000",
                img: projectConcrete,
              },
              {
                t: "HVAC Rooftop Replacement",
                c: "Multi-tenant industrial building · Atlanta, GA",
                tag: "HVAC",
                value: "$118,000",
                img: projectHvac,
              },
              {
                t: "Distribution Center Office Buildout",
                c: "Phased renovation · Locust Grove, GA",
                tag: "Renovation",
                value: "$170,000",
                img: projectRenovation,
              },
            ].map((p) => (
              <div key={p.t} className="group overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={p.img}
                    alt={`${p.t} — ${p.c}`}
                    width={1280}
                    height={960}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute right-3 top-3 rounded bg-background/95 px-2 py-1 text-xs font-bold text-primary shadow">
                    {p.value}
                  </div>
                </div>
                <div className="p-5">
                  <div className="text-xs font-semibold uppercase tracking-wider text-safety">
                    {p.tag}
                  </div>
                  <h3 className="mt-1 text-lg font-bold">{p.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.c}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="section-pad">
        <div className="container-pro">
          <div className="mb-12 max-w-2xl">
            <div className="eyebrow">Who We Serve</div>
            <h2 className="text-3xl font-bold md:text-4xl">Built for industrial operations</h2>
            <p className="mt-4 text-muted-foreground">
              We work alongside the people responsible for keeping facilities running every day.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { icon: Warehouse, t: "Distribution Centers" },
              { icon: Truck, t: "Warehouses" },
              { icon: Factory, t: "Manufacturing Plants" },
              { icon: Wrench, t: "Facility Managers" },
              { icon: Building2, t: "Property Managers" },
            ].map((w) => (
              <div key={w.t} className="flex flex-col items-center rounded-lg border border-border bg-card p-6 text-center transition-colors hover:border-primary">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-primary">
                  <w.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-sm font-bold">{w.t}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-pad bg-accent/40">
        <div className="container-pro">
          <div className="mb-12 max-w-2xl">
            <div className="eyebrow">What Clients Say</div>
            <h2 className="text-3xl font-bold md:text-4xl">Trusted by Georgia facility teams</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { q: "They scoped, repaired, and were out before second shift started. No interruptions to outbound shipping.", n: "Mark D.", r: "Operations Manager, 3PL Distribution Center" },
              { q: "We've used Premier HD Pro for ongoing concrete and dock work for two years. Always responsive, always clean work.", n: "Tracey W.", r: "Facility Manager, Manufacturing Plant" },
              { q: "Phased the rooftop HVAC swap around our peak. Zero downtime, on schedule, on budget.", n: "Brian R.", r: "Property Manager, Industrial Park" },
            ].map((t) => (
              <figure key={t.n} className="flex flex-col rounded-lg border border-border bg-card p-6">
                <blockquote className="flex-1 text-sm leading-relaxed text-foreground/85">"{t.q}"</blockquote>
                <figcaption className="mt-4 border-t border-border pt-4 text-xs">
                  <div className="font-bold">{t.n}</div>
                  <div className="text-muted-foreground">{t.r}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad">
        <div className="container-pro grid gap-12 lg:grid-cols-3">
          <div>
            <div className="eyebrow">FAQ</div>
            <h2 className="text-3xl font-bold md:text-4xl">Common questions from facility managers</h2>
            <p className="mt-4 text-muted-foreground">
              If you don't see your question here, call us at{" "}
              <a href="tel:+14705550100" className="font-semibold text-foreground">(470) 555-0100</a>.
            </p>
          </div>
          <div className="lg:col-span-2 space-y-4">
            {[
              { q: "Are you licensed and insured?", a: "Yes — we carry full general liability and workers' compensation coverage. Certificates available on request before any site walk." },
              { q: "How fast can you respond to an urgent issue?", a: "For active service area accounts, we target same-day or next-business-day site walks for urgent dock door, HVAC, or safety issues." },
              { q: "Can you work nights, weekends, or around active shifts?", a: "Yes. Most of our warehouse work is phased around shipping schedules, second shift, or weekend windows to avoid disrupting operations." },
              { q: "Do you offer ongoing maintenance contracts?", a: "Yes. Many of our distribution and manufacturing clients run on monthly or quarterly preventative maintenance plans covering concrete, doors, HVAC, and safety inspections." },
            ].map((f) => (
              <details key={f.q} className="group rounded-lg border border-border bg-card p-5 open:shadow-md">
                <summary className="flex cursor-pointer items-center justify-between font-semibold">
                  {f.q}
                  <span className="text-primary transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* INLINE LEAD FORM */}
      <section className="section-pad bg-primary text-primary-foreground">
        <div className="container-pro grid gap-10 lg:grid-cols-2">
          <div>
            <div className="eyebrow !text-safety">Request a Quote</div>
            <h2 className="text-3xl font-bold md:text-4xl">Tell us about your facility</h2>
            <p className="mt-4 max-w-md text-primary-foreground/80">
              Send us a few details and we'll respond within one business day to schedule a site walk
              or facility assessment — no obligation.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-primary-foreground/80">
              {["Same-day quotes for active accounts","Walk-throughs at no cost","Written scope with line-item pricing"].map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-safety" /> {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg bg-background p-6 text-foreground shadow-xl md:p-8">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* SECTION 8 — FINAL CTA */}
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

