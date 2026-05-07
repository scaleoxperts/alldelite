import { Building2 } from "lucide-react";

import Capsule from "../shared/Capsule";

type Client = {
  name: string;
  location?: string;
};

type Category = {
  title: string;
  clients: Client[];
  cardBg: string;
  cardBorder: string;
  iconGradient: string;
  checkColor: string;
  rowBorder: string;
};

const CATEGORIES: Category[] = [
  {
    title: "Hospitality Industry",
    cardBg: "bg-[#f0fdf7]",
    cardBorder: "border-[#bbf7d0]",
    iconGradient: "from-[#22c55e] to-[#15803d]",
    checkColor: "text-[#16a34a]",
    rowBorder: "border-[#dcfce7]",
    clients: [
      { name: "Bhimas Group of Hotels", location: "Tirupati" },
      { name: "Hyatt Place", location: "Rameswaram (2015)" },
      { name: "Quality Inn", location: "Vijayawada" },
      { name: "Fortune Group", location: "Tirupati & Vijayawada" },
      { name: "Vivanta", location: "Vijayawada" },
      { name: "Lemon Tree Hotels", location: "Hyderabad" },
      { name: "Best Western Hotels & Resorts", location: "Tirupati" },
    ],
  },
  {
    title: "Other Industries",
    cardBg: "bg-[#eff8ff]",
    cardBorder: "border-[#bfdbfe]",
    iconGradient: "from-[#3b82f6] to-[#1d4ed8]",
    checkColor: "text-[#3b82f6]",
    rowBorder: "border-[#dbeafe]",
    clients: [
      { name: "BHEL – Bhopal" },
      { name: "Century Enka" },
      { name: "Ashok Leyland" },
      { name: "AGI Glasspac" },
    ],
  },
  {
    title: "Apartments",
    cardBg: "bg-[#f5f3ff]",
    cardBorder: "border-[#ddd6fe]",
    iconGradient: "from-[#8b5cf6] to-[#7c3aed]",
    checkColor: "text-[#7c3aed]",
    rowBorder: "border-[#ede9fe]",
    clients: [
      { name: "Pakala Residency", location: "Hyderabad" },
      { name: "Nandi Housing", location: "Bangalore" },
    ],
  },
];

function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={`h-4.5 w-4.5 shrink-0 ${className}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

export default function ClientsSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <Capsule text="Our Clients" />

          <h2 className="mt-2 text-5xl font-bold text-(--color-text-black) md:text-6xl">
            Trusted by Industry Leaders
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-[15px] text-(--color-text-gray)">
            Delivering sustainable heat pump solutions to prestigious clients
            across India
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.title}
              className={`flex flex-col rounded-2xl border p-5 ${cat.cardBg} ${cat.cardBorder}`}
            >
              <div className="mb-5 flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br ${cat.iconGradient}`}
                >
                  <Building2 className="h-5 w-5 text-white" strokeWidth={1.8} />
                </div>

                <h3 className="text-lg font-bold text-(--color-text-black)">
                  {cat.title}
                </h3>
              </div>

              <div className="flex flex-col gap-2.5">
                {cat.clients.map((client, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-3 rounded-xl border bg-white px-4 py-3 ${cat.rowBorder}`}
                  >
                    <CheckCircleIcon className={cat.checkColor} />

                    <div>
                      <p className="text-[14px] font-semibold text-(--color-text-black)">
                        {client.name}
                      </p>

                      {client.location && (
                        <p className="mt-0.5 text-[12px] text-(--color-text-gray)">
                          {client.location}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
