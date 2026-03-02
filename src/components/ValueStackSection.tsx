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
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Formação Completa — 75 Aulas Práticas em 10 Módulos",
    description: "Do zero ao avançado: fundamentos de IA, automações, agentes inteligentes, marketing automatizado, vendas, CRM, dashboards, monetização. Cada aula entrega uma habilidade aplicável no mesmo dia.",
    value: 4997,
    isMain: true,
  },
  {
    icon: <Bot className="w-6 h-6" />,
    title: "Todos os Nossos Agentes de IA — Prontos Para Usar (ou Revender)",
    description: "Agente Copywriter, Gestor de Tráfego, Recuperador de Carrinho, Suporte Automático, Dashboard Inteligente, Analista de Dados, Prospector de Clientes, Roteirista, Gerador de Vídeos, Automatizador de Postagens e mais. Cada agente custaria R$ 500+ se contratado como serviço.",
    value: 2997,
  },
  {
    icon: <Copy className="w-6 h-6" />,
    title: 'Templates de Automação "Copie, Cole e Fature"',
    description: "Automações prontas para Marketing, Vendas, Operações e CRM. Copia o template, cola na sua ferramenta, e ativa. Funciona no n8n, Make.com, ManyChat e mais.",
    value: 1497,
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Arsenal IA Completo: +100 Ferramentas, Prompts e Códigos",
    description: "A coleção completa de ferramentas que usamos na operação diária. Prompts otimizados, códigos testados, e atalhos que economizam dezenas de horas de pesquisa.",
    value: 997,
  },
  {
    icon: <FolderOpen className="w-6 h-6" />,
    title: "Arquivos Confidenciais — Os Bastidores de R$ 2,5 Milhões",
    description: "Todos os sistemas, automações, estratégias e números reais da nossa empresa. A mesma operação que nos demanda menos de 30 minutos por dia. Acesso total. Sem filtro.",
    value: 2997,
  },
  {
    icon: <RefreshCw className="w-6 h-6" />,
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
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Subtle emerald radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-emerald-500/[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* "If All" Close */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16 space-y-6"
        >
          <p className="text-body-lg leading-relaxed text-[hsl(215,12%,65%)] text-center">
            Se tudo que você recebesse fossem as <span className="text-foreground font-semibold">75 aulas práticas</span>, com implementação passo a passo — valeria R$ 997?
          </p>
          <p className="text-body-lg leading-relaxed text-[hsl(215,12%,65%)] text-center">
            Se tudo que você recebesse fossem os <span className="text-foreground font-semibold">agentes de IA prontos para usar</span> na sua operação — valeria R$ 997?
          </p>
          <p className="text-body-lg leading-relaxed text-[hsl(215,12%,65%)] text-center">
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
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium tracking-wide uppercase mb-6">
            O Que Está Incluído
          </span>
          <h2 className="text-heading-1 md:text-display font-bold mb-4">
            <span className="gradient-text">Veja Tudo Que Você Recebe Hoje</span>
          </h2>
          <p className="text-body-lg text-[hsl(215,12%,65%)] max-w-2xl mx-auto">
            Tudo que usamos para construir uma operação de R$ 2,5 milhões — documentado, organizado e pronto para você implementar com independência.
          </p>
        </motion.div>

        {/* Value Stack */}
        <div className="space-y-3 mb-10">
          {stackItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className={`card-base p-5 md:p-6 flex items-start gap-4 ${
                item.isMain ? "border-emerald-500/30 bg-emerald-500/[0.03]" : ""
              }`}
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                item.isMain ? "bg-emerald-500 text-white" : "bg-[hsl(220,16%,12%)] text-emerald-400"
              }`}>
                {item.icon}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-bold text-base md:text-lg mb-1 ${
                      item.isMain ? "text-emerald-400" : "text-foreground"
                    }`}>
                      {item.title}
                    </h3>
                    <p className="text-sm text-[hsl(215,12%,65%)] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <span className="text-lg font-semibold text-[hsl(215,10%,45%)] line-through whitespace-nowrap font-mono">
                    {formatCurrency(item.value)}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Total and Investment */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="card-elevated p-8 md:p-12 text-center border-emerald-500/30">
            {/* Total crossed out */}
            <p className="text-sm text-[hsl(215,10%,45%)] uppercase tracking-wider mb-2">Valor Total</p>
            <p className="text-3xl md:text-4xl font-bold text-[hsl(215,10%,45%)] line-through mb-6 font-mono">
              {formatCurrency(totalValue)}
            </p>

            {/* Divider */}
            <div className="w-16 h-px bg-emerald-500/30 mx-auto mb-6" />

            {/* Context */}
            <p className="text-[hsl(215,12%,65%)] leading-relaxed max-w-2xl mx-auto mb-6">
              Nossos alunos da versão Premium investiram R$ 2.997 para ter acesso a este mesmo conteúdo + acompanhamento ao vivo com Arthur e Lyria. Hoje, você pode acessar 100% do conteúdo, dos agentes e das automações — no seu ritmo — por apenas R$ 997.
            </p>
            <p className="text-foreground font-semibold mb-8">
              Mesmo conteúdo. Mesmo sistema. Para quem executa com autonomia total.
            </p>

            {/* Final Price */}
            <p className="text-sm text-[hsl(215,10%,45%)] mb-2">Você paga hoje</p>
            <div className="mb-2">
              <span className="text-lg text-[hsl(215,10%,45%)] line-through">De R$ 2.997</span>
            </div>
            <p className="text-5xl md:text-6xl font-black gradient-text font-mono mb-2">R$ 997</p>
            <p className="text-lg text-[hsl(215,12%,65%)] mb-4">
              ou <span className="text-emerald-400 font-semibold">12x de R$ 97,42</span>
            </p>

            {/* Below-price comparison */}
            <p className="text-[hsl(215,12%,65%)] text-sm mb-6">
              R$ 97 por mês — menos que um jantar. Menos que uma única ferramenta de IA por 2 meses.
            </p>

            {/* Scarcity */}
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-5 py-2 mb-8">
              <span className="text-amber-400/80 font-semibold text-sm">
                Preço de lançamento: R$ 997. Após o encerramento, o valor sobe para R$ 1.497.
              </span>
            </div>

            {/* CTA */}
            <div className="flex flex-col items-center gap-3">
              <Button
                onClick={() => setPopupOpen(true)}
                className="w-full max-w-md bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-base md:text-lg py-5 h-auto rounded-xl shadow-[0_4px_20px_rgba(16,185,129,0.3)] hover:shadow-[0_8px_30px_rgba(16,185,129,0.45)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                QUERO O SISTEMA COMPLETO
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <p className="text-sm text-[hsl(215,10%,45%)]">
                Garantia incondicional de 7 dias — se não for para você, devolvemos 100%.
              </p>
            </div>

            {/* Offer Checklist */}
            <div className="mt-8 pt-6 border-t border-emerald-500/10 text-left max-w-md mx-auto">
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
                <div key={i} className="flex items-center gap-2.5 py-1.5">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span className="text-sm text-foreground/80">{item}</span>
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
