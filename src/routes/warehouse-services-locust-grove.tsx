import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "../components/ServicePage";

export const Route = createFileRoute("/warehouse-services-locust-grove")({
  head: () => ({
    meta: [
      { title: "Commercial Contractor Locust Grove, GA | Warehouse & Industrial Services" },
      { name: "description", content: "Commercial contractor based in Locust Grove, GA. Warehouse maintenance, concrete, dock doors, HVAC, and renovations for industrial facilities across Henry County and South Atlanta." },
      { property: "og:title", content: "Commercial Contractor Locust Grove, GA — Warehouse & Industrial Services" },
      { property: "og:description", content: "Local Locust Grove contractor for warehouse maintenance, concrete, dock doors, HVAC, and renovations." },
    ],
  }),
  component: () => (
    <ServicePage
      slug="warehouse-maintenance"
      heroEyebrow="Commercial Contractor Locust Grove"
      heroHeadline="Warehouse & Industrial Services in Locust Grove, GA"
      heroSubheadline="Helping facility managers in Locust Grove reduce downtime, fix problems fast, and keep operations running across warehouses, distribution centers, and industrial facilities."
      primaryCtaLabel="Request a Quote"
      problemIntro="Premier HD Pro is based right here in Locust Grove. The Bill Gardner Parkway corridor and I-75 exits 212 and 218 have transformed this area into one of Georgia's fastest-growing logistics markets — and we're the local contractor that grew up with it. Facility managers in Locust Grove need a partner who can be on-site in minutes, not hours. Whether it's a failed dock leveler at 2 a.m., a cracked slab in a new DC, or a quarterly preventative maintenance visit, we cover the full scope of warehouse contracting work without subbing it out across town."
      problems={[
        "Dock and door failures in newer high-volume DCs along Bill Gardner Parkway",
        "Concrete wear in fast-growing Locust Grove industrial parks",
        "HVAC strain on systems sized before recent operational growth",
        "Need for one local contractor instead of juggling out-of-town vendors",
        "Capital project planning for facility expansions and buildouts",
      ]}
      offers={[
        "Warehouse maintenance programs (monthly, quarterly, annual)",
        "Concrete floor repair, leveling, and polished concrete",
        "Dock door, leveler, and seal repair",
        "Industrial HVAC diagnostics and repair",
        "Commercial renovations and tenant buildouts",
        "Safety barriers, bollards, and guardrails",
        "Emergency response and on-call repairs",
        "Capital project planning and phased upgrades",
      ]}
      midCtaText="Local to Locust Grove? Let's get your facility on a maintenance plan."
      midCtaLabel="Request a Quote"
      process={[
        { title: "Site walk", body: "We come on-site at your Locust Grove facility — usually within a day — to scope the work." },
        { title: "Quote & plan", body: "Clear written quote with a plan that respects your shipping windows and shift patterns." },
        { title: "Execution", body: "Phased work that keeps your facility running. Local crews, no commute delays." },
        { title: "Closeout & PM", body: "Final walkthrough and optional preventative maintenance enrollment to keep things running." },
      ]}
      whyUs={[
        "Headquartered in Locust Grove — fastest response in Henry County",
        "Local team that knows every industrial park and DC in the area",
        "Full scope: maintenance, concrete, doors, HVAC, renovations under one contractor",
        "Experience in active distribution operations",
        "Serving Locust Grove, McDonough, Hampton, Jackson, Stockbridge, and South Atlanta",
      ]}
      relatedPosts={[
        { slug: "common-maintenance-issues-distribution-centers", anchor: "See common maintenance issues we solve in distribution centers" },
        { slug: "preventative-maintenance-plan-facilities", anchor: "Learn how a PM plan reduces unplanned downtime" },
      ]}
      bottomCtaHeadline="Your local commercial contractor in Locust Grove."
      bottomCtaText="One call covers maintenance, repairs, and capital projects. Premier HD Pro is based in Locust Grove and built for industrial facilities."
      bottomCtaLabel="Request a Quote"
    />
  ),
});
