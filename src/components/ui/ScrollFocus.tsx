"use client";

import { useRef, type ReactNode } from "react";
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Content that comes into focus as it crosses the middle of the screen and
 * softly dissolves as it leaves. Driven by scroll position, not by time.
 */
export function ScrollFocus({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [0.05, 1, 1, 0.05]);
  const y = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [36, 0, 0, -36]);
  const blur = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [10, 0, 0, 10]);
  const filter = useMotionTemplate`blur(${blur}px)`;

  return (
    <div ref={ref} className={cn("flex min-h-[70vh] items-center justify-center px-5", className)}>
      <motion.div style={{ opacity, y, filter }} className="w-full text-center">
        {children}
      </motion.div>
    </div>
  );
}
