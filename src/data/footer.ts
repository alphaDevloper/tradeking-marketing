// src/data/footer.ts
// Footer section data — marquee text, agency info, link groups, CTA

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterContact {
  email: string;
  phone: string;
  address: string;
  availability: string;
  tagline: string;
}

export interface FooterData {
  /** First phrase in the marquee (left of the separator) */
  marqueeText: string;
  /** Second phrase in the marquee (right of the separator) */
  marqueeTextAfter: string;
  /** Separator rendered between the two marquee phrases (red star) */
  marqueeSeparator: string;
  /** Agency / brand info shown in the first column */
  agencyName: string;
  contact: FooterContact;
  /** Quick Links column */
  quickLinks: FooterLink[];
  /** Social column */
  social: FooterLink[];
  /** Term & Policies column */
  policies: FooterLink[];
  /** Sub-heading shown above the CTA in the last column */
  ctaHeading: string;
  /** CTA button label */
  ctaLabel: string;
  /** CTA button target */
  ctaHref: string;
}

export const footer: FooterData = {
  /** First phrase in the marquee (left of the separator) */
  marqueeText: 'TRADEKING MARKETING',
  /** Second phrase in the marquee (right of the separator) */
  marqueeTextAfter: 'AI WEBSITES & MARKETING',
  /** Separator rendered between the two marquee phrases (red star) */
  marqueeSeparator: '★',
  agencyName: 'TradeKing Marketing®',
  contact: {
    email: 'contact.dev@gmail.com',
    phone: '+(407) 641-3731',
    address: '30 N. Gould St. Ste R, Sheridan, WY 82801',
    availability: '24 X 7, Send us a message',
    tagline:
      'A highly converting website design for your service business. That’s a promise.',
  },
  quickLinks: [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Blog', href: '/blog' },
    { label: 'Tool Reviews', href: '/tool-reviews' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Case Studies', href: '/case-studies' },
  ],
  social: [
    { label: 'Instagram', href: 'https://www.instagram.com/abdu.llahalam680/' },
    { label: 'Trustpilot', href: 'https://trustpilot.com' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/abdullahalam680/',
    },
  ],
  policies: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms Of Service', href: '/terms' },
    { label: 'Copyright', href: '/copyright' },
  ],
  ctaHeading: 'Connect With Us Now',
  ctaLabel: 'Get A Free Custom Strategy',
  ctaHref: '/contact',
};
