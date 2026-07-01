export type Product = {
  slug: string;
  name: string;
  tagline: string;
  category: "Skin" | "Lips" | "Color" | "Accessory";
  price: number;
  shade?: string;
  image: string;
  hoverImage?: string;
  // Editorial detail copy (original)
  description: string;
  benefits: string[];
  keyIngredients: { name: string; note: string }[];
  howTo: string;
  size: string;
  bestseller?: boolean;
  isNew?: boolean;
  rating?: number;
  reviews?: number;
};

export const products: Product[] = [
  {
    slug: "glaze-serum",
    name: "Glaze Serum",
    tagline: "Peptide glow concentrate",
    category: "Skin",
    price: 58,
    image: "/images/product-glaze-serum.png",
    hoverImage: "/images/ctx-glaze-serum.png",
    description:
      "A weightless peptide concentrate that wraps skin in a luminous, glass-like veil. Built around a triple-peptide complex and marine ferments, it floods the surface with moisture and leaves a lit-from-within finish that holds all day.",
    benefits: [
      "Visibly plumps and smooths within two weeks",
      "Locks in a dewy, glass-skin finish",
      "Lightweight, layers cleanly under makeup",
    ],
    keyIngredients: [
      { name: "Triple Peptide Complex", note: "supports firmness and bounce" },
      { name: "Marine Ferment", note: "deep, lasting hydration" },
      { name: "Niacinamide", note: "evens tone and refines texture" },
    ],
    howTo:
      "Press two to three drops onto clean skin morning and night, before cream. Follow with Barrier Crème to seal.",
    size: "30 ml / 1.0 fl oz",
    bestseller: true,
    rating: 4.9,
    reviews: 2417,
  },
  {
    slug: "barrier-creme",
    name: "Barrier Crème",
    tagline: "Restorative moisture",
    category: "Skin",
    price: 52,
    image: "/images/product-barrier-creme.png",
    hoverImage: "/images/ctx-barrier-creme.png",
    description:
      "A rich yet breathable crème that rebuilds a compromised barrier with ceramides, squalane and a quiet dose of cholesterol. It melts in without weight, leaving skin cushioned, calm and supple by morning.",
    benefits: [
      "Reinforces the moisture barrier overnight",
      "Soothes tightness and visible redness",
      "Cushions without heaviness or shine",
    ],
    keyIngredients: [
      { name: "Ceramide NP", note: "restores barrier integrity" },
      { name: "Squalane", note: "soft, non-greasy nourishment" },
      { name: "Centella", note: "calms and comforts" },
    ],
    howTo:
      "Warm a small amount between fingertips and press over serum, morning and night.",
    size: "50 ml / 1.7 fl oz",
    bestseller: true,
    rating: 4.8,
    reviews: 1863,
  },
  {
    slug: "lip-glaze",
    name: "Lip Glaze",
    tagline: "Tinted lip treatment",
    category: "Lips",
    price: 18,
    shade: "Bisou",
    image: "/images/product-lip-glaze.png",
    hoverImage: "/images/ctx-lip-glaze.png",
    description:
      "A cushiony lip treatment with a sheer wash of warm nude. Peptides and shea soften and condition while a non-sticky gloss leaves lips glassy, full and quietly flushed.",
    benefits: [
      "Sheer, buildable nude tint",
      "Conditions with peptides and shea",
      "Glassy, never sticky",
    ],
    keyIngredients: [
      { name: "Peptide Blend", note: "smooths and conditions" },
      { name: "Shea Butter", note: "lasting softness" },
      { name: "Vitamin E", note: "antioxidant comfort" },
    ],
    howTo: "Glide over bare or made-up lips. Reapply as desired.",
    size: "10 ml / 0.35 fl oz",
    isNew: true,
    rating: 4.9,
    reviews: 1290,
  },
  {
    slug: "pocket-blush",
    name: "Pocket Blush",
    tagline: "Cream-to-skin flush",
    category: "Color",
    price: 24,
    shade: "Fraise",
    image: "/images/product-pocket-blush.png",
    hoverImage: "/images/ctx-pocket-blush.png",
    description:
      "A creamy blush that melts into skin for a soft, lived-in flush. Buildable from a whisper to a statement, it wears like a second skin and finishes with a natural, dewy radiance.",
    benefits: [
      "Cream-to-skin, blends with a fingertip",
      "Buildable, natural flush",
      "Dewy finish that lasts",
    ],
    keyIngredients: [
      { name: "Jojoba Esters", note: "slip and blendability" },
      { name: "Vitamin E", note: "skin comfort" },
    ],
    howTo: "Tap onto the apples of cheeks and blend upward with fingertips.",
    size: "5 g / 0.17 oz",
    isNew: true,
    rating: 4.7,
    reviews: 812,
  },
  {
    slug: "glaze-milk",
    name: "Glaze Milk",
    tagline: "Hydrating essence",
    category: "Skin",
    price: 42,
    image: "/images/product-glaze-milk.png",
    hoverImage: "/images/ctx-glaze-milk.png",
    description:
      "A pearly hydrating essence that preps skin to drink in everything that follows. Polyglutamic acid and oat hold water at the surface while leaving a soft, satin glow.",
    benefits: [
      "Preps and softens before serum",
      "Surface-level water reservoir",
      "Satin, non-tacky finish",
    ],
    keyIngredients: [
      { name: "Polyglutamic Acid", note: "holds moisture at the surface" },
      { name: "Oat Extract", note: "soothes and softens" },
    ],
    howTo: "Press a pump into skin after cleansing, before serum.",
    size: "150 ml / 5.0 fl oz",
    rating: 4.8,
    reviews: 1045,
  },
  {
    slug: "cleansing-balm",
    name: "Cleansing Balm",
    tagline: "Melting first cleanse",
    category: "Skin",
    price: 38,
    image: "/images/product-cleanser-balm.png",
    hoverImage: "/images/ctx-cleansing-balm.png",
    description:
      "A silky balm that melts into oil to dissolve makeup, sunscreen and the day, then rinses clean without a trace of tightness. Skin is left soft, calm and ready.",
    benefits: [
      "Dissolves makeup and SPF effortlessly",
      "Rinses clean, never stripping",
      "Leaves skin soft and calm",
    ],
    keyIngredients: [
      { name: "Sunflower Seed Oil", note: "gentle dissolving" },
      { name: "Bisabolol", note: "calms the skin" },
    ],
    howTo:
      "Massage a small scoop over dry skin, add water to emulsify, then rinse.",
    size: "100 ml / 3.4 fl oz",
    rating: 4.8,
    reviews: 1378,
  },
  {
    slug: "eye-gloss",
    name: "Eye Gloss",
    tagline: "Peptide eye concentrate",
    category: "Skin",
    price: 44,
    image: "/images/product-eye-gloss.png",
    hoverImage: "/images/ctx-eye-gloss.png",
    description:
      "A cooling, weightless gloss for the eye area that de-puffs on contact and leaves a soft-focus glow. Caffeine and peptides firm and brighten while a sheer pearl finish catches the light, awake in an instant.",
    benefits: [
      "Visibly de-puffs and brightens",
      "Smooths the look of fine lines",
      "Pearl finish that wears under concealer",
    ],
    keyIngredients: [
      { name: "Caffeine", note: "de-puffs and energizes" },
      { name: "Triple Peptide Complex", note: "firms the eye area over time" },
      { name: "Hyaluronic Acid", note: "smooths and plumps" },
    ],
    howTo:
      "Pat a small amount around the orbital bone morning and night. Layer under concealer for a lit finish.",
    size: "15 ml / 0.5 fl oz",
    isNew: true,
    rating: 4.8,
    reviews: 642,
  },
  {
    slug: "dew-mist",
    name: "Dew Mist",
    tagline: "Bi-phase glow mist",
    category: "Skin",
    price: 36,
    image: "/images/product-dew-mist.png",
    hoverImage: "/images/ctx-dew-mist.png",
    description:
      "A bi-phase mist you shake to merge water and oil, then breathe over skin for an instant veil of dew. It sets makeup, revives midday and leaves a lit, never-greasy finish.",
    benefits: [
      "Instant hydration and glow",
      "Sets and revives makeup",
      "Fine, even bi-phase mist",
    ],
    keyIngredients: [
      { name: "Squalane", note: "weightless oil dew" },
      { name: "Polyglutamic Acid", note: "holds water at the surface" },
      { name: "Rose Water", note: "softens and refreshes" },
    ],
    howTo:
      "Shake well, hold a hand's length away and mist over bare skin or makeup whenever skin needs a lift.",
    size: "100 ml / 3.4 fl oz",
    rating: 4.7,
    reviews: 938,
  },
  {
    slug: "glow-mask",
    name: "Glow Mask",
    tagline: "Overnight recovery mask",
    category: "Skin",
    price: 48,
    image: "/images/product-glow-mask.png",
    hoverImage: "/images/ctx-glow-mask.png",
    description:
      "A whipped overnight mask that floods tired skin with moisture and seals it in while you sleep. You wake to a plumped, rested, glass-like surface — the eight-hour facial.",
    benefits: [
      "Plumps and rests skin overnight",
      "Seals in moisture without heaviness",
      "Wake to a glass-skin finish",
    ],
    keyIngredients: [
      { name: "Marine Ferment", note: "deep overnight hydration" },
      { name: "Ceramide NP", note: "seals the barrier" },
      { name: "Niacinamide", note: "evens tone by morning" },
    ],
    howTo:
      "As the last step at night, smooth a generous layer over skin two to three times a week. Press in the rest come morning.",
    size: "60 ml / 2.0 fl oz",
    isNew: true,
    rating: 4.9,
    reviews: 1106,
  },
  {
    slug: "sun-veil",
    name: "Sun Veil",
    tagline: "Weightless SPF 50",
    category: "Skin",
    price: 42,
    image: "/images/product-sun-veil.png",
    hoverImage: "/images/ctx-sun-veil.png",
    description:
      "An invisible, mineral-forward SPF 50 that disappears into every skin tone with no white cast and no grease. A satin glow finish sits beautifully under makeup, so daily protection feels like skincare.",
    benefits: [
      "Broad-spectrum SPF 50, no white cast",
      "Satin glow under makeup",
      "Lightweight, every-skin-tone finish",
    ],
    keyIngredients: [
      { name: "Encapsulated Zinc", note: "broad-spectrum defense" },
      { name: "Squalane", note: "weightless slip" },
      { name: "Vitamin E", note: "antioxidant comfort" },
    ],
    howTo:
      "As the final morning step, smooth a generous layer over face and neck. Reapply through the day.",
    size: "50 ml / 1.7 fl oz",
    bestseller: true,
    rating: 4.8,
    reviews: 1532,
  },
  {
    slug: "lip-contour",
    name: "Lip Contour",
    tagline: "Precision lip pencil",
    category: "Lips",
    price: 20,
    shade: "Nuede",
    image: "/images/product-lip-contour.png",
    hoverImage: "/images/ctx-lip-contour.png",
    description:
      "A creamy, fade-proof pencil that defines and softly fills in a single glide. The warm nude shade blurs the lip line and grips color, so your glaze or satin stays put for hours.",
    benefits: [
      "Defines and fills in one glide",
      "Creamy, never dragging",
      "Locks lip color in place",
    ],
    keyIngredients: [
      { name: "Jojoba Wax", note: "smooth, creamy glide" },
      { name: "Vitamin E", note: "conditions as it wears" },
    ],
    howTo:
      "Trace the natural lip line, then fill in fully before lip color to extend wear.",
    size: "0.3 g / 0.01 oz",
    isNew: true,
    rating: 4.7,
    reviews: 488,
  },
  {
    slug: "satin-lip",
    name: "Satin Lip",
    tagline: "Cushion satin lipstick",
    category: "Lips",
    price: 28,
    shade: "Brique",
    image: "/images/product-satin-lip.png",
    hoverImage: "/images/ctx-satin-lip.png",
    description:
      "A cushiony bullet that wraps lips in saturated satin color and stays comfortable for hours. The warm brick rose flatters every undertone — full coverage that still feels like nothing.",
    benefits: [
      "Saturated, satin color payoff",
      "Cushiony, comfortable wear",
      "Flattering warm brick rose",
    ],
    keyIngredients: [
      { name: "Shea Butter", note: "cushiony comfort" },
      { name: "Peptide Blend", note: "smooths and conditions" },
      { name: "Vitamin E", note: "antioxidant softness" },
    ],
    howTo:
      "Glide directly onto lips, or line with Lip Contour first for a fuller shape.",
    size: "3.5 g / 0.12 oz",
    rating: 4.8,
    reviews: 743,
  },
  {
    slug: "brow-sculpt",
    name: "Brow Sculpt",
    tagline: "Tinted brow gel",
    category: "Color",
    price: 22,
    shade: "Taupe",
    image: "/images/product-brow-sculpt.png",
    hoverImage: "/images/ctx-brow-sculpt.png",
    description:
      "A flexible tinted gel that brushes brows up and holds them there — soft, full and never crunchy. Fine fibers add believable fullness while the sheer taupe tint quietly frames the face.",
    benefits: [
      "Holds brows up all day",
      "Adds soft, believable fullness",
      "Sheer tint, never crunchy",
    ],
    keyIngredients: [
      { name: "Micro Fibers", note: "adds natural fullness" },
      { name: "Provitamin B5", note: "conditions the hair" },
    ],
    howTo:
      "Brush up and through brows in short strokes, working from the inner corner outward.",
    size: "5 ml / 0.17 fl oz",
    rating: 4.6,
    reviews: 391,
  },
  {
    slug: "liquid-glow",
    name: "Liquid Glow",
    tagline: "Liquid highlighter drops",
    category: "Color",
    price: 30,
    shade: "Champagne",
    image: "/images/product-liquid-glow.png",
    hoverImage: "/images/ctx-liquid-glow.png",
    description:
      "Concentrated luminizing drops that melt into skin for a wet, lit-from-within sheen — never glittery. Wear alone on the high points or mix into cream and serum to glow head to toe.",
    benefits: [
      "Wet, lit-from-within sheen",
      "Mixes into cream or serum",
      "No glitter, all glow",
    ],
    keyIngredients: [
      { name: "Light-Diffusing Pearls", note: "soft-focus radiance" },
      { name: "Squalane", note: "melts into skin" },
    ],
    howTo:
      "Tap a drop onto cheekbones and brow bones, or blend into moisturizer for an all-over glow.",
    size: "15 ml / 0.5 fl oz",
    isNew: true,
    rating: 4.8,
    reviews: 854,
  },
  {
    slug: "glow-patches",
    name: "Glow Patches",
    tagline: "Hydrogel eye masks",
    category: "Skin",
    price: 32,
    image: "/images/product-glow-patches.png",
    hoverImage: "/images/ctx-glow-patches.png",
    description:
      "Sculpted hydrogel patches that cling to the under-eye and drench it in cooling moisture in fifteen minutes. Peptides and niacinamide leave the area de-puffed, brighter and ready for makeup.",
    benefits: [
      "Cooling, de-puffing in 15 minutes",
      "Brightens the under-eye",
      "Sculpted gel that stays put",
    ],
    keyIngredients: [
      { name: "Niacinamide", note: "brightens and evens" },
      { name: "Peptides", note: "firms the eye area" },
      { name: "Hyaluronic Acid", note: "floods with moisture" },
    ],
    howTo:
      "Press a patch under each eye on clean skin, leave fifteen minutes, then pat in the excess. Use two to three times a week.",
    size: "Box of 30 pairs",
    rating: 4.7,
    reviews: 1267,
  },
  {
    slug: "lacquer-case",
    name: "Lacquer Case",
    tagline: "Lacquered phone case",
    category: "Accessory",
    price: 38,
    image: "/images/product-lacquer-case.png",
    hoverImage: "/images/ctx-lacquer-case.png",
    description:
      "A house accessory in champagne lacquer, finished with the embossed RR monogram and a soft-touch edge. Slim, drop-tested and quietly luxurious — the glow goes everywhere you do.",
    benefits: [
      "Champagne lacquer with RR monogram",
      "Slim, soft-touch, drop-tested",
      "The house, in your pocket",
    ],
    keyIngredients: [
      { name: "Recycled Polycarbonate", note: "durable, lighter footprint" },
      { name: "Soft-Touch Coating", note: "a warm, secure grip" },
    ],
    howTo:
      "Snap onto your phone and wear it like jewelry. Wipe clean with a soft cloth.",
    size: "One size · multiple models",
    isNew: true,
    rating: 4.6,
    reviews: 214,
  },
  {
    slug: "lip-mask",
    name: "Lip Mask",
    tagline: "Overnight lip recovery",
    category: "Lips",
    price: 26,
    image: "/images/product-lip-mask.png",
    hoverImage: "/images/ctx-lip-mask.png",
    description:
      "A cushiony overnight balm-mask that floods lips with moisture while you sleep. Peptides and ceramides rebuild a soft, plumped surface, so you wake to lips that feel new — never waxy, never bare.",
    benefits: [
      "Repairs and plumps overnight",
      "Seals in lasting moisture",
      "Wake to soft, renewed lips",
    ],
    keyIngredients: [
      { name: "Peptide Blend", note: "smooths and conditions" },
      { name: "Ceramide NP", note: "rebuilds the lip barrier" },
      { name: "Shea Butter", note: "cushiony overnight comfort" },
    ],
    howTo:
      "As the last step at night, smooth a generous layer over lips. Reapply through the day whenever lips need a drink.",
    size: "15 ml / 0.5 fl oz",
    isNew: true,
    rating: 4.8,
    reviews: 506,
  },
  {
    slug: "body-glow",
    name: "Body Glow",
    tagline: "Illuminating body serum",
    category: "Skin",
    price: 46,
    image: "/images/product-body-glow.png",
    hoverImage: "/images/ctx-body-glow.png",
    description:
      "A fast-absorbing body serum that wraps skin in a soft, lit-from-within sheen — never greasy, never glittery. Squalane and niacinamide smooth and even tone while a whisper of champagne light catches on shoulders, legs and collarbones.",
    benefits: [
      "Soft, lit-from-within body sheen",
      "Smooths and evens skin tone",
      "Absorbs fast, never greasy",
    ],
    keyIngredients: [
      { name: "Squalane", note: "weightless, lasting softness" },
      { name: "Niacinamide", note: "evens and brightens" },
      { name: "Light-Diffusing Pearls", note: "soft-focus radiance" },
    ],
    howTo:
      "Smooth over clean, dry skin wherever you want a glow. Layer for more light, or mix a drop into body lotion.",
    size: "150 ml / 5.0 fl oz",
    bestseller: true,
    rating: 4.9,
    reviews: 1320,
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export const collections = [
  {
    slug: "the-glow-set",
    name: "The Glaze Set",
    description: "Milk, Serum and Crème. The full glass-skin ritual.",
  },
];
