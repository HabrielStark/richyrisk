import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { RevealHeading } from "@/components/reveal-heading";
import { Parallax } from "@/components/parallax";
import { Button } from "@/components/ui/button";
import { Stars } from "@/components/ui/stars";

export function EditorialCampaign() {
  return (
    <section id="campaign" className="border-t border-noir/10 bg-porcelain">
      <div className="mx-auto grid max-w-[1500px] items-stretch gap-0 md:grid-cols-2">
        {/* Image */}
        <Parallax
          className="relative aspect-[4/5] w-full bg-porcelain-dark md:aspect-auto md:min-h-[88vh]"
          amount={7}
        >
          <Image
            src="/images/editorial-model.png"
            alt="A model holding the Richy Risk Glaze Serum against sun-warmed skin"
            fill
            loading="eager"
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </Parallax>

        {/* Copy */}
        <div className="flex flex-col justify-center px-6 py-16 md:px-14 md:py-24 lg:px-20">
          <Reveal>
            <p className="eyebrow">The campaign</p>
          </Reveal>
          <RevealHeading
            className="font-display mt-5 text-4xl font-normal leading-[0.98] text-noir md:text-6xl lg:text-[4.25rem]"
            lines={[
              "A glow that",
              "looks like",
              <em key="y" className="italic text-champagne">
                you.
              </em>,
            ]}
            delay={0.05}
          />
          <Reveal delay={0.2}>
            <p className="mt-7 max-w-[44ch] text-[0.95rem] leading-relaxed text-stone md:text-base">
              Not a filter, not a finish you scrub off at night. Richy Risk is
              built to disappear into your skin and leave only the radiance
              behind. Worn bare, worn proud, worn every single day.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-6">
              <Button asChild variant="primary" size="lg">
                <Link href="/shop">Shop the look</Link>
              </Button>
              <div>
                <Stars rating={4.9} />
                <p className="mt-1.5 text-[0.72rem] tracking-wide text-stone">
                  Loved by 40,000+ people
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
