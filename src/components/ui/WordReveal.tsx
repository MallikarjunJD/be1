"use client";

import type { ElementType } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { wordContainer, wordItem } from "@/lib/motion";

interface WordRevealProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  delay?: number;
  stagger?: number;
  /** true: play when scrolled into view. false: play on mount. */
  inView?: boolean;
}

/** Headline that rises word by word out of a clipped line. */
export function WordReveal({
  text,
  as = "h2",
  className,
  delay = 0,
  stagger = 0.06,
  inView = true,
}: WordRevealProps) {
  const Tag = as as ElementType;
  const words = text.split(" ");
  const trigger = inView
    ? { whileInView: "show", viewport: { once: true, margin: "-10% 0px" } }
    : { animate: "show" };

  return (
    <Tag className={cn("text-balance", className)} aria-label={text}>
      <motion.span
        aria-hidden
        className="inline"
        variants={wordContainer(stagger, delay)}
        initial="hidden"
        {...trigger}
      >
        {words.map((word, i) => (
          <span key={i}>
            <span className="inline-block overflow-hidden pb-[0.14em] align-bottom -mb-[0.14em]">
              <motion.span className="inline-block" variants={wordItem}>
                {word}
              </motion.span>
            </span>
            {i < words.length - 1 ? " " : null}
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
