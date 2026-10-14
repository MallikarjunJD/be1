/**
 * ═══════════════════════════════════════════════════════════════════
 *  PUBLIC ROOT: everything visitors see when they enter a WRONG password
 * ═══════════════════════════════════════════════════════════════════
 *
 *  HOW TO FILL THIS IN
 *
 *  Every line of text on the site looks like this:
 *
 *      t(
 *        "[The placeholder that is on the site right now]",
 *        "",   // ✎  <- type YOUR words between these quotes
 *      ),
 *
 *   1. The FIRST text is the current placeholder. Leave it alone: it is
 *      your reference for what that spot is meant to say.
 *   2. Type your own words between the quotes of the SECOND text.
 *   3. Leave the second text as "" to keep the placeholder.
 *   4. Pages appear in the order the visitor sees them (see the banners).
 *
 *  TIPS
 *   - Apostrophes are fine: "I couldn't say it".
 *   - A double quote inside your words needs a backslash: "she said \"hi\"".
 *   - Long text over several lines: use backticks instead of quotes.
 *       `first paragraph...
 *       still the same paragraph`
 *   - Want more items (another paragraph, card, slide, bug, line)? Copy a
 *     whole { ... } or t( ... ), block and paste it right under itself.
 *     Want fewer? Delete the block.
 *   - Numbers (like level: 96), severity and tone are plain settings you
 *     can change directly. severity: low | medium | high | critical.
 *     tone: rose | lilac | peach | butter.
 *   - Names (her name, your name) are set once in fill-in/SHARED.ts.
 *
 *  PHOTOS: put image files in the folder  photos/public/  and write just
 *  the file name in  src: pic("first-trip.jpg"). Leave "" for a word card.
 *  Save the file and the website updates. No other code needs touching.
 */

import { site } from "@/config/site";
import type { PublicContent } from "@/lib/types";
import { t, picFor } from "@fill-in/helpers";

const pic = picFor("public");

