import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { RevealHeading } from "@/components/reveal-heading";

const posts = [
  { src: "/images/ugc-1.png", handle: "@sofiaglow" },
  { src: "/images/ugc-2.png", handle: "@mara.lind" },
  { src: "/images/ugc-3.png", handle: "@amara.b" },
  { src: "/images/ugc-4.png", handle: "@jo.caron" },
  { src: "/images/ugc-5.png", handle: "@lena.k" },
  { src: "/images/ugc-6.png", handle: "@noor.aziz" },
];

export function SocialGrid() {
  return (
    <section
      id="community"
      className="mx-auto max-w-[1500px] px-6 pt-24 pb-16 md:px-8 md:pt-28 md:pb-20"
    >
      <div className="mb-10 flex flex-col items-start justify-between gap-5 md:mb-12 md:flex-row md:items-end">
        <div>
          <Reveal>
            <p className="eyebrow">The community</p>
          </Reveal>
          <RevealHeading
            className="font-display mt-4 text-4xl font-normal leading-[1.02] text-noir md:text-6xl"
            lines={[
              <span key="c">
                Richy Risk <em className="italic text-champagne">+ you.</em>
              </span>,
            ]}
            delay={0.05}
          />
          <Reveal delay={0.12}>
            <p className="mt-5 max-w-[40ch] text-sm leading-relaxed text-stone">
              Real skin, real light. Tag us and you might land on the wall —
              the glow looks best when it&rsquo;s worn, not staged.
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.2} className="md:pb-2">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline shrink-0 text-[0.72rem] uppercase tracking-[0.2em] text-ink"
          >
            Follow @richyrisk
          </a>
        </Reveal>
      </div>

      {/* Editorial portrait collage */}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {posts.map((p, i) => (
          <Reveal key={p.handle} delay={(i % 3) * 0.07}>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="lift group relative block aspect-[4/5] w-full overflow-hidden bg-porcelain-deep"
            >
              <Image
                src={p.src}
                alt={`Richy Risk worn by ${p.handle}`}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-noir/55 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="pointer-events-none absolute bottom-4 left-4 flex items-center gap-2 text-[0.72rem] tracking-wide text-porcelain opacity-0 translate-y-2 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 group-hover:opacity-100">
                <span className="h-1 w-1 rounded-full bg-champagne-light" />
                {p.handle}
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
