export default function Capsule({
  text,
  variant = "light",
}: {
  text: string;
  variant?: "light" | "dark";
}) {
  if (variant === "dark") {
    return (
      <span className="mb-5 inline-block rounded-full border border-[#00a884]/40 bg-[#00a884]/15 px-4 py-2 text-[13px] font-semibold text-[#2ee8b8] sm:text-[14px]">
        {text}
      </span>
    );
  }

  return (
    <span className="mb-5 inline-block rounded-full border border-green-400 bg-green-100/50 px-4 py-2 text-[13px] font-semibold text-[#00b67a] sm:text-[14px]">
      {text}
    </span>
  );
}
