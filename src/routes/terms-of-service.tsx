import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms-of-service")({
  head: () => ({
    meta: [
      { title: "Terms of Service | Premier HD Pro" },
      {
        name: "description",
        content:
          "Terms governing the use of premierhdpro.com and information about Premier HD Pro's commercial contracting services.",
      },
      { name: "robots", content: "index,follow" },
    ],
  }),
  component: TermsOfServicePage,
});

function TermsOfServicePage() {
  const updated = "April 30, 2026";
  return (
    <div className="container-pro py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-foreground">Terms of Service</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: {updated}</p>

        <div className="prose prose-neutral mt-8 max-w-none space-y-6 text-foreground/90">
          <section>
            <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
            <p>
              By accessing or using premierhdpro.com (the "Site"), you agree to these Terms of
              Service. If you do not agree, please do not use the Site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">2. About Our Services</h2>
            <p>
              Premier HD Pro is a commercial general contractor serving warehouses, distribution
              centers, and industrial facilities across Metro Atlanta and Georgia. Information
              presented on the Site is for general informational purposes and does not
              constitute a binding offer or contract for services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">3. Quotes and Estimates</h2>
            <p>
              Any pricing, scopes, or estimates provided through the Site or our contact forms
              are preliminary and subject to a written proposal and signed agreement. Final
              pricing depends on site conditions, materials, and scope of work.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">4. Use of the Site</h2>
            <ul className="list-disc pl-6">
              <li>You agree to use the Site only for lawful purposes.</li>
              <li>
                You may not attempt to disrupt, reverse-engineer, scrape, or gain unauthorized
                access to any part of the Site or its underlying systems.
              </li>
              <li>
                You agree not to submit false, misleading, or harmful information through any
                form on the Site.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">5. Intellectual Property</h2>
            <p>
              All content on the Site — including text, graphics, logos, images, and project
              photos — is the property of Premier HD Pro or its licensors and is protected by
              applicable intellectual property laws. You may not reproduce or redistribute
              content without prior written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">6. Disclaimers</h2>
            <p>
              The Site is provided "as is" without warranties of any kind, express or implied.
              We do not warrant that the Site will be uninterrupted, error-free, or free of
              harmful components.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">7. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Premier HD Pro shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages arising out of
              or related to your use of the Site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">8. Third-Party Links</h2>
            <p>
              The Site may contain links to third-party websites. We are not responsible for the
              content or practices of any third-party site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">9. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the State of Georgia, without regard to
              conflict-of-law principles. Any disputes shall be resolved in the state or federal
              courts located in Henry County, Georgia.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">10. Changes to These Terms</h2>
            <p>
              We may update these Terms at any time. Continued use of the Site after changes are
              posted constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">11. Contact</h2>
            <p>
              Premier HD Pro<br />
              Locust Grove, GA<br />
              Phone: <a className="text-primary underline" href="tel:+17702850204">(770) 285-0204</a><br />
              Email:{" "}
              <a className="text-primary underline" href="mailto:office@premierhdpro.com">
                office@premierhdpro.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}