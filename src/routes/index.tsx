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
  HardHat,
  Users,
  Layers,
  Zap,
} from "lucide-react";
import constructionHero from "../assets/construction-hero.jpg";
import projectConcrete from "../assets/project-concrete.jpg";
import projectDockDoors from "../assets/project-dock-doors.jpg";
import projectHvac from "../assets/project-hvac.jpg";
import hvacRooftop from "../assets/brp-hvac-rooftop.jpg.asset.json";
import brpConcreteBefore from "../assets/brp-concrete-repair-before.jpg.asset.json";
import brpConcreteAfter from "../assets/brp-concrete-repair-after.jpg.asset.json";
import tiBreakroom from "../assets/ti-breakroom.jpg.asset.json";
import tiOffice from "../assets/ti-office.jpg.asset.json";
import brpRackingAisle from "../assets/brp-racking-aisle.jpg.asset.json";
import brpRackingProtectors from "../assets/brp-racking-protectors.jpg.asset.json";
import { services } from "../data/services";
import { projects as allProjects } from "../data/projects";
import { CtaBand } from "../components/CtaBand";
import { ContactForm } from "../components/ContactForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Commercial Construction & Facility Solutions | Premier HD Pro" },
      {
        name: "description",
        content:
          "Premier HD Pro delivers commercial construction, warehouse renovations, tenant improvements, and facility services across Metro Atlanta and Georgia.",
      },
      { property: "og:title", content: "Commercial Construction & Facility Solutions | Premier HD Pro" },
      {
        property: "og:description",
        content:
          "Industrial and commercial GC for warehouses, distribution centers, and active facilities — renovations, buildouts, and ongoing facility services.",
      },
      { property: "og:url", content: "https://premierhdpro.com/" },
    ],
    links: [
      { rel: "canonical", href: "https://premierhdpro.com/" },
      { rel: "preload", as: "image", href: constructionHero, fetchpriority: "high" },
    ],
  }),
  component: HomePage,
});

const projects = [
  {
    title: "Warehouse Rooftop HVAC Replacement",
    type: "Industrial HVAC",
    scope:
      "Replaced and commissioned multiple rooftop package units (RTUs) serving an active warehouse — new curbs, gas, electrical disconnects, and controls tied back in.",
    challenge: "Crane picks and tie-ins scheduled around production so conditioned zones never went offline during business hours.",
    img: hvacRooftop.url,
  },
  {
    title: "Warehouse Concrete Repairs",
    type: "Industrial Concrete",
    scope:
      "Cracked slab repair between storage racks on an active forklift aisle at BRP — saw-cut, rebar tied, and re-poured flush with the surrounding floor.",
    challenge:
      "Worked around live forklift traffic and pick operations; staged demo and pour so the aisle reopened on schedule.",
    img: projectConcrete,
    before: brpConcreteBefore.url,
    after: brpConcreteAfter.url,
  },
  {
    title: "Commercial Tenant Improvement",
    type: "TI Buildout",
    scope:
      "Interior tenant improvement including a new breakroom with upper and lower cabinets, full electrical rough-in, and an office suite finished with polished concrete, fresh paint, ceiling grid, and new carpet tile.",
    challenge: "Coordinated trades around a live tenant move-in deadline.",
    img: tiOffice.url,
    splitA: tiBreakroom.url,
    splitB: tiOffice.url,
    labelA: "Breakroom",
    labelB: "Office",
  },
  {
    title: "Dock & Facility Upgrades",
    type: "Facility Services",
    scope:
      "New pallet racking, column protectors, and end-of-aisle guards installed at BRP — staged through live pick aisles without shutting down operations.",
    challenge: "Completed aisle-by-aisle around active forklift traffic to protect daily inbound and outbound flow.",
    img: brpRackingAisle.url,
    splitA: brpRackingAisle.url,
    splitB: brpRackingProtectors.url,
    labelA: "Aisle",
    labelB: "End Guards",
  },
] as const;

const recentProjects = allProjects.slice(0, 3);

const industries = [
  { icon: Warehouse, t: "Warehouses" },
  { icon: Truck, t: "Distribution Centers" },
  { icon: Factory, t: "Manufacturing Facilities" },
  { icon: Layers, t: "Logistics Facilities" },
  { icon: Building2, t: "Commercial Buildings" },
  { icon: HardHat, t: "Industrial Properties" },
] as const;

