import { Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight, AlertTriangle, ShieldCheck, MapPin, Phone } from "lucide-react";
import { CtaBand } from "./CtaBand";
import { ContactForm } from "./ContactForm";
import { services, type Service } from "../data/services";
import { posts } from "../data/posts";

export type ServicePageProps = {
  slug: string;
  /** Hero */
  heroEyebrow?: string;
  heroHeadline: string;
  heroSubheadline: string;
  primaryCtaLabel: string;
  /** Problem-focused intro paragraph(s) */
  problemIntro: string;
  problems: string[];
  /** Services offered list */
  offers: string[];
  /** Process steps */
  process: { title: string; body: string }[];
  /** Why Choose Us bullets — defaults provided */
  whyUs?: string[];
  /** Mid-page CTA */
  midCtaText: string;
  midCtaLabel: string;
  /** Bottom CTA */
  bottomCtaHeadline: string;
  bottomCtaText: string;
  bottomCtaLabel: string;
  /** Related blog post slugs (2+) with anchor text */
  relatedPosts: { slug: string; anchor: string }[];
  /** Optional hero background photo (URL from imported asset) */
  heroImage?: string;
  /** Optional project gallery — recent work photos shown mid-page */
  gallery?: { src: string; caption: string }[];
  galleryHeading?: string;
  galleryEyebrow?: string;
};

const DEFAULT_WHY_US = [
  "Experience working in active warehouses and distribution centers across Georgia",
  "Phased scheduling that protects your shipping windows and uptime",
  "Fast response and reliable communication from project start to closeout",
  "One contractor for repairs, maintenance, and capital upgrades",
  "Local team serving Metro Atlanta, McDonough, Locust Grove, and Henry County",
];

