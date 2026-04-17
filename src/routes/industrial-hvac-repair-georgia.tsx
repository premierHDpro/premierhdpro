import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "../components/ServicePage";

export const Route = createFileRoute("/industrial-hvac-repair-georgia")({
  head: () => ({
    meta: [
      { title: "Warehouse HVAC Repair Atlanta | Industrial HVAC Contractor Georgia" },
      { name: "description", content: "Industrial HVAC repair, diagnostics, and upgrades across Atlanta and Georgia. Built for large warehouses, distribution centers, and manufacturing facilities." },
      { property: "og:title", content: "Warehouse HVAC Repair Atlanta — Industrial HVAC Contractor Georgia" },
      { property: "og:description", content: "HVAC repair and upgrades for large industrial facilities across Metro Atlanta." },
    ],
  }),
  component: () => (
    <ServicePage
      slug="industrial-hvac"
      heroEyebrow="Industrial HVAC Contractor Georgia"
      heroHeadline="Industrial HVAC Repair for Large Warehouse Facilities"
      heroSubheadline="Warehouse HVAC repair across Atlanta and Georgia — McDonough, Locust Grove, and Henry County. Diagnostics, repairs, and upgrades for the biggest mechanical problem in commercial buildings."
      primaryCtaLabel="Schedule HVAC Inspection"
      problemIntro="Conditioning a 200,000 sq. ft. warehouse is fundamentally different than conditioning an office. Volume, infiltration through dock doors, internal heat loads, and stratification all combine to make industrial HVAC one of the hardest mechanical problems in commercial buildings. When systems underperform, employees are uncomfortable, sensitive product is at risk, and energy bills climb fast — all while equipment cycles itself toward early failure."
      problems={[
        "Poor airflow leaving hot and cold zones across the floor",
        "Temperature imbalance and severe stratification in tall warehouses",
        "Rooftop units short-cycling and driving up energy bills",
        "Aging units (15+ years) failing repeatedly with rising repair costs",
        "Original system undersized for current operations and headcount",
      ]}
      offers={[
        "Rooftop unit repair and replacement",
        "HVAC diagnostics and load calculations",
        "Split system & makeup air units",
        "HVLS destratification fans",
        "System upgrades and zoning controls",
        "Airflow improvements and balancing",
        "Preventative maintenance contracts",
        "Phased system replacement plans",
      ]}
      midCtaText="Having temperature issues in your facility? Schedule an HVAC inspection."
      midCtaLabel="Schedule HVAC Inspection"
      process={[
        { title: "System assessment", body: "Full inventory of HVAC assets with age, condition, and capacity vs. current load. We measure, we don't guess." },
        { title: "Diagnostic findings", body: "Clear written report identifying root causes — not just symptoms — with prioritized recommendations." },
        { title: "Repair or phased upgrade", body: "Sequenced work that spreads capital expense over time while continuously improving performance." },
        { title: "Verification & PM enrollment", body: "Post-repair commissioning plus optional ongoing maintenance to extend new system life." },
      ]}
      relatedPosts={[
        { slug: "hvac-issues-large-warehouses", anchor: "Read about the most common HVAC issues in large warehouses" },
        { slug: "preventative-maintenance-plan-facilities", anchor: "See how preventative maintenance reduces HVAC failures" },
      ]}
      bottomCtaHeadline="Get expert help with your warehouse HVAC system."
      bottomCtaText="From single-unit repairs to phased system replacements — one contractor, one plan, measurable results."
      bottomCtaLabel="Schedule HVAC Inspection"
    />
  ),
});
