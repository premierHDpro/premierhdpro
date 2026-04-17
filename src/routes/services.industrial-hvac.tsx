import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "../components/ServicePage";

export const Route = createFileRoute("/services/industrial-hvac")({
  head: () => ({
    meta: [
      { title: "Industrial HVAC Contractor in Georgia | Warehouse HVAC Repair Atlanta" },
      { name: "description", content: "Industrial HVAC repair, replacement, and upgrades across Atlanta and Georgia. Built for warehouses, distribution centers, and large commercial spaces." },
      { property: "og:title", content: "Warehouse HVAC Repair Atlanta — Industrial HVAC Contractor Georgia" },
      { property: "og:description", content: "Repairs, replacements, and upgrades for HVAC systems serving large warehouse and industrial spaces." },
    ],
  }),
  component: () => (
    <ServicePage
      slug="industrial-hvac"
      intro="Conditioning a 200,000 sq. ft. warehouse is a fundamentally different problem than conditioning an office. Volume, infiltration through dock doors, internal heat loads, and stratification all combine to make industrial HVAC one of the hardest mechanical problems in commercial buildings. Premier HD Pro is an industrial HVAC contractor serving Georgia — from rooftop unit repair and replacement to phased system upgrades and HVLS destratification."
      offers={[
        "Rooftop unit repair and replacement",
        "Split system & makeup air units",
        "HVLS (high-volume low-speed) destratification fans",
        "Smart controls and zoning upgrades",
        "Preventative maintenance contracts",
        "Load calculation reviews",
        "Energy efficiency assessments",
        "Phased system replacement plans",
      ]}
      issues={[
        "Original system undersized for current operations",
        "Short-cycling and rising energy bills",
        "Hot and cold zones across the floor",
        "Severe stratification in tall warehouses",
        "Aging units (15+ years) failing repeatedly",
      ]}
      process={[
        { title: "System assessment", body: "Full inventory of HVAC assets with age, condition, and capacity vs. current load." },
        { title: "Phased upgrade plan", body: "Sequenced replacement plan that spreads capital expense over 3–5 years." },
        { title: "Installation", body: "Crane lifts and crossovers scheduled around operations to avoid shipping disruption." },
        { title: "PM enrollment", body: "Optional ongoing maintenance contract to extend new system life." },
      ]}
    />
  ),
});
