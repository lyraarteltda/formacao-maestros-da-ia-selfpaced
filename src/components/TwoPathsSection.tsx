import { useState } from "react";
import { motion } from "framer-motion";
import { X, Check, User, Bot, ArrowRight } from "lucide-react";
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
    <section className="py-20 px-4 bg-background relative overflow-hidden">
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Suas Escolhas Definem{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Seu Futuro
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dois caminhos. Dois destinos completamente diferentes.
          </p>
        </motion.div>

        {/* Split Screen Comparison */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-0 relative">
          {/* Center Divider - Desktop Only */}
          <div className="hidden md:flex absolute left-1/2 top-0 bottom-0 -translate-x-1/2 z-20 items-center">
            <div className="w-1 h-full bg-gradient-to-b from-red-500/50 via-muted to-emerald-500/50" />
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
            
            <div className="relative bg-card/50 border border-red-500/30 rounded-2xl md:rounded-r-none p-6 md:p-8 h-full backdrop-blur-sm">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30 mb-4">
                  <X className="w-5 h-5 text-red-400" />
                  <span className="text-red-400 font-bold text-sm uppercase tracking-wider">O Caminho Errado</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-red-400">O AMADOR</h3>
              </div>

              {/* Image Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-red-950/40 to-red-900/20 rounded-xl border border-dashed border-red-500/30 flex items-center justify-center mb-8">
                <div className="text-center">
                  <User className="w-16 h-16 text-red-500/40 mx-auto mb-2" />
                  <p className="text-red-400/60 text-sm">Pessoa frustrada no computador</p>
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

              {/* Bottom fade effect */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-red-950/30 to-transparent rounded-b-2xl md:rounded-br-none pointer-events-none" />
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
            
            <div className="relative bg-card/50 border border-emerald-500/30 rounded-2xl md:rounded-l-none p-6 md:p-8 h-full backdrop-blur-sm">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 mb-4">
                  <Check className="w-5 h-5 text-emerald-400" />
                  <span className="text-emerald-400 font-bold text-sm uppercase tracking-wider">O Caminho Certo</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-emerald-400">O MAESTRO</h3>
              </div>

              {/* Image Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-emerald-950/40 to-emerald-900/20 rounded-xl border border-dashed border-emerald-500/30 flex items-center justify-center mb-8">
                <div className="text-center">
                  <Bot className="w-16 h-16 text-emerald-500/40 mx-auto mb-2" />
                  <p className="text-emerald-400/60 text-sm">Pessoa confiante com dashboard automatizado</p>
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

              {/* Bottom glow effect */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-emerald-950/30 to-transparent rounded-b-2xl md:rounded-bl-none pointer-events-none" />
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
              className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-base md:text-lg px-8 md:px-10 py-5 md:py-6 h-auto rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-105"
            >
              QUERO O SISTEMA COMPLETO
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <p className="text-sm text-muted-foreground">
              Acesso imediato + Garantia de 7 dias
            </p>
          </div>
        </motion.div>
      </div>

      <CTAPopup open={popupOpen} onOpenChange={setPopupOpen} />
    </section>
  );
};
