import { Leaf, TrendingDown, Wind, Zap } from "lucide-react";

export const SOLUTIONS_HERO = {
  badge: "Our Solutions",
  heading: "Comprehensive Heat\nPump Solutions",
  description:
    "End-to-end solutions designed to maximize efficiency, reduce costs, and support your sustainability goals.",
  primaryCta: "Request Consultation",
  secondaryCta: "View Products",
} as const;

export const ENERGY_EFFICIENCY_FEATURES = [
  {
    title: "High efficiency scroll compressors",
    iconKey: "zap",
    iconBg: "bg-gradient-accent-primary",
  },
  {
    title: "Intelligent microprocessor-based temperature control (±2°C-60°C)",
    iconKey: "cpu",
    iconBg: "bg-gradient-accent-blue",
  },
  {
    title: "Energy output up to 3-4.5x per unit of electricity",
    iconKey: "trending-up",
    iconBg: "bg-gradient-accent-primary",
  },
  {
    title: "Eco-friendly refrigerants (R134A, R407C, R410A)",
    iconKey: "shield-check",
    iconBg: "bg-gradient-accent-blue",
  },
] as const;

export const COST_REDUCTION_BENEFITS = [
  "Lower electricity consumption",
  "Reduced fuel dependency",
  "Faster return on investment",
  "Lower maintenance and lifecycle costs",
] as const;

export const RELIABILITY_FEATURES = [
  {
    title: "Durable corrosion-resistant components",
    iconKey: "shield",
    iconBg: "bg-gradient-accent-orange",
  },
  {
    title: "Intelligent monitoring systems",
    iconKey: "monitor",
    iconBg: "bg-gradient-accent-blue",
  },
  {
    title: "Authorized service centres in Chennai & Hyderabad",
    iconKey: "map-pin",
    iconBg: "bg-gradient-accent-purple",
  },
  {
    title: "End-to-end installation and after sales support",
    iconKey: "wrench",
    iconBg: "bg-gradient-accent-primary",
  },
] as const;

export const SUSTAINABILITY_CHECKLIST = [
  "Reduced carbon footprint",
  "Renewable air-to-water heat pump systems",
  "Ozone-friendly refrigerants",
  "Ideal for green buildings, hotels, estates & industries",
] as const;

export const SUSTAINABILITY_STATS = [
  { icon: Zap, value: "70%", label: "Energy Savings" },
  { icon: TrendingDown, value: "1-3 Years", label: "ROI Period" },
  { icon: Wind, value: "0%", label: "Ozone Depletion" },
  { icon: Leaf, value: "100%", label: "Renewable" },
] as const;

export const SAFETY_WARNING_TEXT =
  "To avoid electrical shock, ensure the power supply is disconnected for at least one minute before opening any electrical components. Even after one minute, always measure the voltage at the terminals of the main circuit capacitors or electrical parts and ensure the voltage is below the safety limit before touching." as const;

export const MAINTENANCE_WARNINGS = [
  "The power supply wire size must be selected according to the recommendation of the Alldelite technical team.",
  "Do not insert hands or objects into the air outlet grill while the fan motors are operating.",
  "Do not touch wire lines with wet hands, and do not pull any wires connected to the unit.",
  "Do not pour water or any other liquid into the unit.",
  "Do not touch the fins of the source-side heat exchanger, as they may cause injury.",
  "If any wire is loose or damaged, it should be repaired by a qualified technician.",
  "Keep the valves open while the heat pump is operating.",
] as const;
