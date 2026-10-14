"use client";

import { useState } from "react";
import { RotateCcw } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

/** Clears the session and returns to the very first screen. */
export function ReplayButton({ label = "Start over" }: { label?: string }) {
  const [busy, setBusy] = useState(false);

  const replay = async () => {
    setBusy(true);
    try {
      await fetch("/api/reset", { method: "POST" });
    } catch {
      /* ignore: we still go home */
    }
    window.location.assign("/");
  };

  return (
    <MagneticButton variant="ghost" onClick={replay} disabled={busy}>
      <RotateCcw className="h-4 w-4" />
      {label}
    </MagneticButton>
  );
}
