"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export function GlassCard({ className, children, ...rest }: HTMLMotionProps<"div">) {
  return (
    <motion.div className={cn("glass rounded-[2rem]", className)} {...rest}>
      {children}
    </motion.div>
  );
}
