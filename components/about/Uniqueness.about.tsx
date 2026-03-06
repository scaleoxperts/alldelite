import { CheckCircle } from "lucide-react";

import { UNIQUENESS_FEATURES } from "@/contents/about";

import Capsule from "../shared/Capsule";

export default function UniquenessSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <Capsule text="Why Choose Us" />
          <h2 className="mt-2 text-4xl font-bold text-(--color-text-black)">
            What Makes Our Products Unique?
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {UNIQUENESS_FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-gray-100 p-6 shadow-sm transition-all hover:shadow-md"
            >
              <CheckCircle className="mb-4 h-6 w-6 text-(--color-primary)" />
              <h5 className="mb-2 font-bold text-(--color-text-black)">
                {feature.title}
              </h5>
              <p className="text-md text-(--color-text-gray)">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
