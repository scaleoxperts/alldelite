import { Box, Shield, Zap } from "lucide-react";

import { PRODUCTS_HERO } from "@/contents/products";

const STATS = [
  { Icon: Box, value: "3", label: "Product Lines" },
  { Icon: Zap, value: "70%", label: "Energy Savings" },
  { Icon: Shield, value: "24/7", label: "Support" },
];

export default function HeroSection() {
  return (
    <section className="bg-products-hero relative flex min-h-145 flex-col items-center justify-center overflow-hidden py-24 text-center text-white">
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-5">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-(--color-primary) px-4 py-1.5 text-xs font-semibold tracking-widest text-(--color-primary) uppercase">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          {PRODUCTS_HERO.badge}
        </span>

        <h1 className="mb-5 text-5xl leading-tight font-extrabold tracking-tight md:text-7xl">
          {PRODUCTS_HERO.heading}
        </h1>

        <p className="mx-auto mb-12 max-w-2xl text-base leading-relaxed text-gray-400">
          Comprehensive range of heat pump systems designed to meet diverse
          commercial and industrial hot water requirements
        </p>

        <div className="flex flex-wrap justify-center gap-5">
          {STATS.map(({ Icon, value, label }) => (
            <div
              key={label}
              className="flex min-w-40 flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/8 px-10 py-6 backdrop-blur-sm"
            >
              <Icon
                size={24}
                strokeWidth={1.8}
                className="mb-2.5 text-(--color-primary)"
              />
              <span className="text-3xl leading-none font-bold text-white">
                {value}
              </span>
              <span className="mt-1 text-sm text-gray-400">{label}</span>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center">
          <div className="flex h-9 w-6 items-start justify-center rounded-full border-2 border-white/35 pt-1.5">
            <div className="h-2 w-1 animate-bounce rounded-full bg-white/60" />
          </div>
        </div>
      </div>
    </section>
  );
}
