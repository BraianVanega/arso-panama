import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { AboutSection } from "@/components/sections/AboutSection";
import { ComplianceSection } from "@/components/sections/ComplianceSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Hero } from "@/components/sections/Hero";
import { MethodologySection } from "@/components/sections/MethodologySection";
import { NonIntermediationBanner } from "@/components/sections/NonIntermediationBanner";
import { RiskArchitectureSection } from "@/components/sections/RiskArchitectureSection";
import { ServicesSection } from "@/components/sections/ServicesSection";

export default function Home() {
  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-60 focus:rounded-sm focus:bg-primary focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-on-primary"
      >
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <Hero />
        <AboutSection />
        <ServicesSection />
        <MethodologySection />
        <RiskArchitectureSection />
        <NonIntermediationBanner />
        <ComplianceSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
