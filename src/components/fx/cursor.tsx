"use client";

import { useEffect } from "react";

/**
 * Product cursor — active ONLY over elements tagged `data-cursor` (the
 * product cards and the PDP gallery). A soft disc follows the pointer and
 * shows the action label ("View" / "Zoom"); the native cursor is hidden only
 * while over those elements. Everywhere else the normal cursor is untouched.
 * Desktop + fine-pointer only, and it never paints until the pointer is
 * actually over a product, so headless captures / touch / reduced-motion
 * never see it.
 */
export function Cursor() {
  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!fine || reduce) return;

    const disc = document.createElement("div");
    disc.className = "view-cursor";
    const label = document.createElement("span");
    label.className = "view-cursor__label";
    disc.appendChild(label);
    document.body.appendChild(disc);

    const targetPos = { x: -200, y: -200 };
    const cur = { x: -200, y: -200 };
    let active = false;
    let frame = 0;

    const onMove = (e: MouseEvent) => {
      targetPos.x = e.clientX;
      targetPos.y = e.clientY;
      const hit = (e.target as Element | null)?.closest<HTMLElement>(
        "[data-cursor]"
      );
      const next = !!hit;
      if (next) {
        label.textContent = hit!.getAttribute("data-cursor-label") || "View";
      }
      if (next !== active) {
        active = next;
        if (active) {
          // Snap to the pointer on entry so the disc doesn't fly across screen.
          cur.x = e.clientX;
          cur.y = e.clientY;
        }
        disc.classList.toggle("is-active", active);
      }
    };

    const raf = () => {
      cur.x += (targetPos.x - cur.x) * 0.2;
      cur.y += (targetPos.y - cur.y) * 0.2;
      disc.style.transform = `translate3d(${cur.x}px, ${cur.y}px, 0)`;
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    window.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMove);
      disc.remove();
    };
  }, []);

  return null;
}
