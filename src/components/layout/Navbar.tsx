import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Phone, Menu, X, ArrowRight } from 'lucide-react';
import logoSrc from '../../assets/tradeking_logo.png';
import { navItems, phone, ctaLabel, ctaHref } from '../../data/navigation';

// ─── Scroll-to-top on every route change ─────────────────────────────────────

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);
  return null;
}

// ─── Dropdown Menu ────────────────────────────────────────────────────────────

interface DropdownProps {
  items: NonNullable<(typeof navItems)[number]['dropdown']>;
  isOpen: boolean;
}

function Dropdown({ items, isOpen }: DropdownProps) {
  return (
    <div
      className={`nav-dropdown ${isOpen ? 'nav-dropdown--open' : ''}`}
      role="menu"
      aria-hidden={!isOpen}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          className="nav-dropdown__item"
          role="menuitem"
        >
          <span className="nav-dropdown__label">{item.label}</span>
          {item.description && (
            <span className="nav-dropdown__desc">{item.description}</span>
          )}
        </Link>
      ))}
    </div>
  );
}

// ─── Desktop Nav Item ─────────────────────────────────────────────────────────

interface DesktopNavLinkProps {
  item: (typeof navItems)[number];
  isActive: boolean;
}

function DesktopNavLink({ item, isActive }: DesktopNavLinkProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const hasDropdown = Boolean(item.dropdown?.length);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  if (!hasDropdown) {
    return (
      <Link
        to={item.href}
        className={`nav-link ${isActive ? 'nav-link--active' : ''}`}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      ref={ref}
      className="nav-item-wrapper"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className={`nav-link nav-link--btn ${isActive ? 'nav-link--active' : ''} ${open ? 'nav-link--open' : ''}`}
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {item.label}
        <ChevronDown
          size={14}
          strokeWidth={2.5}
          className={`nav-chevron ${open ? 'nav-chevron--open' : ''}`}
          aria-hidden="true"
        />
      </button>
      <Dropdown items={item.dropdown!} isOpen={open} />
    </div>
  );
}

// ─── Mobile Nav ───────────────────────────────────────────────────────────────

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  activePath: string;
}

function MobileNav({ isOpen, onClose, activePath }: MobileNavProps) {
  // Derive dropdown open state from outside-click + close-handler instead of
  // resetting it in an effect.
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  function closeAndReset() {
    setOpenDropdown(null);
    onClose();
  }

  return (
    <>
      {/* Overlay */}
      <div
        className={`mobile-overlay ${isOpen ? 'mobile-overlay--visible' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={`mobile-drawer ${isOpen ? 'mobile-drawer--open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Drawer header */}
        <div className="mobile-drawer__header">
          <button
            type="button"
            className="mobile-drawer__close"
            onClick={onClose}
            aria-label="Close navigation menu"
          >
            <X size={22} />
          </button>
        </div>

        {/* Nav links */}
        <nav className="mobile-drawer__nav" aria-label="Mobile navigation">
          {navItems.map((item) => {
            const isActive = activePath === item.href;
            const hasDropdown = Boolean(item.dropdown?.length);
            const isDropdownOpen = openDropdown === item.label;

            return (
              <div key={item.label} className="mobile-nav-item">
                {hasDropdown ? (
                  <>
                    <button
                      type="button"
                      className={`mobile-nav-link mobile-nav-link--toggle ${isActive ? 'mobile-nav-link--active' : ''}`}
                      onClick={() =>
                        setOpenDropdown(isDropdownOpen ? null : item.label)
                      }
                      aria-expanded={isDropdownOpen}
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        className={`nav-chevron ${isDropdownOpen ? 'nav-chevron--open' : ''}`}
                        aria-hidden="true"
                      />
                    </button>
                    <div className={`mobile-dropdown ${isDropdownOpen ? 'mobile-dropdown--open' : ''}`}>
                      <div className="mobile-dropdown__inner">
                        {item.dropdown!.map((sub) => (
                          <Link
                            key={sub.href}
                            to={sub.href}
                            onClick={closeAndReset}
                            className="mobile-dropdown__item"
                          >
                            <ArrowRight size={13} className="mobile-dropdown__arrow" aria-hidden="true" />
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.href}
                    onClick={closeAndReset}
                    className={`mobile-nav-link ${isActive ? 'mobile-nav-link--active' : ''}`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            );
          })}

          {/* Contact */}
          <Link
            to="/contact"
            onClick={closeAndReset}
            className="mobile-nav-link"
          >
            Contact Us
          </Link>
        </nav>

        {/* Drawer footer */}
        <div className="mobile-drawer__footer">
          <a href={phone.href} className="mobile-phone">
            <Phone size={16} aria-hidden="true" />
            {phone.display}
          </a>
          <Link
            to={ctaHref}
            onClick={closeAndReset}
            className="btn-primary mobile-cta"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const activePath = location.pathname;

  // Detect scroll for shadow/background intensification
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function closeMobile() {
    setMobileOpen(false);
  }

  return (
    <>
      <ScrollToTop />

      <header
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
        role="banner"
      >
        <div className="navbar__inner">

          {/* ── Left nav links ── */}
          <nav className="navbar__left" aria-label="Primary navigation left">
            {navItems.slice(0, 5).map((item) => (
              <DesktopNavLink
                key={item.label}
                item={item}
                isActive={activePath === item.href}
              />
            ))}
          </nav>

          {/* ── Center logo ── */}
          <Link to="/" className="navbar__logo-link" aria-label="TradeKing Marketing — Home">
            <img
              src={logoSrc}
              alt="TradeKing Marketing"
              className="navbar__logo"
              width={110}
              height={110}
            />
          </Link>

          {/* ── Right actions ── */}
          <div className="navbar__right">
            <Link to="/contact" className="nav-link nav-link--contact">
              Contact Us
            </Link>
            <a href={phone.href} className="navbar__phone" aria-label={`Call us at ${phone.display}`}>
              <Phone size={15} strokeWidth={2} aria-hidden="true" />
              <span>{phone.display}</span>
            </a>
            <Link
              to={ctaHref}
              className="navbar__cta btn-primary"
              id="navbar-cta"
            >
              {ctaLabel}
            </Link>

            {/* Mobile hamburger */}
            <button
              type="button"
              className="navbar__hamburger"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Spacer so page content doesn't hide under fixed navbar */}
      <div className="navbar__spacer" aria-hidden="true" />

      {/* Mobile drawer */}
      <MobileNav
        isOpen={mobileOpen}
        onClose={closeMobile}
        activePath={activePath}
      />
    </>
  );
}