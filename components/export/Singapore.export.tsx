import Image from "next/image";

import Capsule from "../shared/Capsule";

const features = [
  {
    label: "Market Access",
    desc: "Direct access to Southeast Asian and Asia-Pacific markets",
    iconBg: "bg-[#3b82f6]",
    icon: (
      <svg
        className="h-5 w-5 text-white"
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
  {
    label: "Local Expertise",
    desc: "Partnering with regional industry experts and networks",
    iconBg: "bg-[#3b82f6]",
    icon: (
      <svg
        className="h-5 w-5 text-white"
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
    label: "Innovation Hub",
    desc: "Leveraging Singapore&apos;s advanced technology ecosystem",
    iconBg: "bg-[#3b82f6]",
    icon: (
      <svg
        className="h-5 w-5 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
];

export default function SingaporeSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <Capsule text="Strategic Partnership" />
          <h2 className="mt-3 text-5xl font-bold text-[#0d1b2a]">
            Singapore Collaboration
          </h2>
          <p className="mt-3 text-[#425962]">
            Partnering with industry leaders in Asia&apos;s most dynamic
            business hub
          </p>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="https://placehold.co/700x480/0a1f18/aaccaa?text=Singapore+Skyline"
              alt="Singapore"
              width={700}
              height={480}
              className="h-auto w-full object-cover"
            />

            <div className="absolute right-0 bottom-0 left-0 m-4 flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md">
              <svg
                className="h-5 w-5 text-[#00a884]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div>
                <div className="font-bold text-white">
                  Singapore Partnership
                </div>
                <div className="text-xs text-gray-300">
                  Strategic gateway to Asian markets
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <h3 className="mb-3 text-3xl font-bold text-[#0d1b2a]">
                Gateway to Asian Markets
              </h3>
              <p className="leading-relaxed text-gray-600">
                Our collaboration with a Singapore-based company represents a
                strategic entry point into the vibrant Asian market, leveraging
                Singapore&apos;s position as a global business and innovation
                hub.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {features.map((f) => (
                <div
                  key={f.label}
                  className="flex items-start gap-4 rounded-2xl border border-[#3b82f6]/10 bg-[#eff6ff] p-4"
                >
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${f.iconBg}`}
                  >
                    {f.icon}
                  </div>
                  <div>
                    <div className="font-bold text-[#0d1b2a]">{f.label}</div>
                    <div className="mt-0.5 text-sm text-gray-500">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
