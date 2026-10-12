import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { projects } from "../data/projects";
import { PageHeader } from "../components/PageHeader";
import { CtaBand } from "../components/CtaBand";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Recent Commercial Construction Projects | Premier HD Pro" },
      {
        name: "description",
        content:
          "Recent commercial construction, renovation, and facility projects completed by Premier HD Pro across Metro Atlanta and Georgia.",
      },
      { property: "og:title", content: "Recent Projects | Premier HD Pro" },
      {
        property: "og:description",
        content:
          "A look at recent commercial buildouts, polished concrete, renovations, and facility work across Georgia.",
      },
      { property: "og:url", content: "https://premierhdpro.com/projects" },
    ],
    links: [{ rel: "canonical", href: "https://premierhdpro.com/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Recent commercial construction & facility work"
        subtitle="Buildouts, floors, doors, demo, and renovations recently delivered for commercial and industrial clients across Georgia."
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Projects" }]}
      />
      <section className="section-pad">
        <div className="container-pro">
         <Link
  key={p.title}
  to={p.projectPath ? "/projects/unity-laundry" : "/services/$slug"}
  params={p.projectPath ? {} : { slug: p.slug }}
  className="group block overflow-hidden border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary hover:shadow-lg"
>
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                    {p.type}
                  </div>
                  <h3 className="mt-2 text-lg font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.blurb}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
  {p.projectPath ? "View Project" : "View Service"}
  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
