import { createFileRoute, notFound } from "@tanstack/react-router";
import { ServicePage, type ServicePageProps } from "../components/ServicePage";
import { services } from "../data/services";
import hvacRooftop from "../assets/hvac-rooftop-unit.jpg";
import hvacControls from "../assets/hvac-controls-panel.jpg";
import hvacCeiling from "../assets/hvac-ceiling-install.jpg";
import hvacDuctwork from "../assets/hvac-warehouse-ductwork.jpg";
import rackingEmpty from "../assets/racking-empty-frames.jpg";
import rackingNewBays from "../assets/racking-new-bays.jpg";
import rackingColumnProtectors from "../assets/racking-column-protectors.jpg";
import rackingAisleGuards from "../assets/racking-aisle-guards.jpg";
import doorReplacementComplete from "../assets/door-replacement-complete.jpg";
import doorReplacementProgress from "../assets/door-replacement-progress.jpg";
import autoDoorLaundryExterior from "../assets/auto-door-laundry-exterior.jpg";
import autoDoorLaundryInterior from "../assets/auto-door-laundry-interior.jpg";
import bathroomRenoMainVanity from "../assets/bathroom-reno-main-vanity.jpg";
import bathroomRenoSinksStalls from "../assets/bathroom-reno-sinks-stalls.jpg";
import bathroomRenoUrinals from "../assets/bathroom-reno-urinals.jpg";
import bathroomRenoAdaStall from "../assets/bathroom-reno-ada-stall.jpg";
import officeBuildoutOpenArea from "../assets/office-buildout-open-area.jpg";
import officeBuildoutConference from "../assets/office-buildout-conference.jpg";
import officeBuildoutCorridor from "../assets/office-buildout-corridor.jpg";
import officeBuildoutPrivateOffice from "../assets/office-buildout-private-office.jpg";
import officeBuildoutServiceWindow from "../assets/office-buildout-service-window.jpg";
import officeBuildoutTransactionWindow from "../assets/office-buildout-transaction-window.jpg";
import demoTileWall from "../assets/demo-tile-wall.jpg";
import demoRestroomOverview from "../assets/demo-restroom-overview.jpg";
import demoCrewStripout from "../assets/demo-crew-stripout.jpg";
import polishedConcreteTrainingBefore from "../assets/polished-concrete-training-room-before.jpg";
import polishedConcreteTrainingFinished from "../assets/polished-concrete-training-room-finished.jpg";
import polishedConcreteBreakroomWide from "../assets/polished-concrete-breakroom-wide.jpg";
import polishedConcreteBreakroomCabinets from "../assets/polished-concrete-breakroom-cabinets.jpg";
import polishedConcreteOfficeWindow from "../assets/polished-concrete-office-window.jpg";
import polishedConcreteCharcoalOffice from "../assets/polished-concrete-charcoal-office.jpg";
import polishedConcreteCharcoalCorner from "../assets/polished-concrete-charcoal-corner.jpg";
import polishedConcreteCorridor from "../assets/polished-concrete-corridor.jpg";
import brpConcreteBefore from "../assets/brp-concrete-repair-before.jpg.asset.json";
import brpConcreteAfter from "../assets/brp-concrete-repair-after.jpg.asset.json";
import flooringTileLaundry from "../assets/flooring-tile-laundry.webp.asset.json";
import flooringTileWashroom from "../assets/flooring-tile-washroom.jpg.asset.json";
import flooringCarpetCorridor from "../assets/flooring-carpet-corridor.jpg.asset.json";
import flooringPolishedTraining from "../assets/flooring-polished-training.jpg.asset.json";
import flooringPolishedCorridor from "../assets/flooring-polished-corridor.jpg.asset.json";

type ServiceContent = Omit<ServicePageProps, "slug">;

const DEFAULT_PROCESS = [
  {
    title: "Site walk & scope review",
    body: "We walk your facility, document existing conditions, and align on scope, schedule, and operational constraints.",
  },
  {
    title: "Proposal & schedule",
    body: "You receive a clear scope, line-item pricing, and a phased schedule built around your shipping and production windows.",
  },
  {
    title: "Mobilization",
    body: "Crews mobilize with the right trades, permits, and safety plans — fully coordinated with your facility team.",
  },
  {
    title: "Execution & QC",
    body: "Work is performed by qualified crews with daily progress updates, on-site supervision, and quality control checks.",
  },
  {
    title: "Closeout & warranty",
    body: "Final punch list, cleanup, documentation, and warranty — handed off so your team can keep moving.",
  },
];

const DEFAULT_RELATED = [
  { slug: "warehouse-maintenance-checklist", anchor: "Read our facility maintenance checklist" },
  { slug: "dock-door-troubleshooting", anchor: "Common dock door issues and fixes" },
];

