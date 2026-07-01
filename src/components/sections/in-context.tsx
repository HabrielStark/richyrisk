import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { RevealHeading } from "@/components/reveal-heading";
import { Parallax } from "@/components/parallax";

export function InContext() {
  return (
    <section id="essentials" className="border-t border-noir/10 bg-porcelain">
      <div className="mx-auto grid max-w-[1500px] items-stretch md:grid-cols-2">
        {/* Image */}
        <Parallax
          className="relative aspect-[4/5] w-full bg-porcelain-dark md:aspect-auto md:min-h-[82vh]"
          amount={6}
        >
          <Image
            src="/images/context-everyday.png"
            alt="A hand slipping the Richy Risk Lip Glaze into a soft leather bag among daily essentials"
            fill
            loading="eager"
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </Parallax>

        {/* Copy */}
        <div className="flex flex-col justify-center px-6 py-16 md:px-14 md:py-24 lg:px-20">
          <Reveal>
            <p className="eyebrow">On the go</p>
          </Reveal>
          <RevealHeading
            className="font-display mt-4 text-4xl font-normal leading-[1.02] text-noir md:text-6xl"
            lines={[
              "Made for your",
              <em key="e" className="italic text-champagne">
                everyday.
              </em>,
            ]}
            delay={0.05}
          />
          <Reveal delay={0.15}>
            <p className="mt-7 max-w-[42ch] text-[0.95rem] leading-relaxed text-stone md:text-base">
              Pared-back essentials that slip into your bag, your bathroom shelf,
              your morning. Nothing precious, everything considered — color and
              care you reach for without thinking.
            </p>
            <Link
              href="/shop"
              className="link-underline mt-8 inline-block text-[0.72rem] uppercase tracking-[0.2em] text-noir"
            >
              Shop the essentials
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
