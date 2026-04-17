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
    to: "/warehouse-maintenance-services-georgia",
    title: "Warehouse Maintenance Services",
    short:
      "Ongoing repairs, preventative maintenance, and facility support to keep operations running.",
    icon: Wrench,
  },
  {
    slug: "concrete-floor-repair",
    to: "/concrete-floor-repair-atlanta",
    title: "Concrete Floor Repair & Upgrades",
    short:
      "Fix cracking, spalling, uneven floors, and upgrade to polished concrete solutions.",
    icon: Hammer,
  },
  {
    slug: "dock-door-repair",
    to: "/dock-door-repair-atlanta",
    title: "Commercial Door & Dock Repair",
    short:
      "Repair dock doors, levelers, and entry systems to keep logistics moving.",
    icon: DoorOpen,
  },
  {
    slug: "industrial-hvac",
    to: "/industrial-hvac-repair-georgia",
    title: "Industrial HVAC & Mechanical",
    short:
      "Diagnose and repair HVAC issues in large industrial environments.",
    icon: Wind,
  },
  {
    slug: "commercial-renovations",
    to: "/commercial-renovations-atlanta",
    title: "Commercial Renovations & Buildouts",
    short:
      "Office buildouts, bathroom renovations, and phased facility upgrades.",
    icon: Building2,
  },
  {
    slug: "safety-barriers",
    to: "/warehouse-safety-installation-atlanta",
    title: "Safety Barriers & Facility Protection",
    short:
      "Bollards, guardrails, and safety systems to protect people and equipment.",
    icon: Shield,
  },
];
