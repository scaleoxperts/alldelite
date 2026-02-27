import { MapPin, Monitor, Shield, Wrench } from "lucide-react";

import { RELIABILITY_FEATURES } from "@/contents/solutions";

import Capsule from "../shared/Capsule";

const ICON_MAP = {
  shield: Shield,
  monitor: Monitor,
  "map-pin": MapPin,
  wrench: Wrench,
} as const;

export default function ReliabilitySection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <Capsule text="Reliability" />

        <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
          Reliability &amp; Support
        </h2>

        <p className="mx-auto mb-16 max-w-2xl text-slate-500">
          Ensuring uninterrupted hot water and heating performance for
          commercial and industrial applications
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {RELIABILITY_FEATURES.map((feature) => {
            const Icon =
              ICON_MAP[feature.iconKey as keyof typeof ICON_MAP] ?? Shield;
            return (
              <div
                key={feature.title}
                className="flex flex-col items-center rounded-xl border border-slate-200 p-8 text-center"
              >
                <div
                  className={`${feature.iconBg} mb-6 flex h-16 w-16 items-center justify-center rounded-xl text-white shadow-md`}
                >
                  <Icon className="h-7 w-7" strokeWidth={2} />
                </div>
                <p className="text-sm leading-snug font-medium text-slate-700">
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
