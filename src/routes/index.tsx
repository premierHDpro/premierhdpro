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
  HardHat,
  Users,
  Layers,
  Zap,
} from "lucide-react";
import heroImg from "../assets/hero-warehouse.jpg";
import constructionHero from "../assets/construction-hero.jpg";
import aboutImg from "../assets/project-renovation.jpg";
import projectConcrete from "../assets/project-concrete.jpg";
import projectDockDoors from "../assets/project-dock-doors.jpg";
import projectHvac from "../assets/project-hvac.jpg";
import projectRenovation from "../assets/project-renovation.jpg";
import { services } from "../data/services";
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
    title: "Distribution Center Renovation",
    type: "Phased Renovation",
    scope: "170,000 SF phased renovation completed in an active distribution warehouse.",
    challenge: "Maintained full outbound shipping operations throughout a six-month construction schedule.",
    img: projectRenovation,
  },
  {
    title: "Warehouse Concrete Repairs",
    type: "Industrial Concrete",
    scope: "Large-scale slab and joint repair across a high-traffic forklift floor.",
    challenge: "Sequenced pours so forklift routes stayed open and pick lines never paused.",
    img: projectConcrete,
  },
  {
    title: "Commercial Tenant Improvement",
    type: "TI Buildout",
    scope: "Interior office and operational buildout for a commercial facility expansion.",
    challenge: "Coordinated trades around a live tenant move-in deadline.",
    img: projectHvac,
  },
  {
    title: "Dock & Facility Upgrades",
    type: "Facility Services",
    scope: "Dock equipment, safety barriers, and lighting upgrades across an active DC.",
    challenge: "Completed dock-by-dock at night to protect daily inbound and outbound flow.",
    img: projectDockDoors,
  },
] as const;

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
        <div className="container-pro grid gap-12 lg:grid-cols-2 lg:items-center">
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
          <div className="grid grid-cols-2 gap-3">
            <img
              src={aboutImg}
              alt="Commercial interior construction inside an operational facility"
              className="col-span-2 h-64 w-full object-cover"
              loading="lazy"
              width={1200}
              height={800}
            />
            <img
              src={heroImg}
              alt="Warehouse exterior with loading docks"
              className="h-44 w-full object-cover"
              loading="lazy"
              width={800}
              height={600}
            />
            <img
              src={projectConcrete}
              alt="Industrial concrete floor work"
              className="h-44 w-full object-cover"
              loading="lazy"
              width={800}
              height={600}
            />
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

      {/* SERVICE AREA — dark map */}
      <section className="section-pad bg-primary text-primary-foreground relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, oklch(1 0 0 / 0.5) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="container-pro relative grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="eyebrow">Service Area</div>
            <h2 className="text-3xl font-bold leading-tight md:text-5xl">
              Serving Commercial & Industrial Clients Across Georgia
            </h2>
            <p className="mt-4 text-primary-foreground/75">
              From the I-75 industrial corridor through Metro Atlanta — we work where the
              warehouses, distribution centers, and manufacturing facilities are.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {["Atlanta", "McDonough", "Locust Grove", "Henry County", "Metro Atlanta", "I-75 Corridor"].map((c) => (
                <div key={c} className="flex items-center gap-2 border border-primary-foreground/15 bg-primary-foreground/5 px-4 py-3">
                  <MapPin className="h-4 w-4 text-signal" />
                  <span className="text-sm font-semibold">{c}</span>
                </div>
              ))}
            </div>
          </div>
          <GeorgiaMap />
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


