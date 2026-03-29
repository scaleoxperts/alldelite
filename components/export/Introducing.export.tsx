import Capsule from "../shared/Capsule";

const highlights = [
  {
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
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    iconBg: "bg-[#00a884]/10",
    iconColor: "text-[#00a884]",
    label: "Strategic Collaboration",
    body: "We have already entered into collaboration with a Singapore company towards this activity, marking our first strategic partnership in the Asian market and laying the foundation for regional expansion.",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
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
    icon: (
      <svg
        className="h-5 w-5"
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
  },
  {
    iconBg: "bg-[#0d2626]",
    iconColor: "text-[#00a884]",
    label: "Stay Updated",
    body: "We shall keep all posted on the developments through this website. Follow our progress as we expand globally and bring sustainable heating solutions to new markets.",
    dark: true,
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
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
              <svg
                className="h-7 w-7 text-white"
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
                    : "border-gray-100 bg-[#f9fafb]"
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
