import { Badge, BadgeCheck, Edit, Heart, ShieldCheck, Zap } from "lucide-react";

import Capsule from "../shared/Capsule";

const features = [
  {
    title: "Highly Reliable",
    description: "Built with robust materials for long-term usage.",
    iconBg: "bg-[#00a884]",
    icon: <ShieldCheck className="h-5 w-5 text-white" />,
  },
  {
    title: "Energy Efficient",
    description: "Lower power consumption with high thermal output.",
    iconBg: "bg-[#3b82f6]",
    icon: <Zap className="h-5 w-5 text-white" />,
  },
  {
    title: "Eco-Friendly",
    description: "Significant reduction in carbon footprint.",
    iconBg: "bg-[#00a884]",
    icon: <Heart className="h-5 w-5 text-white" />,
  },
  {
    title: "Smart Controls",
    description: "Integrated monitoring and automation features.",
    iconBg: "bg-[#8b5cf6]",
    icon: <BadgeCheck className="h-5 w-5 text-white" />,
  },
  {
    title: "Low Maintenance",
    description: "Engineered for long service intervals.",
    iconBg: "bg-[#f97316]",
    icon: <Edit className="h-5 w-5 text-white" />,
  },
];

export default function UniquenessSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <Capsule text="Our Advantage" />
          <h2 className="mt-3 text-4xl font-bold text-[#0d1b2a] md:text-5xl">
            What Makes Our Products Unique?
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div
                className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${feature.iconBg}`}
              >
                {feature.icon}
              </div>
              <h5 className="mb-2 font-bold text-[#0d1b2a]">{feature.title}</h5>
              <p className="text-sm leading-relaxed text-gray-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