function HomePage() {
  const construction = services.filter((s) => s.category === "construction");
  const facility = services.filter((s) => s.category === "facility");
  return (
    <>
      {/* SECTION 1 — HERO */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <img
          src={constructionHero}
          alt="Active commercial construction site inside a large warehouse — steel framing and concrete work"
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/30" />
        <div className="container-pro relative py-24 md:py-40">
          <div className="max-w-3xl">
            <div className="eyebrow">Industrial / Commercial General Contractor · Georgia</div>
            <h1 className="text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              Commercial Construction & Facility Solutions for Industrial Properties
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-primary-foreground/85 md:text-xl">
              Premier HD Pro helps warehouse, industrial, and commercial facilities complete
              renovations, upgrades, repairs, and construction projects with minimal
              operational disruption.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">
                Request a Site Walk <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="btn-ghost-light">
                Get a Fast Quote
              </Link>
            </div>
            <p className="mt-10 text-sm uppercase tracking-widest text-primary-foreground/65">
              Serving warehouses, distribution centers, and commercial facilities across Georgia
            </p>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-border bg-card">
        <div className="container-pro grid grid-cols-2 gap-px overflow-hidden border-x border-border bg-border md:grid-cols-3 lg:grid-cols-6">
          {[
            { icon: Clock, label: "Fast Turnaround" },
            { icon: Factory, label: "Active Facility Experience" },
            { icon: HardHat, label: "Commercial Construction" },
            { icon: Warehouse, label: "Industrial Facility Expertise" },
            { icon: ShieldCheck, label: "Safety Focused" },
            { icon: Users, label: "Multi-Trade Coordination" },
          ].map((it) => (
            <div key={it.label} className="flex items-center gap-3 bg-card px-5 py-6">
              <it.icon className="h-5 w-5 flex-shrink-0 text-signal" />
              <span className="text-xs font-bold uppercase tracking-wide">{it.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="section-pad">
        <div className="container-pro max-w-3xl">
          <div>
            <div className="eyebrow">About Premier HD Pro</div>
            <h2 className="text-3xl font-bold leading-tight md:text-5xl">
              Built Around Operational Facilities
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                Premier HD Pro specializes in commercial construction and facility solutions for
                warehouses, industrial properties, and active commercial environments.
              </p>
              <p>
                We understand the challenges of working inside operational facilities and help
                clients complete projects while minimizing downtime and disruption.
              </p>
              <p>
                From renovations and buildouts to ongoing facility upgrades and repairs, our team
                supports projects with speed, coordination, and execution-focused planning.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">
                Talk to Our Team <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/services" className="btn-outline">
                Explore Capabilities
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* RECENT PROJECTS */}
      <section className="section-pad bg-accent/40">
        <div className="container-pro">
          <div className="mb-10 max-w-2xl">
            <div className="eyebrow">Recent Projects</div>
            <h2 className="text-3xl font-bold leading-tight md:text-5xl">
              A look at recent work
            </h2>
            <p className="mt-4 text-muted-foreground">
              Buildouts, floors, and renovations recently delivered for commercial and industrial
              clients across Georgia.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {recentProjects.map((p) => (
              <Link
                key={p.title}
                to="/services/$slug"
                params={{ slug: p.slug }}
                className="group block overflow-hidden border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary hover:shadow-lg"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                    {p.type}
                  </div>
                  <h3 className="mt-2 text-lg font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.blurb}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    View service <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link to="/projects" className="btn-outline">
              View all projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES — TWO CATEGORIES */}
      <section className="section-pad bg-accent/40">
        <div className="container-pro">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="eyebrow">Capabilities</div>
              <h2 className="text-3xl font-bold leading-tight md:text-5xl">
                Commercial Construction & Facility Services
              </h2>
              <p className="mt-4 text-muted-foreground">
                A single contractor for commercial buildouts and the ongoing facility work that
                keeps industrial operations running.
              </p>
            </div>
          </div>

          <div>
            <div className="mb-6 flex items-baseline justify-between border-b border-border pb-3">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-signal">01 — Commercial Construction</div>
                <h3 className="mt-2 text-xl font-bold md:text-2xl">Warehouse, Industrial & Commercial Construction</h3>
              </div>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                {construction.length} services
              </span>
            </div>
            <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {construction.map((s) => {
                const Icon = s.icon;
                return (
                  <Link
                    key={s.slug}
                    to="/services/$slug" params={{ slug: s.slug }}
                    className="group flex flex-col bg-card p-6 transition-colors hover:bg-accent/50"
                  >
                    <Icon className="h-6 w-6 text-signal" />
                    <h4 className="mt-4 text-base font-bold leading-tight">{s.title}</h4>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.short}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-signal">
                      Learn more <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="mt-16">
            <div className="mb-6 flex items-baseline justify-between border-b border-border pb-3">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-signal">02 — Facility Services</div>
                <h3 className="mt-2 text-xl font-bold md:text-2xl">Ongoing Repairs, Upgrades & Operational Support</h3>
              </div>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                {facility.length} services
              </span>
            </div>
            <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
              {facility.map((s) => {
                const Icon = s.icon;
                return (
                  <Link
                    key={s.slug}
                    to="/services/$slug" params={{ slug: s.slug }}
                    className="group flex flex-col bg-card p-6 transition-colors hover:bg-accent/50"
                  >
                    <Icon className="h-6 w-6 text-signal" />
                    <h4 className="mt-4 text-base font-bold leading-tight">{s.title}</h4>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.short}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-signal">
                      Learn more <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section-pad">
        <div className="container-pro">
          <div className="mb-12 max-w-2xl">
            <div className="eyebrow">Featured Projects</div>
            <h2 className="text-3xl font-bold leading-tight md:text-5xl">
              Built Inside Operating Facilities
            </h2>
            <p className="mt-4 text-muted-foreground">
              Selected projects delivered for warehouse, distribution, and commercial clients
              across Georgia.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p) => (
              <article key={p.title} className="group flex flex-col overflow-hidden border border-border bg-card">
                {"before" in p && p.before && p.after ? (
                  <div className="relative grid h-56 grid-cols-2 gap-px overflow-hidden bg-border">
                    <div className="relative overflow-hidden bg-ink">
                      <img
                        src={p.before}
                        alt={`${p.title} — before`}
                        className="h-full w-full object-cover opacity-90 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                        loading="lazy"
                        width={800}
                        height={800}
                      />
                      <div className="absolute bottom-2 left-2 bg-ink/85 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
                        Before
                      </div>
                    </div>
                    <div className="relative overflow-hidden bg-ink">
                      <img
                        src={p.after}
                        alt={`${p.title} — after`}
                        className="h-full w-full object-cover opacity-90 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                        loading="lazy"
                        width={800}
                        height={800}
                      />
                      <div className="absolute bottom-2 left-2 bg-signal px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-signal-foreground">
                        After
                      </div>
                    </div>
                    <div className="absolute left-4 top-4 bg-signal px-3 py-1 text-xs font-bold uppercase tracking-wider text-signal-foreground">
                      {p.type}
                    </div>
                  </div>
                ) : "splitA" in p && p.splitA && p.splitB ? (
                  <div className="relative grid h-56 grid-cols-2 gap-px overflow-hidden bg-border">
                    <div className="relative overflow-hidden bg-ink">
                      <img
                        src={p.splitA}
                        alt={`${p.title} — ${p.labelA}`}
                        className="h-full w-full object-cover opacity-90 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                        loading="lazy"
                        width={800}
                        height={800}
                      />
                      <div className="absolute bottom-2 left-2 bg-ink/85 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
                        {p.labelA}
                      </div>
                    </div>
                    <div className="relative overflow-hidden bg-ink">
                      <img
                        src={p.splitB}
                        alt={`${p.title} — ${p.labelB}`}
                        className="h-full w-full object-cover opacity-90 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                        loading="lazy"
                        width={800}
                        height={800}
                      />
                      <div className="absolute bottom-2 left-2 bg-ink/85 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
                        {p.labelB}
                      </div>
                    </div>
                    <div className="absolute left-4 top-4 bg-signal px-3 py-1 text-xs font-bold uppercase tracking-wider text-signal-foreground">
                      {p.type}
                    </div>
                  </div>
                ) : (
                  <div className="relative h-56 overflow-hidden bg-ink">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="h-full w-full object-cover opacity-90 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                      loading="lazy"
                      width={1200}
                      height={800}
                    />
                    <div className="absolute left-4 top-4 bg-signal px-3 py-1 text-xs font-bold uppercase tracking-wider text-signal-foreground">
                      {p.type}
                    </div>
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold leading-tight">{p.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{p.scope}</p>
                  <div className="mt-4 border-t border-border pt-4">
                    <div className="text-xs font-bold uppercase tracking-widest text-signal">Operational Challenge</div>
                    <p className="mt-1 text-sm text-foreground/80">{p.challenge}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US — dark */}
      <section className="section-pad">
        <div className="container-pro">
          <div className="mb-12 max-w-3xl">
            <div className="eyebrow">Why Premier HD Pro</div>
            <h2 className="text-3xl font-bold leading-tight md:text-5xl">
              Why Facilities & Commercial Clients Choose Premier HD Pro
            </h2>
          </div>
          <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Clock, title: "Minimal Operational Disruption", body: "Work phased around shipping schedules, shifts, and forklift traffic — never a shutdown by default." },
              { icon: Zap, title: "Fast Response Times", body: "Same-day site walks for active accounts. Written scopes inside 48 hours on most projects." },
              { icon: Factory, title: "Industrial Facility Experience", body: "Years inside distribution centers, warehouses, and manufacturing buildings — not residential job sites." },
              { icon: Users, title: "Commercial Construction Coordination", body: "Multi-trade scopes managed under one point of contact, from concept through closeout." },
              { icon: ShieldCheck, title: "Safety & Execution Focused", body: "PPE, OSHA standards, and clean-as-you-build discipline on every site." },
              { icon: Layers, title: "Scalable Multi-Trade Support", body: "Concrete, framing, MEP, doors, finishes — scaled up or down to match project size." },
            ].map((it) => (
              <div key={it.title} className="flex flex-col gap-3 bg-card p-7">
                <it.icon className="h-6 w-6 text-signal" />
                <h3 className="text-lg font-bold leading-tight">{it.title}</h3>
                <p className="text-sm text-muted-foreground">{it.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section-pad">
        <div className="container-pro">
          <div className="mb-12 max-w-2xl">
            <div className="eyebrow">Industries Served</div>
            <h2 className="text-3xl font-bold leading-tight md:text-5xl">
              Built for Industrial & Commercial Operators
            </h2>
          </div>
          <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
            {industries.map((i) => (
              <div key={i.t} className="flex items-center gap-4 bg-card p-7">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center bg-primary text-primary-foreground">
                  <i.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold">{i.t}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* INSIGHTS / FAQ — combined slim section */}
      <section className="section-pad">
        <div className="container-pro grid gap-12 lg:grid-cols-3">
          <div>
            <div className="eyebrow">Common Questions</div>
            <h2 className="text-3xl font-bold leading-tight md:text-4xl">From facility managers & commercial clients</h2>
            <p className="mt-4 text-muted-foreground">
              Don't see your question? Call us at{" "}
              <a href="tel:+17706285444" className="font-semibold text-foreground">(770) 628-5444</a>.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/blog" className="btn-outline">
                Read Insights
              </Link>
            </div>
          </div>
          <div className="lg:col-span-2 space-y-4">
            {[
              { q: "Are you licensed and insured?", a: "Yes — we carry full general liability and workers' compensation coverage. Certificates available on request before any site walk." },
              { q: "Do you self-perform construction work?", a: "We self-perform core trades — concrete, framing, doors, drywall — and coordinate specialty subs for MEP, roofing, and specialty finishes under a single point of contact." },
              { q: "Can you work nights, weekends, or around active shifts?", a: "Yes. Most of our warehouse work is phased around shipping schedules, second shift, or weekend windows to avoid disrupting operations." },
              { q: "Do you handle both construction and ongoing facility services?", a: "Yes — many clients use us first for a renovation or TI buildout and then for ongoing facility services like dock repairs, lighting, safety, and preventative maintenance." },
            ].map((f) => (
              <details key={f.q} className="group border border-border bg-card p-5 open:shadow-md">
                <summary className="flex cursor-pointer items-center justify-between font-semibold">
                  {f.q}
                  <span className="text-signal transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA — dark band */}
      <section className="section-pad bg-primary text-primary-foreground">
        <div className="container-pro grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <div className="eyebrow">Let's Talk</div>
            <h2 className="text-3xl font-bold leading-tight md:text-5xl">
              Need a Commercial Construction Partner That Understands Operational Facilities?
            </h2>
            <p className="mt-5 max-w-xl text-lg text-primary-foreground/80">
              Talk with Premier HD Pro about renovations, upgrades, repairs, and industrial
              construction projects.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
            <Link to="/contact" className="btn-primary w-full justify-center sm:w-auto lg:w-72">
              Schedule a Walkthrough <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="btn-ghost-light w-full justify-center sm:w-auto lg:w-72">
              Request Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section-pad">
        <div className="container-pro grid gap-10 lg:grid-cols-2">
          <div>
            <div className="eyebrow">Contact</div>
            <h2 className="text-3xl font-bold leading-tight md:text-5xl">Tell us about your project</h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Send us a few details on your facility, scope, and timeline. Typical response time
              within 1 business day.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-foreground/80">
              {[
                "On-site walkthroughs at no cost",
                "Written scope with line-item pricing",
                "Same-day response for active accounts",
              ].map((p) => (
                <li key={p} className="flex items-start gap-2 border-b border-border pb-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-signal" /> {p}
                </li>
              ))}
            </ul>
            <div className="mt-8 border-l-2 border-signal pl-4">
              <div className="text-xs font-bold uppercase tracking-widest text-signal">Direct line</div>
              <a href="tel:+17706285444" className="mt-1 block text-2xl font-bold">(770) 628-5444</a>
            </div>
          </div>
          <div className="border border-border bg-card p-6 md:p-8">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FOOTER CTA band (kept) */}
      <CtaBand />
    </>
  );
}



