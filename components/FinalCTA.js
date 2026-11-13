import { CalendarDays } from 'lucide-react';
import { finalCtaData } from '../data/websiteData.js';
import { ActionButton, Container, Reveal, Section } from './ui.js';

export default function FinalCTA() {
  const {
    eyebrow,
    titlePrefix,
    titleHighlight,
    body,
    ctaLabel,
    ctaHref,
    note,
    booking,
  } = finalCtaData;

  return (
    <>
      <section aria-labelledby="final-cta-title" className="band relative overflow-hidden">
        <div
          aria-hidden="true"
          className="blueprint pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_70%_at_50%_50%,#000_20%,transparent_75%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[-220px] left-1/2 h-[440px] w-[820px] -translate-x-1/2 rounded-full bg-glow blur-[110px]"
        />

        <Container className="relative py-28 sm:py-40">
          <Reveal
            delay={0}
            className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center"
          >
            <p className="text-meta font-medium text-accent">{eyebrow}</p>

            <h2 id="final-cta-title" className="max-w-[16ch] text-display text-balance">
              {titlePrefix}
              <span className="font-serif font-normal tracking-[-0.02em] whitespace-nowrap text-accent italic text-[1.05em]">
                {titleHighlight}
              </span>
            </h2>

            <p className="max-w-[46ch] text-lead text-pretty text-ink-2">{body}</p>

            <ActionButton href={ctaHref} showArrow className="mt-2 w-full sm:w-auto">
              {ctaLabel}
            </ActionButton>

            <p className="text-small text-muted">{note}</p>
          </Reveal>
        </Container>
      </section>

      <Section id="book" innerClassName="py-20 sm:py-24" aria-labelledby="book-title">
        <Reveal delay={0} className="overflow-hidden rounded-3xl border border-line bg-surface">
          <div className="flex flex-col gap-2 border-b border-line px-6 py-6 sm:flex-row sm:items-end sm:justify-between sm:px-10 sm:py-8">
            <h2 id="book-title" className="text-h3 sm:text-[1.875rem]">
              {booking.title}
            </h2>
            <p className="text-small text-muted sm:max-w-sm sm:text-right">
              {booking.subtitle}
            </p>
          </div>

          <div className="grid min-h-[420px] place-items-center px-6 py-16 text-center sm:min-h-[560px]">
            <div className="flex max-w-sm flex-col items-center gap-4">
              <span className="grid size-14 place-items-center rounded-2xl bg-brand-soft text-accent">
                <CalendarDays className="size-6" aria-hidden="true" />
              </span>
              <p className="text-body font-medium">{booking.placeholderTitle}</p>
              <p className="text-small text-muted">{booking.placeholderSubtitle}</p>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
