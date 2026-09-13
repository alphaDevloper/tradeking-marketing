// src/components/sections/PortfolioContactForm.tsx
// "Ready To Build Something Your Competitors Will Lose Sleep Over?" portfolio contact form section.
// Composition:
//   • Centered header: 3-line headline (38.4px, weight 800, "LOSE SLEEP OVER?" red-to-orange gradient)
//   • Centered subtitle in light gray (14px, weight 400)
//   • White form card with 2-column input grid, pill-shaped inputs, bold uppercase labels (11.52px, weight 700)
//   • Full-width red CTA button "GET YOUR FREE CUSTOM DESIGN" (13px, weight 700) with red glow

import { useState, type FormEvent } from 'react';

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? '';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function PortfolioContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === 'submitting') return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    // Client-side required-field validation
    const required = ['Full Name', 'Company Name', 'Email Address', 'Phone Number'];
    for (const field of required) {
      if (!String(formData.get(field) ?? '').trim()) {
        setStatus('error');
        setErrorMessage('Please complete every required field before submitting.');
        return;
      }
    }

    setStatus('submitting');
    setErrorMessage('');

    formData.append('access_key', WEB3FORMS_ACCESS_KEY);
    formData.append('subject', 'New Portfolio Custom Design Request — TradeKing Marketing');
    formData.append('from_name', 'TradeKing Marketing Website');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = (await response.json()) as { success?: boolean; message?: string };

      if (data.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
        setErrorMessage(data.message ?? 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Network error. Please try again in a moment.');
    }
  }

  return (
    <section
      className="portfolio-contact"
      id="portfolio-contact"
      aria-label="Ready To Build Something Your Competitors Will Lose Sleep Over?"
    >
      <div className="portfolio-contact__container">

        {/* ── Centered Header ────────────────────────────────────────────── */}
        <header className="portfolio-contact__header">
          <h2 className="portfolio-contact__heading">
            <span className="portfolio-contact__hl-line">READY TO BUILD SOMETHING</span>
            <span className="portfolio-contact__hl-line">YOUR COMPETITORS</span>
            <span className="portfolio-contact__hl-line">
              WILL <span className="portfolio-contact__hl-accent">LOSE SLEEP OVER?</span>
            </span>
          </h2>
          <p className="portfolio-contact__subtitle">
            Fill out the form below and we'll be in touch within 24 hours to book your free custom design call.
          </p>
        </header>

        {/* ── White Form Card ────────────────────────────────────────────── */}
        <form className="portfolio-contact__card" onSubmit={handleSubmit} noValidate>
          <input type="hidden" name="botcheck" />

          <div className="portfolio-contact__grid">
            {/* Row 1 */}
            <div className="portfolio-contact__field">
              <label htmlFor="pcf-name" className="portfolio-contact__label">FULL NAME</label>
              <input
                id="pcf-name"
                name="Full Name"
                type="text"
                placeholder="John Smith"
                className="portfolio-contact__input"
                autoComplete="name"
                required
              />
            </div>
            <div className="portfolio-contact__field">
              <label htmlFor="pcf-company" className="portfolio-contact__label">COMPANY NAME</label>
              <input
                id="pcf-company"
                name="Company Name"
                type="text"
                placeholder="Smith Roofing Co."
                className="portfolio-contact__input"
                autoComplete="organization"
                required
              />
            </div>

            {/* Row 2 */}
            <div className="portfolio-contact__field">
              <label htmlFor="pcf-phone" className="portfolio-contact__label">PHONE NUMBER</label>
              <input
                id="pcf-phone"
                name="Phone Number"
                type="tel"
                placeholder="(407) 555-0123"
                className="portfolio-contact__input"
                autoComplete="tel"
                required
              />
            </div>
            <div className="portfolio-contact__field">
              <label htmlFor="pcf-email" className="portfolio-contact__label">EMAIL ADDRESS</label>
              <input
                id="pcf-email"
                name="Email Address"
                type="email"
                placeholder="you@company.com"
                className="portfolio-contact__input"
                autoComplete="email"
                required
              />
            </div>

            {/* Row 3 */}
            <div className="portfolio-contact__field">
              <label htmlFor="pcf-website" className="portfolio-contact__label">WEBSITE URL</label>
              <input
                id="pcf-website"
                name="Website URL"
                type="url"
                placeholder="smithroofing.com"
                className="portfolio-contact__input"
                autoComplete="url"
              />
            </div>
            <div className="portfolio-contact__field">
              <label htmlFor="pcf-jobs" className="portfolio-contact__label">HOW MANY JOBS DO YOU DO A WEEK?</label>
              <input
                id="pcf-jobs"
                name="Jobs Per Week"
                type="text"
                placeholder="e.g. 5-10 jobs per week"
                className="portfolio-contact__input"
              />
            </div>

            {/* Full-width Single-column Field */}
            <div className="portfolio-contact__field portfolio-contact__field--full">
              <label htmlFor="pcf-services" className="portfolio-contact__label">
                WHAT SERVICES ARE YOU CURRENTLY RUNNING?
              </label>
              <input
                id="pcf-services"
                name="Current Services"
                type="text"
                placeholder="SEO, Google Ads, social media, website, etc."
                className="portfolio-contact__input"
              />
            </div>
          </div>

          {/* ── Submit Button ───────────────────────────────────────────── */}
          <button
            type="submit"
            className="portfolio-contact__submit"
            id="portfolio-contact-submit"
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? 'SUBMITTING…' : 'GET YOUR FREE CUSTOM DESIGN'}
          </button>

          {/* ── Feedback Message ────────────────────────────────────────── */}
          {status === 'success' && (
            <div className="portfolio-contact__feedback portfolio-contact__feedback--success" role="status">
              Thanks! We'll be in touch within 24 hours to book your free custom design call.
            </div>
          )}
          {status === 'error' && (
            <div className="portfolio-contact__feedback portfolio-contact__feedback--error" role="alert">
              {errorMessage}
            </div>
          )}
        </form>

      </div>
    </section>
  );
}
