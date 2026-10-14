import type { ReactNode } from "react";
import { Aurora } from "@/components/ui/Aurora";
import { Particles } from "@/components/ui/Particles";
import { cn } from "@/lib/utils";
import type { Mode } from "@/lib/types";

/**
 * The room every page lives in: themed background, drifting colour,
 * ambient dust and film grain. `theme` swaps the colour tokens.
 */
export function Stage({
  children,
  theme,
  className,
}: {
  children: ReactNode;
  theme?: Mode;
  className?: string;
}) {
  return (
    <div data-theme={theme} className={cn("relative isolate min-h-[100dvh] bg-bg text-ink", className)}>
      <Aurora />
      <Particles />
      <div aria-hidden className="grain-overlay" />
      {children}
    </div>
  );
}
