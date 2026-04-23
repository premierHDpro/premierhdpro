import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  company: z.string().trim().max(120).optional(),
  email: z.string().trim().email("Enter a valid work email").max(255),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(40),
  city: z.string().trim().max(120).optional(),
  service: z.string().max(120).optional(),
  message: z.string().trim().max(2000).optional(),
});

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const raw = Object.fromEntries(fd.entries());
    const parsed = contactSchema.safeParse(raw);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0] ?? "form");
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      toast.error("Please fix the highlighted fields");
      return;
    }
    setErrors({});
    setSubmitted(true);
    toast.success("Quote request sent — we'll be in touch shortly.");
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
          <Field label="Full name" name="name" required error={errors.name} />
          <Field label="Company" name="company" error={errors.company} />
        </div>
      )}
      {compact && <Field label="Full name" name="name" required error={errors.name} />}
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Work email" name="email" type="email" required error={errors.email} />
        <Field label="Phone" name="phone" type="tel" required error={errors.phone} />
      </div>
      <Field label="Facility location (city)" name="city" placeholder="e.g. McDonough, GA" error={errors.city} />
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
  error,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  error?: string;
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
        aria-invalid={!!error}
        className={`w-full rounded-md border ${error ? "border-destructive" : "border-input"} bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none`}
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
