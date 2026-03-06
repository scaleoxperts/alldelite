import { INDUSTRIES_CTA } from "@/contents/industries";

export default function CTASection() {
  return (
    <section className="bg-[#0DAA72] py-20 text-center text-white">
      <div className="mx-auto max-w-7xl px-5">
        <h2 className="mb-3 text-3xl font-bold md:text-4xl">
          {INDUSTRIES_CTA.heading}
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-lg text-white/80">
          {INDUSTRIES_CTA.description}
        </p>
        <a
          href="/contact"
          className="mt-4 inline-block rounded-lg bg-white px-10 py-4 text-lg font-bold text-green-600 transition hover:bg-gray-100"
        >
          {INDUSTRIES_CTA.cta} -{">"}
        </a>
      </div>
    </section>
  );
}
