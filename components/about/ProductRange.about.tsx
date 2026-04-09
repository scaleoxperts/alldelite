import { ArrowRight, Box, Globe, Zap } from "lucide-react";

import Capsule from "../shared/Capsule";
import MultibenLogo from "../shared/MultibenLogo";

type Size = "small" | "medium" | "large";

export default function ProductRangeSection() {
  return (
    <section className="bg-[#f5faf8] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <Capsule text="Product Range" />
          <h2 className="mt-3 text-4xl font-bold text-[#0d1b2a] md:text-5xl">
            What Products Do We Offer?
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
            <div className="flex items-center gap-3 p-6 pb-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#3b82f6]">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0d1b2a]">
                Air Source Heat Pumps
              </h3>
            </div>
            <div className="grid gap-3 p-6 sm:grid-cols-2 md:grid-cols-3">
              {[
                {
                  name: "AHp",
                  spec: "Output temperature",
                  value: "60°C",
                  color: "text-[#3b82f6]",
                },
                {
                  name: "HT",
                  spec: "High temperature",
                  value: "80°C",
                  color: "text-[#3b82f6]",
                },
                {
                  name: "VHT",
                  spec: "Very high temperature",
                  value: "up to 120°C",
                  color: "text-[#3b82f6]",
                },
              ].map((product) => (
                <div key={product.name} className="rounded-xl bg-[#f5faf8] p-4">
                  <div className="flex items-center gap-1 font-semibold text-[#0d1b2a]">
                    <MultibenLogo size="small" />
                    {product.name}
                  </div>
                  <div className="mt-1 text-xs text-gray-500">
                    {product.spec}{" "}
                    <strong className={product.color}>{product.value}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
            <div className="flex items-center gap-3 p-6 pb-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#06b6d4]">
                <Box className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0d1b2a]">
                Water Source Heat Pumps
              </h3>
            </div>
            <div className="p-6">
              <div className="inline-block rounded-xl bg-[#f5faf8] p-4">
                <div className="flex items-center gap-1 font-semibold text-[#0d1b2a]">
                  <MultibenLogo size="small" />
                  Aqua
                </div>
                <div className="mt-1 text-xs text-gray-500">
                  Efficient water-to-water heat transfer system
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
            <div className="flex items-center gap-3 p-6 pb-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00a884]">
                <Globe className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0d1b2a]">
                Ground Source Heat Pumps
              </h3>
            </div>
            <div className="p-6">
              <div className="mb-5 inline-block rounded-xl bg-[#f5faf8] p-4">
                <div className="flex items-center gap-1 font-semibold text-[#0d1b2a]">
                  <MultibenLogo size="small" />
                  Geo
                </div>
                <div className="mt-1 text-xs text-gray-500">
                  Geothermal energy extraction from the earth
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {[
                  {
                    label: "Geo System",
                    img: "/about/product-range-1.png",
                  },
                  {
                    label: "Vertical Loop System",
                    img: "/about/product-range-2.png",
                  },
                  {
                    label: "Horizontal Loop System",
                    img: "/about/product-range-3.png",
                  },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <img
                      src={item.img}
                      alt={item.label}
                      className="mb-2 w-full rounded-xl border border-gray-100 shadow-sm"
                    />
                    <p className="flex items-center justify-center gap-1 text-xs font-semibold tracking-wide text-gray-500 uppercase">
                      {item.label === "Geo System" ? (
                        <>
                          <MultibenLogo size="small" />
                          Geothermal System
                        </>
                      ) : (
                        item.label
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-xl bg-[#00a884] px-8 py-3 font-bold text-white shadow-md transition hover:bg-[#008f70]"
          >
            View Full Product Catalog
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
