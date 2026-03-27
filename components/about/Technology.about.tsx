import Capsule from "../shared/Capsule";

export default function TechnologySection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <Capsule text="Technology" />
          <h2 className="mt-3 text-4xl font-bold text-[#0d1b2a] md:text-5xl">
            What Is the Technology Behind Our Products?
          </h2>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <p className="leading-relaxed text-gray-600">
              Our brand <strong className="text-[#00a884]">MULTIBEN®</strong>{" "}
              works on the principle of extracting energy from the environment —
              similar to how an air conditioner works, but in reverse. Instead
              of creating heat directly like conventional boilers, MULTIBEN
              captures ambient heat energy and uses it to heat water in an
              energy-efficient way.
            </p>

            <div className="rounded-2xl border border-[#00a884]/20 bg-[#f0faf6] p-6">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#00a884]">
                  <svg
                    className="h-5 w-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="9" strokeWidth="2" />
                    <circle cx="12" cy="12" r="3" strokeWidth="2" />
                  </svg>
                </div>
                <h4 className="font-bold text-[#0d1b2a]">
                  Coefficient of Performance (COP)
                </h4>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">
                With a <strong className="text-[#0d1b2a]">COP of 3–4.5</strong>,
                MULTIBEN can produce up to{" "}
                <strong className="text-[#00a884]">4 kW of heat energy</strong>{" "}
                from just{" "}
                <strong className="text-[#0d1b2a]">
                  1 kW of electrical energy input
                </strong>
                , making it extremely efficient.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://placehold.co/700x420/1a2e2e/ffffff?text=Heat+Pump+Technology"
                alt="Heat Pump Technology"
                className="h-auto w-full object-cover"
              />
            </div>

            <div className="flex items-center justify-around rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#0d1b2a]">1 kW</div>
                <div className="mt-1 text-xs font-medium tracking-widest text-gray-400 uppercase">
                  Input Energy
                </div>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00a884]/10">
                <svg
                  className="h-5 w-5 text-[#00a884]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <div className="text-center">
                <div className="text-3xl font-bold text-[#00a884]">4 kW</div>
                <div className="mt-1 text-xs font-medium tracking-widest text-[#00a884]/60 uppercase">
                  Heat Output
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
