import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";

export function CtaBand({
  title = "Need a reliable contractor for your facility?",
  subtitle = "Get a fast response from a team that understands active industrial environments.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container-pro flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center">
        <div>
          <h2 className="text-2xl font-bold md:text-3xl">{title}</h2>
          <p className="mt-2 max-w-xl text-primary-foreground/75">{subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link to="/contact" className="btn-primary">Request a Quote</Link>
          <a href="tel:+14705550100" className="btn-ghost-light">
            <Phone className="h-4 w-4" /> (470) 555-0100
          </a>
        </div>
      </div>
    </section>
  );
}
