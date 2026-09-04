// src/components/sections/FeaturedWork.tsx
// Featured Work / Portfolio section — heading + description + project cards
// with left/right navigation arrows and a primary CTA below.

import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { featuredWork } from '../../data/featuredWork';

// Breakpoint below which we show 1 card per view (matches CSS @ 768px)
const MOBILE_BREAKPOINT = 768;

// ── Single project card ──────────────────────────────────────────────────────

interface ProjectCardProps {
  name: string;
  tagline: string;
  image: string;
  imageAlt: string;
}

function ProjectCard({ name, tagline, image, imageAlt }: ProjectCardProps) {
  return (
    <article className="work__card" aria-label={`${name} — ${tagline}`}>
      <img
        src={image}
        alt={imageAlt}
        className="work__card-image"
        loading="lazy"
        decoding="async"
      />

      {/* Overlay brand block sits in the top-left of the card */}
      <div className="work__card-brand">
        <span className="work__card-name">{name}</span>
        <span className="work__card-tagline">{tagline}</span>
      </div>
    </article>
  );
}

// ── Section ──────────────────────────────────────────────────────────────────

export default function FeaturedWork() {
  const total = featuredWork.projects.length;

  // How many cards fit in the viewport at the current width.
  // 2 on desktop/tablet, 1 on mobile (≤768px).
  const [visible, setVisible] = useState(2);

  useEffect(() => {
    function syncVisible() {
      setVisible(window.innerWidth <= MOBILE_BREAKPOINT ? 1 : 2);
    }
    syncVisible();
    window.addEventListener('resize', syncVisible);
    return () => window.removeEventListener('resize', syncVisible);
  }, []);

  // Last valid index = total - visible (clamped ≥ 0)
  const maxIndex = Math.max(0, total - visible);
  const [index, setIndex] = useState(0);

  // Keep index inside the new bounds when the viewport changes
  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const atStart = index <= 0;
  const atEnd = index >= maxIndex;

  function prev() {
    setIndex((i) => Math.max(0, i - 1));
  }

  function next() {
    setIndex((i) => Math.min(maxIndex, i + 1));
  }

  return (
    <section className="work section" id="featured-work" aria-label="Featured contractor websites">
      <div className="container-site work__container">

        {/* ── Heading ── */}
        <h2 className="work__heading">
          <span className="work__heading-line">
            <span className="work__heading-lead">{featuredWork.headingLead}</span>
            <em className="work__heading-accent">{featuredWork.headingAccent}</em>
          </span>
          <span className="work__heading-line work__heading-line--tail">
            {featuredWork.headingTail}
          </span>
        </h2>

        {/* ── Description with bolded highlight ── */}
        <p className="work__description">
          {featuredWork.descriptionBefore}
          <strong className="work__description-highlight">
            {featuredWork.descriptionHighlight}
          </strong>
          {featuredWork.descriptionAfter}
        </p>

        {/* ── Project cards carousel ── */}
        <div className="work__viewport" aria-roledescription="carousel">
          <div
            className="work__track"
            style={{ transform: `translateX(calc(-${index} * 100% / var(--work-visible, 2)))` }}
            aria-live="polite"
          >
            {featuredWork.projects.map((p, i) => (
              <div
                key={p.id}
                className="work__slide"
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${total}: ${p.name}`}
              >
                <ProjectCard
                  name={p.name}
                  tagline={p.tagline}
                  image={p.image}
                  imageAlt={p.imageAlt}
                />
              </div>
            ))}
          </div>
        </div>

        {/* ── Arrows + CTA row ── */}
        <div className="work__controls">
          <button
            type="button"
            className={`work__arrow ${atStart ? 'work__arrow--disabled' : ''}`}
            aria-label="Previous project"
            onClick={prev}
            disabled={atStart}
          >
            <ChevronLeft size={20} strokeWidth={2.5} aria-hidden="true" />
          </button>

          <a href={featuredWork.ctaHref} className="work__cta">
            {featuredWork.ctaLabel}
          </a>

          <button
            type="button"
            className={`work__arrow ${atEnd ? 'work__arrow--disabled' : ''}`}
            aria-label="Next project"
            onClick={next}
            disabled={atEnd}
          >
            <ChevronRight size={20} strokeWidth={2.5} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}