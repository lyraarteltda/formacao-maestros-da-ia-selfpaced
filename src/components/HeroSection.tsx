import { useState } from "react";
import { Logo } from "@/components/Logo";
import { ParticleBackground } from "@/components/ParticleBackground";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTAPopup } from "@/components/CTAPopup";
import heroBackground from "@/assets/hero-background.jpg";

export const HeroSection = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  const scrollToFirstSection = () => {
    const firstSection = document.querySelector('[data-section="problem-solution"]');
    firstSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="min-h-[85vh] flex flex-col relative overflow-hidden bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed"
      style={{
        backgroundImage: `url(${heroBackground})`
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero z-10"></div>
      
      {/* Enhanced mobile green effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 z-10 md:hidden"></div>
      
      {/* Animated Particle Background */}
      <div className="absolute inset-0 z-15">
        <ParticleBackground />
      </div>
      
      {/* Navigation */}
      <nav className="relative z-20 section-padding pt-8">
        <div className="container mx-auto">
          <Logo size="sm" />
        </div>
      </nav>

      {/* Hero Content */}
      <div className="flex-1 flex items-center justify-center relative z-20 section-padding pt-4 md:pt-16 lg:pt-20">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-8 leading-[1.1] tracking-tight">
            <span className="text-foreground">
              Domine a IA e a Automação para Escalar Seu Negócio em{" "}
            </span>
            <span className="gradient-text">10 Semanas</span>
          </h1>
          
          <h2 className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 text-muted-foreground max-w-4xl mx-auto leading-relaxed font-medium">
            O Único Ecossistema no Brasil com Planos de Ação Validados e Automações Prontas para Copiar e Colar — 
            <span className="text-primary font-semibold"> Aprenda o Sistema que Gerou R$2,5 Milhões em 15 Meses</span>
          </h2>

          {/* Hero CTA */}
          <div className="flex flex-col items-center gap-3">
            <Button
              onClick={() => setPopupOpen(true)}
              className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-base md:text-lg px-8 md:px-12 py-5 md:py-6 h-auto rounded-xl shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105"
            >
              QUERO AUTOMATIZAR MEU NEGÓCIO EM 10 SEMANAS
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <p className="text-sm text-muted-foreground">
              Acesso imediato + Garantia de 7 dias
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="relative z-20 pb-4 md:pb-8 text-center">
        <div className="animate-bounce">
          <ChevronDown className="w-12 h-12 md:w-16 md:h-16 text-primary mx-auto opacity-80" strokeWidth={2.5} />
        </div>
      </div>

      <CTAPopup open={popupOpen} onOpenChange={setPopupOpen} />
    </section>
  );
};
