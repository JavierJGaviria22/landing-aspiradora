import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { BenefitsSection } from "./components/BenefitsSection";
import { UseCasesSection } from "./components/UseCasesSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { WhyChooseSection } from "./components/WhyChooseSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { OfferSection } from "./components/OfferSection";
import { FAQSection } from "./components/FAQSection";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", margin: 0, padding: 0 }}>
      <Navbar />
      <main>
        <HeroSection />
        <div id="beneficios">
          <BenefitsSection />
        </div>
        <div id="usos">
          <UseCasesSection />
        </div>
        {/* <div id="características">
          <FeaturesSection />
        </div> */}
        {/* <WhyChooseSection /> */}
        {/* <div id="testimonios">
          <TestimonialsSection />
        </div> */}
        <OfferSection />
        <FAQSection />
        {/* <FinalCTA /> */}
      </main>
      <Footer />
    </div>
  );
}
