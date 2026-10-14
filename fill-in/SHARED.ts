/**
 * ═══════════════════════════════════════════════════════════════════
 *  SHARED ROOT: names, landing page and password page
 *  (seen by EVERYONE, before the route splits in two)
 * ═══════════════════════════════════════════════════════════════════
 *
 *  Same rule as the other files: t( "placeholder", "YOUR WORDS" ).
 *  Leave the second text "" to keep the current text.
 *
 *  Names are plain text (no t): just change the words inside the quotes.
 */
import { t } from "@fill-in/helpers";

const herName = "Seemuuu"; // ✎ her name, used all over the site
const yourName = "Mallii"; // ✎ your name, used in sign-offs and credits

export const shared = {
  herName,
  yourName,

  // ── Browser tab ─────────────────────────────────────────────────
  title: t("A normal birthday message felt too small", ""), // ✎
  description: t("A quiet corner of the internet, made for one person.", ""), // ✎

  // ── Small mark in the top-left corner of the journey ────────────
  mark: t(`for ${herName}`, ""), // ✎

  // ═══ LANDING PAGE ═══════════════════════════════════════════════
  // Opening loader: each text is typed out one after the other.
  loaderLines: [
    t("Hold on.", ""), // ✎
    t("Loading something I have been writing for a while.", ""), // ✎
  ],

  // The big centred sentence. Keep this one exactly as you described
  // if you like it, or change it.
  hero: t("This website exists because a normal birthday message felt too small.", ""), // ✎

  // The short introduction she scrolls through. Add or remove lines freely.
  intro: [
    t("Most of our story lives in text messages.", ""), // ✎
    t("Years of them. Good mornings, bad days, long rants, tiny updates nobody else would care about.", ""), // ✎
    t("There are not many photographs. There are not many dates.", ""), // ✎
    t("So I built this out of the one thing we have always had: words.", ""), // ✎
    t("Take your time. Nothing here is in a hurry.", ""), // ✎
  ],

  continueLabel: t("Continue", ""), // ✎ the button at the end of the landing page

  // ═══ PASSWORD PAGE ══════════════════════════════════════════════
  unlock: {
    headline: t("One small thing before we begin.", ""), // ✎
    subheading: t("Enter the password.", ""), // ✎
    hint: t("Something only the two of us would know.", ""), // ✎ shown if she taps "Need a hint?"
  },

  // ═══ SECRET ═════════════════════════════════════════════════════
  // Typing this word on the public ending page sets off a surprise.
  secretWord: "cake", // ✎ plain text, no t()
};
