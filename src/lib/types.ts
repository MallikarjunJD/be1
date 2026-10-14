export type Mode = "public" | "private";

export type PageKind =
  | "report"
  | "trivia"
  | "photos"
  | "wish"
  | "finale"
  | "why"
  | "never-told"
  | "dev-notes"
  | "letter"
  | "unsaid"
  | "credits";

export interface FlowStep {
  kind: PageKind;
  /** Shown in the navigation and in the "up next" prompt. */
  label: string;
  /** Immersive pages hide the floating navigation. */
  immersive?: boolean;
}

/* ------------------------------ content ------------------------------ */

export interface Header {
  eyebrow: string;
  headline: string;
  subheading: string;
}

export interface Field {
  label: string;
  value: string;
}

export interface Quote {
  text: string;
  attribution?: string;
}

export interface Block {
  kicker?: string;
  title?: string;
  body: string;
}

export type Severity = "low" | "medium" | "high" | "critical";

export interface ReportContent {
  header: Header;
  docId: string;
  title: string;
  grade: { letter: string; label: string };
  identity: Field[];
  abilities: { name: string; level: number; note: string }[];
  strengths: string[];
  weaknesses: string[];
  bugs: { id: string; title: string; severity: Severity; status: string }[];
  status: { label: string; message: string };
  verdict: string;
}

export interface TriviaContent {
  header: Header;
  cards: { front: string; back: string }[];
  completeMessage: string;
}

export type SlideTone = "rose" | "lilac" | "peach" | "butter";

export interface PhotoContent {
  header: Header;
  slides: {
    /** Optional. Put files in /public/photos and use "/photos/name.jpg". */
    src?: string;
    caption: string;
    sub?: string;
    tone: SlideTone;
  }[];
  closing: string;
}

export interface WishContent {
  header: Header;
  paragraphs: string[];
  wishButton: string;
  wishReveal: string;
  signoff: string;
}

export interface FinaleContent {
  header: Header;
  message: string;
  easterEggs: { label: string; reveal: string }[];
  secretHint: string;
  replayLabel: string;
}

export interface WhyContent {
  header: Header;
  blocks: Block[];
  pullQuote: Quote;
}

export interface ObservationsContent {
  header: Header;
  groups: { label: string; items: { title: string; body: string }[] }[];
}

export interface DevNotesContent {
  header: Header;
  terminal: string[];
  project: Field[];
  knownBugs: { id: string; title: string; labels: string[]; status: string }[];
  futureUpdates: { version: string; items: { text: string; done: boolean }[] }[];
  dependencies: { name: string; version: string; note: string }[];
  importantUser: { handle: string; role: string; access: string; notes: string[] };
  releaseNotes: { version: string; date: string; notes: string[] }[];
}

export interface LetterContent {
  header: Header;
  sealLabel: string;
  salutation: string;
  paragraphs: string[];
  closing: string;
  signature: string;
  postscript?: string;
}

export interface UnsaidContent {
  header: Header;
  lines: string[];
  coda: string;
}

export interface CreditsContent {
  title: string;
  roles: { role: string; name: string }[];
  thanks: string[];
  endCard: string;
  replayLabel: string;
}

export interface PublicContent {
  report: ReportContent;
  trivia: TriviaContent;
  photos: PhotoContent;
  wish: WishContent;
  finale: FinaleContent;
}

export interface PrivateContent {
  why: WhyContent;
  report: ReportContent;
  neverTold: ObservationsContent;
  devNotes: DevNotesContent;
  photos: PhotoContent;
  letter: LetterContent;
  unsaid: UnsaidContent;
  credits: CreditsContent;
}
