import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, MapPin, AlertTriangle } from "lucide-react";
import { PageHeader } from "../components/PageHeader";
import { CtaBand } from "../components/CtaBand";
import { ContactForm } from "../components/ContactForm";
import { services } from "../data/services";

export const Route = createFileRoute("/locations/henry-county")({
  head: () => ({
    meta: [
      { title: "Commercial Contractor in Henry County, GA | Premier HD Pro" },
      { name: "description", content: "County-wide commercial contractor serving warehouses and industrial facilities across Henry County, GA — McDonough, Locust Grove, Stockbridge, and Hampton." },
      { property: "og:title", content: "Commercial Contractor in Henry County, GA" },
      { property: "og:description", content: "Industrial contractor serving warehouses, DCs, and manufacturing facilities throughout Henry County, GA." },
    ],
  }),
  component: HenryCountyLocation,
});

const nearby = ["McDonough", "Locust Grove", "Stockbridge", "Hampton", "Ola", "Henry County", "South Atlanta", "Butts County"];

const problems = [
  "Concrete wear, joint failure, and forklift damage in high-traffic distribution centers",
  "Dock doors and levelers failing in older industrial buildings throughout the county",
  "HVAC systems undersized or aging in large pre-engineered warehouses",
  "Multi-site facility owners needing a single contractor across cities and trades",
];

function HenryCountyLocation() {
  return (
    <>
      <PageHeader
        eyebrow="Regional Coverage"
        title="Commercial Contractor in Henry County, GA"
        subtitle="Premier HD Pro provides county-wide commercial and industrial contracting across Henry County — from McDonough and Stockbridge to Locust Grove and Hampton."
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Henry County, GA" }]}
      />

      <section className="section-pad">
        <div className="container-pro grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-2xl font-bold">County-wide service for Henry County industrial facilities</h2>
              <p className="mt-4 text-foreground/85">
                Henry County has grown into one of the most important industrial counties in
                Georgia. With the I-75 corridor running through it and major distribution
                clusters in McDonough, Locust Grove, Stockbridge, and Hampton, the county
                hosts everything from massive e-commerce fulfillment centers to mid-size
                manufacturing plants and last-mile delivery hubs.
              </p>
              <p className="mt-3 text-foreground/85">
                Our office is in Locust Grove, which puts us within a short drive of every
                major industrial park in the county. We work with single-site facility
                managers as well as multi-location owners who need one reliable contractor
                across several Henry County buildings — instead of juggling separate vendors
                in each city.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold">Services we provide across Henry County</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {services.map((s) => (
                  <Link key={s.slug} to={s.to} className="rounded-md border border-border bg-card p-4 transition-colors hover:border-primary">
                    <div className="text-sm font-bold">{s.title}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{s.short}</div>
                  </Link>
                ))}
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Multi-site owners often start with{" "}
                <Link to="/warehouse-maintenance-services-georgia" className="font-semibold text-primary underline-offset-4 hover:underline">warehouse maintenance programs</Link>{" "}
                covering several buildings, then add{" "}
                <Link to="/concrete-floor-repair-atlanta" className="font-semibold text-primary underline-offset-4 hover:underline">concrete floor repair services</Link>{" "}
                and{" "}
                <Link to="/commercial-renovations-atlanta" className="font-semibold text-primary underline-offset-4 hover:underline">commercial renovations and buildouts</Link>{" "}
                as needs come up.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold">Common facility problems in Henry County</h2>
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
              <h2 className="text-2xl font-bold">Why Henry County facility managers choose Premier HD Pro</h2>
              <ul className="mt-5 space-y-2">
                {[
                  "Locally based in Locust Grove — short drive to every city in the county",
                  "Experience across distribution centers, manufacturing, and flex industrial buildings",
                  "Comfortable managing multi-site programs across several Henry County facilities",
                  "All work phased around active operations and shipping commitments",
                  "One contractor for maintenance, repairs, safety upgrades, and renovations",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-safety" />
                    <span className="text-foreground/85">{i}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-muted-foreground">
                For more on what to expect cost-wise, see our{" "}
                <Link to="/blog/$slug" params={{ slug: "cost-to-repair-concrete-floors-warehouse" }} className="font-semibold text-primary underline-offset-4 hover:underline">warehouse concrete repair cost guide</Link>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold">Cities we serve in Henry County</h2>
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
                One contractor for every facility in Henry County.
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
