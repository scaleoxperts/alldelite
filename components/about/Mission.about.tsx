import { Zap } from "lucide-react";

import { MISSION } from "@/contents/about";

export default function MissionSection() {
  return (
    <section className="px-6 py-12">
      <div className="bg-gradient-accent-primary relative mx-auto max-w-5xl overflow-hidden rounded-3xl p-12 text-white shadow-2xl">
        <div className="relative z-10 flex flex-col items-center gap-8 md:flex-row">
          <div className="shrink-0 rounded-2xl bg-white/20 p-4">
            <Zap className="h-12 w-12" />
          </div>
          <div>
            <h3 className="mb-4 text-3xl font-bold">{MISSION.heading}</h3>
            <p className="text-lg leading-relaxed text-emerald-50/90">
              {MISSION.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
