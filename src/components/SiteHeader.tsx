import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/premier-hd-logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/locations/locust-grove", label: "Service Areas" },
  { to: "/blog", label: "Insights" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="container-pro flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 font-bold">
          <img
            src={logo}
            alt="Premier HD logo"
            width={56}
            height={56}
            className="h-14 w-14 object-contain"
          />
          <div className="leading-tight">
            <div className="text-base">Premier HD Pro</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
              Commercial Contractor
            </div>
          </div>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+14705550100"
            className="flex items-center gap-2 text-sm font-semibold text-foreground"
          >
            <Phone className="h-4 w-4 text-safety" />
            (470) 555-0100
          </a>
          <Link to="/contact" className="btn-primary">
            Request a Quote
          </Link>
        </div>
        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container-pro flex flex-col gap-1 py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="rounded px-2 py-2 text-sm font-medium hover:bg-accent"
                onClick={() => setOpen(false)}
              >
                {n.label}
              </Link>
            ))}
            <a
              href="tel:+14705550100"
              className="mt-2 flex items-center gap-2 px-2 py-2 text-sm font-semibold"
            >
              <Phone className="h-4 w-4 text-safety" /> (470) 555-0100
            </a>
            <Link to="/contact" className="btn-primary mt-2" onClick={() => setOpen(false)}>
              Request a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
