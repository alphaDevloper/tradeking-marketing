// src/components/sections/WhyLsa.tsx
// "Why Local Service Ads Beat Everything Else For Contractors" benefits section.
// Composition:
//   • Top-left aligned header: "WHY LSA" eyebrow (11.52px, 700) + 2-line headline (38.4px, 700)
//   • 2-column x 2-row feature card grid on black background (#000000)
//   • Cards: dark background, red icon tile, bold white title (20.48px, 700), light gray paragraph (13px, 400)
//   • On hover: cards turn full vibrant red with translucent icon tile and white text

import { ShieldCheck, DollarSign, Zap, Shield } from 'lucide-react';

interface BenefitCard {
  icon: React.ElementType;
  title: string;
  description: string;
}

const benefits: BenefitCard[] = [
  {
    icon: ShieldCheck,
    title: 'VERIFIED TRUST',
    description:
      "The Google Guarantee badge tells homeowners you've been vetted and verified before they even read your name. That badge alone closes jobs.",
  },
  {
    icon: DollarSign,
    title: 'PAY PER LEAD',
    description:
      'You only pay when a real customer contacts you directly through the ad. No clicks. No impressions. No wasted budget.',
  },
  {
    icon: Zap,
    title: 'IMMEDIATE RESULTS',
    description:
      'No waiting 6 months for SEO to kick in. LSA puts you in front of homeowners actively searching for your services today.',
  },
  {
    icon: Shield,
    title: 'GOOGLE GUARANTEED',
    description:
      'If a customer is unhappy, Google reimburses them up to $2,000. That backing makes homeowners choose you over every competitor without a badge.',
  },
];

export default function WhyLsa() {
  return (
    <section className="why-lsa" aria-label="Why Local Service Ads Beat Everything Else For Contractors">
      <div className="why-lsa__container">

        {/* Top-left aligned header */}
        <div className="why-lsa__header">
          <span className="why-lsa__eyebrow">WHY LSA</span>
          <h2 className="why-lsa__headline">
            <span className="why-lsa__hl-line">
              WHY LOCAL SERVICE ADS BEAT EVERYTHING ELSE FOR
            </span>
            <span className="why-lsa__hl-line">
              <span className="why-lsa__accent">CONTRACTORS</span>
            </span>
          </h2>
        </div>

        {/* 2-column x 2-row feature cards grid */}
        <div className="why-lsa__grid">
          {benefits.map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.title} className="why-lsa__card">
                <div className="why-lsa__icon-tile" aria-hidden="true">
                  <Icon size={24} strokeWidth={2.2} />
                </div>
                <div className="why-lsa__content">
                  <h3 className="why-lsa__card-title">{card.title}</h3>
                  <p className="why-lsa__card-desc">{card.description}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
