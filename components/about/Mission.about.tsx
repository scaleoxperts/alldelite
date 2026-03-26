import Capsule from "../shared/Capsule";

export default function MissionSection() {
  return (
    <section className="bg-[#f5faf8] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <Capsule text="Our Purpose" />
          <h2 className="mt-3 text-4xl font-bold text-[#0d1b2a] md:text-5xl">
            What Is Our Mission?
          </h2>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl bg-white p-8 shadow-md shadow-gray-100 md:p-10">
            <div className="flex items-start gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#00a884]">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="9" strokeWidth="2" />
                  <circle cx="12" cy="12" r="3" strokeWidth="2" />
                </svg>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-bold text-[#0d1b2a]">
                  Our Mission
                </h3>
                <p className="mb-2 leading-relaxed text-gray-600">
                  Our Mission is to provide Comfort Cooling and Heating of
                  Buildings and Hot Water generation using Energy Efficient and
                  Cost Effective Heat Pump Technology.
                </p>
                <p className="leading-relaxed text-gray-600">
                  Help our Customers to contribute in{" "}
                  <strong className="text-[#00a884]">Decarbonization</strong>{" "}
                  and in reducing their{" "}
                  <strong className="text-[#00a884]">Carbon Footprint</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
