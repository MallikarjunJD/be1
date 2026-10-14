"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Eye, EyeOff, Lock, LockOpen } from "lucide-react";
import { Stage } from "@/components/ui/Stage";
import { GlassCard } from "@/components/ui/GlassCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { WordReveal } from "@/components/ui/WordReveal";
import { site } from "@/config/site";
import { ease } from "@/lib/motion";

type Phase = "idle" | "checking" | "opening";

/**
 * The branching point. Every submission looks identical: no error state, no
 * "wrong password" message. The server decides which experience the cookie
 * unlocks and the visitor simply walks into it.
 */
export default function UnlockPage() {
  const [value, setValue] = useState("");
  const [visible, setVisible] = useState(false);
  const [hint, setHint] = useState(false);
  const [phase, setPhase] = useState<Phase>("idle");
  const [shake, setShake] = useState(0);

  async function submit(e: FormEvent) {
    e.preventDefault();
    if (phase !== "idle") return;
    if (!value.trim()) {
      setShake((s) => s + 1);
      return;
    }
    setPhase("checking");
    try {
      await fetch("/api/unlock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: value }),
      });
    } catch {
      /* the journey layout sends her back here if no cookie was set */
    }
    setPhase("opening");
    window.setTimeout(() => window.location.assign("/journey/1"), 1700);
  }

  return (
    <Stage>
      <main className="flex min-h-[100dvh] items-center justify-center px-5">
        <motion.div
          key={shake}
          animate={{ x: shake ? [0, -9, 9, -6, 6, 0] : 0 }}
          transition={{ duration: 0.45 }}
          className="w-full max-w-md"
        >
          <GlassCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: phase === "opening" ? 0.0 : 1, y: 0, scale: phase === "opening" ? 1.03 : 1 }}
            transition={{ duration: 0.9, ease }}
            className="p-8 text-center sm:p-10"
          >
            <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-ink text-bg shadow-glow">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={phase === "idle" ? "locked" : "open"}
                  initial={{ scale: 0.6, opacity: 0, rotate: -20 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  exit={{ scale: 0.6, opacity: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  {phase === "idle" ? <Lock className="h-5 w-5" /> : <LockOpen className="h-5 w-5" />}
                </motion.span>
              </AnimatePresence>
            </div>

            <WordReveal
              as="h1"
              inView={false}
              text={site.unlock.headline}
              className="font-serif text-4xl leading-tight"
            />
            <p className="mt-3 text-muted">{site.unlock.subheading}</p>

            <form onSubmit={submit} className="mt-8 space-y-4" autoComplete="off">
              <div className="relative">
                <input
                  autoFocus
                  name="key"
                  type={visible ? "text" : "password"}
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  autoComplete="off"
                  autoCapitalize="off"
                  spellCheck={false}
                  placeholder="Password"
                  aria-label="Password"
                  className="w-full rounded-2xl border border-ink/10 bg-white/70 px-5 py-4 pr-12 text-lg outline-none transition placeholder:text-muted/60 focus:border-accent focus:ring-4 focus:ring-accent/15"
                />
                <button
                  type="button"
                  onClick={() => setVisible((v) => !v)}
                  aria-label={visible ? "Hide password" : "Show password"}
                  className="absolute right-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full text-muted transition hover:text-ink"
                >
                  {visible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>

              <MagneticButton type="submit" disabled={phase !== "idle"} className="w-full justify-center">
                {phase === "idle" ? "Open" : phase === "checking" ? "Checking" : "Opening"}
              </MagneticButton>
            </form>

            <button
              onClick={() => setHint((h) => !h)}
              className="mt-6 text-sm text-muted underline-offset-4 transition hover:text-ink hover:underline"
            >
              Need a hint?
            </button>
            <AnimatePresence>
              {hint && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden pt-2 text-sm italic text-muted"
                >
                  {site.passwordHint}
                </motion.p>
              )}
            </AnimatePresence>
          </GlassCard>
        </motion.div>
      </main>
    </Stage>
  );
}
