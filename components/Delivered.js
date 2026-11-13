import { MapPin } from 'lucide-react';
import { deliveredData } from '../data/websiteData.js';
import { Reveal, Section, SectionIntro } from './ui.js';

export default function Delivered() {
  const { index, label, title, highlight, results, totalCard } = deliveredData;

  return (
    <Section tone="band" aria-labelledby="results-title">
      <SectionIntro
        id="results-title"
        index={index}
        label={label}
        title={title}
        highlight={highlight}
      />

      <ul className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {results.map((item, idx) => (
          <Reveal
            as="li"
            key={`${item.product}-${item.country}`}
            delay={(idx % 4) * 70}
            className="flex flex-col rounded-3xl border border-line bg-surface p-7"
          >
            <h3 className="text-h3 lg:min-h-[2.6em]">{item.product}</h3>
            <p className="mt-2 flex items-center gap-1.5 text-small text-muted">
              <MapPin className="size-4" aria-hidden="true" />
              {item.country}
            </p>
            <p className="mt-10 text-figure">{item.figure}</p>
            <p className="mt-2 text-body text-ink-2">{item.unit}</p>
            <p className="mt-6 border-t border-line pt-5 text-small text-muted">
              {item.detail}
            </p>
          </Reveal>
        ))}

        <Reveal
          as="li"
          delay={210}
          className="flex flex-col justify-end rounded-3xl bg-brand p-7 text-white sm:col-span-2"
        >
          <p className="text-figure">{totalCard.figure}</p>
          <p className="mt-2 text-body text-white/85">{totalCard.label}</p>
        </Reveal>
      </ul>
    </Section>
  );
}
