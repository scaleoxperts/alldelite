import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import TopBar from "@/components/layout/TopBar";
import {
  CommercialSection,
  CTASection,
  GroundSourceSection,
  HeroSection,
  HowItWorksSection,
  PreInstallationSection,
  SwimmingPoolSection,
} from "@/components/products";

export const metadata = {
  title: "Products - Alldelite | Heat Pump Solutions",
  description:
    "Explore Alldelite's comprehensive range of commercial, swimming pool, and ground source heat pump solutions for every application.",
};

export default function ProductsPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <HeroSection />
        <CommercialSection />
        <SwimmingPoolSection />
        <GroundSourceSection />
        <PreInstallationSection />
        <HowItWorksSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
