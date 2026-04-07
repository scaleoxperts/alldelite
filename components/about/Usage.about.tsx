import Capsule from "../shared/Capsule";
import MultibenLogo from "../shared/MultibenLogo";

const applications = [
  {
    label: "Villas & Bungalows",
    description: "Independent homes with efficient hot water systems.",
    img: "/about/product-used-1.png",
    iconBg: "bg-[#00a884]",
    icon: (
      <svg
        className="h-4 w-4 text-white"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l1.293 1.293a1 1 0 001.414-1.414l-7-7z" />
      </svg>
    ),
  },
  {
    label: "Hotels & Hostels",
    description: "Star hotels with centralized hot water solutions.",
    img: "/about/product-used-2.png",
    iconBg: "bg-[#00a884]",
    icon: (
      <svg
        className="h-4 w-4 text-white"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
      </svg>
    ),
  },
  {
    label: "Hospitals",
    description: "Healthcare facilities requiring reliable hot water.",
    img: "/about/product-used-3.png",
    iconBg: "bg-[#3b82f6]",
    icon: (
      <svg
        className="h-4 w-4 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"
        />
      </svg>
    ),
  },
  {
    label: "Multi-Storied Apartments",
    description: "Residential buildings with cost-effective systems.",
    img: "/about/product-used-4.png",
    iconBg: "bg-[#00a884]",
    icon: (
      <svg
        className="h-4 w-4 text-white"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M4 4a2 2 0 012-2h4a2 2 0 012 2v2H4V4z" />
        <path d="M4 8h8v10H4V8z" />
        <path d="M14 4h2a2 2 0 012 2v12a2 2 0 01-2 2h-2V4z" />
      </svg>
    ),
  },
  {
    label: "Factories",
    description: "Industrial facilities with large-scale requirements.",
    img: "/about/product-used-5.png",
    iconBg: "bg-[#00a884]",
    icon: (
      <svg
        className="h-4 w-4 text-white"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
          clipRule="evenodd"
        />
      </svg>
    ),
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
