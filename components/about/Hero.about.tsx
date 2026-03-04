import { ABOUT_HERO } from "@/contents/about";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-linear-to-l from-green-950 to-(--color-background-dark) text-white lg:min-h-[85vh] lg:pt-20">
      <div className="relative z-10 mx-auto px-6 text-center">
        <span className="mb-6 inline-block rounded-full bg-(--color-primary)/20 px-3 py-1 text-xs font-semibold tracking-widest text-(--color-primary) uppercase">
          {ABOUT_HERO.badge}
        </span>

        <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
          {ABOUT_HERO.heading}
        </h1>

        <p className="mx-auto max-w-3xl text-xl leading-relaxed font-light text-gray-300 md:text-2xl">
          {ABOUT_HERO.description}
        </p>
      </div>
    </section>
  );
}
