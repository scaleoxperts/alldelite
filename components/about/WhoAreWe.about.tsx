import { WHO_ARE_WE } from "@/contents/about";

import Capsule from "../shared/Capsule";

export default function WhoAreWeSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <Capsule text={WHO_ARE_WE.badge} />

          <h2 className="mt-2 text-4xl font-bold text-(--color-text-black)">
            {WHO_ARE_WE.heading}
          </h2>
        </div>

        <div className="grid items-center gap-16 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="/landing/featured-product.png"
              alt="Heat Pump System"
              className="h-auto w-full"
            />
          </div>

          <div>
            {WHO_ARE_WE.paragraphs.map((p, i) => (
              <p
                key={i}
                className={`leading-relaxed text-gray-600 ${i < WHO_ARE_WE.paragraphs.length - 1 ? "mb-6" : "mb-10"}`}
              >
                {p}
              </p>
            ))}

            <div className="grid grid-cols-3 gap-4">
              {WHO_ARE_WE.stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`text-center ${i === 1 ? "border-x border-gray-100 px-4" : ""}`}
                >
                  <div className={`text-3xl font-bold ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs tracking-widest text-(--color-text-gray) uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
