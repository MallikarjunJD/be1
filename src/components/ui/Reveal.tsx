"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { reveal, viewportOnce } from "@/lib/motion";

type RevealProps = Omit<HTMLMotionProps<"div">, "variants" | "initial" | "whileInView" | "viewport"> & {
  delay?: number;
};

/** Fades a block in once as it enters the viewport. */
export function Reveal({ delay = 0, children, ...rest }: RevealProps) {
  return (
    <motion.div
      variants={reveal(delay)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
