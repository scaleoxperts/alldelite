import {
  CTASection,
  HeroSection,
  ProvenResultsSection,
  WhyChooseUsSection,
} from "@/components/industries";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import TopBar from "@/components/layout/TopBar";

export const metadata = {
  title: "Industries - Alldelite | Tailored Solutions for Every Sector",
  description:
    "Specialized heat pump services and solutions for commercial, industrial, and construction sectors.",
};

export default function IndustriesPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <HeroSection />
        <ProvenResultsSection />
        <WhyChooseUsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
