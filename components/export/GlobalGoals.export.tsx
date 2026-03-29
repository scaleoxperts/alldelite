import Capsule from "../shared/Capsule";

const goals = [
  {
    label: "Market Expansion",
    desc: "Establishing presence in key international markets",
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
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    label: "Export Excellence",
    desc: "Delivering quality heat pump solutions globally",
    iconBg: "bg-[#3b82f6]",
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
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
      </svg>
    ),
  },
  {
    label: "Strategic Alliances",
    desc: "Building strong partnerships worldwide",
    iconBg: "bg-[#8b5cf6]",
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
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    label: "Industry Leadership",
    desc: "Setting standards in sustainable heating technology",
    iconBg: "bg-[#f97316]",
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
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
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