export function ServicePage(props: ServicePageProps) {
  const {
    slug,
    heroEyebrow = "Service",
    heroHeadline,
    heroSubheadline,
    primaryCtaLabel,
    problemIntro,
    problems,
    offers,
    process,
    whyUs = DEFAULT_WHY_US,
    midCtaText,
    midCtaLabel,
    bottomCtaHeadline,
    bottomCtaText,
    bottomCtaLabel,
    relatedPosts,
    heroImage,
    gallery,
    galleryHeading = "Recent project photos",
    galleryEyebrow = "Recent Work",
  } = props;

  const svc: Service | undefined = services.find((s) => s.slug === slug);
  const others = services.filter((s) => s.slug !== slug).slice(0, 3);
  const linkedPosts = relatedPosts
    .map((rp) => ({ post: posts.find((p) => p.slug === rp.slug), anchor: rp.anchor }))
    .filter((x) => x.post);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border bg-primary text-primary-foreground">
        {heroImage ? (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${heroImage})` }}
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-primary/75" aria-hidden="true" />
          </>
        ) : (
          <div className="absolute inset-0 opacity-[0.07]" aria-hidden="true">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, transparent 0 49%, currentColor 49% 51%, transparent 51% 100%)",
                backgroundSize: "28px 28px",
              }}
            />
          </div>
        )}
        <div className="container-pro relative py-16 md:py-24">
          <nav className="mb-4 text-xs text-primary-foreground/60">
            <Link to="/" className="hover:text-safety">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/services" className="hover:text-safety">Services</Link>
            {svc && (
              <>
                <span className="mx-2">/</span>
                <span>{svc.title}</span>
              </>
            )}
          </nav>
          <div className="eyebrow">{heroEyebrow}</div>
          <h1 className="max-w-4xl text-3xl font-bold leading-tight md:text-5xl">
            {heroHeadline}
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-primary-foreground/80">
            {heroSubheadline}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="btn-primary">
              {primaryCtaLabel}
            </Link>
            <Link to="/contact" className="btn-ghost-light">
              Schedule a Site Walk
            </Link>
            <a
              href="tel:+17706285444"
              className="inline-flex items-center gap-2 px-2 py-2 text-sm font-semibold text-primary-foreground/90 hover:text-safety"
            >
              <Phone className="h-4 w-4" /> (770) 628-5444
            </a>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="section-pad">
        <div className="container-pro grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {/* Problem section */}
            <div>
              <div className="eyebrow !text-primary">The Problem</div>
              <h2 className="text-2xl font-bold md:text-3xl">
                Common issues facility managers face
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-foreground/85">
                {problemIntro}
              </p>
              <ul className="mt-6 space-y-3">
                {problems.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-3 rounded-md border-l-4 border-safety bg-accent/40 p-4"
                  >
                    <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-safety" />
                    <span className="text-sm font-medium text-foreground/90">{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Offered */}
            <div className="mt-14">
              <div className="eyebrow !text-primary">Services Offered</div>
              <h2 className="text-2xl font-bold md:text-3xl">What's included</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {offers.map((o) => (
                  <li
                    key={o}
                    className="flex items-start gap-2 rounded-md border border-border bg-card p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-safety" />
                    <span className="text-sm font-medium">{o}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* MID-PAGE CTA */}
            <div className="mt-14 rounded-lg border-2 border-safety bg-primary p-8 text-primary-foreground">
              <p className="text-lg font-semibold md:text-xl">{midCtaText}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-primary">
                  {midCtaLabel}
                </Link>
                <Link to="/contact" className="btn-ghost-light">
                  Schedule a Site Walk
                </Link>
              </div>
            </div>

            {/* Process */}
            <div className="mt-14">
              <div className="eyebrow !text-primary">How We Work</div>
              <h2 className="text-2xl font-bold md:text-3xl">Our process</h2>
              <ol className="mt-6 space-y-4">
                {process.map((p, i) => (
                  <li
                    key={p.title}
                    className="flex gap-4 rounded-md border border-border bg-card p-5"
                  >
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded bg-primary font-bold text-primary-foreground">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="text-base font-bold">{p.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{p.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Why Choose Us */}
            <div className="mt-14">
              <div className="eyebrow !text-primary">Why Choose Us</div>
              <h2 className="text-2xl font-bold md:text-3xl">
                Why facility managers choose Premier HD Pro
              </h2>
              <ul className="mt-6 space-y-3">
                {whyUs.map((w) => (
                  <li key={w} className="flex items-start gap-3">
                    <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-safety" />
                    <span className="text-foreground/85">{w}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Project Gallery */}
            {gallery && gallery.length > 0 && (
              <div className="mt-14">
                <div className="eyebrow !text-primary">{galleryEyebrow}</div>
                <h2 className="text-2xl font-bold md:text-3xl">{galleryHeading}</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {gallery.map((g) => (
                    <figure
                      key={g.src}
                      className="group overflow-hidden rounded-lg border border-border bg-card"
                    >
                      <div className="aspect-[4/3] overflow-hidden bg-muted">
                        <img
                          src={g.src}
                          alt={g.caption}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <figcaption className="border-t border-border px-4 py-3 text-sm font-medium text-foreground/80">
                        {g.caption}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            )}

            {/* Service Area */}
            <div className="mt-14 rounded-lg border border-border bg-accent/40 p-6">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-safety" />
                <div>
                  <h3 className="text-lg font-bold">Service area across Georgia</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Premier HD Pro serves warehouses, distribution centers, and industrial
                    facilities throughout <strong>Atlanta, McDonough, Locust Grove,
                    Henry County</strong>, and surrounding Georgia communities. We're
                    based locally and respond fast.
                  </p>
                  <Link
                    to="/locations/atlanta"
                    className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary"
                  >
                    See our Atlanta service area <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Related Articles */}
            {linkedPosts.length > 0 && (
              <div className="mt-14">
                <div className="eyebrow !text-primary">Related Reading</div>
                <h2 className="text-2xl font-bold md:text-3xl">
                  Helpful guides from our team
                </h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {linkedPosts.map(({ post, anchor }) => (
                    <Link
                      key={post!.slug}
                      to="/blog/$slug"
                      params={{ slug: post!.slug }}
                      className="group rounded-lg border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-primary"
                    >
                      <div className="text-xs font-semibold uppercase tracking-wider text-safety">
                        {post!.category}
                      </div>
                      <h3 className="mt-2 text-base font-bold">{post!.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {anchor} <ArrowRight className="inline h-3.5 w-3.5" />
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* BOTTOM CTA */}
            <div className="mt-14 rounded-lg border border-border bg-card p-8 text-center shadow-sm">
              <h2 className="text-2xl font-bold md:text-3xl">{bottomCtaHeadline}</h2>
              <p className="mt-3 text-foreground/80">{bottomCtaText}</p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Link to="/contact" className="btn-primary">
                  {bottomCtaLabel}
                </Link>
                <a href="tel:+17706285444" className="btn-outline">
                  <Phone className="h-4 w-4" /> (770) 628-5444
                </a>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
              <h3 className="text-lg font-bold">Get a facility assessment</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Tell us about your facility — we'll respond within one business day.
              </p>
              <div className="mt-5">
                <ContactForm compact />
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* OTHER SERVICES */}
      <section className="section-pad bg-accent/40">
        <div className="container-pro">
          <h2 className="text-2xl font-bold">Other commercial services</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {others.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.slug}
                  to="/services/$slug" params={{ slug: s.slug }}
                  className="group rounded-lg border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary"
                >
                  <Icon className="h-6 w-6 text-safety" />
                  <h3 className="mt-3 text-base font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
