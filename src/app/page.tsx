import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { AboutSection } from "@/components/sections/AboutSection";
import { ComplianceSection } from "@/components/sections/ComplianceSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Hero } from "@/components/sections/Hero";
import { GrowthAreasSection } from "@/components/sections/GrowthAreasSection";
import { MethodologySection } from "@/components/sections/MethodologySection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TransparencyBanner } from "@/components/sections/TransparencyBanner";

export default function Home() {
  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-60 focus:rounded-sm focus:bg-primary focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <Hero />
        <AboutSection />
        <ServicesSection />
        <MethodologySection />
        <GrowthAreasSection />
        <TransparencyBanner />
        <ComplianceSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
