// src/components/sections/GetInTouch.tsx
// "Get In Touch" contact section.
// Composition:
//   • Black background (#050505 or #0a0a0a)
//   • LEFT COLUMN:
//       - 38.4px / 800 headline: "GET IN " (white) + "TOUCH" (red-to-orange gradient italic)
//       - 14px / 400 body paragraphs in light gray
//       - Two contact info cards:
//           * Email Card: red rounded square with Mail icon, "EMAIL US" (10.24px / 700), "dean@kingcontractor.com" (15.36px / 700)
//           * Phone Card: red rounded square with Phone icon, "CALL US, AVAILABLE 24/7" (10.24px / 700), "+(407) 641-3731" (15.36px / 700)
//       - Primary CTA: "BOOK A CALL" with Calendar icon, red-to-orange gradient, glow effect (13px / 700)
//   • RIGHT COLUMN (Form Card):
//       - White rounded rectangle card with generous padding
//       - Header: "START HERE. " (30.72px / 800 black) + "IT'S FREE." (30.72px / 800 red-to-orange gradient italic)
//       - Two-column input grid with pill/rounded fields & uppercase bold labels (11px / 700)
//       - Services currently running field (full width)
//       - Anything else we should know textarea (full width)
//       - Submit CTA: "GET MY FREE STRATEGY CALL" (13.44px / 700)
//       - Centered disclaimer (12.16px / 400)

import { Mail, Phone, Calendar } from 'lucide-react';
import useContactForm from '../../hooks/useContactForm';

