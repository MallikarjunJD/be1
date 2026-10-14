"use client";

import { motion } from "framer-motion";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { NextUp } from "@/components/journey/NextUp";
import { cn } from "@/lib/utils";
import { ease } from "@/lib/motion";
import type { ReportContent, Severity } from "@/lib/types";

const severityStyle: Record<Severity, string> = {
  low: "bg-accent2/20 text-ink",
  medium: "bg-accent3/50 text-ink",
  high: "bg-accent/20 text-ink",
  critical: "bg-accent text-white",
};

function SectionTitle({ children }: { children: string }) {
  return <h3 className="mb-5 font-serif text-2xl">{children}</h3>;
}

export function ReportPage({ content }: { content: ReportContent }) {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 sm:px-8">
      <PageHeader header={content.header} />

      <Reveal>
        <GlassCard className="relative overflow-hidden p-6 sm:p-12">
          <div aria-hidden className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

          <div className="relative flex items-start justify-between gap-6 border-b border-ink/10 pb-8">
            <div>
              <p className="text-sm text-muted">{content.docId}</p>
              <h2 className="mt-2 font-serif text-4xl sm:text-5xl">{content.title}</h2>
            </div>
            <div className="shrink-0 text-center">
              <div className="grid h-20 w-20 place-items-center rounded-full border border-accent/40 font-serif text-4xl text-accent">
                {content.grade.letter}
              </div>
              <p className="mt-2 text-xs text-muted">{content.grade.label}</p>
            </div>
          </div>

          <dl className="relative grid gap-x-10 gap-y-6 border-b border-ink/10 py-8 sm:grid-cols-2">
            {content.identity.map((field) => (
              <div key={field.label}>
                <dt className="text-sm text-muted">{field.label}</dt>
                <dd className="mt-1 text-lg">{field.value}</dd>
              </div>
            ))}
          </dl>

          <section className="relative border-b border-ink/10 py-8">
            <SectionTitle>Abilities</SectionTitle>
            <ul className="space-y-6">
              {content.abilities.map((a, i) => (
                <li key={a.name}>
                  <div className="mb-2 flex items-baseline justify-between gap-4">
                    <span className="font-medium">{a.name}</span>
                    <span className="text-sm tabular-nums text-muted">{a.level}%</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-ink/10">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-accent to-accent2"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${a.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.3, ease, delay: i * 0.08 }}
                    />
                  </div>
                  <p className="mt-2 text-sm text-muted">{a.note}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="relative grid gap-10 border-b border-ink/10 py-8 sm:grid-cols-2">
            <div>
              <SectionTitle>Strengths</SectionTitle>
              <ul className="flex flex-wrap gap-2">
                {content.strengths.map((s) => (
                  <li key={s} className="rounded-full bg-accent/10 px-4 py-2 text-sm">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionTitle>Weaknesses</SectionTitle>
              <ul className="flex flex-wrap gap-2">
                {content.weaknesses.map((w) => (
                  <li key={w} className="rounded-full border border-dashed border-ink/25 px-4 py-2 text-sm">
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="relative border-b border-ink/10 py-8">
            <SectionTitle>Bug reports</SectionTitle>
            <ul className="divide-y divide-ink/10">
              {content.bugs.map((bug) => (
                <li key={bug.id} className="flex flex-wrap items-center gap-x-4 gap-y-2 py-4">
                  <span className="font-mono text-xs text-muted">{bug.id}</span>
                  <span className="min-w-0 flex-1 basis-60">{bug.title}</span>
                  <span className={cn("rounded-full px-3 py-1 text-xs font-medium", severityStyle[bug.severity])}>
                    {bug.severity}
                  </span>
                  <span className="text-sm text-muted">{bug.status}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="relative flex flex-wrap items-end justify-between gap-8 pt-8">
            <div className="max-w-sm">
              <p className="text-sm text-muted">{content.status.label}</p>
              <p className="mt-2 flex items-start gap-3 text-lg">
                <span className="relative mt-2.5 flex h-2.5 w-2.5 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
                </span>
                {content.status.message}
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 1.6, rotate: -14 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -6 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease, delay: 0.3 }}
              className="rounded-xl border-2 border-accent px-6 py-3 font-serif text-3xl italic text-accent"
            >
              {content.verdict}
            </motion.div>
          </section>
        </GlassCard>
      </Reveal>

      <NextUp />
    </main>
  );
}
