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
    size === "small" ? "text-xl" : size === "medium" ? "text-3xl" : "text-4xl";

  return (
    <span className={`${bauhaus.className} ${sizeClass}`}>
      <span className="text-blue-600">MULTI</span>
      <span className="text-red-600">BEN</span>
      <span className="align-super text-sm">®</span>
    </span>
  );
}
