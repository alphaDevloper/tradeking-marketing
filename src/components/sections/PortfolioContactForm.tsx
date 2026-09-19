// src/components/sections/PortfolioContactForm.tsx
// "Ready To Build Something Your Competitors Will Lose Sleep Over?" portfolio contact form section.
// Composition:
//   • Centered header: 3-line headline (38.4px, weight 800, "LOSE SLEEP OVER?" red-to-orange gradient)
//   • Centered subtitle in light gray (14px, weight 400)
//   • White form card with 2-column input grid, pill-shaped inputs, bold uppercase labels (11.52px, weight 700)
//   • Full-width red CTA button "GET YOUR FREE CUSTOM DESIGN" (13px, weight 700) with red glow

import useContactForm from '../../hooks/useContactForm';

export default function PortfolioContactForm() {
  const {
    register,
    submitHandler,
    isSubmitting,
    status,
    message,
  } = useContactForm({
    subject: 'New Portfolio Custom Design Request — TradeKing Marketing',
    fromName: 'TradeKing Marketing Website',
    defaultSuccessMessage: "Thanks! We'll be in touch within 24 hours to book your free custom design call.",
  });

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
        <form className="portfolio-contact__card" onSubmit={submitHandler} noValidate>
          <input
            type="checkbox"
            className="hidden"
            style={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
            {...register('botcheck')}
          />

          <div className="portfolio-contact__grid">
            {/* Row 1 */}
            <div className="portfolio-contact__field">
              <label htmlFor="pcf-name" className="portfolio-contact__label">FULL NAME</label>
              <input
                id="pcf-name"
                type="text"
                placeholder="John Smith"
                className="portfolio-contact__input"
                autoComplete="name"
                {...register('Full Name', { required: 'Full name is required' })}
              />
            </div>
            <div className="portfolio-contact__field">
              <label htmlFor="pcf-company" className="portfolio-contact__label">COMPANY NAME</label>
              <input
                id="pcf-company"
                type="text"
                placeholder="Smith Roofing Co."
                className="portfolio-contact__input"
                autoComplete="organization"
                {...register('Company Name', { required: 'Company name is required' })}
              />
            </div>

            {/* Row 2 */}
            <div className="portfolio-contact__field">
              <label htmlFor="pcf-phone" className="portfolio-contact__label">PHONE NUMBER</label>
              <input
                id="pcf-phone"
                type="tel"
                placeholder="(407) 555-0123"
                className="portfolio-contact__input"
                autoComplete="tel"
                {...register('Phone Number', { required: 'Phone number is required' })}
              />
            </div>
            <div className="portfolio-contact__field">
              <label htmlFor="pcf-email" className="portfolio-contact__label">EMAIL ADDRESS</label>
              <input
                id="pcf-email"
                type="email"
                placeholder="you@company.com"
                className="portfolio-contact__input"
                autoComplete="email"
                {...register('Email Address', {
                  required: 'Email address is required',
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: 'Please enter a valid email address',
                  },
                })}
              />
            </div>

            {/* Row 3 */}
            <div className="portfolio-contact__field">
              <label htmlFor="pcf-website" className="portfolio-contact__label">WEBSITE URL</label>
              <input
                id="pcf-website"
                type="url"
                placeholder="smithroofing.com"
                className="portfolio-contact__input"
                autoComplete="url"
                {...register('Website URL')}
              />
            </div>
            <div className="portfolio-contact__field">
              <label htmlFor="pcf-jobs" className="portfolio-contact__label">HOW MANY JOBS DO YOU DO A WEEK?</label>
              <input
                id="pcf-jobs"
                type="text"
                placeholder="e.g. 5-10 jobs per week"
                className="portfolio-contact__input"
                {...register('Jobs Per Week')}
              />
            </div>

            {/* Full-width Single-column Field */}
            <div className="portfolio-contact__field portfolio-contact__field--full">
              <label htmlFor="pcf-services" className="portfolio-contact__label">
                WHAT SERVICES ARE YOU CURRENTLY RUNNING?
              </label>
              <input
                id="pcf-services"
                type="text"
                placeholder="SEO, Google Ads, social media, website, etc."
                className="portfolio-contact__input"
                {...register('Current Services')}
              />
            </div>
          </div>

          {/* ── Submit Button ───────────────────────────────────────────── */}
          <button
            type="submit"
            className="portfolio-contact__submit"
            id="portfolio-contact-submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'SUBMITTING…' : 'GET YOUR FREE CUSTOM DESIGN'}
          </button>

          {/* ── Feedback Message ────────────────────────────────────────── */}
          {status === 'success' && (
            <div className="portfolio-contact__feedback portfolio-contact__feedback--success" role="status">
              {message || "Thanks! We'll be in touch within 24 hours to book your free custom design call."}
            </div>
          )}
          {status === 'error' && (
            <div className="portfolio-contact__feedback portfolio-contact__feedback--error" role="alert">
              {message}
            </div>
          )}
        </form>

      </div>
    </section>
  );
}
