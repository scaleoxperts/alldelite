export default function Capsule({ text }: { text: string }) {
  return (
    <>
      <span className="mb-5 inline-block rounded-full border border-green-400 bg-green-100/50 px-4 py-2 text-[13px] font-semibold text-[#00b67a] sm:text-[14px]">
        {text}
      </span>
    </>
  );
}
