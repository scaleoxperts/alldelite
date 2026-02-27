import type { Metadata } from "next";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import TopBar from "@/components/layout/TopBar";
import {
  CostReductionSection,
  CTASection,
  EnergyEfficiencySection,
  HeroSection,
  MaintenanceSection,
  ReliabilitySection,
  SustainabilitySection,
} from "@/components/solutions";

export const metadata: Metadata = {
  title: "Solutions - Alldelite | Comprehensive Heat Pump Solutions",
  description:
    "End-to-end heat pump solutions designed to maximize efficiency, reduce costs, and support your sustainability goals.",
};

export default function SolutionsPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <HeroSection />
        <EnergyEfficiencySection />
        <CostReductionSection />
        <ReliabilitySection />
        <SustainabilitySection />
        <MaintenanceSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
