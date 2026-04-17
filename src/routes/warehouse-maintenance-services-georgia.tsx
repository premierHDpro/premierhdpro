import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "../components/ServicePage";

export const Route = createFileRoute("/warehouse-maintenance-services-georgia")({
  head: () => ({
    meta: [
      { title: "Warehouse Maintenance Services Georgia | Facility Maintenance Atlanta" },
      { name: "description", content: "Reliable warehouse maintenance services across Georgia. Preventative programs, emergency repairs, and inspections for distribution centers in Atlanta, McDonough, Locust Grove, and Henry County." },
      { property: "og:title", content: "Warehouse Maintenance Services Georgia — Premier HD Pro" },
      { property: "og:description", content: "Facility maintenance Atlanta — programs built for active distribution centers and warehouses across Georgia." },
    ],
  }),
  component: () => (
    <ServicePage
      slug="warehouse-maintenance"
      heroEyebrow="Warehouse Maintenance Services Georgia"
      heroHeadline="Warehouse Maintenance Services That Keep Operations Running"
      heroSubheadline="Premier HD Pro delivers preventative warehouse maintenance services across Georgia — Atlanta, McDonough, Locust Grove, and Henry County — built around the realities of active distribution centers."
      primaryCtaLabel="Request Maintenance Support"
      problemIntro="For most facility managers, the maintenance budget never feels like enough. Reactive repairs eat into capital, multiple vendors create scheduling chaos, and undocumented assets quietly age until something fails at the worst possible time. Without a structured preventative maintenance program, distribution centers spend 30–50% more on emergency repairs than facilities that plan ahead — and lose far more to unplanned downtime."
      problems={[
        "Reactive repairs causing repeated unplanned downtime in shipping and receiving",
        "No documented preventative maintenance schedule for dock doors, HVAC, or floors",
        "Multiple vendors with no single point of accountability for facility upkeep",
        "Aging assets failing without warning because nobody is tracking condition",
        "Insurance, OSHA, and life-safety compliance gaps surfacing during audits",
      ]}
      offers={[
        "Ongoing preventative maintenance programs",
        "24/7 emergency facility repair response",
        "Quarterly facility condition inspections",
        "Dock door & leveler PM cycles",
        "HVAC preventative maintenance",
        "Concrete floor and joint walks",
        "Lighting audits and LED retrofits",
        "Safety infrastructure inspections",
      ]}
      midCtaText="Looking for reliable facility maintenance? Request ongoing maintenance support today."
      midCtaLabel="Request Maintenance Support"
      process={[
        { title: "Facility assessment", body: "We walk your warehouse with your operations and maintenance leads, document every critical asset, and identify the highest-risk failure points." },
        { title: "Custom maintenance plan", body: "You receive a written PM plan with cadence, scope, and budget — sized to your facility square footage, equipment density, and operating hours." },
        { title: "Phased execution around operations", body: "Crews work around your shipping schedule. Off-hours, weekends, or zoned access — whatever protects your throughput." },
        { title: "Quarterly reporting & closeout", body: "Every quarter you receive a written report showing completed work, identified issues, and recommended capital projects." },
      ]}
      relatedPosts={[
        { slug: "preventative-maintenance-plan-facilities", anchor: "Read our preventative maintenance plan framework for distribution centers" },
        { slug: "common-maintenance-issues-distribution-centers", anchor: "See the most common warehouse maintenance issues we solve" },
      ]}
      bottomCtaHeadline="Get a custom maintenance plan for your warehouse."
      bottomCtaText="One contractor. One plan. Less downtime. Tell us about your facility and we'll build a maintenance program around your operation."
      bottomCtaLabel="Request Maintenance Support"
    />
  ),
});
