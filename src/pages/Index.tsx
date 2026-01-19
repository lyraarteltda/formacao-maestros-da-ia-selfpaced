import { LeadCaptureSection } from "@/components/LeadCaptureSection";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSolutionSection } from "@/components/ProblemSolutionSection";
import { TargetAudienceSection } from "@/components/TargetAudienceSection";
import { MethodologySection } from "@/components/MethodologySection";
import { VideoTeaserSection } from "@/components/VideoTeaserSection";
import { ValueStackSection } from "@/components/ValueStackSection";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { PricingSection } from "@/components/PricingSection";
import { BonusSection } from "@/components/BonusSection";
import { FAQSection } from "@/components/FAQSection";
import { AboutUsSection } from "@/components/AboutUsSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <LeadCaptureSection />
      <HeroSection />
      <ProblemSolutionSection />
      <TargetAudienceSection />
      <MethodologySection />
      <VideoTeaserSection />
      <ValueStackSection />
      <GuaranteeSection />
      <PricingSection />
      <BonusSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
};

export default Index;