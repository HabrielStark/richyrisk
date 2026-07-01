"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/fx/magnetic";

export function Hero({
  videoSources = [],
}: {
  videoSources?: { src: string; type: string }[];
}) {
  const reduce = useReducedMotion();
  const ease = [0.16, 1, 0.3, 1] as const;
  const ref = useRef<HTMLElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const hasVideo = !reduce && videoSources.length > 0;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // Background drifts slower than scroll; content lifts and fades.
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "7%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-28%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[100dvh] w-full overflow-hidden">
      {/* Background (mount zoom + scroll parallax + slow ambient drift) */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={reduce ? false : { scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease }}
      >
        <motion.div
          className="absolute inset-[-7%]"
          style={reduce ? undefined : { y: bgY, willChange: "transform" }}
          animate={reduce ? undefined : { scale: [1, 1.06, 1] }}
          transition={
            reduce
              ? undefined
              : { duration: 22, repeat: Infinity, ease: "easeInOut" }
          }
        >
          <Image
            src="/images/hero-v4.png"
            alt="A model with luminous glass skin holding the Richy Risk Glaze Serum in warm light"
            fill
            loading="eager"
            fetchPriority="high"
            sizes="100vw"
            className="object-cover object-[68%_center] md:object-center"
          />
          {/* Optional cinematic video. Drop a file at /public/videos/hero.mp4
              (and optionally hero.webm) and it fades in over the image.
              Falls back to the image automatically if no file is present. */}
          {hasVideo && (
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              onPlaying={() => setVideoReady(true)}
              className={`absolute inset-0 h-full w-full object-cover object-[72%_center] transition-opacity duration-[1400ms] ease-out md:object-center ${
                videoReady ? "opacity-100" : "opacity-0"
              }`}
            >
              {videoSources.map((v) => (
                <source key={v.src} src={v.src} type={v.type} />
              ))}
            </video>
          )}
        </motion.div>
        {/* tonal scrims for text legibility (image already carries left shadow) */}
        <div className="absolute inset-0 bg-gradient-to-r from-noir/65 via-noir/15 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-noir/55 via-transparent to-noir/10" />
        {/* warm gilt light pooling behind the headline — Hermès leather / Tom Ford glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(58%_52%_at_20%_84%,rgba(201,169,120,0.34),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(72%_58%_at_90%_8%,rgba(156,99,34,0.22),transparent_60%)]" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 mx-auto flex min-h-[100dvh] max-w-[1500px] flex-col justify-end px-6 pb-24 pt-32 md:px-8 md:pb-32"
        style={reduce ? undefined : { y: contentY, opacity: contentOpacity }}
      >
        <div className="max-w-4xl text-porcelain">
          <motion.div
            className="flex items-center gap-3"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease }}
          >
            <span className="h-px w-10 bg-champagne-light/70" />
            <p className="eyebrow text-porcelain/70">The art of the glow</p>
          </motion.div>

          <h1 className="font-display mt-5 text-[3.4rem] font-medium leading-[0.92] tracking-[-0.02em] sm:text-7xl md:text-8xl lg:text-[8.5rem]">
            <Overlay delay={0.42}>Skin, as a</Overlay>
            <Overlay delay={0.54}>
              <em className="italic text-champagne-light">luxury.</em>
            </Overlay>
          </h1>

          <motion.p
            className="mt-7 max-w-[44ch] text-base leading-relaxed text-porcelain/80 md:text-lg"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease }}
          >
            Peptide-rich rituals and cushiony color, composed for a single,
            quiet radiance you can wear every day.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap items-center gap-4"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.85, ease }}
          >
            <Magnetic strength={0.4}>
              <Button asChild variant="light" size="lg">
                <Link href="/shop">Shop the ritual</Link>
              </Button>
            </Magnetic>
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="text-porcelain hover:text-champagne-light"
            >
              <Link href="/product/glaze-serum">Discover Glaze Serum</Link>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function Overlay({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  const reduce = useReducedMotion();
  return (
    <span className="block overflow-hidden pb-[0.08em]">
      <motion.span
        className="block"
        initial={reduce ? false : { y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}
