import { Layers } from "lucide-react";

import { GROUND_SOURCE_HEAT_PUMPS } from "@/contents/products";

export default function GroundSourceSection() {
  return (
    <section id="ground-source" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-12 text-center">
          <span className="mb-5 inline-block rounded-full border border-(--color-primary) bg-(--color-primary)/10 px-4 py-1.5 text-xs font-bold tracking-widest text-(--color-primary) uppercase">
            Geothermal Solution
          </span>
          <h2 className="mb-4 text-5xl font-bold text-(--color-secondary) md:text-6xl">
            {GROUND_SOURCE_HEAT_PUMPS.heading}
          </h2>
          <p className="mx-auto max-w-lg text-base text-(--color-text-gray)">
            Utilizing stable underground temperatures as a low-temperature
            energy source
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl lg:grid lg:grid-cols-[520px_1fr]">
          <div className="bg-(--color-surface-dark) p-10 lg:p-12">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-(--color-primary)">
              <Layers className="h-7 w-7 text-white" strokeWidth={1.8} />
            </div>

            <h3 className="mb-4 text-3xl font-bold text-white">
              {GROUND_SOURCE_HEAT_PUMPS.card.title}
            </h3>
            <p className="mb-8 text-sm leading-relaxed text-gray-400">
              {GROUND_SOURCE_HEAT_PUMPS.card.description}
            </p>

            <div className="mb-8 grid grid-cols-2 gap-3">
              {GROUND_SOURCE_HEAT_PUMPS.card.stats.map(({ Icon, label }) => (
                <div key={label} className="rounded-xl bg-white/8 p-4">
                  <Icon
                    className="mb-3 h-5 w-5 text-(--color-primary)"
                    strokeWidth={1.8}
                  />
                  <p className="text-xs font-semibold text-white">{label}</p>
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-(--color-primary)/15 p-5">
              <p className="text-sm leading-relaxed text-gray-300">
                <span className="font-bold text-(--color-primary)">
                  Best For:
                </span>{" "}
                Large-scale commercial or industrial applications requiring
                environmentally responsible heating
              </p>
            </div>
          </div>

          <div className="h-180">
            <img
              src="/products/ground-source-system.png"
              alt="Ground Source Heat Pump Installation"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
