import { Building, CircleDot, Waves } from "lucide-react";

import { PRODUCT_RANGE } from "@/contents/about";

import Capsule from "../shared/Capsule";

const ICON_MAP = {
  building: Building,
  waves: Waves,
  "circle-dot": CircleDot,
} as const;

export default function ProductRangeSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <Capsule text={PRODUCT_RANGE.badge} />
          <h2 className="mt-2 text-4xl font-bold text-(--color-text-black)">
            {PRODUCT_RANGE.heading}
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {PRODUCT_RANGE.products.map((product) => {
            const Icon =
              ICON_MAP[product.iconKey as keyof typeof ICON_MAP] ?? Building;
            return (
              <div
                key={product.title}
                className={`group rounded-3xl border border-gray-100 p-10 text-center transition-all hover:shadow-xl ${product.hoverColor}`}
              >
                <div
                  className={`mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl transition-colors ${product.iconBg} ${product.iconColor} ${product.hoverIconBg} group-hover:text-white`}
                >
                  <Icon className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-bold text-(--color-text-gray)">
                  {product.title}
                </h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
