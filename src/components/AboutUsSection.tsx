import { motion } from "framer-motion";
import { Users, Music, TrendingUp, Sparkles, Rocket, GraduationCap, Handshake } from "lucide-react";

export const AboutUsSection = () => {
  const mainTimeline = [
    { icon: Users, label: "Do Zero", description: "Início da jornada" },
    { icon: Music, label: "Infoproduto", description: "Primeiro negócio" },
    { icon: TrendingUp, label: "R$2,5M", description: "Em 15 meses" },
    { icon: Rocket, label: "Piloto Automático", description: "6 dígitos/mês 100% com Agente de IA" },
  ];

  const maestrosBranches = [
    { icon: Users, label: "Mentores de Empresários", description: "Dezenas de cases" },
    { icon: Handshake, label: "Parceiros de Grandes Marcas", description: "Hostinger e Pipefy" },
    { icon: TrendingUp, label: "150.000+ seguidores", description: "em 4 meses" },
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

            {/* Visual Timeline with Hub Pattern */}
            <div className="bg-card/50 border border-border rounded-2xl p-6">
              <h4 className="text-lg font-semibold mb-6 text-center text-foreground">Nossa Jornada</h4>
              
              {/* Main Linear Timeline */}
              <div className="relative mb-8">
                {/* Timeline Line */}
                <div className="absolute top-7 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary via-accent to-primary hidden md:block" />
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {mainTimeline.map((step, index) => (
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

              {/* Maestros Hub with Branches */}
              <div className="relative">
                {/* Connection line from timeline to Maestros */}
                <div className="absolute top-0 left-1/2 w-0.5 h-4 bg-gradient-to-b from-primary to-accent hidden md:block" style={{ transform: 'translateX(-50%)' }} />
                
                {/* Maestros Central Hub */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex flex-col items-center mb-6 pt-4"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 border-3 border-primary flex items-center justify-center shadow-xl shadow-primary/30 relative z-20">
                    <GraduationCap className="w-10 h-10 text-amber-400" />
                  </div>
                  <p className="font-bold text-foreground text-lg mt-2">Maestros</p>
                  <p className="text-sm text-muted-foreground">Ensinando IA</p>
                </motion.div>

                {/* Branch Lines SVG */}
                <svg className="absolute top-24 left-1/2 w-full h-16 hidden md:block" style={{ transform: 'translateX(-50%)', maxWidth: '400px' }}>
                  {/* Left branch */}
                  <path d="M 200 0 Q 200 30 60 50" stroke="url(#branchGradient)" strokeWidth="2" fill="none" />
                  {/* Center branch */}
                  <path d="M 200 0 L 200 50" stroke="url(#branchGradient)" strokeWidth="2" fill="none" />
                  {/* Right branch */}
                  <path d="M 200 0 Q 200 30 340 50" stroke="url(#branchGradient)" strokeWidth="2" fill="none" />
                  <defs>
                    <linearGradient id="branchGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="hsl(var(--primary))" />
                      <stop offset="100%" stopColor="hsl(var(--accent))" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Branch Items */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
                  {maestrosBranches.map((branch, index) => (
                    <motion.div
                      key={branch.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.6 + 0.1 * index }}
                      className="text-center flex flex-col items-center"
                    >
                      <div className="w-14 h-14 rounded-full bg-card border-2 border-accent/50 flex items-center justify-center mb-2 shadow-lg shadow-accent/20">
                        <branch.icon className="w-6 h-6 text-amber-400" />
                      </div>
                      <p className="font-bold text-foreground text-sm leading-tight">{branch.label}</p>
                      <p className="text-xs text-muted-foreground leading-tight mt-0.5">{branch.description}</p>
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
