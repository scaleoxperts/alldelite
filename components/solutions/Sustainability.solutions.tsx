import { Check, CircleCheckBig, Zap } from "lucide-react";

import Capsule from "@/components/shared/Capsule";
import {
  SUSTAINABILITY_CHECKLIST,
  SUSTAINABILITY_STATS,
} from "@/contents/solutions";

export default function SustainabilitySection() {
  return (
    <section className="bg-(--color-background-light) py-24">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <Capsule text="Sustainability" />

        <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
          Sustainability Certification
        </h2>

        <p className="mx-auto mb-16 max-w-2xl text-slate-500">
          Support your sustainability goals with clean, renewable heating
          solutions
        </p>

        <div className="bg-solutions-sustainability flex flex-col overflow-hidden rounded-3xl text-white shadow-xl lg:flex-row">
          <div className="flex flex-col justify-center p-10 text-left lg:w-1/2 lg:p-12">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#46C397] bg-[#20B17E]">
              <Zap className="h-7 w-7" />
            </div>

            <h3 className="mb-8 text-2xl font-bold lg:text-3xl">
              Clean &amp; Renewable Energy
            </h3>

            <ul className="space-y-4">
              {SUSTAINABILITY_CHECKLIST.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full">
                    <CircleCheckBig
                      className="h-5 w-5 text-white"
                      strokeWidth={3}
                    />
                  </div>
                  <span className="text-sm font-light lg:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-center p-8 lg:w-1/2 lg:p-12">
            <div className="grid w-full grid-cols-2 gap-4">
              {SUSTAINABILITY_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-[#46C397] bg-[#20B17E] px-6 py-8 text-center"
                >
                  <div className="mb-3">
                    <stat.icon className="mx-auto h-9 w-9 text-white" />
                  </div>
                  <div className="mb-1 text-3xl font-bold">{stat.value}</div>
                  <div className="text-xs font-medium tracking-widest text-emerald-200 uppercase">
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
