import { Check, Gift, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export const ValueStackSection = () => {
  const trialCloses = [
    "Se tudo que você recebesse fosse o Agente de Vendas no WhatsApp — que substitui um vendedor de R$ 3.000/mês e trabalha 24 horas sem folga — só isso já valeria R$ 997? (Você sabe que sim. E a gente nem começou.)",
    "Se além disso você recebesse o Agente de Conteúdo que publica em 3 plataformas sozinho, o Agente de Suporte que resolve 90% dos chamados, e o Agente Dashboard que te dá visão de CEO em 1 tela... só isso já valeria R$ 997? (Outro sim. Continue.)",
    "Se além de TUDO isso você recebesse TODOS os outros agentes — Copywriter, Gestor de Tráfego, Recuperador de Carrinho, Prospector, Analista de Concorrência, Roteirista, Gerador de Vídeos — cada um substituindo um funcionário de R$ 2.000 a R$ 4.000/mês... só isso já valeria R$ 997? (A essa altura, a pergunta é quase absurda.)",
    "E se eu te dissesse que você recebe TUDO isso — mais os 10 módulos de implementação, mais os templates de automação, mais o Arsenal IA com +100 recursos testados, mais Os Arquivos Confidenciais da operação de R$ 2,5M, mais 1 ano de atualizações, mais os bônus exclusivos... Tudo. Por R$ 997. Uma vez. Sem mensalidade. Sem taxa. Sem surpresa."
  ];

  const deliverables = [
    {
      text: "O Framework Maestro: 11+ Agentes Autônomos de IA",
      subtitle: "Cada um substituindo um funcionário de R$ 2.000 a R$ 4.000/mês. Prontos para copiar e ativar. Primeiro agente rodando em 24 horas.",
      value: "R$ 354.000/ano em salários"
    },
    {
      text: "10 Módulos de Implementação Prática",
      subtitle: "Do zero ao piloto automático. Cada módulo entrega agentes funcionando.",
      value: "R$ 22.500 em consultoria"
    },
    {
      text: "Templates Copie, Cole e Ative",
      subtitle: "Automações prontas para n8n, Make, ManyChat e mais.",
      value: "R$ 39.000/ano"
    },
    {
      text: "Arsenal IA: +100 Recursos Testados",
      subtitle: "Prompts, códigos, atalhos otimizados em 15 meses de operação real.",
      value: "R$ 5.000 + 15 meses"
    },
    {
      text: "Os Arquivos Confidenciais de R$2,5M",
      subtitle: "Números reais, funil completo, margens, custos, prompts e scripts exatos de vendas.",
      value: "R$ 20.000+"
    },
    {
      text: "1 Ano de Atualizações",
      subtitle: "Novos agentes e automações sempre que validamos na operação.",
      value: "Inestimável"
    }
  ];

  const bonuses = [
    {
      text: "O Cofre de Projetos 'Copiar e Colar'",
      subtitle: "Pipeline de clientes buscando automação + projetos prontos para implementar em 15 minutos (primeiros 100 alunos)",
      value: "R$ 997"
    },
    {
      text: "Os Arquivos Confidenciais de R$2,5M: Prompts e Scripts Exatos",
      subtitle: "Bastidores completos incluindo erros, testes que falharam e os scripts reais que geraram vendas",
      value: "R$ 1.497"
    }
  ];

  return (
    <section className="py-8 md:py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-card via-background to-card">
      <div className="container mx-auto max-w-4xl">
        {/* Trial Closes */}
        <div className="space-y-6 mb-16">
          {trialCloses.map((text, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-card border border-border/50 rounded-xl p-6 md:p-8"
            >
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground italic">
                "{text}"
              </p>
            </motion.div>
          ))}
        </div>

        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary">O Que Está Incluído na Sua Formação</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            O Framework Maestro Completo —{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Pronto Para Copiar e Ativar
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A Formação te entrega a orquestra completa: todos os agentes, a partitura (módulos), e o manual do regente. Você tem TUDO para reger sua operação. Para quem quer Arthur e Lyria como regentes ao lado, ajustando cada agente em tempo real, existe a Mentoria Premium — mas o sistema é o mesmo. A decisão é só sobre velocidade e acompanhamento.
          </p>
        </motion.div>

        {/* Deliverables Stack */}
        <motion.div
          className="bg-card border border-border rounded-2xl overflow-hidden shadow-xl mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="p-6 md:p-8">
            <div className="space-y-4">
              {deliverables.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col md:flex-row items-start md:justify-between gap-2 md:gap-4 pb-4 border-b border-border/50 last:border-0 last:pb-0"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <div className="flex items-start gap-3 flex-1">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-green-500" />
                    </div>
                    <div className="flex-1">
                      <p className="text-foreground font-medium leading-tight">{item.text}</p>
                      <p className="text-muted-foreground text-sm mt-1">{item.subtitle}</p>
                    </div>
                  </div>
                  <span className="text-muted-foreground font-medium text-xs md:text-sm md:whitespace-nowrap">{item.value}</span>
                </motion.div>
              ))}
            </div>

            {/* Bonus Section */}
            <div className="mt-6 pt-6 border-t-2 border-dashed border-primary/30">
              <div className="flex items-center gap-2 mb-4">
                <Gift className="w-5 h-5 text-primary" />
                <span className="text-sm font-bold text-primary uppercase tracking-wide">Bônus Exclusivos</span>
                <span className="ml-auto bg-primary/20 text-primary text-xs font-bold px-2 py-1 rounded-full">
                  GRÁTIS HOJE
                </span>
              </div>
              <div className="space-y-3 bg-primary/5 rounded-xl p-4">
                {bonuses.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col md:flex-row items-start md:justify-between gap-2 md:gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.6 + 0.1 * index }}
                  >
                    <div className="flex items-start gap-3 flex-1">
                      <span className="text-xl mt-0.5">🎁</span>
                      <div>
                        <p className="text-foreground font-medium">{item.text}</p>
                        <p className="text-muted-foreground text-sm mt-1">{item.subtitle}</p>
                      </div>
                    </div>
                    <span className="text-muted-foreground font-medium text-xs md:text-sm md:whitespace-nowrap ml-9 md:ml-0">{item.value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Anchor */}
        <div className="bg-gradient-primary p-1 rounded-xl">
          <div className="bg-background rounded-lg p-6 md:p-8 text-center">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Investimento real para montar sozinho: <span className="text-destructive font-bold line-through">R$ 4.997 a R$ 9.997</span>
            </p>
            <p className="text-xl md:text-2xl gradient-text font-bold mt-2">
              Seu investimento com O Framework Maestro: R$ 997
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
