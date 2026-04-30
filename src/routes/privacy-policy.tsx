import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Premier HD Pro" },
      {
        name: "description",
        content:
          "How Premier HD Pro collects, uses, and protects information submitted through premierhdpro.com.",
      },
      { name: "robots", content: "index,follow" },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  const updated = "April 30, 2026";
  return (
    <div className="container-pro py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-foreground">Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: {updated}</p>

        <div className="prose prose-neutral mt-8 max-w-none space-y-6 text-foreground/90">
          <section>
            <h2 className="text-2xl font-semibold">1. Introduction</h2>
            <p>
              Premier HD Pro ("we," "us," or "our") respects your privacy. This Privacy Policy
              explains how we collect, use, and safeguard information when you visit
              premierhdpro.com or contact us about our commercial general contracting services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">2. Information We Collect</h2>
            <ul className="list-disc pl-6">
              <li>
                <strong>Contact details</strong> you submit through our forms or by phone/email
                (name, company, email, phone, project description).
              </li>
              <li>
                <strong>Technical data</strong> automatically collected by our hosting provider
                (IP address, browser type, pages viewed, referring URL).
              </li>
              <li>
                <strong>Cookies</strong> used for basic site functionality and analytics.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">3. How We Use Information</h2>
            <ul className="list-disc pl-6">
              <li>To respond to quote requests and service inquiries.</li>
              <li>To schedule estimates, site visits, and project work.</li>
              <li>To improve our website, services, and customer communications.</li>
              <li>To comply with legal and tax obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">4. Sharing of Information</h2>
            <p>
              We do not sell your personal information. We may share information with trusted
              service providers (e.g., email delivery, hosting, CRM) strictly to operate our
              business, or when required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">5. Data Retention & Security</h2>
            <p>
              We retain submitted information only as long as needed for the purposes described
              above. We use reasonable administrative and technical safeguards to protect data,
              but no transmission over the internet is fully secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">6. Your Rights</h2>
            <p>
              You may request access to, correction of, or deletion of personal information you
              have submitted by contacting us at{" "}
              <a className="text-primary underline" href="mailto:office@premierhdpro.com">
                office@premierhdpro.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">7. Third-Party Links</h2>
            <p>
              Our website may link to third-party sites. We are not responsible for the privacy
              practices of those sites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The "Last updated" date at the
              top reflects the most recent revision.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">9. Contact Us</h2>
            <p>
              Premier HD Pro<br />
              Locust Grove, GA<br />
              Phone: <a className="text-primary underline" href="tel:+17706285444">(770) 628-5444</a><br />
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