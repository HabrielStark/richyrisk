"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

/**
 * Subtle vertical parallax for editorial imagery. The inner layer is rendered
 * taller than its frame and drifts as the section scrolls through the viewport,
 * adding depth without moving layout. Purpose: spatial richness on scroll.
 */
export function Parallax({
  children,
  className,
  amount = 12,
}: {
  children: ReactNode;
  className?: string;
  /** drift distance as a percentage of the overscan */
  amount?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${amount}%`, `${amount}%`]
  );

  return (
    <div ref={ref} className={className} style={{ overflow: "hidden" }}>
      <motion.div
        className="relative h-full w-full"
        style={
          reduce
            ? undefined
            : { y, scale: 1 + amount / 100, willChange: "transform" }
        }
      >
        {children}
      </motion.div>
    </div>
  );
}
