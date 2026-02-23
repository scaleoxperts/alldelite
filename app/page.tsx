import Navbar from "@/components/layout/Navbar";
import TopBar from "@/components/layout/TopBar";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import ContactSection from "@/components/sections/ContactSection";
import FeaturedProductSection from "@/components/sections/FeaturedProductSection";
import HeroSection from "@/components/sections/HeroSection";
import ImpactSection from "@/components/sections/ImpactSection";
import IndustrySolutionsSection from "@/components/sections/IndustrySolutionsSection";
import ProductsSection from "@/components/sections/ProductsSection";
import WhyUsSection from "@/components/sections/WhyUsSection";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <HeroSection />
        <ImpactSection />
        <IndustrySolutionsSection />
        <FeaturedProductSection />
        <ProductsSection />
        <CaseStudiesSection />
        <WhyUsSection />
        <ContactSection />
      </main>
    </>
  );
}
