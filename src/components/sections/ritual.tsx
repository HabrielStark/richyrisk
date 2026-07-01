import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { RevealHeading } from "@/components/reveal-heading";
import { Parallax } from "@/components/parallax";

const steps = [
  {
    n: "01",
    name: "Cleanse",
    product: "Cleansing Balm",
    slug: "cleansing-balm",
    copy: "A melting balm dissolves the day. Skin is left soft, calm and ready.",
  },
  {
    n: "02",
    name: "Glaze",
    product: "Glaze Serum",
    slug: "glaze-serum",
    copy: "The peptide concentrate floods the surface and sets the glass-skin finish.",
  },
  {
    n: "03",
    name: "Seal",
    product: "Barrier Crème",
    slug: "barrier-creme",
    copy: "A restorative crème locks it all in. You wake up cushioned and luminous.",
  },
];

export function Ritual() {
  return (
    <section
      id="ritual"
      className="border-t border-noir/10 bg-porcelain-deep/40"
    >
      <div className="mx-auto grid max-w-[1500px] gap-12 px-6 py-24 md:grid-cols-2 md:gap-20 md:px-8 md:py-32">
        {/* Left: steps */}
        <div className="flex flex-col justify-center">
          <Reveal>
            <p className="eyebrow">The ritual</p>
          </Reveal>
          <RevealHeading
            className="font-display mt-4 text-4xl font-normal leading-[1.03] text-noir md:text-6xl"
            lines={[
              "Three steps to",
              <em key="g" className="italic text-champagne">
                glass skin.
              </em>,
            ]}
            delay={0.05}
          />
          <Reveal delay={0.15}>
            <p className="mt-5 max-w-[42ch] text-[0.95rem] leading-relaxed text-stone">
              Designed to layer in minutes. Each formula does its part, then
              steps aside for the next.
            </p>
          </Reveal>

          <div className="mt-12 flex flex-col">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <Link
                  href={`/product/${s.slug}`}
                  className="group flex items-start gap-6 border-t border-noir/10 py-7 transition-colors last:border-b hover:bg-porcelain/60"
                >
                  <span className="font-display text-2xl text-champagne transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1">
                    {s.n}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl text-noir">
                      {s.name}
                    </h3>
                    <p className="mt-0.5 text-[0.7rem] uppercase tracking-[0.18em] text-stone-soft transition-colors group-hover:text-champagne">
                      {s.product}
                    </p>
                    <p className="mt-2 max-w-[44ch] text-sm leading-relaxed text-stone">
                      {s.copy}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={20}
                    strokeWidth={1.25}
                    className="mt-1 shrink-0 text-stone-soft opacity-0 -translate-x-1 translate-y-1 transition-[opacity,transform,color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-champagne group-hover:opacity-100"
                  />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Right: image */}
        <Reveal delay={0.1}>
          <Parallax
            className="relative aspect-[4/5] w-full bg-porcelain-dark"
            amount={8}
          >
            <Image
              src="/images/editorial-ritual.png"
              alt="A model pressing Richy Risk Glaze Serum into dewy skin"
              fill
              loading="eager"
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover"
            />
          </Parallax>
        </Reveal>
      </div>
    </section>
  );
}
