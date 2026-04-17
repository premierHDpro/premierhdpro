import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "../components/ServicePage";

export const Route = createFileRoute("/warehouse-maintenance-atlanta")({
  head: () => ({
    meta: [
      { title: "Warehouse Maintenance Atlanta | Facility Maintenance for Distribution Centers" },
      { name: "description", content: "Warehouse and facility maintenance services in Atlanta, GA. Ongoing repairs, preventative maintenance, and on-call support for distribution centers and industrial facilities." },
      { property: "og:title", content: "Warehouse Maintenance Atlanta — Facility Maintenance for Distribution Centers" },
      { property: "og:description", content: "Reliable maintenance support for Atlanta warehouses and DCs. Reduce downtime and extend equipment life." },
    ],
  }),
  component: () => (
    <ServicePage
      slug="warehouse-maintenance"
      heroEyebrow="Warehouse Maintenance Atlanta"
      heroHeadline="Warehouse Maintenance Services in Atlanta, GA for Distribution Centers & Industrial Facilities"
      heroSubheadline="Helping facility managers in Atlanta reduce downtime, fix problems fast, and keep operations running across high-volume warehouses, distribution centers, and industrial buildings."
      primaryCtaLabel="Request Maintenance Support"
      problemIntro="Atlanta is one of the busiest logistics markets in the Southeast — and that volume takes a toll on facilities. Distribution centers along I-285, the South Atlanta logistics corridor, and Fulton and DeKalb industrial parks run nearly around the clock, which means small maintenance issues turn into major shutdowns faster than in any other market. Facility managers in Atlanta need a contractor that can respond quickly, work around active operations, and prevent the next failure before it costs a shipping window."
      problems={[
        "Repeated callbacks for the same issue from inconsistent vendors",
        "Aging Atlanta-area facilities with deferred maintenance backlogs",
        "Concrete and dock damage from constant forklift and trailer traffic",
        "HVAC, plumbing, and electrical issues stacking up across multiple sites",
        "No single point of accountability for facility upkeep",
      ]}
      offers={[
        "On-call repairs and emergency response across Metro Atlanta",
        "Preventative maintenance programs (monthly, quarterly, annual)",
        "Multi-site facility maintenance for portfolio managers",
        "Concrete, dock, door, and HVAC repairs under one contractor",
        "Lighting, plumbing, and minor electrical repairs",
        "Restroom and breakroom upkeep",
        "Janitorial coordination and capital project planning",
        "Documented work orders and asset tracking",
      ]}
      midCtaText="Need reliable maintenance support for your Atlanta facility? Let's talk."
      midCtaLabel="Request Maintenance Support"
      process={[
        { title: "Facility assessment", body: "On-site walkthrough of your Atlanta facility to identify open issues, deferred items, and recurring failure points." },
        { title: "Maintenance plan", body: "We build a maintenance schedule around your shift patterns and shipping windows — not against them." },
        { title: "Phased execution", body: "Work is sequenced to keep dock doors, conveyors, and operations running. No shutdowns we didn't plan together." },
        { title: "Reporting & follow-up", body: "Every visit ends with a written report. You always know what was done, what's next, and what to budget for." },
      ]}
      whyUs={[
        "Local team with fast response across Metro Atlanta",
        "Experience in active distribution centers and 24/7 operations",
        "One contractor for repairs, PMs, and capital projects",
        "Reliable scheduling and clear written communication",
        "Based in Locust Grove — close coverage of South Atlanta logistics corridor",
      ]}
      relatedPosts={[
        { slug: "common-maintenance-issues-distribution-centers", anchor: "See the most common maintenance issues in distribution centers" },
        { slug: "preventative-maintenance-plan-facilities", anchor: "Learn how preventative maintenance reduces unplanned downtime" },
      ]}
      bottomCtaHeadline="Get reliable maintenance support in Atlanta."
      bottomCtaText="Stop juggling vendors. Premier HD Pro is one contractor for warehouse maintenance, repairs, and capital projects across Atlanta and Metro Georgia."
      bottomCtaLabel="Request Maintenance Support"
    />
  ),
});
