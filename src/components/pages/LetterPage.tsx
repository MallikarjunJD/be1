"use client";

import { useMemo, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { Eye, EyeOff, Minus, Plus } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { WordReveal } from "@/components/ui/WordReveal";
import { NextUp } from "@/components/journey/NextUp";
import { cn } from "@/lib/utils";
import { ease } from "@/lib/motion";
import { site } from "@/config/site";
import type { LetterContent } from "@/lib/types";

const sizes = [
  "text-[18px] sm:text-[20px]",
  "text-[20px] sm:text-[22px]",
  "text-[22px] sm:text-[25px]",
];

/** Dims itself when it is not near the middle of the screen. */
function FocusParagraph({
  children,
  enabled,
  className,
}: {
  children: ReactNode;
  enabled: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const active = useInView(ref, { margin: "-35% 0px -35% 0px" });
  return (
    <motion.p
      ref={ref}
      animate={{ opacity: enabled && !active ? 0.38 : 1 }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.p>
  );
}

export function LetterPage({ content }: { content: LetterContent }) {
  const [opened, setOpened] = useState(false);
  const [size, setSize] = useState(1);
  const [focus, setFocus] = useState(true);

  const minutes = useMemo(() => {
    const words = content.paragraphs.join(" ").split(/\s+/).length;
    return Math.max(1, Math.round(words / 200));
  }, [content.paragraphs]);

  const open = () => {
    setOpened(true);
    window.scrollTo({ top: 0 });
  };

  return (
    <main>
      <AnimatePresence mode="wait">
        {!opened ? (
          <motion.section
            key="envelope"
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.7, ease }}
            className="mx-auto flex min-h-[100dvh] max-w-xl flex-col items-center justify-center px-5 text-center"
          >
            <Reveal>
              <p className="mb-4 text-sm font-medium text-accent">{content.header.eyebrow}</p>
            </Reveal>
            <WordReveal
              as="h1"
              inView={false}
              delay={0.15}
              text={content.header.headline}
              className="font-serif text-5xl leading-[1.05] sm:text-7xl"
            />
            <Reveal delay={0.6}>
              <p className="mt-5 max-w-md text-muted">{content.header.subheading}</p>
            </Reveal>

            <Reveal delay={0.9} className="mt-14 w-full">
              <motion.button
                onClick={open}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="glass mx-auto flex w-full max-w-sm flex-col items-center gap-5 rounded-[2rem] px-8 py-10"
              >
                <span className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-accent to-accent2 font-serif text-3xl text-white shadow-glow">
                  {site.herName.charAt(0)}
                </span>
                <span className="text-sm text-muted">{content.sealLabel}</span>
              </motion.button>
            </Reveal>
          </motion.section>
        ) : (
          <motion.div
            key="letter"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <article className="mx-auto max-w-[38rem] px-5 pb-12 pt-32 font-letter">
              <p className="text-center font-sans text-sm text-muted">About {minutes} min to read</p>
              <h2 className="mt-8 font-hand text-5xl text-accent sm:text-6xl">{content.salutation}</h2>

              <div className={cn("mt-10 space-y-8 leading-[1.85]", sizes[size])}>
                {content.paragraphs.map((p, i) => (
                  <FocusParagraph key={i} enabled={focus} className={i === 0 ? "dropcap" : undefined}>
                    {p}
                  </FocusParagraph>
                ))}
              </div>

              <div className={cn("mt-14 leading-[1.85]", sizes[size])}>
                <FocusParagraph enabled={focus}>{content.closing}</FocusParagraph>
                <motion.p
                  className="mt-4 font-hand text-5xl text-accent sm:text-6xl"
                  initial={{ clipPath: "inset(0 100% 0 0)" }}
                  whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 2.2, ease }}
                >
                  {content.signature}
                </motion.p>
                {content.postscript && (
                  <Reveal className="mt-12">
                    <p className="text-ink/75">{content.postscript}</p>
                  </Reveal>
                )}
              </div>
            </article>

            <NextUp />

            <div className="glass fixed bottom-5 right-5 z-40 flex items-center gap-1 rounded-full p-1.5 font-sans">
              <button
                onClick={() => setSize((s) => Math.max(0, s - 1))}
                disabled={size === 0}
                aria-label="Smaller text"
                className="grid h-9 w-9 place-items-center rounded-full transition hover:bg-white/70 disabled:opacity-30"
              >
                <Minus className="h-4 w-4" />
              </button>
              <button
                onClick={() => setSize((s) => Math.min(sizes.length - 1, s + 1))}
                disabled={size === sizes.length - 1}
                aria-label="Larger text"
                className="grid h-9 w-9 place-items-center rounded-full transition hover:bg-white/70 disabled:opacity-30"
              >
                <Plus className="h-4 w-4" />
              </button>
              <button
                onClick={() => setFocus((f) => !f)}
                aria-pressed={focus}
                aria-label="Toggle focus mode"
                title="Focus mode"
                className="grid h-9 w-9 place-items-center rounded-full transition hover:bg-white/70"
              >
                {focus ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
