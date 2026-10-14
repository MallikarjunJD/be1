"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { NextUp } from "@/components/journey/NextUp";
import { ease } from "@/lib/motion";
import type { TriviaContent } from "@/lib/types";

export function TriviaPage({ content }: { content: TriviaContent }) {
  const [seen, setSeen] = useState<Set<number>>(new Set());
  const [open, setOpen] = useState<Set<number>>(new Set());

  const toggle = (i: number) => {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
    setSeen((prev) => new Set(prev).add(i));
  };

  const total = content.cards.length;
  const complete = seen.size === total;

  return (
    <main className="mx-auto w-full max-w-5xl px-5 sm:px-8">
      <PageHeader header={content.header} />

      <Reveal className="mb-10 text-center text-sm text-muted">
        {seen.size} of {total} turned over
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {content.cards.map((card, i) => {
          const flipped = open.has(i);
          return (
            <Reveal key={i} delay={(i % 3) * 0.08}>
              <button
                onClick={() => toggle(i)}
                aria-pressed={flipped}
                className="block h-64 w-full text-left [perspective:1200px]"
              >
                <motion.div
                  className="relative h-full w-full [transform-style:preserve-3d]"
                  animate={{ rotateY: flipped ? 180 : 0 }}
                  transition={{ duration: 0.8, ease }}
                >
                  <div className="glass absolute inset-0 flex flex-col justify-between rounded-[2rem] p-7 [backface-visibility:hidden]">
                    <p className="font-serif text-2xl leading-snug">{card.front}</p>
                    <p className="text-sm text-muted">Tap to find out</p>
                  </div>
                  <div className="absolute inset-0 flex items-center rounded-[2rem] bg-ink p-7 text-bg [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <p className="text-lg leading-relaxed">{card.back}</p>
                  </div>
                </motion.div>
              </button>
            </Reveal>
          );
        })}
      </div>

      <motion.p
        initial={false}
        animate={{ opacity: complete ? 1 : 0, y: complete ? 0 : 10 }}
        transition={{ duration: 0.8, ease }}
        className="mt-14 text-center font-serif text-2xl italic text-accent"
      >
        {content.completeMessage}
      </motion.p>

      <NextUp />
    </main>
  );
}
