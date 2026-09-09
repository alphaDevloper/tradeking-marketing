// src/data/navigation.ts
// Central navigation data — edit here to change menu structure

export interface NavDropdownItem {
  label: string;
  href: string;
  description?: string;
}

export interface NavItem {
  label: string;
  href: string;
  dropdown?: NavDropdownItem[];
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  {
    label: 'Services',
    href: '/services',
    dropdown: [
      { label: 'Website Design & Development', href: '/services/website-design-development', description: 'Custom sites built to convert' },
      { label: 'Local SEO', href: '/services/local-seo', description: 'Rank higher in your local market' },
      { label: 'Local Service Ads', href: '/services/local-service-ads', description: 'Turn visitors into leads' }
    ],
  },
  { label: 'Case Studies', href: '/case-studies' },
];

export const phone = {
  display: '+(407) 641-3731',
  href: 'tel:+14076413731',
};

export const ctaLabel = 'Free Custom Design';
export const ctaHref = '/contact';
