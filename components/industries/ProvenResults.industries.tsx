import { PROVEN_RESULTS } from "@/contents/industries";

export default function ProvenResultsSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-5 text-center">
        <h2 className="mb-3 text-3xl font-bold text-gray-900 md:text-4xl">
          {PROVEN_RESULTS.heading}
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-lg text-(--color-text-gray)">
          {PROVEN_RESULTS.description}
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {PROVEN_RESULTS.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-green-200 bg-linear-to-b from-green-100 to-zinc-50 p-8"
            >
              <div className="mb-3 text-5xl font-bold text-(--color-primary)">
                {stat.value}
              </div>
              <p className="text-base text-(--color-text-gray)">{stat.label}</p>
              <p className="mt-2 text-sm text-(--color-text-gray)/80">
                {stat.subLabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
