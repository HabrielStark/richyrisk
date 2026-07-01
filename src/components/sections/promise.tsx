import { Reveal, RevealStagger, RevealItem } from "@/components/reveal";
import { RevealHeading } from "@/components/reveal-heading";

const values = [
  {
    n: "01",
    title: "Clean by conviction",
    copy: "Vegan, cruelty-free and free of the fillers that dull a glow. What goes in earns its place — nothing for show.",
  },
  {
    n: "02",
    title: "Dermatologist-formulated",
    copy: "Every formula is developed with clinical oversight and tested for sensitive skin, so performance never costs you comfort.",
  },
  {
    n: "03",
    title: "Refillable by design",
    copy: "Heavyweight glass made to be kept. Refills arrive in recyclable pods, not new jars — luxury that lasts.",
  },
];

export function Promise() {
  return (
    <section
      id="values"
      className="border-t border-noir/10 bg-porcelain"
    >
      <div className="mx-auto max-w-[1500px] px-6 pt-16 pb-24 md:px-8 md:pt-24 md:pb-28">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <div className="max-w-[44ch]">
            <Reveal>
              <p className="eyebrow">The house code</p>
            </Reveal>
            <RevealHeading
              className="font-display mt-4 text-4xl font-normal leading-[1.04] text-noir md:text-6xl"
              lines={["Held to a single", <em key="s" className="italic text-champagne">standard.</em>]}
              delay={0.05}
            />
          </div>
          <Reveal delay={0.15} className="md:pb-2">
            <p className="max-w-[30ch] text-sm leading-relaxed text-stone">
              Three rules we never bend. They decide what we make, what we leave
              out, and how it comes back to you.
            </p>
          </Reveal>
        </div>

        <RevealStagger className="grid md:grid-cols-3">
          {values.map((v) => (
            <RevealItem key={v.title}>
              <div className="group relative flex h-full flex-col border-t border-noir/15 pt-8 transition-colors duration-500 md:px-2 md:pr-10">
                {/* animated accent that extends on hover */}
                <span className="absolute left-0 top-0 h-px w-12 bg-champagne transition-[width] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
                <span className="font-display text-3xl text-champagne">
                  {v.n}
                </span>
                <h3 className="font-display mt-5 text-2xl text-noir md:text-[1.7rem]">
                  {v.title}
                </h3>
                <p className="mt-3 max-w-[38ch] text-sm leading-relaxed text-stone">
                  {v.copy}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
