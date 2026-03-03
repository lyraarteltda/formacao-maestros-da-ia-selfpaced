import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { CTAPopup } from "./CTAPopup";

export const TwoPathsSection = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-gradient-to-r from-red-950/10 to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-emerald-950/10 to-transparent" />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-heading-2 sm:text-heading-1 md:text-display font-bold mb-4">
            Daqui a 12 Meses:{" "}
            <span className="gradient-text">Duas Realidades Possíveis</span>
          </h2>
        </motion.div>

        {/* Two Scenarios */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* REALIDADE A */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="card-base p-5 sm:p-8 border-red-500/20 hover:border-red-500/30 transition-all duration-300 h-full">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
                <span className="text-red-400 font-bold text-sm uppercase tracking-wider">Realidade A</span>
              </div>
              <p className="text-base sm:text-lg leading-relaxed text-[hsl(215,12%,65%)]">
                É março de 2027. Você ainda responde mensagens de clientes manualmente. Seu concorrente — aquele que você achava que estava atrás — fechou 3x mais contratos no último trimestre usando agentes de IA no WhatsApp. Você abre o LinkedIn e vê profissionais cobrando R$ 5.000 por automação. Você sabe que poderia fazer o mesmo. Mas não começou.
              </p>
            </div>
          </motion.div>

          {/* REALIDADE B */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-emerald-500/10 via-green-500/5 to-emerald-500/10 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative card-base p-5 sm:p-8 border-emerald-500/20 hover:border-emerald-500/30 transition-all duration-300 h-full">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                <span className="text-emerald-400 font-bold text-sm uppercase tracking-wider">Realidade B</span>
              </div>
              <p className="text-base sm:text-lg leading-relaxed text-[hsl(215,12%,65%)]">
                É março de 2027. Você abre seu dashboard de manhã e vê as vendas que entraram enquanto dormia. Seu chatbot qualificou 12 leads ontem à noite. Sua automação de conteúdo publicou 4 posts em 3 plataformas. Você toma café, revisa os números em 20 minutos, e segue com o seu dia. A operação roda sozinha.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-10"
        >
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-[hsl(215,12%,65%)] max-w-3xl mx-auto mb-8">
            A diferença entre essas duas realidades não é talento, dinheiro ou experiência técnica. É acesso ao sistema certo — e a decisão de agir enquanto ainda é cedo.
          </p>

          <div className="flex flex-col items-center gap-3">
            <Button
              onClick={() => setPopupOpen(true)}
              size="lg"
              className="relative overflow-hidden w-full sm:w-auto min-h-[52px] bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-base md:text-lg px-10 md:px-14 py-4 md:py-5 h-auto rounded-xl shadow-[0_4px_20px_rgba(16,185,129,0.3)] hover:shadow-[0_8px_30px_rgba(16,185,129,0.45)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              QUERO A REALIDADE B
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <p className="text-sm text-[hsl(215,10%,45%)]">
              R$ 997 · 12x de R$ 97,42
            </p>
          </div>
        </motion.div>
      </div>

      <CTAPopup open={popupOpen} onOpenChange={setPopupOpen} />
    </section>
  );
};
