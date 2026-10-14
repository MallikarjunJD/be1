"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Burst } from "@/components/ui/Burst";
import { ReplayButton } from "@/components/ui/ReplayButton";
import { site } from "@/config/site";
import { ease } from "@/lib/motion";
import type { FinaleContent } from "@/lib/types";

export function FinalePage({ content }: { content: FinaleContent }) {
  const [opened, setOpened] = useState<number[]>([]);
  const [burst, setBurst] = useState(0);
  const [secret, setSecret] = useState(false);

  // Typing the secret word anywhere on this page sets off a surprise.
  useEffect(() => {
    const word = site.secretWord.toLowerCase();
    let buffer = "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key.length !== 1) return;
      buffer = (buffer + e.key.toLowerCase()).slice(-word.length);
      if (buffer === word) {
        setBurst((b) => b + 1);
        setSecret(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const press = (i: number) => {
    setOpened((prev) => (prev.includes(i) ? prev : [...prev, i]));
    setBurst((b) => b + 1);
  };

  return (
    <main className="mx-auto w-full max-w-3xl px-5 pb-40 sm:px-8">
      <Burst trigger={burst} fixed count={34} />
      <PageHeader header={content.header} />

      <Reveal>
        <p className="mx-auto max-w-xl text-center font-letter text-xl leading-[1.8] sm:text-2xl">
          {content.message}
        </p>
      </Reveal>

      <div className="mt-20 flex flex-col items-center gap-5">
        {content.easterEggs.map((egg, i) => (
          <Reveal key={i} className="flex flex-col items-center gap-3 text-center">
            <button
              onClick={() => press(i)}
              className="rounded-full border border-ink/15 px-6 py-3 text-sm transition hover:border-accent hover:text-accent"
            >
              {egg.label}
            </button>
            <AnimatePresence>
              {opened.includes(i) && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease }}
                  className="max-w-md font-serif text-xl italic"
                >
                  {egg.reveal}
                </motion.p>
              )}
            </AnimatePresence>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-24 text-center">
        <p className="text-sm text-muted">{secret ? "You found it." : content.secretHint}</p>
        <div className="mt-8">
          <ReplayButton label={content.replayLabel} />
        </div>
      </Reveal>
    </main>
  );
}
