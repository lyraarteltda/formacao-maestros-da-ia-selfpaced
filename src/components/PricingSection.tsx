import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, MessageCircle, Shield, Lock, ArrowRight } from "lucide-react";
import { CTAPopup } from "@/components/CTAPopup";

export const PricingSection = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  const valueStack = [
    { item: "Formação Completa — 75 Aulas Práticas", value: "R$ 4.997" },
    { item: "Todos os Agentes de IA", value: "R$ 2.997" },
    { item: 'Templates de Automação "Copie e Cole"', value: "R$ 1.497" },
    { item: "Arsenal IA: +100 Ferramentas e Prompts", value: "R$ 997" },
    { item: "Arquivos Confidenciais", value: "R$ 2.997" },
    { item: "Atualizações de Conteúdo por 1 Ano", value: "R$ 997" },
  ];

  return (
    <section className="section-padding bg-background" data-section="pricing">
      <div className="container mx-auto max-w-lg">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium tracking-wide uppercase mb-6">
            Investimento
          </span>
          <h2 className="text-heading-1 md:text-display font-bold">
            <span className="gradient-text">Resumo do Seu Investimento</span>
          </h2>
        </motion.div>

        {/* Single Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Subtle glow */}
          <div className="absolute -inset-px bg-gradient-to-b from-emerald-500/30 via-emerald-500/10 to-emerald-500/30 rounded-3xl blur-sm" />

          <div className="relative bg-card border border-emerald-500/20 rounded-3xl overflow-hidden">
            {/* Top badge */}
            <div className="bg-emerald-600 text-white font-bold py-3 text-center text-sm tracking-wider uppercase">
              Oferta de Lançamento
            </div>

            <div className="p-6 md:p-8">
              {/* Value Stack — compact list */}
              <div className="space-y-2.5 mb-6">
                {valueStack.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-2 border-b border-border/30 last:border-0"
                  >
                    <div className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span className="text-sm text-foreground/80">{item.item}</span>
                    </div>
                    <span className="text-sm text-[hsl(215,10%,45%)] line-through font-mono">{item.value}</span>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="h-px bg-border/50 mb-8" />

              {/* Price */}
              <div className="text-center mb-8">
                <p className="text-sm text-[hsl(215,10%,45%)] line-through mb-1">De R$ 2.997</p>
                <p className="text-6xl md:text-7xl font-black text-emerald-400 font-mono mb-2">
                  R$ 997
                </p>
                <p className="text-lg text-[hsl(215,12%,65%)]">
                  ou <span className="text-emerald-400 font-semibold">12x de R$ 97,42</span>
                </p>
              </div>

              {/* CTA */}
              <Button
                onClick={() => setPopupOpen(true)}
                className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-base md:text-lg py-5 h-auto rounded-xl shadow-[0_4px_20px_rgba(16,185,129,0.3)] hover:shadow-[0_8px_30px_rgba(16,185,129,0.45)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                QUERO O SISTEMA COMPLETO
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <p className="text-center text-xs text-[hsl(215,10%,45%)] mt-4">
                Acesso imediato · Garantia de 7 dias · 12x de R$ 97,42
              </p>
            </div>

            {/* Payment methods — bottom strip */}
            <div className="border-t border-border/50 px-6 md:px-8 py-5 flex flex-wrap items-center justify-center gap-4">
              <span className="flex items-center gap-1.5 text-xs text-[hsl(215,10%,45%)]">
                <Shield className="w-4 h-4 text-emerald-500/60" /> Compra Segura
              </span>
              <span className="flex items-center gap-1.5 text-xs text-[hsl(215,10%,45%)]">
                <Lock className="w-4 h-4 text-emerald-500/60" /> Dados Criptografados
              </span>
              <span className="flex items-center gap-1.5 text-xs text-[hsl(215,10%,45%)]">
                <Check className="w-4 h-4 text-emerald-500/60" /> 7 Dias Garantia
              </span>
            </div>
          </div>
        </motion.div>

        {/* Doubts Button */}
        <div className="flex justify-center mt-6">
          <Button
            onClick={() => window.open("https://wa.me/5511942131610", '_blank')}
            variant="outline"
            size="lg"
            className="gap-2 border-border/50 text-[hsl(215,12%,65%)] hover:text-emerald-400 hover:border-emerald-500/30 transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5" />
            Tenho Dúvidas
          </Button>
        </div>

        <CTAPopup open={popupOpen} onOpenChange={setPopupOpen} />
      </div>
    </section>
  );
};
