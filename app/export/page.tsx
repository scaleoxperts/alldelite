import {
  GlobalGoalsSection,
  HeroSection,
  IntroducingSection,
  PartnershipCTASection,
  RoadmapSection,
  SingaporeSection,
  TrustedBySection,
} from "@/components/export";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import TopBar from "@/components/layout/TopBar";

export default function ExportPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <HeroSection />
        <TrustedBySection />
        <IntroducingSection />
        <SingaporeSection />
        <GlobalGoalsSection />
        <RoadmapSection />
        <PartnershipCTASection />
      </main>
      <Footer />
    </>
  );
}
