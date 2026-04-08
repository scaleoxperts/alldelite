import Capsule from "../shared/Capsule";

export default function HowItWorksSection() {
  return (
    <section className="bg-[#f5faf8] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <Capsule text="How It Works" />
          <h2 className="mt-3 text-4xl font-bold text-[#0d1b2a] md:text-5xl">
            How Do Heat Pumps Work?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#425962]">
            Heat Pumps work by effectively transferring the heat to and from the
            freely available ambient air, water and Earth.
          </p>
        </div>

        <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl bg-[#0d2626] p-8 shadow-2xl md:p-12">
          <div className="mb-6 text-center">
            <span className="text-2xl font-bold text-white">SK Alldelite</span>
            <div className="mt-1 text-lg font-semibold tracking-wide">
              <span className="text-[#3b82f6]">MULTI</span>
              <span className="text-[#ef4444]">BEN</span>
              <span className="text-white"> HEAT PUMPS</span>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl bg-[#f9f3e0] p-4">
            <div className="mb-3 text-center text-sm font-bold text-[#0d2626]">
              How a Heat Pump Works
            </div>
            <img
              src="/products/heat-pump-cycle.gif"
              alt="How a Heat Pump Works"
              className="h-auto w-full rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
