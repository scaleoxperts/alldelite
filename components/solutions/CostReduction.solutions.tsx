import { CircleCheckBig } from "lucide-react";

import Capsule from "@/components/shared/Capsule";
import { COST_REDUCTION_BENEFITS } from "@/contents/solutions";

export default function CostReductionSection() {
  return (
    <section className="overflow-hidden bg-(--color-background-light) py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <Capsule text="Cost Savings" />

          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
            Cost Reduction Programs
          </h2>

          <p className="mx-auto max-w-2xl text-slate-500">
            Maximize operational savings with long-term, energy-efficient
            heating alternatives to diesel and gas boilers
          </p>
        </div>

        <div className="flex flex-col items-center gap-16 lg:flex-row">
          <div className="w-full lg:w-1/2">
            <img
              src="/solutions/cost-reduction.png"
              alt="Data Analysis Dashboard"
              className="w-full rounded-2xl object-cover shadow-2xl"
              style={{ maxHeight: 400 }}
            />
          </div>

          <div className="w-full space-y-5 lg:w-1/2">
            {COST_REDUCTION_BENEFITS.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3">
                <CircleCheckBig className="h-10 w-10 shrink-0 rounded-md bg-[#E4F8F1] p-2 text-(--color-primary) shadow-md" />
                <p className="font-medium text-slate-700">{benefit}</p>
              </div>
            ))}

            <div className="pt-4">
              <a
                href="#contact"
                className="inline-block rounded-lg bg-(--color-primary) px-8 py-3 font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-(--color-primary-dark)"
              >
                Calculate Your Savings
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
