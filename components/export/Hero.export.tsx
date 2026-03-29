export default function HeroSection() {
  return (
    <section className="relative flex min-h-145 flex-col items-center justify-center overflow-hidden text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(5,20,15,0.78), rgba(5,20,15,0.78)), url('https://placehold.co/1920x900/0a1f18/1a4a3a?text=Port+%26+Shipping+Cranes')",
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 text-center">
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#00a884]/40 bg-[#00a884]/10 px-4 py-1.5 text-xs font-bold tracking-widest text-[#00a884] uppercase">
            <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                clipRule="evenodd"
              />
            </svg>
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
              icon: (
                <svg
                  className="h-6 w-6 text-[#00a884]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <rect
                    x="3"
                    y="4"
                    width="18"
                    height="18"
                    rx="2"
                    ry="2"
                    strokeWidth="2"
                  />
                  <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" />
                  <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" />
                  <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" />
                </svg>
              ),
              value: "2026-27",
              label: "Launch Year",
            },
            {
              icon: (
                <svg
                  className="h-6 w-6 text-[#00a884]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              ),
              value: "Singapore",
              label: "First Partner",
            },
            {
              icon: (
                <svg
                  className="h-6 w-6 text-[#00a884]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              ),
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
