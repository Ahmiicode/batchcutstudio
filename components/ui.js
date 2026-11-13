import { ArrowRight } from 'lucide-react';
import {
  AdVideo,
  Reveal,
  useReducedMotion,
  useScrollSteps,
  useStepsReached,
} from './clientPrimitives.js';

export { AdVideo, Reveal, useReducedMotion, useScrollSteps, useStepsReached };

export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function Container({ className, children, ...props }) {
  return (
    <div
      className={cn('mx-auto w-full max-w-[1280px] px-5 sm:px-10 lg:px-16', className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function Section({ className, innerClassName, tone = 'base', children, ...props }) {
  return (
    <section className={cn('relative', tone === 'band' && 'band', className)} {...props}>
      <Container className={cn('py-24 sm:py-32', innerClassName)}>{children}</Container>
    </section>
  );
}

export function Eyebrow({ index, label, className }) {
  return (
    <p className={cn('flex items-center gap-3 text-meta font-medium text-accent', className)}>
      {index && <span className="font-mono">{index}</span>}
      {index && <span aria-hidden="true" className="h-px w-6 bg-current opacity-40" />}
      {label}
    </p>
  );
}

export function HighlightedText({ text, highlight }) {
  if (!highlight || !text.includes(highlight)) {
    return <>{text}</>;
  }
  const idx = text.indexOf(highlight);
  return (
    <>
      {text.slice(0, idx)}
      <span className="text-accent">{highlight}</span>
      {text.slice(idx + highlight.length)}
    </>
  );
}

export function SectionIntro({
  index,
  label,
  title,
  highlight,
  body,
  id,
  align = 'left',
  className,
}) {
  return (
    <Reveal
      className={cn(
        'flex flex-col',
        align === 'center' && 'items-center text-center',
        className
      )}
    >
      <Eyebrow index={index} label={label} />
      <h2 id={id} className="mt-5 max-w-[20ch] text-h2 text-balance">
        <HighlightedText text={title} highlight={highlight} />
      </h2>
      {body && (
        <p className="mt-6 max-w-[52ch] text-lead text-pretty text-ink-2">{body}</p>
      )}
    </Reveal>
  );
}

export function ActionButton({
  variant = 'primary',
  size = 'lg',
  className,
  children,
  showArrow = false,
  ...props
}) {
  const variantClasses = {
    primary:
      'bg-ink text-inverse hover:bg-brand hover:text-white hover:shadow-[0_12px_32px_-12px_rgb(124_58_237/0.7)]',
    secondary: 'border border-line-strong bg-surface text-ink hover:border-subtle',
  };

  const sizeClasses = {
    md: 'h-10 px-5 text-small',
    lg: 'h-13 px-7 text-body',
  };

  return (
    <a
      className={cn(
        'group/btn inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-[-0.01em] whitespace-nowrap transition-[background-color,border-color,color,transform,box-shadow] duration-300 ease-(--ease-out-soft) active:scale-[0.98]',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
      {showArrow && (
        <ArrowRight
          className="size-4 transition-transform duration-300 group-hover/btn:translate-x-0.5"
          aria-hidden="true"
        />
      )}
    </a>
  );
}
