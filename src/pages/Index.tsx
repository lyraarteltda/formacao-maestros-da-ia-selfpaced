import { LeadCaptureSection } from "@/components/LeadCaptureSection";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSolutionSection } from "@/components/ProblemSolutionSection";
import { TwoPathsSection } from "@/components/TwoPathsSection";
import { TargetAudienceSection } from "@/components/TargetAudienceSection";
import { MethodologySection } from "@/components/MethodologySection";
import { VideoTeaserSection } from "@/components/VideoTeaserSection";
import { AboutUsSection } from "@/components/AboutUsSection";
import { SocialProofSection } from "@/components/SocialProofSection";
import { ValueStackSection } from "@/components/ValueStackSection";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { FounderMemberSection } from "@/components/FounderMemberSection";
import { PricingSection } from "@/components/PricingSection";
import { BonusSection } from "@/components/BonusSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";

const Index = () => {
  return (
    <main className="min-h-screen pb-16 md:pb-0">
      <LeadCaptureSection />
      <HeroSection />
      <ProblemSolutionSection />
      <TwoPathsSection />
      <TargetAudienceSection />
      <MethodologySection />
      <VideoTeaserSection />
      <AboutUsSection />
      <SocialProofSection />
      <ValueStackSection />
      <GuaranteeSection />
      <FounderMemberSection />
      <PricingSection />
      <BonusSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
      
      {/* Floating/Sticky CTAs */}
      <FloatingCTA />
      <StickyMobileCTA />
    </main>
  );
};

export default Index;