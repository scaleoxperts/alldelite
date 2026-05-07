"use client";

import { useEffect, useState } from "react";

import { IMPACT_METRICS } from "@/contents/landing";

function formatNumber(num: number) {
  return num.toLocaleString("en-IN", {
    maximumFractionDigits: 2,
  });
}

const START_TIME = new Date("2026-05-01T00:00:00Z").getTime();

const HOT_WATER_GROWTH_PER_SECOND = 8.5;

const ENERGY_SAVED_GROWTH_PER_SECOND = 2.8;

const CO2_PER_KWH = 0.9;

const calculateValues = () => {
  const now = Date.now();

  const secondsPassed = (now - START_TIME) / 1000;

  const hotWaterGenerated =
    IMPACT_METRICS[0].value + secondsPassed * HOT_WATER_GROWTH_PER_SECOND;

  const energySaved =
    IMPACT_METRICS[1].value + secondsPassed * ENERGY_SAVED_GROWTH_PER_SECOND;

  const carbonOffset = energySaved * CO2_PER_KWH;

  return [hotWaterGenerated, energySaved, carbonOffset];
};

export default function ImpactSection() {
  const [values, setValues] = useState<number[]>(() => calculateValues());

  useEffect(() => {
    const interval = setInterval(() => {
      setValues(calculateValues());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative border-t border-gray-800 py-20">
      <div className="absolute inset-0 bg-[url(/landing/industry.png)] bg-cover bg-center" />

      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-emerald-900/70 to-black/90" />

      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-2 text-3xl font-bold text-white">
          Environmental <span className="text-yellow-400">Impact</span>
        </h2>

        <p className="mb-16 text-gray-300">
          Real-time sustainability metrics from our heat pump installations
        </p>

        <div className="grid gap-12 md:grid-cols-3">
          {IMPACT_METRICS.map((metric, index) => (
            <div key={metric.label} className="flex flex-col items-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20">
                <span className="material-icons-outlined text-2xl text-emerald-400">
                  {metric.icon}
                </span>
              </div>

              <div
                className="mb-2 text-4xl font-bold tracking-tight text-white"
                suppressHydrationWarning
              >
                {formatNumber(values[index])}
              </div>

              <div className="mb-1 text-xs font-bold tracking-widest text-gray-200 uppercase">
                {metric.label}
              </div>

              <div className="text-xs text-gray-400">{metric.unit}</div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-xs text-gray-400 italic">
          Data updated in real-time across our network of commercial
          installations nationwide
        </p>
      </div>
    </section>
  );
}
