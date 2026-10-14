import type { ReactNode } from "react";
import { publicContent } from "@fill-in/PUBLIC";
import { privateContent } from "@fill-in/PRIVATE";
import type { Mode, PageKind } from "@/lib/types";
import { ReportPage } from "@/components/pages/ReportPage";
import { TriviaPage } from "@/components/pages/TriviaPage";
import { PhotoShowcase } from "@/components/pages/PhotoShowcase";
import { WishPage } from "@/components/pages/WishPage";
import { FinalePage } from "@/components/pages/FinalePage";
import { WhyPage } from "@/components/pages/WhyPage";
import { ObservationsPage } from "@/components/pages/ObservationsPage";
import { DevNotesPage } from "@/components/pages/DevNotesPage";
import { LetterPage } from "@/components/pages/LetterPage";
import { UnsaidPage } from "@/components/pages/UnsaidPage";
import { CreditsPage } from "@/components/pages/CreditsPage";

/**
 * Server-side page picker. Because this runs on the server, the private
 * content module is never sent to a visitor who unlocked the public route.
 */
export function renderPage(mode: Mode, kind: PageKind): ReactNode {
  if (mode === "private") {
    const c = privateContent;
    switch (kind) {
      case "why":
        return <WhyPage content={c.why} />;
      case "report":
        return <ReportPage content={c.report} />;
      case "never-told":
        return <ObservationsPage content={c.neverTold} />;
      case "dev-notes":
        return <DevNotesPage content={c.devNotes} />;
      case "photos":
        return <PhotoShowcase content={c.photos} />;
      case "letter":
        return <LetterPage content={c.letter} />;
      case "unsaid":
        return <UnsaidPage content={c.unsaid} />;
      case "credits":
        return <CreditsPage content={c.credits} />;
      default:
        return null;
    }
  }

  const c = publicContent;
  switch (kind) {
    case "report":
      return <ReportPage content={c.report} />;
    case "trivia":
      return <TriviaPage content={c.trivia} />;
    case "photos":
      return <PhotoShowcase content={c.photos} />;
    case "wish":
      return <WishPage content={c.wish} />;
    case "finale":
      return <FinalePage content={c.finale} />;
    default:
      return null;
  }
}
