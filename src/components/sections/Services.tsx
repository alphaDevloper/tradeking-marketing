import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { services, type ServiceFeature, type ServiceHighlight } from '../../data/services';

// ── Single feature row inside a service card ──────────────────────────────────

interface FeatureRowProps {
  title: string;
  description: string;
  Icon: ServiceFeature['icon'];
}

function FeatureRow({ title, description, Icon }: FeatureRowProps) {
  return (
    <li className="services__feature">
      <span className="services__feature-icon" aria-hidden="true">
        <Icon size={16} strokeWidth={2.25} />
      </span>
      <div className="services__feature-text">
        <p className="services__feature-title">{title}</p>
        <p className="services__feature-desc">{description}</p>
      </div>
    </li>
  );
}

// ── Highlighted feature row (e.g. "AI Smart Website — Most Popular") ─────────

interface HighlightRowProps {
  highlight: ServiceHighlight;
}

function HighlightRow({ highlight }: HighlightRowProps) {
  const Icon = highlight.icon;
  return (
    <li className="services__feature services__feature--highlight">
      <span className="services__feature-icon services__feature-icon--highlight" aria-hidden="true">
        <Icon size={16} strokeWidth={2.25} />
      </span>
      <div className="services__feature-text">
        <div className="services__feature-title-row">
          <p className="services__feature-title">{highlight.label}</p>
          <span className="services__feature-badge">{highlight.badge}</span>
        </div>
        <p className="services__feature-desc">{highlight.description}</p>
      </div>
    </li>
  );
}

// ── Single service card ──────────────────────────────────────────────────────

interface ServiceCardProps {
  title: string;
  image: string;
  imageAlt: string;
  features: ServiceFeature[];
  highlight?: ServiceHighlight;
}

function ServiceCard({ title, image, imageAlt, features, highlight }: ServiceCardProps) {
  return (
    <article className="services__card" aria-label={title}>
      <div className="services__media">
        <img
          src={image}
          alt={imageAlt}
          className="services__image"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="services__body">
        <h3 className="services__card-title">{title}</h3>

        <ul className="services__features">
          {highlight && <HighlightRow highlight={highlight} />}
          {features.map((f) => (
            <FeatureRow
              key={f.title}
              title={f.title}
              description={f.description}
              Icon={f.icon}
            />
          ))}
        </ul>
      </div>
    </article>
  );
}

// ── Services section ─────────────────────────────────────────────────────────

export default function Services() {
  const [index, setIndex] = useState(0);

  function prev() {
    setIndex((i) => (i - 1 + services.length) % services.length);
  }

  function next() {
    setIndex((i) => (i + 1) % services.length);
  }

  return (
    <section className="services section" id="services" aria-label="Our services">
      <div className="container-site services__container">

        {/* ── Heading ── */}
        <header className="services__header">
          <h2 className="services__heading">
            OUR <span className="services__heading-accent">SERVICES</span>
          </h2>
          <p className="services__subheading">
            Websites &amp; Marketing Systems Built for America&rsquo;s Top Contractors
          </p>
          <p className="services__description">
            We help contractors build brands that look better, convert better,
            and dominate their local markets. Whether you&rsquo;re established or
            just getting started, our systems are built to elevate your
            reputation and drive consistent estimate requests.
          </p>
        </header>

        {/* ── Service cards grid (desktop) ── */}
        <div className="services__grid" role="list">
          {services.map((s) => (
            <div key={s.id} role="listitem">
              <ServiceCard
                title={s.title}
                image={s.image}
                imageAlt={s.imageAlt}
                features={s.features}
                highlight={s.highlight}
              />
            </div>
          ))}
        </div>

        {/* ── Service cards carousel (tablet / mobile) ── */}
        <div className="services__viewport" aria-roledescription="carousel">
          <div
            className="services__track"
            style={{ transform: `translateX(-${index * 100}%)` }}
            aria-live="polite"
          >
            {services.map((s) => (
              <div
                key={s.id}
                className="services__slide"
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${services.length}: ${s.title}`}
              >
                <ServiceCard
                  title={s.title}
                  image={s.image}
                  imageAlt={s.imageAlt}
                  features={s.features}
                  highlight={s.highlight}
                />
              </div>
            ))}
          </div>
        </div>

        {/* ── Navigation arrows ── */}
        <div className="services__nav" role="group" aria-label="Service pagination">
          <button
            type="button"
            className="services__arrow"
            aria-label="Previous services"
            onClick={prev}
          >
            <ChevronLeft size={18} strokeWidth={2.5} aria-hidden="true" />
          </button>
          <button
            type="button"
            className="services__arrow"
            aria-label="Next services"
            onClick={next}
          >
            <ChevronRight size={18} strokeWidth={2.5} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}