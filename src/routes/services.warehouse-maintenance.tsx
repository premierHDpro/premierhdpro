import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "../components/ServicePage";

export const Route = createFileRoute("/services/warehouse-maintenance")({
  head: () => ({
    meta: [
      { title: "Warehouse Maintenance Services in Georgia | Premier HD Pro" },
      { name: "description", content: "Preventative warehouse maintenance services across Atlanta and Georgia. Reduce downtime, extend asset life, and keep distribution centers running." },
      { property: "og:title", content: "Warehouse Maintenance Services in Georgia" },
      { property: "og:description", content: "Facility maintenance Atlanta — programs built for active distribution centers." },
    ],
  }),
  component: () => (
    <ServicePage
      slug="warehouse-maintenance"
      intro="Reactive maintenance is the most expensive way to run a distribution center. Premier HD Pro builds preventative warehouse maintenance programs for facilities across Georgia — focused on the systems that actually drive downtime: dock equipment, concrete floors, HVAC, and safety infrastructure. Our programs are sized to your operation and executed around your shipping schedules, not against them."
      offers={[
        "Quarterly dock door & leveler inspections",
        "Concrete floor and joint walks",
        "HVAC preventative maintenance",
        "Lighting audits and LED retrofits",
        "Safety infrastructure inspections",
        "Facility condition assessments",
        "On-call repair response",
        "Roofing inspections coordination",
      ]}
      issues={[
        "Recurring dock door failures interrupting outbound shipping",
        "Spalling concrete at dock approaches creating forklift impact damage",
        "HVAC short-cycling and rising energy bills in large spaces",
        "Damaged bollards and missing guardrails in active aisles",
        "No documented facility maintenance history when ownership changes",
      ]}
      process={[
        { title: "Facility walk & assessment", body: "We tour your facility with your operations and maintenance leads to map every critical asset and identify priority risks." },
        { title: "Custom maintenance plan", body: "We deliver a written PM plan with cadence, scope, and budget — sized to your facility and operational impact." },
        { title: "Phased execution", body: "Crews execute around your shipping schedule with off-hours work as needed. No production interruptions." },
        { title: "Ongoing reporting", body: "Quarterly reports document completed work, identified issues, and recommended capital projects." },
      ]}
    />
  ),
});
