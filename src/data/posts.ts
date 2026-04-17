export type Post = {
  slug: string;
  title: string;
  description: string;
  category: string;
  readMin: number;
  date: string;
  body: { h?: string; p?: string; ul?: string[] }[];
  related?: string[]; // service slugs
};

export const posts: Post[] = [
  {
    slug: "cost-to-repair-concrete-floors-warehouse",
    title: "Cost to Repair Concrete Floors in a Warehouse",
    description:
      "What facility managers should expect to pay for warehouse concrete floor repair in Georgia, including crack repair, joint repair, spalling, and full resurfacing.",
    category: "Concrete",
    readMin: 7,
    date: "2025-02-12",
    related: ["concrete-floor-repair", "warehouse-maintenance"],
    body: [
      { p: "Warehouse and distribution center floors take more abuse than almost any other surface in a commercial building. Constant forklift traffic, heavy pallet jacks, dropped loads, and freeze-thaw cycles near dock doors all contribute to cracking, spalling, and joint failure. For facility managers, the real question isn't whether the floor needs work — it's how to budget for repairs without shutting down operations." },
      { h: "What drives the cost of warehouse floor repair?" },
      { p: "Pricing for industrial concrete repair in Atlanta and across Georgia depends on a handful of variables: the scope of damage, the type of repair material specified, whether the slab needs to support continued forklift traffic immediately after work, and how much of the work has to happen overnight or on weekends to avoid disrupting operations." },
      { ul: [
        "Crack repair (epoxy/polyurea injection): typically $8–$25 per linear foot depending on width and depth.",
        "Joint repair and re-filling: $4–$12 per linear foot for semi-rigid joint filler installed to manufacturer spec.",
        "Spall repair at joints and dock doors: $30–$75 per spall for small areas; full joint armoring runs higher.",
        "Section replacement (saw cut, demo, repour): $18–$40 per square foot, plus cure time considerations.",
        "Polishing or densifier topcoats: $4–$12 per square foot for surface upgrades on otherwise sound slabs.",
      ] },
      { h: "Why repairs in active facilities cost more" },
      { p: "Repairing concrete in an empty building is straightforward. Repairing it in a 24/7 distribution center is not. Crews have to coordinate with operations, work in phased zones, isolate dust, and use rapid-cure materials that can take forklift traffic in hours instead of days. That coordination — not the material — is what drives most of the difference between a residential quote and a true commercial number." },
      { h: "Repair vs. replace: when does it make sense?" },
      { p: "A good rule of thumb: if more than 25–30% of joints are spalled or cracking, and the slab is older than 20 years, full slab replacement (in zones) often becomes the better long-term value. For most facilities, a phased repair plan combined with a preventative maintenance schedule extends slab life by 10+ years at a fraction of replacement cost." },
      { h: "How to budget for the next 12 months" },
      { p: "Walk your floor with a contractor experienced in industrial environments. Map every cracked joint, every spalled dock door approach, and every uneven transition. Prioritize anything that creates a forklift impact — those failures compound quickly. From there, build a 12-month repair plan with phased budgets so you're never surprised." },
      { p: "Premier HD Pro performs warehouse floor assessments across Metro Atlanta — McDonough, Locust Grove, Henry County, and surrounding areas. We deliver a written scope, prioritized by risk and operational impact." },
    ],
  },
  {
    slug: "polished-concrete-vs-epoxy-warehouse",
    title: "Polished Concrete vs Epoxy Floors in Warehouses",
    description:
      "Pros, cons, and real-world cost comparison of polished concrete vs epoxy coatings for warehouse and distribution center floors.",
    category: "Concrete",
    readMin: 6,
    date: "2025-02-20",
    related: ["concrete-floor-repair"],
    body: [
      { p: "When a warehouse floor finally needs an upgrade, the decision usually comes down to two options: polished concrete or an epoxy coating. Both look great on day one. The difference shows up at year five." },
      { h: "Polished concrete: how it works" },
      { p: "Polished concrete uses progressively finer diamond grinding combined with a chemical densifier to harden and refine the existing slab. There's no coating — the floor itself becomes the finish. That means nothing to peel, chip, or delaminate under forklift traffic." },
      { ul: [
        "Lifespan: 10–20+ years with light maintenance.",
        "Cost: $4–$12 per sq. ft. installed depending on gloss level.",
        "Best for: distribution centers, big-box retail, manufacturing aisles.",
        "Drawback: requires a structurally sound slab to start with.",
      ] },
      { h: "Epoxy coatings: how they work" },
      { p: "Epoxy is a topical coating bonded to a prepared slab. Done correctly, it provides a chemical-resistant, easy-to-clean surface. Done poorly — or applied over a moisture-laden slab — it will fail in months." },
      { ul: [
        "Lifespan: 3–10 years depending on traffic and prep.",
        "Cost: $3–$8 per sq. ft. for standard systems.",
        "Best for: chemical processing areas, food-grade zones, mechanical rooms.",
        "Drawback: peel and delamination under heavy forklift impact.",
      ] },
      { h: "Which one is right for your facility?" },
      { p: "If you're operating a high-traffic warehouse with steady forklift movement, polished concrete almost always wins on lifecycle cost. If you need chemical resistance, easy decontamination, or color-coded zoning, a properly installed epoxy or urethane system makes more sense." },
      { p: "Most large facilities end up using both — polished in the main aisles, epoxy in mechanical and processing rooms. The key is matching the system to how the space is actually used." },
    ],
  },
  {
    slug: "common-maintenance-issues-distribution-centers",
    title: "Common Maintenance Issues in Distribution Centers",
    description:
      "The recurring maintenance problems that hit distribution centers hardest — and how proactive facility teams stay ahead of them.",
    category: "Maintenance",
    readMin: 8,
    date: "2025-03-01",
    related: ["warehouse-maintenance", "dock-door-repair"],
    body: [
      { p: "Distribution centers are punishing environments. Doors cycle thousands of times a month, floors take constant impact, and HVAC systems work overtime to condition massive volumes of air. After working in dozens of facilities across Georgia, the same five issues come up again and again." },
      { h: "1. Dock door and leveler failures" },
      { p: "Dock equipment is the #1 source of unplanned downtime. Bent panels, worn springs, blown hydraulics on levelers, and torn dock seals all interrupt loading. The fix is a quarterly preventative inspection — most failures show warning signs weeks in advance." },
      { h: "2. Concrete joint spalling at dock approaches" },
      { p: "The 10 feet of concrete in front of every dock door takes more abuse than the rest of the warehouse combined. Once joints start spalling, forklift impact accelerates the damage exponentially." },
      { h: "3. HVAC short cycling and inadequate cooling" },
      { p: "Original HVAC systems are often undersized for current operations. Symptoms include short cycling, hot zones, and rising energy bills. A load calculation update usually pays for itself in 18 months." },
      { h: "4. Lighting failures and outdated fixtures" },
      { p: "Old metal halide and HPS fixtures fail constantly and consume 2–3× the energy of modern LED high bays. A retrofit is one of the highest-ROI projects available in any warehouse." },
      { h: "5. Missing or damaged safety infrastructure" },
      { p: "Bent bollards, missing guardrails, and damaged column protectors are everywhere. Each one is both a safety issue and a sign that an impact event went undocumented." },
      { h: "Building a proactive maintenance program" },
      { p: "Reactive maintenance is always more expensive. A simple quarterly walk with a commercial contractor — focused on dock equipment, floors, HVAC, and safety infrastructure — typically reduces emergency repair spend by 30–50%." },
    ],
  },
  {
    slug: "commercial-door-replacement-guide",
    title: "Commercial Door Replacement Guide",
    description:
      "When to repair vs. replace commercial dock doors and entry systems — and what to expect from a properly executed project.",
    category: "Doors & Docks",
    readMin: 6,
    date: "2025-03-10",
    related: ["dock-door-repair"],
    body: [
      { p: "Commercial doors don't usually fail all at once. They degrade — slowly enough that operations teams adapt around them until a critical breakdown forces the issue. The smarter approach is to plan replacement before that breakdown happens." },
      { h: "Signs it's time to replace, not repair" },
      { ul: [
        "Repeated panel damage from forklift impact.",
        "Springs and cables replaced more than once in the past 24 months.",
        "Visible daylight around the perimeter (failing seals).",
        "Operator failures becoming more frequent.",
        "Doors no longer meeting current insulation or security requirements.",
      ] },
      { h: "What a quality replacement project includes" },
      { p: "A real replacement isn't just swapping a panel. It includes inspecting the opening for square, replacing tracks if worn, upgrading springs to current cycle ratings, replacing the operator if past lifecycle, installing new seals, and verifying the leveler integration. Skipping any of these guarantees an early repeat." },
      { h: "Typical timelines and downtime" },
      { p: "A standard dock door replacement takes 6–10 hours per opening. Most warehouses can stage work to a single dock at a time, keeping the rest of the loading area operational. Larger entry doors and storefronts may require overnight scheduling." },
      { h: "Budget guidance" },
      { p: "Standard insulated sectional dock doors (10×10) typically run $3,500–$7,500 installed depending on insulation, windows, and operator type. Heavy-duty cycle doors and high-speed roll-up doors run higher but pay back quickly in high-traffic openings." },
    ],
  },
  {
    slug: "hvac-issues-large-warehouses",
    title: "HVAC Issues in Large Warehouses",
    description:
      "Why warehouse HVAC underperforms, what causes the most common failures, and how to plan upgrades that actually work.",
    category: "HVAC",
    readMin: 7,
    date: "2025-03-18",
    related: ["industrial-hvac", "warehouse-maintenance"],
    body: [
      { p: "Conditioning a 200,000 sq. ft. warehouse is a fundamentally different problem than conditioning an office. Volume, infiltration through dock doors, internal heat loads from equipment, and stratification all combine to make warehouse HVAC one of the hardest mechanical problems in commercial buildings." },
      { h: "Why systems underperform" },
      { p: "Most warehouse HVAC complaints trace back to one of three issues: the original system was undersized for current operations, infiltration through dock openings overwhelms cooling capacity, or maintenance has been deferred long enough that efficiency has dropped 20–30%." },
      { h: "Stratification — the hidden killer" },
      { p: "In tall warehouses, hot air collects at the ceiling while cold air settles on the floor. Without destratification fans, you can be heating 30 feet of air that nobody breathes. HVLS fans typically pay back in under 24 months on energy alone." },
      { h: "When to repair vs. replace" },
      { p: "If a rooftop unit is past 15 years and requires more than $3,000 in repair, replacement usually wins on lifecycle. New high-efficiency units pair well with smart controls and zoning, both of which cut operating costs significantly in large facilities." },
      { h: "Planning a phased HVAC upgrade" },
      { p: "Few warehouses can replace an entire HVAC system at once. A phased plan — sequenced by unit age, failure risk, and zone criticality — lets facility managers spread capital expense over 3–5 years while continuously improving performance." },
    ],
  },
  {
    slug: "preventative-maintenance-plan-facilities",
    title: "Preventative Maintenance Plan for Facilities",
    description:
      "A practical framework for building a preventative maintenance plan for warehouses, distribution centers, and industrial facilities.",
    category: "Maintenance",
    readMin: 8,
    date: "2025-03-26",
    related: ["warehouse-maintenance"],
    body: [
      { p: "Reactive maintenance is the most expensive way to operate a facility. A structured preventative maintenance (PM) plan typically reduces emergency repair spend by 30–50%, extends equipment life by years, and dramatically reduces unplanned downtime." },
      { h: "Step 1: Inventory every asset" },
      { p: "You can't maintain what you haven't documented. Build a list of every dock door, leveler, HVAC unit, lighting circuit, fire suppression component, and major piece of facility infrastructure. Capture make, model, install date, and last service date." },
      { h: "Step 2: Set inspection cadences" },
      { ul: [
        "Dock equipment: monthly visual, quarterly functional inspection.",
        "HVAC rooftop units: quarterly filter and belt service, semi-annual full PM.",
        "Concrete floors and joints: quarterly walk for new spalling or cracks.",
        "Safety infrastructure (bollards, guardrails): monthly walk.",
        "Roofing: semi-annual inspection plus after major weather events.",
      ] },
      { h: "Step 3: Prioritize by operational impact" },
      { p: "Not every failure is equal. A failed dock door at your highest-volume bay is a 6-figure problem. A burned-out parking lot light is not. Rank every asset by what happens to operations when it fails — and budget accordingly." },
      { h: "Step 4: Build the budget" },
      { p: "A reasonable PM budget for a typical Class A distribution center runs $0.15–$0.40 per sq. ft. annually, depending on building age and equipment density. Pair that with a reserve for capital replacements, and you'll avoid almost every emergency call." },
      { h: "Step 5: Pick a contractor who works in active facilities" },
      { p: "PM work in a 24/7 distribution center looks nothing like PM work in an empty building. You need a contractor experienced with phased access, off-hours work, and clean handoffs back to operations. That's exactly what Premier HD Pro does across Metro Atlanta." },
    ],
  },
];
