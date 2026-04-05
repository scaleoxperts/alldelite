import { Award, Globe, Handshake, Ship } from "lucide-react";

import Capsule from "../shared/Capsule";

const goals = [
  {
    label: "Market Expansion",
    desc: "Establishing presence in key international markets",
    iconBg: "bg-[#00a884]",
    icon: <Globe className="h-6 w-6 text-white" />,
  },
  {
    label: "Export Excellence",
    desc: "Delivering quality heat pump solutions globally",
    iconBg: "bg-[#3b82f6]",
    icon: <Ship className="h-6 w-6 text-white" />,
  },
  {
    label: "Strategic Alliances",
    desc: "Building strong partnerships worldwide",
    iconBg: "bg-[#8b5cf6]",
    icon: <Handshake className="h-6 w-6 text-white" />,
  },
  {
    label: "Industry Leadership",
    desc: "Setting standards in sustainable heating technology",
    iconBg: "bg-[#f97316]",
    icon: <Award className="h-6 w-6 text-white" />,
  },
];

export default function GlobalGoalsSection() {
  return (
    <section className="bg-[#f5faf8] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <Capsule text="Our Vision" />
          <h2 className="mt-3 text-5xl font-bold text-[#0d1b2a]">
            Global Expansion Goals
          </h2>
          <p className="mt-3 text-[#425962]">
            Building a sustainable future through international partnerships and
            market expansion
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {goals.map((g) => (
            <div
              key={g.label}
              className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all hover:shadow-md"
            >
              <div
                className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl ${g.iconBg}`}
              >
                {g.icon}
              </div>
              <h4 className="mb-2 font-bold text-[#0d1b2a]">{g.label}</h4>
              <p className="text-sm leading-relaxed text-gray-500">{g.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
