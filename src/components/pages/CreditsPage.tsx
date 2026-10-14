"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, animate, motion, useMotionValue, type AnimationPlaybackControls } from "framer-motion";
import { Pause, Play, SkipForward } from "lucide-react";
import { ReplayButton } from "@/components/ui/ReplayButton";
import { ease } from "@/lib/motion";
import type { CreditsContent } from "@/lib/types";

/** Rolling credits. Pause, or skip to the end card. */
export function CreditsPage({ content }: { content: CreditsContent }) {
  const frame = useRef<HTMLDivElement>(null);
  const roll = useRef<HTMLDivElement>(null);
  const controls = useRef<AnimationPlaybackControls | null>(null);
  const y = useMotionValue(0);
  const [done, setDone] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const frameHeight = frame.current?.clientHeight ?? 0;
    const rollHeight = roll.current?.scrollHeight ?? 0;
    y.set(frameHeight);
    controls.current = animate(y, -rollHeight, {
      duration: Math.max(40, (rollHeight + frameHeight) / 32),
      ease: "linear",
      onComplete: () => setDone(true),
    });
    return () => controls.current?.stop();
  }, [y]);

  const togglePause = () => {
    if (paused) controls.current?.play();
    else controls.current?.pause();
    setPaused((p) => !p);
  };

  const skip = () => {
    controls.current?.stop();
    setDone(true);
  };

  return (
    <main className="relative mx-auto w-full max-w-3xl px-5">
      <div
        ref={frame}
        className="relative h-[100dvh] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_14%,black_86%,transparent)]"
      >
        <motion.div ref={roll} style={{ y }} className="absolute inset-x-0 top-0 text-center">
          <h1 className="font-serif text-6xl sm:text-8xl">{content.title}</h1>
          <div className="mt-28 space-y-14">
            {content.roles.map((r) => (
              <div key={r.role}>
                <p className="text-sm text-muted">{r.role}</p>
                <p className="mt-1 font-serif text-3xl sm:text-4xl">{r.name}</p>
              </div>
            ))}
          </div>
          <div className="mt-28 space-y-6">
            {content.thanks.map((t) => (
              <p key={t} className="mx-auto max-w-md font-letter text-xl italic text-ink/80">
                {t}
              </p>
            ))}
          </div>
          <div className="h-24" />
        </motion.div>
      </div>

      <AnimatePresence>
        {done && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease }}
            className="absolute inset-0 flex flex-col items-center justify-center gap-10 px-6 text-center"
          >
            <p className="max-w-xl text-balance font-serif text-4xl leading-snug sm:text-5xl">{content.endCard}</p>
            <ReplayButton label={content.replayLabel} />
          </motion.div>
        )}
      </AnimatePresence>

      {!done && (
        <div className="glass fixed bottom-5 left-1/2 z-40 flex -translate-x-1/2 items-center gap-1 rounded-full p-1.5">
          <button
            onClick={togglePause}
            aria-label={paused ? "Play credits" : "Pause credits"}
            className="grid h-9 w-9 place-items-center rounded-full transition hover:bg-white/70"
          >
            {paused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
          </button>
          <button
            onClick={skip}
            aria-label="Skip to the end"
            className="grid h-9 w-9 place-items-center rounded-full transition hover:bg-white/70"
          >
            <SkipForward className="h-4 w-4" />
          </button>
        </div>
      )}
    </main>
  );
}
