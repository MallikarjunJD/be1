import { redirect } from "next/navigation";
import { getMode } from "@/lib/auth";
import { FLOWS } from "@/lib/flows";
import { renderPage } from "@/components/pages/render";

export const dynamic = "force-dynamic";

/**
 * /journey/1, /journey/2 ... The cookie (not the URL) decides which
 * experience is rendered, and private content is only ever imported on the
 * server, so a public visitor never receives it.
 */
export default async function JourneyStepPage({ params }: { params: Promise<{ step: string }> }) {
  const { step } = await params;
  const mode = await getMode();
  if (!mode) redirect("/unlock");

  const flow = FLOWS[mode];
  const n = Number.parseInt(step, 10);
  if (!Number.isInteger(n) || n < 1 || n > flow.length) redirect("/journey/1");

  return renderPage(mode, flow[n - 1].kind);
}
