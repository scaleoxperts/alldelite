import Image from "next/image";

import Capsule from "../shared/Capsule";

const HIGHLIGHTS = [
  {
    title: "High Performance",
    desc: "World-class scroll compressor",
  },
  {
    title: "Eco-Friendly",
    desc: "High-efficiency, ozone-safe refrigerants",
  },
  {
    title: "Smart Control",
    desc: "LCD digital controller, 25°C–60°C range",
  },
  {
    title: "Durable Design",
    desc: "Efficient heat exchanger, corrosion resistance, 50/60Hz support",
  },
];

const SPEC_CARDS = [
  {
    icon: "thermostat",
    title: "All-Season Performance",
    subtitle: "-25°C to 43°C operating range",
  },
  {
    icon: "speed",
    title: "High COP Rating",
    subtitle: "Up to 4.5 coefficient of performance",
  },
];

export default function FeaturedProductSection() {
  return (
    <section className="bg-(--color-background-light) py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <Capsule text="Advanced Technology" />
          <h2 className="mb-6 text-4xl font-bold text-gray-900">
            Alldelite Commercial Heat Pump
          </h2>
          <p className="mx-auto max-w-3xl leading-relaxed text-gray-600">
            This heat pump features a world-famous scroll compressor for
            reliable, high-performance operation and uses eco-friendly
            refrigerants (R134A, R417A, R407C) with zero ozone depletion.
            Intelligent digital controls with an LCD display allow precise water
            temperature adjustment from 25°C to 60°C, while high-efficiency
            copper tubing ensures long-term durability.
          </p>
        </div>

        <div className="flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-xl lg:flex-row">
          <div className="relative w-full lg:w-1/2">
            <div className="absolute top-6 right-6 z-10 rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow">
              Featured Solution
            </div>
            <div className="relative h-65 w-full sm:h-90 lg:h-full">
              <Image
                src="/landing/featured-product.png"
                alt="Commercial heat pump unit"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="flex w-full flex-col justify-center p-8 lg:w-1/2 lg:p-12">
            <h3 className="mb-6 text-sm font-bold tracking-widest text-emerald-600 uppercase">
              Key Highlights
            </h3>
            <ul className="mb-8 space-y-4">
              {HIGHLIGHTS.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                  <span className="text-sm text-gray-700">
                    <strong className="text-gray-900">{item.title}</strong> –{" "}
                    {item.desc}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="/contact"
                className="rounded-xl bg-emerald-500 px-6 py-3 text-center text-sm font-semibold text-white shadow transition hover:bg-emerald-600"
              >
                Request Technical Specs
              </a>
              <a
                href="/contact"
                className="flex items-center justify-center gap-2 rounded-xl border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
              >
                <span className="material-icons-outlined text-emerald-500">
                  download
                </span>
                R32 Refrigerant Brochure
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
