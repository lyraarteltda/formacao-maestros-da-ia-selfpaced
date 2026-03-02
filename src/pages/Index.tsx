import { HeroSection } from "@/components/HeroSection";
import { ProblemSolutionSection } from "@/components/ProblemSolutionSection";
import { AboutUsSection } from "@/components/AboutUsSection";
import { TheOneThingSection } from "@/components/TheOneThingSection";
import { VideoTeaserSection } from "@/components/VideoTeaserSection";
import { TargetAudienceSection } from "@/components/TargetAudienceSection";
import { MethodologySection } from "@/components/MethodologySection";
import { TwoPathsSection } from "@/components/TwoPathsSection";
import { ValueStackSection } from "@/components/ValueStackSection";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";

const Index = () => {
  return (
    <main className="min-h-screen pb-20 md:pb-0">
      <HeroSection />
      <ProblemSolutionSection />
      <AboutUsSection />
      <TheOneThingSection />
      <VideoTeaserSection />
      <TargetAudienceSection />
      <MethodologySection />
      <TwoPathsSection />
      <ValueStackSection />
      <GuaranteeSection />
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
