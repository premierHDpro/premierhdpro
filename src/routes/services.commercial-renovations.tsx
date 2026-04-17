import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "../components/ServicePage";

export const Route = createFileRoute("/services/commercial-renovations")({
  head: () => ({
    meta: [
      { title: "Commercial Renovations & Warehouse Office Buildouts in Atlanta | Premier HD Pro" },
      { name: "description", content: "Warehouse office buildouts and commercial renovations across Atlanta. Phased construction in active facilities — restrooms, offices, mezzanines, and more." },
      { property: "og:title", content: "Commercial Renovations Atlanta — Warehouse Office Buildout" },
      { property: "og:description", content: "Office buildouts, restrooms, and phased renovations executed in active facilities." },
    ],
  }),
  component: () => (
    <ServicePage
      slug="commercial-renovations"
      intro="Renovations inside an operating distribution center require a completely different playbook than ground-up construction. Walls, MEP, dust control, and life safety all have to be coordinated around continuous operations. Premier HD Pro performs warehouse office buildouts and commercial renovations across Atlanta and Georgia — phased to keep your facility shipping every day of the project."
      offers={[
        "Warehouse office buildouts",
        "Restroom additions and renovations",
        "Break room and locker room buildouts",
        "Conference and training rooms",
        "Mezzanine construction",
        "Tenant improvement (TI) projects",
        "Phased renovation planning",
        "Life safety and code upgrades",
      ]}
      issues={[
        "Need additional office space without disrupting fulfillment",
        "Restrooms undersized for current headcount",
        "Outdated break rooms and locker areas",
        "Compliance gaps (ADA, life safety, fire separation)",
        "Owner-occupied buildings needing tenant-ready spaces",
      ]}
      process={[
        { title: "Scope & design coordination", body: "We coordinate with your architect (or bring one in) to align design with operational realities." },
        { title: "Phased construction plan", body: "Each phase is sequenced to protect adjacent operations — dust, noise, life safety, and access." },
        { title: "Construction execution", body: "Self-perform key trades and tightly manage subcontractors. Daily ops handoffs." },
        { title: "Closeout", body: "Punch list completion, code inspections, and full closeout package delivered." },
      ]}
    />
  ),
});
