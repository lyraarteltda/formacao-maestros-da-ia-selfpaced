import { useState } from "react";
import { Check, GraduationCap, Bot, Copy, Wrench, FolderOpen, RefreshCw, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CTAPopup } from "@/components/CTAPopup";

type StackItem = {
  icon: React.ReactNode;
  title: string;
  description: string;
  value: number;
  isMain?: boolean;
};

const stackItems: StackItem[] = [
  {
    icon: <GraduationCap className="w-6 h-6 md:w-8 md:h-8" />,
    title: "Formação Completa — 75 Aulas Práticas em 10 Módulos",
    description: "Do zero ao avançado: fundamentos de IA, automações, agentes inteligentes, marketing automatizado, vendas, CRM, dashboards, monetização. Cada aula entrega uma habilidade aplicável no mesmo dia.",
    value: 4997,
    isMain: true,
  },
  {
    icon: <Bot className="w-6 h-6 md:w-8 md:h-8" />,
    title: "Todos os Nossos Agentes de IA — Prontos Para Usar (ou Revender)",
    description: "Agente Copywriter, Gestor de Tráfego, Recuperador de Carrinho, Suporte Automático, Dashboard Inteligente, Analista de Dados, Prospector de Clientes, Roteirista, Gerador de Vídeos, Automatizador de Postagens e mais. Cada agente custaria R$ 500+ se contratado como serviço.",
    value: 2997,
  },
  {
    icon: <Copy className="w-6 h-6 md:w-8 md:h-8" />,
    title: 'Templates de Automação "Copie, Cole e Fature"',
    description: "Automações prontas para Marketing, Vendas, Operações e CRM. Copia o template, cola na sua ferramenta, e ativa. Funciona no n8n, Make.com, ManyChat e mais.",
    value: 1497,
  },
  {
    icon: <Wrench className="w-6 h-6 md:w-8 md:h-8" />,
    title: "Arsenal IA Completo: +100 Ferramentas, Prompts e Códigos",
    description: "A coleção completa de ferramentas que usamos na operação diária. Prompts otimizados, códigos testados, e atalhos que economizam dezenas de horas de pesquisa.",
    value: 997,
  },
  {
    icon: <FolderOpen className="w-6 h-6 md:w-8 md:h-8" />,
    title: "Arquivos Confidenciais — Os Bastidores de R$ 2,5 Milhões",
    description: "Todos os sistemas, automações, estratégias e números reais da nossa empresa. A mesma operação que nos demanda menos de 30 minutos por dia. Acesso total. Sem filtro.",
    value: 2997,
  },
  {
    icon: <RefreshCw className="w-6 h-6 md:w-8 md:h-8" />,
    title: "Atualizações de Conteúdo por 1 Ano",
    description: "Novos agentes de IA, novas automações e ajustes estratégicos adicionados à formação conforme são validados na nossa operação real.",
    value: 997,
  },
];

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

