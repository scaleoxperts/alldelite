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

export const IMPACT_METRICS = [
  {
    icon: "water_drop",
    value: "1,102,531,985.60",
    label: "Hot Water Generated",
    unit: "in Liters",
  },
  {
    icon: "bolt",
    value: "39,888,115.60",
    label: "Energy Saved",
    unit: "Kilowatt Hours (kWh)",
  },
  {
    icon: "eco",
    value: "30,589,112",
    label: "Carbon Offset",
    unit: "in Kilograms",
  },
] as const;

export const INDUSTRY_SOLUTIONS = [
  {
    title: "Builders & Developers",
    description:
      "Integrate cutting-edge climate control systems that enhance property value and accelerate green building certifications.",
    image: "/landing/impact-1.png",
    imageAlt: "Construction site building",
    icon: "apartment",
    iconBg: "bg-gradient-accent-primary",
    features: [
      "Bulk Pricing for Multi-Unit Projects",
      "Pre-Construction Design Consultation",
      "Installation Timeline Coordination",
    ],
    cta: "Get Builder Pricing",
    ctaClass:
      "bg-gradient-accent-primary hover:bg-(--color-primary-dark) shadow-[0_0_30px_rgba(0,182,122,0.45)]",
    checkClass: "text-(--color-primary)",
  },
  {
    title: "Hotels & Villas",
    description:
      "Deliver exceptional guest comfort while dramatically reducing energy costs with whisper-quiet, efficient systems.",
    image: "/landing/impact-2.png",
    imageAlt: "Luxury hotel exterior",
    icon: "hotel",
    iconBg: "bg-gradient-accent-blue",
    features: [
      "Ultra-Quiet Operation for Guest Comfort",
      "Pool & Spa Heating Solutions",
      "24/7 Priority Maintenance",
      "Dedicated Account Manager",
    ],
    cta: "Get Hotel Pricing",
    ctaClass:
      "bg-gradient-accent-blue hover:bg-blue-600 shadow-[0_0_30px_rgba(59,130,246,0.45)]",
    checkClass: "text-(--color-accent-blue)",
  },
  {
    title: "Industries & Factories",
    description:
      "Implement high performance heating system engineered to meet the rigorous demands of industrial operations.",
    image: "/landing/impact-3.png",
    imageAlt: "Industrial factory",
    icon: "factory",
    iconBg: "bg-gradient-accent-purple",
    features: [
      "High-Temperature Water Systems",
      "Steam Up to 120°C",
      "Continuous Industrial Hot Water Supply",
      "Designed for Heavy-Duty Applications",
    ],
    cta: "Get Industrial Pricing",
    ctaClass:
      "bg-gradient-accent-purple hover:bg-purple-600 shadow-[0_0_30px_rgba(139,92,246,0.45)]",
    checkClass: "text-(--color-accent-purple)",
  },
] as const;

export const PRODUCTS = [
  {
    icon: "business",
    iconBg: "bg-gradient-accent-primary",
    title: "Commercial Heat Pump",
    description:
      "Advanced scroll compressor technology with eco-friendly refrigerants, delivering reliable, high-performance heating.",
  },
  {
    icon: "water_drop",
    iconBg: "bg-gradient-accent-blue",
    title: "Swimming Pool Heat Pumps",
    description:
      "Designed to heat swimming pool water efficiently using ambient air heat, these high-performance systems save energy.",
  },
  {
    icon: "bolt",
    iconBg: "bg-gradient-accent-orange",
    title: "Ground Source Heat Pump",
    description:
      "Optimized for low-temperature ground source conditions, delivering efficient, reliable heating with maximum energy savings.",
  },
] as const;

export const CASE_STUDIES = [
  {
    image: "/landing/case-study-1.png",
    imageAlt: "Office Building",
    categoryColor: "text-(--color-primary)",
    category: "Office Complexes",
    title: "Modern Commercial Buildings",
    hoverText:
      "Serving large-scale office spaces with individual zone management and smart controls.",
  },
  {
    image: "/landing/case-study-2.png",
    imageAlt: "Pool Resort",
    categoryColor: "text-(--color-accent-blue)",
    category: "Hospitality",
    title: "Hotels & Resort Pools",
    hoverText:
      "Year-round pool heating and guest comfort with minimal operational noise.",
  },
  {
    image: "/landing/case-study-3.png",
    imageAlt: "Engineer",
    categoryColor: "text-yellow-500",
    category: "Professional Service",
    title: "Expert Installation",
    hoverText:
      "Certified technicians ensure optimal performance and system longevity.",
  },
] as const;

export const WHY_US = [
  {
    icon: "verified",
    iconBg: "bg-gradient-accent-primary",
    title: "Industry Expertise",
    description:
      "25+ years of industrial legacy with 15+ years specializing in commercial and renewable heat pump solutions.",
  },
  {
    icon: "shield",
    iconBg: "bg-gradient-accent-blue",
    title: "Comprehensive Warranty",
    description:
      "Engineered with world-class scroll compressors and corrosion-resistant components for long-term performance.",
  },
  {
    icon: "group",
    iconBg: "bg-gradient-accent-purple",
    title: "Dedicated Support Team",
    description:
      "On-ground service support in Chennai and Hyderabad ensuring fast response and reliable after-sales assistance.",
  },
  {
    icon: "build",
    iconBg: "bg-gradient-accent-orange",
    title: "Turnkey Installation",
    description:
      "End-to-end heat pump solutions — from system design and selection to installation and commissioning.",
  },
  {
    icon: "trending_up",
    iconBg: "bg-gradient-accent-primary",
    title: "Proven ROI",
    description:
      "Up to 3-4.5x heat output per unit of electricity, delivering measurable energy savings and faster payback.",
  },
  {
    icon: "schedule",
    iconBg: "bg-gradient-accent-blue",
    title: "Fast Deployment",
    description:
      "Efficient system integration designed for quick installation with minimal operational disruption.",
  },
] as const;
