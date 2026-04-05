import Capsule from "../shared/Capsule";

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
                <svg
                  className="h-5 w-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0d1b2a]">
                Air Source Heat Pumps
              </h3>
            </div>
            <div className="grid gap-3 p-6 sm:grid-cols-2 md:grid-cols-3">
              {[
                {
                  name: "MULTIBEN® AHp",
                  spec: "Output temperature",
                  value: "60°C",
                  color: "text-[#3b82f6]",
                },
                {
                  name: "MULTIBEN® HT",
                  spec: "High temperature",
                  value: "80°C",
                  color: "text-[#3b82f6]",
                },
                {
                  name: "MULTIBEN® VHT",
                  spec: "Very high temperature",
                  value: "up to 120°C",
                  color: "text-[#3b82f6]",
                },
              ].map((product) => (
                <div key={product.name} className="rounded-xl bg-[#f5faf8] p-4">
                  <div className="font-semibold text-[#0d1b2a]">
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
                <svg
                  className="h-5 w-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0d1b2a]">
                Water Source Heat Pumps
              </h3>
            </div>
            <div className="p-6">
              <div className="inline-block rounded-xl bg-[#f5faf8] p-4">
                <div className="font-semibold text-[#0d1b2a]">
                  MULTIBEN® Aqua
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
                <svg
                  className="h-5 w-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0d1b2a]">
                Ground Source Heat Pumps
              </h3>
            </div>
            <div className="p-6">
              <div className="mb-5 inline-block rounded-xl bg-[#f5faf8] p-4">
                <div className="font-semibold text-[#0d1b2a]">
                  MULTIBEN® Geo
                </div>
                <div className="mt-1 text-xs text-gray-500">
                  Geothermal energy extraction from the earth
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {[
                  {
                    label: "MULTIBEN® Geo System",
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
                    <p className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
                      {item.label}
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
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
