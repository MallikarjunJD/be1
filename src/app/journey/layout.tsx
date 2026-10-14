import type { ReactNode } from "react";
import { redirect } from "next/navigation";
import { Stage } from "@/components/ui/Stage";
import { JourneyShell } from "@/components/journey/JourneyShell";
import { getMode } from "@/lib/auth";
import { FLOWS } from "@/lib/flows";
import { site } from "@/config/site";

export const dynamic = "force-dynamic";

export default async function JourneyLayout({ children }: { children: ReactNode }) {
  const mode = await getMode();
  if (!mode) redirect("/unlock");

  const steps = FLOWS[mode].map(({ label, immersive }) => ({ label, immersive }));

  return (
    <Stage theme={mode}>
      <JourneyShell steps={steps} mark={site.mark}>
        {children}
      </JourneyShell>
    </Stage>
  );
}
