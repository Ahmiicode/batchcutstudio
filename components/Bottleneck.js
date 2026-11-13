import { ArrowDown, RotateCcw } from 'lucide-react';
import { bottleneckData } from '../data/websiteData.js';
import { Reveal, Section, SectionIntro } from './ui.js';

export default function Bottleneck() {
  const { index, label, title, highlight, body, traditional, system } = bottleneckData;

  return (
    <Section aria-labelledby="bottleneck-title">
      <SectionIntro
        id="bottleneck-title"
        index={index}
        label={label}
        title={title}
        highlight={highlight}
        body={body}
      />

      <div className="mt-16 grid gap-4 md:grid-cols-2">
        <Reveal delay={0}>
          <div className="flex h-full flex-col rounded-3xl border border-line bg-surface p-7 sm:p-9">
            <h3 className="text-h3 text-muted">{traditional.title}</h3>
            <ol className="mt-7 flex flex-col gap-1.5">
              {traditional.steps.map((step) => (
                <li key={step} className="text-body text-ink-2">
                  {step}
                </li>
              ))}
            </ol>
            <ArrowDown className="mt-6 size-5 text-subtle" aria-hidden="true" />
            <p className="mt-4 text-figure text-muted">{traditional.result}</p>
            <p className="mt-3 flex items-center gap-2 text-body text-muted">
              <RotateCcw className="size-4 shrink-0" aria-hidden="true" />
              {traditional.footnote}
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="flex h-full flex-col rounded-3xl border border-brand/40 bg-brand-soft p-7 sm:p-9">
            <h3 className="text-h3 text-accent">{system.title}</h3>
            <ol className="mt-7 flex flex-col gap-1.5">
              {system.steps.map((step) => (
                <li key={step} className="text-body text-ink">
                  {step}
                </li>
              ))}
            </ol>
            <ArrowDown className="mt-6 size-5 text-accent" aria-hidden="true" />
            <p className="mt-4 text-figure text-ink">{system.result}</p>
            <p className="mt-3 flex items-center gap-2 text-body text-muted">
              {system.footnote}
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
