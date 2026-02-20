import { IMPACT_METRICS } from "@/lib/constants";

export default function ImpactSection() {
  return (
    <section className="relative border-t border-gray-800 py-20">
      <div className="absolute inset-0 bg-[url(/landing/industry.png)] bg-cover bg-center" />
      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-emerald-900/70 to-black/90" />
      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-2 text-3xl font-bold text-white">
          Environmental <span className="text-yellow-400">Impact</span>
        </h2>
        <p className="mb-16 text-gray-300">
          Real-time sustainability metrics from our heat pump installations
        </p>
        <div className="grid gap-12 md:grid-cols-3">
          {IMPACT_METRICS.map((metric) => (
            <div key={metric.label} className="flex flex-col items-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20">
                <span className="material-icons-outlined text-2xl text-emerald-400">
                  {metric.icon}
                </span>
              </div>
              <div className="mb-2 text-4xl font-bold tracking-tight text-white">
                {metric.value}
              </div>
              <div className="mb-1 text-xs font-bold tracking-widest text-gray-200 uppercase">
                {metric.label}
              </div>
              <div className="text-xs text-gray-400">{metric.unit}</div>
            </div>
          ))}
        </div>
        <p className="mt-12 text-xs text-gray-400 italic">
          Data updated in real-time across our network of commercial
          installations worldwide
        </p>
      </div>
    </section>
  );
}
