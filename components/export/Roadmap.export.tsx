import { Briefcase, Newspaper, TrendingUp } from "lucide-react";

import Capsule from "../shared/Capsule";

const milestones = [
  {
    phase: "CURRENT PHASE",
    year: null,
    title: "Organization Setup & Partnership",
    desc: "Establishing Alldelite Renewables Private Limited and finalizing Singapore collaboration agreements",
    status: "In Progress",
    statusColor: "bg-[#00a884]/20 text-[#00a884]",
    iconBg: "bg-industries-cta",
    icon: <Newspaper className="h-6 w-6" />,
  },
  {
    phase: null,
    year: "2026",
    title: "Preparation & Infrastructure",
    desc: "Building export infrastructure, compliance frameworks, and market entry strategies",
    status: "Upcoming",
    statusColor: "bg-[#3b82f6]/20 text-[#60a5fa]",
    iconBg: "bg-industries-cta ",
    icon: <Briefcase className="h-6 w-6" />,
  },
  {
    phase: null,
    year: "2026-27",
    title: "Commercial Launch",
    desc: "Beginning commercial operations with Singapore partner and expanding to regional markets",
    status: "Planned",
    statusColor: "bg-white/10 text-gray-400",
    iconBg: "bg-industries-cta",
    icon: <TrendingUp className="h-6 w-6" />,
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
