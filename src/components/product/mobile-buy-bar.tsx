"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { Product } from "@/lib/products";
import { useCart } from "@/components/cart/cart-provider";
import { formatPrice } from "@/lib/utils";

/**
 * Mobile-only sticky purchase bar. Slides up once the in-page Add to bag has
 * scrolled away, so the buy action is always one tap away on small screens.
 */
export function MobileBuyBar({ product }: { product: Product }) {
  const { add } = useCart();
  const reduce = useReducedMotion();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={reduce ? { opacity: 0 } : { y: "110%" }}
          animate={reduce ? { opacity: 1 } : { y: 0 }}
          exit={reduce ? { opacity: 0 } : { y: "110%" }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-0 bottom-0 z-[65] border-t border-noir/10 bg-porcelain/95 backdrop-blur-md md:hidden"
          style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        >
          <div className="flex items-center gap-4 px-5 py-3">
            <div className="min-w-0 flex-1">
              <p className="truncate font-display text-lg leading-tight text-noir">
                {product.name}
              </p>
              <p className="text-xs tracking-wide text-stone">
                {formatPrice(product.price)}
                {product.shade ? ` · ${product.shade}` : ""}
              </p>
            </div>
            <button
              onClick={() =>
                add({
                  slug: product.slug,
                  name: product.name,
                  price: product.price,
                  image: product.image,
                  shade: product.shade,
                })
              }
              className="btn-sheen shrink-0 rounded-[2px] bg-noir px-7 py-3.5 text-[0.7rem] uppercase tracking-[0.2em] text-porcelain transition-colors active:scale-[0.97]"
            >
              Add to bag
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
