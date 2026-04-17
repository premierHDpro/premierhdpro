import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "../components/ServicePage";

export const Route = createFileRoute("/services/safety-barriers")({
  head: () => ({
    meta: [
      { title: "Bollard Installation Atlanta | Warehouse Safety Barriers Georgia" },
      { name: "description", content: "Bollard installation, guardrails, column protectors, and rack guards across Georgia warehouses. Protect equipment, infrastructure, and people." },
      { property: "og:title", content: "Bollard Installation Atlanta — Warehouse Safety Barriers" },
      { property: "og:description", content: "Safety barriers, bollards, and facility protection across Metro Atlanta." },
    ],
  }),
  component: () => (
    <ServicePage
      slug="safety-barriers"
      intro="Every bent bollard, missing guardrail, and damaged column protector is both a safety issue and a sign that an impact event went undocumented. Premier HD Pro installs and replaces bollards, guardrails, column protectors, and rack guards across warehouses in Atlanta and Georgia — protecting equipment, infrastructure, and the people who work in your facility."
      offers={[
        "Concrete-filled steel bollards",
        "Removable and folding bollards",
        "Steel guardrail systems",
        "Column and corner protectors",
        "Pallet rack end protectors",
        "Pedestrian safety barriers",
        "Loading dock fall protection",
        "Custom fabricated barriers",
      ]}
      issues={[
        "Repeated forklift impact damaging structural columns",
        "No protection at pedestrian crossings on the warehouse floor",
        "Pallet rack uprights damaged at base",
        "Outdated or missing fall protection at dock edges",
        "Insurance and OSHA compliance gaps",
      ]}
      process={[
        { title: "Risk walk", body: "Identify impact-prone areas and document existing damage." },
        { title: "System recommendation", body: "Right-sized barriers — heavy steel where impact risk is high, lighter where pedestrians need clear visual cues." },
        { title: "Installation", body: "Core drilling, anchoring, and welding executed during off-hours to avoid disrupting operations." },
        { title: "Ongoing replacement program", body: "Damaged barriers tracked and replaced as part of a recurring program." },
      ]}
    />
  ),
});
