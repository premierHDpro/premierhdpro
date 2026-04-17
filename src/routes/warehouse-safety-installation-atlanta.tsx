import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "../components/ServicePage";

export const Route = createFileRoute("/warehouse-safety-installation-atlanta")({
  head: () => ({
    meta: [
      { title: "Bollard Installation Atlanta | Warehouse Safety Barriers Georgia" },
      { name: "description", content: "Bollard installation, guardrails, column protectors, and safety barrier systems across Atlanta and Georgia warehouses. Protect equipment, infrastructure, and people." },
      { property: "og:title", content: "Bollard Installation Atlanta — Warehouse Safety Barriers" },
      { property: "og:description", content: "Safety barriers, bollards, and facility protection systems across Metro Atlanta and Georgia." },
    ],
  }),
  component: () => (
    <ServicePage
      slug="safety-barriers"
      heroEyebrow="Warehouse Safety Barriers Atlanta"
      heroHeadline="Warehouse Safety Barriers & Facility Protection Systems"
      heroSubheadline="Bollard installation across Atlanta and Georgia — McDonough, Locust Grove, and Henry County. Protect equipment, infrastructure, and the people working in your facility."
      primaryCtaLabel="Request Safety Upgrade Quote"
      problemIntro="Every bent bollard, missing guardrail, and damaged column protector is both a safety issue and a sign that an impact event went undocumented. Forklift impact damages structural columns, pallet racking, dock equipment, and building systems — and one serious incident can cost more than years of safety upgrades. The right protection systems prevent damage before it happens and keep your facility compliant with OSHA, insurance, and life-safety requirements."
      problems={[
        "Forklift impact repeatedly damaging structural columns and racking",
        "No protection at pedestrian crossings on the warehouse floor",
        "Pallet rack uprights damaged at base — collapse risk",
        "Outdated or missing fall protection at dock edges",
        "Insurance audits and OSHA compliance gaps",
      ]}
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
      midCtaText="Improve safety in your facility with proper protection systems."
      midCtaLabel="Request Safety Upgrade Quote"
      process={[
        { title: "Risk walk", body: "We tour the facility with your team to identify impact-prone areas and document existing damage." },
        { title: "System recommendation", body: "Right-sized barriers — heavy steel where impact risk is high, lighter where pedestrians need clear visual cues." },
        { title: "Installation", body: "Core drilling, anchoring, and welding executed during off-hours to avoid disrupting operations." },
        { title: "Replacement program", body: "Damaged barriers tracked and replaced as part of a recurring program — your protection system never degrades silently." },
      ]}
      relatedPosts={[
        { slug: "common-maintenance-issues-distribution-centers", anchor: "See common safety and damage issues in distribution centers" },
        { slug: "preventative-maintenance-plan-facilities", anchor: "Learn how safety walks fit into a preventative maintenance plan" },
      ]}
      bottomCtaHeadline="Request a quote for safety upgrades today."
      bottomCtaText="Schedule a risk walk with our team. We'll deliver a prioritized scope to protect the people, equipment, and infrastructure in your facility."
      bottomCtaLabel="Request Safety Upgrade Quote"
    />
  ),
});
