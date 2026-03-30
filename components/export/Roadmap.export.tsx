import Capsule from "../shared/Capsule";

const milestones = [
  {
    phase: "CURRENT PHASE",
    year: null,
    title: "Organization Setup & Partnership",
    desc: "Establishing Alldelite Renewables Private Limited and finalizing Singapore collaboration agreements",
    status: "In Progress",
    statusColor: "bg-[#00a884]/20 text-[#00a884]",
    iconBg: "bg-[#00a884]",
    icon: (
      <svg
        className="h-6 w-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    phase: null,
    year: "2026",
    title: "Preparation & Infrastructure",
    desc: "Building export infrastructure, compliance frameworks, and market entry strategies",
    status: "Upcoming",
    statusColor: "bg-[#3b82f6]/20 text-[#60a5fa]",
    iconBg: "bg-[#1e3a5f]",
    icon: (
      <svg
        className="h-6 w-6 text-[#60a5fa]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
  },
  {
    phase: null,
    year: "2026-27",
    title: "Commercial Launch",
    desc: "Beginning commercial operations with Singapore partner and expanding to regional markets",
    status: "Planned",
    statusColor: "bg-white/10 text-gray-400",
    iconBg: "bg-[#00a884]",
    icon: (
      <svg
        className="h-6 w-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
  },
];

export default function RoadmapSection() {
  return (
    <section className="bg-[#071212] py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-14 text-center">
          <Capsule text="Roadmap" variant="dark" />
          <h2 className="mt-3 text-5xl font-bold text-white">
            Our Journey Ahead
          </h2>
          <p className="mt-3 text-gray-400">
            Key milestones in our international expansion
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {milestones.map((m) => (
            <div
              key={m.title}
              className="flex items-start gap-5 rounded-2xl border border-white/8 p-6"
              style={{ background: "rgba(255,255,255,0.05)" }}
            >
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${m.iconBg}`}
              >
                {m.icon}
              </div>

              <div className="flex-1">
                {m.phase && (
                  <div className="mb-1 text-xs font-bold tracking-widest text-[#00a884] uppercase">
                    {m.phase}
                  </div>
                )}
                {m.year && (
                  <div className="mb-1 text-xs font-bold text-gray-400">
                    {m.year}
                  </div>
                )}
                <h4 className="font-bold text-white">{m.title}</h4>
                <p className="mt-1 text-sm leading-relaxed text-gray-400">
                  {m.desc}
                </p>
              </div>

              <span
                className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${m.statusColor}`}
              >
                {m.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
