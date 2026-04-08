import { Calendar, Goal, Handbag, Handshake, Newspaper } from "lucide-react";

import Capsule from "../shared/Capsule";

const highlights = [
  {
    bg: "bg-[#EDFBF8]",
    border: "border-[#AFF5D5]",
    iconBg: "bg-[#00a884]/10",
    iconColor: "text-[#00a884]",
    label: "Primary Focus",
    body: (
      <>
        <strong className="text-[#0d1b2a]">
          Alldelite Renewables Private Limited
        </strong>{" "}
        will be used specially for overseas business, enabling us to expand our
        sustainable heat pump solutions to international markets with dedicated
        resources and expertise.
      </>
    ),
    icon: <Goal className="h-5 w-5" />,
  },
  {
    bg: "bg-[#EFF7FF]",
    border: "border-[#BEDBFF]",
    iconBg: "bg-[#00a884]/10",
    iconColor: "text-[#00a884]",
    label: "Strategic Collaboration",
    body: "We have already entered into collaboration with a Singapore company towards this activity, marking our first strategic partnership in the Asian market and laying the foundation for regional expansion.",
    icon: <Handshake className="h-5 w-5 text-blue-500" />,
  },
  {
    bg: "bg-[#F6F3FF]",
    border: "border-[#DDD6FF]",
    iconBg: "bg-[#3b82f6]/10",
    iconColor: "text-[#3b82f6]",
    label: "Commercial Operations Timeline",
    body: (
      <>
        We plan to start our commercial operation in the next financial year{" "}
        <strong className="text-[#0d1b2a]">2026-27</strong>, with comprehensive
        preparations underway to ensure a successful launch and sustainable
        growth trajectory.
      </>
    ),
    icon: <Calendar className="h-5 w-5 text-[#b83bf6]" />,
  },
  {
    iconBg: "bg-[#0d2626]",
    iconColor: "text-[#00a884]",
    label: "Stay Updated",
    body: "We shall keep all posted on the developments through this website. Follow our progress as we expand globally and bring sustainable heating solutions to new markets.",
    dark: true,
    icon: <Handbag className="h-5 w-5 text-[#00a884]" />,
  },
];

export default function IntroducingSection() {
  return (
    <section className="bg-[#f5faf8] py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-14 text-center">
          <Capsule text="Introducing" />
          <h2 className="mt-3 text-5xl leading-tight font-bold text-[#0d1b2a]">
            Alldelite Renewables
            <br />
            Private Limited
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[#425962]">
            A new chapter in our journey towards global sustainable energy
            solutions
          </p>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-lg shadow-gray-100 md:p-10">
          <div className="mb-7 flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#00a884]">
              <Newspaper className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0d1b2a]">
                New Private Limited Organization
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Dedicated to overseas business development and international
                partnerships
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {highlights.map((h) => (
              <div
                key={h.label}
                className={`rounded-2xl border p-5 ${
                  h.dark
                    ? "border-[#00a884]/20 bg-[#0d2626] text-white"
                    : `${h.border} ${h.bg}`
                }`}
              >
                <div className="mb-2 flex items-center gap-2">
                  <span
                    className={`${h.dark ? "text-[#00a884]" : h.iconColor}`}
                  >
                    {h.icon}
                  </span>
                  <span
                    className={`text-sm font-bold ${
                      h.dark ? "text-white" : "text-[#0d1b2a]"
                    }`}
                  >
                    {h.label}
                  </span>
                </div>
                <p
                  className={`text-sm leading-relaxed ${
                    h.dark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {h.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
