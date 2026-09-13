// src/components/sections/PortfolioGallery.tsx
// Filterable portfolio gallery section on black background.
// Composition:
//   • Filter tabs: horizontal row of pill buttons centered at top (12.16px, weight 700)
//   • Portfolio grid: 3-column x 2-row equal-sized cards
//   • Each card:
//     - Browser-frame mockup with traffic light buttons (red, yellow, green) & address bar
//     - Laptop website mockup image
//     - Bold white uppercase title (19px, weight 800)
//     - Red uppercase category label beneath title (12px, weight 700)

import { useState } from 'react';
import { portfolioGalleryData } from '../../data/portfolioData';

export default function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? portfolioGalleryData.projects
    : portfolioGalleryData.projects.filter((p) =>
        p.filterCategories.includes(activeCategory)
      );

  return (
    <section className="portfolio-gallery" id="portfolio-gallery" aria-label="Portfolio Gallery">
      <div className="portfolio-gallery__container">

        {/* ── Filter Tabs ── */}
        <nav
          className="portfolio-gallery__tabs"
          aria-label="Filter portfolio by category"
          role="tablist"
        >
          {portfolioGalleryData.categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(cat.id)}
                className={`portfolio-gallery__tab${isActive ? ' portfolio-gallery__tab--active' : ''}`}
                id={`filter-tab-${cat.id}`}
              >
                {cat.label}
              </button>
            );
          })}
        </nav>

        {/* ── 3-Column x 2-Row Portfolio Grid ── */}
        <div className="portfolio-gallery__grid" role="region" aria-live="polite">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="portfolio-gallery__card"
              aria-label={`${project.title} — ${project.category}`}
            >
              {/* Browser-frame mockup header */}
              <div className="portfolio-gallery__browser">
                <div className="portfolio-gallery__browser-bar">
                  <div className="portfolio-gallery__traffic-lights" aria-hidden="true">
                    <span className="portfolio-gallery__dot portfolio-gallery__dot--red" />
                    <span className="portfolio-gallery__dot portfolio-gallery__dot--yellow" />
                    <span className="portfolio-gallery__dot portfolio-gallery__dot--green" />
                  </div>
                  <div className="portfolio-gallery__address-bar" aria-hidden="true" />
                </div>

                {/* Website Mockup Visual */}
                <div className="portfolio-gallery__media">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="portfolio-gallery__image"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              {/* Card Meta / Info */}
              <div className="portfolio-gallery__info">
                <h3 className="portfolio-gallery__card-title">{project.title}</h3>
                <span className="portfolio-gallery__card-category">{project.category}</span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
