import recentOffice from "../assets/office-buildout-open-area.jpg";
import recentConcrete from "../assets/polished-concrete-brp.jpg.asset.json";
import recentBathroom from "../assets/bathroom-reno-main-vanity.jpg";
import autoDoor from "../assets/auto-door-laundry-exterior.jpg";
import countryClubDoor from "../assets/door-replacement-complete.jpg";
import demoStripout from "../assets/demo-restroom-overview.jpg";
import racking from "../assets/racking-new-bays.jpg";
import polishedCharcoal from "../assets/polished-concrete-charcoal-office.jpg";
import officeConference from "../assets/office-buildout-conference.jpg";

const brpConcreteAfter = "/assets/brp-concrete-repair-after.jpeg";

export type Project = {
  title: string;
  type: string;
  slug: string;
  img: string;
  blurb: string;
};

export const projects: readonly Project[] = [
  {
    title: "BRP Forklift Aisle Concrete Repair",
    type: "Concrete Construction & Floor Repair",
    slug: "concrete-floor-repair",
    img: brpConcreteAfter,
    blurb:
      "Cracked slab between storage racks on an active forklift aisle at BRP — saw-cut, rebar tied, and re-poured flush with the surrounding floor.",
  },
  {
    title: "Office Buildout — Carpet & Service Windows",
    type: "Office Buildouts",
    slug: "office-buildouts",
    img: recentOffice,
    blurb:
      "Full interior buildout with new carpet, private offices, and custom service and transaction windows.",
  },
  {
    title: "Polished Concrete Floors",
    type: "Concrete Construction & Floor Repair",
    slug: "concrete-floor-repair",
    img: recentConcrete.url,
    blurb:
      "Office slab at BRP ground and polished to a high-gloss, durable finish with natural light reflection.",
  },
  {
    title: "Home Depot DC Bathroom Renovation",
    type: "Commercial Renovations",
    slug: "commercial-renovations",
    img: recentBathroom,
    blurb:
      "Full bathroom renovation at an active Home Depot distribution center — vanities, stalls, tile, and fixtures.",
  },
  {
    title: "Automatic Door — New Build Laundry",
    type: "Doors, Frames & Hardware",
    slug: "doors-frames-hardware",
    img: autoDoor,
    blurb:
      "Automatic sliding entrance installed at a new-build commercial laundry facility.",
  },
  {
    title: "Country Club Door Replacement",
    type: "Doors, Frames & Hardware",
    slug: "doors-frames-hardware",
    img: countryClubDoor,
    blurb:
      "Replaced an exterior door and frame at a country club with minimal disruption to club operations.",
  },
  {
    title: "Restroom Demo & Site Prep",
    type: "Demolition & Site Prep",
    slug: "demolition",
    img: demoStripout,
    blurb:
      "Selective demo and full restroom stripout in preparation for a turnkey renovation.",
  },
  {
    title: "Pallet Racking & Column Protection",
    type: "Safety Barriers",
    slug: "safety-barriers",
    img: racking,
    blurb:
      "New selective racking, column protectors, and end-of-aisle guards installed alongside active pick aisles.",
  },
  {
    title: "Charcoal Polished Concrete — Office",
    type: "Concrete Construction & Floor Repair",
    slug: "concrete-floor-repair",
    img: polishedCharcoal,
    blurb:
      "Dyed charcoal polished concrete office floor delivering a modern, low-maintenance finish.",
  },
  {
    title: "Conference Room Buildout",
    type: "Office Buildouts",
    slug: "office-buildouts",
    img: officeConference,
    blurb:
      "Conference room finished out with new carpet, paint, lighting, and ceiling grid.",
  },
] as const;
