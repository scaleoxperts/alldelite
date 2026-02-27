import { Cpu, ShieldCheck, TrendingUp, Zap } from "lucide-react";

import Capsule from "@/components/shared/Capsule";
import { ENERGY_EFFICIENCY_FEATURES } from "@/contents/solutions";

const ICON_MAP = {
  zap: Zap,
  cpu: Cpu,
  "trending-up": TrendingUp,
  "shield-check": ShieldCheck,
} as const;

export default function EnergyEfficiencySection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <Capsule text="Energy Efficiency" />

        <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
          Energy Efficiency Solutions
        </h2>

        <p className="mx-auto mb-16 max-w-2xl text-slate-500">
          Reduce energy costs by up to 70% with advanced air source and ground
          source heat pump technology
        </p>

        <div className="mx-auto grid w-[90%] grid-cols-1 gap-10 sm:grid-cols-2">
          {ENERGY_EFFICIENCY_FEATURES.map((feature) => {
            const Icon =
              ICON_MAP[feature.iconKey as keyof typeof ICON_MAP] ?? Zap;
            return (
              <div
                key={feature.title}
                className="flex flex-col items-start gap-4 rounded-xl border border-(--color-text-gray)/20 p-10 text-left"
              >
                <div
                  className={`${feature.iconBg} flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-md`}
                >
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </div>
                <p className="text-sm font-semibold text-slate-800">
                  {feature.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
