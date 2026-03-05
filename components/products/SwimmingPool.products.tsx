import { Thermometer, TrendingDown, Waves, Wind } from "lucide-react";

import { SWIMMING_POOL_HEAT_PUMPS } from "@/contents/products";

const FEATURES = [
  {
    Icon: Wind,
    title: "Ambient Air Technology",
    description: "Extracts heat from surrounding air",
  },
  {
    Icon: TrendingDown,
    title: "Reduced Consumption",
    description: "Significantly lower electricity costs",
  },
  {
    Icon: Thermometer,
    title: "Stable Temperatures",
    description: "Maintains optimal water warmth",
  },
];

export default function SwimmingPoolSection() {
  return (
    <section id="swimming-pool" className="bg-products-pool py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="mb-6 inline-block rounded-full border border-blue-300 bg-blue-50 px-4 py-1.5 text-xs font-bold tracking-widest text-blue-500 uppercase">
              Pool Heating
            </span>

            <h2 className="mb-6 text-5xl leading-tight font-bold text-(--color-secondary) md:text-6xl">
              {SWIMMING_POOL_HEAT_PUMPS.heading.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i === 0 && <br />}
                </span>
              ))}
            </h2>

            <p className="mb-10 max-w-md text-base leading-relaxed text-(--color-text-gray)">
              Specifically designed for efficient pool heating using advanced
              heat pump technology that extracts heat from ambient air and
              transfers it to pool water.
            </p>

            <ul className="mb-8 space-y-4">
              {FEATURES.map(({ Icon, title, description }) => (
                <li
                  key={title}
                  className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white px-5 py-4 shadow-sm"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500">
                    <Icon className="h-5 w-5 text-white" strokeWidth={1.8} />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-(--color-secondary)">
                      {title}
                    </p>
                    <p className="text-xs text-(--color-text-gray)">
                      {description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex items-start gap-3 rounded-xl bg-blue-500 px-6 py-5">
              <Waves
                className="mt-0.5 h-5 w-5 shrink-0 text-white"
                strokeWidth={1.8}
              />
              <div>
                <p className="mb-1 text-sm font-bold text-white">
                  Perfect For:
                </p>
                <p className="text-sm text-blue-100">
                  Resorts, clubs, residential villas, and commercial pool
                  facilities
                </p>
              </div>
            </div>
          </div>

          <div className="relative pb-10">
            <div
              className="flex h-96 flex-col justify-between rounded-3xl bg-cover bg-center shadow-2xl"
              style={{
                backgroundImage:
                  "url('https://placehold.co/600x480/0ea5e9/ffffff?text=Swimming+Pool')",
              }}
            >
              <div className="flex h-full items-end justify-evenly gap-4 p-6">
                <div className="rounded-2xl bg-white px-14 py-4 shadow-lg">
                  <p className="text-2xl font-bold text-blue-500">60%</p>
                  <p className="text-xs text-(--color-text-gray)">
                    Lower Energy Costs
                  </p>
                </div>
                <div className="rounded-2xl bg-white px-14 py-4 shadow-lg">
                  <p className="text-2xl font-bold text-green-500">All Year</p>
                  <p className="text-xs text-(--color-text-gray)">
                    Reliable Heating
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
