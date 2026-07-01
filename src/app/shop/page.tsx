import type { Metadata } from "next";
import { products } from "@/lib/products";
import { CollectionView } from "@/components/sections/collection-view";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "The full Richy Risk collection. Peptide serums, restorative crèmes, lip glaze and cream-to-skin blush, composed to layer into one quiet, lasting glow.",
};

export default function ShopPage() {
  return (
    <CollectionView
      eyebrow="Skin + color"
      titleLines={[
        "The full",
        <em key="c" className="italic text-champagne-light">
          collection.
        </em>,
      ]}
      intro="Skin and color, composed to layer into one quiet, lasting glow. A small, considered range, each piece held to a single standard, nothing extra, nothing loud."
      heroImage="/images/col-skin-hero.png"
      heroAlt="A model with luminous glass skin dissolving into abstract golden serum"
      products={products}
      editorial={{
        image: "/images/col-color-editorial.png",
        alt: "A model sweeping cream blush onto a warm, radiant cheek",
        eyebrow: "Worn your way",
        titleLines: [
          "A glow that",
          <em key="y" className="italic text-champagne">
            looks like you.
          </em>,
        ],
        copy: "Skincare that melts in and color that reads like you, after a long walk in good light. Built to disappear into the skin and leave only the radiance behind.",
      }}
      cross={{ label: "The journal", href: "/futures", sub: "Go deeper" }}
    />
  );
}
