import Navbar from "@/components/layout/Navbar";
import TopBar from "@/components/layout/TopBar";
import FeaturedProductSection from "@/components/sections/FeaturedProductSection";
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
        <FeaturedProductSection />
      </main>
    </>
  );
}
