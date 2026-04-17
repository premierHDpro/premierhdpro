import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "../components/ServicePage";

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
      heroHeadline="Concrete Floor Repair for Warehouses & Industrial Facilities"
      heroSubheadline="Industrial floor repair across Georgia — Atlanta, McDonough, Locust Grove, and Henry County. Rapid-cure repairs that return slabs to forklift traffic in hours, not days."
      primaryCtaLabel="Get Concrete Repair Pricing"
      problemIntro="Warehouse concrete takes more abuse than almost any other surface in a commercial building. Constant forklift traffic, dropped pallets, freeze-thaw at dock doors, and decades of joint impact compound fast. Cracked floors create forklift damage. Spalled joints destroy forklift wheels. Uneven surfaces throw racking out of plumb. Once degradation starts, every additional pass of a forklift makes the problem worse — and more expensive."
      problems={[
        "Cracked floors spreading from joints and control cuts",
        "Spalling at dock door approaches and high-traffic joints",
        "Uneven surfaces causing forklift wear and pallet rack instability",
        "Forklift wheel damage from worn or unfilled joints",
        "Failed coatings, delaminating epoxy, or worn sealers",
      ]}
      offers={[
        "Crack repair (epoxy & polyurea injection)",
        "Joint repair and semi-rigid filler",
        "Spall repair at dock doors and joints",
        "Section saw-cut and replacement",
        "Concrete leveling and grinding",
        "Concrete polishing and densifier upgrades",
        "Epoxy and urethane coating systems",
        "Phased repair plans for active facilities",
      ]}
      midCtaText="Dealing with damaged concrete floors? Get a repair estimate today."
      midCtaLabel="Get Concrete Repair Pricing"
      process={[
        { title: "Floor assessment", body: "We walk every joint and crack, photograph priority issues, and capture measurements for an accurate scope." },
        { title: "Scope & prioritization", body: "Written scope ranked by safety, operational risk, and budget impact — so you can phase work intelligently." },
        { title: "Phased execution", body: "Repairs sequenced around your shipping schedule using rapid-cure materials that return floors to traffic in hours." },
        { title: "Verification & closeout", body: "Post-repair inspection with operations sign-off before crews demobilize. No surprises." },
      ]}
      relatedPosts={[
        { slug: "cost-to-repair-concrete-floors-warehouse", anchor: "Learn more about concrete repair costs in a warehouse" },
        { slug: "polished-concrete-vs-epoxy-warehouse", anchor: "Compare polished concrete vs. epoxy floors for warehouses" },
      ]}
      bottomCtaHeadline="Request pricing for your warehouse floor repair project."
      bottomCtaText="Send us your floor plan or schedule a site walk. We'll deliver a phased scope and pricing built for your operation."
      bottomCtaLabel="Get Concrete Repair Pricing"
    />
  ),
});
