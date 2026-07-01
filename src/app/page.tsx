import fs from "node:fs";
import path from "node:path";
import { Hero } from "@/components/sections/hero";
import { MarqueeBand } from "@/components/sections/marquee";
import { FeaturedProducts } from "@/components/sections/featured-products";
import { EditorialCampaign } from "@/components/sections/editorial-campaign";
import { Ritual } from "@/components/sections/ritual";
import { Ingredient } from "@/components/sections/ingredient";
import { InContext } from "@/components/sections/in-context";
import { Testimonials } from "@/components/sections/testimonials";
import { SocialGrid } from "@/components/sections/social-grid";
import { Promise as BrandPromise } from "@/components/sections/promise";
import { LifestyleCta } from "@/components/sections/lifestyle-cta";

// Detect an optional hero video at build/request time, so the client never
// fires a 404 probing for a file that may not exist.
function getHeroVideoSources() {
  const dir = path.join(process.cwd(), "public", "videos");
  const candidates = [
    { file: "hero.webm", src: "/videos/hero.webm", type: "video/webm" },
    { file: "hero.mp4", src: "/videos/hero.mp4", type: "video/mp4" },
  ];
  try {
    return candidates
      .filter((c) => fs.existsSync(path.join(dir, c.file)))
      .map(({ src, type }) => ({ src, type }));
  } catch {
    return [];
  }
}

export default function Home() {
  const heroVideoSources = getHeroVideoSources();
  return (
    <>
      <Hero videoSources={heroVideoSources} />
      <MarqueeBand />
      <FeaturedProducts />
      <EditorialCampaign />
      <Ritual />
      <Ingredient />
      <InContext />
      <Testimonials />
      <SocialGrid />
      <BrandPromise />
      <LifestyleCta />
    </>
  );
}
