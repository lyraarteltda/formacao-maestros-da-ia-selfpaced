import { Shield, ShieldCheck, Award, CheckCircle2 } from "lucide-react";
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
            <span className="gradient-text">Sua Decisão é Protegida por 7 Dias</span>
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

            {/* Guarantees Grid */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8">

              {/* Guarantee 1 */}
              <div className="card-base p-4 sm:p-6 border-amber-500/10 hover:border-amber-500/20 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-emerald-400" strokeWidth={2.5} />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-amber-400/80 uppercase tracking-wider">
                      Garantia #1
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-foreground">
                      7 Dias Sem Risco
                    </h3>
                  </div>
                </div>
                <p className="text-sm md:text-base text-[hsl(215,12%,65%)] leading-relaxed">
                  Se nos primeiros 7 dias você sentir que a formação não é para você, devolvemos 100% do seu investimento.{" "}
                  <span className="font-semibold text-foreground">Sem perguntas. Sem burocracia. Sem letras miúdas.</span>
                </p>
                <p className="text-sm md:text-base text-[hsl(215,12%,65%)] leading-relaxed mt-3">
                  Basta enviar um email e o valor volta para sua conta. Simples assim.
                </p>
                <div className="mt-4 flex items-center gap-2 text-emerald-400">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="text-sm font-medium">Risco zero para você</span>
                </div>
              </div>

              {/* Guarantee 2 */}
              <div className="card-base p-4 sm:p-6 border-amber-500/10 hover:border-amber-500/20 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <Award className="w-6 h-6 text-emerald-400" strokeWidth={2.5} />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-amber-400/80 uppercase tracking-wider">
                      Garantia #2
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-foreground">
                      Confiança Total
                    </h3>
                  </div>
                </div>
                <p className="text-sm md:text-base text-[hsl(215,12%,65%)] leading-relaxed">
                  Se você assistir às 75 aulas, implementar os agentes e automações, e não gerar resultado — nós queremos saber o porquê.{" "}
                  <span className="font-semibold text-foreground">Porque isso nunca aconteceu.</span>
                </p>
                <p className="text-sm md:text-base text-[hsl(215,12%,65%)] leading-relaxed mt-3">
                  Esse sistema já foi validado com R$ 2,5 milhões em vendas reais. Não é teoria. Não é promessa. É um sistema completo que funciona para quem executa.
                </p>
                <div className="mt-4 flex items-center gap-2 text-emerald-400">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="text-sm font-medium">Sistema validado com resultados reais</span>
                </div>
              </div>
            </div>

            {/* Bottom copy */}
            <div className="text-center">
              <p className="text-[hsl(215,12%,65%)] mb-3">
                Nós assumimos 100% do risco. Se não funcionar para você, o prejuízo é nosso — não seu.
              </p>
              <p className="text-sm text-[hsl(215,10%,45%)]">
                7 dias é tempo suficiente para você acessar as primeiras 15+ aulas, ver os agentes de IA em ação e entender por que nossos alunos dizem que foi o melhor investimento profissional que já fizeram.
              </p>
            </div>

            {/* Signature Section */}
            <div className="text-center pt-6 mt-6 border-t border-border/30">
              <p className="text-sm text-[hsl(215,10%,45%)] mb-3">
                Assinado pessoalmente pelos fundadores
              </p>
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
