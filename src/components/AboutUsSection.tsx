import { motion } from "framer-motion";

export const AboutUsSection = () => {
  const founders = [
    {
      name: "Arthur Endo",
      title: "Co-Fundador | O Maestro Criativo",
      description: "Músico premiado com 3 CDs e turnês internacionais. Trouxe a criatividade, a disciplina de palco — e a prova viva de que você NÃO precisa ser técnico para dominar agentes de IA."
    },
    {
      name: "Lyria Zoccal",
      title: "Co-Fundadora | A Engenheira da Orquestra",
      description: "Administradora com experiência em grandes empresas de tech. Trouxe a mente analítica e a obsessão por processos — a engenheira por trás da orquestra."
    }
  ];

  const timeline = [
    { label: "Início", text: "Curso de violão + R$ 2.300/mês + frustração" },
    { label: "Mês 3", text: "Epifania: parar de programar e começar a ORQUESTRAR" },
    { label: "Mês 4", text: "Primeiro agente autônomo de vendas ativo" },
    { label: "Mês 6", text: "7 agentes trabalhando em sincronia" },
    { label: "Mês 15", text: "R$ 2,5 milhões faturados" },
    { label: "Agora", text: "Documentamos tudo e estamos entregando O Framework Maestro para você" }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background via-secondary/20 to-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight">
            Quem Somos: Um Músico e Uma Administradora Que Provaram Que Você Não Precisa Saber Programar Para Faturar R$ 2,5 Milhões Com IA
          </h2>
        </motion.div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto mb-16 space-y-6"
        >
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
            Antes de te contar o que funcionou, você precisa saber o que <span className="text-primary font-semibold">NÃO funcionou</span>. Porque a história real não é bonita — e esse é exatamente o nosso maior diferencial.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
            Arthur é músico premiado internacionalmente, com 3 CDs gravados e turnês pela Europa. Não sabia escrever uma linha de código. Lyria é formada em Administração, com anos de experiência em grandes empresas de tecnologia. Quando decidimos criar um negócio digital juntos, achávamos que nossa experiência combinada seria suficiente.
          </p>
          <p className="text-xl md:text-2xl font-bold text-foreground text-center">
            Estávamos errados.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
            Nosso primeiro ano foi um desastre silencioso. Contratamos uma consultoria de marketing digital por R$ 8.000 que nos entregou um PDF genérico e sumiu. Investimos R$ 12.000 em ferramentas de automação que nunca conseguimos integrar — ficaram ali, cobrando mensalidade e juntando poeira digital. Contratamos um freelancer de IA que prometeu 'revolucionar a operação' e entregou um chatbot que respondia 'Não entendi' para 70% das perguntas.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
            Arthur — o músico, lembra? — passou 3 meses tentando aprender a programar sozinho assistindo tutoriais no YouTube. Resultado: um script quebrado e frustração acumulada. Lyria, com toda sua experiência em tech, tentou montar um funil de vendas complexo que levou 6 semanas e converteu ZERO.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-primary font-semibold text-center">
            Nosso produto era um curso de VIOLÃO. Não de tecnologia. Não de IA.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
            Teve um momento em que Arthur sentou na mesa da sala e disse para Lyria: 'Talvez a gente devesse desistir dessa parte digital e eu voltar a dar aula presencial.' O faturamento naquele mês tinha sido R$ 2.300. As contas somavam R$ 7.000.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
            Mas Lyria disse algo que mudou tudo: <span className="text-primary font-semibold">'A gente não está errando na DIREÇÃO. Está errando no MÉTODO. A gente está tentando PROGRAMAR quando deveria estar ORQUESTRANDO.'</span>
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
            Nessa noite, tivemos a epifania que vale milhões: nós não precisávamos aprender a programar. Precisávamos aprender a <span className="text-primary font-semibold">REGER</span>. Como um maestro de orquestra.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
            Paramos de tentar 'usar ferramentas de IA' e começamos a <span className="text-primary font-semibold">CONSTRUIR O FRAMEWORK MAESTRO</span> — nosso sistema de agentes autônomos.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-foreground font-semibold">
            Em 30 dias, criamos nosso primeiro agente autônomo de vendas. Em 90 dias, tínhamos 7 agentes trabalhando em sincronia. Em 15 meses: R$ 2,5 milhões faturados. Trabalhando menos de 30 minutos por dia. Com um curso de VIOLÃO.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="grid gap-4">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-4 bg-card border border-border/50 rounded-xl p-4 hover:border-primary/50 transition-all duration-300"
              >
                <span className="bg-primary/20 text-primary font-bold text-sm px-3 py-1 rounded-full flex-shrink-0 mt-0.5">
                  {item.label}
                </span>
                <p className="text-muted-foreground font-medium">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Founders Cards */}
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
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">
                    {founder.name}
                  </h3>
                  <p className="text-sm text-primary font-semibold mb-4">
                    {founder.title}
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed">{founder.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
