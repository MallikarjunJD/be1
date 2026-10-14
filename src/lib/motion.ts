import type { Variants } from "framer-motion";

/** One easing curve for the whole site: quick start, long soft landing. */
export const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

/**
 * Section reveal. Opacity + a small lift only: no blur filters, because a
 * filtered ancestor would switch off the glass cards' backdrop blur.
 */
export const reveal = (delay = 0, y = 14): Variants => ({
  hidden: { opacity: 0, y },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease, delay } },
});

export const wordContainer = (stagger = 0.06, delay = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren: delay } },
});

export const wordItem: Variants = {
  hidden: { y: "110%", opacity: 0 },
  show: { y: "0%", opacity: 1, transition: { duration: 1, ease } },
};

export const viewportOnce = { once: true, margin: "-10% 0px -10% 0px" } as const;
