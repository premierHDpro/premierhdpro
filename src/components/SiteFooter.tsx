import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/premier-hd-logo-pro.png";

const constructionServices = [
  { to: "/commercial-renovations-atlanta", label: "Warehouse Renovations" },
  { to: "/commercial-renovations-atlanta", label: "Tenant Improvements" },
  { to: "/commercial-renovations-atlanta", label: "Office Buildouts" },
  { to: "/concrete-floor-repair-atlanta", label: "Concrete Construction" },
  { to: "/dock-door-repair-atlanta", label: "Doors, Frames & Hardware" },
] as const;

const facilityServices = [
  { to: "/warehouse-maintenance-services-georgia", label: "Warehouse Maintenance" },
  { to: "/dock-door-repair-atlanta", label: "Dock Equipment Repairs" },
  { to: "/industrial-hvac-repair-georgia", label: "Industrial HVAC" },
  { to: "/warehouse-safety-installation-atlanta", label: "Bollards & Safety Rails" },
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
          <p className="mt-3 max-w-md text-sm text-primary-foreground/70">
            Industrial and commercial general contractor serving warehouses, distribution
            centers, manufacturing facilities, and commercial buildings across Metro
            Atlanta and Georgia.
          </p>
          <div className="mt-5 space-y-2 text-sm">
            <a href="tel:+17706285444" className="flex items-center gap-2 hover:text-signal">
              <Phone className="h-4 w-4" /> (770) 628-5444
            </a>
            <a href="mailto:office@premierhdpro.com" className="flex items-center gap-2 hover:text-signal">
              <Mail className="h-4 w-4" />
              <span>office@premierhdpro.com</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Locust Grove, GA — Serving Metro Atlanta
            </div>
          </div>
        </div>
        <div>
          <div className="mb-4 text-sm font-bold uppercase tracking-wider">Commercial Construction</div>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            {constructionServices.map((s) => (
              <li key={s.label}>
                <Link to={s.to} className="hover:text-signal">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mb-4 mt-6 text-sm font-bold uppercase tracking-wider">Facility Services</div>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            {facilityServices.map((s) => (
              <li key={s.label}>
                <Link to={s.to} className="hover:text-signal">
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
              <li key={l.to}><Link to={l.to} className="hover:text-signal">{l.label}</Link></li>
            ))}
            <li className="pt-2"><Link to="/blog" className="hover:text-signal">Insights & Blog</Link></li>
            <li><Link to="/contact" className="hover:text-signal">Request a Site Walk</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container-pro flex flex-col items-center justify-between gap-2 py-5 text-xs text-primary-foreground/60 md:flex-row">
          <div>© {new Date().getFullYear()} Premier HD Pro. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="hover:text-signal">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-signal">Terms of Service</Link>
            <Link to="/faq" className="hover:text-signal">FAQ</Link>
          </div>
          <div>Licensed & Insured · Industrial / Commercial GC · Georgia</div>
        </div>
      </div>
    </footer>
  );
}
