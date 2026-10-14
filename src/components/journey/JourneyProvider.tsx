"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ease } from "@/lib/motion";

export interface StepMeta {
  label: string;
  immersive?: boolean;
}

interface JourneyContextValue {
  steps: StepMeta[];
  /** Zero-based index of the current step. */
  index: number;
  go: (href: string) => void;
  next: () => void;
  prev: () => void;
  uncover: () => void;
}

const JourneyContext = createContext<JourneyContextValue | null>(null);

export function useJourney() {
  const ctx = useContext(JourneyContext);
  if (!ctx) throw new Error("useJourney must be used inside <JourneyProvider>");
  return ctx;
}

/**
 * Owns navigation between steps. `go` washes a soft curtain over the screen
 * before routing; the next page's template lifts it again (see template.tsx).
 */
export function JourneyProvider({ steps, children }: { steps: StepMeta[]; children: ReactNode }) {
  const router = useRouter();
  const params = useParams<{ step: string }>();
  const [covering, setCovering] = useState(false);

  const current = Number.parseInt(params?.step ?? "1", 10);
  const index = Math.min(Math.max((Number.isNaN(current) ? 1 : current) - 1, 0), steps.length - 1);

  const go = useCallback(
    (href: string) => {
      setCovering(true);
      window.setTimeout(() => router.push(href), 600);
    },
    [router],
  );
  const uncover = useCallback(() => setCovering(false), []);
  const next = useCallback(() => {
    if (index < steps.length - 1) go(`/journey/${index + 2}`);
  }, [go, index, steps.length]);
  const prev = useCallback(() => {
    if (index > 0) go(`/journey/${index}`);
  }, [go, index]);

  const value = useMemo(
    () => ({ steps, index, go, next, prev, uncover }),
    [steps, index, go, next, prev, uncover],
  );

  return (
    <JourneyContext.Provider value={value}>
      {children}
      <motion.div
        aria-hidden
        className="fixed inset-0 z-[70] bg-bg"
        initial={false}
        animate={{ opacity: covering ? 1 : 0 }}
        transition={{ duration: 0.6, ease }}
        style={{ pointerEvents: covering ? "auto" : "none" }}
      />
    </JourneyContext.Provider>
  );
}