const CONTENT: Record<string, ServiceContent> = {
  "commercial-renovations": {
    heroEyebrow: "Commercial Construction",
    heroHeadline: "Warehouse renovations completed inside active facilities",
    heroSubheadline:
      "Phased renovations, expansions, and reconfigurations for warehouses and distribution centers across Georgia — built around your operations.",
    primaryCtaLabel: "Request a Site Walk",
    heroImage: bathroomRenoMainVanity,
    gallery: [
      { src: bathroomRenoMainVanity, caption: "New main restroom vanity, mirrors, and tile finishes installed during a renovation at a Home Depot distribution center." },
      { src: bathroomRenoSinksStalls, caption: "Full sink run with stainless partitions and refreshed tile — completed while the DC stayed operational." },
      { src: bathroomRenoUrinals, caption: "Urinal wall with touchless flush valves, privacy screens, and matching accent tile band." },
      { src: bathroomRenoAdaStall, caption: "ADA single-user restroom with new fixtures, tile, and accessible layout." },
    ],
    problemIntro:
      "Renovating an operating warehouse is not the same as a ground-up build. Crews need to work around shipping windows, racking, equipment, and a workforce that can't stop.",
    problems: [
      "General contractors who shut down operations to do the work",
      "Disorganized phasing that blocks dock doors or aisles",
      "Dust, noise, and debris in active production areas",
      "Subcontractors who don't follow your facility safety rules",
    ],
    offers: [
      "Interior demo and reconfiguration",
      "Racking removal and reinstallation coordination",
      "Wall, partition, and ceiling work",
      "Concrete repair and slab modifications",
      "Dock door, leveler, and seal upgrades",
      "Lighting, electrical, and mechanical scopes",
      "Office and breakroom buildouts",
      "Phased schedules with night and weekend work",
    ],
    process: DEFAULT_PROCESS,
    midCtaText:
      "Planning a warehouse renovation? Let's walk the building and map out a phased plan that protects your uptime.",
    midCtaLabel: "Schedule a Site Walk",
    bottomCtaHeadline: "Ready to plan your renovation?",
    bottomCtaText:
      "We'll meet your team on-site, document existing conditions, and return a phased scope and schedule.",
    bottomCtaLabel: "Request a Site Walk",
    relatedPosts: DEFAULT_RELATED,
  },
  "tenant-improvements": {
    heroEyebrow: "Commercial Construction",
    heroHeadline: "Tenant improvement buildouts on accelerated schedules",
    heroSubheadline:
      "Full TI scopes for industrial and commercial tenants — from demo through finishes — delivered on the dates leasing teams need.",
    primaryCtaLabel: "Request a TI Proposal",
    problemIntro:
      "TI projects live and die on schedule. Missed dates push back rent commencement and erode tenant goodwill.",
    problems: [
      "Permits and inspections stalling occupancy",
      "Long-lead doors, HVAC, and electrical gear arriving late",
      "Subcontractor coordination breaking down at finishes",
      "Punch list items dragging out beyond turnover",
    ],
    offers: [
      "Demo and selective interior removal",
      "Metal framing, drywall, and ceilings",
      "Doors, frames, and hardware packages",
      "Office, breakroom, and restroom buildouts",
      "Electrical, lighting, and low-voltage rough-in",
      "HVAC modifications and balancing",
      "Flooring, paint, and finishes",
      "Permit coordination and final inspections",
    ],
    process: DEFAULT_PROCESS,
    midCtaText:
      "Need a TI buildout delivered on a fixed turnover date? We'll commit to the schedule in writing.",
    midCtaLabel: "Request a TI Proposal",
    bottomCtaHeadline: "Have a tenant improvement coming up?",
    bottomCtaText:
      "Send over the LOI scope or test fit and we'll return budget pricing and a schedule within the week.",
    bottomCtaLabel: "Request a TI Proposal",
    relatedPosts: DEFAULT_RELATED,
  },
  "office-buildouts": {
    heroEyebrow: "Commercial Construction",
    heroHeadline: "Office buildouts inside warehouse and industrial facilities",
    heroSubheadline:
      "Admin offices, breakrooms, conference rooms, and restroom additions — built inside operating warehouses with minimal disruption.",
    primaryCtaLabel: "Plan Your Office Buildout",
    heroImage: officeBuildoutOpenArea,
    gallery: [
      { src: officeBuildoutOpenArea, caption: "Open work area with fresh carpet tile, ceiling grid, and full glazing — ready for furniture install." },
      { src: officeBuildoutConference, caption: "Conference room buildout with matching carpet tile and corner glazing overlooking the property." },
      { src: officeBuildoutServiceWindow, caption: "Interior service window with sliding glass, key lock, and solid wood transaction sill." },
      { src: officeBuildoutTransactionWindow, caption: "Second transaction window into the bullpen — framed, glazed, and trimmed to match the office package." },
      { src: officeBuildoutPrivateOffice, caption: "Private office with new carpet tile, perimeter glazing, and clean wall finishes." },
      { src: officeBuildoutCorridor, caption: "Office corridor with new carpet tile run wall-to-wall between framed openings and doors." },
    ],
    problemIntro:
      "Adding office space inside a warehouse requires more than framing. HVAC, electrical, plumbing, and life safety all have to integrate with the existing facility.",
    problems: [
      "Mechanical and electrical service that can't support new loads",
      "Building code and egress requirements missed in early planning",
      "Office finishes that don't hold up in an industrial environment",
      "Construction dust contaminating product or production areas",
    ],
    offers: [
      "Office, conference, and breakroom buildouts",
      "Restroom additions and ADA upgrades",
      "Metal framing, drywall, and acoustic ceilings",
      "Dedicated HVAC zones for office areas",
      "Electrical, data, and lighting rough-in",
      "Doors, frames, hardware, and glazing",
      "Flooring, paint, and millwork",
      "Containment and dust control during construction",
    ],
    process: DEFAULT_PROCESS,
    midCtaText:
      "Outgrowing your existing office footprint? Let's plan a buildout that fits your team and your facility.",
    midCtaLabel: "Schedule a Site Walk",
    bottomCtaHeadline: "Ready to expand your office space?",
    bottomCtaText:
      "Tell us what your team needs — we'll return concept layouts, budget pricing, and a realistic schedule.",
    bottomCtaLabel: "Plan Your Office Buildout",
    relatedPosts: DEFAULT_RELATED,
  },
  "interior-construction": {
    heroEyebrow: "Commercial Construction",
    heroHeadline: "Interior construction for commercial and industrial facilities",
    heroSubheadline:
      "Walls, ceilings, partitions, and full interior scopes coordinated trade-by-trade for warehouses, distribution centers, and commercial buildings.",
    primaryCtaLabel: "Request a Proposal",
    problemIntro:
      "Interior construction looks simple until trades start tripping over each other. The difference between a fast project and a slow one is sequencing.",
    problems: [
      "Trades arriving out of order and waiting on each other",
      "Inspections failing and pushing back finishes",
      "Material shortages discovered mid-install",
      "Quality issues at finishes due to rushed framing",
    ],
    offers: [
      "Metal framing and drywall",
      "Acoustic and hard-lid ceilings",
      "Demising walls and partitions",
      "Doors, frames, and hardware",
      "Finish carpentry and millwork",
      "Paint, flooring, and wall protection",
      "Trade coordination and scheduling",
      "Permit and inspection management",
    ],
    process: DEFAULT_PROCESS,
    midCtaText:
      "Need an interior scope handled end-to-end? We'll own the schedule and the trades.",
    midCtaLabel: "Request a Proposal",
    bottomCtaHeadline: "Have an interior construction project?",
    bottomCtaText:
      "Share drawings or a scope outline — we'll respond with budget pricing and a phased schedule.",
    bottomCtaLabel: "Request a Proposal",
    relatedPosts: DEFAULT_RELATED,
  },
  "metal-framing-drywall": {
    heroEyebrow: "Commercial Construction",
    heroHeadline: "Metal framing and drywall for commercial interiors",
    heroSubheadline:
      "Light-gauge framing, drywall, and finish work delivered to commercial tolerances by experienced crews.",
    primaryCtaLabel: "Request a Quote",
    problemIntro:
      "Framing and drywall set the tone for every finish that follows. Sloppy framing means sloppy paint, doors, and trim.",
    problems: [
      "Out-of-plumb walls causing door and trim issues",
      "Inadequate blocking for casework and equipment",
      "Fire-rated assemblies built incorrectly",
      "Drywall finishes that fail under critical lighting",
    ],
    offers: [
      "Light-gauge metal framing",
      "Demising and partition walls",
      "Fire-rated and sound-rated assemblies",
      "Drywall hang, tape, and finish (Levels 3–5)",
      "Soffits, bulkheads, and chases",
      "Acoustic ceiling grid and tile",
      "Blocking and backing coordination",
      "Patch and repair work",
    ],
    process: DEFAULT_PROCESS,
    midCtaText:
      "Need framing and drywall on a tight schedule? Our crews are mobilized across Metro Atlanta.",
    midCtaLabel: "Request a Quote",
    bottomCtaHeadline: "Ready for a framing and drywall quote?",
    bottomCtaText: "Send us drawings or a scope — we'll return pricing within a few business days.",
    bottomCtaLabel: "Request a Quote",
    relatedPosts: DEFAULT_RELATED,
  },
  "concrete-floor-repair": {
    heroEyebrow: "Commercial Construction",
    heroHeadline: "Concrete construction and floor repair for industrial facilities",
    heroSubheadline:
      "Slab pours, joint repair, crack remediation, and polished concrete for warehouses, distribution centers, and manufacturing floors.",
    primaryCtaLabel: "Request a Floor Assessment",
    heroImage: polishedConcreteTrainingFinished,
    gallery: [
      { src: brpConcreteBefore.url, caption: "BRP forklift aisle — before: failed slab between storage racks saw-cut out and rebar tied, ready for pour." },
      { src: brpConcreteAfter.url, caption: "BRP forklift aisle — after: fresh pour finished flush with the surrounding slab so forklift traffic could resume." },
      { src: polishedConcreteTrainingBefore, caption: "Training room slab before polishing — old flooring stripped, adhesive residue exposed, ready for grind." },
      { src: polishedConcreteTrainingFinished, caption: "Same training room after our polished concrete process — light-gray finish with a deep, even reflection." },
      { src: polishedConcreteBreakroomWide, caption: "Polished concrete breakroom floor finished while interior trades wrapped up overhead work." },
      { src: polishedConcreteBreakroomCabinets, caption: "Wide view of the finished breakroom with new cabinetry — uniform sheen across the full slab." },
      { src: polishedConcreteOfficeWindow, caption: "Charcoal-stained polished concrete in a window-front office suite — high gloss with natural mottling." },
      { src: polishedConcreteCharcoalOffice, caption: "Private office finished in a darker charcoal polish, sealed and burnished to a wet-look shine." },
      { src: polishedConcreteCharcoalCorner, caption: "Corner detail of the charcoal polish — even color, tight saw-cut joints, clean wall edge." },
      { src: polishedConcreteCorridor, caption: "Polished concrete corridor running through the office suite, ready for final paint and trim." },
    ],
    problemIntro:
      "Industrial floors take a beating. Forklift traffic, freeze-thaw, heavy loads, and bad joints all create problems that get worse with time.",
    problems: [
      "Spalled and chipped joints damaging forklift wheels",
      "Cracks that spread and trap debris",
      "Slab settlement creating trip hazards",
      "Worn or failed coatings exposing concrete",
    ],
    offers: [
      "Slab repair and joint rebuilds",
      "Crack injection and stitching",
      "Polyurea and epoxy joint fillers",
      "Slab leveling and grinding",
      "New slab pours and additions",
      "Polished concrete finishes",
      "Epoxy and urethane coatings",
      "Slab moisture testing and mitigation",
    ],
    process: DEFAULT_PROCESS,
    midCtaText:
      "Floor damage slowing down material handling? Get an assessment before it gets worse.",
    midCtaLabel: "Request a Floor Assessment",
    bottomCtaHeadline: "Need concrete work in your facility?",
    bottomCtaText:
      "We'll walk your floors, identify issues, and return a prioritized repair plan with pricing.",
    bottomCtaLabel: "Request a Floor Assessment",
    relatedPosts: DEFAULT_RELATED,
  },
  "structural-modifications": {
    heroEyebrow: "Commercial Construction",
    heroHeadline: "Structural modifications and facility reconfigurations",
    heroSubheadline:
      "Wall removals, new openings, structural reinforcement, and facility reconfigurations engineered and built for industrial buildings.",
    primaryCtaLabel: "Request a Structural Review",
    problemIntro:
      "Cutting an opening or removing a wall in a commercial building isn't a DIY job. The wrong cut can compromise the entire structure.",
    problems: [
      "Loads not properly analyzed before modifications",
      "Permits and stamped drawings missing",
      "Existing conditions not verified before demo",
      "Temporary shoring skipped or undersized",
    ],
    offers: [
      "Wall removals and new openings",
      "Structural steel additions and reinforcement",
      "Mezzanines and equipment platforms",
      "Engineered shoring and bracing",
      "Foundation modifications",
      "Roof and load-path modifications",
      "Stamped drawings and permit coordination",
      "Inspection and code compliance",
    ],
    process: DEFAULT_PROCESS,
    midCtaText: "Planning a structural change? Get it engineered and built by one team.",
    midCtaLabel: "Request a Structural Review",
    bottomCtaHeadline: "Need a structural modification?",
    bottomCtaText:
      "Tell us what you're trying to accomplish — we'll bring in the engineer and return a plan.",
    bottomCtaLabel: "Request a Structural Review",
    relatedPosts: DEFAULT_RELATED,
  },
  "demolition": {
    heroEyebrow: "Commercial Construction",
    heroHeadline: "Selective interior demolition for operating facilities",
    heroSubheadline:
      "Interior demo, site clearing, and selective removal inside warehouses and commercial buildings — completed safely around live operations.",
    primaryCtaLabel: "Request a Demo Quote",
    heroImage: demoCrewStripout,
    gallery: [
      { src: "/videos/demo-job.mp4", caption: "Walk-through of an active interior demo — tile, drywall, and partitions coming down.", video: true, poster: demoCrewStripout },
      { src: demoCrewStripout, caption: "Crew mid-stripout — tile and drywall pulled back to studs and insulation." },
      { src: demoTileWall, caption: "Full-height tile and drywall removed, plumbing and framing exposed for the next trade." },
      { src: demoRestroomOverview, caption: "Commercial restroom demo — fixtures, partitions, and finishes cleared and staged for haul-off." },
    ],
    problemIntro:
      "Demolition inside a working facility is high-risk. Dust, debris, and surprise utilities can stop production or injure workers.",
    problems: [
      "Active utilities not identified before cutting",
      "Dust and debris migrating into production areas",
      "Damage to finishes, equipment, or product",
      "Disposal costs that blow past the budget",
    ],
    offers: [
      "Selective interior demolition",
      "Wall, ceiling, and partition removal",
      "Slab and concrete saw cutting",
      "Racking, conveyor, and equipment removal coordination",
      "Utility identification and disconnects",
      "Dust containment and air filtration",
      "Debris hauling and disposal",
      "Site cleanup and protection",
    ],
    process: DEFAULT_PROCESS,
    midCtaText:
      "Need demo done cleanly inside an active facility? We've done it many times.",
    midCtaLabel: "Request a Demo Quote",
    bottomCtaHeadline: "Planning a demolition scope?",
    bottomCtaText:
      "Send us drawings or a walk-through — we'll return a price and a plan that protects your operations.",
    bottomCtaLabel: "Request a Demo Quote",
    relatedPosts: DEFAULT_RELATED,
  },
  "doors-frames-hardware": {
    heroEyebrow: "Commercial Construction",
    heroHeadline: "Commercial doors, frames, and hardware — supplied and installed",
    heroSubheadline:
      "Hollow metal doors and frames, wood doors, dock doors, and complete hardware packages installed by qualified crews.",
    primaryCtaLabel: "Request a Hardware Quote",
    heroImage: doorReplacementComplete,
    gallery: [
      { src: doorReplacementProgress, caption: "New entry door and sidelite frame set and flashed during a country club entrance replacement." },
      { src: doorReplacementComplete, caption: "Finished door package — closer, hardware, and trim installed and back in service the same day." },
      { src: autoDoorLaundryExterior, caption: "Stanley automatic sliding entrance installed at a new-build laundry — exterior view ready for opening day." },
      { src: autoDoorLaundryInterior, caption: "Interior view of the same automatic sliding door package, fully commissioned and tied into the storefront." },
    ],
    problemIntro:
      "Doors are the most-used component in any building. Bad hardware or sloppy installs create daily headaches for facility teams.",
    problems: [
      "Doors that bind, sag, or fail to latch",
      "Hardware that doesn't meet fire or life safety codes",
      "Long lead times stalling project closeout",
      "Mismatched keying that creates security gaps",
    ],
    offers: [
      "Hollow metal doors and frames",
      "Wood and aluminum doors",
      "Dock doors and overhead doors",
      "Panic and exit hardware",
      "Closers, hinges, and locksets",
      "Master keying and rekey services",
      "ADA and life safety compliance",
      "Door and frame repair",
    ],
    process: DEFAULT_PROCESS,
    midCtaText: "Need a door and hardware package priced and installed? We handle both.",
    midCtaLabel: "Request a Hardware Quote",
    bottomCtaHeadline: "Ready to spec your door package?",
    bottomCtaText:
      "Send us a door schedule or photos — we'll return a quote and a realistic install schedule.",
    bottomCtaLabel: "Request a Hardware Quote",
    relatedPosts: DEFAULT_RELATED,
  },
  "flooring-finishes": {
    heroEyebrow: "Commercial Construction",
    heroHeadline: "Industrial flooring, coatings, and interior finishes",
    heroSubheadline:
      "Epoxy and urethane coatings, polished concrete, commercial flooring, paint, and finish packages built for industrial traffic.",
    primaryCtaLabel: "Request a Flooring Quote",
    heroImage: flooringPolishedTraining.url,
    gallery: [
      { src: flooringPolishedTraining.url, caption: "Polished concrete in a large training / multi-purpose room — old flooring removed, slab ground and polished to a uniform sheen." },
      { src: flooringPolishedCorridor.url, caption: "Dyed and polished concrete corridor with a rich mid-tone finish — durable, low-maintenance, and easy to clean." },
      { src: flooringTileLaundry.url, caption: "Wood-look porcelain tile installed throughout a commercial laundry — slip-resistant and built for heavy foot traffic and water exposure." },
      { src: flooringTileWashroom.url, caption: "Wall and floor tile in a commercial wash room — grey field tile with an orange accent band and wood-look plank floor tile." },
      { src: flooringCarpetCorridor.url, caption: "Commercial carpet tile installed in an office corridor — durable broadloom-look pattern suited for high-traffic tenant spaces." },
    ],
    problemIntro:
      "Industrial floors fail when the coating doesn't match the use. Residential-grade products in a forklift environment last weeks, not years.",
    problems: [
      "Coatings peeling under hot tire pickup",
      "Slippery floors creating safety incidents",
      "Flooring failing at joints and transitions",
      "Paint and finishes scuffing within months",
    ],
    offers: [
      "Epoxy and urethane floor coatings",
      "Polished concrete",
      "Commercial VCT, LVT, and carpet tile",
      "Anti-slip and chemical-resistant systems",
      "Floor prep, grinding, and shot blasting",
      "Commercial paint and wall finishes",
      "Wall protection and corner guards",
      "Line striping and floor markings",
    ],
    process: DEFAULT_PROCESS,
    midCtaText: "Spec'ing a floor or finish package? Let us match the system to your use.",
    midCtaLabel: "Request a Flooring Quote",
    bottomCtaHeadline: "Need new flooring or finishes?",
    bottomCtaText:
      "Tell us about the space and how it's used — we'll recommend a system and price it.",
    bottomCtaLabel: "Request a Flooring Quote",
    relatedPosts: DEFAULT_RELATED,
  },
  "exterior-improvements": {
    heroEyebrow: "Commercial Construction",
    heroHeadline: "Exterior improvements for commercial and industrial sites",
    heroSubheadline:
      "Façade repairs, dock area exteriors, bollards, signage support, and site-level facility improvements.",
    primaryCtaLabel: "Request a Site Walk",
    problemIntro:
      "Exterior conditions are the first thing your tenants, customers, and inspectors see. Deferred exterior maintenance signals neglect.",
    problems: [
      "Damaged façades, panels, or trim",
      "Dock areas with deteriorating concrete and seals",
      "Missing or damaged bollards exposing the building",
      "Site lighting, signage, and curbs in disrepair",
    ],
    offers: [
      "Façade and panel repairs",
      "Exterior paint and recoating",
      "Dock area concrete and seals",
      "Bollard installation and replacement",
      "Curb, sidewalk, and pavement repair",
      "Site lighting and signage support",
      "Roof and gutter repair coordination",
      "Storefront and entrance upgrades",
    ],
    process: DEFAULT_PROCESS,
    midCtaText: "Want a full exterior assessment? We'll walk your site and prioritize the work.",
    midCtaLabel: "Request a Site Walk",
    bottomCtaHeadline: "Ready to refresh your exterior?",
    bottomCtaText:
      "We'll meet you on-site, document conditions, and return a prioritized scope with pricing.",
    bottomCtaLabel: "Request a Site Walk",
    relatedPosts: DEFAULT_RELATED,
  },
  "dock-door-repair": {
    heroEyebrow: "Facility Services",
    heroHeadline: "Dock door, leveler, and seal repair across Metro Atlanta",
    heroSubheadline:
      "Same-week response for dock door, leveler, bumper, and seal repairs that keep loading docks moving.",
    primaryCtaLabel: "Request Dock Repair",
    problemIntro:
      "A dock door down means trucks waiting and shipments delayed. Dock repairs are urgent — they shouldn't sit in a queue for weeks.",
    problems: [
      "Doors that won't open, close, or seal correctly",
      "Levelers stuck, sagging, or failing safety inspections",
      "Damaged bumpers, seals, and weatherstripping",
      "Old equipment that's no longer supported",
    ],
    offers: [
      "Dock door repair and replacement",
      "Leveler repair, rebuild, and replacement",
      "Dock bumpers and seals",
      "Vehicle restraints and dock locks",
      "Track, spring, and panel repair",
      "Preventative dock maintenance programs",
      "Emergency same-week response",
      "24/7 after-hours dispatch available",
    ],
    process: DEFAULT_PROCESS,
    midCtaText: "Dock down right now? Call us — we respond fast across Metro Atlanta.",
    midCtaLabel: "Request Dock Repair",
    bottomCtaHeadline: "Need a dock door fixed?",
    bottomCtaText: "Send a photo and dock number — we'll dispatch a tech and confirm a window.",
    bottomCtaLabel: "Request Dock Repair",
    relatedPosts: DEFAULT_RELATED,
  },
  "emergency-facility-repairs": {
    heroEyebrow: "Facility Services",
    heroHeadline: "Emergency facility repairs — same-day response in Georgia",
    heroSubheadline:
      "After-hours and same-day response for urgent facility breakdowns, damage, and safety incidents.",
    primaryCtaLabel: "Request Emergency Service",
    problemIntro:
      "When something breaks at 2 AM, you need a contractor who actually picks up. Most don't.",
    problems: [
      "Vendors that take days to call back",
      "Temporary fixes that fail within hours",
      "Single-trade contractors who can't handle multi-trade issues",
      "Unclear pricing and surprise after-hours fees",
    ],
    offers: [
      "24/7 emergency dispatch",
      "Storm and vehicle damage response",
      "Door, dock, and security failures",
      "Water intrusion and slab damage",
      "Electrical and lighting failures",
      "HVAC and mechanical breakdowns",
      "Board-up and temporary protection",
      "Insurance documentation",
    ],
    process: DEFAULT_PROCESS,
    midCtaText: "Facility emergency right now? Call (770) 628-5444 — we dispatch fast.",
    midCtaLabel: "Request Emergency Service",
    bottomCtaHeadline: "Have an after-hours emergency?",
    bottomCtaText: "Call us directly — we'll dispatch a crew and document everything for insurance.",
    bottomCtaLabel: "Request Emergency Service",
    relatedPosts: DEFAULT_RELATED,
  },
  "safety-barriers": {
    heroEyebrow: "Facility Services",
    heroHeadline: "Bollards, guardrails, and column protection installed to OSHA",
    heroSubheadline:
      "Concrete-filled bollards, steel guardrails, column protection, and pedestrian barriers installed to OSHA and ANSI standards.",
    primaryCtaLabel: "Request a Safety Walk",
    heroImage: rackingColumnProtectors,
    gallery: [
      { src: rackingNewBays, caption: "New pallet rack bays set, plumbed, and anchored alongside an active pick aisle." },
      { src: rackingColumnProtectors, caption: "Yellow column protectors installed at every upright to absorb forklift impacts." },
      { src: rackingAisleGuards, caption: "End-of-aisle guards and base protectors lining a full racking run." },
      { src: rackingEmpty, caption: "Freshly erected selective racking ready for wire decking and load." },
    ],
    problemIntro:
      "Forklift impacts are predictable. Every unprotected column, rack upright, and corner is one incident away from a shutdown.",
    problems: [
      "Forklift damage to columns and racking",
      "Pedestrian and forklift paths crossing without barriers",
      "Missing or insufficient bollards at dock areas",
      "OSHA findings on guardrail and fall protection",
    ],
    offers: [
      "Concrete-filled steel bollards",
      "Removable and retractable bollards",
      "Steel guardrails and barrier systems",
      "Column and rack protection",
      "Pedestrian walkway barriers",
      "Mezzanine and dock edge guardrails",
      "Floor markings and signage",
      "OSHA-compliant fall protection",
    ],
    process: DEFAULT_PROCESS,
    midCtaText:
      "Want to harden your facility against forklift damage? We'll walk it and recommend a plan.",
    midCtaLabel: "Request a Safety Walk",
    bottomCtaHeadline: "Ready to protect your facility?",
    bottomCtaText:
      "Tell us where the impacts are happening — we'll recommend a barrier plan and price it.",
    bottomCtaLabel: "Request a Safety Walk",
    relatedPosts: DEFAULT_RELATED,
  },
  "lighting-electrical-upgrades": {
    heroEyebrow: "Facility Services",
    heroHeadline: "Lighting and electrical upgrades for warehouse facilities",
    heroSubheadline:
      "LED retrofits, high-bay lighting, exterior lighting, and electrical upgrades that cut energy costs and improve safety.",
    primaryCtaLabel: "Request a Lighting Audit",
    problemIntro:
      "Old metal halide and fluorescent fixtures waste energy, produce poor light, and require constant relamping.",
    problems: [
      "High energy bills from outdated fixtures",
      "Dark areas creating safety hazards",
      "Constant lamp replacements draining maintenance time",
      "Electrical panels near capacity blocking expansions",
    ],
    offers: [
      "LED high-bay retrofits",
      "Warehouse and dock lighting",
      "Exterior and parking lot lighting",
      "Occupancy and daylight controls",
      "Electrical panel upgrades",
      "New circuit and equipment connections",
      "Emergency and exit lighting",
      "Rebate documentation",
    ],
    process: DEFAULT_PROCESS,
    midCtaText: "Want to cut lighting costs and improve coverage? Start with a free audit.",
    midCtaLabel: "Request a Lighting Audit",
    bottomCtaHeadline: "Ready to upgrade your lighting?",
    bottomCtaText:
      "We'll walk your facility, model the savings, and return a turnkey proposal with rebates.",
    bottomCtaLabel: "Request a Lighting Audit",
    relatedPosts: DEFAULT_RELATED,
  },
  "warehouse-maintenance": {
    heroEyebrow: "Facility Services",
    heroHeadline: "Preventative warehouse maintenance programs in Georgia",
    heroSubheadline:
      "Recurring maintenance programs that catch failures before they cause downtime in distribution centers and industrial facilities.",
    primaryCtaLabel: "Build a Maintenance Plan",
    problemIntro:
      "Reactive maintenance is more expensive than preventative — every time. The question is whether you control the schedule, or your equipment does.",
    problems: [
      "Surprise breakdowns disrupting operations",
      "Equipment failing inspections and audits",
      "Multiple vendors with no single point of accountability",
      "No maintenance records when insurance asks",
    ],
    offers: [
      "Scheduled dock and door PMs",
      "Lighting and electrical inspections",
      "HVAC and mechanical PMs",
      "Concrete and slab inspections",
      "Bollard and safety equipment checks",
      "Roof and exterior walk-throughs",
      "Detailed maintenance records and reports",
      "Single point of contact for all trades",
    ],
    process: DEFAULT_PROCESS,
    midCtaText:
      "Tired of juggling vendors? Let one team handle preventative maintenance for the whole facility.",
    midCtaLabel: "Build a Maintenance Plan",
    bottomCtaHeadline: "Ready for a real maintenance program?",
    bottomCtaText:
      "We'll walk your facility, identify the right scope and frequency, and propose a program.",
    bottomCtaLabel: "Build a Maintenance Plan",
    relatedPosts: DEFAULT_RELATED,
  },
  "facility-upgrades": {
    heroEyebrow: "Facility Services",
    heroHeadline: "Planned facility upgrades across dock, lighting, HVAC, and safety",
    heroSubheadline:
      "Capital upgrades planned, budgeted, and executed by one team — so your facility keeps improving year over year.",
    primaryCtaLabel: "Plan Your Upgrades",
    problemIntro:
      "Most facilities know what needs upgrading. The hard part is sequencing the work, budgeting it, and getting it done.",
    problems: [
      "Upgrade projects competing for the same budget and shutdown windows",
      "Multiple vendors with conflicting recommendations",
      "Scope creep blowing past approved budgets",
      "Projects that never get past the planning stage",
    ],
    offers: [
      "Dock and overhead door upgrades",
      "LED lighting and controls retrofits",
      "HVAC and mechanical upgrades",
      "Bollard and safety system installs",
      "Concrete and slab upgrades",
      "Office and breakroom refreshes",
      "Capital planning and budgeting support",
      "Phased multi-year programs",
    ],
    process: DEFAULT_PROCESS,
    midCtaText: "Have a list of upgrades you've been meaning to get to? Let's build the plan.",
    midCtaLabel: "Plan Your Upgrades",
    bottomCtaHeadline: "Ready to plan capital upgrades?",
    bottomCtaText:
      "Share your list — we'll prioritize, price, and propose a realistic execution plan.",
    bottomCtaLabel: "Plan Your Upgrades",
    relatedPosts: DEFAULT_RELATED,
  },
  "preventative-repairs": {
    heroEyebrow: "Facility Services",
    heroHeadline: "Preventative repairs that stop failures before they cost you uptime",
    heroSubheadline:
      "Scheduled inspections and small repairs that catch failures before they become emergencies.",
    primaryCtaLabel: "Schedule an Inspection",
    problemIntro:
      "Most facility emergencies start as small issues that someone noticed and didn't act on. Preventative repair fixes the small issues on a schedule.",
    problems: [
      "Small issues ignored until they cause downtime",
      "Walk-throughs that find problems but don't fix them",
      "Repairs delayed waiting on quotes from multiple vendors",
      "No documentation of work performed",
    ],
    offers: [
      "Scheduled facility walk-throughs",
      "Photo-documented inspection reports",
      "Same-visit repairs for minor issues",
      "Prioritized lists for larger work",
      "Predictable monthly or quarterly scheduling",
      "Multi-trade response from one team",
      "Maintenance history and reporting",
      "Single point of accountability",
    ],
    process: DEFAULT_PROCESS,
    midCtaText: "Want fewer surprises in your facility? Get on a preventative schedule.",
    midCtaLabel: "Schedule an Inspection",
    bottomCtaHeadline: "Ready to get ahead of repairs?",
    bottomCtaText:
      "We'll propose an inspection cadence and a fixed monthly cost for routine repairs.",
    bottomCtaLabel: "Schedule an Inspection",
    relatedPosts: DEFAULT_RELATED,
  },
  "industrial-hvac": {
    heroEyebrow: "Facility Services",
    heroHeadline: "Industrial HVAC and operational system improvements",
    heroSubheadline:
      "Repair, replacement, and improvement of HVAC, mechanical, and operational systems for industrial facilities across Georgia.",
    primaryCtaLabel: "Request an HVAC Assessment",
    heroImage: hvacRooftop,
    gallery: [
      { src: hvacRooftop, caption: "50-ton AAON rooftop unit set and tied into gas line on a commercial roof." },
      { src: hvacControls, caption: "Controls and compressor cabinet wired up and commissioned on a new rooftop unit." },
      { src: hvacCeiling, caption: "Overhead unit replacement in an active warehouse — crews working from scissor and boom lifts." },
      { src: hvacDuctwork, caption: "Warehouse air distribution and high-bay lighting in a recently serviced facility." },
    ],
    problemIntro:
      "HVAC in an industrial facility isn't comfort — it's process, product, and worker safety. Failures cost real money.",
    problems: [
      "Rooftop units past their service life",
      "Inadequate ventilation in dock and production areas",
      "Office HVAC tied to warehouse systems",
      "Reactive HVAC service driving up costs",
    ],
    offers: [
      "Rooftop unit repair and replacement",
      "Make-up air and ventilation upgrades",
      "Dock and warehouse heating systems",
      "Office HVAC zone separation",
      "Preventative HVAC maintenance",
      "Controls and thermostat upgrades",
      "Energy efficiency improvements",
      "Mechanical and plumbing coordination",
    ],
    process: DEFAULT_PROCESS,
    midCtaText: "Want HVAC handled with the rest of your facility? Let us assess.",
    midCtaLabel: "Request an HVAC Assessment",
    bottomCtaHeadline: "Ready to fix your HVAC?",
    bottomCtaText:
      "We'll inspect units, document conditions, and recommend repair or replacement with pricing.",
    bottomCtaLabel: "Request an HVAC Assessment",
    relatedPosts: DEFAULT_RELATED,
  },
};

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const svc = services.find((s) => s.slug === params.slug);
    if (!svc) throw notFound();
    return { svc };
  },
  head: ({ loaderData }) => {
    const svc = loaderData?.svc;
    const title = svc
      ? `${svc.title} | Premier HD Pro`
      : "Service | Premier HD Pro";
    const description = svc?.short ?? "Commercial construction and facility services.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="container-pro py-24 text-center">
      <h1 className="text-3xl font-bold">Service not found</h1>
      <p className="mt-3 text-muted-foreground">
        The service you're looking for doesn't exist.
      </p>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="container-pro py-24 text-center">
      <h1 className="text-3xl font-bold">Something went wrong</h1>
      <p className="mt-3 text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: ServiceDetail,
});

