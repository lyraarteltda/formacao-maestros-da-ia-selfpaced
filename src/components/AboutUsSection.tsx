import { motion } from "framer-motion";

export const AboutUsSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-[hsl(220,18%,6%)] relative overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/[0.03] rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/[0.02] rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium tracking-wide uppercase mb-6">
            Nossa História
          </span>
          <h2 className="text-heading-2 sm:text-heading-1 md:text-display font-bold mb-4">
            De Curso de Violão a{" "}
            <span className="gradient-text">R$2,5 Milhões com IA</span>
          </h2>
          <p className="text-body-lg text-[hsl(215,12%,65%)] max-w-2xl mx-auto">
            Conheça Arthur e Lyria — uma história real de transformação
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left Column - Founders Photo + Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Founders Photo */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-emerald-500/[0.08] rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/[0.06]">
                <img
                  src="/lovable-uploads/f3b2c877-3564-40ef-8dab-1ee449dbc40a.png"
                  alt="Arthur Endo & Lyria Zoccal"
                  className="w-full object-cover"
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-lg font-semibold text-foreground">Arthur Endo & Lyria Zoccal</p>
                <p className="text-sm text-[hsl(215,10%,45%)]">Fundadores da Lyra Academy</p>
              </div>

              {/* Founder Credentials */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                <div className="card-base p-4 border-emerald-500/10">
                  <p className="text-sm font-semibold text-emerald-400 mb-1">Arthur Endo</p>
                  <p className="text-xs text-[hsl(215,12%,65%)] leading-relaxed">Músico premiado internacionalmente com 3 CDs gravados e diversas turnês internacionais. Trouxe a criatividade e visão artística para o mundo da IA.</p>
                </div>
                <div className="card-base p-4 border-emerald-500/10">
                  <p className="text-sm font-semibold text-emerald-400 mb-1">Lyria Zoccal</p>
                  <p className="text-xs text-[hsl(215,12%,65%)] leading-relaxed">Formada em Administração, com experiência em grandes empresas de tecnologia e desenvolvimento de software. Trouxe a mentalidade de negócios e tech para a operação.</p>
                </div>
              </div>
            </div>

            {/* Clean Horizontal Timeline */}
            <div className="card-base p-4 sm:p-6 md:p-8">
              <div className="grid grid-cols-4 gap-2 sm:gap-4 relative">
                {/* Connecting line */}
                <div className="absolute top-6 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-emerald-500/40 via-emerald-500/20 to-emerald-500/40" />

                {[
                  { year: "Início", label: "Curso de violão" },
                  { year: "6 meses", label: "Implementação de sistemas de IA" },
                  { year: "12 meses", label: "2,5 milhões faturados" },
                  { year: "Agora", label: "Ensinando o sistema que criamos" },
                ].map((step, i) => (
                  <div key={i} className="flex flex-col items-center relative z-10">
                    <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-[hsl(220,16%,10%)] border-2 border-emerald-500/40 flex items-center justify-center mb-2 sm:mb-3">
                      <span className="text-emerald-400 font-bold text-[8px] sm:text-[10px] font-mono text-center leading-tight">{step.year}</span>
                    </div>
                    <p className="font-semibold text-[10px] sm:text-xs text-foreground text-center leading-tight">{step.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Feel/Felt/Found Narrative */}
          <div className="space-y-4 sm:space-y-6">
            {/* Feel Paragraph */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card-base p-4 sm:p-6 hover:border-emerald-500/20"
            >
              <p className="text-body-lg leading-relaxed text-foreground/90">
                Nós entendemos como você se <span className="text-emerald-400 font-bold">SENTE</span>. Ver todo mundo falando de IA, testar mil ferramentas, mas nunca conseguir transformar isso em lucro real. A sensação de estar ficando para trás enquanto outros parecem estar ganhando milhões...
              </p>
            </motion.div>

            {/* Felt Paragraph */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="card-base p-4 sm:p-6 hover:border-emerald-500/20"
            >
              <p className="text-body-lg leading-relaxed text-foreground/90">
                Nós <span className="text-emerald-400 font-bold">SENTÍAMOS</span> exatamente assim. Quando começamos, não sabíamos nada de IA. Nosso escritório era a mesa da sala. Nosso primeiro produto era um curso de <span className="text-emerald-400 font-semibold">VIOLÃO</span>, não de tecnologia. Ninguém olhava para nós e pensava "esses dois vão faturar milhões com inteligência artificial."
              </p>
            </motion.div>

            {/* Found Paragraph */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="card-base p-4 sm:p-6 hover:border-emerald-500/20"
            >
              <p className="text-body-lg leading-relaxed text-foreground/90">
                Mas então <span className="text-emerald-400 font-bold">DESCOBRIMOS</span> algo: o segredo não era a ferramenta, era o <span className="text-emerald-400 font-bold">SISTEMA</span>. Criamos um método de automação que funcionava em qualquer nicho. Aplicamos no curso de violão e fizemos <span className="text-emerald-400 font-bold">R$2,5 milhões em 15 meses</span>, trabalhando menos de 30 minutos por dia. Documentamos cada agente, cada automação, cada workflow — e agora estamos entregando esse sistema inteiro para você implementar com autonomia total.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
