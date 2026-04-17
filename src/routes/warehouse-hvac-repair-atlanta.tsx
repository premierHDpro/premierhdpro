import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "../components/ServicePage";

export const Route = createFileRoute("/warehouse-hvac-repair-atlanta")({
  head: () => ({
    meta: [
      { title: "Warehouse HVAC Repair Atlanta | Industrial HVAC Contractor" },
      { name: "description", content: "Industrial HVAC repair in Atlanta, GA for warehouses and distribution centers. Rooftop units, makeup air, destratification, and phased system upgrades." },
      { property: "og:title", content: "Warehouse HVAC Repair Atlanta — Industrial HVAC Contractor" },
      { property: "og:description", content: "HVAC diagnostics, repair, and upgrades for large Atlanta industrial facilities." },
    ],
  }),
  component: () => (
    <ServicePage
      slug="industrial-hvac"
      heroEyebrow="Warehouse HVAC Repair Atlanta"
      heroHeadline="Industrial HVAC Repair in Atlanta, GA for Warehouses & Industrial Facilities"
      heroSubheadline="Helping facility managers in Atlanta reduce downtime, fix HVAC problems fast, and keep employees and product comfortable across large warehouses and distribution centers."
      primaryCtaLabel="Schedule HVAC Inspection"
      problemIntro="Atlanta summers are brutal on industrial HVAC. Hot, humid weather, tall ceilings, and constant dock door cycling combine to push warehouse mechanical systems past their limits. Many Atlanta-area facilities are running rooftop units that were sized for the operation a decade ago — not for today's headcount, racking, or shift patterns. The result is hot zones on the floor, cold zones near returns, short-cycling units, and energy bills that creep higher every year. Facility managers in Atlanta need an HVAC partner that understands large industrial buildings, not just commercial offices."
      problems={[
        "Hot zones on the warehouse floor during Atlanta summer peaks",
        "Severe stratification in tall buildings with no destratification fans",
        "Rooftop units short-cycling and driving up Georgia Power bills",
        "Aging RTUs (15+ years) failing repeatedly with parts hard to source",
        "Makeup air systems undersized for current dock door activity",
      ]}
      offers={[
        "Rooftop unit (RTU) repair and replacement",
        "Industrial HVAC diagnostics and load calculations",
        "Makeup air unit repair and install",
        "HVLS destratification fans",
        "Zoning, controls, and thermostat upgrades",
        "Airflow balancing across large open spans",
        "Preventative maintenance contracts for RTU fleets",
        "Phased system replacement plans for capital budgets",
      ]}
      midCtaText="Dealing with HVAC issues in your Atlanta facility? Schedule an inspection."
      midCtaLabel="Schedule HVAC Inspection"
      process={[
        { title: "System assessment", body: "Full inventory of every RTU and air handler on your Atlanta facility — age, condition, and current load vs. capacity." },
        { title: "Diagnostic findings", body: "Written report identifying root causes — not just symptoms — with prioritized fixes." },
        { title: "Repair or phased upgrade", body: "Sequenced work that spreads capital expense across budget cycles while continuously improving comfort." },
        { title: "Verification & PM", body: "Post-repair commissioning and optional ongoing PM to extend equipment life." },
      ]}
      whyUs={[
        "Industrial HVAC experience — not residential or light commercial",
        "Familiar with Atlanta-area utility programs and rebates",
        "Phased upgrade plans designed around capital budgets",
        "Fast emergency response across Metro Atlanta",
        "Based in Locust Grove — close coverage of the South Atlanta industrial corridor",
      ]}
      relatedPosts={[
        { slug: "hvac-issues-large-warehouses", anchor: "Read about the most common HVAC issues in large warehouses" },
        { slug: "preventative-maintenance-plan-facilities", anchor: "See how preventative maintenance reduces HVAC failures" },
      ]}
      bottomCtaHeadline="Get expert HVAC help for your Atlanta facility."
      bottomCtaText="From single-unit repairs to phased RTU replacements across multiple sites — one contractor, one plan, measurable results."
      bottomCtaLabel="Schedule HVAC Inspection"
    />
  ),
});
