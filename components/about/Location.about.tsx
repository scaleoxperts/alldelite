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
    icon: (
      <svg
        className="h-5 w-5 text-white"
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
  {
    label: "Corporate Office",
    detail: "Hyderabad",
    iconBg: "bg-[#3b82f6]",
    icon: (
      <svg
        className="h-5 w-5 text-white"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l1.293 1.293a1 1 0 001.414-1.414l-7-7z" />
      </svg>
    ),
  },
  {
    label: "Service Locations",
    detail: "Chennai & Hyderabad",
    iconBg: "bg-[#8b5cf6]",
    icon: (
      <svg
        className="h-5 w-5 text-white"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
          clipRule="evenodd"
        />
      </svg>
    ),
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
