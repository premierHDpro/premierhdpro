import { Link } from "@tanstack/react-router";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  breadcrumb,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; to?: string }[];
}) {
  return (
    <section className="border-b border-border bg-primary text-primary-foreground">
      <div className="container-pro py-16 md:py-24">
        {breadcrumb && (
          <nav className="mb-4 text-xs text-primary-foreground/60">
            {breadcrumb.map((b, i) => (
              <span key={i}>
                {b.to ? (
                  <Link to={b.to} className="hover:text-safety">{b.label}</Link>
                ) : (
                  <span>{b.label}</span>
                )}
                {i < breadcrumb.length - 1 && <span className="mx-2">/</span>}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && <div className="eyebrow">{eyebrow}</div>}
        <h1 className="max-w-4xl text-3xl font-bold md:text-5xl">{title}</h1>
        {subtitle && (
          <p className="mt-4 max-w-3xl text-lg text-primary-foreground/75">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
