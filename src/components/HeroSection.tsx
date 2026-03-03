import { useState } from "react";
import { Logo } from "@/components/Logo";
import { ParticleBackground } from "@/components/ParticleBackground";
import { ChevronDown, Users, Shield, Zap, Clock } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import { AnimatedLogos } from "@/components/ui/animated-logos";
import { Button } from "@/components/ui/button";
import { CTAPopup } from "@/components/CTAPopup";

export const HeroSection = () => {
  const [popupOpen, setPopupOpen] = useState(false);

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
          {/* Badge */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 backdrop-blur-sm">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">+500 alunos | Método validado</span>
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 leading-tight">
            <span className="gradient-text">
              Para Empreendedores Sobrecarregados: O Framework Maestro Que Transformou um Simples Curso de Violão em R$ 2,5 Milhões
            </span>{" "}
            — Com Funcionários Digitais Que Trabalham Enquanto Você Dorme
          </h1>
          
          <p className="text-base md:text-lg lg:text-xl text-primary-foreground/80 mb-6 md:mb-8 font-medium leading-relaxed">
            Não importa se você vende e-books, consultoria ou produtos físicos. Veja como plugar esta mesma Equipe de Elite no seu negócio hoje. Você não está comprando um curso. Está instalando um exército de funcionários digitais — agentes autônomos que fazem sua prospecção, atendimento, vendas, conteúdo e suporte 24 horas por dia, sem nunca pedir férias, aumento ou reclamar. O mesmo sistema documentado que dois empreendedores comuns usaram para faturar R$ 2,5 milhões em 15 meses, trabalhando menos de 30 minutos por dia. Pronto para você copiar e ativar no seu negócio.
          </p>

          {/* CTA Button */}
          <div className="mb-6">
            <Button 
              variant="cta" 
              size="xl" 
              className="w-full md:w-auto text-sm md:text-lg px-4 md:px-10"
              onClick={() => setPopupOpen(true)}
            >
              QUERO INSTALAR MEU EXÉRCITO DE FUNCIONÁRIOS DIGITAIS
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-primary-foreground/70">
            <div className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-primary" />
              <span>Garantia de Execução de 90 dias</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-primary" />
              <span>Agentes prontos para ativar</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-primary" />
              <span>Acesso imediato</span>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Logo Carousel */}
      <div className="relative z-20 pb-4">
        <AnimatedLogos />
      </div>

      {/* Scroll Indicator */}
      <div className="relative z-20 pb-4 md:pb-8 text-center">
        <div className="animate-bounce cursor-pointer" onClick={scrollToFirstSection}>
          <ChevronDown className="w-12 h-12 md:w-16 md:h-16 text-primary mx-auto opacity-80" strokeWidth={2.5} />
        </div>
      </div>

      <CTAPopup open={popupOpen} onOpenChange={setPopupOpen} />
    </section>
  );
};
