"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import type { Product } from "@/lib/products";
import { useCart } from "@/components/cart/cart-provider";
import { Button } from "@/components/ui/button";

export function AddToBag({ product }: { product: Product }) {
  const { add } = useCart();
  const [qty, setQty] = useState(1);

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
      <div className="flex h-12 items-center border border-noir/25">
        <button
          aria-label="Decrease quantity"
          onClick={() => setQty((q) => Math.max(1, q - 1))}
          className="px-4 text-noir transition-colors hover:text-champagne"
        >
          <Minus size={15} strokeWidth={1.5} />
        </button>
        <span className="min-w-8 text-center text-sm">{qty}</span>
        <button
          aria-label="Increase quantity"
          onClick={() => setQty((q) => q + 1)}
          className="px-4 text-noir transition-colors hover:text-champagne"
        >
          <Plus size={15} strokeWidth={1.5} />
        </button>
      </div>

      <Button
        variant="primary"
        size="lg"
        className="flex-1"
        onClick={() =>
          add(
            {
              slug: product.slug,
              name: product.name,
              price: product.price,
              image: product.image,
              shade: product.shade,
            },
            qty
          )
        }
      >
        Add to bag · ${product.price * qty}
      </Button>
    </div>
  );
}
