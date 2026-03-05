import { Activity, CheckCircle, CircleCheckBig, Zap } from "lucide-react";

import { COMMERCIAL_HEAT_PUMPS } from "@/contents/products";

import Capsule from "../shared/Capsule";

export default function CommercialSection() {
  return (
    <section id="commercial" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5">
        <Capsule text="Commercial Grade" />

        <h2 className="mb-3 text-4xl font-bold text-(--color-secondary) md:text-5xl">
          {COMMERCIAL_HEAT_PUMPS.heading}
        </h2>
        <p className="mb-12 max-w-md text-sm leading-relaxed text-(--color-text-gray)">
          Engineered for high-demand commercial applications, delivering
          reliable and energy-efficient hot water solutions
        </p>

        <div className="relative grid min-h-105 overflow-hidden rounded-2xl bg-linear-to-r from-gray-100 to-gray-200 lg:grid-cols-[58%_42%]">
          <div className="relative h-full min-h-105">
            <img
              src="https://placehold.co/720x520/8fa0b0/ffffff?text=Commercial+Heat+Pump"
              alt="Commercial Heat Pump"
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-5 left-5">
              <span className="inline-flex items-center gap-2 rounded-full bg-(--color-primary) px-4 py-1.5 text-xs font-semibold text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
                Premium Grade
              </span>
            </div>
          </div>

          <div className="flex">
            <div className="w-full bg-white px-7 py-7 shadow-lg">
              <h3 className="mb-3 text-3xl leading-snug font-bold text-(--color-secondary)">
                High-Performance
                <br />
                Systems
              </h3>
              <p className="text-md mb-5 leading-relaxed text-(--color-text-gray)">
                These systems feature{" "}
                <strong className="font-semibold text-(--color-secondary)">
                  high-efficiency compressors
                </strong>{" "}
                and use eco-friendly refrigerants with low ozone depletion
                potential.
              </p>

              <ul className="mb-5 space-y-2.5">
                {COMMERCIAL_HEAT_PUMPS.features.map((feature) => (
                  <li
                    key={feature.label}
                    className="flex items-center gap-3 text-sm text-(--color-secondary)"
                  >
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                        feature.color
                      }`}
                    >
                      <feature.icon className="h-5 w-5 text-white" />
                    </span>
                    {feature.label}
                  </li>
                ))}
              </ul>

              <div className="rounded-lg border border-(--color-primary)/25 bg-(--color-primary)/8 p-3.5">
                <p className="text-20px] mb-1 font-bold text-(--color-primary)">
                  Ideal Applications
                </p>
                <p className="text-[15px] leading-relaxed text-(--color-text-gray)">
                  Hotels, hospitals, apartments, and industrial facilities
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {COMMERCIAL_HEAT_PUMPS.bottomCards.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="flex flex-col items-center rounded-lg border border-(--color-text-gray)/20 p-6 text-center"
            >
              <Icon
                className="mb-3 h-10 w-10 rounded-lg bg-green-200 p-2 text-(--color-primary)"
                strokeWidth={1.5}
              />
              <h4 className="mb-1 text-sm font-bold text-(--color-secondary)">
                {title}
              </h4>
              <p className="text-xs text-(--color-text-gray)">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
