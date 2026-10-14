"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Burst } from "@/components/ui/Burst";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { NextUp } from "@/components/journey/NextUp";
import { ease } from "@/lib/motion";
import type { WishContent } from "@/lib/types";

export function WishPage({ content }: { content: WishContent }) {
  const [burst, setBurst] = useState(0);
  const [wished, setWished] = useState(false);

  const makeWish = () => {
    setBurst((b) => b + 1);
    setWished(true);
  };

  return (
    <main className="mx-auto w-full max-w-3xl px-5 sm:px-8">
      <PageHeader header={content.header} />

      <div className="space-y-8 text-center">
        {content.paragraphs.map((p, i) => (
          <Reveal key={i}>
            <p className="mx-auto max-w-xl font-letter text-xl leading-[1.8] sm:text-2xl">{p}</p>
          </Reveal>
        ))}
        <Reveal>
          <p className="pt-4 font-hand text-4xl text-accent">{content.signoff}</p>
        </Reveal>
      </div>

      <Reveal className="relative mt-20 flex flex-col items-center gap-6 text-center">
        <div className="relative">
          <MagneticButton onClick={makeWish}>
            <Sparkles className="h-4 w-4" />
            {content.wishButton}
          </MagneticButton>
          <Burst trigger={burst} />
        </div>
        <div className="min-h-[3rem]">
          <AnimatePresence>
            {wished && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease }}
                className="font-serif text-2xl italic"
              >
                {content.wishReveal}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </Reveal>

      <NextUp />
    </main>
  );
}
