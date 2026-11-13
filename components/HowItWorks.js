'use client';

import { useRef } from 'react';
import { howItWorksData } from '../data/websiteData.js';
import {
  Section,
  SectionIntro,
  cn,
  useReducedMotion,
  useStepsReached,
} from './ui.js';

export default function HowItWorks() {
  const reducedMotion = useReducedMotion();
  const listRef = useRef(null);
  const reachedCount = useStepsReached(listRef, !reducedMotion);

  const { index, label, title, highlight, phases } = howItWorksData;

  return (
    <Section aria-labelledby="how-title">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionIntro
            id="how-title"
            index={index}
            label={label}
            title={title}
            highlight={highlight}
          />
        </div>

        <ol
          ref={listRef}
          className="relative flex flex-col gap-20 pl-10 sm:gap-28 sm:pl-14"
          style={{ '--p': reducedMotion ? 1 : 0 }}
        >
          <span
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-[7px] w-0.5 rounded-full bg-wash-2 sm:left-[11px]"
          />
          <span
            aria-hidden="true"
            className="absolute top-2 left-[7px] w-0.5 origin-top rounded-full bg-brand sm:left-[11px]"
            style={{
              height: 'calc(100% - 1rem)',
              transform: 'scaleY(var(--p))',
            }}
          />

          {phases.map((phase, idx) => {
            const isActive = reducedMotion || idx < reachedCount;
            return (
              <li key={phase.title} data-step="true" className="relative">
                <span
                  aria-hidden="true"
                  className={cn(
                    'absolute top-3 -left-10 size-4 rounded-full border-2 transition-colors duration-500 sm:-left-14 sm:size-6',
                    isActive
                      ? 'border-brand bg-brand shadow-[0_0_0_6px_var(--brand-soft)]'
                      : 'border-line-strong bg-canvas'
                  )}
                />
                <div
                  className={cn(
                    'transition-opacity duration-500',
                    isActive ? 'opacity-100' : 'opacity-35'
                  )}
                >
                  <p className="text-stat text-accent">{phase.when}</p>
                  <h3 className="mt-4 text-h3">{phase.title}</h3>
                  <p className="mt-3 max-w-[40ch] text-lead text-ink-2">{phase.body}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
