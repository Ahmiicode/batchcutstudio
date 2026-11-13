'use client';

import { useRef } from 'react';
import { Package } from 'lucide-react';
import { creativeMultiplicationData } from '../data/websiteData.js';
import {
  Container,
  SectionIntro,
  cn,
  useReducedMotion,
  useScrollSteps,
} from './ui.js';

const OVERLAP_GRID = 'grid [&>*]:col-start-1 [&>*]:row-start-1';
const STAGE_ITEM_TRANSITION =
  'opacity-0 translate-y-3 transition-[opacity,transform] duration-500 ease-(--ease-out-soft) group-data-[on=true]:translate-y-0 group-data-[on=true]:opacity-100';

function getDelayStyle(index, stepMs = 45) {
  return { transitionDelay: `${120 + index * stepMs}ms` };
}

function StageVisual({ stage }) {
  const { concepts, hooks, scriptParts, personas, finals } =
    creativeMultiplicationData;

  switch (stage) {
    case 0:
      return (
        <div className="flex flex-col items-center gap-5">
          <div
            className={cn(
              STAGE_ITEM_TRANSITION,
              'grid size-36 place-items-center rounded-[32px] border border-line-strong bg-surface shadow-[0_0_80px_-10px_var(--wash-glow)] sm:size-52'
            )}
            style={getDelayStyle(0)}
          >
            <Package
              className="size-16 text-ink sm:size-20"
              strokeWidth={1.25}
              aria-hidden="true"
            />
          </div>
          <p
            className={cn(STAGE_ITEM_TRANSITION, 'text-body text-muted')}
            style={getDelayStyle(1)}
          >
            Your product
          </p>
        </div>
      );

    case 1:
      return (
        <ul className="flex max-w-[38rem] flex-wrap justify-center gap-2 sm:gap-3">
          {concepts.map((concept, index) => (
            <li
              key={concept}
              className={cn(
                STAGE_ITEM_TRANSITION,
                'rounded-full border border-brand/35 bg-brand-soft px-4 py-2 text-small text-ink sm:px-5 sm:py-2.5 sm:text-body'
              )}
              style={getDelayStyle(index, 35)}
            >
              {concept}
            </li>
          ))}
        </ul>
      );

    case 2:
      return (
        <ul className="flex w-full max-w-[34rem] flex-col gap-2.5 sm:gap-3">
          {hooks.map((hook, index) => (
            <li
              key={hook}
              className={cn(
                STAGE_ITEM_TRANSITION,
                'rounded-2xl border border-line bg-surface px-5 py-3.5 text-body font-medium text-ink sm:text-lead'
              )}
              style={{
                ...getDelayStyle(index, 60),
                marginLeft: `${(index % 3) * 6}%`,
              }}
            >
              “{hook}”
            </li>
          ))}
        </ul>
      );

    case 3:
      return (
        <div className="relative h-[19rem] w-full max-w-[24rem] sm:h-[24rem] sm:max-w-[28rem]">
          {[2, 1, 0].map((cardIndex) => (
            <div
              key={cardIndex}
              className={cn(
                STAGE_ITEM_TRANSITION,
                'absolute inset-0 rounded-3xl border border-line-strong bg-canvas p-6'
              )}
              style={{
                ...getDelayStyle(2 - cardIndex, 90),
                transform: `translate(${10 * cardIndex}px, ${-12 * cardIndex}px) rotate(${
                  1.5 * cardIndex
                }deg)`,
              }}
            >
              {cardIndex === 0 && (
                <div className="flex flex-col gap-4">
                  <p className="text-meta font-medium text-accent">Script 07</p>
                  {scriptParts.map((part, idx) => (
                    <div key={part} className="flex flex-col gap-1.5">
                      <span className="text-meta text-muted">{part}</span>
                      <span
                        className="h-1.5 rounded-full bg-wash-2"
                        style={{ width: `${90 - 11 * idx}%` }}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      );

    case 4:
      return (
        <ul className="grid grid-cols-4 gap-3 sm:gap-4">
          {personas.map((persona, index) => (
            <li
              key={persona.slug}
              className={cn(
                STAGE_ITEM_TRANSITION,
                'relative size-14 overflow-hidden rounded-full ring-2 ring-line-strong sm:size-20 lg:size-24'
              )}
              style={getDelayStyle(index, 40)}
            >
              <img
                src={persona.poster}
                alt={persona.alt}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover object-[50%_22%]"
              />
            </li>
          ))}
        </ul>
      );

    default:
      return (
        <ul className="grid w-full max-w-[40rem] grid-cols-5 gap-2 sm:gap-3">
          {finals.map((ad, index) => (
            <li
              key={ad.slug}
              className={cn(
                STAGE_ITEM_TRANSITION,
                'relative aspect-[9/16] overflow-hidden rounded-xl ring-1 ring-line'
              )}
              style={getDelayStyle(index, 45)}
            >
              <img
                src={ad.poster}
                alt={ad.alt}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </li>
          ))}
        </ul>
      );
  }
}

function StageReadout({ active }) {
  const { stages } = creativeMultiplicationData;

  return (
    <div className="flex flex-col">
      <p className="text-meta font-medium text-muted">
        Step {active + 1} of {stages.length}
      </p>

      <div className={cn(OVERLAP_GRID, 'mt-4')}>
        {stages.map((stage, index) => (
          <div
            key={stage.label}
            aria-hidden={index !== active}
            className={cn(
              'transition-[opacity,transform] duration-500 ease-(--ease-out-soft)',
              index === active
                ? 'translate-y-0 opacity-100'
                : index < active
                  ? '-translate-y-4 opacity-0'
                  : 'translate-y-4 opacity-0'
            )}
          >
            <p className="text-[clamp(4rem,9vw,7.5rem)] leading-[0.9] font-semibold tracking-[-0.06em]">
              {stage.value}
            </p>
            <h3 className="mt-3 text-h3 text-accent">{stage.label}</h3>
            <p className="mt-4 max-w-[30ch] text-lead text-ink-2">{stage.line}</p>
          </div>
        ))}
      </div>

      <ol className="mt-10 hidden grid-cols-6 gap-2 sm:grid" aria-label="Stages">
        {stages.map((stage, index) => (
          <li key={stage.label} className="flex flex-col gap-2">
            <span
              className={cn(
                'h-1 rounded-full transition-colors duration-500',
                index <= active ? 'bg-brand' : 'bg-wash-2'
              )}
            />
            <span
              className={cn(
                'text-meta transition-colors duration-500',
                index === active ? 'text-ink' : 'text-subtle'
              )}
            >
              {stage.label}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function ReducedMotionStages() {
  const { stages } = creativeMultiplicationData;

  return (
    <ol className="flex flex-col gap-16 pt-16">
      {stages.map((stage, index) => (
        <li key={stage.label} className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <p className="text-figure">{stage.value}</p>
            <h3 className="mt-3 text-h3 text-accent">{stage.label}</h3>
            <p className="mt-3 max-w-[34ch] text-lead text-ink-2">{stage.line}</p>
          </div>
          <div className="group flex justify-center" data-on="true">
            <StageVisual stage={index} />
          </div>
        </li>
      ))}
    </ol>
  );
}

export default function CreativeMultiplication() {
  const reducedMotion = useReducedMotion();
  const trackRef = useRef(null);
  const { index, label, title, highlight, body, stages } =
    creativeMultiplicationData;
  const activeStage = useScrollSteps(trackRef, stages.length, !reducedMotion);

  return (
    <section id="system" aria-labelledby="system-title" className="band">
      <Container className="pt-24 sm:pt-32">
        <SectionIntro
          id="system-title"
          index={index}
          label={label}
          title={title}
          highlight={highlight}
          body={body}
        />
        {reducedMotion && <ReducedMotionStages />}
      </Container>

      {!reducedMotion && (
        <div
          ref={trackRef}
          className="relative"
          style={{ height: `${65 * stages.length + 15}svh` }}
        >
          <div className="sticky top-0 flex h-svh items-center overflow-hidden pt-16">
            <Container className="grid w-full items-center gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              <StageReadout active={activeStage} />
              <div className={cn(OVERLAP_GRID, 'h-[40svh] place-items-center sm:h-[52svh]')}>
                {stages.map((stage, idx) => (
                  <div
                    key={stage.label}
                    data-on={idx === activeStage}
                    aria-hidden={idx !== activeStage}
                    className={cn(
                      'group flex w-full justify-center transition-opacity duration-300',
                      idx === activeStage
                        ? 'opacity-100'
                        : 'pointer-events-none opacity-0'
                    )}
                  >
                    <StageVisual stage={idx} />
                  </div>
                ))}
              </div>
            </Container>
          </div>
        </div>
      )}

      <div className="h-16 sm:h-24" />
    </section>
  );
}
