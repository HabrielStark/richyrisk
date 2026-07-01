"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { X, Search as SearchIcon } from "lucide-react";
import { products } from "@/lib/products";
import { formatPrice } from "@/lib/utils";

const suggestions = ["Glaze Serum", "Lip Glaze", "Barrier", "Blush", "SPF"];
const ease = [0.16, 1, 0.3, 1] as const;

export function SearchOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [q, setQ] = useState("");
  const [prevOpen, setPrevOpen] = useState(open);
  const inputRef = useRef<HTMLInputElement>(null);

  // Reset the query the moment the overlay opens — done during render
  // (React's recommended pattern) rather than setState inside an effect.
  if (open !== prevOpen) {
    setPrevOpen(open);
    if (open) setQ("");
  }

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 350);
      const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
      window.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
      return () => {
        clearTimeout(t);
        window.removeEventListener("keydown", onKey);
        document.body.style.overflow = "";
      };
    }
  }, [open, onClose]);

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return [];
    return products.filter((p) =>
      [p.name, p.tagline, p.category, p.shade ?? ""]
        .join(" ")
        .toLowerCase()
        .includes(term)
    );
  }, [q]);

  const hasQuery = q.trim().length > 0;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          data-no-drag
          className="fixed inset-0 z-[110] bg-porcelain"
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -24 }}
          transition={{ duration: 0.5, ease }}
        >
          <div className="mx-auto flex h-full max-w-[1100px] flex-col px-6 pt-8 md:px-8">
            <div className="flex items-center justify-between">
              <span className="eyebrow">Search</span>
              <button
                onClick={onClose}
                aria-label="Close search"
                className="text-noir transition-colors hover:text-champagne"
              >
                <X strokeWidth={1.5} size={24} />
              </button>
            </div>

            {/* Input row with animated underline */}
            <div className="relative mt-10">
              <div className="flex items-center gap-4 pb-4">
                <SearchIcon
                  strokeWidth={1.25}
                  size={26}
                  className="text-stone"
                />
                <input
                  ref={inputRef}
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="What are you looking for?"
                  aria-label="Search products"
                  className="font-display w-full bg-transparent text-3xl font-normal text-noir placeholder:text-stone-soft focus:outline-none md:text-5xl"
                />
              </div>
              {/* base hairline */}
              <span className="absolute bottom-0 left-0 h-px w-full bg-noir/20" />
              {/* champagne fill that grows as you type */}
              <motion.span
                className="absolute bottom-0 left-0 h-[2px] origin-left bg-champagne"
                initial={false}
                animate={{ scaleX: hasQuery ? 1 : 0 }}
                transition={{ duration: 0.6, ease }}
                style={{ width: "100%" }}
              />
            </div>

            {/* Live count */}
            <div className="mt-4 h-5">
              <AnimatePresence mode="wait">
                {hasQuery && (
                  <motion.p
                    key={results.length}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.3, ease }}
                    className="text-[0.72rem] uppercase tracking-[0.18em] text-stone"
                  >
                    {results.length}{" "}
                    {results.length === 1 ? "result" : "results"}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {!hasQuery && (
              <div className="mt-6">
                <p className="eyebrow mb-4 text-stone">Popular</p>
                <div className="flex flex-wrap gap-3">
                  {suggestions.map((s, i) => (
                    <motion.button
                      key={s}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.15 + i * 0.05, ease }}
                      onClick={() => setQ(s)}
                      className="border border-noir/25 px-5 py-2 text-[0.72rem] uppercase tracking-[0.18em] text-ink transition-colors hover:border-noir hover:bg-noir hover:text-porcelain"
                    >
                      {s}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-8 flex-1 overflow-y-auto">
              {hasQuery && results.length === 0 && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-stone"
                >
                  No matches for &ldquo;{q}&rdquo;. Try another word.
                </motion.p>
              )}
              <motion.div
                layout
                className="grid grid-cols-2 gap-x-6 gap-y-10 pb-12 md:grid-cols-4"
              >
                <AnimatePresence mode="popLayout">
                  {results.map((p) => (
                    <motion.div
                      key={p.slug}
                      layout
                      initial={{ opacity: 0, y: 16, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.45, ease }}
                    >
                      <Link
                        href={`/product/${p.slug}`}
                        onClick={onClose}
                        className="group block"
                      >
                        <div className="relative aspect-[4/5] overflow-hidden bg-porcelain-deep">
                          <Image
                            src={p.image}
                            alt={p.name}
                            fill
                            sizes="(max-width: 768px) 50vw, 25vw"
                            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                          />
                        </div>
                        <h3 className="font-display mt-3 text-xl text-noir transition-colors group-hover:text-champagne">
                          {p.name}
                        </h3>
                        <p className="text-sm text-stone">
                          {formatPrice(p.price)}
                        </p>
                      </Link>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
