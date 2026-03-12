import {
  Building,
  Factory,
  Goal,
  Headset,
  Hotel,
  ShieldCheck,
  Zap,
} from "lucide-react";

export const INDUSTRIES_HERO = {
  badge: "Industry Solutions",
  heading: "Tailored for Your Need",
  description:
    "Purpose-built solutions designed to meet the unique demands of commercial construction and hospitality sectors",
} as const;

export const INDUSTRY_CARDS = [
  {
    image: "/landing/impact-1.png",
    imageAlt: "Builders & Developers",
    icon: Building,
    iconBg: "bg-(--color-primary)",
    title: "Builders & Developers",
    description:
      "Integrate cutting-edge climate control systems that enhance property value and accelerate green building certifications..",
    features: [
      "Bulk Pricing for Multi-Unit Projects",
      "Pre-Construction Design Consultation",
      "Installation Timeline Coordination",
    ],
    cta: "View Services",
    ctaBg: "bg-(--color-primary) hover:bg-(--color-primary-dark)",
    checkColor: "text-(--color-primary)",
  },
  {
    image: "/landing/impact-2.png",
    imageAlt: "Hotels & Villas",
    icon: Hotel,
    iconBg: "bg-(--color-accent-blue)",
    title: "Hotels & Villas",
    description:
      "Deliver exceptional guest comfort while dramatically reducing energy costs with whisper-quiet, efficient systems.",
    features: [
      "Ultra-Quiet Operation for Guest Comfort",
      "Pool & Spa Heating Solutions",
      "24/7 Priority Maintenance",
      "Dedicated Account Manager",
    ],
    cta: "Explore Solutions",
    ctaBg: "bg-(--color-accent-blue) hover:bg-blue-600",
    checkColor: "text-(--color-primary)",
  },
  {
    image: "/landing/impact-3.png",
    imageAlt: "Industries & Factories",
    icon: Factory,
    iconBg: "bg-(--color-accent-purple)",
    title: "Industries & Factories",
    description:
      "Implement high performance heating system engineered to meet the rigorous demands of industrial operations, ensuring consistent output, energy efficiency, and operational reliability.",
    features: [
      "High-Temperature Water Systems",
      "Steam Up to 120°C",
      "Continuous Industrial Hot water Supply",
      "Designed for Heavy-Duty Applications",
    ],
    cta: "Learn More",
    ctaBg: "bg-(--color-accent-purple) hover:bg-purple-600",
    checkColor: "text-(--color-primary)",
  },
] as const;

export const PROVEN_RESULTS = {
  heading: "Proven Results Across Industries",
  description:
    "Delivering excellence with a track record of success and client satisfaction.",
  stats: [
    {
      value: "2,000+",
      label: "Projects Completed",
      subLabel: "Across all Industries",
    },
    {
      value: "₹500Cr+",
      label: "Energy Cost Saved",
      subLabel: "For our Clients Annually",
    },
    {
      value: "50,000+",
      label: "Tones of CO2 Reduced",
      subLabel: "Environmental Impact",
    },
  ],
} as const;

export const WHY_CHOOSE_US = {
  heading: "Why Industry Leaders Choose Us",
  description:
    "Our commitment to quality, innovation, and reliability sets us apart.",
  features: [
    {
      Icon: Goal,
      title: "Industry Expertise",
      description:
        "Deep Understanding of sector specific requirements and changes.",
    },
    {
      Icon: Zap,
      title: "Fast Execution",
      description: "Minimal Disruption with Efficient Project Timelines.",
    },
    {
      Icon: ShieldCheck,
      title: "Extended Warranty",
      description: "Comprehensive coverage for peace of mind.",
    },
    {
      Icon: Headset,
      title: "Dedicated Support",
      description: "Get your service support everyday, Monday to Sunday.",
    },
  ],
} as const;

export const INDUSTRIES_CTA = {
  heading: "Discover What We Can Do For Your Industry",
  description:
    "Get a customized solution proposal tailored to your industry needs.",
  cta: "Get industry-specific proposal",
} as const;
