import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, MapPin, AlertTriangle } from "lucide-react";
import { PageHeader } from "../components/PageHeader";
import { CtaBand } from "../components/CtaBand";
import { ContactForm } from "../components/ContactForm";
import { services } from "../data/services";
import ogImg from "../assets/og-mcdonough.jpg";
import mcdonoughImg from "../assets/mcdonough.avif";

export const Route = createFileRoute("/locations/mcdonough")({
  head: () => ({
    meta: [
      { title: "Warehouse Contractor in McDonough, GA | Premier HD Pro" },
      { name: "description", content: "Warehouse and distribution center contractor in McDonough, GA. Concrete repair, dock doors, HVAC, and maintenance for high-volume logistics facilities." },
      { property: "og:title", content: "Warehouse Contractor in McDonough, GA" },
      { property: "og:description", content: "Industrial contractor for McDonough distribution centers and 3PL facilities, just minutes from our Locust Grove office." },
      { property: "og:image", content: ogImg },
      { name: "twitter:image", content: ogImg },
    ],
  }),
  component: McDonoughLocation,
});

const nearby = ["McDonough", "Locust Grove", "Stockbridge", "Hampton", "Henry County", "Jonesboro", "Forest Park", "South Atlanta"];

const problems = [
  "Concrete floor cracking and joint failure from constant forklift and pallet movement",
  "Dock leveler and seal damage from heavy trailer turnover at busy 3PL cross-docks",
  "HVAC and exhaust systems undersized for current pick-and-pack operations",
  "Office, breakroom, and bathroom upgrades that can't take the warehouse offline",
];

function McDonoughLocation() {
  return (
    <>
      <PageHeader
        eyebrow="Service Area"
        title="Warehouse Contractor in McDonough, GA"
        subtitle="Premier HD Pro serves the distribution centers, 3PL cross-docks, and logistics facilities that make McDonough one of Georgia's most important warehouse hubs."
        breadcrumb={[{ label: "Home", to: "/" }, { label: "McDonough, GA" }]}
        backgroundImage={mcdonoughImg}
        backgroundAlt="Historic downtown McDonough, Georgia town square with gazebo and brick storefronts"
      />

      <section className="section-pad">
        <div className="container-pro grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-2xl font-bold">A warehouse contractor built for McDonough's distribution market</h2>
              <p className="mt-4 text-foreground/85">
                McDonough has quietly become one of the largest distribution and logistics
                clusters in the Southeast. The Jonesboro Road, Highway 81, and I-75 corridors
                are lined with multi-million-square-foot fulfillment centers, regional 3PLs,
                and last-mile hubs feeding the entire Southeast. These facilities run hot,
                with high forklift traffic, constant dock activity, and very little tolerance
                for downtime.
              </p>
              <p className="mt-3 text-foreground/85">
                Our office is just a few minutes south in Locust Grove, which means we can be
                on site at a McDonough facility quickly — often the same day for urgent dock
                door or floor issues. We work in active distribution environments every day
                and understand how to get repairs done without disrupting outbound trucks.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold">Services for McDonough warehouses & DCs</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {services.map((s) => (
                  <Link key={s.slug} to={s.to} className="rounded-md border border-border bg-card p-4 transition-colors hover:border-primary">
                    <div className="text-sm font-bold">{s.title}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{s.short}</div>
                  </Link>
                ))}
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                McDonough DCs most often call us for{" "}
                <Link to="/concrete-floor-repair-atlanta" className="font-semibold text-primary underline-offset-4 hover:underline">concrete floor repair services</Link>,{" "}
                <Link to="/dock-door-repair-atlanta" className="font-semibold text-primary underline-offset-4 hover:underline">dock door repair solutions</Link>, and{" "}
                <Link to="/warehouse-safety-installation-atlanta" className="font-semibold text-primary underline-offset-4 hover:underline">safety barrier installation</Link>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold">Common facility problems in McDonough</h2>
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
              <h2 className="text-2xl font-bold">Why McDonough facility managers choose Premier HD Pro</h2>
              <ul className="mt-5 space-y-2">
                {[
                  "Located minutes away in Locust Grove — fast response across McDonough",
                  "Experience with Class A distribution centers and 3PL cross-dock environments",
                  "Phased work scheduled around dock doors, shifts, and trailer flow",
                  "Single contractor across concrete, doors, HVAC, and renovations",
                  "Reliable communication, clear scopes, and honest pricing",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-safety" />
                    <span className="text-foreground/85">{i}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-muted-foreground">
                Planning a floor repair? Read{" "}
                <Link to="/blog/$slug" params={{ slug: "cost-to-repair-concrete-floors-warehouse" }} className="font-semibold text-primary underline-offset-4 hover:underline">our guide on warehouse concrete repair costs</Link>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold">Areas we serve near McDonough</h2>
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
                Based in Locust Grove. Fast on-site response for McDonough facilities.
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
