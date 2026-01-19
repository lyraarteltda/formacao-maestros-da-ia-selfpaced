import { LeadCaptureSection } from "@/components/LeadCaptureSection";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSolutionSection } from "@/components/ProblemSolutionSection";
import { TwoPathsSection } from "@/components/TwoPathsSection";
import { TargetAudienceSection } from "@/components/TargetAudienceSection";
import { MethodologySection } from "@/components/MethodologySection";
import { VideoTeaserSection } from "@/components/VideoTeaserSection";
import { AboutUsSection } from "@/components/AboutUsSection";
import { ValueStackSection } from "@/components/ValueStackSection";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { FounderMemberSection } from "@/components/FounderMemberSection";
import { PricingSection } from "@/components/PricingSection";
import { BonusSection } from "@/components/BonusSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <LeadCaptureSection />
      <HeroSection />
      <ProblemSolutionSection />
      <TwoPathsSection />
      <TargetAudienceSection />
      <MethodologySection />
      <VideoTeaserSection />
      <AboutUsSection />
      <ValueStackSection />
      <GuaranteeSection />
      <FounderMemberSection />
      <PricingSection />
      <BonusSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
};

export default Index;