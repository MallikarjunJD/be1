"use client";

import { useEffect, type ReactNode } from "react";
import { motion } from "framer-motion";
import { useJourney } from "@/components/journey/JourneyProvider";
import { ease } from "@/lib/motion";

/** Re-mounts on every step: lifts the curtain and fades the new page in. */
export default function JourneyTemplate({ children }: { children: ReactNode }) {
  const { uncover } = useJourney();

  useEffect(() => {
    const t = window.setTimeout(uncover, 80);
    return () => window.clearTimeout(t);
  }, [uncover]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease }}
    >
      {children}
    </motion.div>
  );
}
