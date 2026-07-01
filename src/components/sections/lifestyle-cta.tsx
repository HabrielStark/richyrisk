import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { RevealHeading } from "@/components/reveal-heading";

export function LifestyleCta() {
  return (
    <section id="start" className="relative isolate overflow-hidden bg-noir text-porcelain">
      {/* Full-bleed cinematic background */}
      <div className="absolute inset-0">
        <Image
          src="/images/lifestyle-cta.png"
          alt="A model with luminous, sun-warmed glass skin at rest"
          fill
          loading="lazy"
          sizes="100vw"
          className="object-cover object-[72%_center] md:object-[68%_center]"
        />
        {/* scrims: darker on the left where the copy sits */}
        <div className="absolute inset-0 bg-gradient-to-r from-noir/90 via-noir/55 to-noir/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-noir/70 via-transparent to-noir/25" />
      </div>

      <div className="relative mx-auto flex min-h-[78vh] max-w-[1500px] flex-col justify-center px-6 py-24 md:min-h-[86vh] md:px-8 md:py-32">
        <div className="max-w-xl">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-champagne-light/70" />
              <p className="eyebrow text-porcelain/75">Begin the ritual</p>
            </div>
          </Reveal>
          <RevealHeading
            className="font-display mt-5 text-5xl font-medium leading-[0.96] tracking-[-0.01em] text-porcelain md:text-7xl lg:text-8xl"
            lines={[
              "Your glow",
              <em key="w" className="italic text-champagne-light">
                is waiting.
              </em>,
            ]}
            delay={0.05}
          />
          <Reveal delay={0.2}>
            <p className="mt-7 max-w-[42ch] text-base leading-relaxed text-porcelain/80 md:text-lg">
              A small, considered ritual that gives back a single, lasting
              radiance. Start where every glow begins.
            </p>
            <div className="mt-9">
              <Button asChild variant="gold" size="lg">
                <Link href="/shop">Shop the collection</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
