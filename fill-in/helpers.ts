/**
 * You never need to edit this file.
 *
 * t(placeholder, words)
 *   Shows YOUR words if you typed any, otherwise keeps the placeholder.
 *
 * picFor(route)(fileName)
 *   Turns a photo file name into the address the site serves it from.
 *   Empty file name means "no photo", and the slide stays a word card.
 */
export const t = (placeholder: string, words = ""): string => words.trim() || placeholder;

export const picFor =
  (route: "public" | "private") =>
  (file = ""): string | undefined => {
    const name = file.trim();
    return name ? `/api/photo/${route}/${encodeURIComponent(name)}` : undefined;
  };
