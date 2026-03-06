import { PRODUCTS_CTA } from "@/contents/products";

export default function CTASection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="bg-products-cta rounded-xl p-10 text-center text-white md:p-16">
          <span className="mb-4 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold tracking-wide text-white uppercase">
            {PRODUCTS_CTA.badge}
          </span>
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">
            {PRODUCTS_CTA.heading.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i === 0 && <br />}
              </span>
            ))}
          </h2>
          <p className="mx-auto mb-8 max-w-lg text-base opacity-90">
            {PRODUCTS_CTA.description}
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/contact"
              className="inline-block rounded-md bg-white px-6 py-3 text-sm font-semibold text-green-700 transition hover:bg-gray-100"
            >
              {PRODUCTS_CTA.primaryCta}
            </a>
            <a
              href="/contact"
              className="inline-block rounded-md border border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-green-700"
            >
              {PRODUCTS_CTA.secondaryCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
