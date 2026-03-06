import { WHY_CHOOSE_US } from "@/contents/industries";

export default function WhyChooseUsSection() {
  return (
    <section className="bg-(--color-background-light) py-16">
      <div className="mx-auto max-w-7xl px-5 text-center">
        <h2 className="mb-3 text-3xl font-bold text-gray-900 md:text-4xl">
          {WHY_CHOOSE_US.heading}
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-lg text-(--color-text-gray)">
          {WHY_CHOOSE_US.description}
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_CHOOSE_US.features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-gray-200 bg-white p-8 text-left"
            >
              <feature.Icon className="mb-5 h-9 w-9 text-(--color-primary)" />
              <h3 className="mb-2 text-lg font-bold text-gray-900">
                {feature.title}
              </h3>
              <p className="text-sm text-(--color-text-gray)">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
