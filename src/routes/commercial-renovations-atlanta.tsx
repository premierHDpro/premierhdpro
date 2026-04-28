import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "../components/ServicePage";
import heroImg from "../assets/commercial-renovations-hero.jpg";

export const Route = createFileRoute("/commercial-renovations-atlanta")({
  head: () => ({
    meta: [
      { title: "Commercial Renovations Atlanta | Warehouse Office Buildout" },
      { name: "description", content: "Commercial renovations and warehouse office buildouts across Atlanta. Phased construction in active facilities — restrooms, offices, mezzanines, and more." },
      { property: "og:title", content: "Commercial Renovations Atlanta — Warehouse Office Buildout" },
      { property: "og:description", content: "Office buildouts, restrooms, and phased renovations executed inside active warehouses and distribution centers." },
    ],
  }),
  component: () => (
    <ServicePage
      slug="commercial-renovations"
      heroImage={heroImg}
      heroEyebrow="Commercial Renovations Atlanta"
      heroHeadline="Commercial Renovations for Active Warehouse Facilities"
      heroSubheadline="Warehouse office buildouts and commercial renovations across Atlanta and Georgia — McDonough, Locust Grove, and Henry County. Phased to keep your facility shipping every day of the project."
      primaryCtaLabel="Plan Your Renovation"
      problemIntro="Renovations inside an operating distribution center require a completely different playbook than ground-up construction. Walls, MEP, dust control, and life safety all have to be coordinated around continuous operations. Outdated office space, undersized restrooms, and inefficient layouts hold operations back — but most facility managers can't afford to shut down to fix them. The right contractor designs the project around your shipping schedule, not against it."
      problems={[
        "Outdated office and break room spaces no longer fit headcount",
        "Inefficient layouts slowing operations or onboarding",
        "Restrooms undersized or out of ADA compliance",
        "Need facility upgrades without shutting down operations",
        "Owner-occupied buildings needing tenant-ready spaces",
      ]}
      offers={[
        "Warehouse office buildouts",
        "Bathroom additions and renovations",
        "Break room and locker room buildouts",
        "Conference and training rooms",
        "Mezzanine construction",
        "Tenant improvement (TI) projects",
        "Phased renovation planning",
        "Life safety and code upgrades",
      ]}
      midCtaText="Planning a renovation? Let's map out your project."
      midCtaLabel="Plan Your Renovation"
      process={[
        { title: "Scope & design coordination", body: "We coordinate with your architect — or bring one in — to align design with operational realities and budget." },
        { title: "Phased construction plan", body: "Each phase is sequenced to protect adjacent operations: dust, noise, life safety, and access all planned in advance." },
        { title: "Construction execution", body: "We self-perform key trades and tightly manage subcontractors. Daily ops handoffs keep you informed." },
        { title: "Closeout", body: "Punch list completion, code inspections, and a complete closeout package delivered." },
      ]}
      relatedPosts={[
        { slug: "common-maintenance-issues-distribution-centers", anchor: "See the operational issues facility renovations help solve" },
        { slug: "preventative-maintenance-plan-facilities", anchor: "Learn how to plan capital projects alongside maintenance" },
      ]}
      bottomCtaHeadline="Start your commercial renovation with a site walk."
      bottomCtaText="Tell us about your facility and the spaces you need to upgrade. We'll build a phased plan that keeps you operational."
      bottomCtaLabel="Plan Your Renovation"
    />
  ),
});
