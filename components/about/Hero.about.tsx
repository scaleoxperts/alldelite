import { HomeIcon } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-105 items-center justify-center overflow-hidden bg-[#071212] text-white lg:min-h-130">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/2 h-85 w-175 -translate-x-1/2 rounded-full bg-[#004d3a] opacity-40 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto px-6 text-center">
        <div className="mb-6 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#00a884]/40 bg-[#00a884]/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-[#00a884] uppercase">
            <HomeIcon className="h-4 w-4" />
            About Us
          </span>
        </div>

        <h1 className="mb-5 text-5xl font-bold tracking-tight md:text-6xl">
          SK <span className="text-[#00a884]">Alldelite</span>
        </h1>

        <p className="mx-auto max-w-2xl text-lg leading-relaxed font-light text-gray-300 md:text-xl">
          Pioneering high-efficiency, low-carbon heat pump technology since 2012
        </p>
      </div>
    </section>
  );
}
