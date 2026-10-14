"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RotateCcw } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { NextUp } from "@/components/journey/NextUp";
import { cn } from "@/lib/utils";
import { ease } from "@/lib/motion";
import type { PhotoContent, SlideTone } from "@/lib/types";

const SLIDE_SECONDS = 5.5;

const tones: Record<SlideTone, string> = {
  rose: "from-accent2/50 via-accent3/30 to-white/40",
  lilac: "from-accent/40 via-accent2/25 to-white/40",
  peach: "from-accent3/60 via-accent2/25 to-white/40",
  butter: "from-accent3/70 via-accent/15 to-white/40",
};

/**
 * Story-style slideshow. Each slide is a photo (optional) or a typographic
 * card. Tap the left or right side to move; slides advance on their own.
 */
export function PhotoShowcase({ content }: { content: PhotoContent }) {
  const [i, setI] = useState(0);
  const slides = content.slides;
  const n = slides.length;
  const slide = slides[i];
  const finished = i === n - 1;

  const go = (delta: number) => setI((p) => Math.min(n - 1, Math.max(0, p + delta)));

  return (
    <main className="mx-auto w-full max-w-5xl px-5 sm:px-8">
      <PageHeader header={content.header} />

      <Reveal>
        <div className="glass relative mx-auto aspect-[4/5] w-full overflow-hidden rounded-[2rem] sm:aspect-[16/9]">
          <AnimatePresence>
            <motion.div
              key={i}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.1, ease }}
            >
              {slide.src ? (
                // eslint-disable-next-line @next/next/no-img-element
                <motion.img
                  src={slide.src}
                  alt={slide.caption}
                  className="h-full w-full object-cover"
                  initial={{ scale: 1.04 }}
                  animate={{ scale: 1.14 }}
                  transition={{ duration: SLIDE_SECONDS + 1, ease: "linear" }}
                />
              ) : (
                <motion.div
                  className={cn("h-full w-full bg-gradient-to-br", tones[slide.tone])}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: SLIDE_SECONDS + 1, ease: "linear" }}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
              <motion.div
                className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-12"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1, ease }}
              >
                <p className="max-w-2xl text-balance font-serif text-3xl leading-tight sm:text-5xl">
                  {slide.caption}
                </p>
                {slide.sub && <p className="mt-3 text-sm text-white/80">{slide.sub}</p>}
              </motion.div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-x-5 top-5 z-10 flex gap-1.5">
            {slides.map((_, j) => (
              <div key={j} className="h-[3px] flex-1 overflow-hidden rounded-full bg-white/40">
                {j === i ? (
                  <motion.div
                    key={`active-${i}`}
                    className="h-full origin-left bg-white"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: SLIDE_SECONDS, ease: "linear" }}
                    onAnimationComplete={() => setI((p) => (p < n - 1 ? p + 1 : p))}
                  />
                ) : (
                  <div className={cn("h-full bg-white", j < i ? "w-full" : "w-0")} />
                )}
              </div>
            ))}
          </div>

          <button
            aria-label="Previous slide"
            onClick={() => go(-1)}
            className="absolute inset-y-0 left-0 z-10 w-1/3 cursor-w-resize"
          />
          <button
            aria-label="Next slide"
            onClick={() => go(1)}
            className="absolute inset-y-0 right-0 z-10 w-1/3 cursor-e-resize"
          />

          {finished && (
            <button
              onClick={() => setI(0)}
              aria-label="Replay slideshow"
              className="absolute bottom-5 right-5 z-20 grid h-10 w-10 place-items-center rounded-full bg-white/70 text-ink backdrop-blur transition hover:bg-white"
            >
              <RotateCcw className="h-4 w-4" />
            </button>
          )}
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="mx-auto mt-10 max-w-xl text-center font-serif text-2xl italic text-muted">
          {content.closing}
        </p>
      </Reveal>

      <NextUp />
    </main>
  );
}
