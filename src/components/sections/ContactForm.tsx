// src/components/sections/ContactForm.tsx
// "Ready To Be The #1 Contractor In Your Market?" — final CTA / lead capture
// section. Centered headline (with red #1 accent), subtitle, and a white
// rounded card containing a two-column input grid plus a full-width field and
// a glowing red CTA button. Submits via Web3Forms.

import useContactForm from '../../hooks/useContactForm';

export default function ContactForm() {
  const {
    register,
    submitHandler,
    isSubmitting,
    status,
    message,
  } = useContactForm({
    subject: 'New Strategy Call Request — TradeKing Marketing',
    fromName: 'TradeKing Marketing Website',
    defaultSuccessMessage: "Thanks! We'll be in touch within 24 hours to book your free strategy call.",
  });

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
        <form className="ctac__card" onSubmit={submitHandler} noValidate>
          <input
            type="checkbox"
            className="hidden"
            style={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
            {...register('botcheck')}
          />

          <div className="ctac__grid">
            {/* Row 1 */}
            <div className="ctac__field">
              <label htmlFor="ctac-name" className="ctac__label">Full Name</label>
              <input
                id="ctac-name"
                type="text"
                placeholder="John Smith"
                className="ctac__input"
                autoComplete="name"
                {...register('Full Name', { required: 'Full name is required' })}
              />
            </div>
            <div className="ctac__field">
              <label htmlFor="ctac-company" className="ctac__label">Company Name</label>
              <input
                id="ctac-company"
                type="text"
                placeholder="Smith Roofing Co."
                className="ctac__input"
                autoComplete="organization"
                {...register('Company Name', { required: 'Company name is required' })}
              />
            </div>

            {/* Row 2 */}
            <div className="ctac__field">
              <label htmlFor="ctac-phone" className="ctac__label">Phone Number</label>
              <input
                id="ctac-phone"
                type="tel"
                placeholder="(407) 555-0123"
                className="ctac__input"
                autoComplete="tel"
                {...register('Phone Number', { required: 'Phone number is required' })}
              />
            </div>
            <div className="ctac__field">
              <label htmlFor="ctac-email" className="ctac__label">Email Address</label>
              <input
                id="ctac-email"
                type="email"
                placeholder="you@company.com"
                className="ctac__input"
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
            <div className="ctac__field">
              <label htmlFor="ctac-website" className="ctac__label">Website URL</label>
              <input
                id="ctac-website"
                type="url"
                placeholder="smithroofing.com"
                className="ctac__input"
                autoComplete="url"
                {...register('Website URL')}
              />
            </div>
            <div className="ctac__field">
              <label htmlFor="ctac-jobs" className="ctac__label">How Many Jobs Do You Do A Week?</label>
              <input
                id="ctac-jobs"
                type="text"
                placeholder="e.g. 5-10 jobs per week"
                className="ctac__input"
                {...register('Jobs Per Week')}
              />
            </div>

            {/* Full-width row */}
            <div className="ctac__field ctac__field--full">
              <label htmlFor="ctac-services" className="ctac__label">What Services Are You Currently Running?</label>
              <input
                id="ctac-services"
                type="text"
                placeholder="SEO, Google Ads, social media, website, etc."
                className="ctac__input"
                {...register('Current Services')}
              />
            </div>
          </div>

          {/* ── Submit ─────────────────────────────────────────────────── */}
          <button
            type="submit"
            className="ctac__submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting…' : 'GET MY FREE STRATEGY CALL'}
          </button>

          {/* ── Feedback ───────────────────────────────────────────────── */}
          {status === 'success' && (
            <div className="ctac__feedback ctac__feedback--success" role="status">
              {message || "Thanks! We'll be in touch within 24 hours to book your free strategy call."}
            </div>
          )}
          {status === 'error' && (
            <div className="ctac__feedback ctac__feedback--error" role="alert">
              {message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}