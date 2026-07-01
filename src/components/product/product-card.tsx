"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Plus, Check } from "lucide-react";
import type { Product } from "@/lib/products";
import { useCart } from "@/components/cart/cart-provider";
import { Stars } from "@/components/ui/stars";
import { formatPrice } from "@/lib/utils";

export function ProductCard({
  product,
  index = 0,
}: {
  product: Product;
  index?: number;
}) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  function handleAdd(e: React.MouseEvent) {
    e.preventDefault();
    add({
      slug: product.slug,
      name: product.name,
      price: product.price,
      image: product.image,
      shade: product.shade,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  }

  return (
    <Link href={`/product/${product.slug}`} className="group block">
      {/* Lift wrapper: does the rise + casts the rounded shadow, but never
          clips. The inner layer owns the rounded clip and is NOT transformed,
          so the mask can't glitch / show hard corners during the hover lift. */}
      <div className="lift rounded-2xl">
        <div
          className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-porcelain-deep"
          data-cursor="view"
          data-cursor-label="View"
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            loading={index < 4 ? "eager" : "lazy"}
            sizes="(max-width: 768px) 50vw, 25vw"
            className="rounded-2xl object-cover transition-[transform,opacity] duration-[1.1s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04] group-hover:opacity-0"
          />

          {/* Contextual scene that fades in on hover (matched to the product) */}
          {product.hoverImage && (
            <Image
              src={product.hoverImage}
              alt=""
              aria-hidden
              fill
              loading="lazy"
              sizes="(max-width: 768px) 50vw, 25vw"
              className="rounded-2xl scale-[1.06] object-cover opacity-0 transition-[transform,opacity] duration-[1.1s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-100 group-hover:opacity-100"
            />
          )}

          {(product.bestseller || product.isNew) && (
            <span className="absolute left-4 top-4 z-10 bg-porcelain/90 px-3 py-1 text-[0.6rem] uppercase tracking-[0.18em] text-noir backdrop-blur-sm">
              {product.isNew ? "New" : "Bestseller"}
            </span>
          )}

          {/* Discover hint */}
          <span className="pointer-events-none absolute bottom-5 left-4 z-10 text-[0.62rem] uppercase tracking-[0.22em] text-porcelain opacity-0 translate-y-2 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:group-hover:translate-y-0 md:group-hover:opacity-100">
            Discover
          </span>

          {/* Quick add */}
          <button
            onClick={handleAdd}
            aria-label={`Add ${product.name} to bag`}
            className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-porcelain text-noir shadow-md transition-[transform,opacity,background-color,color] duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-champagne hover:text-porcelain active:scale-90 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
          >
            {added ? (
              <Check size={18} strokeWidth={1.5} />
            ) : (
              <Plus size={18} strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      <div className="mt-4 flex items-baseline justify-between gap-3">
        <div>
          <h3 className="font-display text-2xl leading-tight text-noir transition-colors duration-300 group-hover:text-champagne">
            {product.name}
          </h3>
          <p className="mt-0.5 text-xs uppercase tracking-[0.14em] text-stone">
            {product.tagline}
          </p>
        </div>
        <span className="shrink-0 text-sm tracking-wide text-ink">
          {formatPrice(product.price)}
        </span>
      </div>
      {product.rating && (
        <Stars
          rating={product.rating}
          reviews={product.reviews}
          className="mt-2"
        />
      )}
    </Link>
  );
}
