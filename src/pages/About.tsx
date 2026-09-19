// src/pages/About.tsx
// About page — composes the About Hero, My Story, Track Record, Our Mission,
// Work With Us, Our Promise, Contact Form, Why Choose Us, Featured Work, FAQ,
// and Footer. React 19 natively hoists <title>, <meta>, and <link> to <head>.

import AboutHero from '../components/sections/AboutHero';
import MyStory from '../components/sections/MyStory';
import TrackRecord from '../components/sections/TrackRecord';
import OurMission from '../components/sections/OurMission';
import WorkWithUs from '../components/sections/WorkWithUs';
import OurPromise from '../components/sections/OurPromise';
import ContactForm from '../components/sections/ContactForm';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import FeaturedWork from '../components/sections/FeaturedWork';
import FAQ from '../components/sections/FAQ';
import Footer from '../components/layout/Footer';

// ── Constants ─────────────────────────────────────────────────────────────────

const SITE_URL = 'https://tradeking-marketing.vercel.app';
const PAGE_TITLE = 'About TradeKing Marketing | Digital Marketing Agency Canada';
const PAGE_DESCRIPTION =
  'Meet Abdullah Alam, solo founder of TradeKing Marketing — a web design & digital marketing agency in Canada helping small businesses grow. Book a free call today.';

// ── JSON-LD Schemas ───────────────────────────────────────────────────────────

const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': `${SITE_URL}/about-us#aboutpage`,
  url: `${SITE_URL}/about-us`,
  name: 'About TradeKing Marketing — Web Design & Digital Marketing Agency Canada',
  description:
    'Learn about TradeKing Marketing and founder Abdullah Alam — a solo founder web design and digital marketing agency helping Canadian businesses grow online.',
  isPartOf: {
    '@type': 'WebSite',
    name: 'TradeKing Marketing',
    url: `${SITE_URL}/`,
  },
  mainEntity: { '@id': `${SITE_URL}/about-us#founder` },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE_URL}/about-us#founder`,
  name: 'Abdullah Alam',
  jobTitle: 'Founder & Creative Director',
  worksFor: {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'TradeKing Marketing',
    url: `${SITE_URL}/`,
  },
  url: `${SITE_URL}/about-us`,
  description:
    'Abdullah Alam is the solo founder of TradeKing Marketing, a web design and digital marketing agency serving businesses across Canada.',
  sameAs: [
    'https://www.linkedin.com/in/abdullahalam680/',
    'https://www.instagram.com/abdu.llahalam680/',
  ],
  knowsAbout: [
    'Web Design',
    'Digital Marketing',
    'Search Engine Optimization',
    'Website Development',
    'Brand Identity',
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${SITE_URL}/about-us#faq`,
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does it cost to hire a digital marketing agency in Canada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every project is scoped around your goals, so pricing varies. We offer transparent, fixed-price proposals — no hidden fees. Book a free strategy call to get a customized quote.',
      },
    },
    {
      '@type': 'Question',
      name: "What's the difference between a solo founder agency and a large marketing firm?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'With a solo founder agency like TradeKing, you work directly with the person building your website and strategy — no account managers, no handoffs, no communication gaps. You get senior-level attention on every detail.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you work with small businesses across all provinces in Canada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We work with businesses in every province — Ontario, British Columbia, Alberta, Quebec, and beyond. Everything is handled remotely, so your location never limits the quality of your project.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to design and develop a website for a Canadian business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most custom websites launch within 3 to 5 weeks. The exact timeline depends on the project scope, content readiness, and feedback turnaround. We provide a clear timeline before any work begins.',
      },
    },
    {
      '@type': 'Question',
      name: 'What SEO services does TradeKing Marketing offer for Canadian businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We offer technical SEO, local search optimization, Google Business Profile setup, on-page optimization, content strategy, and ongoing rank tracking — all tailored to help Canadian businesses get found by the right customers.',
      },
    },
    {
      '@type': 'Question',
      name: "Can I see examples of websites you've designed for Canadian clients?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Visit our portfolio page to see real projects we have designed and developed for businesses across Canada, including the strategy and results behind each one.',
      },
    },
  ],
};

// ── Page Component ────────────────────────────────────────────────────────────

export default function About() {
  return (
    <>
      {/* ── React 19 native head tags — hoisted to <head> automatically ── */}
      <title>{PAGE_TITLE}</title>
      <meta name="description" content={PAGE_DESCRIPTION} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={`${SITE_URL}/about-us`} />

      {/* Open Graph */}
      <meta property="og:title" content={PAGE_TITLE} />
      <meta property="og:description" content={PAGE_DESCRIPTION} />
      <meta property="og:url" content={`${SITE_URL}/about-us`} />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={PAGE_TITLE} />
      <meta name="twitter:description" content={PAGE_DESCRIPTION} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(aboutPageSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(personSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      <main className="page page--about" aria-label="About TradeKing Marketing">
        <AboutHero />
        <MyStory />
        <TrackRecord />
        <OurMission />
        <WorkWithUs />
        <OurPromise />
        <ContactForm />
        <WhyChooseUs />
        <FeaturedWork />
        <FAQ />
        <Footer />
      </main>
    </>
  );
}
