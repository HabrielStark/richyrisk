"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Product } from "@/lib/products";
import { ProductCard } from "@/components/product/product-card";

/**
 * Free horizontal drag-to-scroll rail — grab anywhere and pull left/right, it
 * follows 1:1 and glides to rest with inertia (no card-by-card snapping). The
 * browser can never grab or select an image while you drag. Touch uses native
 * scrolling; arrows page by ~one viewport.
 */
export function ProductCarousel({ products }: { products: Product[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateEdges = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  }, []);

  useEffect(() => {
    updateEdges();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateEdges, { passive: true });
    window.addEventListener("resize", updateEdges);
    return () => {
      el.removeEventListener("scroll", updateEdges);
      window.removeEventListener("resize", updateEdges);
    };
  }, [updateEdges]);

  const scrollByCards = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  // Free drag + inertia (desktop mouse). Touch falls back to native scroll.
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let down = false;
    let dragging = false;
    let startX = 0;
    let startLeft = 0;
    let lastX = 0;
    let lastT = 0;
    let vx = 0; // px per ms
    let raf = 0;

    const stopMomentum = () => {
      if (raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    };

    const momentum = () => {
      vx *= 0.93; // friction
      el.scrollLeft -= vx * 16;
      if (Math.abs(vx) > 0.015) {
        raf = requestAnimationFrame(momentum);
      } else {
        raf = 0;
      }
    };

    const onDown = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      stopMomentum();
      down = true;
      dragging = false;
      startX = e.clientX;
      lastX = e.clientX;
      lastT = e.timeStamp;
      startLeft = el.scrollLeft;
      vx = 0;
    };

    const onMove = (e: PointerEvent) => {
      if (!down) return;
      const dx = e.clientX - startX;
      if (!dragging) {
        if (Math.abs(dx) < 5) return;
        dragging = true;
        el.classList.add("dragging");
        el.setPointerCapture?.(e.pointerId);
      }
      e.preventDefault();
      const dt = e.timeStamp - lastT || 16;
      vx = (e.clientX - lastX) / dt;
      lastX = e.clientX;
      lastT = e.timeStamp;
      el.scrollLeft = startLeft - dx;
    };

    const onUp = (e: PointerEvent) => {
      if (!down) return;
      down = false;
      if (!dragging) return;
      el.releasePointerCapture?.(e.pointerId);
      stopMomentum();
      if (Math.abs(vx) > 0.02) raf = requestAnimationFrame(momentum);
      // Swallow the click that fires right after a drag so a grabbed card
      // never navigates by accident.
      const kill = (ev: MouseEvent) => {
        ev.preventDefault();
        ev.stopPropagation();
      };
      window.addEventListener("click", kill, { capture: true, once: true });
      window.setTimeout(() => {
        window.removeEventListener("click", kill, true);
        el.classList.remove("dragging");
      }, 0);
    };

    // The browser must never start a native image drag inside the rail.
    const noDrag = (e: Event) => e.preventDefault();

    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointermove", onMove, { passive: false });
    el.addEventListener("pointerup", onUp);
    el.addEventListener("pointercancel", onUp);
    el.addEventListener("dragstart", noDrag);

    return () => {
      stopMomentum();
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerup", onUp);
      el.removeEventListener("pointercancel", onUp);
      el.removeEventListener("dragstart", noDrag);
    };
  }, []);

  return (
    <div className="relative">
      <div
        ref={trackRef}
        data-lenis-prevent
        className="no-scrollbar flex cursor-grab select-none gap-5 overflow-x-auto overscroll-x-contain pb-2 [touch-action:pan-x] active:cursor-grabbing md:gap-6"
        style={{ scrollbarWidth: "none" }}
      >
        {products.map((p, i) => (
          <div
            key={p.slug}
            className="w-[72%] shrink-0 sm:w-[44%] md:w-[31%] lg:w-[23.5%]"
          >
            <ProductCard product={p} index={i} />
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="mt-8 flex items-center gap-3">
        <button
          onClick={() => scrollByCards(-1)}
          disabled={!canPrev}
          aria-label="Previous products"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-noir/25 text-noir transition-all duration-300 hover:border-noir hover:bg-noir hover:text-porcelain disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-noir"
        >
          <ArrowLeft size={17} strokeWidth={1.5} />
        </button>
        <button
          onClick={() => scrollByCards(1)}
          disabled={!canNext}
          aria-label="Next products"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-noir/25 text-noir transition-all duration-300 hover:border-noir hover:bg-noir hover:text-porcelain disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-noir"
        >
          <ArrowRight size={17} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}
