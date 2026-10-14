# Fill-in guide

Everything you need to write is in three files inside this folder. You never
have to touch any other code.

| File | What it holds | Who sees it |
| --- | --- | --- |
| `SHARED.ts` | Her name, your name, landing page, password page, secret word | Everyone |
| `PUBLIC.ts` | The 5 public pages | Anyone who types a wrong password |
| `PRIVATE.ts` | The 8 private pages, including the long letter | Only her, with the right password |

Photos go in `photos/public/` and `photos/private/` (see `photos/README.txt`).

## How a line works

```ts
message: t(
  "[A final, warm sentence or two. Something that feels like the last page of a good short book.]",
  "",   // ✎
),
```

- The first text is the **current placeholder**. Leave it as your reference.
- Type **your words** inside the quotes of the second text.
- Leave the second text empty and the placeholder stays on the site.

Example after filling:

```ts
message: t(
  "[A final, warm sentence or two. Something that feels like the last page of a good short book.]",
  "Thank you for visiting a very small website made with a very big effort.",
),
```

## Suggested order

1. `SHARED.ts`: her name and yours first (they appear everywhere).
2. `PRIVATE.ts` pages in the order she will read them, ending with the letter.
3. `PUBLIC.ts`: keep it light. Nothing deeply personal.
4. Photos: copy files into the photo folders, then write the file names.

## Tips

- Search for `[` in a file to find placeholders you have not replaced yet.
- Long text over several lines: use backticks `` ` `` instead of quotes.
- A double quote inside your words needs a backslash: `"she said \"hi\""`.
- Want another paragraph, card, slide or line? Copy a block and paste it under itself.
- Preview any time with `npm run dev`, then open the site and enter the password
  (real password for private, anything else for public). The **Start over**
  button on each ending page lets you test the other route.

## Sending it back to me

If you would rather have me check or tidy the words, send me the filled
`SHARED.ts`, `PUBLIC.ts` and `PRIVATE.ts`. I can proofread, tighten, or help
with tone. The site already reads them directly, so no merging is needed.
