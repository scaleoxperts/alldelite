export default function PartnershipCTASection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-6">
        <div
          className="relative overflow-hidden rounded-3xl p-12 text-center text-white shadow-2xl shadow-green-900/20"
          style={{
            background:
              "linear-gradient(135deg, #00b67a 0%, #008f62 60%, #006b48 100%)",
          }}
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-0 left-1/4 h-48 w-48 rounded-full bg-white/10 blur-[60px]" />
            <div className="absolute right-1/4 bottom-0 h-36 w-36 rounded-full bg-white/8 blur-[50px]" />
          </div>

          <div className="relative z-10">
            <div className="mb-5 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-bold tracking-widest text-white uppercase">
                <svg
                  className="h-3 w-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                    clipRule="evenodd"
                  />
                </svg>
                Join Our Journey
              </span>
            </div>

            <h2 className="mb-4 text-4xl leading-tight font-bold md:text-5xl">
              Interested in Partnership
              <br />
              Opportunities?
            </h2>

            <p className="mb-10 text-lg font-light text-green-100">
              Explore collaboration possibilities as we expand globally
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 font-bold text-[#007a50] shadow-lg transition hover:bg-green-50"
              >
                Get in Touch
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-white/40 px-8 py-3.5 font-bold text-white transition hover:bg-white/10"
              >
                View Products
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
