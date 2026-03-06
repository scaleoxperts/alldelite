import Image from "next/image";

import { CheckCircle } from "lucide-react";

import { INDUSTRIES_HERO, INDUSTRY_CARDS } from "@/contents/industries";

import Capsule from "../shared/Capsule";

export default function HeroSection() {
  return (
    <section className="bg-(--color-background-light) py-16">
      <div className="mx-auto max-w-7xl px-5 text-center">
        <Capsule text={INDUSTRIES_HERO.badge} />

        <h1 className="mb-3 text-3xl font-bold text-gray-900 md:text-4xl">
          {INDUSTRIES_HERO.heading}
        </h1>
        <p className="mx-auto mb-14 max-w-xl text-lg text-(--color-text-gray)">
          {INDUSTRIES_HERO.description}
        </p>

        {/* Industry Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {INDUSTRY_CARDS.map((card) => (
            <div
              key={card.title}
              className="flex flex-col overflow-hidden rounded-xl bg-white text-left shadow-md transition-shadow hover:shadow-lg"
            >
              {/* Card Image */}
              <div className="relative h-50">
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Overlapping icon badge */}
                <div
                  className={`${card.iconBg} absolute -bottom-7.5 left-5 flex h-15 w-15 items-center justify-center rounded-full text-white shadow-lg`}
                >
                  <span className="material-icons-outlined text-2xl">
                    <card.icon />
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="flex grow flex-col px-10 pt-10 pb-6">
                <h3 className="mb-3 text-[22px] font-bold text-gray-900">
                  {card.title}
                </h3>
                <p className="mb-5 text-sm text-(--color-text-gray)">
                  {card.description}
                </p>

                <ul className="mb-6 space-y-3">
                  {card.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start text-sm text-gray-700"
                    >
                      <span
                        className={`material-icons-outlined ${card.checkColor} mt-0.5 mr-2 flex items-center text-base`}
                      >
                        <CheckCircle
                          size={16}
                          className="items-center align-middle"
                        />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className={`${card.ctaBg} mt-auto block rounded-md py-3 text-center text-sm font-semibold text-white transition`}
                >
                  Request Quote
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
