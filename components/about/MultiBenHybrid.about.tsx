import { Cloud, Sun } from "lucide-react";

import { MULTIBEN_HYBRID } from "@/contents/about";

import Capsule from "../shared/Capsule";

const ICON_MAP = {
  sun: Sun,
  cloud: Cloud,
} as const;

export default function MultiBenHybridSection() {
  return (
    <section className="bg-(--color-background-light) py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <Capsule text={MULTIBEN_HYBRID.badge} />
          <h2 className="mt-2 text-4xl font-bold text-(--color-text-black)">
            {MULTIBEN_HYBRID.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-(--color-text-gray)">
            {MULTIBEN_HYBRID.description}
          </p>
        </div>

        <div className="mb-12 grid gap-8 md:grid-cols-2">
          {MULTIBEN_HYBRID.cards.map((card) => {
            const Icon = ICON_MAP[card.iconKey as keyof typeof ICON_MAP];
            return (
              <div
                key={card.title}
                className={`${card.bg} rounded-2xl p-8 text-white shadow-xl transition-transform hover:-translate-y-1`}
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
                  <Icon className="h-6 w-6" />
                </div>
                <h4 className="mb-2 text-2xl font-bold">{card.title}</h4>
                <p className="text-white/80">{card.description}</p>
              </div>
            );
          })}
        </div>

        <div className="rounded-3xl bg-gray-900 p-10 text-center text-white">
          <p className="text-lg text-gray-400">
            This combination ensures maximum utilization of renewable energy
            sources. This technology has brought about solutions that are{" "}
            <span className="font-semibold text-(--color-primary)">
              phenomenally effective
            </span>
            , highly reliable, and better for environment and ergonomics alike.
          </p>
        </div>
      </div>
    </section>
  );
}
