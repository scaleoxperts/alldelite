import { Building, Factory, Home, Hospital, Save } from "lucide-react";

import Capsule from "../shared/Capsule";
import MultibenLogo from "../shared/MultibenLogo";

const applications = [
  {
    label: "Villas & Bungalows",
    description: "Independent homes with efficient hot water systems.",
    img: "/about/product-used-1.png",
    iconBg: "bg-[#00a884]",
    icon: <Home className="h-4 w-4 text-white" />,
  },
  {
    label: "Hotels & Hostels",
    description: "Star hotels with centralized hot water solutions.",
    img: "/about/product-used-2.png",
    iconBg: "bg-[#00a884]",
    icon: <Save className="h-4 w-4 text-white" />,
  },
  {
    label: "Hospitals",
    description: "Healthcare facilities requiring reliable hot water.",
    img: "/about/product-used-3.png",
    iconBg: "bg-[#3b82f6]",
    icon: <Hospital className="h-4 w-4 text-white" />,
  },
  {
    label: "Multi-Storied Apartments",
    description: "Residential buildings with cost-effective systems.",
    img: "/about/product-used-4.png",
    iconBg: "bg-[#00a884]",
    icon: <Building className="h-4 w-4 text-white" />,
  },
  {
    label: "Factories",
    description: "Industrial facilities with large-scale requirements.",
    img: "/about/product-used-5.png",
    iconBg: "bg-[#00a884]",
    icon: <Factory className="h-4 w-4 text-white" />,
  },
];

export default function UsageSection() {
  return (
    <section className="bg-[#f5faf8] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <Capsule text="Applications" />
          <h2 className="mt-3 text-4xl font-bold text-[#0d1b2a] md:text-5xl">
            Where Are Our Products Used?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#425962]">
            We have installed our{" "}
            <strong className="inline-flex items-center gap-1 text-[#00a884]">
              <MultibenLogo size="small" />
            </strong>{" "}
            in Star Hotels, Hostels, Hospitals, Independent Bungalows, Villas,
            Residential Apartments and Factories. Centralized Hot Water
            Solutions are very cost effective in Multi-storied apartments.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {applications.map((app) => (
            <div
              key={app.label}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:shadow-md"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={app.img}
                  alt={app.label}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div
                  className={`absolute bottom-3 left-3 flex h-8 w-8 items-center justify-center rounded-lg ${app.iconBg} shadow-md`}
                >
                  {app.icon}
                </div>
              </div>

              <div className="p-4">
                <h4 className="font-bold text-[#0d1b2a]">{app.label}</h4>
                <p className="mt-1 text-xs text-gray-500">{app.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
