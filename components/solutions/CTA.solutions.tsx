import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-b from-[#0a1f1c] to-[#05100e] p-12 text-center text-white md:p-16">
          <div className="relative z-10">
            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              Ready to Transform Your Energy Infrastructure?
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-emerald-100/70">
              Our experts are ready to design a custom solution for your
              business.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#contact"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-(--color-primary) px-8 py-3.5 font-semibold text-white transition hover:bg-(--color-primary-dark) sm:w-auto"
              >
                Schedule Consultation
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#products"
                className="w-full rounded-lg border border-white/20 bg-white/10 px-8 py-3.5 font-semibold text-white backdrop-blur-md transition hover:bg-white/20 sm:w-auto"
              >
                Explore Products
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
