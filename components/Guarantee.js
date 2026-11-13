import { RefreshCw } from 'lucide-react';
import { guaranteeData } from '../data/websiteData.js';
import { Reveal, Section } from './ui.js';

export default function Guarantee() {
  const { sealText, figure, label, title, body, revisionNote } = guaranteeData;

  return (
    <Section aria-labelledby="guarantee-title">
      <Reveal
        delay={0}
        className="flex flex-col items-start gap-10 rounded-3xl border border-line bg-surface p-8 sm:p-12 md:flex-row md:items-center md:gap-14 lg:p-16"
      >
        <div
          aria-hidden="true"
          className="relative grid size-44 shrink-0 place-items-center sm:size-52"
        >
          <svg viewBox="0 0 200 200" className="absolute inset-0 animate-spin-slow">
            <defs>
              <path
                id="seal-circle"
                d="M100,100 m-82,0 a82,82 0 1,1 164,0 a82,82 0 1,1 -164,0"
              />
            </defs>
            <text className="fill-muted font-mono text-[10.5px] tracking-[0.12em] uppercase">
              <textPath href="#seal-circle">{sealText}</textPath>
            </text>
          </svg>
          <div className="grid size-28 place-items-center rounded-full bg-brand text-white shadow-[0_20px_50px_-15px_rgb(109_40_217/0.7)] sm:size-32">
            <span className="text-5xl font-semibold tracking-[-0.06em]">{figure}</span>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <p className="text-meta font-medium text-accent">{label}</p>
          <h2 id="guarantee-title" className="max-w-[20ch] text-h2 text-balance">
            {title}
          </h2>
          <p className="max-w-[56ch] text-lead text-ink-2">{body}</p>
          <p className="flex items-center gap-2.5 text-small text-muted">
            <RefreshCw className="size-4 text-accent" aria-hidden="true" />
            {revisionNote}
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
