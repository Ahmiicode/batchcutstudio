import { statsData } from '../data/websiteData.js';
import { Container, cn } from './ui.js';

export function HeroStatsStrip() {
  return (
    <Container className="relative px-0 sm:px-0 lg:px-0">
      <dl className="relative z-20 -mt-24 grid grid-cols-2 gap-px overflow-hidden rounded-t-3xl border-x border-t border-line bg-line shadow-[0_-28px_48px_-28px_rgb(0_0_0/0.35)] sm:-mt-28 sm:grid-cols-3 lg:grid-cols-5">
        {statsData.metrics.map((metric) => (
          <div
            key={metric.label}
            className={cn(
              'flex flex-col gap-2 bg-canvas px-5 py-7 sm:px-8',
              metric.spanTwo && 'max-sm:col-span-2 sm:max-lg:col-span-2'
            )}
          >
            <dt className="order-2 text-small text-muted">{metric.label}</dt>
            <dd className="order-1 text-stat">{metric.value}</dd>
          </div>
        ))}
      </dl>
    </Container>
  );
}

export default function Stats() {
  const { deliveredSummary } = statsData;

  return (
    <section aria-label="Where we've delivered" className="band">
      <Container className="flex flex-col gap-8 py-14 lg:flex-row lg:items-center lg:gap-16">
        <p className="flex shrink-0 flex-col gap-1">
          <span className="text-figure">{deliveredSummary.figure}</span>
          <span className="text-body text-ink-2">{deliveredSummary.label}</span>
        </p>

        <ul className="flex flex-wrap gap-2">
          {deliveredSummary.clients.map((client) => (
            <li
              key={`${client.category}-${client.country}`}
              className="flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-small"
            >
              <span className="text-ink">{client.category}</span>
              <span aria-hidden="true" className="size-1 rounded-full bg-accent" />
              <span className="text-muted">{client.country}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
