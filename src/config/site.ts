import { shared } from "@fill-in/SHARED";

/**
 * Global settings. The words live in /fill-in/SHARED.ts. This file only
 * maps them into the shape the components use. You should not need to
 * edit it.
 */
export const site = {
  title: shared.title,
  description: shared.description,
  herName: shared.herName,
  yourName: shared.yourName,
  mark: shared.mark,
  passwordHint: shared.unlock.hint,
  unlock: shared.unlock,
  secretWord: shared.secretWord,
  loader: { lines: shared.loaderLines },
  hero: shared.hero,
  intro: shared.intro,
  continueLabel: shared.continueLabel,
};
