export const ABOUT_HERO = {
  badge: "About Us",
  heading: "Alldelite Heat Pumps Limited",
  description:
    "Pioneering high-efficiency, low-carbon heat pump technology since 1999.",
} as const;

export const WHO_ARE_WE = {
  badge: "Our Story",
  heading: "Who Are We?",
  paragraphs: [
    "Alldelite Heat Pumps Limited is a global leader in high-performance thermal solutions. Since our inception, we have focused on engineering excellence to provide sustainable heating and cooling for a variety of industrial and commercial applications.",
    "In 2008, we became a market leader by introducing integrated hybrid technologies. Today, our reach spans over 25 countries, delivering carbon-neutral heating solutions that empower businesses to achieve their environmental goals.",
  ],
  stats: [
    { value: "1999", label: "Founded", color: "text-(--color-primary)" },
    { value: "2008", label: "Market Lead", color: "text-blue-600" },
    { value: "25+", label: "Countries", color: "text-purple-600" },
  ],
} as const;

export const MISSION = {
  heading: "What Is Our Mission?",
  description:
    "Our mission is to provide high-quality, eco-friendly heat pump solutions globally. We aim to lead the industry in sustainable technology, ensuring efficient heating and cooling while reducing environmental impact for a greener future.",
} as const;

export const TECHNOLOGY = {
  badge: "Innovation",
  heading: "What Is the Technology Behind Our Products?",
  card: {
    title: "MULTIDEN Technology",
    description:
      "Our unique MULTIDEN design increases surface area for maximum heat exchange efficiency, allowing our systems to operate in extreme conditions where traditional pumps fail.",
    features: ["High Efficiency Performance", "Scalable Industrial Design"],
  },
} as const;

export const HOW_IT_WORKS = {
  heading: "How Do Our Heat Pumps Work?",
  description:
    "Alldelite Heat Pumps extract heat from the surrounding air, ground, or water and transfer it into a property. This process works efficiently for both heating and cooling, requiring minimal electricity while providing consistent temperature control and reliability.",
} as const;

export const MULTIBEN_HYBRID = {
  badge: "Hybrid Systems",
  heading: "What Is MULTIBEN Hybrid?",
  description:
    "MULTIBEN combines multiple renewable energy sources for maximum efficiency.",
  cards: [
    {
      iconKey: "sun",
      title: "Active Solar Energy",
      description: "Directly utilizes solar radiation for heating.",
      bg: "bg-orange-500",
    },
    {
      iconKey: "cloud",
      title: "Passive Solar Energy",
      description: "Captures thermal energy from the environment.",
      bg: "bg-gradient-accent-primary",
    },
  ],
  bottomText:
    "This combination ensures maximum utilization of renewable energy sources. This technology has brought about solutions that are <highlight>phenomenally effective</highlight>, highly reliable, and better for environment and ergonomics alike.",
} as const;

export const UNIQUENESS_FEATURES = [
  {
    title: "Highly Reliable",
    description: "Built with robust materials for long-term usage.",
  },
  {
    title: "Energy Efficient",
    description: "Lower power consumption with high thermal output.",
  },
  {
    title: "Eco-Friendly",
    description: "Significant reduction in carbon footprint.",
  },
  {
    title: "Smart Controls",
    description: "Integrated monitoring and automation features.",
  },
  {
    title: "Low Maintenance",
    description: "Engineered for long service intervals.",
  },
] as const;

export const USAGE = {
  heading: "Where Are Our Products Used?",
  description:
    "Alldelite Heat Pumps are installed in <highlight>various commercial and industrial settings worldwide</highlight>. From large manufacturing plants to small businesses, our solutions provide reliable energy savings.",
  sectors: [
    {
      iconKey: "building",
      label: "Commercial",
      color: "text-white",
    },
    { iconKey: "briefcase", label: "Institutional", color: "text-white" },
    { iconKey: "users", label: "Industrial", color: "text-white" },
  ],
} as const;

export const PRODUCT_RANGE = {
  badge: "Our Portfolio",
  heading: "What Products Do We Offer?",
  products: [
    {
      iconKey: "building",
      title: "Commercial Heat Pumps",
      hoverColor: "hover:border-(--color-primary)",
      iconBg: "bg-(--color-primary)/10",
      iconColor: "text-(--color-primary)",
      hoverIconBg: "group-hover:bg-(--color-primary)",
    },
    {
      iconKey: "waves",
      title: "Swimming Pool Heat Pumps",
      hoverColor: "hover:border-blue-500",
      iconBg: "bg-blue-50",
      iconColor: "text-blue-500",
      hoverIconBg: "group-hover:bg-blue-500",
    },
    {
      iconKey: "circle-dot",
      title: "Ground Source Heat Pumps",
      hoverColor: "hover:border-purple-500",
      iconBg: "bg-purple-50",
      iconColor: "text-purple-500",
      hoverIconBg: "group-hover:bg-purple-500",
    },
  ],
} as const;

export const LOCATION = {
  heading: "Where Are We Located?",
  address: {
    title: "Corporate & Service Location",
    lines: ["Chennai, Tamil Nadu", "Hyderabad, Telangana", "India"],
  },
  contact: {
    title: "How Can You Contact Us?",
  },
} as const;

export const ABOUT_CTA = {
  heading: "Ready to Transform Your Energy System?",
  description:
    "Join thousands of businesses worldwide using Alldelite to power their operations with clean, efficient energy.",
  primaryCta: "Register Now",
  secondaryCta: "Contact Us",
} as const;
