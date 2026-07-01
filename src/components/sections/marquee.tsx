const words = [
  "Peptide Glow",
  "Glass Skin",
  "Clean Color",
  "Refillable by Design",
  "Dermatologist Formulated",
  "Quiet Luxury",
];

export function MarqueeBand() {
  const row = [...words, ...words];
  return (
    <section id="ethos" className="border-y border-noir/10 bg-porcelain">
      <div
        className="marquee-group flex overflow-hidden py-4 md:py-[1.15rem]"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 14%, black 86%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 14%, black 86%, transparent)",
        }}
      >
        {[0, 1].map((g) => (
          <div
            key={g}
            aria-hidden={g === 1}
            className="animate-marquee flex shrink-0 items-center whitespace-nowrap"
          >
            {row.map((w, i) => (
              <span key={i} className="flex items-center">
                <span className="px-9 text-[0.7rem] font-medium uppercase tracking-[0.34em] text-ink/75 md:text-[0.78rem]">
                  {w}
                </span>
                <span className="h-[3px] w-[3px] rotate-45 bg-champagne" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
