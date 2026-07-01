"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

/**
 * Global smooth scroll. Owns a single Lenis instance and:
 *  - resets scroll to the top on every route change (prevents the "thrown
 *    mid-page" jump that happens when Lenis keeps its old offset);
 *  - intercepts same-page hash links and eases to the target instead of the
 *    hard native jump;
 *  - respects prefers-reduced-motion (no Lenis at all).
 */
export function SmoothScroll() {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) return;

    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 1,
      touchMultiplier: 1.6,
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    // Smooth in-page anchor scrolling
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const link = target?.closest<HTMLAnchorElement>('a[href*="#"]');
      if (!link) return;
      const url = new URL(link.href, window.location.href);
      if (url.pathname !== window.location.pathname) return; // different page
      const id = url.hash.slice(1);
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el, { offset: -96, duration: 1.1 });
      history.pushState(null, "", url.hash);
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("click", onClick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Reset to top on route change so a new page never starts scrolled, and
  // recompute Lenis dimensions once the new route has laid out — otherwise
  // Lenis can clamp scrolling using the previous (shorter) page height, which
  // makes long pages feel "stuck" after the last fold.
  useEffect(() => {
    const lenis = lenisRef.current;
    if (!window.location.hash) {
      if (lenis) lenis.scrollTo(0, { immediate: true });
      else window.scrollTo(0, 0);
    }
    const timers = [120, 400, 900].map((ms) =>
      setTimeout(() => lenisRef.current?.resize(), ms)
    );
    return () => timers.forEach(clearTimeout);
  }, [pathname]);

  return null;
}
