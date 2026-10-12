import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { CtaBand } from "../components/CtaBand";

import hero from "../assets/unity-finished-aisle.jpeg";
import underground from "../assets/unity-underground-plumbing.jpeg";
import slabRestoration from "../assets/unity-slab-restoration.jpeg";
import electrical from "../assets/unity-electrical.jpeg";
import hvac from "../assets/unity-hvac.jpeg";
import constructionEquipment from "../assets/unity-construction-equipment.jpeg";
import storefront from "../assets/unity-storefront.jpeg";
import autoDoor from "../assets/unity-auto-door.jpeg";
import rollupDoor from "../assets/unity-rollup-door.jpeg";
import ceilingGrid from "../assets/unity-ceiling-grid.jpeg";
import tile1 from "../assets/unity-tile-install-1.jpeg";
import tile2 from "../assets/unity-tile-install-2.jpeg";
import equipmentInstall from "../assets/unity-equipment-install.jpeg";
import washerConnections from "../assets/unity-washer-connections.jpeg";
import finishedRollup from "../assets/unity-finished-rollup.jpeg";
import finishedSeating from "../assets/unity-finished-seating.jpeg";
import finishedBrandWall from "../assets/unity-finished-brand-wall.jpeg";

export const Route = createFileRoute("/projects/unity-laundry")({
  head: () => ({
    meta: [
      { title: "Unity Laundry Commercial Build-Out | Premier HD Pro" },
      {
        name: "description",
        content:
          "See how Premier HD Pro transformed an existing commercial shell into Unity Laundry, including plumbing, electrical, HVAC, framing, doors, ceilings, tile, finishes, and laundry equipment installation.",
      },
      { property: "og:title", content: "Unity Laundry Complete Commercial Build-Out | Premier HD Pro" },
      {
        property: "og:description",
        content:
          "Existing commercial shell transformed into a fully operational laundromat by Premier HD Pro.",
      },
      { property: "og:url", content: "https://premierhdpro.com/projects/unity-laundry" },
    ],
    links: [{ rel: "canonical", href: "https://premierhdpro.com/projects/unity-laundry" }],
  }),
  component: UnityLaundryProject,
});

const scope = [
  "Underground & above-ground plumbing",
  "Electrical systems",
  "HVAC systems",
  "Metal framing & drywall",
  "Storefront glazing",
  "Automatic entrance doors",
  "Commercial service roll-up door",
  "Suspended ceiling grid & tile",
  "Commercial tile flooring",
  "Painting & interior finishes",
  "Commercial laundry equipment installation",
];

function ProjectImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`overflow-hidden border border-border bg-muted ${className}`}>
      <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" />
    </div>
  );
}

