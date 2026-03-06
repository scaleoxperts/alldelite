import { Briefcase, Building, Users } from "lucide-react";

import { USAGE } from "@/contents/about";

const ICON_MAP = {
  building: Building,
  briefcase: Briefcase,
  users: Users,
} as const;

export default function UsageSection() {
  return (
    <section className="bg-(--color-background-light) py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-(--color-text-black)">
            {USAGE.heading}
          </h2>
        </div>

        <div className="rounded-3xl bg-gray-900 p-12 text-white">
          <div className="mb-12 flex items-center gap-6">
            <div className="shrink-0 rounded-2xl bg-(--color-primary)/20 p-4">
              <Building className="h-8 w-8 text-(--color-primary)" />
            </div>
            <p className="text-lg text-gray-400">
              Alldelite Heat Pumps are installed in{" "}
              <span className="text-(--color-primary)">
                various commercial and industrial settings worldwide
              </span>
              . From large manufacturing plants to small businesses, our
              solutions provide reliable energy savings.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {USAGE.sectors.map((sector) => {
              const Icon =
                ICON_MAP[sector.iconKey as keyof typeof ICON_MAP] ?? Building;
              return (
                <div
                  key={sector.label}
                  className="cursor-default rounded-2xl border border-white/10 bg-[#364050] p-8 text-center backdrop-blur-sm transition-colors hover:bg-(--color-primary)/10"
                >
                  <Icon className={`mx-auto mb-4 h-10 w-10 ${sector.color}`} />
                  <span className="font-bold">{sector.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
