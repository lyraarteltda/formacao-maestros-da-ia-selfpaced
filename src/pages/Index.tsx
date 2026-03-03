import { HeroSection } from "@/components/HeroSection";
import { ProblemSolutionSection } from "@/components/ProblemSolutionSection";
import { AboutUsSection } from "@/components/AboutUsSection";
import { TargetAudienceSection } from "@/components/TargetAudienceSection";
import { EpiphanyBridgeSection } from "@/components/EpiphanyBridgeSection";
import { TwoRealitiesSection } from "@/components/TwoRealitiesSection";
import { MethodologySection } from "@/components/MethodologySection";
import { VideoTeaserSection } from "@/components/VideoTeaserSection";
import { ValueStackSection } from "@/components/ValueStackSection";
import { PricingSection } from "@/components/PricingSection";
import { TripleGuaranteeSection } from "@/components/TripleGuaranteeSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      {/* BLOCO EMOCIONAL (TOPO) */}
      <HeroSection />
      <ProblemSolutionSection />
      <AboutUsSection />
      <TargetAudienceSection />
      <EpiphanyBridgeSection />
      <TwoRealitiesSection />

      {/* BLOCO LÓGICO (MEIO) */}
      <MethodologySection />
      <VideoTeaserSection />
      <ValueStackSection />
      <PricingSection />
      <TripleGuaranteeSection />

      {/* BLOCO MEDO/URGÊNCIA (FINAL) */}
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
};

export default Index;