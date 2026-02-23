import { SITE_CONFIG, WHY_US } from "@/lib/constants";

export default function WhyUsSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center">
          <span className="mb-6 inline-block rounded-full bg-gray-100 px-4 py-1.5 text-xs font-bold tracking-wide text-(--color-primary) uppercase">
            Why Choose Us
          </span>
          <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
            Why Leading Businesses Choose Alldelite?
          </h2>
          <p className="mx-auto max-w-3xl text-gray-600">
            Leading businesses choose Alldelite for its proven expertise,
            high-efficiency heat pump technology, and long-term cost savings.
            Delivering up to 3~4.5x energy output per unit of electricity.
          </p>
        </div>
        <div className="mb-20 grid gap-8 md:grid-cols-3">
          {WHY_US.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-100 p-6 text-center transition-shadow hover:shadow-lg"
            >
              <div
                className={`${item.iconBg} mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl text-white shadow-md`}
              >
                <span className="material-icons-outlined text-3xl">
                  {item.icon}
                </span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <div className="relative overflow-hidden rounded-3xl bg-gray-900 p-12 text-center">
          <div className="absolute top-0 right-0 -mt-16 -mr-16 h-64 w-64 rounded-full bg-(--color-primary)/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 -mb-16 -ml-16 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="relative z-10">
            <h2 className="mb-4 text-3xl font-bold text-white">
              Ready to Transform Your Energy Efficiency?
            </h2>
            <p className="mb-8 text-gray-400">
              Join hundreds of satisfied businesses saving thousands on energy
              costs
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                className="rounded-lg bg-(--color-primary) px-8 py-3 font-medium text-white transition hover:bg-(--color-primary-dark)"
                href="#"
              >
                Get Custom Quote
              </a>
              <a
                className="flex items-center justify-center gap-2 rounded-lg border border-gray-700 bg-gray-800 px-8 py-3 font-medium text-white transition hover:bg-gray-700"
                href="#"
              >
                <span className="material-icons-outlined text-sm">call</span>{" "}
                {SITE_CONFIG.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
