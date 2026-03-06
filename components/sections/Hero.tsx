import { HERO_STATS } from "@/contents/landing";

export default function HeroSection() {
  return (
    <header className="relative overflow-hidden bg-linear-to-l from-green-950 to-(--color-background-dark)">
      <div className="from-primary/10 pointer-events-none absolute top-0 right-0 h-full w-1/2 bg-linear-to-l to-transparent" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center space-x-2 rounded-full border border-gray-700 bg-gray-800/50 px-3 py-1">
              <span className="material-icons-outlined text-sm text-(--color-primary)">
                trending_up
              </span>
              <span className="text-xs font-medium tracking-wide text-gray-300 uppercase">
                Enterprise Heat Pump Solutions
              </span>
            </div>
            <h1 className="mb-6 text-4xl leading-tight font-bold text-white lg:text-6xl">
              Driving Energy Innovation with{" "}
              <span className="text-(--color-primary)">
                Efficient Heating &amp; Intelligent Energy Solutions
              </span>
            </h1>
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-gray-400">
              A Trusted Leader in Sustainable Heating &amp; Renewable Energy
              Solutions for commercial buildings, hospitality and businesses.
            </p>
            <div className="mb-8 flex flex-col gap-4 text-sm text-gray-300 sm:flex-row">
              {[
                { icon: "check_circle", text: "1-3 Year ROI" },
                { icon: "check_circle", text: "Dedicated Team Support" },
                {
                  icon: "check_circle",
                  text: "Zero Capital Investment Options",
                },
              ].map((item) => (
                <div key={item.text} className="flex items-center">
                  <span className="material-icons-outlined mr-2 text-base text-(--color-primary)">
                    {item.icon}
                  </span>
                  {item.text}
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                className="flex items-center justify-center rounded-lg bg-(--color-primary) px-8 py-4 font-semibold text-white transition hover:bg-(--color-primary-dark)"
                href="/contact"
              >
                Request Custom Quote
                <span className="material-icons-outlined ml-2 text-lg">
                  arrow_forward
                </span>
              </a>
              <a
                className="flex items-center justify-center rounded-lg border border-gray-700 bg-gray-800 px-8 py-4 font-semibold text-white transition hover:bg-gray-700"
                href="/contact"
              >
                Schedule Site Visit
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {HERO_STATS.map((stat) => (
              <div
                key={stat.label}
                className="relative rounded-xl border border-gray-700 bg-gray-800/50 p-6 backdrop-blur-sm"
              >
                <div className="mb-1 text-4xl font-bold text-(--color-primary)">
                  {stat.value}
                  {"unit" in stat && (
                    <span className="text-xl font-normal text-gray-500">
                      {" "}
                      {stat.unit}
                    </span>
                  )}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
                {"badge" in stat && stat.badge && (
                  <div className="absolute right-0 -bottom-10 rounded bg-(--color-primary) px-2 py-1 text-[12px] font-bold text-white uppercase md:text-[15px]">
                    {stat.badge}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