function ProjectSection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-border py-14 md:py-20">
      <div className="container-pro">
        <div className="mb-8 grid gap-3 md:grid-cols-[120px_1fr] md:items-end">
          <div className="text-sm font-bold uppercase tracking-[0.22em] text-primary">{number}</div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function UnityLaundryProject() {
  return (
    <>
      <section className="bg-foreground text-background">
        <div className="container-pro py-8">
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-background/70 hover:text-background">
            <ArrowLeft className="h-4 w-4" /> Back to projects
          </Link>
        </div>
        <div className="container-pro grid gap-10 pb-14 pt-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:pb-20">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Commercial Build-Out</div>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Unity Laundry</h1>
            <p className="mt-4 text-xl font-semibold text-background/85">Existing commercial shell → fully operational laundromat</p>
            <p className="mt-6 max-w-xl text-base leading-7 text-background/70">
              Premier HD Pro delivered the complete commercial build-out, coordinating and completing the infrastructure, interior construction, equipment installation, and finishes required to turn an existing shell into an operating laundry facility.
            </p>
          </div>
          <div className="overflow-hidden border border-background/15">
            <img src={hero} alt="Completed Unity Laundry commercial laundromat interior" className="aspect-[4/3] h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-pro grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Project Overview</div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">Complete shell-to-finish commercial construction</h2>
            <p className="mt-5 leading-7 text-muted-foreground">
              The project began with an existing commercial shell and required extensive utility infrastructure and interior construction to support a high-demand laundromat. Premier HD Pro managed the build-out through underground utilities, MEP systems, framing, doors and storefront work, ceilings, flooring, finishes, and final laundry equipment installation.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-px bg-border border border-border">
            {[
              ["Project Type", "Commercial Build-Out"],
              ["Facility", "Commercial Laundromat"],
              ["Delivery", "Existing Shell → Completion"],
              ["Status", "Completed"],
            ].map(([label, value]) => (
              <div key={label} className="bg-card p-5">
                <div className="text-xs font-bold uppercase tracking-[0.16em] text-primary">{label}</div>
                <div className="mt-2 text-sm font-semibold">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProjectSection number="01" title="Underground Plumbing & Utilities">
        <p className="mb-8 max-w-3xl leading-7 text-muted-foreground">
          Underground plumbing was laid out and installed around the commercial washer configuration before the slab was restored. The completed system was carried through to the above-ground equipment connections required for the laundry operation.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div><ProjectImage src={underground} alt="Underground plumbing rough-in at Unity Laundry" className="aspect-[4/3]" /><p className="mt-3 text-sm font-semibold">Underground rough-in</p></div>
          <div><ProjectImage src={slabRestoration} alt="Restored concrete slab after underground plumbing at Unity Laundry" className="aspect-[4/3]" /><p className="mt-3 text-sm font-semibold">Slab restoration after utility installation</p></div>
        </div>
      </ProjectSection>

      <ProjectSection number="02" title="Electrical & HVAC Systems">
        <p className="mb-8 max-w-3xl leading-7 text-muted-foreground">
          Electrical distribution, conduit, HVAC equipment, ductwork, and overhead systems were installed and coordinated with the future wall and ceiling layouts to support the facility's operational requirements.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <ProjectImage src={electrical} alt="Electrical panels and conduit installation at Unity Laundry" className="aspect-[4/3]" />
          <ProjectImage src={hvac} alt="HVAC ductwork and ceiling coordination at Unity Laundry" className="aspect-[4/3]" />
        </div>
      </ProjectSection>

      <ProjectSection number="03" title="Framing & Interior Construction">
        <p className="mb-8 max-w-3xl leading-7 text-muted-foreground">
          Light-gauge metal framing and interior wall construction established the service, equipment, and customer areas while maintaining coordination with plumbing, electrical, and mechanical systems throughout the build-out.
        </p>
        <ProjectImage src={constructionEquipment} alt="Metal framing and commercial laundry equipment during Unity Laundry construction" className="aspect-[16/9]" />
      </ProjectSection>

      <ProjectSection number="04" title="Storefront & Automatic Entrance">
        <p className="mb-8 max-w-3xl leading-7 text-muted-foreground">
          The storefront scope included commercial glazing and a Stanley automatic sliding entrance system, providing a durable and accessible customer entry integrated with the completed storefront.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <ProjectImage src={storefront} alt="Commercial storefront glazing at Unity Laundry" className="aspect-[4/3]" />
          <ProjectImage src={autoDoor} alt="Stanley automatic sliding entrance at Unity Laundry" className="aspect-[4/3]" />
        </div>
      </ProjectSection>

      <ProjectSection number="05" title="Commercial Service Roll-Up Door">
        <p className="mb-8 max-w-3xl leading-7 text-muted-foreground">
          A commercial roll-up service door was installed within the finished interior to provide secure service access while maintaining a clean, durable appearance for the customer-facing space.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <ProjectImage src={rollupDoor} alt="Commercial roll-up service door installation at Unity Laundry" className="aspect-[4/3]" />
          <ProjectImage src={finishedRollup} alt="Completed Unity Laundry interior with commercial roll-up service door" className="aspect-[4/3]" />
        </div>
      </ProjectSection>

      <ProjectSection number="06" title="Suspended Ceiling System">
        <p className="mb-8 max-w-3xl leading-7 text-muted-foreground">
          The suspended ceiling grid and acoustic ceiling tile system were installed around the facility's HVAC, lighting, electrical, and other overhead components, creating a clean finished ceiling while preserving service access above.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <ProjectImage src={ceilingGrid} alt="Suspended ceiling grid installation at Unity Laundry" className="aspect-[4/3]" />
          <ProjectImage src={finishedSeating} alt="Completed acoustic ceiling tile and lighting at Unity Laundry" className="aspect-[4/3]" />
        </div>
      </ProjectSection>

      <ProjectSection number="07" title="Commercial Tile Flooring">
        <p className="mb-8 max-w-3xl leading-7 text-muted-foreground">
          Commercial tile flooring was installed throughout the customer areas using a durable layout suited for continuous foot traffic and the demands of an operating laundromat.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <ProjectImage src={tile1} alt="Commercial tile flooring installation at Unity Laundry" className="aspect-[4/3]" />
          <ProjectImage src={tile2} alt="Commercial tile flooring progress at Unity Laundry" className="aspect-[4/3]" />
        </div>
      </ProjectSection>

      <ProjectSection number="08" title="Laundry Equipment & Final Connections">
        <p className="mb-8 max-w-3xl leading-7 text-muted-foreground">
          Commercial laundry equipment was set, aligned, and connected to the building systems. Final plumbing and utility connections completed the transition from rough infrastructure to an operational equipment layout.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <ProjectImage src={equipmentInstall} alt="Commercial laundry equipment installation at Unity Laundry" className="aspect-[4/3]" />
          <ProjectImage src={washerConnections} alt="Plumbing and utility connections behind commercial washers at Unity Laundry" className="aspect-[4/3]" />
        </div>
      </ProjectSection>

      <ProjectSection number="09" title="Completed Facility">
        <p className="mb-8 max-w-3xl leading-7 text-muted-foreground">
          The completed build-out brought the infrastructure, equipment, finishes, and customer areas together into a bright, durable, fully operational commercial laundry facility.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <ProjectImage src={hero} alt="Completed washer aisles at Unity Laundry" className="aspect-[4/3]" />
          <ProjectImage src={finishedBrandWall} alt="Completed Unity Laundry interior and branded wall" className="aspect-[4/3]" />
          <ProjectImage src={finishedSeating} alt="Completed customer seating area at Unity Laundry" className="aspect-[4/3]" />
          <ProjectImage src={finishedRollup} alt="Completed Unity Laundry interior finishes" className="aspect-[4/3]" />
        </div>
      </ProjectSection>

      <section className="bg-muted/40 section-pad">
        <div className="container-pro grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Complete Project Scope</div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">One coordinated commercial build-out</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Premier HD Pro carried the project from shell conditions through final construction and equipment installation, coordinating each trade as part of a single commercial build-out.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {scope.map((item) => (
              <div key={item} className="flex items-start gap-3 border border-border bg-card p-4 text-sm font-semibold">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-pro">
          <div className="border border-border bg-card p-8 md:p-10">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Related Services</div>
            <h2 className="mt-3 text-2xl font-bold">Explore the capabilities featured on this project</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                ["Tenant Improvements", "tenant-improvements"],
                ["Interior Construction", "interior-construction"],
                ["Metal Framing & Drywall", "metal-framing-drywall"],
                ["Doors, Frames & Hardware", "doors-frames-hardware"],
                ["Flooring & Finishes", "flooring-finishes"],
                ["Lighting & Electrical Upgrades", "lighting-electrical-upgrades"],
                ["Operational Improvements", "industrial-hvac"],
              ].map(([label, slug]) => (
                <Link key={slug} to="/services/$slug" params={{ slug }} className="inline-flex items-center gap-2 border border-border px-4 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary">
                  {label} <ArrowRight className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
