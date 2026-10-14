"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  variant?: "solid" | "ghost";
  className?: string;
}

/** A button that leans toward the cursor. */
export function MagneticButton({
  children,
  onClick,
  type = "button",
  disabled,
  variant = "solid",
  className,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 16, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 16, mass: 0.4 });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.25);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.25);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="inline-block"
    >
      <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={cn(
          "inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition-all duration-500 disabled:opacity-50",
          variant === "solid"
            ? "bg-ink text-bg shadow-[0_12px_40px_-12px_rgb(var(--ink)/0.55)] hover:shadow-glow"
            : "glass text-ink hover:bg-white/80",
          className,
        )}
      >
        {children}
      </button>
    </motion.div>
  );
}
