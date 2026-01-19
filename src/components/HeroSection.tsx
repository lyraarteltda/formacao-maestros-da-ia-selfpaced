import { Logo } from "@/components/Logo";
import { ParticleBackground } from "@/components/ParticleBackground";
import { ChevronDown } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

export const HeroSection = () => {
  const scrollToFirstSection = () => {
    const firstSection = document.querySelector('[data-section="problem-solution"]');
    firstSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="min-h-[75vh] flex flex-col relative overflow-hidden bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed"
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
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold mb-3 md:mb-6 leading-tight">
            <span className="gradient-text">
              Torne-se um Maestro da IA
            </span>{" "}
            e Faça a Inteligência Artificial Trabalhar por Você
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl mb-4 md:mb-8 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            O único ecossistema do Brasil que te entrega um plano de ação validado, automações prontas para aplicar e suporte diário de especialistas para você escalar seu negócio com IA.
          </h2>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="relative z-20 pb-4 md:pb-8 text-center">
        <div className="animate-bounce">
          <ChevronDown className="w-12 h-12 md:w-16 md:h-16 text-primary mx-auto opacity-80" strokeWidth={2.5} />
        </div>
      </div>
    </section>
  );
};