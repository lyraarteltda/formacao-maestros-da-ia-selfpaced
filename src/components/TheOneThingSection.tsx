import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTAPopup } from "@/components/CTAPopup";

export const TheOneThingSection = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <section className="section-padding bg-gradient-to-b from-background via-[hsl(220,16%,6%)] to-background relative overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-emerald-500/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-heading-2 sm:text-heading-1 md:text-display font-bold mb-4">
            <span className="gradient-text">A Verdade Que Ninguém Conta</span>
            <br />
            <span className="text-foreground">Sobre Cursos de IA</span>
          </h2>
        </motion.div>

        <div className="space-y-8 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl leading-relaxed text-[hsl(215,12%,65%)]"
          >
            A maioria dos cursos de IA cobra R$ 3.000, R$ 5.000, até R$ 10.000. Sabe por quê? Porque eles incluem "mentoria". Reuniões ao vivo. Suporte individual. Parece valioso, certo?
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl leading-relaxed text-[hsl(215,12%,65%)]"
          >
            Mas aqui está a verdade: <span className="text-foreground font-semibold">os alunos que mais cresceram não foram os que mais usaram a mentoria. Foram os que mais EXECUTARAM o conteúdo.</span> Que pegaram os agentes prontos, ativaram as automações, e colocaram para rodar.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl leading-relaxed text-[hsl(215,12%,65%)]"
          >
            A mentoria foi so a cereja no bolo — <span className="text-emerald-400 font-semibold">o bolo e o sistema.</span> 75 aulas passo a passo, cada uma com implementacao pratica. Se voce sabe apertar play e seguir instrucoes, voce nao precisa de ninguem te guiando. O conteudo se sustenta sozinho.
          </motion.p>

          {/* Pull quote — premium elevated card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="card-elevated p-5 sm:p-8 md:p-10 border-emerald-500/30 relative overflow-hidden"
          >
            <div className="absolute -top-4 -left-2 text-6xl sm:text-8xl font-serif text-emerald-500/10 select-none">&ldquo;</div>
            <p className="relative text-lg sm:text-xl md:text-2xl leading-relaxed text-foreground font-bold text-center">
              Você não está comprando acesso a PESSOAS. Você está comprando acesso a um SISTEMA validado que já gerou R$ 2,5 milhões.
            </p>
          </motion.div>
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-4 md:gap-0">
            {/* Left - Other Courses */}
            <div className="bg-card/50 border border-red-500/30 rounded-2xl md:rounded-r-none p-4 sm:p-6 md:p-8">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30 mb-4">
                  <X className="w-4 h-4 text-red-400" />
                  <span className="text-red-400 font-bold text-sm uppercase tracking-wider">Cursos com mentoria</span>
                </div>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">Espere pela próxima sessão ao vivo</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">Dependa da agenda do mentor</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">Pague R$ 3.000+ pelo suporte pessoal</span>
                </li>
              </ul>
            </div>

            {/* Right - Formação Maestros */}
            <div className="relative bg-card/50 border border-emerald-500/30 rounded-2xl md:rounded-l-none p-4 sm:p-6 md:p-8">
              <div className="absolute -inset-1 bg-gradient-to-br from-emerald-500/10 to-emerald-500/10 rounded-2xl md:rounded-l-none blur-xl opacity-50" />
              <div className="relative">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 mb-4">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-bold text-sm uppercase tracking-wider">Formação Maestros (Autodidata)</span>
                  </div>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">Acesse agora, aplique hoje</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">Avance no seu próprio ritmo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">Invista R$ 997 no sistema completo</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Reframe */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-[hsl(215,12%,65%)] text-center">
            Pense em como você aprendeu a usar seu smartphone. Alguém te deu uma mentoria? Não. Você pegou, explorou, e aprendeu fazendo. A diferença é que com um smartphone você não tinha um passo a passo — com a Formação Maestros, você tem.{" "}
            <span className="text-emerald-400 font-semibold">São 75 aulas mostrando exatamente o que fazer, na ordem certa, com templates prontos.</span>
          </p>
        </motion.div>

        {/* False Belief #3 — Self-paced dropout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <div className="card-base p-5 sm:p-8 border-emerald-500/10">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-foreground font-semibold mb-4">
              "Mas e se eu nao terminar?"
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-[hsl(215,12%,65%)]">
              Essa e a preocupacao mais comum sobre cursos self-paced — e a mais facil de resolver. A maioria dos cursos online sao 40 horas de teoria que ninguem aplica. Nossas 75 aulas sao diferentes: cada uma termina com algo funcionando. Na aula 3, seu primeiro agente de IA esta ativo. Na aula 7, sua primeira automacao esta rodando. Na aula 15, voce ja tem um sistema de vendas no WhatsApp.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-[hsl(215,12%,65%)] mt-4">
              Nossos alunos nao terminam porque sao disciplinados. <span className="text-emerald-400 font-semibold">Terminam porque e dificil parar quando cada aula melhora seu negocio de forma visivel.</span>
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center mt-12"
        >
          <div className="flex flex-col items-center gap-3">
            <Button
              onClick={() => setPopupOpen(true)}
              className="relative overflow-hidden w-full sm:w-auto min-h-[52px] bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-base md:text-lg px-10 md:px-14 py-4 md:py-5 h-auto rounded-xl shadow-[0_4px_20px_rgba(16,185,129,0.3)] hover:shadow-[0_8px_30px_rgba(16,185,129,0.45)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              QUERO ACESSO AO SISTEMA COMPLETO
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
