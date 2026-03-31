import {
  GlobalGoalsSection,
  HeroSection,
  IntroducingSection,
  PartnershipCTASection,
  RoadmapSection,
  SingaporeSection,
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