function ServiceDetail() {
  const { svc } = Route.useLoaderData();
  const content = CONTENT[svc.slug] ?? fallbackContent(svc.title, svc.short);
  return <ServicePage slug={svc.slug} {...content} />;
}

function fallbackContent(title: string, short: string): ServiceContent {
  return {
    heroEyebrow: "Service",
    heroHeadline: title,
    heroSubheadline: short,
    primaryCtaLabel: "Request a Proposal",
    problemIntro:
      "Facility and construction work goes wrong when it isn't sequenced, supervised, and documented. We do all three.",
    problems: [
      "Vendors that under-scope and over-promise",
      "Crews that don't follow facility safety rules",
      "Poor communication during execution",
      "Punch list items that drag on forever",
    ],
    offers: [
      "Scoping and budgeting",
      "Permits and inspections",
      "Qualified crews and supervision",
      "Daily progress updates",
      "Quality control and closeout",
      "Warranty and follow-up",
    ],
    process: DEFAULT_PROCESS,
    midCtaText: "Have a project in mind? Let's walk the building and talk through it.",
    midCtaLabel: "Request a Site Walk",
    bottomCtaHeadline: "Ready to talk about your project?",
    bottomCtaText:
      "Send us a quick description and we'll respond within one business day.",
    bottomCtaLabel: "Request a Proposal",
    relatedPosts: DEFAULT_RELATED,
  };
}