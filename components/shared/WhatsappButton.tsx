import Image from "next/image";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/+919550216000/?text=Hello%20Alldelite%2C%20I%20would%20like%20to%20inquire%20about%20your%20products%20and%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 bottom-4 z-50 flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-colors duration-300 hover:bg-[#1fbb58] sm:right-6 sm:bottom-6"
      style={{
        width: "50px",
        height: "50px",
        minWidth: "50px",
        minHeight: "50px",
      }}
    >
      <Image
        alt="whatsapp icon"
        width={30}
        height={30}
        src={"/icon/whatapp.svg"}
      />
    </a>
  );
}
