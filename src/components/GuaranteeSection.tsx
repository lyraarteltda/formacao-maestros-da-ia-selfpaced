import { Shield, ShieldCheck, CheckCircle2, Award } from "lucide-react";
import { motion } from "framer-motion";

export const GuaranteeSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-[hsl(220,16%,5%)] relative overflow-hidden">
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-heading-2 sm:text-heading-1 md:text-display font-bold">
            <span className="gradient-text">Garantia Incondicional de 7 Dias</span>
          </h2>
        </motion.div>

        {/* Main Guarantee Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Guarantee Seal */}
          <div className="absolute -top-7 sm:-top-8 left-1/2 -translate-x-1/2 z-20">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-xl shadow-amber-500/20">
              <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-amber-900" />
            </div>
          </div>

          {/* Main Card */}
          <div className="card-elevated pt-14 sm:pt-16 md:pt-20 pb-6 sm:pb-8 px-4 sm:px-6 md:px-10 border-amber-500/20">

            {/* Single strong guarantee */}
            <div className="max-w-3xl mx-auto">
              <div className="card-base p-5 sm:p-8 border-amber-500/10 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-emerald-400" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground">
                    7 Dias Sem Risco
                  </h3>
                </div>
                <div className="space-y-4">
                  <p className="text-sm md:text-base text-[hsl(215,12%,65%)] leading-relaxed">
                    Acesse as aulas. Explore os agentes de IA. Teste os templates de automação. Se nos primeiros 7 dias você concluir que a formação não vale o investimento, envie um email para contato@lyraarte.com e devolvemos 100% do valor.{" "}
                    <span className="font-semibold text-foreground">Sem perguntas. Sem formulários. Sem espera.</span>
                  </p>
                  <p className="text-sm md:text-base text-[hsl(215,12%,65%)] leading-relaxed">
                    Assumimos esse risco porque conhecemos o conteúdo. Quem implementa, gera resultado — e estamos confiantes o suficiente para colocar nosso dinheiro onde está nossa promessa.
                  </p>
                  <p className="text-sm md:text-base text-[hsl(215,12%,65%)] leading-relaxed">
                    Em 7 dias você terá concluído os primeiros 2 módulos, configurado seu primeiro agente de IA, e ativado sua primeira automação. Se nada disso funcionar para o seu negócio, o reembolso é imediato.
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-2 text-emerald-400">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="text-sm font-medium">O risco é nosso. A decisão é sua.</span>
                </div>
              </div>
            </div>

            {/* Signature Section */}
            <div className="text-center pt-6 mt-2 border-t border-border/30">
              <div className="flex items-center justify-center gap-3">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-400/40" />
                <p className="text-xl md:text-2xl italic text-foreground font-semibold">
                  Arthur Endo & Lyria Zoccal
                </p>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-400/40" />
              </div>
              <p className="text-xs text-[hsl(215,10%,45%)] mt-2 uppercase tracking-wider">
                Fundadores da Formação Maestros da IA
              </p>
            </div>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-6 mt-8"
        >
          <div className="flex items-center gap-2 text-[hsl(215,12%,65%)]">
            <Shield className="w-4 h-4 text-emerald-500/60" />
            <span className="text-sm">Pagamento Seguro</span>
          </div>
          <span className="w-1 h-1 rounded-full bg-white/10" />
          <div className="flex items-center gap-2 text-[hsl(215,12%,65%)]">
            <CheckCircle2 className="w-4 h-4 text-emerald-500/60" />
            <span className="text-sm">Satisfação Garantida</span>
          </div>
          <span className="w-1 h-1 rounded-full bg-white/10" />
          <div className="flex items-center gap-2 text-[hsl(215,12%,65%)]">
            <Award className="w-4 h-4 text-emerald-500/60" />
            <span className="text-sm">Acesso Imediato</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
