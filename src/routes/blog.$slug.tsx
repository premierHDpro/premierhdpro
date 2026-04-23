import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Clock } from "lucide-react";
import { posts, type Post } from "../data/posts";
import { services } from "../data/services";
import { PageHeader } from "../components/PageHeader";
import { CtaBand } from "../components/CtaBand";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.post.title} | Premier HD Pro` },
          { name: "description", content: loaderData.post.description },
          { property: "og:title", content: loaderData.post.title },
          { property: "og:description", content: loaderData.post.description },
          { property: "og:type", content: "article" },
        ]
      : [],
    scripts: loaderData
      ? [
          {
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: loaderData.post.title,
              description: loaderData.post.description,
              datePublished: loaderData.post.date,
              dateModified: loaderData.post.date,
              author: { "@type": "Organization", name: "Premier HD Pro" },
              publisher: {
                "@type": "Organization",
                name: "Premier HD Pro",
                url: "https://premier-facility-pros.lovable.app/",
              },
              mainEntityOfPage: `https://premier-facility-pros.lovable.app/blog/${loaderData.post.slug}`,
              articleSection: loaderData.post.category,
            }),
          },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="container-pro py-24 text-center">
      <h1 className="text-3xl font-bold">Article not found</h1>
      <Link to="/blog" className="btn-primary mt-6 inline-flex">Back to insights</Link>
    </div>
  ),
  component: PostPage,
});

function PostPage() {
  const { post } = Route.useLoaderData() as { post: Post };
  const related = (post.related ?? [])
    .map((slug) => services.find((s) => s.slug === slug))
    .filter(Boolean) as typeof services;

  return (
    <>
      <PageHeader
        eyebrow={post.category}
        title={post.title}
        subtitle={post.description}
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Insights", to: "/blog" },
          { label: post.title },
        ]}
      />
      <article className="section-pad">
        <div className="container-pro grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" /> {post.readMin} min read
              </span>
              <span>·</span>
              <time>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</time>
            </div>
            <div className="prose-content space-y-5 text-foreground/85">
              {post.body.map((b, i) => {
                if (b.h) return <h2 key={i} className="!mt-10 text-2xl font-bold text-foreground">{b.h}</h2>;
                if (b.ul) return (
                  <ul key={i} className="space-y-2">
                    {b.ul.map((li) => (
                      <li key={li} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-safety" />
                        <span>{li}</span>
                      </li>
                    ))}
                  </ul>
                );
                return <p key={i} className="leading-relaxed">{b.p}</p>;
              })}
            </div>

            {related.length > 0 && (
              <div className="mt-12 rounded-lg border border-border bg-accent/40 p-6">
                <h3 className="text-lg font-bold">Related services</h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {related.map((s) => (
                    <Link key={s.slug} to={s.to} className="flex items-center justify-between rounded-md border border-border bg-card p-4 hover:border-primary">
                      <span className="text-sm font-semibold">{s.title}</span>
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-lg border border-border bg-primary p-6 text-primary-foreground">
              <h3 className="text-lg font-bold">Need help with your facility?</h3>
              <p className="mt-2 text-sm text-primary-foreground/75">
                Premier HD Pro serves warehouses and distribution centers across Metro Atlanta.
              </p>
              <Link to="/contact" className="btn-primary mt-5 w-full">Get a Facility Assessment</Link>
            </div>

            <div className="mt-6 rounded-lg border border-border bg-card p-6">
              <h3 className="text-base font-bold">More insights</h3>
              <ul className="mt-3 space-y-3">
                {posts.filter((p) => p.slug !== post.slug).slice(0, 4).map((p) => (
                  <li key={p.slug}>
                    <Link to="/blog/$slug" params={{ slug: p.slug }} className="text-sm font-medium text-foreground hover:text-primary">
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </article>
      <CtaBand />
    </>
  );
}
