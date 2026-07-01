"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

const columns = [
  {
    title: "Shop",
    links: [
      { label: "All products", href: "/shop" },
      { label: "Skin", href: "/shop" },
      { label: "Color", href: "/shop" },
      { label: "The Glaze Set", href: "/shop" },
    ],
  },
  {
    title: "House",
    links: [
      { label: "Our story", href: "/about" },
      { label: "Futures", href: "/futures" },
      { label: "Ingredients", href: "/about#ingredients" },
      { label: "Sustainability", href: "/about#values" },
    ],
  },
  {
    title: "Care",
    links: [
      { label: "Account", href: "/account" },
      { label: "Contact", href: "/about" },
      { label: "Shipping & returns", href: "/about" },
      { label: "FAQ", href: "/about" },
    ],
  },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <footer className="relative overflow-hidden bg-noir text-porcelain">
      {/* soft champagne bloom for depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-1/3 left-1/2 h-[60vh] w-[120vw] -translate-x-1/2 opacity-[0.16]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(201,169,120,0.55), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1500px] px-6 md:px-8">
        {/* Newsletter — the editorial opener */}
        <div className="grid gap-12 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-end md:gap-20 md:py-24">
          <div>
            <p className="eyebrow text-champagne-light">Join the house</p>
            <h2 className="font-display mt-5 text-4xl font-medium leading-[0.98] tracking-[-0.01em] text-porcelain md:text-6xl">
              Radiance,
              <br />
              <em className="italic text-champagne-light">in your inbox.</em>
            </h2>
            <p className="mt-6 max-w-[42ch] text-sm leading-relaxed text-porcelain/55">
              First access to new formulas, refills and the occasional ritual.
              No noise — just the glow.
            </p>
          </div>

          <form
            className="w-full"
            onSubmit={(e) => {
              e.preventDefault();
              if (email.includes("@")) setDone(true);
            }}
          >
            {done ? (
              <p className="font-display flex items-center gap-3 text-2xl text-champagne-light">
                <Check size={22} strokeWidth={1.5} />
                Welcome in. Check your inbox.
              </p>
            ) : (
              <>
                <div className="group flex items-center gap-3 border-b border-porcelain/25 pb-3 transition-colors focus-within:border-champagne-light">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                    aria-label="Email address"
                    className="font-display w-full bg-transparent text-xl text-porcelain placeholder:text-porcelain/35 focus:outline-none md:text-2xl"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-porcelain/30 text-porcelain transition-[colors,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-champagne-light hover:bg-champagne-light hover:text-noir group-focus-within:border-champagne-light"
                  >
                    <ArrowRight strokeWidth={1.5} size={19} />
                  </button>
                </div>
                <p className="mt-3 text-[0.68rem] uppercase tracking-[0.18em] text-porcelain/35">
                  By subscribing you agree to our privacy policy.
                </p>
              </>
            )}
          </form>
        </div>

        {/* Link columns + brand blurb */}
        <nav className="grid grid-cols-2 gap-x-8 gap-y-10 border-t border-porcelain/10 py-14 sm:grid-cols-2 md:grid-cols-[1.3fr_repeat(3,0.9fr)] md:gap-x-12">
          <div className="col-span-2 max-w-[34ch] sm:col-span-2 md:col-span-1">
            <p className="font-display text-2xl leading-snug text-porcelain">
              Luxury skin &amp; color, held to a single standard.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-porcelain/45">
              Peptide-rich rituals and cushiony color, made to disappear into
              skin and leave only the glow.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="eyebrow text-porcelain/40">{col.title}</p>
              <ul className="mt-5 flex flex-col gap-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-porcelain/60 transition-colors duration-300 hover:text-champagne-light"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* Oversized signature wordmark */}
        <div className="relative border-t border-porcelain/10 pt-10">
          <h2
            aria-hidden
            className="font-display select-none whitespace-nowrap text-[19vw] font-medium leading-[0.8] tracking-[-0.03em] text-porcelain/95 md:text-[16vw]"
          >
            Richy<span className="text-champagne">·</span>Risk
          </h2>
        </div>

        {/* Legal bar */}
        <div className="flex flex-col items-start justify-between gap-4 border-t border-porcelain/10 py-7 text-[0.7rem] uppercase tracking-[0.16em] text-porcelain/40 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Richy Risk. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-7 gap-y-2">
            <Link href="/about" className="transition-colors hover:text-porcelain">
              Privacy
            </Link>
            <Link href="/about" className="transition-colors hover:text-porcelain">
              Terms
            </Link>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-porcelain"
            >
              Instagram
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-porcelain"
            >
              TikTok
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
