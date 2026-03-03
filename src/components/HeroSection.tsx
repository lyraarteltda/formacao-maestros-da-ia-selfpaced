import { useState } from "react";
import { Logo } from "@/components/Logo";
import { ParticleBackground } from "@/components/ParticleBackground";
import { ChevronDown, ArrowRight, Check } from "lucide-react";
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
      className="min-h-[70vh] sm:min-h-[80vh] md:min-h-screen flex flex-col relative overflow-hidden bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed"
      style={{
        backgroundImage: `url(${heroBackground})`
      }}
    >
      {/* Gradient Overlay — deeper, more cinematic */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,20%,4%)/0.92] via-[hsl(220,20%,4%)/0.85] to-[hsl(220,20%,4%)/0.95] z-10" />

      {/* Animated Particle Background */}
      <div className="absolute inset-0 z-[15]">
        <ParticleBackground />
      </div>

      {/* Navigation */}
      <nav className="relative z-20 px-4 sm:px-6 md:px-12 lg:px-24 pt-6 sm:pt-8">
        <div className="container mx-auto">
          <Logo size="sm" />
        </div>
      </nav>

      {/* Hero Content */}
      <div className="flex-1 flex items-center justify-center relative z-20 px-4 sm:px-6 md:px-12 pt-4 md:pt-16 lg:pt-20">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-5 md:mb-8 leading-[1.08] tracking-tight">
            <span className="text-foreground">
              Copie o Sistema de IA que Transformou um Curso de Violão em{" "}
            </span>
            <span className="gradient-text">R$ 2,5 Milhões</span>
            <span className="text-foreground">
              {" "}— e Coloque Seu Negócio no Piloto Automático
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-xl lg:text-2xl mb-8 md:mb-12 text-[hsl(215,12%,65%)] max-w-3xl mx-auto leading-relaxed font-normal">
            75 aulas práticas. Agentes de IA prontos para copiar e ativar. Templates de automação testados em uma operação real de R$ 2,5 milhões. Tudo para você implementar no seu ritmo — sem depender de mentor, programador ou equipe técnica.{" "}
            <span className="text-emerald-400 font-semibold">Sem enrolação. Só o sistema.</span>
          </p>

          {/* CTA Group */}
          <div className="flex flex-col items-center gap-4">
            <Button
              onClick={() => setPopupOpen(true)}
              className="relative overflow-hidden w-full sm:w-auto min-h-[52px] bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-base md:text-lg px-10 md:px-14 py-4 md:py-5 h-auto rounded-xl shadow-[0_4px_20px_rgba(16,185,129,0.3)] hover:shadow-[0_8px_30px_rgba(16,185,129,0.45)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              QUERO COPIAR O SISTEMA
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-[hsl(215,10%,45%)]">
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-500/60" /> Garantia de 7 dias
              </span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span>75+ aulas práticas</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span>Acesso imediato</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator — subtle */}
      <div className="relative z-20 pb-8 text-center">
        <button onClick={scrollToFirstSection} className="focus:outline-none">
          <div className="animate-[bounce_2s_ease-in-out_infinite]">
            <ChevronDown className="w-6 h-6 text-white/30 mx-auto" />
          </div>
        </button>
      </div>

      <CTAPopup open={popupOpen} onOpenChange={setPopupOpen} />
    </section>
  );
};
