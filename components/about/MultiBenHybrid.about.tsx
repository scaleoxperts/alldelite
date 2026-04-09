import { Sun, Zap } from "lucide-react";

import Capsule from "../shared/Capsule";
import MultibenLogo from "../shared/MultibenLogo";

export default function MultiBenHybridSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <Capsule text="Innovation" />
          <h2 className="mt-3 text-4xl font-bold text-[#0d1b2a] md:text-5xl">
            What Is {MultibenLogo({ size: "large" })} Hybrid?
          </h2>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="rounded-3xl border border-[#00a884]/15 bg-[#f0faf6] p-8 md:p-10">
            <p className="mb-8 text-center text-[#425962]">
              {MultibenLogo({ size: "small" })}{" "}
              <strong className="text-[#00a884]"> Hybrid</strong> is gaining
              popularity, as it uses both:
            </p>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-gray-100 bg-white p-6 text-left shadow-sm">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#f97316]">
                  <Sun className="h-6 w-6 text-white" />
                </div>
                <h4 className="mb-1 text-lg font-bold text-[#0d1b2a]">
                  Active Solar Energy
                </h4>
                <p className="text-sm text-gray-400">
                  Through Solar Water Heaters
                </p>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-white p-6 text-left shadow-sm">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#00a884]">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h4 className="mb-1 text-lg font-bold text-[#0d1b2a]">
                  Passive Solar Energy
                </h4>
                <p className="text-sm text-gray-400">
                  Through Heat Pump Technology
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
