import { Building, Home, MapPin } from "lucide-react";

import Capsule from "../shared/Capsule";

const locations = [
  {
    label: "Headquarters",
    detail: (
      <>
        Our Head Quarters is in{" "}
        <strong className="text-[#00a884]">Hyderabad</strong> and we are having{" "}
        <strong className="text-[#00a884]">Pan India</strong> operation.
      </>
    ),
    iconBg: "bg-[#00a884]",
    icon: <Building className="h-5 w-5 text-white" />,
  },
  {
    label: "Corporate Office",
    detail: "Hyderabad",
    iconBg: "bg-[#3b82f6]",
    icon: <Home className="h-5 w-5 text-white" />,
  },
  {
    label: "Service Locations",
    detail: "Chennai & Hyderabad",
    iconBg: "bg-[#8b5cf6]",
    icon: <MapPin className="h-5 w-5 text-white" />,
  },
];

export default function LocationSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <Capsule text="Locations" />
          <h2 className="mt-3 text-4xl font-bold text-[#0d1b2a] md:text-5xl">
            Where Are We Located?
          </h2>
        </div>

        <div className="mx-auto max-w-2xl">
          <div className="overflow-hidden rounded-2xl border border-[#00a884]/15 bg-[#f0faf6]">
            {locations.map((loc, i) => (
              <div
                key={loc.label}
                className={`flex items-start gap-4 p-5 ${
                  i !== locations.length - 1
                    ? "border-b border-[#00a884]/10"
                    : ""
                }`}
              >
                <div
                  className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${loc.iconBg}`}
                >
                  {loc.icon}
                </div>
                <div>
                  <h4 className="font-bold text-[#0d1b2a]">{loc.label}</h4>
                  <p className="mt-1 text-sm text-gray-500">{loc.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
