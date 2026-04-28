import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "../components/ServicePage";
import heroImg from "../assets/concrete-floor-hero.jpg";

export const Route = createFileRoute("/concrete-floor-repair-mcdonough")({
  head: () => ({
    meta: [
      { title: "Warehouse Concrete Repair McDonough, GA | Industrial Floor Repair" },
      { name: "description", content: "Industrial concrete floor repair in McDonough, GA. Crack repair, spalling, leveling, and resurfacing for distribution centers and warehouses along I-75." },
      { property: "og:title", content: "Warehouse Concrete Repair McDonough, GA" },
      { property: "og:description", content: "Concrete floor repair built for high-volume distribution centers in McDonough and Henry County." },
    ],
  }),
  component: () => (
    <ServicePage
      slug="concrete-floor-repair"
      heroImage={heroImg}
      heroEyebrow="Concrete Floor Repair McDonough"
      heroHeadline="Concrete Floor Repair in McDonough, GA for Warehouses & Distribution Centers"
      heroSubheadline="Helping facility managers in McDonough reduce downtime, fix damaged warehouse floors fast, and keep distribution operations running along the I-75 logistics corridor."
      primaryCtaLabel="Get Concrete Repair Pricing"
      problemIntro="McDonough has become one of Georgia's most active distribution hubs, with major warehouses and DCs lining I-75 from Jonesboro Road south to the Locust Grove line. That volume means concrete floors take a beating — heavy forklifts running multi-shift, constant pallet jack traffic, and trailers backing into the same dock approaches thousands of times a year. Cracks, spalling, and uneven joints don't stay small for long in McDonough's high-throughput facilities. Caught early, repairs are quick and inexpensive. Ignored, they become safety incidents, equipment damage, and full slab replacements."
      problems={[
        "Cracking from heavy forklift loads in multi-shift DCs",
        "Surface spalling and joint failures around dock approaches",
        "Uneven slabs creating forklift hazards in narrow aisles",
        "Concrete dusting affecting product cleanliness in food and pharma facilities",
        "Wear at high-traffic pick zones and staging areas",
      ]}
      offers={[
        "Crack repair — seal and stabilize before damage spreads",
        "Surface repair & resurfacing without full replacement",
        "Floor leveling to restore safe forklift travel",
        "Polished concrete upgrades for low-maintenance finishes",
        "High-traffic zone reinforcement for dock approaches and aisles",
        "Joint repair and saw-cut sealing",
        "Phased repair plans for active McDonough distribution centers",
      ]}
      midCtaText="Floors damaged in your McDonough facility? Get repair pricing today."
      midCtaLabel="Get Concrete Repair Pricing"
      process={[
        { title: "Assessment", body: "On-site walk of your McDonough facility to evaluate damage, traffic patterns, and operational constraints." },
        { title: "Planning around operations", body: "We phase work aisle-by-aisle or dock-by-dock so your DC keeps shipping through the project." },
        { title: "Execution", body: "Rapid-cure materials and proven methods built for high-traffic industrial environments." },
        { title: "Completion & inspection", body: "Final walkthrough with your operations team before sign-off — durability built for forklift traffic." },
      ]}
      whyUs={[
        "Based minutes from McDonough in Locust Grove — fast on-site response",
        "Experience phasing work in active DCs along I-75",
        "Rapid-cure materials sized for short maintenance windows",
        "One contractor for concrete, dock, and ongoing maintenance",
        "Serving McDonough, Locust Grove, Stockbridge, Hampton, and Henry County",
      ]}
      relatedPosts={[
        { slug: "cost-to-repair-concrete-floors-warehouse", anchor: "See our full cost guide to repairing warehouse concrete floors" },
        { slug: "polished-concrete-vs-epoxy-warehouse", anchor: "Compare polished concrete vs. epoxy floors for warehouses" },
      ]}
      bottomCtaHeadline="Get concrete floor repair pricing in McDonough."
      bottomCtaText="Address damaged floors before they become full replacements. Premier HD Pro is local to Henry County and built for active distribution operations."
      bottomCtaLabel="Get Concrete Repair Pricing"
    />
  ),
});
