"use client";

import {
  motion,
  useInView,
  useReducedMotion,
  type Variants,
} from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";

const base: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0 },
};

/**
 * Reveal-on-scroll with a safety fallback: if the IntersectionObserver has not
 * fired within `fallbackMs` (e.g. headless capture, slow observers), the
 * content is shown anyway so it can never be left permanently hidden.
 */
function useReveal(amount = 0.2, fallbackMs = 1600) {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, amount });
  const [fallback, setFallback] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setFallback(true), fallbackMs);
    return () => clearTimeout(t);
  }, [fallbackMs]);

  return { ref, shown: inView || fallback };
}

export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "span" | "li" | "section";
}) {
  const reduce = useReducedMotion();
  const { ref, shown } = useReveal();
  const MotionTag = motion[as];

  return (
    <MotionTag
      // @ts-expect-error ref typing across polymorphic motion tags
      ref={ref}
      className={className}
      initial={reduce ? false : "hidden"}
      animate={shown ? "show" : "hidden"}
      variants={base}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}

export function RevealStagger({
  children,
  className,
  stagger = 0.08,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  const reduce = useReducedMotion();
  const { ref, shown } = useReveal();

  return (
    <motion.div
      ref={ref as React.Ref<HTMLDivElement>}
      className={className}
      initial={reduce ? false : "hidden"}
      animate={shown ? "show" : "hidden"}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={base}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
