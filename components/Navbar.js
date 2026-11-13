'use client';

import { useEffect, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { brandData, ctaData, navLinks } from '../data/websiteData.js';
import { ActionButton, Container, cn } from './ui.js';

const THEME_COLORS = {
  dark: '#0a0a0b',
  light: '#ffffff',
};

function BrandLogo({ className }) {
  return (
    <a
      href="#top"
      aria-label={`${brandData.name} — back to top`}
      className={cn('inline-flex shrink-0', className)}
    >
      <img
        src={brandData.logo.src}
        alt={brandData.name}
        width={brandData.logo.width}
        height={brandData.logo.height}
        decoding="async"
        className="h-[18px] w-auto light:invert sm:h-5"
      />
    </a>
  );
}

function ThemeToggle({ className }) {
  const toggleTheme = () => {
    const root = document.documentElement;
    const nextTheme = root.dataset.theme === 'light' ? 'dark' : 'light';
    root.dataset.theme = nextTheme;
    const themeMeta = document.querySelector('meta[name="theme-color"]');
    if (themeMeta) {
      themeMeta.setAttribute('content', THEME_COLORS[nextTheme]);
    }
    try {
      localStorage.setItem('theme', nextTheme);
    } catch {
      // Ignore storage failures
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Switch between dark and light theme"
      title="Switch theme"
      className={cn(
        'grid size-10 place-items-center rounded-full border border-line text-muted transition-colors hover:border-line-strong hover:text-ink',
        className
      )}
    >
      <Sun className="size-[18px] light:hidden" aria-hidden="true" />
      <Moon className="hidden size-[18px] light:block" aria-hidden="true" />
    </button>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMobileOpen(false);
    };
    const media = window.matchMedia('(min-width: 768px)');
    const onMediaChange = () => {
      if (media.matches) setMobileOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    media.addEventListener('change', onMediaChange);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      media.removeEventListener('change', onMediaChange);
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const showBackdrop = scrolled || mobileOpen;

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-500',
        showBackdrop ? 'border-line bg-canvas/80 backdrop-blur-xl' : 'border-transparent'
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-6">
        <BrandLogo />

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-small text-muted transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <ActionButton
            href={ctaData.nav.href}
            size="md"
            className="hidden sm:inline-flex"
          >
            {ctaData.nav.label}
          </ActionButton>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            className="grid size-10 place-items-center rounded-full border border-line bg-surface text-ink md:hidden"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </Container>

      <div
        id="mobile-menu"
        hidden={!mobileOpen}
        className="h-[calc(100dvh-4rem)] border-t border-line bg-canvas md:hidden"
      >
        <Container className="flex h-full flex-col justify-between pt-6 pb-10">
          <nav aria-label="Mobile">
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.href} className="border-b border-line">
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-5 text-3xl font-semibold tracking-[-0.04em]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ActionButton
            href={ctaData.primary.href}
            onClick={() => setMobileOpen(false)}
            className="w-full"
          >
            {ctaData.primary.label}
          </ActionButton>
        </Container>
      </div>
    </header>
  );
}
