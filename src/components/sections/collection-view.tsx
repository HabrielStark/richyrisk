import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/lib/products";
import { ProductCard } from "@/components/product/product-card";
import { Reveal } from "@/components/reveal";
import { RevealHeading } from "@/components/reveal-heading";
import { Parallax } from "@/components/parallax";
import { Button } from "@/components/ui/button";

export type CollectionViewProps = {
  eyebrow: string;
  titleLines: ReactNode[];
  intro: string;
  heroImage: string;
  heroAlt: string;
  products: Product[];
  editorial: {
    image: string;
    alt: string;
    eyebrow: string;
    titleLines: ReactNode[];
    copy: string;
  };
  cross: { label: string; href: string; sub: string };
};

export function CollectionView({
  eyebrow,
  titleLines,
  intro,
  heroImage,
  heroAlt,
  products,
  editorial,
  cross,
}: CollectionViewProps) {
  return (
    <div className="bg-porcelain">
      {/* Hero — abstraction blended with a real person */}
      <section className="relative min-h-[84vh] w-full overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-[-5%]">
            <Image
              src={heroImage}
              alt={heroAlt}
              fill
              loading="eager"
              fetchPriority="high"
              sizes="100vw"
              className="object-cover object-[78%_center] md:object-center"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-noir/85 via-noir/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-noir/50 via-transparent to-noir/25" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[84vh] max-w-[1500px] flex-col justify-end px-6 pb-20 pt-40 text-porcelain md:px-8 md:pb-28">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-champagne-light/70" />
              <p className="eyebrow text-porcelain/75">{eyebrow}</p>
            </div>
          </Reveal>
          <RevealHeading
            className="font-display mt-5 text-6xl font-medium leading-[0.88] tracking-[-0.02em] text-porcelain md:text-8xl lg:text-[8.5rem]"
            lines={titleLines}
            delay={0.1}
          />
          <Reveal delay={0.28}>
            <p className="mt-7 max-w-[48ch] text-base leading-relaxed text-porcelain/80 md:text-lg">
              {intro}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Products */}
      <section className="mx-auto max-w-[1500px] px-6 py-20 md:px-8 md:py-28">
        <Reveal className="mb-12 flex items-end justify-between gap-6">
          <p className="eyebrow">The collection</p>
          <span className="text-[0.72rem] tracking-[0.18em] text-stone">
            {products.length} {products.length === 1 ? "product" : "products"}
          </span>
        </Reveal>
        <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16">
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.06}>
              <ProductCard product={p} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Editorial — abstraction + person, warmth and desire */}
      <section
        id="editorial"
        className="border-t border-noir/10 bg-porcelain-deep/40"
      >
        <div className="mx-auto grid max-w-[1500px] items-stretch md:grid-cols-2">
          <Parallax
            className="relative aspect-[4/5] w-full bg-porcelain-dark md:aspect-auto md:min-h-[86vh]"
            amount={7}
          >
            <Image
              src={editorial.image}
              alt={editorial.alt}
              fill
              loading="eager"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </Parallax>

          <div className="flex flex-col justify-center px-6 py-16 md:px-14 md:py-24 lg:px-20">
            <Reveal>
              <p className="eyebrow">{editorial.eyebrow}</p>
            </Reveal>
            <RevealHeading
              className="font-display mt-5 text-4xl font-normal leading-[0.98] text-noir md:text-6xl"
              lines={editorial.titleLines}
              delay={0.05}
            />
            <Reveal delay={0.2}>
              <p className="mt-7 max-w-[44ch] text-[0.95rem] leading-relaxed text-stone md:text-base">
                {editorial.copy}
              </p>
              <div className="mt-9">
                <Button asChild variant="primary" size="lg">
                  <Link href="/shop">Shop everything</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Cross-link to the other world */}
      <section className="mx-auto max-w-[1500px] px-6 py-20 md:px-8 md:py-24">
        <Link
          href={cross.href}
          className="group flex items-center justify-between gap-6 border-y border-noir/15 py-10 transition-colors hover:bg-porcelain-deep/40"
        >
          <div>
            <p className="eyebrow">{cross.sub}</p>
            <p className="font-display mt-2 text-4xl font-normal text-noir md:text-6xl">
              {cross.label}
            </p>
          </div>
          <ArrowUpRight
            size={40}
            strokeWidth={1}
            className="shrink-0 text-stone transition-[transform,color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-champagne"
          />
        </Link>
      </section>
    </div>
  );
}
