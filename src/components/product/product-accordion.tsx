"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import type { Product } from "@/lib/products";

export function ProductAccordion({ product }: { product: Product }) {
  const items = [
    {
      value: "ingredients",
      title: "Key ingredients",
      content: (
        <ul className="flex flex-col gap-3">
          {product.keyIngredients.map((ing) => (
            <li key={ing.name} className="text-sm">
              <span className="text-noir">{ing.name}</span>
              <span className="text-stone">, {ing.note}</span>
            </li>
          ))}
        </ul>
      ),
    },
    {
      value: "how",
      title: "How to use",
      content: <p className="text-sm leading-relaxed text-ink/80">{product.howTo}</p>,
    },
    {
      value: "details",
      title: "Details & care",
      content: (
        <p className="text-sm leading-relaxed text-ink/80">
          {product.size}. Vegan and cruelty-free. Housed in refillable glass.
          Store away from direct heat. Patch test before first use.
        </p>
      ),
    },
  ];

  return (
    <Accordion.Root type="single" collapsible className="border-t border-noir/15">
      {items.map((item) => (
        <Accordion.Item
          key={item.value}
          value={item.value}
          className="border-b border-noir/15"
        >
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between py-5 text-left text-[0.8rem] uppercase tracking-[0.16em] text-noir">
              {item.title}
              <Plus
                size={16}
                strokeWidth={1.5}
                className="text-stone transition-transform duration-300 group-data-[state=open]:rotate-45"
              />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden data-[state=closed]:animate-[accordion-up_0.3s_ease] data-[state=open]:animate-[accordion-down_0.3s_ease]">
            <div className="pb-6">{item.content}</div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
