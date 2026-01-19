import { motion } from "framer-motion";
import { Quote, Users, Music, TrendingUp, Sparkles, Rocket, GraduationCap } from "lucide-react";

export const AboutUsSection = () => {
  const timelineSteps = [
    { icon: Users, label: "Do Zero", description: "Início da jornada" },
    { icon: Music, label: "Infoproduto", description: "Primeiro negócio" },
    { icon: TrendingUp, label: "R$2,5M", description: "Em 15 meses" },
    { icon: Rocket, label: "Piloto Automático", description: "6 dígitos/mês 100% com Agente de IA" },
    { icon: GraduationCap, label: "Maestros", description: "Ensinando IA" },
    { icon: Users, label: "Mentores de Empresários", description: "Dezenas de cases" },
    { icon: Sparkles, label: "Parceiros de Grandes Marcas", description: "Hostinger e Pipefy" },
    { icon: TrendingUp, label: "150.000+ seguidores", description: "em 4 meses" }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background via-amber-950/10 to-background relative overflow-hidden">
      {/* Warm background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--primary) / 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 80% 50%, hsl(var(--accent) / 0.2) 0%, transparent 50%)`
        }} />
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-400 via-primary to-amber-400 bg-clip-text text-transparent">
            Conheça Arthur e Lyria — De Curso de Violão a R$2,5 Milhões com IA
          </h2>
          <p className="text-lg text-muted-foreground">
            Uma história real de transformação
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
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
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/50 via-primary/50 to-amber-500/50 rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-gradient-to-br from-card via-card to-amber-950/20 border border-amber-500/30 rounded-2xl p-8 text-center">
                <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-amber-500/20 to-primary/20 border-2 border-dashed border-amber-500/50 flex items-center justify-center mb-4">
                  <Users className="w-20 h-20 text-amber-500/60" />
                </div>
                <p className="text-lg font-semibold text-foreground">Arthur Endo & Lyria Zoccal</p>
                <p className="text-sm text-muted-foreground">Fundadores da Lyra Academy</p>
              </div>
            </div>

            {/* Visual Timeline */}
            <div className="bg-card/50 border border-border rounded-2xl p-6">
              <h4 className="text-lg font-semibold mb-6 text-center text-foreground">Nossa Jornada</h4>
              <div className="relative pt-4">
                {/* Timeline Line - positioned behind icons */}
                <div className="absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary via-accent to-primary hidden md:block" />
                
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {timelineSteps.map((step, index) => (
                    <motion.div
                      key={step.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                      className="text-center relative flex flex-col items-center"
                    >
                      <div className="w-14 h-14 mx-auto rounded-full bg-card border-2 border-primary/50 flex items-center justify-center mb-2 relative z-10 shadow-lg shadow-primary/20">
                        <step.icon className="w-6 h-6 text-amber-400" />
                      </div>
                      <p className="font-bold text-foreground text-sm leading-tight">{step.label}</p>
                      <p className="text-xs text-muted-foreground leading-tight mt-0.5">{step.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
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
                Mas então <span className="text-amber-400 font-bold">DESCOBRIMOS</span> algo: o segredo não era a ferramenta, era o <span className="text-primary font-bold">SISTEMA</span>. Criamos um método de automação que funcionava em qualquer nicho. Aplicamos no curso de violão e fizemos <span className="text-green-400 font-bold">R$2,5 milhões em 15 meses</span>. Depois percebemos: esse mesmo sistema podia ser ensinado para qualquer empreendedor.
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};
