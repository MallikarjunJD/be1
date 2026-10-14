"use client";

import { Reveal } from "@/components/ui/Reveal";
import { WordReveal } from "@/components/ui/WordReveal";
import { cn } from "@/lib/utils";
import type { Header } from "@/lib/types";

export function PageHeader({ header, align = "center" }: { header: Header; align?: "center" | "left" }) {
  return (
    <header
      className={cn(
        "mx-auto max-w-3xl pb-14 pt-28 sm:pt-36",
        align === "center" ? "text-center" : "text-left",
      )}
    >
      <Reveal>
        <p className="mb-4 text-sm font-medium text-accent">{header.eyebrow}</p>
      </Reveal>
      <WordReveal
        as="h1"
        inView={false}
        delay={0.15}
        text={header.headline}
        className="font-serif text-5xl leading-[1.04] tracking-tight sm:text-7xl"
      />
      <Reveal delay={0.6}>
        <p
          className={cn(
            "mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg",
            align === "center" && "mx-auto",
          )}
        >
          {header.subheading}
        </p>
      </Reveal>
    </header>
  );
}
