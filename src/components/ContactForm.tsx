import { useState } from "react";

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };
  if (submitted) {
    return (
      <div className="rounded-lg border border-border bg-card p-6">
        <h3 className="text-lg font-bold">Thanks — we'll be in touch.</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          A member of our team will reach out within one business day to schedule a site walk
          or facility assessment.
        </p>
      </div>
    );
  }
  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      {!compact && (
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Full name" name="name" required />
          <Field label="Company" name="company" required />
        </div>
      )}
      {compact && <Field label="Full name" name="name" required />}
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Work email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" required />
      </div>
      <Field label="Facility location (city)" name="city" placeholder="e.g. McDonough, GA" />
      <div>
        <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Service needed
        </label>
        <select
          name="service"
          className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none"
        >
          <option>Concrete Floor Repair</option>
          <option>Dock Door / Leveler Repair</option>
          <option>Warehouse Maintenance</option>
          <option>Industrial HVAC</option>
          <option>Renovations & Buildouts</option>
          <option>Safety Barriers & Bollards</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Tell us about the project
        </label>
        <textarea
          name="message"
          rows={4}
          className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none"
          placeholder="Approx. facility size, current issues, timeline..."
        />
      </div>
      <button type="submit" className="btn-primary w-full">
        Request a Quote
      </button>
      <p className="text-xs text-muted-foreground">
        Or call us directly at{" "}
        <a href="tel:+14705550100" className="font-semibold text-foreground">
          (470) 555-0100
        </a>
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
        {required && <span className="text-safety"> *</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none"
      />
    </div>
  );
}
