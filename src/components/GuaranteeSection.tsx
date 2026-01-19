import { Shield, ShieldCheck, Award, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export const GuaranteeSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 0, transparent 50%)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="gradient-text">Garantia Dupla de Resultado</span>
          </h2>
        </motion.div>

        {/* Main Guarantee Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Guarantee Seal - Positioned absolutely */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-20">
            <div className="relative">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 flex items-center justify-center shadow-xl shadow-amber-500/30 border-4 border-amber-300">
                <div className="text-center">
                  <Award className="w-8 h-8 md:w-10 md:h-10 text-amber-900 mx-auto mb-1" strokeWidth={2.5} />
                  <span className="text-[10px] md:text-xs font-bold text-amber-900 uppercase tracking-wider">
                    100%<br />Garantido
                  </span>
                </div>
              </div>
              {/* Seal Ribbon Effect */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-gradient-to-b from-amber-600 to-amber-700 rounded-b-lg"></div>
            </div>
          </div>

          {/* Main Card */}
          <div className="bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100 dark:from-amber-950/40 dark:via-yellow-950/30 dark:to-amber-900/40 border-2 border-amber-400/60 rounded-3xl pt-16 md:pt-20 pb-8 px-6 md:px-10 shadow-2xl shadow-amber-500/10">
            
            {/* Guarantees Grid */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8">
              
              {/* Guarantee 1 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/80 dark:bg-background/60 rounded-2xl p-6 border border-amber-300/50 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/30">
                    <ShieldCheck className="w-6 h-6 text-primary-foreground" strokeWidth={2.5} />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                      Garantia #1
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-foreground">
                      Garantia de 10 Semanas
                    </h3>
                  </div>
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Se você aplicar o Método, participar das Mentorias e não conseguir resultados em 10 semanas, 
                  <span className="font-semibold text-foreground"> continuamos trabalhando com você em consultorias individuais GRATUITAMENTE até você conseguir</span> 
                  {" "}(sem tempo limite) ou devolvemos 100% do seu dinheiro.
                </p>
                <div className="mt-4 flex items-center gap-2 text-primary">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="text-sm font-medium">Compromisso até você ter resultado</span>
                </div>
              </motion.div>

              {/* Guarantee 2 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white/80 dark:bg-background/60 rounded-2xl p-6 border border-amber-300/50 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/30">
                    <Shield className="w-6 h-6 text-primary-foreground" strokeWidth={2.5} />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                      Garantia #2
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-foreground">
                      Garantia Incondicional de 7 Dias
                    </h3>
                  </div>
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Se nos primeiros 7 dias você sentir que isso não é para você, 
                  <span className="font-semibold text-foreground"> basta enviar um e-mail e devolvemos 100% do seu investimento</span>. 
                  Sem perguntas, sem burocracia.
                </p>
                <div className="mt-4 flex items-center gap-2 text-primary">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="text-sm font-medium">Risco zero para você</span>
                </div>
              </motion.div>
            </div>

            {/* Signature Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-center pt-6 border-t border-amber-300/50"
            >
              <p className="text-sm text-muted-foreground mb-3">
                Assinado pessoalmente pelos fundadores
              </p>
              <div className="flex items-center justify-center gap-2">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-400"></div>
                <p className="text-xl md:text-2xl font-script italic text-foreground font-semibold">
                  Arthur Endo & Lyria Zoccal
                </p>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-400"></div>
              </div>
              <p className="text-xs text-muted-foreground mt-2 uppercase tracking-wider">
                Fundadores do Ecossistema Maestros da IA
              </p>
            </motion.div>
          </div>

          {/* Corner Decorations */}
          <div className="absolute top-12 left-4 w-8 h-8 border-l-2 border-t-2 border-amber-400/40 rounded-tl-lg"></div>
          <div className="absolute top-12 right-4 w-8 h-8 border-r-2 border-t-2 border-amber-400/40 rounded-tr-lg"></div>
          <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-amber-400/40 rounded-bl-lg"></div>
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-amber-400/40 rounded-br-lg"></div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mt-8"
        >
          <div className="flex items-center gap-2 text-muted-foreground">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-sm">Pagamento Seguro</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <CheckCircle2 className="w-5 h-5 text-primary" />
            <span className="text-sm">Satisfação Garantida</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Award className="w-5 h-5 text-primary" />
            <span className="text-sm">+500 Alunos Satisfeitos</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
