"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ease } from "@/lib/motion";

const colours = ["bg-accent", "bg-accent2", "bg-accent3"];

/**
 * A small radial pop of dots. Bump `trigger` to fire it again.
 * `fixed` makes it fill the screen instead of its parent.
 */
export function Burst({
  trigger,
  count = 22,
  fixed = false,
}: {
  trigger: number;
  count?: number;
  fixed?: boolean;
}) {
  if (trigger === 0) return null;
  return (
    <div
      key={trigger}
      aria-hidden
      className={cn(
        "pointer-events-none inset-0 z-[60] flex items-center justify-center",
        fixed ? "fixed" : "absolute",
      )}
    >
      {Array.from({ length: count }).map((_, i) => {
        const angle = (i / count) * Math.PI * 2 + (i % 2 ? 0.2 : 0);
        const distance = 90 + ((i * 37) % 90);
        return (
          <motion.span
            key={i}
            className={cn("absolute h-2 w-2 rounded-full", colours[i % colours.length])}
            initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
            animate={{
              x: Math.cos(angle) * distance,
              y: Math.sin(angle) * distance,
              opacity: 0,
              scale: 0.3,
            }}
            transition={{ duration: 1.1 + (i % 5) * 0.08, ease }}
          />
        );
      })}
    </div>
  );
}