export default function GetInTouch() {
  const {
    register,
    submitHandler,
    isSubmitting,
    status,
    message,
  } = useContactForm({
    subject: 'New Contact Inquiry — TradeKing Marketing',
    fromName: 'TradeKing Marketing Website',
    defaultSuccessMessage: "Thank you! We've received your request and will reach out within 24 hours to schedule your strategy session.",
  });

  return (
    <section className="get-in-touch" id="contact-section" aria-label="Get In Touch">
      <div className="get-in-touch__container">

        {/* ── LEFT COLUMN: Text Content + Contact Cards + CTA ── */}
        <div className="get-in-touch__left">
          <h2 className="get-in-touch__heading">
            GET IN <span className="get-in-touch__heading-accent">TOUCH</span>
          </h2>

          <p className="get-in-touch__paragraph">
            We work with roofing, HVAC, plumbing, solar, and construction companies across the United States. If you're serious about growing your business online, we want to hear from you.
          </p>

          <p className="get-in-touch__paragraph">
            Book a call directly via Calendly, or fill out the form and we'll reach out to schedule your free strategy session.
          </p>

          <div className="get-in-touch__cards">
            {/* Email Card */}
            <a
              href="mailto:dean@kingcontractor.com"
              className="get-in-touch__card"
              aria-label="Email dean@kingcontractor.com"
            >
              <div className="get-in-touch__card-icon" aria-hidden="true">
                <Mail size={20} strokeWidth={2.2} />
              </div>
              <div className="get-in-touch__card-content">
                <span className="get-in-touch__card-label">EMAIL US</span>
                <span className="get-in-touch__card-value">dean@kingcontractor.com</span>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href="tel:+14076413731"
              className="get-in-touch__card"
              aria-label="Call +(407) 641-3731"
            >
              <div className="get-in-touch__card-icon" aria-hidden="true">
                <Phone size={20} strokeWidth={2.2} />
              </div>
              <div className="get-in-touch__card-content">
                <span className="get-in-touch__card-label">CALL US, AVAILABLE 24/7</span>
                <span className="get-in-touch__card-value">+(407) 641-3731</span>
              </div>
            </a>
          </div>

          {/* Book A Call CTA Button */}
          <div>
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="get-in-touch__cta-btn"
              id="contact-book-a-call"
            >
              <Calendar size={18} strokeWidth={2.2} aria-hidden="true" />
              <span>BOOK A CALL</span>
            </a>
          </div>
        </div>

        {/* ── RIGHT COLUMN: Contact Form Card ── */}
        <div className="get-in-touch__right">
          <div className="get-in-touch__form-card">
            <h3 className="get-in-touch__form-heading">
              START HERE. <span className="get-in-touch__form-heading-accent">IT'S FREE.</span>
            </h3>

            <form onSubmit={submitHandler} noValidate>
              <input
                type="checkbox"
                className="hidden"
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
                {...register('botcheck')}
              />

              <div className="get-in-touch__form-grid">
                {/* Row 1 */}
                <div className="get-in-touch__field">
                  <label htmlFor="git-fullname" className="get-in-touch__label">
                    FULL NAME
                  </label>
                  <input
                    id="git-fullname"
                    type="text"
                    placeholder="John Smith"
                    className="get-in-touch__input"
                    autoComplete="name"
                    {...register('Full Name', { required: 'Full name is required' })}
                  />
                </div>

                <div className="get-in-touch__field">
                  <label htmlFor="git-company" className="get-in-touch__label">
                    COMPANY NAME
                  </label>
                  <input
                    id="git-company"
                    type="text"
                    placeholder="Smith Roofing Co."
                    className="get-in-touch__input"
                    autoComplete="organization"
                    {...register('Company Name', { required: 'Company name is required' })}
                  />
                </div>

                {/* Row 2 */}
                <div className="get-in-touch__field">
                  <label htmlFor="git-phone" className="get-in-touch__label">
                    PHONE NUMBER
                  </label>
                  <input
                    id="git-phone"
                    type="tel"
                    placeholder="(407) 000-0000"
                    className="get-in-touch__input"
                    autoComplete="tel"
                    {...register('Phone Number', { required: 'Phone number is required' })}
                  />
                </div>

                <div className="get-in-touch__field">
                  <label htmlFor="git-email" className="get-in-touch__label">
                    EMAIL ADDRESS
                  </label>
                  <input
                    id="git-email"
                    type="email"
                    placeholder="you@company.com"
                    className="get-in-touch__input"
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
                <div className="get-in-touch__field">
                  <label htmlFor="git-website" className="get-in-touch__label">
                    WEBSITE URL
                  </label>
                  <input
                    id="git-website"
                    type="url"
                    placeholder="smithroofing.com"
                    className="get-in-touch__input"
                    autoComplete="url"
                    {...register('Website URL')}
                  />
                </div>

                <div className="get-in-touch__field">
                  <label htmlFor="git-jobs" className="get-in-touch__label">
                    HOW MANY JOBS A WEEK
                  </label>
                  <input
                    id="git-jobs"
                    type="text"
                    placeholder="e.g. 3-5"
                    className="get-in-touch__input"
                    {...register('Jobs Per Week')}
                  />
                </div>

                {/* Full-width Row: Services Currently Running */}
                <div className="get-in-touch__field get-in-touch__field--full">
                  <label htmlFor="git-services" className="get-in-touch__label">
                    SERVICES CURRENTLY RUNNING
                  </label>
                  <input
                    id="git-services"
                    type="text"
                    placeholder="SEO, Ads, none yet..."
                    className="get-in-touch__input"
                    {...register('Services Currently Running')}
                  />
                </div>

                {/* Full-width Row: Anything Else We Should Know? */}
                <div className="get-in-touch__field get-in-touch__field--full">
                  <label htmlFor="git-details" className="get-in-touch__label">
                    ANYTHING ELSE WE SHOULD KNOW?
                  </label>
                  <textarea
                    id="git-details"
                    placeholder="Tell us about your goals..."
                    className="get-in-touch__textarea"
                    rows={4}
                    {...register('Project Details')}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="get-in-touch__submit-btn"
                id="contact-form-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'SUBMITTING…' : 'GET MY FREE STRATEGY CALL'}
              </button>

              {/* Status feedback */}
              {status === 'success' && (
                <div className="get-in-touch__feedback get-in-touch__feedback--success" role="status">
                  {message || "Thank you! We've received your request and will reach out within 24 hours to schedule your strategy session."}
                </div>
              )}
              {status === 'error' && (
                <div className="get-in-touch__feedback get-in-touch__feedback--error" role="alert">
                  {message}
                </div>
              )}

              {/* Centered Disclaimer */}
              <p className="get-in-touch__disclaimer">
                No commitment. No hard sell. Just a straight conversation about what it would take to make you the most trusted contractor in your city.
              </p>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
