import Capsule from "../shared/Capsule";

export default function WhoAreWeSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <Capsule text="Our Story" />
          <h2 className="mt-3 text-4xl font-bold text-[#0d1b2a] md:text-5xl">
            Who Are We?
          </h2>
        </div>

        <div className="grid items-start gap-12 md:grid-cols-2">
          <div className="space-y-5 text-[15px] leading-relaxed text-gray-600">
            <p>
              <strong className="text-[#0d1b2a]">SK Alldelite</strong> is a
              specialist company focused on high-efficiency heat pumps used for
              Hot water generation and Comfort cooling and heating of buildings.
              It was formed from the established{" "}
              <span className="font-semibold text-[#00a884] underline underline-offset-2">
                Alldelite Business Group
              </span>
              , which began in 1999 and built a strong reputation for
              professional management.
            </p>
            <p>
              In 2008, the group entered into the Heat Pump business. Started an
              exclusive organization for Heat Pump business in the name of SK
              Alldelite.
            </p>
            <p>
              Introduced our Brand{" "}
              <strong className="text-[#0d1b2a]">MULTIBEN</strong> in 2012 and
              registered MULTIBEN®.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/about/whoarewe.png"
                alt="SK Alldelite Facility"
                className="h-auto w-full object-cover"
              />
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                { year: "1999", label: "Founded" },
                { year: "2008", label: "Heat Pumps" },
                { year: "2012", label: "MULTIBEN®" },
              ].map((stat) => (
                <div
                  key={stat.year}
                  className="rounded-xl border border-[#00a884]/20 bg-[#f0faf6] px-4 py-5 text-center"
                >
                  <div className="text-2xl font-bold text-[#00a884]">
                    {stat.year}
                  </div>
                  <div className="mt-1 text-xs font-medium tracking-widest text-gray-500 uppercase">
                    {stat.label}
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
