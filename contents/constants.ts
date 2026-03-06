export const SITE_CONFIG = {
  name: "Alldelite",
  phone: "+91 9999374590",
  email: "corp@alldelite.com",
  tagline: "Industrial Energy Solutions",
} as const;

export const NAV_LINKS = [
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Products", href: "/products" },
  { label: "About Us", href: "/about" },
] as const;

export const FOOTER_QUICK_LINKS = [
  "Solutions",
  "Industries",
  "Products",
  "About Us",
  "Contact",
] as const;

export const FOOTER_PRODUCTS = [
  "Commercial Heat Pumps",
  "Pool Heat Pumps",
  "Ground Source Systems",
  "Air Source Heat Pumps",
  "Custom Solutions",
] as const;
