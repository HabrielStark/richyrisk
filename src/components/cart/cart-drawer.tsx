"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { X, Minus, Plus } from "lucide-react";
import { useCart } from "./cart-provider";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";

export function CartDrawer() {
  const { isOpen, close, items, setQty, remove, subtotal, count } = useCart();
  const freeShipThreshold = 75;
  const remaining = Math.max(0, freeShipThreshold - subtotal);
  const progress = Math.min(100, (subtotal / freeShipThreshold) * 100);

  return (
    <Dialog.Root open={isOpen} onOpenChange={(o) => (o ? null : close())}>
      <AnimatePresence>
        {isOpen && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                className="fixed inset-0 z-[80] bg-noir/40 backdrop-blur-[2px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              />
            </Dialog.Overlay>
            <Dialog.Content asChild>
              <motion.aside
                className="fixed right-0 top-0 z-[90] flex h-full w-full max-w-[440px] flex-col bg-porcelain shadow-2xl"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              >
                <Dialog.Title className="sr-only">Your bag</Dialog.Title>
                <div className="flex items-center justify-between border-b border-noir/10 px-6 py-5">
                  <span className="eyebrow">Your Bag ({count})</span>
                  <Dialog.Close asChild>
                    <button
                      aria-label="Close bag"
                      className="text-noir transition-colors hover:text-champagne"
                    >
                      <X strokeWidth={1.5} size={20} />
                    </button>
                  </Dialog.Close>
                </div>

                {items.length === 0 ? (
                  <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
                    <p className="font-display text-3xl text-noir">
                      Your bag is empty
                    </p>
                    <p className="max-w-[28ch] text-sm text-stone">
                      Begin with the Glaze Serum, the heart of the ritual.
                    </p>
                    <Button variant="outline" size="sm" onClick={close} asChild>
                      <a href="/shop">Explore the range</a>
                    </Button>
                  </div>
                ) : (
                  <>
                    <div className="border-b border-noir/10 px-6 py-4">
                      <div className="mb-2 text-[0.7rem] tracking-wide text-stone">
                        {remaining > 0 ? (
                          <>
                            You&apos;re {formatPrice(remaining)} from{" "}
                            <span className="text-noir">complimentary shipping</span>
                          </>
                        ) : (
                          <span className="text-champagne">
                            Complimentary shipping unlocked
                          </span>
                        )}
                      </div>
                      <div className="h-[2px] w-full bg-noir/10">
                        <div
                          className="h-full bg-champagne transition-all duration-700"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>

                    <div className="flex-1 overflow-y-auto px-6">
                      {items.map((item) => (
                        <div
                          key={item.slug}
                          className="flex gap-4 border-b border-noir/10 py-5"
                        >
                          <div className="relative h-24 w-20 shrink-0 overflow-hidden bg-porcelain-deep">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              sizes="80px"
                              className="object-cover"
                            />
                          </div>
                          <div className="flex flex-1 flex-col justify-between">
                            <div className="flex justify-between gap-2">
                              <div>
                                <p className="font-display text-xl leading-tight text-noir">
                                  {item.name}
                                </p>
                                {item.shade && (
                                  <p className="text-xs text-stone">
                                    {item.shade}
                                  </p>
                                )}
                              </div>
                              <button
                                onClick={() => remove(item.slug)}
                                className="text-xs text-stone underline-offset-4 hover:text-noir hover:underline"
                              >
                                Remove
                              </button>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center border border-noir/20">
                                <button
                                  aria-label="Decrease quantity"
                                  onClick={() => setQty(item.slug, item.qty - 1)}
                                  className="px-2 py-1.5 text-noir hover:text-champagne"
                                >
                                  <Minus size={13} strokeWidth={1.5} />
                                </button>
                                <span className="min-w-7 text-center text-sm">
                                  {item.qty}
                                </span>
                                <button
                                  aria-label="Increase quantity"
                                  onClick={() => setQty(item.slug, item.qty + 1)}
                                  className="px-2 py-1.5 text-noir hover:text-champagne"
                                >
                                  <Plus size={13} strokeWidth={1.5} />
                                </button>
                              </div>
                              <span className="text-sm tracking-wide">
                                {formatPrice(item.price * item.qty)}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-noir/10 px-6 py-5">
                      <div className="mb-4 flex items-center justify-between">
                        <span className="eyebrow">Subtotal</span>
                        <span className="font-display text-2xl text-noir">
                          {formatPrice(subtotal)}
                        </span>
                      </div>
                      <Button variant="primary" size="lg" className="w-full">
                        Proceed to checkout
                      </Button>
                      <p className="mt-3 text-center text-[0.7rem] text-stone">
                        Taxes and shipping calculated at checkout
                      </p>
                    </div>
                  </>
                )}
              </motion.aside>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
