import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, MapPin, AlertTriangle } from "lucide-react";
import { PageHeader } from "../components/PageHeader";
import { CtaBand } from "../components/CtaBand";
import { ContactForm } from "../components/ContactForm";
import { services } from "../data/services";
import ogImg from "../assets/og-atlanta.jpg";
import atlantaSkyline from "../assets/atlanta-skyline.webp";

export const Route = createFileRoute("/locations/atlanta")({
  head: () => ({
    meta: [
      { title: "Commercial Contractor in Atlanta, GA | Premier HD Pro" },
      { name: "description", content: "Commercial contractor serving large warehouses and distribution centers across Metro Atlanta. Maintenance, repairs, and renovations for high-volume industrial facilities." },
      { property: "og:title", content: "Commercial Contractor in Atlanta, GA" },
      { property: "og:description", content: "Industrial contractor for Metro Atlanta distribution centers, fulfillment hubs, and large warehouse facilities." },
      { property: "og:image", content: ogImg },
      { name: "twitter:image", content: ogImg },
    ],
  }),
  component: AtlantaLocation,
});

const nearby = ["Atlanta", "South Atlanta", "Forest Park", "College Park", "East Point", "Hapeville", "Union City", "Fulton County", "DeKalb County", "Clayton County"];

const problems = [
  "Concrete slab failure under constant forklift and pallet jack traffic in high-volume DCs",
  "Dock doors and levelers breaking down in 24/7 fulfillment operations",
  "HVAC and make-up air systems struggling to keep up in million-square-foot buildings",
  "Phased renovations needed in occupied facilities without disrupting outbound shipping",
];

function AtlantaLocation() {
  return (
    <>
      <PageHeader
        eyebrow="Service Area"
        title="Commercial Contractor in Atlanta, GA"
        subtitle="Premier HD Pro serves large-scale warehouses, distribution centers, and industrial facilities across Metro Atlanta — from the I-285 perimeter down through the South Atlanta logistics corridor."
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Atlanta, GA" }]}
        backgroundImage={atlantaSkyline}
        backgroundAlt="Aerial view of the Atlanta skyline at golden hour"
      />

      <section className="section-pad">
        <div className="container-pro grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-2xl font-bold">Built for Atlanta's high-volume industrial market</h2>
              <p className="mt-4 text-foreground/85">
                Atlanta is one of the largest distribution and logistics markets in the United
                States. The combination of Hartsfield-Jackson, three interstate corridors
                (I-75, I-85, I-285), and the Port of Savannah's inland reach has made Metro
                Atlanta the warehouse and fulfillment capital of the Southeast. The buildings
                here are bigger, the throughput is higher, and the tolerance for downtime is
                close to zero.
              </p>
              <p className="mt-3 text-foreground/85">
                We work in active fulfillment centers, e-commerce distribution hubs, 3PL cross-docks,
                cold storage, and manufacturing plants throughout Metro Atlanta. Every project is
                built around your shift schedule, dock activity, and outbound commitments — because
                we know what a single down dock door costs in trailers per hour.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold">Services we deliver across Metro Atlanta</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {services.map((s) => (
                  <Link key={s.slug} to={s.to} className="rounded-md border border-border bg-card p-4 transition-colors hover:border-primary">
                    <div className="text-sm font-bold">{s.title}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{s.short}</div>
                  </Link>
                ))}
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Most Atlanta clients start with{" "}
                <Link to="/dock-door-repair-atlanta" className="font-semibold text-primary underline-offset-4 hover:underline">dock door repair solutions</Link>{" "}
                or our{" "}
                <Link to="/industrial-hvac-repair-georgia" className="font-semibold text-primary underline-offset-4 hover:underline">industrial HVAC services</Link>, then add on{" "}
                <Link to="/warehouse-maintenance-services-georgia" className="font-semibold text-primary underline-offset-4 hover:underline">warehouse maintenance programs</Link>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold">Common facility problems in Atlanta</h2>
              <ul className="mt-5 space-y-3">
                {problems.map((p) => (
                  <li key={p} className="flex items-start gap-3 rounded-md border border-border bg-card p-4">
                    <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-safety" />
                    <span className="text-sm text-foreground/85">{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold">Why Atlanta facility managers choose Premier HD Pro</h2>
              <ul className="mt-5 space-y-2">
                {[
                  "Deep experience with Class A distribution centers and high-throughput operations",
                  "Comfortable working alongside active dock and shipping schedules",
                  "Fast response across Metro Atlanta — typically same or next business day",
                  "Phased project planning so renovations and repairs don't shut down operations",
                  "One contractor across multiple trades — fewer vendors, cleaner schedules",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-safety" />
                    <span className="text-foreground/85">{i}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-muted-foreground">
                For pricing context, see our{" "}
                <Link to="/blog/$slug" params={{ slug: "cost-to-repair-concrete-floors-warehouse" }} className="font-semibold text-primary underline-offset-4 hover:underline">guide to warehouse concrete repair costs in Atlanta</Link>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold">Metro Atlanta areas we serve</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {nearby.map((c) => (
                  <span key={c} className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold">
                    <MapPin className="h-3 w-3 text-safety" /> {c}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
              <h3 className="text-lg font-bold">Request a quote</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                We respond within one business day to all Metro Atlanta inquiries.
              </p>
              <div className="mt-5">
                <ContactForm compact />
              </div>
            </div>
          </aside>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
