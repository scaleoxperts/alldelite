import {
  CTASection,
  HeroSection,
  HowItWorksSection,
  LocationSection,
  MissionSection,
  MultiBenHybridSection,
  ProductRangeSection,
  TechnologySection,
  UniquenessSection,
  UsageSection,
  WhoAreWeSection,
} from "@/components/about";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import TopBar from "@/components/layout/TopBar";

export const metadata = {
  title: "About Us - Alldelite | Comprehensive Heat Pump Solutions",
  description:
    "Learn about Alldelite's mission, technology, and commitment to providing innovative heat pump solutions for a sustainable future.",
};

export default function AboutPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <HeroSection />
        <WhoAreWeSection />
        <MissionSection />
        <TechnologySection />
        <HowItWorksSection />
        <MultiBenHybridSection />
        <UniquenessSection />
        <UsageSection />
        <ProductRangeSection />
        <LocationSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
