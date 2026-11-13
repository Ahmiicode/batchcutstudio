import { Check, FileText, LineChart, ListOrdered } from 'lucide-react';
import { whatYouGetData } from '../data/websiteData.js';
import { AdVideo, Reveal, Section, SectionIntro, cn } from './ui.js';

const FEATURE_ICONS = {
  'file-text': FileText,
  'list-ordered': ListOrdered,
  'chart-line': LineChart,
};

export default function WhatYouGet() {
  const {
    index,
    label,
    title,
    highlight,
    featuredCard,
    strategyCard,
    pipelineStats,
    personasCard,
    formatsCard,
    featureCards,
  } = whatYouGetData;

  return (
    <Section id="deliverables" tone="band" aria-labelledby="deliverables-title">
      <SectionIntro
        id="deliverables-title"
        index={index}
        label={label}
        title={title}
        highlight={highlight}
      />

      <ul className="mt-16 grid gap-3 md:grid-cols-2 lg:grid-cols-6">
        <Reveal
          as="li"
          delay={0}
          className="relative overflow-hidden rounded-3xl border border-line bg-surface p-7 sm:p-8 flex min-h-[460px] flex-col justify-between gap-10 pb-0 sm:pb-0 md:col-span-2 lg:col-span-4 lg:row-span-2"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:gap-8">
            <p className="text-figure text-accent sm:text-[7rem]">{featuredCard.figure}</p>
            <div className="flex max-w-md flex-col gap-2">
              <h3 className="text-h3">{featuredCard.title}</h3>
              <p className="text-body text-muted">{featuredCard.description}</p>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="-mx-2 flex items-end justify-center gap-3 sm:gap-4"
          >
            {featuredCard.previews.map((ad, idx) => (
              <div
                key={ad.slug}
                className={cn(
                  'w-1/5 max-w-[150px]',
                  idx % 2 === 0 ? 'translate-y-12' : 'translate-y-6'
                )}
              >
                <AdVideo
                  ad={ad}
                  mode="hover"
                  className="rounded-t-2xl rounded-b-none"
                />
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal
          as="li"
          delay={60}
          className="relative overflow-hidden rounded-3xl border border-line bg-surface p-7 sm:p-8 lg:col-span-2"
        >
          <h3 className="text-h3">{strategyCard.title}</h3>
          <ul className="mt-5 flex flex-col gap-3">
            {strategyCard.items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-body text-ink-2">
                <Check className="mt-1.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal
          as="li"
          delay={120}
          className="relative overflow-hidden rounded-3xl border border-line bg-surface p-0 sm:p-0 lg:col-span-2"
        >
          <dl className="grid h-full grid-cols-3 divide-x divide-line lg:grid-cols-1 lg:divide-x-0 lg:divide-y">
            {pipelineStats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col justify-center gap-2 px-4 py-6 sm:px-8"
              >
                <dt className="order-2 text-small text-muted">{stat.label}</dt>
                <dd className="order-1 text-stat whitespace-nowrap">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal
          as="li"
          delay={60}
          className="relative overflow-hidden rounded-3xl border border-line bg-surface p-7 sm:p-8 flex flex-col justify-between gap-8 lg:col-span-3"
        >
          <div className="flex -space-x-3">
            {personasCard.avatars.map((avatar) => (
              <span
                key={avatar.slug}
                className="relative size-12 overflow-hidden rounded-full ring-[3px] ring-wash"
              >
                <img
                  src={avatar.poster}
                  alt={avatar.alt}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover object-[50%_22%]"
                />
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-h3">{personasCard.title}</h3>
            <p className="text-body text-muted">{personasCard.description}</p>
          </div>
        </Reveal>

        <Reveal
          as="li"
          delay={120}
          className="relative overflow-hidden rounded-3xl border border-line bg-surface p-7 sm:p-8 flex flex-col gap-5 lg:col-span-3"
        >
          <h3 className="text-h3">{formatsCard.title}</h3>
          <ul className="flex flex-wrap gap-2">
            {formatsCard.formats.map((format) => (
              <li
                key={format}
                className="rounded-full bg-wash-2 px-3.5 py-1.5 text-small text-ink-2"
              >
                {format}
              </li>
            ))}
          </ul>
        </Reveal>

        {featureCards.map((card, idx) => {
          const IconComponent = FEATURE_ICONS[card.icon] || FileText;
          return (
            <Reveal
              as="li"
              key={card.title}
              delay={idx * 60}
              className={cn(
                'relative overflow-hidden rounded-3xl border border-line bg-surface p-7 sm:p-8 flex flex-col gap-3 lg:col-span-2',
                card.spanMd && 'md:col-span-2'
              )}
            >
              <span className="mb-2 grid size-11 place-items-center rounded-xl bg-brand-soft text-accent">
                <IconComponent className="size-5" aria-hidden="true" />
              </span>
              <h3 className="text-h3">{card.title}</h3>
              <p className="text-body text-muted">{card.description}</p>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}
