import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import type { TemplateEntry } from "./registry";

const SITE_NAME = "Premier HD Pro";

interface ContactLeadProps {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  city?: string;
  service?: string;
  message?: string;
}

const ContactLeadEmail = ({
  name,
  company,
  email,
  phone,
  city,
  service,
  message,
}: ContactLeadProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>
      New quote request from {name || "a website visitor"}
      {service ? ` — ${service}` : ""}
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New Quote Request</Heading>
        <Text style={subtle}>
          A new lead just came in from the {SITE_NAME} website.
        </Text>

        <Section style={card}>
          <Row label="Name" value={name} />
          <Row label="Company" value={company} />
          <Row label="Email" value={email} />
          <Row label="Phone" value={phone} />
          <Row label="City" value={city} />
          <Row label="Service" value={service} />
        </Section>

        {message ? (
          <>
            <Heading as="h2" style={h2}>
              Project details
            </Heading>
            <Text style={messageText}>{message}</Text>
          </>
        ) : null}

        <Hr style={hr} />
        <Text style={footer}>
          Sent automatically by {SITE_NAME} website. Reply directly to{" "}
          {email || "the customer"} to follow up.
        </Text>
      </Container>
    </Body>
  </Html>
);

function Row({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <Text style={rowText}>
      <span style={rowLabel}>{label}:</span> {value}
    </Text>
  );
}

export const template = {
  component: ContactLeadEmail,
  subject: (data: Record<string, any>) =>
    `New Quote Request${data?.name ? ` — ${data.name}` : ""}${
      data?.service ? ` (${data.service})` : ""
    }`,
  displayName: "Contact lead notification",
  to: "office@premierhdpro.com",
  previewData: {
    name: "Jane Doe",
    company: "Acme Logistics",
    email: "jane@acme.com",
    phone: "(770) 555-1234",
    city: "McDonough, GA",
    service: "Concrete Floor Repair",
    message:
      "We have approximately 80,000 sqft of warehouse with several joint failures. Looking to schedule a site walk in the next two weeks.",
  },
} satisfies TemplateEntry;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif",
};
const container = { padding: "24px 28px", maxWidth: "560px" };
const h1 = {
  fontSize: "22px",
  fontWeight: "bold",
  color: "#0a1628",
  margin: "0 0 8px",
};
const h2 = {
  fontSize: "15px",
  fontWeight: "bold",
  color: "#0a1628",
  margin: "24px 0 8px",
  textTransform: "uppercase" as const,
  letterSpacing: "0.05em",
};
const subtle = {
  fontSize: "14px",
  color: "#55575d",
  margin: "0 0 20px",
};
const card = {
  border: "1px solid #e5e7eb",
  borderRadius: "8px",
  padding: "16px 20px",
  backgroundColor: "#f9fafb",
};
const rowText = {
  fontSize: "14px",
  color: "#0a1628",
  margin: "4px 0",
  lineHeight: "1.5",
};
const rowLabel = {
  fontWeight: "bold" as const,
  color: "#55575d",
  marginRight: "6px",
};
const messageText = {
  fontSize: "14px",
  color: "#0a1628",
  lineHeight: "1.6",
  whiteSpace: "pre-wrap" as const,
  margin: "0",
};
const hr = { borderColor: "#e5e7eb", margin: "28px 0 16px" };
const footer = { fontSize: "12px", color: "#999999", margin: "0" };