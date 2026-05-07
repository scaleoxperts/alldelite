import { BadgeCheck, ShieldCheck, Star } from "lucide-react";

import Capsule from "../shared/Capsule";

const MEMBERSHIPS = [
  {
    name: "ISHRAE",
    fullName:
      "Indian Society of Heating, Refrigerating and Air Conditioning Engineers",
    type: "Member",
    logo: "/shared/ishrae.png",
    accent: "#00a884",
    bg: "bg-[#f0fdf7]",
    border: "border-[#bbf7d0]",
    tagBg: "bg-[#dcfce7]",
    tagText: "text-[#15803d]",
  },
  {
    name: "ASHRAE",
    fullName:
      "American Society of Heating, Refrigerating and Air-Conditioning Engineers",
    type: "Member",
    logo: "/shared/ashare.png",
    accent: "#3b82f6",
    bg: "bg-[#eff8ff]",
    border: "border-[#bfdbfe]",
    tagBg: "bg-[#dbeafe]",
    tagText: "text-[#1d4ed8]",
  },
  {
    name: "IGBC",
    fullName: "Indian Green Building Council",
    type: "Member",
    logo: "/shared/igbc.png",
    accent: "#00a884",
    bg: "bg-[#f0fdf7]",
    border: "border-[#bbf7d0]",
    tagBg: "bg-[#dcfce7]",
    tagText: "text-[#15803d]",
  },
  {
    name: "FTCCI",
    fullName:
      "Federation of Telangana & Andhra Pradesh Chambers of Commerce and Industry",
    type: "Member",
    logo: "/shared/ftcci.png",
    accent: "#8b5cf6",
    bg: "bg-[#f5f3ff]",
    border: "border-[#ddd6fe]",
    tagBg: "bg-[#ede9fe]",
    tagText: "text-[#6d28d9]",
  },
];

export default function MembershipsSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 text-center md:mb-14">
          <Capsule text="Memberships & Certifications" />
          <h2 className="mt-2 text-3xl font-bold text-(--color-text-black) sm:text-4xl md:text-5xl">
            Our Industry Credentials
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[14px] leading-relaxed text-(--color-text-gray) sm:text-[15px]">
            Recognised by leading national and international bodies for our
            commitment to engineering excellence and sustainable building
            practices
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {MEMBERSHIPS.map((m) => (
            <div
              key={m.name}
              className={`flex flex-col rounded-2xl border p-5 ${m.bg} ${m.border}`}
            >
              <div className="mb-5 flex h-24 w-full items-center justify-center overflow-hidden rounded-xl border border-white bg-white p-3 shadow-sm sm:h-28">
                <img
                  src={m.logo}
                  alt={`${m.name} logo`}
                  className="h-full w-full object-contain"
                />
              </div>

              <h3 className="mb-1 text-[15px] font-bold text-(--color-text-black)">
                {m.name}
              </h3>
              <p className="mb-5 flex-1 text-[12px] leading-relaxed text-(--color-text-gray)">
                {m.fullName}
              </p>

              <div className="flex items-center gap-1.5">
                <BadgeCheck
                  size={17}
                  strokeWidth={2}
                  style={{ color: m.accent }}
                  className="shrink-0"
                />
                <span
                  className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold tracking-widest uppercase ${m.tagBg} ${m.tagText}`}
                >
                  {m.type}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 overflow-hidden rounded-2xl bg-[#0d2626]">
          <div className="flex flex-col items-center gap-6 px-6 py-7 sm:gap-8 sm:px-8 sm:py-8 md:flex-row md:px-10">
            <div className="flex h-20 w-40 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white/10 p-3 sm:h-24 sm:w-44">
              <img
                src="/shared/gem-certification.png"
                alt="GEM Certification logo"
                className="h-full w-full object-contain brightness-0 invert"
              />
            </div>

            <div className="hidden h-16 w-px shrink-0 bg-white/10 md:block" />

            <div className="flex-1 text-center md:text-left">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#00a884]/20 px-3 py-1 text-[11px] font-bold tracking-widest text-[#2ee8b8] uppercase">
                <Star size={12} fill="currentColor" strokeWidth={0} />
                Expert Certified
              </span>

              <h3 className="mt-2.5 text-lg font-bold text-white sm:text-xl">
                GEM Certified Expert in Our Team
              </h3>

              <p className="mt-1.5 max-w-xl text-[13px] leading-relaxed text-gray-400 sm:text-[14px]">
                We have a GEM (Green Evaluation &amp; Management) certified
                expert on our team, enabling us to evaluate and deliver green,
                energy-efficient building solutions to the highest standards.
              </p>
            </div>

            <div className="flex shrink-0 flex-col items-center gap-1.5 rounded-2xl border border-[#00a884]/20 bg-[#00a884]/10 px-7 py-5">
              <ShieldCheck
                size={34}
                strokeWidth={1.6}
                className="text-[#00a884]"
              />
              <span className="text-[11px] font-bold tracking-widest text-[#00a884] uppercase">
                Certified
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
