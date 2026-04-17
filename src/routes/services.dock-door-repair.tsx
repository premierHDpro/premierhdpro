import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "../components/ServicePage";

export const Route = createFileRoute("/services/dock-door-repair")({
  head: () => ({
    meta: [
      { title: "Dock Door & Commercial Door Repair in Atlanta | Premier HD Pro" },
      { name: "description", content: "Warehouse door repair across Georgia. Dock doors, levelers, seals, operators, and entry systems — fast response to keep your loading dock running." },
      { property: "og:title", content: "Dock Door Repair Atlanta — Warehouse Door Repair Georgia" },
      { property: "og:description", content: "Commercial door & dock repair for warehouses across Metro Atlanta." },
    ],
  }),
  component: () => (
    <ServicePage
      slug="dock-door-repair"
      intro="Dock equipment is the #1 source of unplanned downtime in most distribution centers. Bent panels, worn springs, blown leveler hydraulics, torn seals, and failed operators all stop outbound shipping cold. Premier HD Pro provides commercial dock door repair across Metro Atlanta and Georgia — with fast response, full leveler service, and complete entry system replacements when repairs no longer make sense."
      offers={[
        "Dock door repair and panel replacement",
        "Spring, cable, and roller service",
        "Dock leveler repair (mechanical & hydraulic)",
        "Dock seal and shelter replacement",
        "Operator repair and replacement",
        "High-speed and roll-up door service",
        "Storefront and entry door repair",
        "Full dock door replacement projects",
      ]}
      issues={[
        "Dock doors stuck open or closed — outbound shipping blocked",
        "Levelers no longer holding load or extending properly",
        "Daylight visible around door perimeter (failing seals)",
        "Operator failures becoming more frequent month over month",
        "Repeated forklift impact damage to the same opening",
      ]}
      process={[
        { title: "Rapid response", body: "We respond fast for emergency dock failures — typically same-day or next business day." },
        { title: "Diagnose & quote", body: "On-site diagnosis with a clear repair vs. replace recommendation and written quote." },
        { title: "Repair execution", body: "Most dock door repairs complete in a single visit. Replacement projects are staged dock-by-dock." },
        { title: "Operational handoff", body: "Full cycle test with your operations team before we leave the site." },
      ]}
    />
  ),
});
