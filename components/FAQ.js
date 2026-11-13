'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import { faqData } from '../data/websiteData.js';
import { Reveal, Section, SectionIntro, cn } from './ui.js';

export default function FAQ() {
  const [openIndices, setOpenIndices] = useState({});
  const { index, label, title, promptPrefix, promptLinkLabel, promptLinkHref, items } =
    faqData;

  const toggleItem = (idx) => {
    setOpenIndices((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  return (
    <Section id="faq" aria-labelledby="faq-title">
      <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="flex flex-col gap-8 lg:sticky lg:top-28 lg:self-start">
          <SectionIntro id="faq-title" index={index} label={label} title={title} />

          <Reveal delay={80}>
            <p className="text-body text-muted">
              {promptPrefix}{' '}
              <a
                href={promptLinkHref}
                className="font-medium text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-accent"
              >
                {promptLinkLabel}
              </a>
              .
            </p>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <ul className="border-t border-line">
            {items.map((item, idx) => {
              const isOpen = Boolean(openIndices[idx]);
              return (
                <li key={item.question} className="border-b border-line">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${idx}`}
                    id={`faq-trigger-${idx}`}
                    onClick={() => toggleItem(idx)}
                    className="flex w-full cursor-pointer items-start justify-between gap-6 py-6 text-left text-h3 font-medium"
                  >
                    <span>{item.question}</span>
                    <Plus
                      className={cn(
                        'mt-1 size-5 shrink-0 transition-transform duration-300',
                        isOpen ? 'rotate-45 text-accent' : 'text-subtle'
                      )}
                      aria-hidden="true"
                    />
                  </button>
                  <div
                    id={`faq-panel-${idx}`}
                    role="region"
                    aria-labelledby={`faq-trigger-${idx}`}
                    hidden={!isOpen}
                  >
                    <p className="max-w-[62ch] pb-8 text-body text-ink-2">
                      {item.answer}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
