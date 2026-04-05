import Capsule from "../shared/Capsule";

const certs = [
  {
    title: "IGBC Membership",
    subtitle: "Indian Green Building Council",
    iconBg: "bg-[#00a884]",
    borderColor: "border-[#00a884]",
    img: "/about/igbc-membership-certificate.jpg",
    stats: [
      {
        label: "Membership No",
        value: "IGBCCS250010",
        color: "text-[#00a884]",
      },
      { label: "Status", value: "Annual Member", color: "text-[#00a884]" },
      { label: "Valid Until", value: "Dec 2026", color: "text-[#00a884]" },
    ],
  },
  {
    title: "ASHRAE Membership",
    subtitle: "American Society of HVAC Engineers",
    iconBg: "bg-[#3b82f6]",
    borderColor: "border-[#3b82f6]",
    img: "/about/ashrae-certificate.jpg",
    stats: [
      { label: "Member No", value: "204333", color: "text-[#3b82f6]" },
      { label: "Grade", value: "Associate", color: "text-[#3b82f6]" },
      { label: "Since", value: "Feb 2026", color: "text-[#3b82f6]" },
    ],
  },
];

export default function CertificateSection() {
  return (
    <section className="bg-[#f5faf8] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <Capsule text="Recognition" />
          <h2 className="mt-3 text-4xl font-bold text-[#0d1b2a] md:text-5xl">
            Certifications &amp; Memberships
          </h2>
          <p className="mt-3 text-[#425962]">
            Committed to sustainability and green building practices
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {certs.map((cert) => (
            <div
              key={cert.title}
              className={`rounded-3xl border border-t-4 ${cert.borderColor} border-gray-100 bg-white p-7 shadow-md`}
            >
              <div className="mb-5 flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl ${cert.iconBg}`}
                >
                  <svg
                    className="h-5 w-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-[#0d1b2a]">{cert.title}</h4>
                  <p className="text-xs text-gray-400">{cert.subtitle}</p>
                </div>
              </div>

              <img
                src={cert.img}
                alt={cert.title}
                className="mb-5 w-full rounded-xl border border-gray-100"
              />

              <div className="grid grid-cols-3 gap-3 text-center">
                {cert.stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-[10px] tracking-wider text-gray-400 uppercase">
                      {stat.label}
                    </div>
                    <div className={`mt-1 text-xs font-bold ${stat.color}`}>
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-gray-100 bg-white p-7 text-center text-sm leading-relaxed text-gray-600 shadow-sm">
          As members of the{" "}
          <strong className="text-[#00a884]">
            Indian Green Building Council (IGBC)
          </strong>{" "}
          and <strong className="text-[#00a884]">ASHRAE</strong>, SK Alldelite
          demonstrates our commitment to sustainable building practices,
          environmental stewardship, and technical excellence. These memberships
          reinforce our dedication to providing eco-friendly heat pump solutions
          that contribute to green building initiatives across India.
        </div>
      </div>
    </section>
  );
}
