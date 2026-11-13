import { ArrowRight, Handshake, ShieldCheck } from 'lucide-react';
import { capacityData } from '../data/websiteData.js';
import { HighlightedText, Reveal, Section } from './ui.js';

const NOTE_ICONS = {
  shield: ShieldCheck,
  handshake: Handshake,
};

export default function Capacity() {
  const { title, highlight, steps, notes } = capacityData;

  return (
    <Section tone="band" aria-labelledby="capacity-title">
      <Reveal delay={0}>
        <h2 id="capacity-title" className="max-w-[22ch] text-h2 text-balance">
          <HighlightedText text={title} highlight={highlight} />
        </h2>
      </Reveal>

      <Reveal delay={120}>
        <ol className="mt-16 grid gap-3 md:grid-cols-4">
          {steps.map((step, idx) => (
            <li
              key={step}
              className="relative flex items-center gap-4 rounded-3xl border border-line bg-surface p-6 md:flex-col md:items-start md:gap-10 md:p-7"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand text-small font-semibold text-white">
                {idx + 1}
              </span>
              <span className="text-h3">{step}</span>
              {idx < steps.length - 1 && (
                <ArrowRight
                  className="absolute top-1/2 -right-[18px] z-10 hidden size-5 -translate-y-1/2 text-accent md:block"
                  aria-hidden="true"
                />
              )}
            </li>
          ))}
        </ol>
      </Reveal>

      <div className="mt-14 grid gap-8 md:grid-cols-2 md:gap-16">
        {notes.map((note, idx) => {
          const IconComponent = NOTE_ICONS[note.icon] || ShieldCheck;
          return (
            <Reveal
              key={note.text}
              delay={(idx + 1) * 80}
              className="flex gap-4"
            >
              <IconComponent
                className="mt-1 size-6 shrink-0 text-accent"
                aria-hidden="true"
              />
              <p className="text-lead text-ink-2">{note.text}</p>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
