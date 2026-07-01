"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Masked line reveal for editorial headings. Each line sits in an overflow
 * clip and rises into view, staggered. Mirrors the hero treatment so the
 * scroll language stays consistent. Capture-safe via a mount fallback.
 */
export function RevealHeading({
  lines,
  className,
  lineClassName,
  delay = 0,
}: {
  lines: ReactNode[];
  className?: string;
  lineClassName?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [fallback, setFallback] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setFallback(true), 1500);
    return () => clearTimeout(t);
  }, []);

  const shown = inView || fallback || reduce;

  return (
    <h2 ref={ref} className={className}>
      {lines.map((line, i) => (
        <span
          key={i}
          className={cn("block overflow-hidden pb-[0.14em]", lineClassName)}
        >
          <motion.span
            className="block"
            initial={reduce ? false : { y: "115%" }}
            animate={shown ? { y: 0 } : { y: "115%" }}
            transition={{
              duration: 0.9,
              delay: delay + i * 0.09,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </h2>
  );
}
