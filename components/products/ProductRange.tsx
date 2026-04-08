"use client";

import {
  Activity,
  Box,
  CheckCircle,
  Droplets,
  ShieldCheck,
  Thermometer,
  TrendingDown,
  Waves,
  Wind,
  Zap,
} from "lucide-react";

import Capsule from "../shared/Capsule";

type Item = {
  title: string;
  desc: string;
  value?: string;
  icon: React.ReactNode;
  iconClass: string;
};

type Section = {
  title: string;
  desc: string;
  panelClass: string;
  panelIcon: React.ReactNode;
  items: Item[];
};

const sections: Section[] = [
  {
    title: "Air Source Heat Pump",
    desc: "Industry-leading efficiency for hot water production from ambient air",
    panelClass: "bg-gradient-accent-primary",
    panelIcon: <Wind size={18} />,
    items: [
      {
        title: "MULTIBEN AHp",
        desc: "Standard high-efficiency air source heat pump",
        value: "60 degrees C",
        icon: <Thermometer size={16} />,
        iconClass: "bg-gradient-to-br from-orange-400 to-red-500",
      },
      {
        title: "MULTIBEN HT",
        desc: "High temperature output for demanding applications",
        value: "80 degree C",
        icon: <Activity size={16} />,
        iconClass: "bg-gradient-to-br from-rose-400 to-rose-600",
      },
      {
        title: "MULTIBEN VHT",
        desc: "Very high temperature range for industrial processes",
        value: "80 to 120 degree C",
        icon: <Zap size={16} />,
        iconClass: "bg-gradient-to-br from-rose-400 to-rose-600",
      },
    ],
  },
  {
    title: "Water Source Heat Pump",
    desc: "Utilizes water bodies as stable heat source for maximum efficiency",
    panelClass: "bg-gradient-accent-blue",
    panelIcon: <Droplets size={18} />,
    items: [
      {
        title: "MULTIBEN Aqua",
        desc: "Advanced water-source technology for groundwater, lake, or sea water applications",
        icon: <Waves size={16} />,
        iconClass: "bg-gradient-to-br from-sky-400 to-blue-600",
      },
    ],
  },
  {
    title: "Geothermal Heat Pump",
    desc: "Ground-coupled systems for year-round consistent performance",
    panelClass: "bg-gradient-to-b from-[#1e3a3a] to-[#0f2424]",
    panelIcon: <Box size={18} />,
    items: [
      {
        title: "MULTIBEN Geo",
        desc: "Advanced geothermal heat pump technology",
        value: "CORE SYSTEM",
        icon: <ShieldCheck size={16} />,
        iconClass: "bg-gradient-accent-primary",
      },
      {
        title: "Vertical Loop Systems",
        desc: "Deep borehole configuration for limited space",
        value: "INSTALLATION TYPE",
        icon: <TrendingDown size={16} />,
        iconClass: "bg-gradient-accent-primary",
      },
      {
        title: "Horizontal Loop Systems",
        desc: "Shallow trenches for larger available land areas",
        value: "INSTALLATION TYPE",
        icon: <Box size={16} />,
        iconClass: "bg-gradient-accent-primary",
      },
    ],
  },
];

export default function ProductRange() {
  return (
    <section className="bg-products-pool py-18">
      <div className="mx-auto max-w-275 px-4">
        <div className="mb-14 text-center">
          <Capsule text="PRODUCT CATALOG" />

          <h2 className="mt-5 text-[42px] leading-12 font-semibold text-(--color-text-black)">
            MULTIBEN Product Range
          </h2>

          <p className="mx-auto mt-4 max-w-140 text-[14px] leading-5.5 text-(--color-text-gray)">
            Complete heat pump solutions engineered for diverse temperature
            requirements and applications
          </p>
        </div>

        <div className="space-y-8">
          {sections.map((section, idx) => (
            <div
              key={idx}
              className="flex flex-col overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.04)] md:flex-row"
            >
              <div
                className={`flex flex-col justify-center px-8 py-10 text-white md:w-[34%] ${section.panelClass}`}
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-[10px] bg-white/15">
                  {section.panelIcon}
                </div>

                <h3 className="mb-3 text-[22px] leading-7 font-bold">
                  {section.title.split(" ").slice(0, 2).join(" ")}
                  <br />
                  {section.title.split(" ").slice(2).join(" ")}
                </h3>

                <p className="text-[13px] leading-5 opacity-90">
                  {section.desc}
                </p>
              </div>

              <div className="flex flex-col justify-center divide-y divide-[#F3F4F6] bg-white md:w-[66%]">
                {section.items.map((item, i) => (
                  <div
                    key={i}
                    className="m-4 flex items-center justify-between rounded-lg border border-slate-200 px-7 py-5"
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white shadow-sm ${item.iconClass}`}
                      >
                        {item.icon}
                      </div>

                      <div>
                        <p className="text-[16px] font-bold text-(--color-text-black)">
                          {item.title}
                        </p>
                        <p className="text-[12px] text-(--color-text-gray)">
                          {item.desc}
                        </p>

                        {idx === 1 && i === 0 && (
                          <div className="mt-2 flex items-center gap-1.5 text-[12px] text-(--color-text-gray)">
                            <span className="text-(--color-accent-blue)">
                              <CheckCircle />
                            </span>
                            Optimal for coastal and waterfront facilities
                          </div>
                        )}
                      </div>
                    </div>

                    {item.value && (
                      <span
                        className={`text-right text-[13px] font-semibold whitespace-nowrap text-(--color-primary) ${
                          item.value === "CORE SYSTEM" ||
                          item.value === "INSTALLATION TYPE"
                            ? "text-[11px] font-bold tracking-widest uppercase"
                            : ""
                        }`}
                      >
                        {item.value}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-8 rounded-[14px] bg-[#0d2626] px-10 py-7 text-white md:flex-row">
          <div className="text-center">
            <p className="text-[30px] leading-none font-bold text-(--color-primary)">
              7+
            </p>
            <p className="mt-2 text-[13px] text-gray-400">Product Models</p>
          </div>

          <div className="text-center">
            <p className="text-[30px] leading-none font-bold text-(--color-primary)">
              60-120°C
            </p>
            <p className="mt-2 text-[13px] text-gray-400">Temperature Range</p>
          </div>

          <div className="text-center">
            <p className="text-[30px] leading-none font-bold text-(--color-primary)">
              3
            </p>
            <p className="mt-2 text-[13px] text-gray-400">Heat Source Types</p>
          </div>
        </div>
      </div>
    </section>
  );
}
