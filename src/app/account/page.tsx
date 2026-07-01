"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";

type Mode = "signin" | "register";

export default function AccountPage() {
  const [mode, setMode] = useState<Mode>("signin");
  const [done, setDone] = useState(false);

  return (
    <div className="bg-porcelain">
      <div className="mx-auto grid min-h-[100dvh] max-w-[1500px] md:grid-cols-2">
        {/* Form side */}
        <div className="flex flex-col justify-center px-6 pb-16 pt-36 md:px-14 md:py-24 lg:px-24">
          <div className="mx-auto w-full max-w-md">
            <p className="eyebrow text-champagne">
              {mode === "signin" ? "Welcome back" : "Join the house"}
            </p>
            <h1 className="font-display mt-4 text-5xl font-normal leading-[0.95] text-noir md:text-6xl">
              {mode === "signin" ? "Account" : "Create account"}
            </h1>

            <div className="mt-8 flex gap-6 border-b border-noir/15">
              {(["signin", "register"] as Mode[]).map((m) => (
                <button
                  key={m}
                  onClick={() => {
                    setMode(m);
                    setDone(false);
                  }}
                  className={`relative pb-3 text-[0.72rem] uppercase tracking-[0.18em] transition-colors ${
                    mode === m ? "text-noir" : "text-stone hover:text-noir"
                  }`}
                >
                  {m === "signin" ? "Sign in" : "Register"}
                  {mode === m && (
                    <motion.span
                      layoutId="account-tab"
                      className="absolute -bottom-px left-0 h-px w-full bg-noir"
                    />
                  )}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {done ? (
                <motion.p
                  key="done"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-display mt-10 text-2xl text-champagne"
                >
                  This is a demo storefront, but the glow is real. Welcome in.
                </motion.p>
              ) : (
                <motion.form
                  key={mode}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-9 flex flex-col gap-6"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setDone(true);
                  }}
                >
                  {mode === "register" && (
                    <Field label="First name" type="text" />
                  )}
                  <Field label="Email address" type="email" />
                  <Field label="Password" type="password" />

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="mt-2 w-full"
                  >
                    {mode === "signin" ? "Sign in" : "Create account"}
                  </Button>
                  {mode === "signin" && (
                    <button
                      type="button"
                      className="link-underline mx-auto text-[0.72rem] uppercase tracking-[0.18em] text-stone"
                    >
                      Forgot your password?
                    </button>
                  )}
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Image side */}
        <div className="relative hidden md:block">
          <Image
            src="/images/col-skin-editorial.png"
            alt="A model with luminous, sun-warmed glass skin"
            fill
            loading="eager"
            fetchPriority="high"
            sizes="50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-noir/30 to-transparent" />
        </div>
      </div>
    </div>
  );
}

function Field({ label, type }: { label: string; type: string }) {
  return (
    <label className="block">
      <span className="eyebrow text-stone">{label}</span>
      <input
        type={type}
        required
        className="mt-2 w-full border-b border-noir/25 bg-transparent py-2.5 text-base text-noir transition-colors placeholder:text-stone-soft focus:border-champagne focus:outline-none"
      />
    </label>
  );
}
