"use client";

import { Reveal } from "@/components/ui/Reveal";
import type { Quote } from "@/lib/types";

export function PullQuote({ quote }: { quote: Quote }) {
  return (
    <Reveal>
      <figure className="relative mx-auto my-24 max-w-3xl text-center">
        <span
          aria-hidden
          className="absolute -top-12 left-1/2 -translate-x-1/2 font-serif text-9xl leading-none text-accent/25"
        >
          “
        </span>
        <blockquote className="text-balance font-serif text-3xl italic leading-snug sm:text-5xl">
          {quote.text}
        </blockquote>
        {quote.attribution && (
          <figcaption className="mt-6 text-sm text-muted">{quote.attribution}</figcaption>
        )}
      </figure>
    </Reveal>
  );
}
