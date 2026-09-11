// src/components/sections/SeoServices.tsx
// "What's Included In Our Roofing SEO Service" features section.
// Composition:
//   • Top-left aligned eyebrow ("SERVICES") + bold 2-line headline ("ROOFING SEO SERVICE" in red-to-orange gradient)
//   • 3-column x 2-row feature card grid with dark rounded cards & red line icon tiles
//   • 6th card is a solid red highlighted accent card with white text
//   • Hover effect: card elevates with subtle red border, icon tile turns red with white icon

import { SlidersHorizontal, MapPin, SquarePen, MousePointer2, Link2 } from 'lucide-react';

interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  isAccent?: boolean;
}

const features: FeatureItem[] = [
  {
    id: 'technical-seo',
    title: 'TECHNICAL SEO',
    description:
      'Site speed, mobile optimization, and crawl fixes that give Google a clean, fast site to rank.',
    icon: <SlidersHorizontal size={20} strokeWidth={2} aria-hidden="true" />,
  },
  {
    id: 'local-seo',
    title: 'LOCAL SEO',
    description:
      'Google Business Profile optimization, local citations, and location pages that dominate your service area.',
    icon: <MapPin size={20} strokeWidth={2} aria-hidden="true" />,
  },
  {
    id: 'content-marketing',
    title: 'CONTENT MARKETING',
    description:
      'Targeted blog content built around the exact keywords your future customers are searching for right now.',
    icon: <SquarePen size={20} strokeWidth={2} aria-hidden="true" />,
  },
  {
    id: 'cro',
    title: 'CONVERSION RATE OPTIMIZATION',
    description:
      'Forms, buttons, and call tracking that turn more of your existing traffic into booked jobs.',
    icon: <MousePointer2 size={20} strokeWidth={2} aria-hidden="true" />,
  },
  {
    id: 'backlink-building',
    title: 'BACKLINK BUILDING',
    description:
      'Links from directories, industry associations, and PR placements that build lasting authority in your market.',
    icon: <Link2 size={20} strokeWidth={2} aria-hidden="true" />,
  },
  {
    id: 'accent-card',
    title: 'ALL OF IT, WORKING TOGETHER AS ONE SYSTEM.',
    description: "That's how we move contractors from invisible to #1.",
    isAccent: true,
  },
];

export default function SeoServices() {
  return (
    <section className="seo-services" aria-label="What's included in our roofing SEO service">
      <div className="seo-services__container">

        {/* Top-left aligned header */}
        <div className="seo-services__header">
          <span className="seo-services__eyebrow">SERVICES</span>
          <h2 className="seo-services__headline">
            <span className="seo-services__hl-line">WHAT'S INCLUDED IN OUR</span>
            <span className="seo-services__hl-line">
              <span className="seo-services__accent">ROOFING SEO SERVICE</span>
            </span>
          </h2>
        </div>

        {/* 3-column x 2-row feature card grid */}
        <div className="seo-services__grid">
          {features.map((item) => {
            if (item.isAccent) {
              return (
                <div key={item.id} className="seo-services__card seo-services__card--accent" id={`seo-service-${item.id}`}>
                  <h3 className="seo-services__accent-title">{item.title}</h3>
                  <p className="seo-services__accent-desc">{item.description}</p>
                </div>
              );
            }

            return (
              <div key={item.id} className="seo-services__card" id={`seo-service-${item.id}`}>
                {/* Icon tile */}
                <div className="seo-services__icon-tile" aria-hidden="true">
                  {item.icon}
                </div>

                {/* Card Title */}
                <h3 className="seo-services__card-title">{item.title}</h3>

                {/* Card Description */}
                <p className="seo-services__card-desc">{item.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
