import { ArrowLeft, Globe } from "lucide-react";

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
                <Globe size={16} />
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
                <ArrowLeft size={16} className="rotate-180" />
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
