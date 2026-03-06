import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import TopBar from "@/components/layout/TopBar";
import {
  CaseStudiesSection,
  ContactSection,
  FeaturedProductSection,
  HeroSection,
  ImpactSection,
  IndustrySolutionsSection,
  ProductsSection,
  WhyUsSection,
} from "@/components/sections";

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
        <Footer />
      </main>
    </>
  );
}
