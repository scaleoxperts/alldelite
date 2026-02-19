export const SITE_CONFIG = {
  name: "Alldelite",
  phone: "+91 9999374590",
  email: "corp@alldelite.com",
  tagline: "Industrial Energy Solutions",
} as const;

export const NAV_LINKS = [
  { label: "Solutions", href: "#" },
  { label: "Industries", href: "#" },
  { label: "Products", href: "#" },
  { label: "About Us", href: "#" },
] as const;

export const HERO_STATS = [
  { value: "45%", label: "Energy Cost Reduction" },
  { value: "1-3", unit: "Years", label: "Years to ROI" },
  { value: "200+", label: "Commercial Installations" },
  {
    value: "24/7",
    label: "Dedicated Support",
    badge: "Industry Leader Since 2010",
  },
] as const;
