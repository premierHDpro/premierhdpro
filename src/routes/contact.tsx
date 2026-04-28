import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHeader } from "../components/PageHeader";
import { ContactForm } from "../components/ContactForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Request a Quote | Premier HD Pro Commercial Contractor Georgia" },
      { name: "description", content: "Contact Premier HD Pro for warehouse maintenance, concrete floor repair, dock door repair, and commercial renovations across Metro Atlanta." },
      { property: "og:title", content: "Request a Quote — Premier HD Pro" },
      { property: "og:description", content: "Get a fast response from a commercial contractor that understands active industrial facilities." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Request a quote or schedule a site walk"
        subtitle="We respond within one business day. Tell us about your facility and what's not working — we'll come look."
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />
      <section className="section-pad">
        <div className="container-pro grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="rounded-lg border border-border bg-card p-7 shadow-sm">
              <h2 className="text-2xl font-bold">Tell us about your facility</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                The more detail you share, the faster we can scope a quote.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 space-y-5">
            <Info icon={Phone} title="Call us" body={<a href="tel:+17707441949" className="font-bold">(770) 744-1949</a>} sub="Mon–Fri, 7am–6pm ET" />
            <Info icon={Mail} title="Email" body={<a href="mailto:info@premierhdpro.com" className="font-bold">info@premierhdpro.com</a>} sub="We respond within one business day" />
            <Info icon={MapPin} title="Headquarters" body={<span className="font-bold">McDonough, GA</span>} sub="Serving Metro Atlanta and surrounding Georgia" />
            <div className="rounded-lg border border-border bg-primary p-6 text-primary-foreground">
              <h3 className="text-lg font-bold">Emergency dock or door failure?</h3>
              <p className="mt-2 text-sm text-primary-foreground/75">
                Call us directly for fastest response. We typically dispatch same-day or next business day.
              </p>
              <a href="tel:+17707441949" className="btn-primary mt-5 w-full">
                <Phone className="h-4 w-4" /> Call (770) 744-1949
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Info({
  icon: Icon,
  title,
  body,
  sub,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: React.ReactNode;
  sub: string;
}) {
  return (
    <div className="flex items-start gap-4 rounded-lg border border-border bg-card p-5">
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded bg-accent text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{title}</div>
        <div className="mt-1">{body}</div>
        <div className="mt-1 text-xs text-muted-foreground">{sub}</div>
      </div>
    </div>
  );
}
