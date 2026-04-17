import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "../components/ServicePage";

export const Route = createFileRoute("/services/concrete-floor-repair")({
  head: () => ({
    meta: [
      { title: "Warehouse Concrete Floor Repair in Atlanta | Premier HD Pro" },
      { name: "description", content: "Industrial concrete floor repair across Georgia. Crack repair, joint repair, spalling, and resurfacing for warehouses and distribution centers." },
      { property: "og:title", content: "Warehouse Concrete Floor Repair in Atlanta" },
      { property: "og:description", content: "Industrial floor repair Georgia — crack, joint, spalling, polishing, and full resurfacing." },
    ],
  }),
  component: () => (
    <ServicePage
      slug="concrete-floor-repair"
      intro="Warehouse concrete takes a beating — forklift traffic, dropped pallets, freeze-thaw at dock doors, and decades of joint impact all add up. Left alone, small failures compound fast. Premier HD Pro delivers commercial concrete floor repair across Atlanta and Georgia: crack repair, joint armoring, spall repair, uneven floor correction, and full resurfacing systems. We use rapid-cure materials so your floors return to forklift traffic in hours, not days."
      offers={[
        "Crack repair (epoxy & polyurea injection)",
        "Joint repair and semi-rigid filler",
        "Spall repair at dock doors and joints",
        "Section saw-cut and replacement",
        "Concrete polishing and densifying",
        "Epoxy and urethane coatings",
        "Floor flatness/levelness correction",
        "Phased repair plans for active facilities",
      ]}
      issues={[
        "Cracking and shrinkage in older slabs",
        "Spalling at control joints and dock approaches",
        "Uneven floors causing forklift wear and pallet rack issues",
        "Coatings failing or delaminating from improper installation",
        "Choosing between polished concrete and epoxy upgrades",
      ]}
      process={[
        { title: "Floor assessment", body: "We walk every joint and crack, photograph priority issues, and document with measurements." },
        { title: "Scope & prioritization", body: "Written scope ranked by safety, operational risk, and budget impact." },
        { title: "Phased execution", body: "Repairs sequenced around your shipping schedule using rapid-cure materials." },
        { title: "Verification", body: "Post-repair inspection with operations sign-off before crews demobilize." },
      ]}
    />
  ),
});
