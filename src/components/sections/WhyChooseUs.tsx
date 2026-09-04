// src/components/sections/WhyChooseUs.tsx
// Why Choose Us section — left column: heading + 4 benefit cards.
// Right column: portrait image with overlapping trust badge.

import { whyChooseUs } from '../../data/whyChooseUs';
import portraitImg from '../../assets/about-owner.png';
import badgeImg from '../../assets/tradeking_satisfaction.png';

// ── Single benefit row ────────────────────────────────────────────────────────

interface BenefitRowProps {
  title: string;
  description: string;
  Icon: typeof whyChooseUs.benefits[number]['icon'];
}

function BenefitRow({ title, description, Icon }: BenefitRowProps) {
  return (
    <div className="why__benefit">
      <span className="why__benefit-icon" aria-hidden="true">
        <Icon size={26} strokeWidth={1.75} />
      </span>
      <div className="why__benefit-text">
        <h3 className="why__benefit-title">{title}</h3>
        <p className="why__benefit-desc">{description}</p>
      </div>
    </div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────

export default function WhyChooseUs() {
  return (
    <section className="why section" id="why-choose-us" aria-label="Why contractors trust us">
      <div className="container-site why__container">

        {/* ── Left column — heading + benefit rows ── */}
        <div className="why__left">
          <h2 className="why__heading">
            <span className="why__heading-line">
              <span className="why__heading-lead">WHY </span>
              <em className="why__heading-accent">{whyChooseUs.headingAccent}</em>
              <span className="why__heading-tail">{whyChooseUs.headingTail}</span>
            </span>
            <span className="why__heading-line">{whyChooseUs.headingLine2}</span>
          </h2>

          <p className="why__description">{whyChooseUs.description}</p>

          <div className="why__benefits" role="list">
            {whyChooseUs.benefits.map((b) => (
              <div key={b.title} role="listitem">
                <BenefitRow
                  title={b.title}
                  description={b.description}
                  Icon={b.icon}
                />
              </div>
            ))}
          </div>
        </div>

        {/* ── Right column — portrait image with overlapping trust badge ── */}
        <div className="why__right" aria-hidden="true">
          <div className="why__portrait">
            <img
              src={portraitImg}
              alt=""
              className="why__portrait-img"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="why__badge">
            <img
              src={badgeImg}
              alt=""
              className="why__badge-img"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

      </div>
    </section>
  );
}