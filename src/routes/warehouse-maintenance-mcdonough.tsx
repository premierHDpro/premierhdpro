import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "../components/ServicePage";
import heroImg from "../assets/warehouse-maintenance-hero.jpg";

export const Route = createFileRoute("/warehouse-maintenance-mcdonough")({
  head: () => ({
    meta: [
      { title: "Warehouse Maintenance McDonough, GA | Distribution Center Facility Services" },
      { name: "description", content: "Warehouse maintenance services in McDonough, GA. Preventative maintenance, on-call repairs, and facility support for distribution centers along I-75." },
      { property: "og:title", content: "Warehouse Maintenance McDonough, GA" },
      { property: "og:description", content: "Reliable facility maintenance for McDonough warehouses and DCs — based locally in Locust Grove." },
    ],
  }),
  component: () => (
    <ServicePage
      slug="warehouse-maintenance"
      heroImage={heroImg}
      heroEyebrow="Warehouse Maintenance McDonough"
      heroHeadline="Warehouse Maintenance Services in McDonough, GA for Distribution Centers & Industrial Facilities"
      heroSubheadline="Helping facility managers in McDonough reduce downtime, fix problems fast, and keep distribution operations running across high-volume DCs along the I-75 corridor."
      primaryCtaLabel="Request Maintenance Support"
      problemIntro="McDonough's distribution centers run nearly nonstop. With major DCs operating along Jonesboro Road, Highway 81, and the I-75 corridor, facility managers can't afford slow vendors or repeated callbacks. Most maintenance issues here come from sheer volume — high-cycle dock doors, forklift wear on concrete, plumbing in shared restrooms used by hundreds of associates per shift, and HVAC running hard through Georgia summers. Premier HD Pro is based just south in Locust Grove, which means we're on-site in McDonough faster than vendors based in Atlanta."
      problems={[
        "Dock doors failing in high-cycle outbound shipping operations",
        "Concrete wear at staging and pick zones from constant forklift traffic",
        "Restroom and breakroom plumbing issues in large headcount facilities",
        "HVAC short-cycling during Georgia summer peaks",
        "Deferred maintenance backlogs from understaffed in-house teams",
      ]}
      offers={[
        "On-call repairs and rapid response in McDonough and Henry County",
        "Preventative maintenance programs (monthly, quarterly, annual)",
        "Multi-site maintenance for portfolio managers",
        "Concrete, dock door, and HVAC repairs under one contractor",
        "Lighting, plumbing, and minor electrical repairs",
        "Restroom and breakroom upkeep for high-headcount facilities",
        "Documented work orders and asset tracking",
      ]}
      midCtaText="Need reliable maintenance support in McDonough? Let's talk."
      midCtaLabel="Request Maintenance Support"
      process={[
        { title: "Facility walkthrough", body: "On-site walk of your McDonough facility to capture open issues, deferred items, and recurring failures." },
        { title: "Maintenance plan", body: "Schedule built around your shift patterns and outbound shipping windows." },
        { title: "Phased execution", body: "Work sequenced to keep dock doors, aisles, and operations running. Planned shutdowns only." },
        { title: "Reporting & follow-up", body: "Written reports after every visit. You always know what was done, what's next, and what to budget." },
      ]}
      whyUs={[
        "Based in Locust Grove — minutes from McDonough DCs",
        "Experience in active 24/7 distribution operations",
        "One contractor for repairs, PMs, and capital projects",
        "Reliable scheduling and clear written communication",
        "Serving McDonough, Locust Grove, Stockbridge, Hampton, and Henry County",
      ]}
      relatedPosts={[
        { slug: "common-maintenance-issues-distribution-centers", anchor: "See common maintenance issues we solve in distribution centers" },
        { slug: "preventative-maintenance-plan-facilities", anchor: "Learn how a PM plan reduces unplanned downtime" },
      ]}
      bottomCtaHeadline="Get reliable warehouse maintenance in McDonough."
      bottomCtaText="One local contractor for maintenance, repairs, and capital projects. Based in Locust Grove, fast across Henry County."
      bottomCtaLabel="Request Maintenance Support"
    />
  ),
});
