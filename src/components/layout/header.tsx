"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { ShoppingBag, Menu, X, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Wordmark } from "@/components/ui/wordmark";
import { useCart } from "@/components/cart/cart-provider";
import { CartDrawer } from "@/components/cart/cart-drawer";
import { SearchOverlay } from "@/components/layout/search-overlay";
import { products } from "@/lib/products";

const nav = [
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Futures", href: "/futures" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { count, open } = useCart();
  const pathname = usePathname();

  // Hero overlay only on home; other pages always solid
  const overHero = pathname === "/";

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      setScrolled(y > 40);

      const goingDown = y > lastY;
      const delta = Math.abs(y - lastY);

      // Hide when scrolling down past the hero zone; reveal on any upward
      // intent or near the top. Small deltas are ignored to avoid jitter.
      if (delta > 6) {
        if (goingDown && y > 220) setHidden(true);
        else if (!goingDown) setHidden(false);
      }
      if (y < 120) setHidden(false);

      lastY = y;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [pathname]);

  const solid = scrolled || !overHero || mobileOpen;
  // Never hide while the mobile menu is open
  const isHidden = hidden && !mobileOpen;

  return (
    <>
      {/* Announcement bar */}
      <div className="relative z-[70] bg-noir text-porcelain">
        <div className="mx-auto flex max-w-[1500px] items-center justify-center px-6 py-2.5 text-center text-[0.66rem] uppercase tracking-[0.22em]">
          Complimentary shipping over $75 · Two samples with every order
        </div>
      </div>

      <motion.header
        animate={{ y: isHidden ? "-101%" : "0%" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "sticky top-0 z-[70] transition-colors duration-500",
          solid
            ? "bg-porcelain/90 text-noir backdrop-blur-md border-b border-noir/10"
            : "bg-gradient-to-b from-noir/45 via-noir/20 to-transparent text-porcelain"
        )}
      >
        <div className="mx-auto flex h-16 max-w-[1500px] items-center justify-between px-5 md:px-8 lg:h-[72px]">
          {/* Left: nav (desktop) */}
          <nav className="hidden flex-1 items-center gap-8 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="link-underline text-[0.7rem] uppercase tracking-[0.18em] transition-colors hover:text-champagne"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu trigger */}
          <button
            className="lg:hidden"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
          >
            <Menu strokeWidth={1.5} size={22} />
          </button>

          {/* Center: wordmark */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2"
            aria-label="Richy Risk home"
          >
            <Wordmark />
          </Link>

          {/* Right: search, account, cart */}
          <div className="flex flex-1 items-center justify-end gap-5">
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className="hidden items-center gap-2 text-[0.7rem] uppercase tracking-[0.18em] transition-colors hover:text-champagne lg:flex"
            >
              <Search strokeWidth={1.5} size={18} />
              <span>Search</span>
            </button>
            <Link
              href="/account"
              className="hidden text-[0.7rem] uppercase tracking-[0.18em] transition-colors hover:text-champagne lg:block"
            >
              Account
            </Link>
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className="transition-colors hover:text-champagne lg:hidden"
            >
              <Search strokeWidth={1.5} size={20} />
            </button>
            <button
              onClick={open}
              aria-label="Open bag"
              className="relative transition-colors hover:text-champagne"
            >
              <ShoppingBag strokeWidth={1.5} size={21} />
              <AnimatePresence>
                {count > 0 && (
                  <motion.span
                    key={count}
                    initial={{ scale: 0.4, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.4, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 18 }}
                    className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-champagne text-[0.6rem] font-medium text-porcelain"
                  >
                    {count}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-[95] bg-noir/40 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="fixed left-0 top-0 z-[96] flex h-full w-[82%] max-w-sm flex-col bg-porcelain px-7 py-6 lg:hidden"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mb-10 flex items-center justify-between">
                <Wordmark small />
                <button
                  aria-label="Close menu"
                  onClick={() => setMobileOpen(false)}
                >
                  <X strokeWidth={1.5} size={22} />
                </button>
              </div>
              <nav className="flex flex-col gap-1">
                {nav.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06 }}
                  >
                    <Link
                      href={item.href}
                      className="block border-b border-noir/10 py-4 font-display text-3xl text-noir"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + nav.length * 0.06 }}
                >
                  <Link
                    href="/account"
                    className="block border-b border-noir/10 py-4 font-display text-3xl text-noir"
                  >
                    Account
                  </Link>
                </motion.div>
              </nav>
              <div className="mt-auto">
                <p className="eyebrow mb-3">Bestsellers</p>
                <div className="flex flex-col gap-2">
                  {products
                    .filter((p) => p.bestseller)
                    .map((p) => (
                      <Link
                        key={p.slug}
                        href={`/product/${p.slug}`}
                        className="text-sm text-stone hover:text-noir"
                      >
                        {p.name}
                      </Link>
                    ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <CartDrawer />
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
