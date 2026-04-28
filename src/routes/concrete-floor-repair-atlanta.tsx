import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "../components/ServicePage";
import heroImg from "../assets/concrete-floor-hero.jpg";

export const Route = createFileRoute("/concrete-floor-repair-atlanta")({
  head: () => ({
    meta: [
      { title: "Warehouse Concrete Repair Atlanta | Industrial Floor Repair Georgia" },
      { name: "description", content: "Industrial concrete floor repair across Atlanta and Georgia. Crack repair, spalling, leveling, and polishing for warehouses, distribution centers, and manufacturing facilities." },
      { property: "og:title", content: "Warehouse Concrete Repair Atlanta — Industrial Floor Repair Georgia" },
      { property: "og:description", content: "Crack repair, spalling, leveling, and resurfacing for warehouse floors built to handle forklift traffic." },
    ],
  }),
  component: () => (
    <ServicePage
      slug="concrete-floor-repair"
      heroEyebrow="Warehouse Concrete Repair Atlanta"
      heroHeadline="Concrete Floor Repair for Warehouses & Industrial Facilities in Atlanta"
      heroSubheadline="Fix cracked, uneven, or failing warehouse floors without shutting down operations. Premier HD Pro specializes in concrete floor repair for warehouses and distribution centers across Atlanta and Georgia — helping facility managers fix problems quickly while minimizing downtime."
      primaryCtaLabel="Get Concrete Repair Pricing"
      problemIntro="Warehouse floors don't fail overnight. Most issues build up over time and get worse if ignored. High forklift traffic, heavy loads, and constant use take a toll on industrial flooring — and once damage starts, every additional pass of a forklift makes the problem worse. Left untreated, floor issues lead to safety risks for employees, equipment damage, operational inefficiencies, and costly full replacements down the road."
      problems={[
        "Cracking from heavy loads and structural stress",
        "Surface spalling and chipping",
        "Uneven slabs causing forklift hazards",
        "Concrete dusting affecting cleanliness and equipment",
        "Worn or damaged high-traffic areas",
      ]}
      offers={[
        "Crack repair — seal and stabilize cracks to prevent spreading",
        "Surface repair & resurfacing — restore worn surfaces without full replacement",
        "Floor leveling — correct uneven areas to improve safety and equipment performance",
        "Polished concrete upgrades — durable, low-maintenance finished floors",
        "High-traffic area reinforcement — strengthen zones exposed to constant forklift use",
        "Phased repair plans for active distribution centers",
      ]}
      midCtaText="Dealing with damaged concrete floors? Get a repair estimate today."
      midCtaLabel="Get Concrete Repair Pricing"
      process={[
        { title: "Assessment", body: "We evaluate floor condition, damage areas, and operational constraints across your facility." },
        { title: "Planning around operations", body: "We phase work to avoid disruption and keep your facility running through the project." },
        { title: "Execution", body: "Efficient repair using proven methods and rapid-cure materials built for industrial environments." },
        { title: "Completion & inspection", body: "Final walkthrough to ensure durability, safety, and long-term performance before sign-off." },
      ]}
      whyUs={[
        "Experience working in active warehouse environments",
        "Ability to phase projects around operations",
        "Fast turnaround and reliable scheduling",
        "Solutions designed for long-term durability",
        "Serving Atlanta, McDonough, Locust Grove, and surrounding areas",
      ]}
      relatedPosts={[
        { slug: "cost-to-repair-concrete-floors-warehouse", anchor: "See our full cost guide to repairing warehouse concrete floors" },
        { slug: "polished-concrete-vs-epoxy-warehouse", anchor: "Compare polished concrete vs. epoxy floors for warehouses" },
      ]}
      bottomCtaHeadline="Get Concrete Floor Repair Pricing"
      bottomCtaText="If your warehouse floors are showing signs of damage, it's best to address the issue early before it becomes more expensive. Premier HD Pro helps facility managers across Georgia repair and upgrade industrial concrete floors with minimal disruption."
      bottomCtaLabel="Get Concrete Repair Pricing"
    />
  ),
});
