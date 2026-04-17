import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, MapPin } from "lucide-react";
import { PageHeader } from "../components/PageHeader";
import { CtaBand } from "../components/CtaBand";
import { ContactForm } from "../components/ContactForm";
import { services } from "../data/services";

export const Route = createFileRoute("/locations/atlanta")({
  head: () => ({
    meta: [
      { title: "Commercial Contractor in Atlanta, GA | Premier HD Pro" },
      { name: "description", content: "Commercial general contractor serving Atlanta, McDonough, Locust Grove, Henry County, and surrounding Georgia. Warehouse maintenance, repairs, and renovations." },
      { property: "og:title", content: "Commercial Contractor in Atlanta, GA" },
      { property: "og:description", content: "Industrial and commercial contractor serving Metro Atlanta warehouses and distribution centers." },
    ],
  }),
  component: AtlantaLocation,
});

const cities = [
  "Atlanta",
  "McDonough",
  "Locust Grove",
  "Stockbridge",
  "Hampton",
  "Forest Park",
  "Jonesboro",
  "Henry County",
  "Clayton County",
  "Fulton County",
  "DeKalb County",
  "Fayette County",
];

const industries = [
  "E-commerce fulfillment centers",
  "3PL distribution operations",
  "Cold storage and food distribution",
  "Manufacturing facilities",
  "Industrial flex and multi-tenant buildings",
  "Last-mile delivery hubs",
];

function AtlantaLocation() {
  return (
    <>
      <PageHeader
        eyebrow="Service Area"
        title="Commercial Contractor in Atlanta, GA"
        subtitle="Premier HD Pro is a commercial general contractor serving warehouses, distribution centers, and industrial facilities across Metro Atlanta and Georgia."
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Atlanta, GA" }]}
      />

      <section className="section-pad">
        <div className="container-pro grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold">Built for Atlanta's industrial corridor</h2>
            <p className="mt-4 text-foreground/85">
              Metro Atlanta is one of the largest distribution hubs in the Southeast.
              From the I-75 corridor down through Henry County to the major fulfillment
              clusters in McDonough and Locust Grove, we work in active industrial
              facilities every day. We understand how fast a downed dock door costs you
              outbound trucks, and how disruptive renovation work becomes when it's not
              phased correctly around shipping schedules.
            </p>

            <h2 className="mt-12 text-2xl font-bold">Services we deliver in Atlanta</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {services.map((s) => (
                <Link key={s.slug} to={s.to} className="rounded-md border border-border bg-card p-4 transition-colors hover:border-primary">
                  <div className="text-sm font-bold">{s.title}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.short}</div>
                </Link>
              ))}
            </div>

            <h2 className="mt-12 text-2xl font-bold">Industries we serve in Metro Atlanta</h2>
            <ul className="mt-5 space-y-2">
              {industries.map((i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-safety" />
                  <span className="text-foreground/85">{i}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-12 text-2xl font-bold">Cities and counties we serve</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {cities.map((c) => (
                <span key={c} className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold">
                  <MapPin className="h-3 w-3 text-safety" /> {c}
                </span>
              ))}
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
              <h3 className="text-lg font-bold">Schedule a site walk</h3>
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
