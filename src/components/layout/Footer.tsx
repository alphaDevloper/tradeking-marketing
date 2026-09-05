// src/components/layout/Footer.tsx
// Site footer — infinite marquee banner + 4-column layout + CTA.
//
// Marquee uses a duplicated text track and a CSS keyframe animation
// (translateX 0 → -50%) so the loop is seamless and pause-free.
//
// Columns:
//   1. Agency info (King Contractor® + contact details)
//   2. Quick Links
//   3. Social
//   4. Term & Policies + Connect CTA

import { footer } from '../../data/footer';

// ── Marquee banner ────────────────────────────────────────────────────────────

function Marquee() {
  // One "unit" of marquee content = phrase A + red star + phrase B + spacing.
  // We render the unit several times so the animation can loop seamlessly by
  // translating the track by -50% (the exact width of one copy).
  const unit = (
    <span className="footer__marquee-unit" aria-hidden="true">
      <span className="footer__marquee-text">{footer.marqueeText}</span>
      <span className="footer__marquee-star">{footer.marqueeSeparator}</span>
      <span className="footer__marquee-text">{footer.marqueeTextAfter}</span>
      <span className="footer__marquee-star">{footer.marqueeSeparator}</span>
    </span>
  );

  return (
    <div className="footer__marquee" aria-label={`${footer.marqueeText} ${footer.marqueeSeparator} ${footer.marqueeTextAfter}`}>
      <div className="footer__marquee-track">
        {Array.from({ length: 6 }).map((_, i) => (
          <span key={i}>{unit}</span>
        ))}
      </div>
    </div>
  );
}

// ── Footer columns ────────────────────────────────────────────────────────────

function AgencyColumn() {
  const c = footer.contact;
  return (
    <div className="footer__col footer__col--agency">
      <h3 className="footer__agency-name">{footer.agencyName}</h3>

      <a className="footer__line" href={`mailto:${c.email}`}>
        {c.email}
      </a>
      <a className="footer__line" href={`tel:${c.phone.replace(/[^+\d]/g, '')}`}>
        {c.phone}
      </a>
      <p className="footer__line">{c.address}</p>
      <p className="footer__line">{c.availability}</p>

      <p className="footer__tagline">{c.tagline}</p>
    </div>
  );
}

function LinkColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div className="footer__col">
      <h3 className="footer__heading">{title}</h3>
      <ul className="footer__links">
        {links.map((l) => (
          <li key={l.label}>
            <a className="footer__link" href={l.href}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ConnectColumn() {
  return (
    <div className="footer__col footer__col--connect">
      <h3 className="footer__heading">Term &amp; Policies</h3>
      <ul className="footer__links">
        {footer.policies.map((l) => (
          <li key={l.label}>
            <a className="footer__link" href={l.href}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <h3 className="footer__heading footer__heading--cta">{footer.ctaHeading}</h3>
      <a className="footer__cta" href={footer.ctaHref}>
        {footer.ctaLabel}
      </a>
    </div>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────

export default function Footer() {
  return (
    <footer className="footer" aria-label="Site footer">
      <Marquee />

      <div className="footer__body">
        <div className="container-site footer__container">
          <div className="footer__grid">
            <AgencyColumn />
            <LinkColumn title="Quick Links" links={footer.quickLinks} />
            <LinkColumn title="Social" links={footer.social} />
            <ConnectColumn />
          </div>
        </div>
      </div>
    </footer>
  );
}
