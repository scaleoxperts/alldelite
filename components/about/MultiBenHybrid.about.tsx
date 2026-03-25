import Capsule from "../shared/Capsule";

export default function MultiBenHybridSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <Capsule text="Innovation" />
          <h2 className="mt-3 text-4xl font-bold text-[#0d1b2a] md:text-5xl">
            What Is MULTIBEN® Hybrid?
          </h2>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="rounded-3xl border border-[#00a884]/15 bg-[#f0faf6] p-8 md:p-10">
            <p className="mb-8 text-center text-[#425962]">
              <strong className="text-[#00a884]">MULTIBEN® Hybrid</strong> is
              gaining popularity, as it uses both:
            </p>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-gray-100 bg-white p-6 text-left shadow-sm">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#f97316]">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h4 className="mb-1 text-lg font-bold text-[#0d1b2a]">
                  Active Solar Energy
                </h4>
                <p className="text-sm text-gray-400">
                  Through Solar Water Heaters
                </p>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-white p-6 text-left shadow-sm">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#00a884]">
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h4 className="mb-1 text-lg font-bold text-[#0d1b2a]">
                  Passive Solar Energy
                </h4>
                <p className="text-sm text-gray-400">
                  Through Heat Pump Technology
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
