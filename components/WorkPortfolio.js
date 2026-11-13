'use client';

import { useEffect, useState } from 'react';
import { Info, X } from 'lucide-react';
import { portfolioCategories, portfolioSectionData } from '../data/portfolioData.js';
import { AdVideo, Reveal, Section, SectionIntro, cn } from './ui.js';

export default function WorkPortfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedAd, setSelectedAd] = useState(null);

  const { index, label, title, highlight, note, items } = portfolioSectionData;

  const filteredItems =
    activeCategory === 'All'
      ? items
      : items.filter((item) => item.family === activeCategory);

  useEffect(() => {
    if (!selectedAd) return;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedAd(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedAd]);

  return (
    <Section id="work" aria-labelledby="work-title">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <SectionIntro
          id="work-title"
          index={index}
          label={label}
          title={title}
          highlight={highlight}
        />

        <Reveal delay={80} className="-mx-5 shrink-0 sm:mx-0">
          <div
            role="group"
            aria-label="Filter by format family"
            className="no-scrollbar flex gap-1 overflow-x-auto px-5 sm:px-0"
          >
            {portfolioCategories.map((category) => (
              <button
                key={category}
                type="button"
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  'h-10 shrink-0 rounded-full px-4 text-small transition-colors duration-300',
                  activeCategory === category
                    ? 'bg-ink text-inverse'
                    : 'text-muted hover:bg-wash-2 hover:text-ink'
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      <ul
        className="mt-14 grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-3 lg:grid-cols-6"
        aria-live="polite"
      >
        {filteredItems.map((ad, idx) => (
          <Reveal as="li" key={ad.slug} delay={(idx % 6) * 50}>
            <figure className="group flex flex-col gap-3">
              <button
                type="button"
                onClick={() => setSelectedAd(ad)}
                aria-label={`Play ${ad.format} (${ad.family})`}
                className="block w-full cursor-pointer overflow-hidden rounded-2xl text-left ring-1 ring-line transition-shadow duration-500 group-hover:shadow-[0_24px_48px_-24px_rgb(0_0_0/0.6)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <AdVideo
                  ad={ad}
                  mode="hover"
                  className="transition-transform duration-700 ease-(--ease-out-soft) group-hover:scale-[1.03]"
                />
              </button>
              <figcaption className="flex flex-col gap-0.5 px-0.5">
                <span className="text-small font-medium">{ad.format}</span>
                <span className="text-meta text-muted">{ad.family}</span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </ul>

      <p className="mt-12 flex items-start gap-2.5 text-small text-muted">
        <Info className="mt-0.5 size-4 shrink-0 text-subtle" aria-hidden="true" />
        {note}
      </p>

      {selectedAd && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedAd.format} video preview`}
          onClick={() => setSelectedAd(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex w-full max-w-[360px] flex-col gap-3"
          >
            <div className="flex items-center justify-between text-white">
              <div className="flex flex-col">
                <span className="text-small font-medium">{selectedAd.format}</span>
                <span className="text-meta text-white/70">{selectedAd.family}</span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedAd(null)}
                aria-label="Close video preview"
                className="grid size-10 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>
            <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-black ring-1 ring-white/15">
              <video
                src={selectedAd.src}
                poster={selectedAd.poster}
                controls
                autoPlay
                playsInline
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}
