import {
  Wrench,
  Hammer,
  DoorOpen,
  Wind,
  Building2,
  Shield,
} from "lucide-react";
import type { ComponentType } from "react";

export type Service = {
  slug: string;
  to: string;
  title: string;
  short: string;
  icon: ComponentType<{ className?: string }>;
};

export const services: Service[] = [
  {
    slug: "warehouse-maintenance",
    to: "/services/warehouse-maintenance",
    title: "Warehouse Maintenance Services",
    short:
      "Ongoing facility maintenance programs that keep distribution centers running and reduce reactive repair costs.",
    icon: Wrench,
  },
  {
    slug: "concrete-floor-repair",
    to: "/services/concrete-floor-repair",
    title: "Concrete Floor Repair & Upgrades",
    short:
      "Crack repair, joint repair, spalling, and resurfacing for warehouse floors built to handle forklift traffic.",
    icon: Hammer,
  },
  {
    slug: "dock-door-repair",
    to: "/services/dock-door-repair",
    title: "Commercial Door & Dock Repair",
    short:
      "Dock doors, levelers, seals, and entry systems repaired fast to keep your loading dock fully operational.",
    icon: DoorOpen,
  },
  {
    slug: "industrial-hvac",
    to: "/services/industrial-hvac",
    title: "Industrial HVAC & Mechanical",
    short:
      "Repairs, replacements, and upgrades for HVAC systems serving large warehouse and industrial spaces.",
    icon: Wind,
  },
  {
    slug: "commercial-renovations",
    to: "/services/commercial-renovations",
    title: "Commercial Renovations & Buildouts",
    short:
      "Office buildouts, restrooms, and phased renovations executed in active facilities without shutting you down.",
    icon: Building2,
  },
  {
    slug: "safety-barriers",
    to: "/services/safety-barriers",
    title: "Safety Barriers, Bollards & Protection",
    short:
      "Bollards, guardrails, column protectors, and rack guards to protect equipment, people, and infrastructure.",
    icon: Shield,
  },
];
