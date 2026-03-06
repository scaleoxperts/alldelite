import { Lightbulb, Shield } from "lucide-react";

import { TECHNOLOGY } from "@/contents/about";

import Capsule from "../shared/Capsule";

export default function TechnologySection() {
  return (
    <section className="bg-(--color-background-light) py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <Capsule text={TECHNOLOGY.badge} />

          <h2 className="mt-2 text-4xl font-bold text-(--color-text-black)">
            {TECHNOLOGY.heading}
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col justify-between rounded-3xl bg-gray-900 p-10 text-white">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-950">
                  <Lightbulb className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold">{TECHNOLOGY.card.title}</h3>
              </div>
              <p className="mb-8 leading-relaxed">
                Our brand <b>MULTIBEN</b> works on the principle of extracting
                energy from the environment - similar to how an air conditioner
                works, but in reverse. Instead of creating heat directly like
                conventional boilers, MULTIBEN captures ambient heat energy and
                uses it to heat water in an energy-Q efficient way.
              </p>
              <div className="flex w-full flex-col flex-wrap items-start justify-evenly gap-4 rounded-2xl border border-green-600 bg-linear-to-br from-[#1E4148] to-[#1D3A54] p-4">
                <div className="flex items-center gap-2 font-bold text-[#4adea7]">
                  <Shield />
                  <span>High efficiency performance</span>
                </div>
                <div>
                  <span className="font-bold">
                    Coefficient of Performance (COP):
                  </span>{" "}
                  3-4.5
                </div>
                <div className="font-light">
                  MULTIBEN can produce up to{" "}
                  <span className="font-bold text-[#4adea7]">
                    4 kW of heat energy
                  </span>{" "}
                  from just{" "}
                  <span className="font-bold text-[#4adea7]">
                    1 kW of electrical energy
                  </span>{" "}
                  input, making it extremely efficient
                </div>
              </div>
            </div>
          </div>

          <div className="h-full overflow-hidden rounded-3xl shadow-xl">
            <img
              src="/landing/featured-product.png"
              alt="Technology Visual"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
