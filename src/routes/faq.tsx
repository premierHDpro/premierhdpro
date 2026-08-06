import { createFileRoute, Link } from "@tanstack/react-router";

const faqs = [
  {
    q: "What types of facilities do you work on?",
    a: "We specialize in warehouses, distribution centers, manufacturing plants, and other industrial and commercial facilities across Metro Atlanta and Georgia.",
  },
  {
    q: "What services does Premier HD Pro provide?",
    a: "Warehouse maintenance, concrete floor repair, dock door and leveler repair, industrial HVAC, commercial renovations and buildouts, and safety barrier and bollard installation.",
  },
  {
    q: "What areas do you serve?",
    a: "Locust Grove, McDonough, Atlanta, Henry County, and the surrounding Metro Atlanta region. Contact us for projects elsewhere in Georgia.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. Premier HD Pro is a fully licensed and insured commercial general contractor in the State of Georgia.",
  },
  {
    q: "Do you offer emergency or after-hours repair service?",
    a: "Yes. We understand that downtime is costly, so we offer responsive scheduling for urgent dock, door, concrete, and HVAC repairs. Call (770) 285-0204 to discuss timing.",
  },
  {
    q: "How do I request a quote?",
    a: "Submit our contact form, email office@premierhdpro.com, or call (770) 285-0204. We'll typically follow up within one business day to schedule a site walk or gather more details.",
  },
  {
    q: "Do you handle small repairs or only large projects?",
    a: "Both. We support single-visit repairs as well as multi-phase renovations and ongoing facility maintenance programs.",
  },
  {
    q: "Can you work around our operating hours?",
    a: "Yes. We routinely schedule work during nights, weekends, or planned shutdowns to minimize disruption to your operations.",
  },
] as const;

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ | Premier HD Pro" },
      {
        name: "description",
        content:
          "Answers to common questions about Premier HD Pro's commercial contracting, warehouse maintenance, and facility repair services in Metro Atlanta.",
      },
      { property: "og:title", content: "FAQ | Premier HD Pro" },
      {
        property: "og:description",
        content:
          "Common questions about our warehouse, dock, concrete, HVAC, and renovation services across Georgia.",
      },
      { name: "robots", content: "index,follow" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FAQPage,
});

function FAQPage() {
  return (
    <div className="container-pro py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-foreground">Frequently Asked Questions</h1>
        <p className="mt-3 text-muted-foreground">
          Quick answers about working with Premier HD Pro. Don't see your question? Reach out
          via our{" "}
          <Link to="/contact" className="text-primary underline">contact page</Link>{" "}
          or call <a className="text-primary underline" href="tel:+17702850204">(770) 285-0204</a>.
        </p>

        <div className="mt-10 space-y-6">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-lg border border-border bg-card p-6">
              <h2 className="text-lg font-semibold text-foreground">{f.q}</h2>
              <p className="mt-2 text-foreground/80">{f.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-lg bg-primary p-8 text-primary-foreground">
          <h2 className="text-2xl font-bold">Still have questions?</h2>
          <p className="mt-2 text-primary-foreground/80">
            Our team is happy to walk through your project, timeline, and budget.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="rounded-md bg-safety px-5 py-2.5 font-semibold text-primary hover:opacity-90"
            >
              Request a Quote
            </Link>
            <a
              href="tel:+17702850204"
              className="rounded-md border border-primary-foreground/30 px-5 py-2.5 font-semibold hover:bg-primary-foreground/10"
            >
              Call (770) 285-0204
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}