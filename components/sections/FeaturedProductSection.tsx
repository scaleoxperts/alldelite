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
        <div className="flex flex-col items-center gap-12 rounded-3xl border border-gray-100 bg-white p-8 shadow-xl lg:flex-row lg:p-12">
          <div className="relative lg:w-1/2">
            <span className="absolute top-4 left-4 z-10 rounded-full bg-(--color-primary) px-3 py-1 text-xs font-bold text-white">
              Featured Solution
            </span>
            <div className="relative h-100 max-h-100 w-full">
              <Image
                alt="Commercial heat pump unit"
                className="rounded-xl object-contain"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcENd6Lh9BZRwhXYkOR2Wj847K8zvWGThV4xrC4yfR5Wj0BcvNF2FIxYvrud1nyx82EkwgGQJyLEizNGrodYFonckJvWW9tGOOkppsCiPqzMFSLDjt-M1KsMsgdC-vpGlKPknbfnRAc8DrUvgkk1ic_CZK6AdptHXQvhlx003QAJKh08O_vCjkzDglrnNuj2_6IOcUZRrnyWaVnrQY9xZ16RV0CwjiMBVwT2qmbJ7j10g4lL1A2rfdjFgqnvExSkd1YOXS5ALT1JE"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h3 className="mb-6 text-sm font-bold tracking-widest text-gray-400 uppercase">
              Key Highlights
            </h3>
            <ul className="mb-8 space-y-4">
              {HIGHLIGHTS.map((item) => (
                <li key={item.title} className="flex items-start">
                  <span className="mt-2 mr-3 h-1.5 w-1.5 shrink-0 rounded-full bg-(--color-primary)" />
                  <span className="text-sm text-gray-700">
                    <strong className="text-gray-900">{item.title}</strong> –{" "}
                    {item.desc}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mb-8 flex gap-4">
              {SPEC_CARDS.map((card) => (
                <div
                  key={card.title}
                  className="flex w-1/2 items-center gap-3 rounded-lg bg-gray-50 p-3"
                >
                  <span className="material-icons-outlined text-2xl text-(--color-primary)">
                    {card.icon}
                  </span>
                  <div>
                    <div className="text-xs font-bold text-gray-900">
                      {card.title}
                    </div>
                    <div className="text-[10px] text-gray-500">
                      {card.subtitle}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                className="rounded-lg bg-(--color-primary) px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-(--color-primary-dark)"
                href="#"
              >
                Request Technical Specs
              </a>
              <a
                className="flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-6 py-3 text-center text-sm font-medium text-gray-700 transition hover:bg-gray-50"
                href="#"
              >
                <span className="material-icons-outlined text-(--color-primary)">
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
