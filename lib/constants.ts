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

export const INDUSTRY_SOLUTIONS = [
  {
    title: "Builders & Developers",
    description:
      "Integrate cutting-edge climate control systems that enhance property value and accelerate green building certifications.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD1v_aeN_CbtusbnH7ZfWqBBoOYdnoSRo8He6-tvq540INCbBwQz4M9_ZOl6W3Gf_KowtWQwUkN1APcDWPQjOgKv7w9z8jwiraxStX3BeF3Om2l2GxEvwomTUyV4kfbSLQjKin1iy1vcCHRnQWk1AdZDY2TzYjPJ24ja0qjVfG4n7CxdpqGx4A4uP-88eg4XxVuBEe-g1Ia9sqmKu4HA50ewHoGKu8x88Q1OGFAdEZmEMCkOZ0dLE-fMVS4HqCPi5uFS8N-H7fjafc",
    imageAlt: "Construction site building",
    icon: "apartment",
    iconBg: "bg-gradient-accent-primary",
    features: [
      "Bulk Pricing for Multi-Unit Projects",
      "Pre-Construction Design Consultation",
      "Installation Timeline Coordination",
    ],
    cta: "Get Builder Pricing",
    ctaClass: "bg-gradient-accent-primary hover:bg-(--color-primary-dark)",
    checkClass: "text-(--color-primary)",
  },
  {
    title: "Hotels & Villas",
    description:
      "Deliver exceptional guest comfort while dramatically reducing energy costs with whisper-quiet, efficient systems.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCJ4YBlpNlaqROps7QEYKnCqIPyF92KKZgJxYp9L1STTjc7H-LyTf4AWyB__5phY23moK1JCqAQ5yBHOkIdxpgKkLz_MlAnOHDYG4nrg10wj9s2zdBC72ODHXUnsri-kN2-Ka2TgSFVbudhMWj2hyEcEuntuZgkX55xA6WXQEylSwCn73adCgxR0pqsAyBAfUig8vc2OQJmjD21BrHQH16lOr3fCcHjRClP_WRjaKJt5aga2oR6UFV13d1pBUZJefG8xs-L_n1_ffs",
    imageAlt: "Luxury hotel exterior",
    icon: "hotel",
    iconBg: "bg-gradient-accent-blue",
    features: [
      "Ultra-Quiet Operation for Guest Comfort",
      "Pool & Spa Heating Solutions",
      "24/7 Priority Maintenance",
      "Dedicated Account Manager",
    ],
    cta: "Explore Hotel Solutions",
    ctaClass: "bg-gradient-accent-blue hover:bg-blue-600",
    checkClass: "text-(--color-accent-blue)",
  },
  {
    title: "Industries & Factories",
    description:
      "Implement high performance heating system engineered to meet the rigorous demands of industrial operations.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuADlMF8ALJOfpjXvqvtCzU87uvy60nequ0JtAZZtKI-LpcgmUXJU7nfO3oCCI60gwb-Pz-npms-XlnXEo4geUjK8ZllShCg4ooGmOwP_d7jMTPZ2KjZ71CbzxbTsXroOnK9gjqvwfMpCeIz1eDHpXxc3t3AR7O5vQw1AORuVAdf-MYORROTzhxOpnJ1082aVJdiKhDUhK4DfU9F8EcZQ3NR63ivUqT5NwYH5YKQg9NLgLzNac8tOnM0llFI-cIdqu7m8Fi75QxuB7w",
    imageAlt: "Industrial factory",
    icon: "factory",
    iconBg: "bg-gradient-accent-purple",
    features: [
      "High-Temperature Water Systems",
      "Steam Up to 120°C",
      "Continuous Industrial Hot Water Supply",
      "Designed for Heavy-Duty Applications",
    ],
    cta: "Industrial Solutions",
    ctaClass: "bg-gradient-accent-purple hover:bg-purple-600",
    checkClass: "text-(--color-accent-purple)",
  },
] as const;
