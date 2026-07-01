import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProduct, products } from "@/lib/products";
import { AddToBag } from "@/components/product/add-to-bag";
import { MobileBuyBar } from "@/components/product/mobile-buy-bar";
import { ProductAccordion } from "@/components/product/product-accordion";
import { ProductCarousel } from "@/components/product/product-carousel";
import { ProductGallery } from "@/components/product/product-gallery";
import { Reveal } from "@/components/reveal";
import { Stars } from "@/components/ui/stars";
import { formatPrice } from "@/lib/utils";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Not found" };
  return {
    title: product.name,
    description: product.description.slice(0, 155),
    openGraph: { images: [product.image] },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = products.filter((p) => p.slug !== slug).slice(0, 5);

  return (
    <div className="bg-porcelain pt-24 md:pt-28">
      <div className="mx-auto max-w-[1500px] px-6 md:px-8">
        <nav className="py-6 text-[0.7rem] uppercase tracking-[0.16em] text-stone">
          <Link href="/shop" className="hover:text-noir">
            Shop
          </Link>
          <span className="mx-2">/</span>
          <span className="text-noir">{product.name}</span>
        </nav>

        <div className="grid gap-10 pb-10 md:grid-cols-2 md:gap-16">
          {/* Image */}
          <ProductGallery
            images={[product.image, product.hoverImage].filter(
              (s): s is string => Boolean(s)
            )}
            alt={product.name}
          />

          {/* Detail */}
          <div className="flex flex-col py-2 md:py-6">
            <Reveal>
              {(product.bestseller || product.isNew) && (
                <p className="eyebrow text-champagne">
                  {product.isNew ? "New" : "Bestseller"}
                </p>
              )}
              <h1 className="font-display mt-3 text-5xl font-normal leading-[1] text-noir md:text-6xl">
                {product.name}
              </h1>
              <p className="mt-3 text-sm uppercase tracking-[0.16em] text-stone">
                {product.tagline}
                {product.shade ? ` · ${product.shade}` : ""}
              </p>
              {product.rating && (
                <Stars
                  rating={product.rating}
                  reviews={product.reviews}
                  size={15}
                  className="mt-4"
                />
              )}
              <p className="font-display mt-5 text-3xl text-ink">
                {formatPrice(product.price)}
              </p>

              <p className="mt-7 max-w-[52ch] text-[0.95rem] leading-relaxed text-ink/80">
                {product.description}
              </p>

              <ul className="mt-7 flex flex-col gap-2.5">
                {product.benefits.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 text-sm text-ink"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-champagne" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-9" id="buy-anchor">
                <AddToBag product={product} />
              </div>

              <p className="mt-4 text-[0.72rem] text-stone">
                {product.size} · Complimentary shipping over $75
              </p>

              <div className="mt-10">
                <ProductAccordion product={product} />
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Related */}
      <section id="pairs" className="border-t border-noir/10">
        <div className="mx-auto max-w-[1500px] px-6 py-20 md:px-8 md:py-28">
          <Reveal className="mb-12">
            <p className="eyebrow">Complete the ritual</p>
            <h2 className="font-display mt-4 text-4xl font-normal text-noir md:text-5xl">
              Pairs beautifully with
            </h2>
          </Reveal>
          <Reveal>
            <ProductCarousel products={related} />
          </Reveal>
        </div>
      </section>

      <MobileBuyBar product={product} />
    </div>
  );
}
