import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, MapPin, AlertTriangle } from "lucide-react";
import { PageHeader } from "../components/PageHeader";
import { CtaBand } from "../components/CtaBand";
import { ContactForm } from "../components/ContactForm";
import { services } from "../data/services";
import ogImg from "../assets/og-locust-grove.jpg";
import locustGroveImg from "../assets/locust-grove.jpg";

export const Route = createFileRoute("/locations/locust-grove")({
  head: () => ({
    meta: [
      { title: "Commercial Contractor in Locust Grove, GA | Premier HD Pro" },
      { name: "description", content: "Locally based commercial contractor in Locust Grove, GA serving warehouses, distribution centers, and industrial facilities across Henry County and South Atlanta." },
      { property: "og:title", content: "Commercial Contractor in Locust Grove, GA" },
      { property: "og:description", content: "Locust Grove–based industrial contractor for warehouses and distribution centers in Henry County and South Atlanta." },
      { property: "og:image", content: ogImg },
      { name: "twitter:image", content: ogImg },
    ],
  }),
  component: LocustGroveLocation,
});

const nearby = ["Locust Grove", "McDonough", "Jackson", "Hampton", "Stockbridge", "Henry County", "Butts County", "South Atlanta"];

const problems = [
  "Concrete floor wear and cracking from heavy forklift traffic in high-throughput facilities",
  "Dock doors and levelers failing in distribution centers running multiple shifts",
  "HVAC and ventilation struggling in large pre-engineered metal buildings along the I-75 corridor",
  "Renovations and repairs that have to happen without shutting down outbound shipments",
];

function LocustGroveLocation() {
  return (
    <>
      <PageHeader
        eyebrow="Service Area • Home Base"
        title="Commercial Contractor in Locust Grove, GA"
        subtitle="Premier HD Pro is based in Locust Grove, Georgia. We serve warehouses, distribution centers, and industrial facilities across Henry County and the South Atlanta logistics corridor."
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Locust Grove, GA" }]}
        backgroundImage={locustGroveImg}
        backgroundAlt="Downtown Locust Grove, Georgia main street with shops and storefronts"
      />

      <section className="section-pad">
        <div className="container-pro grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-2xl font-bold">Your local industrial contractor in Locust Grove</h2>
              <p className="mt-4 text-foreground/85">
                Locust Grove sits at the heart of one of Georgia's busiest distribution corridors.
                With direct access to I-75 and proximity to the massive fulfillment clusters in
                McDonough and South Atlanta, the area has become home to dozens of regional and
                national distribution operations. As a contractor based right here in Locust Grove,
                we know these buildings — and we can be on site fast.
              </p>
              <p className="mt-3 text-foreground/85">
                Most of the facilities we work in run multiple shifts, move trailers around the
                clock, and can't afford a shutdown for a routine repair. Whether you manage a
                fulfillment center off Bill Gardner Parkway, a 3PL near the GA-155 industrial
                parks, or a manufacturing plant in Henry County, our team plans every project
                around your operations — not the other way around.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold">Services we deliver in Locust Grove</h2>
              <p className="mt-3 text-foreground/85">
                We provide a full range of commercial and industrial services for warehouse and
                distribution facility managers in the area:
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {services.map((s) => (
                  <Link key={s.slug} to={s.to} className="rounded-md border border-border bg-card p-4 transition-colors hover:border-primary">
                    <div className="text-sm font-bold">{s.title}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{s.short}</div>
                  </Link>
                ))}
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Need ongoing facility support? Learn about our{" "}
                <Link to="/warehouse-maintenance-services-georgia" className="font-semibold text-primary underline-offset-4 hover:underline">warehouse maintenance programs</Link>{" "}
                or get pricing on{" "}
                <Link to="/concrete-floor-repair-atlanta" className="font-semibold text-primary underline-offset-4 hover:underline">concrete floor repair services</Link>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold">Common facility problems in Locust Grove</h2>
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
              <h2 className="text-2xl font-bold">Why facility managers in Locust Grove choose Premier HD Pro</h2>
              <ul className="mt-5 space-y-2">
                {[
                  "Local — based right here in Locust Grove, with fast on-site response across Henry County",
                  "Experienced working in active warehouses, 3PLs, and manufacturing plants",
                  "Projects phased around shipping schedules, shift changes, and trailer flow",
                  "Reliable scheduling and one point of contact from quote to closeout",
                  "Single contractor for maintenance, repairs, and renovations — fewer vendors to manage",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-safety" />
                    <span className="text-foreground/85">{i}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-muted-foreground">
                See{" "}
                <Link to="/blog/$slug" params={{ slug: "cost-to-repair-concrete-floors-warehouse" }} className="font-semibold text-primary underline-offset-4 hover:underline">common warehouse maintenance issues and repair costs</Link>{" "}
                for more context on what we typically see in this market.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold">Areas we serve from Locust Grove</h2>
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
                Local team. Same-day response for Locust Grove and Henry County facilities.
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
