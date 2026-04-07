import { Calendar, Globe, MapPin } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-145 flex-col items-center justify-center overflow-hidden text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/export/hero.png')",
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 text-center">
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#00a884]/40 bg-[#00a884]/10 px-4 py-1.5 text-xs font-bold tracking-widest text-[#00a884] uppercase">
            <Globe size={16} />
            Global Expansion
          </span>
        </div>

        <h1 className="mb-5 text-6xl font-bold tracking-tight md:text-7xl">
          Export Operations
        </h1>

        <p className="mx-auto mb-14 max-w-2xl text-lg leading-relaxed font-light text-gray-300">
          Expanding sustainable heat pump solutions to international markets
          through strategic partnerships
        </p>

        <div className="grid w-full max-w-2xl grid-cols-3 gap-4">
          {[
            {
              icon: <Calendar className="h-6 w-6 text-[#00a884]" />,
              value: "2026-27",
              label: "Launch Year",
            },
            {
              icon: <MapPin className="h-6 w-6 text-[#00a884]" />,
              value: "Singapore",
              label: "First Partner",
            },
            {
              icon: <Globe className="h-6 w-6 text-[#00a884]" />,
              value: "Global",
              label: "Vision",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/8 px-4 py-5 backdrop-blur-sm"
              style={{ background: "rgba(255,255,255,0.07)" }}
            >
              {stat.icon}
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs font-medium text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-8 w-5 items-start justify-center rounded-full border-2 border-white/30 pt-1.5">
          <div className="h-2 w-0.5 animate-bounce rounded-full bg-white/60" />
        </div>
      </div>
    </section>
  );
}