export const publicContent: PublicContent = {
  // ══════════════════════════════════════════════════════════════════
  //  PAGE 1 · CHARACTER REPORT (funny, cute report card)
  // ══════════════════════════════════════════════════════════════════
  report: {
    header: {
      eyebrow: t(
        "Official document",
        "", // ✎
      ),
      headline: t(
        "Character report",
        "", // ✎
      ),
      subheading: t(
        "Compiled after years of careful observation. Accuracy: suspiciously high.",
        "", // ✎
      ),
    },
    docId: t(
      "Ref. BDAY-2026",
      "", // ✎
    ),
    title: t(
      `${site.herName}`,
      "", // ✎
    ),
    grade: {
      letter: t(
        "A+",
        "", // ✎
      ),
      label: t(
        "Overall",
        "", // ✎
      ),
    },
    identity: [
      {
        label: t(
          "Name",
          "", // ✎
        ),
        value: t(
          `${site.herName}`,
          "", // ✎
        ),
      },
      {
        label: t(
          "Occupation",
          "", // ✎
        ),
        value: t(
          "Final-year engineering student, professional overthinker",
          "", // ✎
        ),
      },
      {
        label: t(
          "Known as",
          "", // ✎
        ),
        value: t(
          "[Her nickname]",
          "Pekruuu", // ✎
        ),
      },
      {
        label: t(
          "Primary language",
          "", // ✎
        ),
        value: t(
          "Text messages. Long ones.",
          "", // ✎
        ),
      },
      {
        label: t(
          "Specialisation",
          "", // ✎
        ),
        value: t(
          "Doing everything properly",
          "", // ✎
        ),
      },
      {
        label: t(
          "Last seen",
          "", // ✎
        ),
        value: t(
          "Probably studying",
          "", // ✎
        ),
      },
    ],
    abilities: [
      {
        name: t(
          "Academic focus",
          "", // ✎
        ),
        level: 99.99,
        note: t(
          "Can ignore the entire world when a deadline is near.",
          "", // ✎
        ),
      },
      {
        name: t(
          "Fashion sense",
          "", // ✎
        ),
        level: 94,
        note: t(
          "Outfit decisions made with unsettling confidence.",
          "", // ✎
        ),
      },
      {
        name: t(
          "Overthinking",
          "", // ✎
        ),
        level: 99,
        note: t(
          "Runs fourteen scenarios before answering a simple question.",
          "", // ✎
        ),
      },
      {
        name: t(
          "Reliability",
          "", // ✎
        ),
        level: 98,
        note: t(
          "If she says she will, she does.",
          "", // ✎
        ),
      },
      {
        name: t(
          "Patience with me",
          "", // ✎
        ),
        level: 48,
        note: t(
          "Tested daily. Still holding.",
          "", // ✎
        ),
      },
    ],
    strengths: [
      t(
        "Ambition with a plan behind it",
        "", // ✎
      ),
      t(
        "Kind, even when tired",
        "", // ✎
      ),
      t(
        "Stylish without trying",
        "", // ✎
      ),
      t(
        "Remembers the small things",
        "", // ✎
      ),
      t(
        "Beauty with brains",
        "", // ✎
      ),
    ],
    weaknesses: [
      t(
        "Believes one more revision will fix it",
        "", // ✎
      ),
      t(
        "Says \"I'm fine\" with roughly 40% accuracy",
        "", // ✎
      ),
      t(
        "Accidentally turns small tasks into major projects",
        "", // ✎
      ),
      t(
        "Accidentally turns small tasks into major projects",
        "Sometimes declares war before gathering complete evidence", // ✎
      ),
    ],
    bugs: [
      {
        id: t(
          "BUG-001",
          "", // ✎
        ),
        title: t(
          "Replies \"ok\" when it is not ok",
          "", // ✎
        ),
        severity: "medium",
        status: t(
          "Under observation",
          "", // ✎
        ),
      },
      {
        id: t(
          "BUG-002",
          "", // ✎
        ),
        title: t(
          "Overthinks messages that were never a problem",
          "", // ✎
        ),
        severity: "high",
        status: t(
          "Known issue",
          "", // ✎
        ),
      },
      {
        id: t(
          "BUG-003",
          "", // ✎
        ),
        title: t(
          "Underestimates how good she is",
          "", // ✎
        ),
        severity: "critical",
        status: t(
          "Fixing, slowly",
          "", // ✎
        ),
      },
      {
        id: t(
          "BUG-004",
          "", // ✎
        ),
        title: t(
          "Cannot choose between two equally good outfits",
          "", // ✎
        ),
        severity: "low",
        status: t(
          "Won't fix",
          "", // ✎
        ),
      },
    ],
    status: {
      label: t(
        "Current status",
        "", // ✎
      ),
      message: t(
        "Thriving. Slightly tired. Completely on track.",
        "", // ✎
      ),
    },
    verdict: t(
      "Approved",
      "", // ✎
    ),
  },

  // ══════════════════════════════════════════════════════════════════
  //  PAGE 2 · THINGS YOU PROBABLY DON'T KNOW (flip cards)
  // ══════════════════════════════════════════════════════════════════
  trivia: {
    header: {
      eyebrow: t(
        "A short collection",
        "", // ✎
      ),
      headline: t(
        "Things you probably don't know",
        "", // ✎
      ),
      subheading: t(
        "Small, harmless facts. Tap a card to turn it over.",
        "", // ✎
      ),
    },
    cards: [
      {
        front: t(
          "Her unofficial superpower",
          "", // ✎
        ),
        back: t(
          "Making an ordinary Tuesday feel like it has a plot.",
          "Unlocking new levels of determination during exams", // ✎
        ),
      },
      {
        front: t(
          "A tiny habit worth noticing",
          "", // ✎
        ),
        back: t(
          "[A small, harmless habit only close friends would spot.]",
          "Worries about things that usually work out anyway", // ✎
        ),
      },
      {
        front: t(
          "What she would win a medal for",
          "", // ✎
        ),
        back: t(
          "[Something she is quietly, absurdly good at.]",
          "Listening to details most people miss", // ✎
        ),
      },
      {
        front: t(
          "The fastest way to make her smile",
          "", // ✎
        ),
        back: t(
          "[A tiny, specific thing: a song, a snack, a word.]",
          "Tell her she's overthinking again.", // ✎
        ),
      },
      {
        front: t(
          "Her most trusted opinion",
          "", // ✎
        ),
        back: t(
          "Some dreams are worth being stubborn about.",
          "", // ✎
        ),
      },
      {
        front: t(
          "If she had a warning label",
          "", // ✎
        ),
        back: t(
          "Handle with care. Contains strong taste in clothes.",
          "", // ✎
        ),
      },
    ],
    completeMessage: t(
      "That's all of them. There are more. But they are for me to know, and you to never find out.",
      "", // ✎
    ),
  },

  // ══════════════════════════════════════════════════════════════════
  //  PAGE 3 · PHOTO SHOWCASE (slideshow)
  //  Each slide: a caption, a small line under it, and an optional photo.
  // ══════════════════════════════════════════════════════════════════
  photos: {
    header: {
      eyebrow: t(
        "A few frames",
        "Photographic Proof", // ✎
      ),
      headline: t(
        "Moments, mostly in words",
        "Photos & Unnecessary Observations", // ✎
      ),
      subheading: t(
        "We never took many photos, so here is what we have.",
        "A few pictures, several opinions.", // ✎
      ),
    },
    slides: [
      {
        src: pic("bdaypic1.jpeg"), // ✎ photo file name, e.g. "first-trip.jpg"
        caption: t(
          "[A line from a message that made me laugh out loud]",
          "Achievement Unlocked.Successfully survived another year of being herself.", // ✎
        ),
        sub: t(
          "[Year] / [Where you were]",
          "Birthday, 2025", // ✎
        ),
        tone: "rose",
      },
      {
        src: pic("saree1.jpeg"), // ✎ photo file name, e.g. "first-trip.jpg"
        caption: t(
          "[A tiny moment from one of your trips]",
          "She says she doesn't want to wear sarees.The saree respectfully disagrees.", // ✎
        ),
        sub: t(
          "[Place]",
          "Traditional day, 2025", // ✎
        ),
        tone: "lilac",
      },
      {
        src: pic("Sunshine1.jpeg"), // ✎ photo file name, e.g. "first-trip.jpg"
        caption: t(
          "The sun tried its best. That's all I'm allowed to say.",
          "", // ✎
        ),
        sub: t(
          "Shining Brighter than the sun, 2025",
          "", // ✎
        ),
        tone: "peach",
      },
      {
        src: pic("pose1.jpeg"), // ✎ photo file name, e.g. "first-trip.jpg"
        caption: t(
          "Left the venue convinced it was her show.",
          "", // ✎
        ),
        sub: t(
          "[Detail]",
          "Dandiya, 2025", // ✎
        ),
        tone: "butter",
      },
      {
        src: pic("sitting1.jpeg"), // ✎ photo file name, e.g. "first-trip.jpg"
        caption: t(
          "[The first message of a very long conversation]",
          "Quietly sitting there like she doesn't own 37% of the cafe.", // ✎
        ),
        sub: t(
          "Rumours said that server felt near death",
          "", // ✎
        ),
        tone: "rose",
      },
      {
        src: pic("smile1.jpeg"), // ✎ photo file name, e.g. "first-trip.jpg"
        caption: t(
          "Looks harmless.Approach at your own risk.",
          "", // ✎
        ),
        sub: t(
          "Still texting",
          "", // ✎
        ),
        tone: "lilac",
      },
    ],
    closing: t(
      "Proof that good pictures deserve unnecessary commentary.",
      "", // ✎
    ),
  },

  // ══════════════════════════════════════════════════════════════════
  //  PAGE 4 · PUBLIC BIRTHDAY WISH
  // ══════════════════════════════════════════════════════════════════
  wish: {
    header: {
      eyebrow: t(
        "A birthday wish",
        "", // ✎
      ),
      headline: t(
        `Happy birthday, ${site.herName}`,
        "", // ✎
      ),
      subheading: t(
        "Short, because the long version is not for here.",
        "", // ✎
      ),
    },
    paragraphs: [
      t(
        "[Paragraph one: a warm, simple wish. What you hope this year brings her.]",
        "Happy Birthday. I hope this year brings you a little more confidence, a little less overthinking, and plenty of reasons to be proud of yourself. You work hard for the things that matter to you, and I genuinely hope life rewards that effort in ways even better than you expect.", // ✎
      ),
      t(
        "[Paragraph two: one thing you admire about how she works or how she treats people. Keep it light.]",
        "One thing I've always admired about you is how seriously you take the things you care about. Whether it's your goals, your studies, your friends, or your future, you always give your best effort. Not everyone notices that kind of consistency, but it is one of the things that makes you who you are.", // ✎
      ),
      t(
        "[Paragraph three: a small, funny line to finish on.]",
        "And remember, you're amazing just the way you are!. Anyway, enjoy the cake, enjoy the birthday, and please try not to spend the entire day planning the next five years. Just this once.", // ✎
      ),
    ],
    wishButton: t(
      "Make a wish",
      "", // ✎
    ),
    wishReveal: t(
      "Have a wonderful birthday. The future can wait until tomorrow. Today, your only task is to enjoy being celebrated.",
      "", // ✎
    ),
    signoff: t(
      `${site.yourName}`,
      "", // ✎
    ),
  },

  // ══════════════════════════════════════════════════════════════════
  //  PAGE 5 · ENDING PAGE (easter eggs live here)
  // ══════════════════════════════════════════════════════════════════
  finale: {
    header: {
      eyebrow: t(
        "The end",
        "", // ✎
      ),
      headline: t(
        "That's all, for now",
        "", // ✎
      ),
      subheading: t(
        "Thank you for visiting a very small website made with a very large amount of effort.",
        "", // ✎
      ),
    },
    message: t(
      "[A final, warm sentence or two. Something that feels like the last page of a good short book.]",
      "Thank you for being such an incredible person. I'm grateful to know you and to have been part of your journey. Here's to the next chapter!", // ✎
    ),
    easterEggs: [
      {
        label: t(
          "Do not press this",
          "", // ✎
        ),
        reveal: t(
          "I did say not to. Fine: you are exceptionally good at being you.",
          "", // ✎
        ),
      },
      {
        label: t(
          "Press this instead",
          "", // ✎
        ),
        reveal: t(
          "[A cute secret message or inside joke that is safe for anyone to read.]",
          "", // ✎
        ),
      },
    ],
    secretHint: t(
      "Psst. Try typing a certain dessert on your keyboard.",
      "", // ✎
    ),
    replayLabel: t(
      "Start over",
      "", // ✎
    ),
  },
};
