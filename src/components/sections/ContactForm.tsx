// src/components/sections/ContactForm.tsx
// "Ready To Be The #1 Contractor In Your Market?" — final CTA / lead capture
// section. Centered headline (with red #1 accent), subtitle, and a white
// rounded card containing a two-column input grid plus a full-width field and
// a glowing red CTA button. Submits via Web3Forms.

import { useState, type FormEvent } from 'react';

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? '';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === 'submitting') return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    // Client-side required-field validation for the explicit required fields.
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
    formData.append('subject', 'New Strategy Call Request — TradeKing Marketing');
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
      className="ctac"
      id="contact"
      aria-label="Book a free custom strategy call"
    >
      <div className="ctac__container">

        {/* ── Header ─────────────────────────────────────────────────────── */}
        <header className="ctac__header">
          <h2 className="ctac__heading">
            <span className="ctac__hl-line">READY TO BE THE&nbsp;<span className="ctac__hl-accent">#1</span></span>
            <span className="ctac__hl-line">CONTRACTOR IN YOUR MARKET?</span>
          </h2>
          <p className="ctac__subtitle">
            Fill out the form below and we'll be in touch within 24 hours to book your free custom strategy call.
          </p>
        </header>

        {/* ── White form card ────────────────────────────────────────────── */}
        <form className="ctac__card" onSubmit={handleSubmit} noValidate>
          <input type="hidden" name="botcheck" />

          <div className="ctac__grid">
            {/* Row 1 */}
            <div className="ctac__field">
              <label htmlFor="ctac-name" className="ctac__label">Full Name</label>
              <input
                id="ctac-name"
                name="Full Name"
                type="text"
                placeholder="John Smith"
                className="ctac__input"
                autoComplete="name"
                required
              />
            </div>
            <div className="ctac__field">
              <label htmlFor="ctac-company" className="ctac__label">Company Name</label>
              <input
                id="ctac-company"
                name="Company Name"
                type="text"
                placeholder="Smith Roofing Co."
                className="ctac__input"
                autoComplete="organization"
                required
              />
            </div>

            {/* Row 2 */}
            <div className="ctac__field">
              <label htmlFor="ctac-phone" className="ctac__label">Phone Number</label>
              <input
                id="ctac-phone"
                name="Phone Number"
                type="tel"
                placeholder="(407) 555-0123"
                className="ctac__input"
                autoComplete="tel"
                required
              />
            </div>
            <div className="ctac__field">
              <label htmlFor="ctac-email" className="ctac__label">Email Address</label>
              <input
                id="ctac-email"
                name="Email Address"
                type="email"
                placeholder="you@company.com"
                className="ctac__input"
                autoComplete="email"
                required
              />
            </div>

            {/* Row 3 */}
            <div className="ctac__field">
              <label htmlFor="ctac-website" className="ctac__label">Website URL</label>
              <input
                id="ctac-website"
                name="Website URL"
                type="url"
                placeholder="smithroofing.com"
                className="ctac__input"
                autoComplete="url"
              />
            </div>
            <div className="ctac__field">
              <label htmlFor="ctac-jobs" className="ctac__label">How Many Jobs Do You Do A Week?</label>
              <input
                id="ctac-jobs"
                name="Jobs Per Week"
                type="text"
                placeholder="e.g. 5-10 jobs per week"
                className="ctac__input"
              />
            </div>

            {/* Full-width row */}
            <div className="ctac__field ctac__field--full">
              <label htmlFor="ctac-services" className="ctac__label">What Services Are You Currently Running?</label>
              <input
                id="ctac-services"
                name="Current Services"
                type="text"
                placeholder="SEO, Google Ads, social media, website, etc."
                className="ctac__input"
              />
            </div>
          </div>

          {/* ── Submit ─────────────────────────────────────────────────── */}
          <button
            type="submit"
            className="ctac__submit"
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? 'Submitting…' : 'GET MY FREE STRATEGY CALL'}
          </button>

          {/* ── Feedback ───────────────────────────────────────────────── */}
          {status === 'success' && (
            <div className="ctac__feedback ctac__feedback--success" role="status">
              Thanks! We'll be in touch within 24 hours to book your free strategy call.
            </div>
          )}
          {status === 'error' && (
            <div className="ctac__feedback ctac__feedback--error" role="alert">
              {errorMessage}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}