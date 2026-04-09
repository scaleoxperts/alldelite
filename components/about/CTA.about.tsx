import { ArrowRight, Mail, Phone, User } from "lucide-react";

import Capsule from "../shared/Capsule";

const contacts = [
  {
    name: "Mr. Ananth Singh",
    role: "Director-Operations",
    email: "ananthsingh@alldelite.com",
    phone: "9885207107",
    iconBg: "bg-[#00a884]",
  },
  {
    name: "Mr. G.S. Soundara Rajan",
    role: "Managing Director",
    email: "rajan@alldelite.com",
    phone: "9550216000",
    iconBg: "bg-[#3b82f6]",
  },
];

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#071212] py-24 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/4 h-100 w-150 rounded-full bg-[#004d3a] opacity-25 blur-[140px]" />
        <div className="absolute top-0 right-0 h-75 w-100 rounded-full bg-[#003366] opacity-15 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <Capsule text="Get In Touch" variant="dark" />
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            How Can You Contact Us?
          </h2>
        </div>

        <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2">
          {contacts.map((c) => (
            <div
              key={c.name}
              className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition hover:bg-white/10"
            >
              <div className="mb-5 flex items-center gap-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${c.iconBg}`}
                >
                  <User className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white">{c.name}</h4>
                  <p
                    className={`text-xs font-semibold tracking-widest uppercase ${
                      c.iconBg === "bg-[#00a884]"
                        ? "text-[#00a884]"
                        : "text-[#60a5fa]"
                    }`}
                  >
                    {c.role}
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 shrink-0" />
                  <span>{c.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0" />
                  <span>Mobile: {c.phone}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-xl bg-[#00a884] px-10 py-4 font-bold text-white shadow-lg shadow-[#00a884]/20 transition hover:bg-[#008f70]"
          >
            Send Us a Message
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
