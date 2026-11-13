import { Check, X } from 'lucide-react';
import { whoItsForData } from '../data/websiteData.js';
import { Reveal, Section, SectionIntro } from './ui.js';

export default function WhoItsFor() {
  const { index, label, title, highlight, strongFit, notFit } = whoItsForData;

  return (
    <Section id="fit" tone="band" aria-labelledby="fit-title">
      <SectionIntro
        id="fit-title"
        index={index}
        label={label}
        title={title}
        highlight={highlight}
      />

      <div className="mt-16 grid gap-3 lg:grid-cols-[1.35fr_1fr]">
        <Reveal
          delay={0}
          className="flex flex-col gap-8 rounded-3xl border border-line bg-surface p-7 sm:p-10"
        >
          <h3 className="text-h3">{strongFit.title}</h3>
          <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {strongFit.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-body leading-snug text-ink"
              >
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand text-white">
                  <Check className="size-3" strokeWidth={3} aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 border-t border-line pt-6">
            <p className="text-meta font-medium text-muted">
              {strongFit.categoriesLabel}
            </p>
            <ul className="flex flex-wrap gap-2">
              {strongFit.categories.map((category) => (
                <li
                  key={category}
                  className="rounded-full border border-line px-3.5 py-1.5 text-small text-ink-2"
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal
          delay={100}
          className="flex flex-col gap-8 rounded-3xl border border-dashed border-line-strong p-7 sm:p-10"
        >
          <h3 className="text-h3 text-muted">{notFit.title}</h3>
          <ul className="flex flex-col gap-4">
            {notFit.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-body leading-snug text-muted"
              >
                <X
                  className="mt-0.5 size-4 shrink-0 text-subtle"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
