"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * Product gallery: a main 4:5 frame that crossfades between views, with a row
 * of thumbnails. Used to pair the clean product shot with its contextual
 * scene, matching the card hover language across the site.
 */
export function ProductGallery({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [active, setActive] = useState(0);
  const views = images.filter(Boolean);

  return (
    <div className="md:sticky md:top-28 md:self-start">
      <div
        className="group relative aspect-[4/5] overflow-hidden bg-porcelain-deep"
        data-cursor="view"
        data-cursor-label="Zoom"
      >
        {views.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={i === 0 ? alt : ""}
            aria-hidden={i !== 0}
            fill
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "auto"}
            sizes="(max-width: 768px) 100vw, 50vw"
            className={`object-cover transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04] ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="pointer-events-none absolute inset-4 border border-noir/0 transition-colors duration-700 group-hover:border-noir/10" />
      </div>

      {views.length > 1 && (
        <div className="mt-3 flex gap-3">
          {views.map((src, i) => (
            <button
              key={src}
              onClick={() => setActive(i)}
              aria-label={`View ${i + 1}`}
              className={`relative aspect-square w-[4.5rem] overflow-hidden bg-porcelain-deep transition-all duration-300 ${
                i === active
                  ? "opacity-100 ring-1 ring-champagne ring-offset-2 ring-offset-porcelain"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={src}
                alt=""
                aria-hidden
                fill
                sizes="80px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
