# Birthday experience

A words-first birthday website for one person. Next.js (App Router) + TypeScript + Tailwind + Framer Motion + Lucide.

## Run it

```bash
npm install
cp .env.example .env.local     # then edit both values
npm run dev                    # http://localhost:3000
```

Without `.env.local` the dev defaults are password `changeme` and a dev-only signing secret. Set real values before deploying.

## Deploy to Vercel

1. Push the folder to a Git repository and import it in Vercel.
2. Add two environment variables: `UNLOCK_PASSWORD` and `SESSION_SECRET` (`openssl rand -hex 32`).
3. Deploy. No other configuration is needed.

## How the two routes work

- `/` is the landing page (loader, typed intro, scroll story, **Continue**).
- `/unlock` is the password page. It always shows the same "Opening" animation, with no error state.
- `POST /api/unlock` checks the password and sets a signed, httpOnly cookie that means either "private" or "public". The response is identical either way.
- Every page lives at neutral URLs: `/journey/1`, `/journey/2`, ... The cookie decides which journey is rendered, so the address bar never reveals the branch.
- Private content (`fill-in/PRIVATE.ts`) is imported only on the server (`server-only`). A visitor on the public route never receives it.
- Passwords are case-insensitive and trimmed.
- The ending pages have a **Start over** button that clears the cookie, which is also handy for testing both routes.

## Where to edit things

| What | File |
| --- | --- |
| Names, landing page, password page, secret word | `fill-in/SHARED.ts` |
| Public pages' text and photos | `fill-in/PUBLIC.ts` |
| Private pages' text (including the letter) and photos | `fill-in/PRIVATE.ts` |
| Photo files | `photos/public/` and `photos/private/` |
| Page order and labels in each journey | `src/lib/flows.ts` |
| Colours (public and private themes) | `src/app/globals.css` |
| Fonts | `src/app/layout.tsx` |

Read `fill-in/START-HERE.md` first. Each line is `t("placeholder", "your words")`: type your words in the second slot. Empty means the placeholder stays.

### Adding photos

Put image files in `photos/public/` or `photos/private/` and write the file name in a slide: `src: pic("name.jpg")`. Slides without a photo render as typographic cards. Photos are served by `/api/photo/...`; private ones only reach someone on the private route.

## Structure

```
fill-in/       SHARED.ts, PUBLIC.ts, PRIVATE.ts: all the words (edit these)
photos/        public/ and private/ photo folders
src/
  app/
    page.tsx                  landing
    unlock/page.tsx           password page (the branching point)
    journey/
      layout.tsx              reads the cookie, applies theme, mounts the shell
      template.tsx            page-enter animation, lifts the transition curtain
      [step]/page.tsx         picks the page for this visitor's journey
    api/unlock, api/reset     set and clear the session cookie
  components/
    ui/        Aurora, Particles, Stage, Reveal, WordReveal, Typewriter,
               ScrollFocus, ScrollProgress, MagneticButton, Burst, ...
    journey/   JourneyProvider (navigation + curtain), JourneyShell, NextUp,
               Loader, LandingExperience
    pages/     one component per page, plus render.tsx (server-side picker)
  config/      site.ts (maps fill-in/SHARED.ts for the components)
  lib/         auth, flows, motion (shared easing + variants), types, utils
```

To add a page: add its kind to `PageKind` in `src/lib/types.ts`, add a step in `src/lib/flows.ts`, add its content type and data, build a component in `src/components/pages/`, and add a `case` in `render.tsx`.

## Design notes

- **Theme:** public is cool milk-glass with periwinkle; private is the same room with warmer light (blush, rose, butter). Not darker, just closer. Both are defined as colour tokens, so a re-colour is a few lines in `globals.css`.
- **Type:** Fraunces (soft, slightly quirky serif) for display, Figtree for interface text, Newsreader for long reading, Caveat for handwriting, JetBrains Mono only on the developer notes.
- **Motion:** one easing curve everywhere (`src/lib/motion.ts`). Reveals use opacity and a small lift only. Blur filters are avoided on wrappers because they disable the glass cards' backdrop blur. `prefers-reduced-motion` is respected.
- **Memorable moments:** the opening ring and typed line, the letter's sealed envelope, focus-reading mode in the letter, scroll-focused lines on the "never say" page, and the rolling credits.

## Privacy note

The password is a casual gate, not a vault. Private text is never sent to a public visitor, but do not put anything here you would be unhappy to have leaked if someone learned the password. Keep `.env.local` out of Git (it is already in `.gitignore`).
