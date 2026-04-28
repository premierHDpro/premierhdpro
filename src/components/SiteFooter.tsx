import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/premier-hd-logo-pro.png";

const services = [
  { to: "/warehouse-maintenance-services-georgia", label: "Warehouse Maintenance" },
  { to: "/concrete-floor-repair-atlanta", label: "Concrete Floor Repair" },
  { to: "/dock-door-repair-atlanta", label: "Door & Dock Repair" },
  { to: "/industrial-hvac-repair-georgia", label: "Industrial HVAC" },
  { to: "/commercial-renovations-atlanta", label: "Renovations & Buildouts" },
  { to: "/warehouse-safety-installation-atlanta", label: "Safety Barriers & Bollards" },
] as const;

const locations = [
  { to: "/locations/locust-grove", label: "Locust Grove, GA" },
  { to: "/locations/mcdonough", label: "McDonough, GA" },
  { to: "/locations/atlanta", label: "Atlanta, GA" },
  { to: "/locations/henry-county", label: "Henry County, GA" },
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border bg-primary text-primary-foreground">
      <div className="container-pro grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Premier HD logo"
              width={64}
              height={64}
              className="h-16 w-16 rounded bg-white p-1.5 object-contain"
            />
            <div className="flex flex-col text-sm font-semibold uppercase leading-tight tracking-widest text-primary-foreground/80">
              <span>Commercial</span>
              <span>General</span>
              <span>Contractor</span>
            </div>
          </div>
          <div className="mt-2 inline-flex items-center gap-2 border-y border-safety/60 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-safety">
            <span>Built on Relationships</span>
            <span className="text-safety/50">◆</span>
            <span>Driven by Integrity</span>
          </div>
          <p className="mt-3 max-w-md text-sm text-primary-foreground/70">
            Commercial general contractor serving distribution centers, warehouses, and
            industrial facilities across Metro Atlanta and Georgia.
          </p>
          <div className="mt-5 space-y-2 text-sm">
            <a href="tel:+14705550100" className="flex items-center gap-2 hover:text-safety">
              <Phone className="h-4 w-4" /> (470) 555-0100
            </a>
            <a href="mailto:info@premierhdpro.com" className="flex items-center gap-2 hover:text-safety">
              <Mail className="h-4 w-4" />
              <span>info@premierhdpro.com</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Locust Grove, GA — Serving Metro Atlanta
            </div>
          </div>
        </div>
        <div>
          <div className="mb-4 text-sm font-bold uppercase tracking-wider">Services</div>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            {services.map((s) => (
              <li key={s.to}>
                <Link to={s.to} className="hover:text-safety">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="mb-4 text-sm font-bold uppercase tracking-wider">Service Areas</div>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            {locations.map((l) => (
              <li key={l.to}><Link to={l.to} className="hover:text-safety">{l.label}</Link></li>
            ))}
            <li className="pt-2"><Link to="/blog" className="hover:text-safety">Insights & Blog</Link></li>
            <li><Link to="/contact" className="hover:text-safety">Request a Quote</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container-pro flex flex-col items-center justify-between gap-2 py-5 text-xs text-primary-foreground/60 md:flex-row">
          <div>© {new Date().getFullYear()} Premier HD Pro. All rights reserved.</div>
          <div>Licensed & Insured · Commercial General Contractor · Georgia</div>
        </div>
      </div>
    </footer>
  );
}
