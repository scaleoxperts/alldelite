import Image from "next/image";

import { INDUSTRY_SOLUTIONS } from "@/contents/landing";

import Capsule from "../shared/Capsule";

export default function IndustrySolutionsSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <Capsule text="Industry Solutions" />
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Tailored For Your need
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Purpose-built solutions designed to meet the unique demands of
            commercial construction and hospitality sectors
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {INDUSTRY_SOLUTIONS.map((solution) => (
            <div
              key={solution.title}
              className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="relative h-48 bg-gray-200">
                <Image
                  alt={solution.imageAlt}
                  className="h-full w-full object-cover"
                  src={solution.image}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div
                  className={`${solution.iconBg} absolute -bottom-6 left-6 flex h-12 w-12 items-center justify-center rounded-lg text-white shadow-lg`}
                >
                  <span className="material-icons-outlined">
                    {solution.icon}
                  </span>
                </div>
              </div>
              <div className="flex grow flex-col p-8 pt-10">
                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  {solution.title}
                </h3>
                <p className="mb-6 grow text-sm text-gray-600">
                  {solution.description}
                </p>
                <ul className="mb-8 space-y-3">
                  {solution.features.map((feature) => (
                    <li
                      key={feature}
                      className="dark flex items-center text-sm text-gray-700"
                    >
                      <span
                        className={`material-icons-outlined ${solution.checkClass} mt-0.5 mr-2 text-base`}
                      >
                        check_circle_outline
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  className={`${solution.ctaClass} block rounded-lg py-3 text-center text-sm font-medium text-white transition`}
                  href="#"
                >
                  {solution.cta}
                  <span className="material-icons-outlined ml-1 align-middle text-sm">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
