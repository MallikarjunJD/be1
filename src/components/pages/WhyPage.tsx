"use client";

import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { PullQuote } from "@/components/ui/PullQuote";
import { NextUp } from "@/components/journey/NextUp";
import type { WhyContent } from "@/lib/types";

export function WhyPage({ content }: { content: WhyContent }) {
  const mid = Math.ceil(content.blocks.length / 2);
  const first = content.blocks.slice(0, mid);
  const second = content.blocks.slice(mid);

  const renderBlock = (block: WhyContent["blocks"][number], key: string) => (
    <Reveal key={key} className="grid gap-3 py-10 md:grid-cols-[13rem_1fr] md:gap-10">
      <div>
        {block.kicker && <p className="text-sm text-accent">{block.kicker}</p>}
        {block.title && <h2 className="mt-1 font-serif text-2xl leading-snug md:text-3xl">{block.title}</h2>}
      </div>
      <p className="max-w-xl font-letter text-xl leading-[1.8]">{block.body}</p>
    </Reveal>
  );

  return (
    <main className="mx-auto w-full max-w-4xl px-5 sm:px-8">
      <PageHeader header={content.header} />
      <div className="divide-y divide-ink/10">{first.map((b, i) => renderBlock(b, `a${i}`))}</div>
      <PullQuote quote={content.pullQuote} />
      <div className="divide-y divide-ink/10">{second.map((b, i) => renderBlock(b, `b${i}`))}</div>
      <NextUp />
    </main>
  );
}
