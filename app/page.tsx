import Navbar from "@/components/layout/Navbar";
import TopBar from "@/components/layout/TopBar";
import HeroSection from "@/components/sections/HeroSection";
import IndustrySolutionsSection from "@/components/sections/IndustrySolutionsSection";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <HeroSection />

        <IndustrySolutionsSection />
      </main>
    </>
  );
}
