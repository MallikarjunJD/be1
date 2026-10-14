import type { FlowStep, Mode } from "@/lib/types";

/**
 * The two journeys. Both are served from the same neutral URLs
 * (/journey/1, /journey/2 ...) so nothing in the address bar gives the
 * branching away. Edit labels or reorder pages here.
 */
export const FLOWS: Record<Mode, FlowStep[]> = {
  public: [
    { kind: "report", label: "The report" },
    { kind: "trivia", label: "Things you probably don't know" },
    { kind: "photos", label: "A few frames" },
    { kind: "wish", label: "A birthday wish" },
    { kind: "finale", label: "The end, almost" },
  ],
  private: [
    { kind: "why", label: "Why this exists" },
    { kind: "report", label: "The full report" },
    { kind: "never-told", label: "Things I never told you" },
    { kind: "dev-notes", label: "Developer notes" },
    { kind: "photos", label: "A few frames" },
    { kind: "letter", label: "The letter", immersive: true },
    { kind: "unsaid", label: "What I will probably never say", immersive: true },
    { kind: "credits", label: "Credits", immersive: true },
  ],
};
