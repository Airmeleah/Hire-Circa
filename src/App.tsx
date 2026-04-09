import { Ticker, Navbar } from "@/src/components/Navbar";
import { Hero } from "@/src/components/Hero";
import { EmotionalSection } from "@/src/components/EmotionalSection";
import { TransitionSection, FeaturesGrid } from "@/src/components/Features";
import { PositioningSection } from "@/src/components/Positioning";
import { TransformationSection } from "@/src/components/Transformation";
import { ProofSection } from "@/src/components/Proof";
import { PricingSection } from "@/src/components/Pricing";
import { FinalCTA, Footer } from "@/src/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-violet-200 selection:text-violet-900">
      <Ticker />
      <Navbar />
      <main>
        <Hero />
        <EmotionalSection />
        <TransitionSection />
        <FeaturesGrid />
        <PositioningSection />
        <TransformationSection />
        <ProofSection />
        <PricingSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
