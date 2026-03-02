import { useState } from "react";
import { motion } from "framer-motion";
import { X, Check, User, Rocket, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { CTAPopup } from "./CTAPopup";

export const TwoPathsSection = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  const amateurPoints = [
    "Continua usando ChatGPT básico sem estratégia",
    "Assiste outros lucrando milhões enquanto fica parado",
    "Perde horas testando ferramentas que não funcionam",
    "Negócio estagnado, sem automação",
    "Sempre correndo atrás, nunca na frente"
  ];

  const maestroPoints = [
    "Domina um sistema completo de automação com IA",
    "Protagonista da revolução tecnológica",
    "Automações trabalhando 24/7 gerando leads e vendas",
    "Negócio escalando no piloto automático",
    "30 minutos por dia para administrar tudo"
  ];

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-gradient-to-r from-red-950/20 to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-emerald-950/20 to-transparent" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-heading-2 sm:text-heading-1 md:text-display font-bold mb-4">
            Suas Escolhas Definem{" "}
            <span className="bg-gradient-to-r from-red-400 via-foreground to-emerald-400 bg-clip-text text-transparent">
              Seu Futuro
            </span>
          </h2>
          <p className="text-lg text-[hsl(215,12%,65%)] max-w-2xl mx-auto">
            Dois caminhos. Dois destinos completamente diferentes.
          </p>
        </motion.div>

        {/* Split Screen Comparison */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-0 relative">
          {/* Center Divider - Desktop Only */}
          <div className="hidden md:flex absolute left-1/2 top-0 bottom-0 -translate-x-1/2 z-20 items-center">
            <div className="w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
          </div>

          {/* LEFT SIDE - O AMADOR */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-red-950/20 to-background rounded-2xl md:rounded-r-none opacity-50 group-hover:opacity-70 transition-opacity duration-300" />

            <div className="relative bg-card/50 border border-red-500/30 rounded-2xl md:rounded-r-none p-5 sm:p-8 md:p-10 h-full backdrop-blur-sm">
              {/* Header */}
              <div className="text-center mb-5 sm:mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30 mb-4">
                  <X className="w-5 h-5 text-red-400" />
                  <span className="text-red-400 font-bold text-sm uppercase tracking-wider">O Caminho Errado</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-red-400">O AMADOR</h3>
              </div>

              {/* Icon */}
              <div className="flex justify-center mb-5 sm:mb-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center">
                  <User className="w-8 h-8 sm:w-10 sm:h-10 text-red-400" />
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-4">
                {amateurPoints.map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center mt-0.5">
                      <X className="w-4 h-4 text-red-400" />
                    </div>
                    <span className="text-foreground/80">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* RIGHT SIDE - O MAESTRO */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative group"
          >
            {/* Glow effect for Maestro side */}
            <div className="absolute -inset-1 bg-gradient-to-br from-emerald-500/20 via-green-500/10 to-emerald-500/20 rounded-2xl md:rounded-l-none blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 via-emerald-950/20 to-background rounded-2xl md:rounded-l-none opacity-50 group-hover:opacity-70 transition-opacity duration-300" />

            <div className="relative bg-card/50 border border-emerald-500/30 rounded-2xl md:rounded-l-none p-5 sm:p-8 md:p-10 h-full backdrop-blur-sm">
              {/* Header */}
              <div className="text-center mb-5 sm:mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 mb-4">
                  <Check className="w-5 h-5 text-emerald-400" />
                  <span className="text-emerald-400 font-bold text-sm uppercase tracking-wider">O Caminho Certo</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-emerald-400">O MAESTRO</h3>
              </div>

              {/* Icon */}
              <div className="flex justify-center mb-5 sm:mb-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                  <Rocket className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-400" />
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-4">
                {maestroPoints.map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-emerald-400" />
                    </div>
                    <span className="text-foreground/80">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Center Question */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8 bg-gradient-to-r from-red-400 via-foreground to-emerald-400 bg-clip-text text-transparent">
            QUAL CAMINHO VOCÊ VAI ESCOLHER?
          </h3>

          <div className="flex flex-col items-center gap-3">
            <Button
              onClick={() => setPopupOpen(true)}
              size="lg"
              className="relative overflow-hidden w-full sm:w-auto min-h-[52px] bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-base md:text-lg px-10 md:px-14 py-4 md:py-5 h-auto rounded-xl shadow-[0_4px_20px_rgba(16,185,129,0.3)] hover:shadow-[0_8px_30px_rgba(16,185,129,0.45)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              QUERO O SISTEMA COMPLETO
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <p className="text-sm text-[hsl(215,10%,45%)]">
              Acesso imediato + Garantia de 7 dias
            </p>
          </div>
        </motion.div>
      </div>

      <CTAPopup open={popupOpen} onOpenChange={setPopupOpen} />
    </section>
  );
};
