// src/components/sections/WhySeo.tsx
// "Why Roofing Contractors Can't Afford To Ignore SEO" benefits section.
// Composition:
//   • Left-aligned red eyebrow ("WHY SEO") + bold two-line headline ("IGNORE SEO" with red-to-orange gradient)
//   • 3-column feature card grid with red glowing icon tiles
//   • Interactive hover effect (subtle scale-up, red border, glow)

import { Eye, ShieldCheck, Calendar } from 'lucide-react';

interface BenefitCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const benefits: BenefitCard[] = [
  {
    id: 'more-visibility',
    title: 'MORE VISIBILITY',
    description:
      'Rank for the searches that matter, "roof repair near me," "emergency roofing contractor," "best roofer in [city]." The homeowners typing those phrases are ready to buy. We make sure they find you first.',
    icon: <Eye size={24} strokeWidth={2} aria-hidden="true" />,
  },
  {
    id: 'more-credibility',
    title: 'MORE CREDIBILITY',
    description:
      'Homeowners assume the contractors at the top of Google are the most established and trustworthy. First-page rankings don\'t just drive traffic, they build your reputation before anyone ever calls.',
    icon: <ShieldCheck size={24} strokeWidth={2} aria-hidden="true" />,
  },
  {
    id: 'more-consistency',
    title: 'MORE CONSISTENCY',
    description:
      'Stop depending on storm season and word of mouth. SEO builds a lead engine that runs 365 days a year, regardless of the weather.',
    icon: <Calendar size={24} strokeWidth={2} aria-hidden="true" />,
  },
];

export default function WhySeo() {
  return (
    <section className="why-seo" aria-label="Why roofing contractors can't afford to ignore SEO">
      <div className="why-seo__container">

        {/* Top-left aligned header */}
        <div className="why-seo__header">
          <span className="why-seo__eyebrow">WHY SEO</span>
          <h2 className="why-seo__headline">
            <span className="why-seo__hl-line">
              WHY ROOFING CONTRACTORS CAN'T
            </span>
            <span className="why-seo__hl-line">
              AFFORD TO <span className="why-seo__accent">IGNORE SEO</span>
            </span>
          </h2>
        </div>

        {/* 3-column feature card grid */}
        <div className="why-seo__grid">
          {benefits.map((card) => (
            <div key={card.id} className="why-seo__card" id={`why-seo-${card.id}`}>
              {/* Red glowing icon tile */}
              <div className="why-seo__icon-tile" aria-hidden="true">
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="why-seo__card-title">{card.title}</h3>

              {/* Description */}
              <p className="why-seo__card-desc">{card.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
