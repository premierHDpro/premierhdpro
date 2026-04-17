import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

const services = [
  { to: "/services/warehouse-maintenance", label: "Warehouse Maintenance" },
  { to: "/services/concrete-floor-repair", label: "Concrete Floor Repair" },
  { to: "/services/dock-door-repair", label: "Door & Dock Repair" },
  { to: "/services/industrial-hvac", label: "Industrial HVAC" },
  { to: "/services/commercial-renovations", label: "Renovations & Buildouts" },
  { to: "/services/safety-barriers", label: "Safety Barriers & Bollards" },
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border bg-primary text-primary-foreground">
      <div className="container-pro grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="text-xl font-bold">Premier HD Pro</div>
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
              <MapPin className="h-4 w-4" /> McDonough, GA — Serving Metro Atlanta
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
          <div className="mb-4 text-sm font-bold uppercase tracking-wider">Company</div>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/locations/atlanta" className="hover:text-safety">Atlanta, GA</Link></li>
            <li><Link to="/blog" className="hover:text-safety">Insights & Blog</Link></li>
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
