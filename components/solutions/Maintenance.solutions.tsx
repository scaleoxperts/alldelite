import { AlertTriangle } from "lucide-react";

import {
  MAINTENANCE_WARNINGS,
  SAFETY_WARNING_TEXT,
} from "@/contents/solutions";

export default function MaintenanceSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="mb-5 inline-block rounded-full border border-orange-300 bg-orange-50 px-4 py-2 text-[13px] font-semibold text-orange-500 uppercase sm:text-[14px]">
            Important Safety Information
          </span>
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Maintenance &amp; Precautions
          </h2>
        </div>

        <div className="rounded-3xl border border-orange-200 bg-orange-50/50 p-8 lg:p-12">
          <div className="mb-8 flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-lg shadow-orange-500/20">
              <AlertTriangle className="h-6 w-6" />
            </div>
            <div>
              <h3 className="mb-2 text-xl font-bold text-slate-900">
                Critical Safety Warning
              </h3>
              <p className="max-w-3xl text-sm leading-relaxed text-slate-600">
                {SAFETY_WARNING_TEXT}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {MAINTENANCE_WARNINGS.map((warning) => (
              <div
                key={warning}
                className="flex items-start gap-3 rounded-xl border border-orange-200 bg-white p-4"
              >
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" />
                <p className="text-xs leading-relaxed text-slate-600">
                  {warning}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-start justify-start gap-3 border-t border-orange-200 pt-6">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" />
            <span className="text-sm text-(--color-text-black)">
              Keep the valves open while the heat pump is operating.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
