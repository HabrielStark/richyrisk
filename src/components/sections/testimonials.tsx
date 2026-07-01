import { Reveal } from "@/components/reveal";
import { RevealHeading } from "@/components/reveal-heading";

const quotes = [
  {
    quote:
      "The Glaze Serum replaced three products on my shelf. My skin simply looks lit from within.",
    name: "Mara Lindqvist",
    source: "on Glaze Serum",
  },
  {
    quote:
      "A house that feels editorial and actually performs. The Barrier Crème is quietly extraordinary.",
    name: "Priya Anand",
    source: "on Barrier Crème",
  },
  {
    quote:
      "Lip Glaze in Bisou lives in my coat pocket — the most flattering nude I have ever worn.",
    name: "Joséphine Caron",
    source: "on Lip Glaze",
  },
];

export function Testimonials() {
  return (
    <section
      id="reviews"
      className="border-t border-noir/10 bg-porcelain"
    >
      <div className="mx-auto max-w-[1500px] px-6 py-24 md:px-8 md:py-36">
        <Reveal>
          <p className="eyebrow text-center text-stone">Worn and loved</p>
        </Reveal>
        <RevealHeading
          className="font-display mx-auto mt-6 max-w-[22ch] text-balance text-center text-3xl font-normal leading-[1.1] text-noir md:text-[2.6rem]"
          lines={["A glow people keep coming back for."]}
          delay={0.05}
        />

        <div className="mt-16 grid border-y border-noir/12 md:mt-24 md:grid-cols-3 md:divide-x md:divide-noir/12">
          {quotes.map((q, i) => (
            <Reveal key={q.name} delay={i * 0.1}>
              <figure className="flex h-full flex-col justify-between gap-10 py-11 md:px-10 md:py-14">
                <blockquote className="font-display text-xl font-normal leading-[1.42] text-ink md:text-[1.55rem]">
                  &ldquo;{q.quote}&rdquo;
                </blockquote>
                <figcaption className="text-[0.7rem] uppercase tracking-[0.22em] text-stone">
                  <span className="text-noir">{q.name}</span>
                  <span className="mx-2 text-champagne">·</span>
                  {q.source}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
