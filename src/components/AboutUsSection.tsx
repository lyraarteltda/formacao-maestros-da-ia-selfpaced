import { motion } from "framer-motion";

export const AboutUsSection = () => {
  const founders = [
    {
      name: "Lyria Zoccal",
      title: "Co-Fundadora Lyra Academy | Especialista em IA e Automação",
      points: [
        "Graduação em Administração (UFPR)",
        "Experiência em TI: Consultoria (ERP - SAP Business One)",
        "Transição estratégica para mercado de IA e Automação",
        "Visão empresarial focada em inovação e eficiência"
      ]
    },
    {
      name: "Arthur Endo",
      title: "Co-Fundador Lyra Academy | Especialista em IA e Automação",
      points: [
        "Violonista clássico premiado nacional e internacionalmente",
        "3 discos gravados e turnês internacionais",
        "Doutor Honoris Causa pela Universidade FACEI",
        "Pioneiro em aplicação prática de IA em operações empresariais"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background via-secondary/20 to-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Os Maestros
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça os especialistas por trás da Lyra Academy
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-card border border-border rounded-2xl p-8 h-full hover:border-primary/50 transition-all duration-300 shadow-lg">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">
                    {founder.name}
                  </h3>
                  <p className="text-sm text-primary font-semibold">
                    {founder.title}
                  </p>
                </div>

                <ul className="space-y-3">
                  {founder.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-primary mt-1 flex-shrink-0">•</span>
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
