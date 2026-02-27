import { SOLUTIONS_HERO } from "@/contents/solutions";

export default function HeroSection() {
  return (
    <header className="relative flex items-center justify-center bg-linear-to-l from-green-950 to-(--color-background-dark) px-4 py-32 text-center text-white md:py-44">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-emerald-400 uppercase">
          {SOLUTIONS_HERO.badge}
        </div>

        <h1 className="mb-6 text-4xl leading-tight font-bold md:text-6xl">
          {SOLUTIONS_HERO.heading.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              {i === 0 && <br />}
            </span>
          ))}
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg text-emerald-50/80 md:text-xl">
          {SOLUTIONS_HERO.description}
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="w-full rounded-lg bg-(--color-primary) px-8 py-3.5 font-semibold text-white transition hover:bg-(--color-primary-dark) sm:w-auto"
          >
            {SOLUTIONS_HERO.primaryCta}
          </a>
          <a
            href="#products"
            className="w-full rounded-lg border border-white/20 bg-white/10 px-8 py-3.5 font-semibold text-white backdrop-blur-md transition hover:bg-white/20 sm:w-auto"
          >
            {SOLUTIONS_HERO.secondaryCta}
          </a>
        </div>
      </div>
    </header>
  );
}
