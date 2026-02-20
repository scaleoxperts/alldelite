import Image from "next/image";

import { CASE_STUDIES } from "@/lib/constants";

export default function CaseStudiesSection() {
  return (
    <section className="bg-(--color-background-dark) py-28 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center">
          <span className="mb-6 inline-block rounded-full border border-(--color-primary) bg-(--color-primary)/20 px-4 py-1.5 text-xs font-semibold tracking-widest text-(--color-primary) uppercase">
            Real-World Applications
          </span>
          <h2 className="mx-auto mb-6 max-w-4xl text-4xl leading-tight font-semibold md:text-5xl">
            Certified in Commercial and Industrial Heat Pump Manufacturing
          </h2>
          <p className="mx-auto max-w-2xl text-gray-400">
            See how our heat pump solutions transform energy efficiency in
            diverse commercial settings
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.title}
              className="group relative h-105 overflow-hidden rounded-2xl bg-black"
            >
              <Image
                alt={study.imageAlt}
                src={study.image}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-black/10" />

              <div className="absolute right-0 bottom-0 left-0 p-8">
                <div
                  className={`mb-3 text-xs font-bold tracking-widest uppercase ${study.categoryColor}`}
                >
                  {study.category}
                </div>
                <h3 className="mb-3 text-2xl leading-snug font-semibold">
                  {study.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-300">
                  {study.hoverText}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
