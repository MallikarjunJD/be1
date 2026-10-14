"use client";

import { useState, type ReactNode } from "react";
import { Check, Circle } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Typewriter } from "@/components/ui/Typewriter";
import { NextUp } from "@/components/journey/NextUp";
import { cn } from "@/lib/utils";
import type { DevNotesContent } from "@/lib/types";

function Window({ title, children, className }: { title: string; children: ReactNode; className?: string }) {
  return (
    <div className={cn("overflow-hidden rounded-2xl border border-ink/10 bg-white/70 shadow-glass backdrop-blur-xl", className)}>
      <div className="flex items-center gap-2 border-b border-ink/10 bg-white/50 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-accent2/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent3" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
        <span className="ml-3 font-mono text-xs text-muted">{title}</span>
      </div>
      <div className="p-5 sm:p-7">{children}</div>
    </div>
  );
}

function Terminal({ lines }: { lines: string[] }) {
  const [step, setStep] = useState(0);
  const isCommand = (l: string) => l.startsWith("$");
  return (
    <div className="min-h-[13rem] rounded-2xl bg-ink p-5 font-mono text-[13px] leading-relaxed text-bg shadow-glow sm:p-7">
      {lines.slice(0, step).map((l, i) => (
        <p key={i} className={isCommand(l) ? "text-accent3" : "text-bg/70"}>
          {l}
        </p>
      ))}
      {step < lines.length && (
        <p className={isCommand(lines[step]) ? "text-accent3" : "text-bg/70"}>
          <Typewriter
            key={step}
            text={lines[step]}
            speed={isCommand(lines[step]) ? 32 : 10}
            startDelay={step === 0 ? 700 : 250}
            onDone={() => setStep((s) => s + 1)}
          />
        </p>
      )}
    </div>
  );
}

export function DevNotesPage({ content }: { content: DevNotesContent }) {
  const user = content.importantUser;

  return (
    <main className="mx-auto w-full max-w-4xl px-5 sm:px-8">
      <PageHeader header={content.header} />

      <Reveal>
        <Terminal lines={content.terminal} />
      </Reveal>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <Reveal>
          <Window title="README.md" className="h-full">
            <dl className="space-y-4 font-mono text-sm">
              {content.project.map((f) => (
                <div key={f.label}>
                  <dt className="text-muted">{f.label}</dt>
                  <dd className="mt-0.5 text-base">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Window>
        </Reveal>

        <Reveal delay={0.1}>
          <Window title="users/important.json" className="h-full">
            <p className="font-mono text-sm text-muted">{user.handle}</p>
            <p className="mt-1 font-serif text-2xl">{user.role}</p>
            <p className="mt-4 inline-block rounded-md bg-accent/15 px-2.5 py-1 font-mono text-xs">
              access: {user.access}
            </p>
            <ul className="mt-5 space-y-2 text-sm leading-relaxed">
              {user.notes.map((n) => (
                <li key={n} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {n}
                </li>
              ))}
            </ul>
          </Window>
        </Reveal>
      </div>

      <Reveal className="mt-8">
        <Window title="issues / open">
          <ul className="divide-y divide-ink/10">
            {content.knownBugs.map((bug) => (
              <li key={bug.id} className="flex flex-wrap items-center gap-x-4 gap-y-2 py-4">
                <span className="font-mono text-xs text-muted">{bug.id}</span>
                <span className="min-w-0 flex-1 basis-64">{bug.title}</span>
                <span className="flex gap-1.5">
                  {bug.labels.map((l) => (
                    <span key={l} className="rounded-full bg-accent2/20 px-2.5 py-0.5 font-mono text-[11px]">
                      {l}
                    </span>
                  ))}
                </span>
                <span className="font-mono text-xs text-muted">{bug.status}</span>
              </li>
            ))}
          </ul>
        </Window>
      </Reveal>

      <Reveal className="mt-8">
        <Window title="ROADMAP.md">
          <div className="grid gap-8 sm:grid-cols-2">
            {content.futureUpdates.map((release) => (
              <div key={release.version}>
                <p className="font-mono text-sm text-accent">{release.version}</p>
                <ul className="mt-3 space-y-2.5">
                  {release.items.map((item) => (
                    <li key={item.text} className="flex items-start gap-3 text-sm">
                      {item.done ? (
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      ) : (
                        <Circle className="mt-0.5 h-4 w-4 shrink-0 text-ink/25" />
                      )}
                      <span className={cn(item.done && "text-muted line-through")}>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Window>
      </Reveal>

      <Reveal className="mt-8">
        <Window title="package.json / dependencies">
          <ul className="divide-y divide-ink/10 font-mono text-sm">
            {content.dependencies.map((d) => (
              <li key={d.name} className="grid grid-cols-[1fr_auto] gap-x-6 gap-y-1 py-3 sm:grid-cols-[12rem_7rem_1fr]">
                <span>{d.name}</span>
                <span className="text-muted">{d.version}</span>
                <span className="col-span-2 font-sans text-sm text-muted sm:col-span-1">{d.note}</span>
              </li>
            ))}
          </ul>
        </Window>
      </Reveal>

      <Reveal className="mt-8">
        <Window title="CHANGELOG.md">
          <ol className="relative space-y-8 border-l border-ink/15 pl-6">
            {content.releaseNotes.map((r) => (
              <li key={r.version} className="relative">
                <span className="absolute -left-[1.85rem] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
                <p className="font-mono text-sm">
                  {r.version} <span className="text-muted">{r.date}</span>
                </p>
                <ul className="mt-2 space-y-1 text-sm leading-relaxed text-ink/80">
                  {r.notes.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Window>
      </Reveal>

      <NextUp />
    </main>
  );
}
