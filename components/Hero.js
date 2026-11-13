import { ArrowRight } from 'lucide-react';
import { ctaData, heroData } from '../data/websiteData.js';
import { ActionButton, AdVideo, Container, cn } from './ui.js';

const FAN_LAYOUT = [
  {
    visibility: 'hidden lg:block lg:w-[160px]',
    zIndex: 7,
    translateY: 104,
    rotate: -9.6,
    priority: false,
  },
  {
    visibility: 'hidden sm:block sm:w-[164px] lg:w-[186px]',
    zIndex: 8,
    translateY: 58,
    rotate: -6.4,
    priority: false,
  },
  {
    visibility: 'w-[138px] sm:w-[190px] lg:w-[214px]',
    zIndex: 9,
    translateY: 22,
    rotate: -3.2,
    priority: true,
  },
  {
    visibility: 'w-[168px] sm:w-[224px] lg:w-[252px]',
    zIndex: 10,
    translateY: 0,
    rotate: 0,
    priority: true,
  },
  {
    visibility: 'w-[138px] sm:w-[190px] lg:w-[214px]',
    zIndex: 9,
    translateY: 22,
    rotate: 3.2,
    priority: true,
  },
  {
    visibility: 'hidden sm:block sm:w-[164px] lg:w-[186px]',
    zIndex: 8,
    translateY: 58,
    rotate: 6.4,
    priority: false,
  },
  {
    visibility: 'hidden lg:block lg:w-[160px]',
    zIndex: 7,
    translateY: 104,
    rotate: 9.6,
    priority: false,
  },
];

export default function Hero({ bottomSlot }) {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="blueprint pointer-events-none absolute inset-0 [mask-image:radial-gradient(70%_60%_at_50%_0%,#000_30%,transparent_75%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-48 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-glow blur-[120px]"
      />

      <Container className="relative flex flex-col items-center pt-28 text-center sm:pt-32">
        <a
          href="#system"
          className="group inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 py-1.5 pr-3.5 pl-1.5 text-meta text-ink-2 backdrop-blur transition-colors hover:border-line-strong"
        >
          <span className="rounded-full bg-brand px-2 py-0.5 text-[11px] font-medium text-white">
            {heroData.badgeTag}
          </span>
          {heroData.badgeText}
          <ArrowRight
            className="size-3.5 text-subtle transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </a>

        <h1 id="hero-title" className="mt-8 max-w-[18ch] text-display text-balance">
          {heroData.headlinePrefix}
          <span className="font-serif font-normal tracking-[-0.02em] whitespace-nowrap text-accent italic pr-[0.04em] text-[1.06em]">
            {heroData.headlineHighlight}
          </span>
          {heroData.headlineSuffix}
        </h1>

        <p className="mt-7 max-w-[36rem] text-lead text-pretty text-ink-2">
          {heroData.supportingText}
        </p>

        <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <ActionButton href={ctaData.primary.href} showArrow>
            {ctaData.primary.label}
          </ActionButton>
          <ActionButton href={ctaData.secondary.href} variant="secondary">
            {ctaData.secondary.label}
          </ActionButton>
        </div>

        <div
          aria-label="Examples of ads produced by the system"
          role="group"
          className="mt-12 flex w-full items-start justify-center sm:mt-14"
        >
          {heroData.previews.map((ad, index) => {
            const fan = FAN_LAYOUT[index] || FAN_LAYOUT[3];
            return (
              <div
                key={ad.slug}
                className={cn('relative -mx-3 shrink-0 sm:-mx-4', fan.visibility)}
                style={{
                  zIndex: fan.zIndex,
                  transform: `translateY(${fan.translateY}px) rotate(${fan.rotate}deg)`,
                }}
              >
                <div className="transition-transform duration-500 ease-(--ease-out-soft) hover:-translate-y-2">
                  <AdVideo
                    ad={ad}
                    mode="inview"
                    priority={fan.priority}
                    className="rounded-[18px] shadow-[0_30px_60px_-24px_rgb(0_0_0/0.55)] ring-1 ring-line"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </Container>

      {bottomSlot}
    </section>
  );
}
