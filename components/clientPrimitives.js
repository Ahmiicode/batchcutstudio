'use client';

import { useEffect, useRef, useState, useSyncExternalStore } from 'react';

function cx(...classes) {
  return classes.filter(Boolean).join(' ');
}

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

export function useReducedMotion() {
  return useSyncExternalStore(
    (onStoreChange) => {
      if (typeof window === 'undefined') return () => {};
      const media = window.matchMedia(REDUCED_MOTION_QUERY);
      media.addEventListener('change', onStoreChange);
      return () => media.removeEventListener('change', onStoreChange);
    },
    () => (typeof window !== 'undefined' ? window.matchMedia(REDUCED_MOTION_QUERY).matches : true),
    () => true
  );
}

export function useScrollSteps(containerRef, stepCount, enabled) {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (!enabled) return;
    let rafId = 0;

    const update = () => {
      rafId = 0;
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const progress = Math.min(
        0.9999,
        Math.max(0, -rect.top / Math.max(1, rect.height - window.innerHeight))
      );
      el.style.setProperty('--p', progress.toFixed(4));
      setActiveStep(Math.floor(progress * stepCount));
    };

    const schedule = () => {
      if (!rafId) rafId = requestAnimationFrame(update);
    };

    schedule();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      cancelAnimationFrame(rafId);
    };
  }, [containerRef, stepCount, enabled]);

  return activeStep;
}

export function useStepsReached(listRef, enabled) {
  const [reachedCount, setReachedCount] = useState(0);

  useEffect(() => {
    if (!enabled) return;
    let rafId = 0;

    const update = () => {
      rafId = 0;
      const el = listRef.current;
      if (!el) return;
      const thresholdY = 0.6 * window.innerHeight;
      const rect = el.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, (thresholdY - rect.top) / rect.height));
      el.style.setProperty('--p', progress.toFixed(4));
      const steps = el.querySelectorAll('[data-step]');
      let count = 0;
      steps.forEach((step) => {
        if (step.getBoundingClientRect().top < thresholdY) count += 1;
      });
      setReachedCount(count);
    };

    const schedule = () => {
      if (!rafId) rafId = requestAnimationFrame(update);
    };

    schedule();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      cancelAnimationFrame(rafId);
    };
  }, [listRef, enabled]);

  return reachedCount;
}

export function Reveal({ delay = 0, as: Tag = 'div', className, style, children, ...props }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.96 && rect.bottom > 0) {
      el.dataset.visible = 'true';
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.dataset.visible = 'true';
            observer.disconnect();
            break;
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-reveal=""
      className={cx(className)}
      style={{ ...style, '--reveal-delay': `${delay}ms` }}
      {...props}
    >
      {children}
    </Tag>
  );
}

export function AdVideo({ ad, mode = 'inview', priority = false, className }) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video || !ad?.src) return;

    const reducedMotion = window.matchMedia(REDUCED_MOTION_QUERY).matches;
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    const playVideo = () => {
      if (!video.getAttribute('src')) {
        video.src = ad.src;
      }
      video.play().catch(() => {});
    };

    const pauseVideo = () => {
      video.pause();
    };

    if (mode === 'hover' && canHover) {
      container.addEventListener('pointerenter', playVideo);
      container.addEventListener('pointerleave', pauseVideo);
      container.addEventListener('focusin', playVideo);
      container.addEventListener('focusout', pauseVideo);
      return () => {
        container.removeEventListener('pointerenter', playVideo);
        container.removeEventListener('pointerleave', pauseVideo);
        container.removeEventListener('focusin', playVideo);
        container.removeEventListener('focusout', pauseVideo);
      };
    }

    if (reducedMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          playVideo();
        } else {
          pauseVideo();
        }
      },
      { threshold: mode === 'hover' ? 0.65 : 0.25 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [ad?.src, mode]);

  return (
    <div
      ref={containerRef}
      className={cx('relative isolate aspect-[9/16] overflow-hidden bg-wash-2', className)}
    >
      <img
        src={ad.poster}
        alt={ad.alt || ad.title || ''}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {ad?.src && (
        <video
          ref={videoRef}
          poster={ad.poster}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
          tabIndex={-1}
          onPlaying={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          className={cx(
            'absolute inset-0 h-full w-full object-cover transition-opacity duration-500',
            isPlaying ? 'opacity-100' : 'opacity-0'
          )}
        />
      )}
    </div>
  );
}
