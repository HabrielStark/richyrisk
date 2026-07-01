import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { RevealHeading } from "@/components/reveal-heading";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About",
  description:
    "The Richy Risk house, a luxury skincare and color brand built on the pursuit of a single, quiet glow.",
};

const principles = [
  {
    title: "Restraint",
    copy: "A small range, formulated until each piece earns its place. We would rather make six things well than sixty things loud.",
  },
  {
    title: "Sensoriality",
    copy: "How a formula feels is not an afterthought. Texture, weight and finish are designed with the same care as the actives.",
  },
  {
    title: "Longevity",
    copy: "Heavyweight glass, refillable by design, made to live on your shelf for years rather than a season.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-porcelain">
      {/* Hero */}
      <section className="relative min-h-[88vh] w-full overflow-hidden">
        <Image
          src="/images/about-founder.png"
          alt="The Richy Risk studio"
          fill
          loading="eager"
          fetchPriority="high"
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-noir/75 via-noir/25 to-noir/30" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_20%_88%,rgba(201,169,120,0.26),transparent_62%)]" />
        <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-[1500px] flex-col justify-end px-6 pb-16 pt-40 text-porcelain md:px-8 md:pb-24">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-champagne/70" />
              <p className="eyebrow text-porcelain/75">The house</p>
            </div>
          </Reveal>
          <RevealHeading
            className="font-display mt-6 max-w-[15ch] text-5xl font-normal leading-[0.98] md:text-8xl"
            lines={[
              "In pursuit of one",
              <em key="g" className="italic text-champagne-light">
                quiet glow.
              </em>,
            ]}
            delay={0.05}
          />
        </div>
      </section>

      {/* Story — image + text, both columns filled */}
      <section className="mx-auto max-w-[1500px] px-6 py-24 md:px-8 md:py-32">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden bg-porcelain-deep">
              <Image
                src="/images/lifestyle-vanity.png"
                alt="The Richy Risk range composed on stone"
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="eyebrow text-champagne">Our story</p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="font-display mt-5 text-3xl font-normal leading-[1.2] text-noir md:text-[2.6rem]">
                Richy Risk began with a simple frustration: luxury beauty that
                looked exquisite and performed like nothing.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mt-8 max-w-[52ch] space-y-5 text-[0.95rem] leading-relaxed text-ink/80">
                <p>
                  We set out to build the opposite. A house where the bottle and
                  the formula are held to the same standard. Where a serum feels
                  like silk and works like a clinic. Where color melts into skin
                  instead of sitting on top of it.
                </p>
                <p>
                  Everything is developed in small batches with dermatological
                  oversight, then refined until it disappears into a single,
                  lasting radiance. Nothing extra. Nothing loud. Just the glow.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.22}>
              <p className="font-display mt-9 text-2xl italic text-noir/70">
                Richy Risk
              </p>
              <p className="mt-1 text-[0.7rem] uppercase tracking-[0.22em] text-stone">
                Founder &amp; creative director
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="relative overflow-hidden border-y border-noir/10 bg-noir text-porcelain">
        <div className="bloom-warm" aria-hidden />
        <div className="relative mx-auto max-w-[1100px] px-6 py-28 text-center md:px-8 md:py-40">
          <Reveal>
            <p className="eyebrow text-champagne-light">The intent</p>
          </Reveal>
          <RevealHeading
            className="font-display mx-auto mt-7 max-w-[20ch] text-balance text-3xl font-normal leading-[1.12] md:text-5xl"
            lines={[
              "Luxury, to us, is restraint you can feel —",
              <em key="b" className="italic text-champagne-light">
                on the skin, and on the shelf.
              </em>,
            ]}
            delay={0.05}
          />
        </div>
      </section>

      {/* Principles */}
      <section
        id="values"
        className="border-b border-noir/10 bg-porcelain-deep/40"
      >
        <div className="mx-auto max-w-[1500px] px-6 py-24 md:px-8 md:py-28">
          <div className="grid gap-x-12 gap-y-14 md:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="group border-t border-noir/15 pt-6">
                  <span className="font-display text-3xl text-champagne">
                    0{i + 1}
                  </span>
                  <h2 className="font-display mt-3 text-3xl text-noir">
                    {p.title}
                  </h2>
                  <p className="mt-3 max-w-[40ch] text-sm leading-relaxed text-stone">
                    {p.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredient ethos */}
      <section
        id="ingredients"
        className="mx-auto max-w-[1500px] px-6 py-24 md:px-8 md:py-32"
      >
        <Reveal className="mx-auto max-w-[42ch] text-center">
          <p className="eyebrow">The standard</p>
          <h2 className="font-display mt-5 text-4xl font-normal leading-[1.05] text-noir md:text-5xl">
            Clean is the floor, not the ceiling.
          </h2>
          <p className="mt-6 text-[0.95rem] leading-relaxed text-stone">
            Vegan, cruelty-free and formulated without the fillers that dull a
            glow. But clean alone is not enough. Every ingredient must also
            earn its place through performance.
          </p>
          <div className="mt-9 flex justify-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/shop">Explore the range</Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
