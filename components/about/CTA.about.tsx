import { ABOUT_CTA } from "@/contents/about";

export default function CTASection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[3rem] bg-gray-900 p-16 text-center text-white shadow-2xl">
          <div className="relative z-10">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              {ABOUT_CTA.heading}
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-xl text-gray-400">
              {ABOUT_CTA.description}
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="#contact"
                className="rounded-full bg-(--color-primary) px-10 py-4 text-lg font-bold shadow-(--color-primary)/20 shadow-lg transition hover:bg-(--color-primary-dark)"
              >
                {ABOUT_CTA.primaryCta}
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/20 px-10 py-4 text-lg font-bold transition hover:bg-white/10"
              >
                {ABOUT_CTA.secondaryCta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
