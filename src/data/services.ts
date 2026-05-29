import {
  Wrench,
  Hammer,
  DoorOpen,
  Wind,
  Building2,
  Shield,
  HardHat,
  Construction,
  LayoutGrid,
  Layers,
  PaintRoller,
  Boxes,
  Lightbulb,
  Truck,
  AlertTriangle,
  Cog,
  Warehouse,
  ShieldCheck,
} from "lucide-react";
import type { ComponentType } from "react";

export type Service = {
  slug: string;
  to: string;
  title: string;
  short: string;
  icon: ComponentType<{ className?: string }>;
  category: "construction" | "facility";
};

export const services: Service[] = [
  // ───── COMMERCIAL CONSTRUCTION ─────
  {
    slug: "commercial-renovations",
    to: "/commercial-renovations-atlanta",
    title: "Warehouse Renovations",
    short:
      "Phased renovations inside active warehouses — completed without halting operations.",
    icon: Warehouse,
    category: "construction",
  },
  {
    slug: "tenant-improvements",
    to: "/commercial-renovations-atlanta",
    title: "Tenant Improvements",
    short:
      "Full TI buildouts for commercial and industrial tenants on accelerated schedules.",
    icon: LayoutGrid,
    category: "construction",
  },
  {
    slug: "office-buildouts",
    to: "/commercial-renovations-atlanta",
    title: "Office Buildouts",
    short:
      "Office, breakroom, and admin-area buildouts inside warehouse and industrial facilities.",
    icon: Building2,
    category: "construction",
  },
  {
    slug: "interior-construction",
    to: "/commercial-renovations-atlanta",
    title: "Interior Construction",
    short:
      "Walls, partitions, ceilings, and full interior scopes coordinated trade-by-trade.",
    icon: Layers,
    category: "construction",
  },
  {
    slug: "metal-framing-drywall",
    to: "/commercial-renovations-atlanta",
    title: "Metal Framing & Drywall",
    short:
      "Light-gauge metal framing, drywall, and finish work for commercial interiors.",
    icon: Construction,
    category: "construction",
  },
  {
    slug: "concrete-floor-repair",
    to: "/concrete-floor-repair-atlanta",
    title: "Concrete Construction",
    short:
      "Slab pours, repairs, joint work, and polished concrete for industrial floors.",
    icon: Hammer,
    category: "construction",
  },
  {
    slug: "structural-modifications",
    to: "/commercial-renovations-atlanta",
    title: "Structural Modifications",
    short:
      "Wall removals, openings, and structural reinforcement for facility reconfigurations.",
    icon: HardHat,
    category: "construction",
  },
  {
    slug: "demolition",
    to: "/commercial-renovations-atlanta",
    title: "Demolition",
    short:
      "Selective interior demolition and site clearing inside operational facilities.",
    icon: AlertTriangle,
    category: "construction",
  },
  {
    slug: "doors-frames-hardware",
    to: "/dock-door-repair-atlanta",
    title: "Doors, Frames & Hardware",
    short:
      "Commercial doors, frames, hardware, and dock door packages — supplied and installed.",
    icon: DoorOpen,
    category: "construction",
  },
  {
    slug: "flooring-finishes",
    to: "/concrete-floor-repair-atlanta",
    title: "Flooring & Finishes",
    short:
      "Industrial flooring, epoxy coatings, paint, and finish packages built for traffic.",
    icon: PaintRoller,
    category: "construction",
  },
  {
    slug: "exterior-improvements",
    to: "/commercial-renovations-atlanta",
    title: "Exterior Improvements",
    short:
      "Façade work, dock area exteriors, bollards, and site-level facility improvements.",
    icon: Boxes,
    category: "construction",
  },

  // ───── FACILITY SERVICES ─────
  {
    slug: "dock-door-repair",
    to: "/dock-door-repair-atlanta",
    title: "Dock Equipment Repairs",
    short:
      "Dock doors, levelers, and seals repaired or replaced to keep logistics moving.",
    icon: Truck,
    category: "facility",
  },
  {
    slug: "emergency-facility-repairs",
    to: "/warehouse-maintenance-services-georgia",
    title: "Emergency Facility Repairs",
    short:
      "Same-day and after-hours response for urgent facility breakdowns and damage.",
    icon: AlertTriangle,
    category: "facility",
  },
  {
    slug: "safety-barriers",
    to: "/warehouse-safety-installation-atlanta",
    title: "Bollards & Safety Rails",
    short:
      "Concrete-filled bollards, guardrails, and column protection installed to OSHA.",
    icon: Shield,
    category: "facility",
  },
  {
    slug: "lighting-electrical-upgrades",
    to: "/warehouse-maintenance-services-georgia",
    title: "Lighting & Electrical Upgrades",
    short:
      "LED retrofits, high-bay lighting, and electrical upgrades for warehouse facilities.",
    icon: Lightbulb,
    category: "facility",
  },
  {
    slug: "warehouse-maintenance",
    to: "/warehouse-maintenance-services-georgia",
    title: "Warehouse Maintenance",
    short:
      "Recurring preventative maintenance programs for distribution and industrial facilities.",
    icon: Wrench,
    category: "facility",
  },
  {
    slug: "facility-upgrades",
    to: "/warehouse-maintenance-services-georgia",
    title: "Facility Upgrades",
    short:
      "Planned upgrades to dock, lighting, HVAC, and safety systems across your facility.",
    icon: Cog,
    category: "facility",
  },
  {
    slug: "preventative-repairs",
    to: "/warehouse-maintenance-services-georgia",
    title: "Preventative Repairs",
    short:
      "Catch failures before they cause downtime with scheduled inspection and repair.",
    icon: ShieldCheck,
    category: "facility",
  },
  {
    slug: "industrial-hvac",
    to: "/industrial-hvac-repair-georgia",
    title: "Operational Improvements",
    short:
      "HVAC, mechanical, and systems upgrades that improve facility efficiency.",
    icon: Wind,
    category: "facility",
  },
];