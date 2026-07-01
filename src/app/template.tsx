"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * Per-navigation enter transition. `template.tsx` re-mounts on every route
 * change, so this gives each page a calm fade-and-rise instead of a hard cut.
 * Opacity-led to avoid leaving a lingering transform on the page wrapper.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  if (reduce) return <>{children}</>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
