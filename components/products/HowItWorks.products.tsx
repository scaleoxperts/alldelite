"use client";

import { Activity, Droplets, Thermometer, Wind, Wrench } from "lucide-react";

import { HOW_IT_WORKS_PRODUCTS } from "@/contents/products";

export default function HowItWorksSection() {
  return (
    <section className="bg-(--color-background-dark) py-20 text-center text-white">
      <div className="mx-auto max-w-7xl px-5">
        <span className="mb-6 inline-block rounded-full border border-(--color-primary) px-4 py-1.5 text-xs font-bold tracking-widest text-(--color-primary) uppercase">
          Operations
        </span>

        <h2 className="mb-4 text-4xl font-bold md:text-5xl">
          {HOW_IT_WORKS_PRODUCTS.heading}
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-sm text-gray-400">
          Essential pre-start checklist before operating your heat pump system
        </p>

        <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-5">
          {HOW_IT_WORKS_PRODUCTS.tabs.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="flex flex-col items-center justify-start rounded-2xl bg-white/8 px-4 py-6 text-center"
            >
              <Icon className="mb-4 h-6 w-6 text-gray-300" strokeWidth={1.5} />
              <p className="mb-1 text-sm font-bold text-white">{title}</p>
              <p className="text-xs text-gray-400">{desc}</p>
            </div>
          ))}
        </div>

        <div className="overflow-hidden rounded-2xl bg-white p-6">
          <img
            src="https://placehold.co/1000x500/fafac8/333333?text=How+a+Heat+Pump+Works+Diagram"
            alt=" Heat Pump Cycle Diagram"
            className="mx-auto w-full max-w-4xl rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
