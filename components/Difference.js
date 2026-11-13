import { Check, Minus } from 'lucide-react';
import { differenceData } from '../data/websiteData.js';
import { Reveal, Section, SectionIntro } from './ui.js';

export default function Difference() {
  const { index, label, title, highlight, caption, columns, rows } = differenceData;

  return (
    <Section aria-labelledby="compare-title">
      <SectionIntro
        id="compare-title"
        index={index}
        label={label}
        title={title}
        highlight={highlight}
      />

      <Reveal
        delay={100}
        className="mt-16 hidden overflow-hidden rounded-3xl border border-line bg-surface md:block"
      >
        <table className="w-full border-collapse text-left">
          <caption className="sr-only">{caption}</caption>
          <thead>
            <tr className="border-b border-line">
              <th scope="col" className="w-[24%] px-7 py-6">
                <span className="sr-only">Topic</span>
              </th>
              <th scope="col" className="w-[32%] px-7 py-6 text-small font-medium text-muted">
                {columns.traditional}
              </th>
              <th
                scope="col"
                className="w-[44%] bg-brand-soft px-7 py-6 text-small font-semibold text-accent"
              >
                {columns.system}
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.topic} className="border-b border-line last:border-b-0">
                <th scope="row" className="px-7 py-5 text-small font-medium text-muted">
                  {row.topic}
                </th>
                <td className="px-7 py-5 text-body text-muted">
                  <span className="flex items-start gap-3">
                    <Minus className="mt-1.5 size-4 shrink-0 text-subtle" aria-hidden="true" />
                    {row.traditional}
                  </span>
                </td>
                <td className="bg-brand-soft px-7 py-5 text-body font-medium text-ink">
                  <span className="flex items-start gap-3">
                    <Check className="mt-1.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                    {row.system}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>

      <ul className="mt-12 flex flex-col gap-3 md:hidden">
        {rows.map((row) => (
          <li key={row.topic} className="rounded-2xl border border-line bg-surface p-5">
            <p className="text-meta font-medium text-muted">{row.topic}</p>
            <p className="mt-3 flex items-start gap-2.5 text-body font-medium">
              <Check className="mt-1.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              <span>
                <span className="sr-only">{columns.system}: </span>
                {row.system}
              </span>
            </p>
            <p className="mt-2 flex items-start gap-2.5 text-small text-muted">
              <Minus className="mt-1 size-4 shrink-0 text-subtle" aria-hidden="true" />
              <span>
                <span className="sr-only">{columns.traditional}: </span>
                {row.traditional}
              </span>
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
