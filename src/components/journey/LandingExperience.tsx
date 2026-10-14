"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Stage } from "@/components/ui/Stage";
import { Loader } from "@/components/journey/Loader";
import { ScrollFocus } from "@/components/ui/ScrollFocus";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { WordReveal } from "@/components/ui/WordReveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/config/site";

export function LandingExperience() {
  const router = useRouter();
  const [phase, setPhase] = useState<"loading" | "ready">("loading");
  const [leaving, setLeaving] = useState(false);

  // No scrolling while the opening sequence plays.
  useEffect(() => {
    document.documentElement.style.overflow = phase === "loading" ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [phase]);

  const proceed = () => {
    setLeaving(true);
    window.setTimeout(() => router.push("/unlock"), 700);
  };

  return (
    <Stage>
      <AnimatePresence>
        {phase === "loading" && <Loader key="loader" lines={site.loader.lines} onDone={() => setPhase("ready")} />}
      </AnimatePresence>

      {phase === "ready" && (
        <>
          <ScrollProgress />
          <motion.main animate={{ opacity: leaving ? 0 : 1 }} transition={{ duration: 0.7 }}>
            <section className="relative flex min-h-[100dvh] flex-col items-center justify-center px-6 text-center">
              <WordReveal
                as="h1"
                inView={false}
                delay={0.3}
                stagger={0.09}
                text={site.hero}
                className="max-w-4xl font-serif text-5xl leading-[1.08] tracking-tight sm:text-7xl lg:text-8xl"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 1.2 }}
                className="absolute bottom-10 flex flex-col items-center gap-2 text-sm text-muted"
              >
                Scroll
                <ChevronDown className="h-4 w-4 animate-float" />
              </motion.div>
            </section>

            {site.intro.map((line, i) => (
              <ScrollFocus key={i}>
                <p className="mx-auto max-w-2xl text-balance font-serif text-3xl leading-snug sm:text-5xl">
                  {line}
                </p>
              </ScrollFocus>
            ))}

            <section className="flex min-h-[70vh] items-center justify-center px-6 pb-24">
              <Reveal>
                <MagneticButton onClick={proceed}>{site.continueLabel}</MagneticButton>
              </Reveal>
            </section>
          </motion.main>
        </>
      )}
    </Stage>
  );
}