export const ValueStackSection = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const totalValue = stackItems.reduce((acc, item) => acc + item.value, 0);

  return (
    <section className="section-padding bg-gradient-to-b from-background via-secondary/30 to-background">
      <div className="container mx-auto max-w-4xl">
        {/* "If All" Close */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16 space-y-6"
        >
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground text-center">
            Se tudo que você recebesse fossem as <span className="text-foreground font-semibold">75 aulas práticas</span>, com implementação passo a passo — valeria R$ 997?
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground text-center">
            Se tudo que você recebesse fossem os <span className="text-foreground font-semibold">agentes de IA prontos para usar</span> na sua operação — valeria R$ 997?
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground text-center">
            Se tudo que você recebesse fossem os <span className="text-foreground font-semibold">templates de automação copie e cole</span> — valeria R$ 997?
          </p>
          <p className="text-xl md:text-2xl leading-relaxed text-foreground font-bold text-center">
            Você está recebendo TUDO isso. E muito mais. Tudo por R$ 997.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Veja Tudo Que Você Recebe Hoje</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Tudo que usamos para construir uma operação de R$ 2,5 milhões — documentado, organizado e pronto para você implementar com independência.
          </p>
        </motion.div>

        {/* Value Stack */}
        <div className="space-y-4 md:space-y-6 mb-10">
          {stackItems.map((item, index) => {
            const runningTotal = stackItems
              .slice(0, index + 1)
              .reduce((acc, i) => acc + i.value, 0);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative rounded-2xl border ${
                  item.isMain
                    ? "border-primary bg-primary/10 shadow-lg shadow-primary/20"
                    : "border-border/50 bg-card/50 backdrop-blur-sm"
                } p-4 md:p-6`}
              >
                <div className="flex items-start gap-4">
                  {/* Checkmark */}
                  <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-5 h-5 md:w-6 md:h-6 text-primary" strokeWidth={3} />
                  </div>

                  {/* Icon */}
                  <div className={`flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center ${
                    item.isMain ? "bg-primary text-primary-foreground" : "bg-secondary text-primary"
                  }`}>
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-bold text-base md:text-lg lg:text-xl mb-1 ${
                      item.isMain ? "text-primary" : "text-foreground"
                    }`}>
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Value */}
                  <div className="flex-shrink-0 text-right">
                    <p className="text-lg md:text-xl lg:text-2xl font-bold text-muted-foreground line-through decoration-2">
                      {formatCurrency(item.value)}
                    </p>
                  </div>
                </div>

                {/* Running Total Indicator */}
                {index < stackItems.length - 1 && (
                  <div className="absolute -bottom-4 md:-bottom-5 right-6 md:right-8 bg-secondary border border-border rounded-full px-3 py-1 text-xs md:text-sm font-medium text-muted-foreground z-10">
                    Subtotal: {formatCurrency(runningTotal)}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Total and Investment */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Decorative Line */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-6 w-px h-12 bg-gradient-to-b from-transparent via-primary to-primary/50"></div>

          <div className="bg-gradient-to-br from-primary/20 via-card to-primary/10 border-2 border-primary rounded-3xl p-6 md:p-10 text-center shadow-2xl shadow-primary/20">
            {/* Total Value */}
            <div className="mb-6 pb-6 border-b border-primary/30">
              <p className="text-lg md:text-xl text-muted-foreground mb-2">
                VALOR TOTAL
              </p>
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-muted-foreground line-through decoration-4 decoration-destructive/60">
                {formatCurrency(totalValue)}
              </p>
            </div>

            {/* Context Anchor */}
            <div className="mb-6">
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Nossos alunos da versão Premium investiram R$ 2.997 para ter acesso a este mesmo conteúdo + acompanhamento ao vivo com Arthur e Lyria. Hoje, você pode acessar 100% do conteúdo, dos agentes e das automações — no seu ritmo — por apenas R$ 997.
              </p>
              <p className="text-foreground font-semibold mt-3">
                Mesmo conteúdo. Mesmo sistema. Para quem executa com autonomia total.
              </p>
            </div>

            {/* Investment Today */}
            <div className="mb-6">
              <p className="text-xl md:text-2xl text-foreground font-medium mb-3">
                VOCÊ PAGA HOJE
              </p>
              <div className="mb-2">
                <span className="text-xl text-muted-foreground line-through">De R$ 2.997</span>
              </div>
              <p className="text-lg text-muted-foreground mb-2">por apenas</p>
              <div className="flex items-center justify-center gap-2 md:gap-4 flex-wrap">
                <span className="text-5xl md:text-6xl lg:text-7xl font-bold gradient-text">
                  R$ 997
                </span>
              </div>
              <p className="text-lg md:text-xl text-muted-foreground mt-3">
                ou <span className="text-primary font-semibold">12x de R$ 97,42</span>
              </p>
            </div>

            {/* Below-price comparison */}
            <p className="text-muted-foreground mb-6">
              R$ 97 por mês — menos que um jantar. Menos que uma única ferramenta de IA por 2 meses.
            </p>

            {/* Scarcity */}
            <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 rounded-full px-5 py-2 md:px-6 md:py-3 mb-6">
              <span className="text-amber-500 font-bold text-sm md:text-base">
                Preço de lançamento: R$ 997. Após o encerramento, o valor sobe para R$ 1.497.
              </span>
            </div>

            {/* CTA */}
            <div className="flex flex-col items-center gap-3">
              <Button
                onClick={() => setPopupOpen(true)}
                className="w-full max-w-md bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-base md:text-lg py-6 h-auto rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-105"
              >
                QUERO O SISTEMA COMPLETO
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <p className="text-sm text-muted-foreground">
                Garantia incondicional de 7 dias — se não for para você, devolvemos 100%.
              </p>
            </div>

            {/* Offer Checklist */}
            <div className="mt-8 pt-6 border-t border-primary/20 text-left max-w-md mx-auto">
              {[
                "75 Aulas Práticas (10 Módulos Progressivos)",
                "Todos os Nossos Agentes de IA Prontos Para Usar",
                'Templates de Automação "Copie e Cole"',
                "Arsenal IA: +100 Ferramentas e Prompts",
                "Arquivos Confidenciais (Números Reais + Estratégias de R$ 2,5M)",
                "1 Ano de Acesso Completo",
                "Atualizações de Conteúdo (Novos Agentes e Automações)",
                "Garantia Incondicional de 7 Dias",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 py-1.5">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <CTAPopup open={popupOpen} onOpenChange={setPopupOpen} />
    </section>
  );
};
