import { Activity, CheckCircle, CircleCheckBig, Star, Zap } from "lucide-react";

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

        <div className="grid h-180 overflow-hidden rounded-2xl bg-linear-to-r from-gray-100 to-gray-200 shadow-lg lg:grid-cols-[50%_50%]">
          <div className="relative">
            <img
              src="/products/commercial-heat-pump.png"
              alt="Commercial Heat Pump"
              className="h-full w-full object-contain"
            />
            <div className="absolute bottom-35 left-5">
              <span className="inline-flex items-center gap-2 rounded-full bg-(--color-primary) px-4 py-1.5 text-xs font-semibold text-white">
                <Star className="h-3 w-3" />
                Premium Grade
              </span>
            </div>
          </div>

          <div className="flex h-full">
            <div className="flex w-full flex-col bg-white px-8 py-8 shadow-lg">
              <div>
                <h3 className="mb-3 text-3xl leading-snug font-bold text-(--color-secondary)">
                  High-Performance
                  <br />
                  Systems
                </h3>

                <p className="mb-6 text-[15px] leading-relaxed text-(--color-text-gray)">
                  These systems feature{" "}
                  <strong className="font-semibold text-(--color-secondary)">
                    high-efficiency compressors
                  </strong>{" "}
                  and use eco-friendly refrigerants with low ozone depletion
                  potential.
                </p>

                <ul className="space-y-3">
                  {COMMERCIAL_HEAT_PUMPS.features.map((feature) => (
                    <li
                      key={feature.label}
                      className="flex items-center gap-3 text-sm text-(--color-secondary)"
                    >
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${feature.color}`}
                      >
                        <feature.icon className="h-5 w-5 text-white" />
                      </span>
                      {feature.label}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 rounded-lg border border-(--color-primary)/25 bg-(--color-primary)/8 p-4">
                <p className="mb-1 text-sm font-bold text-(--color-primary)">
                  Ideal Applications
                </p>
                <p className="text-sm leading-relaxed text-(--color-text-gray)">
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
