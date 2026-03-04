import { HOW_IT_WORKS } from "@/contents/about";

export default function HowItWorksSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="mb-12 text-4xl font-bold text-(--color-text-black)">
          {HOW_IT_WORKS.heading}
        </h2>
        <div className="rounded-3xl border border-gray-100 bg-(--color-background-light) p-10 shadow-xl">
          <p className="text-lg leading-relaxed text-(--color-text-gray)">
            MULTIBEN Heat Pumps extract heat from the surrounding air, compress
            it, and transfer it to water - a process similar to refrigeration
            but used for heating rather than cooling. This is an effective
            solution that has been in use for many years and is known for its
            <br />
            <b>high performance and reliability</b>.
          </p>
        </div>
      </div>
    </section>
  );
}
