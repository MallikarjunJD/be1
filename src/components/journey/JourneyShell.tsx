"use client";

import type { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { JourneyProvider, useJourney, type StepMeta } from "@/components/journey/JourneyProvider";
import { cn } from "@/lib/utils";
import { ease } from "@/lib/motion";

function TopBar({ mark }: { mark: string }) {
  const { steps, index } = useJourney();
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-40 flex items-center justify-between px-5 py-4 sm:px-8">
      <span className="font-serif text-lg italic text-ink/70">{mark}</span>
      <span className="text-xs tabular-nums text-muted">
        {pad(index + 1)} / {pad(steps.length)}
      </span>
    </div>
  );
}

function FloatingNav() {
  const { steps, index, next, prev, go } = useJourney();
  const hidden = steps[index]?.immersive;

  return (
    <AnimatePresence>
      {!hidden && (
        <div className="pointer-events-none fixed inset-x-0 bottom-5 z-40 flex justify-center">
          <motion.nav
            key="nav"
            aria-label="Journey navigation"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease }}
            className="glass pointer-events-auto flex items-center gap-1 rounded-full p-1.5"
          >
            <button
              onClick={prev}
              disabled={index === 0}
              aria-label="Previous page"
              className="grid h-9 w-9 place-items-center rounded-full text-ink transition hover:bg-white/70 disabled:opacity-30"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <ul className="flex items-center gap-1 px-1">
              {steps.map((step, i) => (
                <li key={i}>
                  <button
                    disabled={i > index || i === index}
                    onClick={() => go(`/journey/${i + 1}`)}
                    title={i <= index ? step.label : undefined}
                    aria-label={i <= index ? step.label : `Page ${i + 1}`}
                    className="grid h-6 place-items-center px-0.5"
                  >
                    <span
                      className={cn(
                        "block h-1.5 rounded-full transition-all duration-500",
                        i === index ? "w-6 bg-ink" : i < index ? "w-1.5 bg-ink/50" : "w-1.5 bg-ink/15",
                      )}
                    />
                  </button>
                </li>
              ))}
            </ul>
            <button
              onClick={next}
              disabled={index >= steps.length - 1}
              aria-label="Next page"
              className="grid h-9 w-9 place-items-center rounded-full text-ink transition hover:bg-white/70 disabled:opacity-30"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </motion.nav>
        </div>
      )}
    </AnimatePresence>
  );
}

export function JourneyShell({
  steps,
  mark,
  children,
}: {
  steps: StepMeta[];
  mark: string;
  children: ReactNode;
}) {
  return (
    <JourneyProvider steps={steps}>
      <ScrollProgress />
      <TopBar mark={mark} />
      {children}
      <FloatingNav />
    </JourneyProvider>
  );
}
