import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { RevealHeading } from "@/components/reveal-heading";
import { Parallax } from "@/components/parallax";

export const metadata: Metadata = {
  title: "Futures",
  description:
    "Futures is the Richy Risk journal: the making of the house, the science behind the glow, and the rituals we live by.",
};

const featured = {
  image: "/images/editorial-model.png",
  kicker: "The making of",
  title: "How we built a house around one quiet glow",
  excerpt:
    "From a single frustration with luxury that looked exquisite and performed like nothing, to a small range held to one standard. The long version of the Richy Risk story.",
};

const articles = [
  {
    image: "/images/ingredient-macro.png",
    tag: "The science",
    title: "Inside the Glaze: our triple-peptide complex",
    read: "6 min read",
  },
  {
    image: "/images/futures-ritual.png",
    tag: "The ritual",
    title: "How to layer for glass skin in five minutes",
    read: "4 min read",
  },
  {
    image: "/images/col-color-editorial.png",
    tag: "Color",
    title: "Warm color, worn your way",
    read: "3 min read",
  },
  {
    image: "/images/lifestyle-vanity.png",
    tag: "Sustainability",
    title: "The refill ritual, and why our glass is made to keep",
    read: "5 min read",
  },
  {
    image: "/images/ugc-2.png",
    tag: "The community",
    title: "Real skin, real light: the faces of Richy Risk",
    read: "4 min read",
  },
  {
    image: "/images/futures-feeling.png",
    tag: "The feeling",
    title: "On glow as a daily, quiet kind of luxury",
    read: "3 min read",
  },
];

export default function FuturesPage() {
  return (
    <div className="bg-porcelain">
      {/* Header */}
      <header className="mx-auto max-w-[1500px] px-6 pb-10 pt-36 md:px-8 md:pt-44">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-champagne/70" />
            <p className="eyebrow">The journal</p>
          </div>
        </Reveal>
        <RevealHeading
          className="font-display mt-5 max-w-[14ch] text-6xl font-normal leading-[0.92] tracking-[-0.02em] text-noir md:text-8xl"
          lines={[
            "Futures.",
          ]}
          delay={0.05}
        />
        <Reveal delay={0.18}>
          <p className="mt-6 max-w-[52ch] text-[0.95rem] leading-relaxed text-stone md:text-base">
            The making of the house, the science behind the glow, and the
            rituals we live by. A slow read, the way good skin asks for.
          </p>
        </Reveal>
      </header>

      {/* Featured story */}
      <section className="mx-auto max-w-[1500px] px-6 pb-20 md:px-8 md:pb-28">
        <Reveal>
          <Link href="/about" className="group block">
            <div className="grid items-stretch overflow-hidden border border-noir/10 md:grid-cols-2">
              <Parallax
                className="relative aspect-[4/5] w-full bg-porcelain-dark md:aspect-auto md:min-h-[60vh]"
                amount={6}
              >
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  loading="eager"
                  fetchPriority="high"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                />
              </Parallax>
              <div className="flex flex-col justify-center px-6 py-12 md:px-12 lg:px-16">
                <p className="eyebrow text-champagne">{featured.kicker}</p>
                <h2 className="font-display mt-4 text-3xl font-normal leading-[1.05] text-noir md:text-5xl">
                  {featured.title}
                </h2>
                <p className="mt-5 max-w-[46ch] text-[0.95rem] leading-relaxed text-stone">
                  {featured.excerpt}
                </p>
                <span className="link-underline mt-7 inline-block w-fit text-[0.72rem] uppercase tracking-[0.2em] text-ink">
                  Read the story
                </span>
              </div>
            </div>
          </Link>
        </Reveal>
      </section>

      {/* Article grid */}
      <section className="mx-auto max-w-[1500px] border-t border-noir/10 px-6 py-16 md:px-8 md:py-20">
        <div className="grid gap-x-8 gap-y-14 md:grid-cols-3">
          {articles.map((a, i) => (
            <Reveal key={a.title} delay={(i % 3) * 0.07}>
              <Link href="/about" className="group block">
                <div className="lift relative aspect-[3/2] overflow-hidden bg-porcelain-deep">
                  <Image
                    src={a.image}
                    alt={a.title}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-[1.1s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                  />
                </div>
                <p className="eyebrow mt-5 text-stone">{a.tag}</p>
                <h3 className="font-display mt-2 text-2xl font-normal leading-snug text-noir transition-colors duration-300 group-hover:text-champagne">
                  {a.title}
                </h3>
                <p className="mt-2 text-[0.72rem] uppercase tracking-[0.16em] text-stone-soft">
                  {a.read}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
