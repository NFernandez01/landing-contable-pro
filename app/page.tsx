import HeroSection from "@/components/sections/HeroSection";
import TrustSection from "@/components/sections/TrustSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import AboutSection from "@/components/sections/AboutSection";
import TeamSection from "@/components/sections/TeamSection";
import ProcessSection from "@/components/sections/ProcessSection";
import EntitiesSection from "@/components/sections/EntitiesSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";
//import FAQSection from "@/components/sections/FAQSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <WhyUsSection />
      <AboutSection />
      <TeamSection />
      <ProcessSection />
      <EntitiesSection />
      {/* <FAQSection /> */}
      <ContactSection />
      <Footer />
    </main>
  );
}
