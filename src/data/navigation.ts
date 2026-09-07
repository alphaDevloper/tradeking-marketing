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
      { label: 'Website Design', href: '/services/website-design', description: 'Custom sites built to convert' },
      { label: 'Website Development', href: '/services/website-development', description: 'Fast, modern, and responsive' },
      { label: 'Website Redesign', href: '/services/website-redesign', description: 'Modernize your existing site' },
      { label: 'Local SEO', href: '/services/local-seo', description: 'Rank higher in your local market' },
      { label: 'Conversion Optimization', href: '/services/conversion-optimization', description: 'Turn visitors into leads' },
      { label: 'Website Maintenance', href: '/services/maintenance', description: 'Keep your site running perfectly' },
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
