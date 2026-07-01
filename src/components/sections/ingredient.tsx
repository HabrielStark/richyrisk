import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { RevealHeading } from "@/components/reveal-heading";
import { Parallax } from "@/components/parallax";
import { CountUp } from "@/components/count-up";

const facts = [
  { value: 3, suffix: "", label: "Active peptides in every drop" },
  { value: 0, suffix: "", label: "Fillers, ever" },
  { value: 94, suffix: "%", label: "Saw visible glow in two weeks*" },
];

export function Ingredient() {
  return (
    <section id="formula" className="relative overflow-hidden bg-noir text-porcelain">
      <div className="bloom-warm" aria-hidden />
      <div className="relative mx-auto grid max-w-[1500px] items-stretch md:grid-cols-2">
        {/* Image */}
        <Parallax
          className="relative aspect-[4/5] w-full bg-noir md:aspect-auto md:min-h-[86vh]"
          amount={6}
        >
          <Image
            src="/images/ingredient-serum.png"
            alt="Macro detail of the champagne-gold Glaze Serum with a falling droplet"
            fill
            loading="eager"
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </Parallax>

        {/* Copy + stats */}
        <div className="flex flex-col justify-center px-6 py-20 md:px-14 md:py-28 lg:px-20">
          <Reveal>
            <p className="eyebrow text-champagne-light">The formula</p>
          </Reveal>
          <RevealHeading
            className="font-display mt-5 text-4xl font-normal leading-[1.0] text-porcelain md:text-6xl lg:text-7xl"
            lines={[
              "Quiet science.",
              <em key="l" className="italic text-champagne-light">
                Loud results.
              </em>,
            ]}
            delay={0.05}
          />
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-[46ch] text-base leading-relaxed text-porcelain/70">
              We formulate at the intersection of dermatology and desire. Marine
              ferments, triple peptides and barrier lipids, balanced so the glow
              looks like skin, not product.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-3 gap-5 border-t border-porcelain/15 pt-10 md:gap-8">
            {facts.map((f, i) => (
              <Reveal key={f.label} delay={i * 0.1}>
                <p className="font-display text-4xl font-normal text-porcelain md:text-5xl">
                  <CountUp value={f.value} suffix={f.suffix} />
                </p>
                <p className="mt-2 text-[0.74rem] leading-snug text-porcelain/55 md:text-[0.8rem]">
                  {f.label}
                </p>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-[0.7rem] text-porcelain/35">
            *Based on a four-week consumer use study of 112 participants.
          </p>
        </div>
      </div>
    </section>
  );
}
