"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const blobs = [
  { className: "left-[-12%] top-[-12%] h-[55vmax] w-[55vmax] bg-accent/25", x: [0, 60, -30, 0], y: [0, 40, 80, 0], d: 28 },
  { className: "right-[-16%] top-[18%] h-[50vmax] w-[50vmax] bg-accent2/25", x: [0, -70, 20, 0], y: [0, -40, 30, 0], d: 34 },
  { className: "left-[8%] bottom-[-22%] h-[60vmax] w-[60vmax] bg-accent3/35", x: [0, 50, -50, 0], y: [0, -60, -20, 0], d: 40 },
];

/** Slow, large, blurred colour fields drifting behind everything. */
export function Aurora() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className={cn("absolute rounded-full blur-[120px] will-change-transform", blob.className)}
          animate={{ x: blob.x, y: blob.y }}
          transition={{ duration: blob.d, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
