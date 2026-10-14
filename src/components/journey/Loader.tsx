"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "@/components/ui/Typewriter";

interface LoaderProps {
  lines: string[];
  onDone: () => void;
}

/** Opening sequence: a ring draws itself while a short message is typed. */
export function Loader({ lines, onDone }: LoaderProps) {
  const [line, setLine] = useState(0);

  const handleDone = () => {
    if (line < lines.length - 1) {
      window.setTimeout(() => setLine((l) => l + 1), 700);
    } else {
      window.setTimeout(onDone, 1000);
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-[80] flex flex-col items-center justify-center bg-bg px-6 text-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.9 }}
    >
      <svg width="76" height="76" viewBox="0 0 76 76" aria-hidden className="mb-10">
        <circle cx="38" cy="38" r="35" fill="none" stroke="rgb(var(--ink) / 0.1)" strokeWidth="1.5" />
        <motion.circle
          cx="38"
          cy="38"
          r="35"
          fill="none"
          stroke="rgb(var(--accent))"
          strokeWidth="1.5"
          strokeLinecap="round"
          transform="rotate(-90 38 38)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4.2, ease: "easeInOut" }}
        />
      </svg>

      <p className="min-h-[2lh] max-w-md font-serif text-2xl italic text-ink sm:text-3xl">
        <Typewriter key={line} text={lines[line]} startDelay={300} onDone={handleDone} />
      </p>

      <button onClick={onDone} className="absolute bottom-8 text-xs text-muted transition hover:text-ink">
        Skip
      </button>
    </motion.div>
  );
}
