import {
  Activity,
  AlertCircle,
  AlertTriangle,
  Bolt,
  CheckCircle,
  ClipboardCheck,
  Droplet,
  Droplets,
  Globe,
  Layers,
  Leaf,
  PiggyBank,
  Ruler,
  Settings,
  Shield,
  ShieldCheck,
  Thermometer,
  TrendingDown,
  Volume1,
  Wifi,
  Wind,
  Wrench,
  Zap,
} from "lucide-react";

export const PRODUCTS_HERO = {
  badge: "Our Products",
  heading: "Main Products",
  description:
    "Discover our comprehensive range of high-efficiency heat pump solutions designed for commercial, residential, and specialized applications.",
  categories: [
    { icon: "factory", label: "Commercial" },
    { icon: "pool", label: "Swimming Pool" },
    { icon: "foundation", label: "Ground Source" },
  ],
} as const;

export const COMMERCIAL_HEAT_PUMPS = {
  badge: "Commercial Use",
  heading: "Commercial Heat Pumps",
  description:
    "High-capacity solutions designed for industrial buildings, large offices, and institutions requiring robust climate control.",
  subHeading: "Top Performance System",
  subDescription:
    "Our commercial units are built with dual-compressor technology ensuring uninterrupted operation even in extreme climates.",
  features: [
    { label: "High COP Efficiency", color: "bg-orange-500", icon: Thermometer },
    { label: "Smart Defrost System", color: "bg-blue-500", icon: Droplets },
    { label: "Low Noise Operation", color: "bg-purple-500", icon: Settings },
    {
      label: "MODBUS Compatibility",
      color: "bg-(--color-primary)",
      icon: Shield,
    },
  ],
  infoBox: {
    highlight: "Did you know?",
    text: "Our commercial series can cascade up to 16 units.",
  },
  cta: "View Details",
  bottomCards: [
    {
      Icon: Activity,
      title: "Backup Heating",
      desc: "Optional support system",
    },
    { Icon: Zap, title: "Energy Efficient", desc: "Up to 70% savings" },
    {
      Icon: CheckCircle,
      title: "Consistent Performance",
      desc: "Reliable operation",
    },
  ],
} as const;

export const SWIMMING_POOL_HEAT_PUMPS = {
  badge: "Leisure Series",
  heading: "Swimming Pool\nHeat Pumps",
  description:
    "Keep your pool at the perfect temperature year-round with our titanium heat exchanger technology.",
  features: [
    { Icon: Droplet, label: "Anti-corrosion Titanium Exchanger" },
    { Icon: Wifi, label: "Wi-Fi App Control" },
    { Icon: Volume1, label: "Whisper Quiet Fan" },
  ],
  cta: "Explore Pool Solutions",
} as const;

export const GROUND_SOURCE_HEAT_PUMPS = {
  badge: "Eco-Core",
  heading: "Ground Source Heat Pumps",
  description:
    "Harness the stable temperature of the earth for maximum heating and cooling efficiency.",
  card: {
    Icon: Globe,
    title: "Underground Energy",
    description:
      "These systems extract heat from the ground, providing highly efficient and consistent heating performance for long-term energy savings.",
    stats: [
      { Icon: Thermometer, label: "Stable Underground Heat" },
      { Icon: Activity, label: "Consistent Performance" },
      { Icon: TrendingDown, label: "Long-term Savings" },
      { Icon: Droplets, label: "Eco-Friendly" },
    ],
    cta: "View Ground Source Specs",
  },
} as const;

export const PRE_INSTALLATION = {
  badge: "Support",
  heading: "Pre-Installation Guidelines",
  description:
    "Ensure a smooth installation process by following these key preparation steps.",
  guidelines: [
    {
      Icon: Bolt,
      iconBg: "bg-blue-500",
      title: "Electrical Capacity",
      description:
        "Verify your electrical panel has sufficient amperage for the new unit.",
    },
    {
      Icon: Ruler,
      iconBg: "bg-orange-500",
      title: "Space Clearance",
      description:
        "Ensure at least 500mm clearance around the unit for proper airflow.",
    },
    {
      Icon: Wrench,
      iconBg: "bg-pink-500",
      title: "Piping Layout",
      description: "Plan water pipe routing to minimize bends and heat loss.",
    },
    {
      Icon: Layers,
      iconBg: "bg-(--color-primary)",
      title: "Base Foundation",
      description:
        "A concrete pad is required to support the operational weight and reduce vibration.",
    },
    {
      Icon: Droplet,
      iconBg: "bg-purple-500",
      title: "Drainage System",
      description:
        "Condensation occurs during operation. Ensure proper drainage paths are set.",
    },
    {
      Icon: ClipboardCheck,
      iconBg: "bg-teal-500",
      title: "Local Permits",
      description:
        "Check with municipal regulations regarding external HVAC installations.",
    },
  ],
  alert: {
    Icon: AlertCircle,
    highlight: "Important Note:",
    text: "All electrical and plumbing work must be performed by certified Alldelite partners or licensed professionals.",
  },
} as const;

export const HOW_IT_WORKS_PRODUCTS = {
  badge: "Education",
  heading: "How Multiben Heat Pump Works",
  description: "The refrigeration cycle explained step by step.",
  tabs: [
    {
      Icon: Activity,
      title: "Power Connections",
      desc: "Verify electrical setup",
    },
    { Icon: Droplets, title: "Water Connections", desc: "Check inlet/outlet" },
    { Icon: Wind, title: "Air Flow", desc: "Ensure ventilation" },
    { Icon: Thermometer, title: "Sensor Position", desc: "Confirm placement" },
    { Icon: Wrench, title: "Refrigerant Pressure", desc: "Verify levels" },
  ],
} as const;

export const PRODUCTS_CTA = {
  badge: "Get Started",
  heading: "Need Help Choosing the\nRight Product?",
  description:
    "Our team of experts is ready to help you calculate your requirements and find the perfect match.",
  primaryCta: "Talk to a Specialist",
  secondaryCta: "Request Quote",
} as const;
