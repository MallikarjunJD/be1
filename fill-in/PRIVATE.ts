/**
 * ═══════════════════════════════════════════════════════════════════
 *  PRIVATE ROOT: everything SHE sees when she enters the RIGHT password
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
 *  PHOTOS: put image files in the folder  photos/private/  and write just
 *  the file name in  src: pic("first-trip.jpg"). Leave "" for a word card.
 *  Private photos are only served to someone on the private route.
 *  Save the file and the website updates. No other code needs touching.
 */

import "server-only";
import { site } from "@/config/site";
import type { PrivateContent } from "@/lib/types";
import { t, picFor } from "@fill-in/helpers";

const pic = picFor("private");

export const privateContent: PrivateContent = {
  // ══════════════════════════════════════════════════════════════════
  //  PAGE 1 · WHY THIS WEBSITE EXISTS
  // ══════════════════════════════════════════════════════════════════
  why: {
    header: {
      eyebrow: t(
        "The real version",
        "", // ✎
      ),
      headline: t(
        "Why this website exists",
        "", // ✎
      ),
      subheading: t(
        "You got the long answer because you earned it.",
        "", // ✎
      ),
    },
    blocks: [
      {
        kicker: t(
          "The short answer",
          "", // ✎
        ),
        title: t(
          "A message was not enough",
          "", // ✎
        ),
        body: t(
          "[Explain, in your own voice, why a normal birthday text felt too small. What were you trying to say that does not fit in one message?]",
          "You deserve much more than this, but right now, all I can offer is effort, time, trust, and This website is simply a small attempt to show what one message never could", // ✎
        ),
      },
      {
        kicker: t(
          "What we have",
          "", // ✎
        ),
        title: t(
          "Years of ordinary days",
          "", // ✎
        ),
        body: t(
          "[Describe what your daily texting actually is. Not the grand version: the real, small, everyday one. What does a normal day of messages look like?]",
          "Mostly random updates, future plans, complaints about life, and reminding each other to stop overthinking. Nothing extraordinary, yet somehow part of every day.", // ✎
        ),
      },
      {
        kicker: t(
          "What we don't have",
          "", // ✎
        ),
        title: t(
          "Photographs",
          "", // ✎
        ),
        body: t(
          "[Be honest that there are very few photos and very few dates, and why that has never made it feel like less.]",
          "Its our speciality that we don't have many photos or memorable dates. Most of our story exists in conversations, and somehow that has always felt like enough.", // ✎
        ),
      },
      {
        kicker: t(
          "What I wanted",
          "", // ✎
        ),
        title: t(
          "To be somewhere safe",
          "", // ✎
        ),
        body: t(
          "[What you hoped to be for her: a place where she can say anything without being judged. Say how you try to do that.]",
          "A place where you never had to filter your thoughts, explain your feelings, or worry about being judged. Just a place where you could be completely yourself.", // ✎
        ),
      },
      {
        kicker: t(
          "What this is",
          "", // ✎
        ),
        title: t(
          "An appreciation, not a speech",
          "", // ✎
        ),
        body: t(
          "[Make it clear this is a record of how much she matters, not a big confession.]",
          "This is not a speech, but a simple acknowledgment of how much she means to me.", // ✎
        ),
      },
    ],
    pullQuote: {
      text: t(
        "[One sentence that sums up the whole website.]",
        "A small website for someone who takes up a very large space in my life.", // ✎
      ),
      attribution: t(
        `${site.yourName}`,
        "", // ✎
      ),
    },
  },

  // ══════════════════════════════════════════════════════════════════
  //  PAGE 2 · CHARACTER REPORT (private, honest, roasting)
  // ══════════════════════════════════════════════════════════════════
  report: {
    header: {
      eyebrow: t(
        "Classified edition",
        "", // ✎
      ),
      headline: t(
        "The full report",
        "", // ✎
      ),
      subheading: t(
        "The public version was the press release. This one is the truth.",
        "", // ✎
      ),
    },
    docId: t(
      "Ref. BDAY-2026 / restricted",
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
        "Plus extra credit",
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
          "Saved in my phone as",
          "", // ✎
        ),
        value: t(
          "Medam, Devi, She, Seemuuu, Sunshine, and a few others",
          "", // ✎
        ),
      },
      {
        label: t(
          "Occupation",
          "", // ✎
        ),
        value: t(
          "Engineer in progress. Serious about it. and also a professional overthinker.",
          "", // ✎
        ),
      },
      {
        label: t(
          "Known for",
          "", // ✎
        ),
        value: t(
          "[A thing only you would write here]",
          "Loaylty, Beauty and Trust", // ✎
        ),
      },
      {
        label: t(
          "Threat to my productivity",
          "", // ✎
        ),
        value: t(
          "Severe, but I allow it",
          "", // ✎
        ),
      },
      {
        label: t(
          "Clearance level",
          "", // ✎
        ),
        value: t(
          "Full. Always.",
          "", // ✎
        ),
      },
    ],
    abilities: [
      {
        name: t(
          "Ambition",
          "", // ✎
        ),
        level: 99,
        note: t(
          "[A specific moment where her ambition showed.]",
          "A level of maturity and Standards", // ✎
        ),
      },
      {
        name: t(
          "Noticing outfits that work",
          "", // ✎
        ),
        level: 90,
        note: t(
          "[A roast-with-love about her fashion.]",
          "Has a keen eye for what makes her look good.", // ✎
        ),
      },
      {
        name: t(
          "Overthinking",
          "", // ✎
        ),
        level: 100,
        note: t(
          "[A real example. Be kind, be funny, be accurate.]",
          "Preapre heavily for the company which are not worthy for", // ✎
        ),
      },
      {
        name: t(
          "Making me feel understood",
          "", // ✎
        ),
        level: 80,
        note: t(
          "[A time she did it without trying.]",
          "I almost feel A Mirror person of me in offosit gender ", // ✎
        ),
      },
      {
        name: t(
          "Hiding when she is stressed",
          "", // ✎
        ),
        level: 40,
        note: t(
          "[A tell only you have learned to read.]",
          "Ok antira but Ok iralla , silent iddagle gott agutte eno ide anta", // ✎
        ),
      },
    ],
    strengths: [
      t(
        "[A strength you respect most]",
        "Standard", // ✎
      ),
      t(
        "[A strength nobody gives her credit for]",
        "Loyalty", // ✎
      ),
      t(
        "[A strength that shows up in hard weeks]",
        "Not Giving up", // ✎
      ),
      t(
        "[A strength that is just very her]",
        "Hard Minded", // ✎
      ),
    ],
    weaknesses: [
      t(
        "[A weakness you can tease her about]",
        "Overthinking", // ✎
      ),
      t(
        "[A habit you would never change, despite the complaints]",
        "Ignoring useless things", // ✎
      ),
      t(
        "[Something she is too hard on herself about]",
        "Not meeting her own standards", // ✎
      ),
    ],
    bugs: [
      {
        id: t(
          "BUG-101",
          "", // ✎
        ),
        title: t(
          "[A thing she does that makes you laugh every time]",
          "Ignoring me", // ✎
        ),
        severity: "low",
        status: t(
          "Adored",
          "", // ✎
        ),
      },
      {
        id: t(
          "BUG-102",
          "", // ✎
        ),
        title: t(
          "[A thing she overthinks that you want to fix]",
          "Her tendency to overanalyze situations", // ✎
        ),
        severity: "high",
        status: t(
          "Working on reassurance",
          "", // ✎
        ),
      },
      {
        id: t(
          "BUG-103",
          "", // ✎
        ),
        title: t(
          "[A thing she says she is fine about]",
          "Her self-deprecating comments", // ✎
        ),
        severity: "medium",
        status: t(
          "Not convinced",
          "", // ✎
        ),
      },
      {
        id: t(
          "BUG-104",
          "", // ✎
        ),
        title: t(
          "Does not realise how much she is worth",
          "", // ✎
        ),
        severity: "critical",
        status: t(
          "Open since 2019",
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
        "Thriving, but still a work in progress, Future updates are planned, but the current version is stable and loved.",
        "", // ✎
      ),
    },
    verdict: t(
      "Irreplaceable",
      "", // ✎
    ),
  },

  // ══════════════════════════════════════════════════════════════════
  //  PAGE 3 · THINGS I NEVER TOLD YOU
  // ══════════════════════════════════════════════════════════════════
  neverTold: {
    header: {
      eyebrow: t(
        "Collected over time",
        "", // ✎
      ),
      headline: t(
        "Things I never told you",
        "", // ✎
      ),
      subheading: t(
        "Not the grand things. The small, quiet ones that I noticed anyway.",
        "", // ✎
      ),
    },
    groups: [
      {
        label: t(
          "Things I noticed",
          "", // ✎
        ),
        items: [
          {
            title: t(
              "I am so lucky that you are straight forward while in texting. ",
              "", // ✎
            ),
            body: t(
              "[What you noticed, when you first noticed it, and why it stuck with you.]",
              "The first thing I noticed was how seriously you take the things that matter to you. I noticed it years ago, and somehow every year since has only given me more examples.Hanganta feelings na hange bidalla nan jote antu big 00 ", // ✎
            ),
          },
          {
            title: t(
              "Do You how u changed from 2019 to 2026?",
              "", // ✎
            ),
            body: t(
              "[Describe how she has grown, in specifics.]",
              "Modlu confidence annod irlilla focused goal irlilla sir jote jagla aadre saybeku anta nitidri nanginna nenpu vand status ittu adralli alo symbol ittidri video li glass na kai inda jajjiddu so see now avr iddru aytu illa andru aytu nimmashtakke niv idira and thats my dream confident idira swag idira vatnall bere level idira", // ✎
            ),
          },
          {
            title: t(
              "Niv Happy iddira anta nang hege gott aagutte gotta?",
              "", // ✎
            ),
            body: t(
              "[A moment you could tell, even through a screen.]",
              "I could tell when you were happy. The replies were quicker, the messages were longer, and for a little while, the overthinking took the day off. illa andre hmm ok no excitement", // ✎
            ),
          },
        ],
      },
      {
        label: t(
          "Things I respected",
          "", // ✎
        ),
        items: [
          {
            title: t(
              "[How she handles pressure]",
              "Pressure antu nimna nodi nan kalkobek", // ✎
            ),
            body: t(
              "[A time she impressed you with her discipline or resolve.]",
              "Exam ge munche prepare agtira, Ellanu think madi scenario itkotira Pressure iro moments ee baralla yakandre niv think madi itkondirtira", // ✎
            ),
          },
          {
            title: t(
              "[How she treats people]",
              "How you treat people", // ✎
            ),
            body: t(
              "[A specific act of kindness you saw or heard about.]",
              "Monne Rapido davn mele niv nanna baididr mele torsutte and freinds na hoglo vaga nu gott agutte and also ME too ", // ✎
            ),
          },
        ],
      },
      {
        label: t(
          "Things I admired",
          "", // ✎
        ),
        items: [
          {
            title: t(
              "[Her standards]",
              "Nim standards", // ✎
            ),
            body: t(
              "[What it is like to watch someone refuse to settle for less than their best.]",
              "Ri nim standard nange ishta heltira hange irlebeku forign trip madlebek anta aa reeti standards irbeku, nim taste nim sense nim mindset thats why i am big fan", // ✎
            ),
          },
          {
            title: t(
              "[Her taste]",
              "Nim taste", // ✎
            ),
            body: t(
              "[Something about her style or choices that you quietly admire.]",
              "Yeahh your test... Taste and evrything irodella nodi nale barvn esht lucky antini really too greate", // ✎
            ),
          },
        ],
      },
      {
        label: t(
          "Things I worried about",
          "", // ✎
        ),
        items: [
          {
            title: t(
              "",
              "About sir", // ✎
            ),
            body: t(
              "[What you were afraid of, and what you hoped she knew.]",
              "Im afraid ri in this topic, idrondrinda niv hegadru horag banni vand varshadalli full bittu nimna nive love madkolak kaliri and live the best version of ur life", // ✎
            ),
          },
          {
            title: t(
              "[How hard she is on herself]",
              "Vammomme nim mele tumba bhara hakoltira", // ✎
            ),
            body: t(
              "[What you wish she could see from the outside.]",
              "Niv tilkondasht heavy en iralla sumne niv jaasti tale kedskond chinte madtira. Vande dinadalli enu sadya agalla adke tale kedskobedi ene aagli just follow my script thats it", // ✎
            ),
          },
        ],
      },
      {
        label: t(
          "Things I never expressed properly",
          "", // ✎
        ),
        items: [
          {
            title: t(
              "[Something you are grateful for]",
              "Same mindset iro Hudgi atleast friend agi sigodu punya ", // ✎
            ),
            body: t(
              "[Say it plainly, the way you could not at the time.]",
              "Nija ri Mindset irovr jote iddre 50% geddange and im greatefull to have u greatfull that you text everyday greatefull that You listen ", // ✎
            ),
          },
          {
            title: t(
              "[Something you are sorry you did not say sooner]",
              "Sorry i didnt say this sooner", // ✎
            ),
            body: t(
              "[Keep it honest and gentle.]",
              "I Love your loyalty ri,niv attraction ide ashte anta but adonde iddidre nan ishtu importance kodtirlilla there are a lot things i admire and want those in my partner THAT is the attraction i have ri not the physical attraction", // ✎
            ),
          },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════
  //  PAGE 4 · DEVELOPER NOTES (fake engineer project page)
  // ══════════════════════════════════════════════════════════════════
  devNotes: {
    header: {
      eyebrow: t(
        "Internal use only",
        "", // ✎
      ),
      headline: t(
        "Developer notes",
        "", // ✎
      ),
      subheading: t(
        "Technical documentation for a project nobody asked me to maintain, and which I will maintain forever.",
        "", // ✎
      ),
    },
    terminal: [
      t(
        "$ git clone friendship.git",
        "", // ✎
      ),
      t(
        "Cloning into 'us'... done.",
        "", // ✎
      ),
      t(
        "$ npm install trust --save",
        "", // ✎
      ),
      t(
        "added 1 package, audited 4,380 messages, found 0 vulnerabilities",
        "", // ✎
      ),
      t(
        "$ npm run build",
        "", // ✎
      ),
      t(
        "✓ Compiled successfully in 7 years",
        "", // ✎
      ),
    ],
    project: [
      {
        label: t(
          "Project name",
          "Peak Friendship", // ✎
        ),
        value: t(
          `${site.herName} (v21.0.0)`,
          "", // ✎
        ),
      },
      {
        label: t(
          "Version",
          "", // ✎
        ),
        value: t(
          "v21.0.0 (stable)",
          "", // ✎
        ),
      },
      {
        label: t(
          "Build time",
          "", // ✎
        ),
        value: t(
          "7 years, one message at a time",
          "", // ✎
        ),
      },
      {
        label: t(
          "Status",
          "", // ✎
        ),
        value: t(
          "Stable. Occasionally overthinks.",
          "", // ✎
        ),
      },
      {
        label: t(
          "Maintainer",
          "", // ✎
        ),
        value: t(
          `${site.yourName}`,
          "", // ✎
        ),
      },
      {
        label: t(
          "License",
          "", // ✎
        ),
        value: t(
          "Unlimited. Non-transferable.",
          "", // ✎
        ),
      },
    ],
    knownBugs: [
      {
        id: t(
          "#001",
          "", // ✎
        ),
        title: t(
          "User says \"I'm fine\" while clearly not fine",
          "", // ✎
        ),
        labels: [
          t(
            "recurring",
            "", // ✎
          ),
          t(
            "priority",
            "", // ✎
          ),
        ],
        status: t(
          "open",
          "", // ✎
        ),
      },
      {
        id: t(
          "#002",
          "", // ✎
        ),
        title: t(
          "Overthinking loop: while(true) with no exit condition",
          "", // ✎
        ),
        labels: [
          t(
            "performance",
            "", // ✎
          ),
        ],
        status: t(
          "mitigated by reassurance",
          "", // ✎
        ),
      },
      {
        id: t(
          "#003",
          "", // ✎
        ),
        title: t(
          "Does not accept compliments gracefully",
          "", // ✎
        ),
        labels: [
          t(
            "wontfix",
            "", // ✎
          ),
        ],
        status: t(
          "will keep trying",
          "", // ✎
        ),
      },
      {
        id: t(
          "#004",
          "", // ✎
        ),
        title: t(
          "[A funny, harmless, very-her bug]",
          "", // ✎
        ),
        labels: [
          t(
            "cosmetic",
            "", // ✎
          ),
        ],
        status: t(
          "adored",
          "", // ✎
        ),
      },
    ],
    futureUpdates: [
      {
        version: t(
          "v22.0",
          "", // ✎
        ),
        items: [
          {
            text: t(
              "More trips, in person",
              "", // ✎
            ),
            done: false,
          },
          {
            text: t(
              "Less overthinking",
              "", // ✎
            ),
            done: false,
          },
          {
            text: t(
              "A Well deserved JOB",
              "", // ✎
            ),
            done: false,
          },
        ],
      },
      {
        version: t(
          "Already shipped",
          "", // ✎
        ),
        items: [
          {
            text: t(
              "Survived another year of engineering",
              "", // ✎
            ),
            done: true,
          },
          {
            text: t(
              "VAO exam cleared",
              "", // ✎
            ),
            done: true,
          },
        ],
      },
    ],
    dependencies: [
      {
        name: t(
          "patience",
          "", // ✎
        ),
        version: t(
          "^∞",
          "", // ✎
        ),
        note: t(
          "Required by both parties.",
          "", // ✎
        ),
      },
      {
        name: t(
          "daily-texts",
          "", // ✎
        ),
        version: t(
          "4380+",
          "", // ✎
        ),
        note: t(
          "Do not remove.",
          "", // ✎
        ),
      },
      {
        name: t(
          "honesty",
          "", // ✎
        ),
        version: t(
          "latest",
          "", // ✎
        ),
        note: t(
          "Peer dependency of everything else.",
          "", // ✎
        ),
      },
      {
        name: t(
          "good-morning-message",
          "", // ✎
        ),
        version: t(
          "1.0.0",
          "", // ✎
        ),
        note: t(
          "Sharing BMW photos in instagram and GOODMORNING devi messeges",
          "", // ✎
        ),
      },
      {
        name: t(
          "[inside-joke]",
          "Anger Hotfix", // ✎
        ),
        version: t(
          "0.0.1",
          "", // ✎
        ),
        note: t(
          "[Explain it in four words.]",
          "Temporary bugs, mostly harmless", // ✎
        ),
      },
    ],
    importantUser: {
      handle: t(
        `@${site.herName.toLowerCase().replace(/\s+/g, "")}`,
        "", // ✎
      ),
      role: t(
        "Primary user. Sole admin.",
        "", // ✎
      ),
      access: t(
        "root",
        "", // ✎
      ),
      notes: [
        t(
          "Can request support at any hour.",
          "", // ✎
        ),
        t(
          "Never needs to explain herself twice.",
          "", // ✎
        ),
        t(
          "[A permission or exception that is unique to her.]",
          "You always take the mature decisions", // ✎
        ),
      ],
    },
    releaseNotes: [
      {
        version: t(
          "v1.0.0",
          "", // ✎
        ),
        date: t(
          "2019",
          "", // ✎
        ),
        notes: [
          t(
            "Initial commit: high school.",
            "", // ✎
          ),
          t(
            "First message sent. Nobody knew what it would become.",
            "", // ✎
          ),
        ],
      },
      {
        version: t(
          "v[n].0.0",
          "", // ✎
        ),
        date: t(
          "2020",
          "", // ✎
        ),
        notes: [
          t(
            "[A turning point in your friendship.]",
            "Slowly you started trusting me", // ✎
          ),
          t(
            "Daily texting becomes a dependency.",
            "", // ✎
          ),
        ],
      },
      {
        version: t(
          "v[n].0.0",
          "", // ✎
        ),
        date: t(
          "2025",
          "", // ✎
        ),
        notes: [
          t(
            "First trip in person.",
            "", // ✎
          ),
          t(
            "Adre full heavy bhaya padtidde innu adke jaasti matadlilla chanage spend madlilla but iga nodidre anta time sigalla ala",
            "", // ✎
          ),
        ],
      },
      {
        version: t(
          "v21.0.0",
          "", // ✎
        ),
        date: t(
          "Today",
          "", // ✎
        ),
        notes: [
          t(
            "Birthday patch.",
            "", // ✎
          ),
          t(
            "This website. No breaking changes.",
            "", // ✎
          ),
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════
  //  PAGE 5 · PHOTO SHOWCASE (private, more meaningful)
  // ══════════════════════════════════════════════════════════════════
  photos: {
    header: {
      eyebrow: t(
        "A few frames",
        "", // ✎
      ),
      headline: t(
        "What we kept",
        "Your Beauty my commentings", // ✎
      ),
      subheading: t(
        "Not photos. But these ones matter.",
        "Lets explore what makes them special", // ✎
      ),
    },
    slides: [
      {
        src: pic("bday26.jpeg"), // ✎ photo file name, e.g. "first-trip.jpg"
        caption: t(
          "[The first trip: one line about it]",
          "Proof that beauty survives every update.", // ✎
        ),
        sub: t(
          "[Place] / [Year]",
          "Even the haircut buffed the stats.", // ✎
        ),
        tone: "rose",
      },
      {
        src: pic("closeup.jpeg"), // ✎ photo file name, e.g. "first-trip.jpg"
        caption: t(
          "[A message you saved that she does not know about]",
          "Proof that some people can win a photo with absolutely no effort.", // ✎
        ),
        sub: t(
          "[Roughly when]",
          "Camera understood assignment.", // ✎
        ),
        tone: "lilac",
      },
      {
        src: pic("night.jpg"), // ✎ photo file name, e.g. "first-trip.jpg"
        caption: t(
          "[Something she said that changed how you saw things]",
          "Cuteness successfully carried across multiple versions.", // ✎
        ),
        sub: t(
          "[Context]",
          "Cuteness overloading now", // ✎
        ),
        tone: "peach",
      },
      {
        src: pic("redsaree.jpeg"), // ✎ photo file name, e.g. "first-trip.jpg"
        caption: t(
          "If this gallery had a winner, we'd already know.",
          "", // ✎
        ),
        sub: t(
          "[Keep it gentle]",
          "Best Face card photo", // ✎
        ),
        tone: "butter",
      },
      {
        src: pic("smile2.jpeg"), // ✎ photo file name, e.g. "first-trip.jpg"
        caption: t(
          "Current favorite smile.Current favorite pose.",
          "", // ✎
        ),
        sub: t(
          "[Place] / [Year]",
          "Need this frame in my room", // ✎
        ),
        tone: "rose",
      },
      {
        src: pic("bluesaree.jpeg"), // ✎ photo file name, e.g. "first-trip.jpg"
        caption: t(
          "[A line about what comes next]",
          "My personal favorite.No further comments.The evidence speaks for itself.", // ✎
        ),
        sub: t(
          "Together, or just texting",
          "Nothing beats u in beauty", // ✎
        ),
        tone: "lilac",
      },
    ],
    closing: t(
      "If you've made it this far, you've reached the part I spent the most time thinking about.",
      "", // ✎
    ),
  },

  // ══════════════════════════════════════════════════════════════════
  //  PAGE 6 · THE LONG LETTER (the centrepiece)
  //  Each text in paragraphs[] is one paragraph. Add as many as you like.
  // ══════════════════════════════════════════════════════════════════
  letter: {
    header: {
      eyebrow: t(
        "The letter",
        "", // ✎
      ),
      headline: t(
        "For you, when you are ready",
        "", // ✎
      ),
      subheading: t(
        "Find somewhere quiet. This one is long.",
        "", // ✎
      ),
    },
    sealLabel: t(
      "Open when you're ready",
      "", // ✎
    ),
    salutation: t(
      `Dear ${site.herName},`,
      "", // ✎
    ),
    paragraphs: [
      t(
        "[Paragraph 1. Begin simply. Say why you are writing this, and why now. Set the tone: warm, unhurried, honest.]",
        "Happy Birthday. A normal message felt too small, and an expensive gift felt impossible, so I decided to give you something I could afford instead: my effort, my time, and a few words I've wanted to say for a while. After all this If i just make u smile for some seconds then my effort will be worth it.", // ✎
      ),
      t(
        "[Paragraph 2. The beginning: high school, the first messages, who you both were then. One specific memory.]",
        "High school li nim jote matadbek connect agbek anta dodd sahasa madide group madi nimna join madsi alli msg crazy ala,but avaga reject madtiri anta 100% sure ittu adke eng lu isht close freinds agirtiv anta ankodirlilla nan.Looking back, it's funny how something so ordinary ended up becoming such an important part of my life. ", // ✎
      ),
      t(
        "[Paragraph 3. The texting: what it means to hear from her every single day. What the consistency has given you.]",
        "Isht duura bandmele iga en anstide andre nim dauly story kelodu special ansod hogi just normal anstide adke nan kodo bes compliment ade. Your messages became such a regular part of my life that it's hard to imagine a day without them.", // ✎
      ),
      t(
        "[Paragraph 4. What you have learned from her: ambition, discipline, how she shows up. Be specific.]",
        "Nimminda nan en kalte andre a lot ri. Literally Iam the best version of myself now becuase of You u changed my mindset my boundaries my vision actually ri really greatefull to have you my side. Admiration, Standards , The thinking big and you become the main reason that i hate being not improving myself towrds the best ", // ✎
      ),
      t(
        "[Paragraph 5. The hard times: moments she trusted you, and what that trust means to you. Say thank you plainly.]",
        "Nimge baala hardest moments bandvu inna en madbeku albeku nagbeko anno moments lu niv nanna trust madi share madkolok choose madidri and I thank god so much for that. Thank you for that trust, and thank you for letting me be part of your life, even during the chapters that weren't easy.", // ✎
      ),
      t(
        "[Paragraph 6. What you hope for her: her goals, her future, how you want to be part of it.]",
        "I hope the future is kind to you. I hope you achieve the goals you talk about, the life you've imagined, and the success you've worked for. And selfishly, I hope I get to be part of that future too, because building it together has always sounded like a pretty good plan.I genuinely hope life lets us keep building that future together, one step at a time.", // ✎
      ),
      t(
        "[Paragraph 7. What you want her to remember: she is safe, free, and not judged. Say it in your own words.]",
        "I hope you always remember this: you never have to pretend around me. Whether life is going great or completely falling apart, you'll always have a place where you can be yourself, say what's on your mind, and know you're being heard, not judged.Thats my ultimate goal for you.", // ✎
      ),
    ],
    closing: t(
      "[A closing line. Not dramatic. Just true.]",
      "Happy Birthday. I'm really glad that somewhere between all those messages, you became one of the most important people in my life.", // ✎
    ),
    signature: t(
      `${site.yourName}`,
      "", // ✎
    ),
    postscript: t(
      "P.S. [One small, funny line, so the page ends with a smile.]",
      "P.S. You matter to me more than most things I'm usually willing to admit.", // ✎
    ),
  },

  // ══════════════════════════════════════════════════════════════════
  //  PAGE 7 · THINGS I WILL PROBABLY NEVER SAY DIRECTLY
  //  Each line gets a whole screen to itself. Keep lines short and true.
  // ══════════════════════════════════════════════════════════════════
  unsaid: {
    header: {
      eyebrow: t(
        "Last page of the real stuff",
        "", // ✎
      ),
      headline: t(
        "Things I will probably never say directly",
        "", // ✎
      ),
      subheading: t(
        "Which is why I am writing them here.",
        "", // ✎
      ),
    },
    lines: [
      t(
        "[A sentence you find hard to say out loud.]",
        "I don't think you realize how often I find myself being proud of you.", // ✎
      ),
      t(
        "[Something you are scared she does not know.]",
        "You matter to me far more than I usually know how to put into words.", // ✎
      ),
      t(
        "[What she changed in you, in one sentence.]",
        "You taught me that being there for someone is often more important than having the right answer.", // ✎
      ),
      t(
        "[A thing you promise, quietly.]",
        "No matter how busy life gets, you'll always have someone willing to listen.", // ✎
      ),
      t(
        "[What you are proud of her for.]",
        "For continuing to move forward, even during the years when moving forward wasn't easy.", // ✎
      ),
      t(
        "[A thing you hope she never doubts.]",
        "That there are people who genuinely believe in you, even on the days when you don't", // ✎
      ),
    ],
    coda: t(
      "[A final handwritten-style line, short and warm.]",
      "Some conversations are supposed to end.I'm glad ours didn't.", // ✎
    ),
  },

  // ══════════════════════════════════════════════════════════════════
  //  PAGE 8 · FINAL ENDING (rolling credits)
  // ══════════════════════════════════════════════════════════════════
  credits: {
    title: t(
      "Credits",
      "Credits", // ✎
    ),
    roles: [
      {
        role: t(
          "Written by",
          "", // ✎
        ),
        name: t(
          `${site.yourName}`,
          "", // ✎
        ),
      },
      {
        role: t(
          "Inspired by",
          "", // ✎
        ),
        name: t(
          `${site.herName}`,
          "", // ✎
        ),
      },
      {
        role: t(
          "Starring",
          "", // ✎
        ),
        name: t(
          `${site.herName}, as herself`,
          "", // ✎
        ),
      },
      {
        role: t(
          "Supporting cast",
          "", // ✎
        ),
        name: t(
          "Every late-night text",
          "", // ✎
        ),
      },
      {
        role: t(
          "Technical consultant",
          "", // ✎
        ),
        name: t(
          "[A recurring joke]",
          "Chief Overthinking Officer", // ✎
        ),
      },
      {
        role: t(
          "Moral support",
          "", // ✎
        ),
        name: t(
          "[Something small: tea, a playlist, a snack]",
          "Late Night Playlists", // ✎
        ),
      },
      {
        role: t(
          "Based on a true story",
          "", // ✎
        ),
        name: t(
          "2019 to now",
          "", // ✎
        ),
      },
    ],
    thanks: [
      t(
        "Thank you for all the years, all the conversations, and all the ordinary days that somehow became important.",
        "", // ✎
      ),
      t(
        "Thank you for trusting me with your thoughts, your worries, and the parts of your life that mattered.",
        "", // ✎
      ),
      t(
        "No sequel announced. The story just keeps going.",
        "", // ✎
      ),
    ],
    endCard: t(
      "Thank you for reading all of it.",
      "Thank you for making it worth writing.", // ✎
    ),
    replayLabel: t(
      "Start over",
      "Restart Experience", // ✎
    ),
  },
};
