import { brandData, footerData } from '../data/websiteData.js';
import { Container } from './ui.js';

export default function Footer() {
  return (
    <footer className="py-14">
      <Container className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div className="flex max-w-sm flex-col gap-4">
          <a
            href="#top"
            aria-label={`${brandData.name} — back to top`}
            className="inline-flex shrink-0"
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
          <p className="text-small text-muted">{brandData.tagline}</p>
        </div>

        <div className="flex flex-col gap-4 text-small md:items-end">
          <ul className="flex flex-wrap gap-x-7 gap-y-2">
            {footerData.socials.map((item) => (
              <li key={item.label}>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-muted transition-colors hover:text-ink"
                  >
                    {item.label}
                  </a>
                ) : (
                  <span className="text-subtle" title="Link not set yet">
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-x-7 gap-y-2 text-meta">
            {footerData.legal.map((item) =>
              item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-muted transition-colors hover:text-ink"
                >
                  {item.label}
                </a>
              ) : (
                <span key={item.label} className="text-subtle" title="Link not set yet">
                  {item.label}
                </span>
              )
            )}
            <span className="text-subtle">{footerData.copyright}</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
