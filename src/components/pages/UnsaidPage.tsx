"use client";

import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ScrollFocus } from "@/components/ui/ScrollFocus";
import { NextUp } from "@/components/journey/NextUp";
import type { UnsaidContent } from "@/lib/types";

/** One thought at a time. Each line sharpens into focus as you scroll to it. */
export function UnsaidPage({ content }: { content: UnsaidContent }) {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 sm:px-8">
      <PageHeader header={content.header} />

      <div className="mt-10">
        {content.lines.map((line, i) => (
          <ScrollFocus key={i} className="min-h-[65vh]">
            <p className="mx-auto max-w-3xl text-balance font-serif text-4xl leading-[1.2] sm:text-6xl">{line}</p>
          </ScrollFocus>
        ))}
      </div>

      <Reveal className="py-28 text-center">
        <p className="mx-auto max-w-md font-hand text-4xl leading-snug text-accent sm:text-5xl">{content.coda}</p>
      </Reveal>

      <NextUp />
    </main>
  );
}
