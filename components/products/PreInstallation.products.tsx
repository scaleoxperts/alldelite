import { PRE_INSTALLATION } from "@/contents/products";

export default function PreInstallationSection() {
  return (
    <section className="bg-(--color-background-light) py-20">
      <div className="mx-auto max-w-7xl px-5">
        {/* Centered header */}
        <div className="mb-10 text-center">
          <span className="mb-4 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold tracking-wide text-blue-500 uppercase">
            {PRE_INSTALLATION.badge}
          </span>
          <h2 className="mb-3 text-3xl font-bold text-gray-900 md:text-4xl">
            {PRE_INSTALLATION.heading}
          </h2>
          <p className="mx-auto max-w-xl text-base text-(--color-text-gray)">
            {PRE_INSTALLATION.description}
          </p>
        </div>

        {/* Guidelines grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PRE_INSTALLATION.guidelines.map((guide) => (
            <div
              key={guide.title}
              className="rounded-lg border border-gray-200 bg-white p-7 text-center"
            >
              <div
                className={`${guide.iconBg} mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-white`}
              >
                <guide.Icon className="h-5 w-5" />
              </div>
              <h4 className="mb-2 text-base font-bold text-gray-900">
                {guide.title}
              </h4>
              <p className="text-[13px] leading-relaxed text-(--color-text-gray)">
                {guide.description}
              </p>
            </div>
          ))}
        </div>

        {/* Alert box */}
        <div className="mt-8 flex items-center gap-4 rounded-lg border-l-6 border-orange-400 bg-orange-50 p-5 text-orange-700">
          <PRE_INSTALLATION.alert.Icon className="bg-gradient-accent-orange h-8 w-8 shrink-0 rounded-lg p-2 text-white" />
          <p className="flex flex-col justify-between text-sm">
            <strong className="text-black">
              {PRE_INSTALLATION.alert.highlight}
            </strong>{" "}
            <span className="text-(--color-text-gray)">
              {PRE_INSTALLATION.alert.text}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
