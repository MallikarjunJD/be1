"use client";

import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { NextUp } from "@/components/journey/NextUp";
import type { ObservationsContent } from "@/lib/types";

/**
 * Editorial layout, not cards: each group gets a sticky label on the left
 * and its observations run down the right, separated by hairlines.
 */
export function ObservationsPage({ content }: { content: ObservationsContent }) {
  return (
    <main className="mx-auto w-full max-w-5xl px-5 sm:px-8">
      <PageHeader header={content.header} />

      <div className="space-y-24">
        {content.groups.map((group) => (
          <section key={group.label} className="grid gap-8 md:grid-cols-[14rem_1fr] md:gap-14">
            <h2 className="self-start font-serif text-3xl italic text-accent md:sticky md:top-24">
              {group.label}
            </h2>
            <ul className="divide-y divide-ink/10">
              {group.items.map((item) => (
                <li key={item.title}>
                  <Reveal className="py-8 first:pt-0">
                    <h3 className="font-serif text-2xl leading-snug sm:text-3xl">{item.title}</h3>
                    <p className="mt-3 max-w-xl font-letter text-lg leading-[1.8] text-ink/80">{item.body}</p>
                  </Reveal>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <NextUp />
    </main>
  );
}
