export function TaglineMarquee() {
  // One repeated unit; we render it twice for a seamless -50% scroll loop.
  const Item = () => (
    <span className="flex shrink-0 items-center gap-6 px-6">
      <span>Built on Relationships</span>
      <span className="text-safety/60">◆</span>
      <span>Driven by Integrity</span>
      <span className="text-safety/60">◆</span>
    </span>
  );

  const Track = () => (
    <div className="flex shrink-0 animate-marquee items-center whitespace-nowrap">
      {Array.from({ length: 10 }).map((_, i) => (
        <Item key={i} />
      ))}
    </div>
  );

  return (
    <div
      className="relative overflow-hidden border-y-2 border-safety/40 bg-primary py-2.5 text-xs font-bold uppercase tracking-[0.25em] text-safety"
      aria-label="Built on Relationships, Driven by Integrity"
    >
      <div className="flex w-max">
        <Track />
        <Track />
      </div>
    </div>
  );
}