import localFont from "next/font/local";

const bauhaus = localFont({
  src: "./fonts/BauhausStd-Heavy.woff",
  weight: "700",
  style: "normal",
  display: "swap",
});

type Size = "small" | "medium" | "large";

export default function MultibenLogo({ size = "medium" }: { size?: Size }) {
  const sizeClass =
    size === "small"
      ? "text-lg sm:text-xl md:text-2xl"
      : size === "medium"
        ? "text-2xl sm:text-3xl md:text-4xl"
        : "text-3xl sm:text-4xl md:text-5xl";

  return (
    <span
      className={`${bauhaus.className} ${sizeClass} inline-flex items-start`}
    >
      <span className="text-blue-600">MULTI</span>
      <span className="text-red-600">BEN</span>
      <span className="ml-0.5 align-super text-[0.6em] sm:text-[0.7em]">®</span>
    </span>
  );
}
