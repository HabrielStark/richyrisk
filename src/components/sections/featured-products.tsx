import Link from "next/link";
import { products } from "@/lib/products";
import { ProductCarousel } from "@/components/product/product-carousel";
import { Reveal } from "@/components/reveal";
import { RevealHeading } from "@/components/reveal-heading";

export function FeaturedProducts() {
  return (
    <section id="shop" className="mx-auto max-w-[1500px] px-6 py-24 md:px-8 md:py-32">
      <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <Reveal>
            <p className="eyebrow">The essentials</p>
          </Reveal>
          <RevealHeading
            className="font-display mt-4 max-w-[16ch] text-4xl font-normal leading-[1.02] text-noir md:text-6xl"
            lines={["Everything you need,", "nothing you don\u2019t."]}
            delay={0.05}
          />
        </div>
      </div>

      <Reveal>
        <ProductCarousel products={products} />
      </Reveal>

      <div className="mt-12 flex justify-center">
        <Link
          href="/shop"
          className="link-underline text-[0.72rem] uppercase tracking-[0.2em] text-ink"
        >
          View all products
        </Link>
      </div>
    </section>
  );
}
