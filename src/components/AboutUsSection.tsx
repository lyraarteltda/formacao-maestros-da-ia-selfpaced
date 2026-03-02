import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { JourneyTimeline } from "./JourneyTimeline";

export const AboutUsSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background via-background to-background relative overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Nossa História
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground via-foreground/90 to-foreground bg-clip-text text-transparent">
            De Curso de Violão a R$2,5 Milhões com IA
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça Arthur e Lyria — uma história real de transformação
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Founders Photo Placeholder */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/40 via-accent/40 to-primary/40 rounded-3xl blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
              <div className="relative bg-gradient-to-br from-card via-card to-card/80 border border-border/50 rounded-3xl p-10 text-center backdrop-blur-sm">
                <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-dashed border-primary/30 flex items-center justify-center mb-6 group-hover:border-primary/50 transition-colors">
                  <Users className="w-16 h-16 text-primary/40 group-hover:text-primary/60 transition-colors" />
                </div>
                <p className="text-xl font-semibold text-foreground">Arthur Endo & Lyria Zoccal</p>
                <p className="text-sm text-muted-foreground mt-1">Fundadores da Lyra Academy</p>
              </div>
            </div>

            {/* Premium Journey Timeline */}
            <div className="bg-card/30 border border-border/50 rounded-3xl p-6 md:p-8 backdrop-blur-sm">
              <JourneyTimeline />
            </div>
          </motion.div>

          {/* Right Column - Narrative */}
          <div className="space-y-8">
            {/* Feel Paragraph */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-card/30 border border-border/50 rounded-xl p-6 hover:border-amber-500/30 transition-colors"
            >
              <p className="text-lg leading-relaxed text-foreground/90">
                Nós entendemos como você se <span className="text-amber-400 font-bold">SENTE</span>. Ver todo mundo falando de IA, testar mil ferramentas, mas nunca conseguir transformar isso em lucro real. A sensação de estar ficando para trás enquanto outros parecem estar ganhando milhões...
              </p>
            </motion.div>

            {/* Felt Paragraph */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-card/30 border border-border/50 rounded-xl p-6 hover:border-amber-500/30 transition-colors"
            >
              <p className="text-lg leading-relaxed text-foreground/90">
                Nós <span className="text-amber-400 font-bold">SENTÍAMOS</span> exatamente assim. Quando começamos, não sabíamos nada de tecnologia. Arthur tinha um doutorado Honoris Causa, Lyria tinha background em TI e medicina — mas nenhum de nós sabia como usar IA para vender. Nosso primeiro negócio foi um curso de <span className="text-primary font-semibold">VIOLÃO</span>, não de tecnologia.
              </p>
            </motion.div>

            {/* Found Paragraph */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-card/30 border border-border/50 rounded-xl p-6 hover:border-amber-500/30 transition-colors"
            >
              <p className="text-lg leading-relaxed text-foreground/90">
                Mas então <span className="text-amber-400 font-bold">DESCOBRIMOS</span> algo: o segredo não era a ferramenta, era o <span className="text-primary font-bold">SISTEMA</span>. Criamos um método de automação que funcionava em qualquer nicho. Aplicamos no curso de violão e fizemos <span className="text-green-400 font-bold">R$2,5 milhões em 15 meses</span>, trabalhando menos de 30 minutos por dia. Documentamos cada agente, cada automação, cada workflow — e agora estamos entregando esse sistema inteiro para você implementar com autonomia total.
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};
