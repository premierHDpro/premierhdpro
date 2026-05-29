## Repositioning: Facility Services → Commercial Construction GC

Premier HD Pro is being repositioned as an **industrial/commercial GC** that also does facility services — not the other way around. The visual language shifts from clean facility-services-blue to **dark industrial + crisp white**, ARCO Murray / DPR / Clayco territory.

### Visual direction (locked)

- **Palette**: Charcoal/near-black primary surfaces (`oklch(0.16 0.01 250)`), pure white content sections, signal-orange accent (`oklch(0.68 0.18 45)` — safety/construction connotation), steel-gray secondary. Dark hero, dark CTA bands, dark map section; white about/services/projects sections for strong separation.
- **Typography**: Bold industrial sans for headlines (kept in current font stack, tighter tracking, heavier weights), neutral sans for body. Oversized H1/H2 with confident leading.
- **Motion**: Minimal — fade-in on scroll, subtle image hover scale. No parallax theatrics.
- **Imagery**: Real industrial — warehouse interiors, steel framing, concrete pours, dock equipment, crews in PPE.

### Homepage rebuild (`src/routes/index.tsx`)

Replace current homepage sections with:

1. **Hero** (dark, full-bleed image) — "Commercial Construction & Facility Solutions for Industrial Properties" + subhead + dual CTA ("Request a Site Walk" / "Get a Fast Quote") + Georgia trust line.
2. **Trust bar** — 6 icon chips: Fast Turnaround, Active Facility Experience, Commercial Construction, Industrial Facility Expertise, Safety Focused, Multi-Trade Coordination.
3. **About** — "Built Around Operational Facilities" two-column with image collage.
4. **Services — two categories** with tabbed/segmented layout:
   - **Commercial Construction** (11 cards): Warehouse Renovations, Tenant Improvements, Office Buildouts, Interior Construction, Metal Framing & Drywall, Concrete Construction, Structural Modifications, Demolition, Doors/Frames/Hardware, Flooring & Finishes, Exterior Improvements.
   - **Facility Services** (8 cards): Dock Equipment Repairs, Emergency Facility Repairs, Bollards & Safety Rails, Lighting & Electrical Upgrades, Warehouse Maintenance, Facility Upgrades, Preventative Repairs, Operational Improvements.
5. **Projects/case studies** — 4 featured projects with scope + operational challenge.
6. **Why choose us** — 6 feature blocks on dark background.
7. **Industries** — 6 industry cards (Warehouses, DCs, Manufacturing, Logistics, Commercial Buildings, Industrial Properties).
8. **Service area** — dark section listing Georgia coverage (map illustration with location markers).
9. **Closing CTA** — "Need a Commercial Construction Partner That Understands Operational Facilities?"
10. **Contact** — existing ContactForm with added Company + Facility Location fields, "Typical response within 1 business day."

### Sitewide changes

- **`src/styles.css`** — add/adjust tokens: `--ink` (charcoal), `--signal` (orange accent), `--steel`, `--surface-dark`; new utility classes for dark section, industrial card, section-divider.
- **`src/routes/__root.tsx`** — update root title/description/OG copy to "Commercial Construction & Facility Solutions" framing. Update JSON-LD `@type` to add `GeneralContractor` services list including commercial construction.
- **`src/components/SiteHeader.tsx`** — nav restructured: Services dropdown split into "Commercial Construction" and "Facility Services"; primary CTA → "Request a Site Walk".
- **`src/components/SiteFooter.tsx`** — mirror the new service split, update tagline.
- **`src/components/ContactForm.tsx`** — add Company + Facility Location fields; update subject/labels.
- **`src/data/services.ts`** — expand with the 11 construction services; keep facility services intact, tagged by category.
- **`public/llms.txt`** — refresh to lead with commercial construction.

### Out of scope this turn

- Individual new route pages for each of the 11 new construction services (keep current routes; add them as a follow-up if you want dedicated SEO landing pages per service).
- Backend/contact handler changes beyond the two added fields.
- New project photography — I'll use the existing hero image and add 1–2 generated industrial images for sections that need them.

### Technical notes

- Service categorization implemented by adding a `category: "construction" | "facility"` field to each entry in `src/data/services.ts` and filtering in the homepage section.
- Dark sections use semantic tokens (`bg-ink text-ink-foreground`), no raw hex.
- `ContactForm` field additions are presentational + included in the email body sent through the existing `/api/public/contact` endpoint (small handler update to forward the two new fields).
