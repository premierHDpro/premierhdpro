import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "../components/ServicePage";
import ogImg from "../assets/og-dock-door.jpg";

export const Route = createFileRoute("/dock-door-repair-atlanta")({
  head: () => ({
    meta: [
      { title: "Dock Door Repair Atlanta | Warehouse Door Repair Georgia" },
      { name: "description", content: "Commercial dock door repair across Atlanta and Georgia. Dock doors, levelers, seals, and entry systems repaired fast to keep your loading dock operational." },
      { property: "og:title", content: "Dock Door Repair Atlanta — Warehouse Door Repair Georgia" },
      { property: "og:description", content: "Fast dock door, leveler, and entry system repairs for warehouses across Metro Atlanta." },
      { property: "og:image", content: ogImg },
      { name: "twitter:image", content: ogImg },
    ],
  }),
  component: () => (
    <ServicePage
      slug="dock-door-repair"
      heroEyebrow="Dock Door Repair Atlanta"
      heroHeadline="Dock Door & Warehouse Entry Repair Services"
      heroSubheadline="Warehouse door repair across Georgia — Atlanta, McDonough, Locust Grove, and Henry County. Rapid response for dock doors, levelers, seals, and entry systems that stop outbound shipping cold."
      primaryCtaLabel="Schedule Door Repair"
      problemIntro="Dock equipment is the #1 source of unplanned downtime in most distribution centers. A door stuck open delays every outbound trailer. A leveler that won't extend stops loading entirely. Worn springs, failed operators, torn seals, and bent panels all cascade into safety risks and shipping delays. The longer a failed dock sits, the more it costs you in missed pickups, overtime, and customer service issues."
      problems={[
        "Dock doors stuck open or closed — outbound shipping blocked",
        "Levelers no longer holding load or extending properly",
        "Daylight visible around door perimeter from failing seals",
        "Operators failing more frequently — safety and OSHA risk",
        "Repeated forklift impact damage to the same opening",
      ]}
      offers={[
        "Dock door repair and panel replacement",
        "Spring, cable, and roller service",
        "Dock leveler repair (mechanical & hydraulic)",
        "Dock seal and shelter replacement",
        "Operator repair and replacement",
        "High-speed and roll-up door service",
        "Storefront and entry system repair",
        "Full dock door replacement projects",
      ]}
      midCtaText="Experiencing door issues? Schedule a repair visit today."
      midCtaLabel="Schedule Door Repair"
      process={[
        { title: "Rapid response", body: "We respond fast for emergency dock failures — typically same-day or next business day across Metro Atlanta." },
        { title: "Diagnose & quote", body: "On-site diagnosis with a clear repair-vs-replace recommendation and a written quote." },
        { title: "Repair execution", body: "Most dock door repairs complete in a single visit. Replacements are staged dock-by-dock to keep your loading area moving." },
        { title: "Operational handoff", body: "Full cycle test with your operations team before we leave the site. No callbacks for issues we should have caught." },
      ]}
      relatedPosts={[
        { slug: "commercial-door-replacement-guide", anchor: "Read our commercial door replacement guide" },
        { slug: "common-maintenance-issues-distribution-centers", anchor: "See common warehouse maintenance issues we solve" },
      ]}
      bottomCtaHeadline="Get your dock doors back operational fast."
      bottomCtaText="Don't lose another shipping window. Schedule a repair visit and we'll have a technician onsite quickly."
      bottomCtaLabel="Schedule Door Repair"
    />
  ),
});
