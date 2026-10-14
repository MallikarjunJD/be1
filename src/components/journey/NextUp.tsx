"use client";

import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { useJourney } from "@/components/journey/JourneyProvider";

/** Large end-of-page prompt that leads into the following page. */
export function NextUp() {
  const { steps, index, next } = useJourney();
  const upcoming = steps[index + 1];
  if (!upcoming) return null;

  return (
    <Reveal className="mx-auto mt-28 max-w-xl pb-44 text-center">
      <p className="text-sm text-muted">Next</p>
      <button onClick={next} className="group mt-3 inline-flex items-center gap-4 text-left">
        <span className="font-serif text-3xl leading-tight transition-colors group-hover:text-accent sm:text-4xl">
          {upcoming.label}
        </span>
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-ink text-bg transition-transform duration-500 group-hover:translate-x-1">
          <ArrowRight className="h-4 w-4" />
        </span>
      </button>
    </Reveal>
  );
}
