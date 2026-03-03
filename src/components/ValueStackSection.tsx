import { useState } from "react";
import { Check, GraduationCap, Bot, Copy, Wrench, FolderOpen, RefreshCw, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CTAPopup } from "@/components/CTAPopup";

type StackItem = {
  icon: React.ReactNode;
  title: string;
  description: string;
  isMain?: boolean;
};

const stackItems: StackItem[] = [
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Formação Completa — 75 Aulas Práticas em 10 Módulos",
    description: "Do zero ao avançado. Cada aula entrega uma implementação prática que funciona no seu negócio no mesmo dia. Uma consultoria de IA cobra R$ 300/hora — são 75 implementações que você faz sozinho.",
    isMain: true,
  },
  {
    icon: <Bot className="w-6 h-6" />,
    title: "Todos os Nossos Agentes de IA — Os Mesmos que Geraram R$ 2,5M",
    description: "Prontos para ativar. Os mesmos agentes que rodam nossa operação real — vendas, atendimento, conteúdo, análise de dados. Cada agente custaria R$ 500+ se contratado como serviço.",
  },
  {
    icon: <Copy className="w-6 h-6" />,
    title: 'Templates de Automação "Copie, Cole e Fature"',
    description: "Cada template substitui horas de trabalho manual. Nossos alunos reportam economia de 15-20 horas por semana após implementação. Funciona no n8n, Make.com, ManyChat e mais.",
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Arsenal IA: +100 Prompts, Códigos e Atalhos Testados em Batalha",
    description: "15 meses de pesquisa, teste e otimização — condensados para você ativar em minutos. Os recursos que nos economizam 6 horas por dia na operação.",
  },
  {
    icon: <FolderOpen className="w-6 h-6" />,
    title: "Arquivos Confidenciais — O Código-Fonte da Nossa Operação",
    description: "Funil completo, números reais de vendas, margens, automações exatas. O tipo de acesso que normalmente custa R$ 20.000+ em consultoria estratégica.",
  },
  {
    icon: <RefreshCw className="w-6 h-6" />,
    title: "1 Ano de Atualizações de Conteúdo",
    description: "Sempre que validamos um novo agente ou automação na nossa operação, adicionamos à formação. Você acompanha a evolução da IA em tempo real.",
  },
];

export const ValueStackSection = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Subtle emerald radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-emerald-500/[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* "If All" Close — rewritten with real anchors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16 space-y-6"
        >
          <p className="text-body-lg leading-relaxed text-[hsl(215,12%,65%)] text-center">
            Se tudo que você recebesse fossem as <span className="text-foreground font-semibold">75 aulas práticas</span> — as mesmas que nossos alunos premium pagaram R$ 2.997 para acessar — só isso já valeria R$ 997?
          </p>
          <p className="text-body-lg leading-relaxed text-[hsl(215,12%,65%)] text-center">
            Se tudo que você recebesse fossem os <span className="text-foreground font-semibold">agentes de IA que rodam nossa operação real</span> — agentes que custariam R$ 5.000+ se contratados como serviço — só isso já valeria R$ 997?
          </p>
          <p className="text-body-lg leading-relaxed text-[hsl(215,12%,65%)] text-center">
            Se tudo que você recebesse fossem os <span className="text-foreground font-semibold">templates de automação que levamos 15 meses para construir e testar</span> — cada um substituindo horas de trabalho manual — só isso já valeria R$ 997?
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
          <h2 className="text-heading-2 sm:text-heading-1 md:text-display font-bold mb-4">
            <span className="gradient-text">O Mesmo Conteúdo Que Alunos Premium Pagaram R$ 2.997 Para Acessar</span>
          </h2>
          <p className="text-body-lg text-[hsl(215,12%,65%)] max-w-2xl mx-auto">
            A versão Premium inclui chamadas ao vivo com Arthur e Lyria. Mas os alunos que mais cresceram foram os que mais executaram o conteúdo — não os que mais usaram a mentoria. Por isso criamos esta versão: o mesmo sistema, para quem tem a disciplina de implementar com autonomia.
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
              className={`card-base p-4 sm:p-5 md:p-6 flex items-start gap-3 sm:gap-4 ${
                item.isMain ? "border-emerald-500/30 bg-emerald-500/[0.03]" : ""
              }`}
            >
              {/* Icon */}
              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                item.isMain ? "bg-emerald-500 text-white" : "bg-[hsl(220,16%,12%)] text-emerald-400"
              }`}>
                {item.icon}
              </div>

              {/* Content */}
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
            </motion.div>
          ))}
        </div>

        {/* Price Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="card-elevated p-5 sm:p-8 md:p-12 text-center border-emerald-500/30">
            {/* Real anchor */}
            <p className="text-[hsl(215,12%,65%)] leading-relaxed max-w-2xl mx-auto mb-6">
              Nossos alunos Premium investiram R$ 2.997 pelo mesmo conteúdo + chamadas ao vivo. Você economiza R$ 2.000 porque não precisa do nosso tempo pessoal. Só do nosso sistema.
            </p>
            <p className="text-foreground font-semibold mb-8">
              Mesmo conteúdo. Mesmo sistema. Para quem executa com autonomia total.
            </p>

            {/* Final Price */}
            <p className="text-sm text-[hsl(215,10%,45%)] mb-2">Você paga hoje</p>
            <div className="mb-2">
              <span className="text-lg text-[hsl(215,10%,45%)] line-through">De R$ 2.997</span>
            </div>
            <p className="text-4xl sm:text-5xl md:text-6xl font-black gradient-text font-mono mb-2">R$ 997</p>
            <p className="text-base sm:text-lg text-[hsl(215,12%,65%)] mb-4">
              ou <span className="text-emerald-400 font-semibold">12x de R$ 97,42</span>
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
                GARANTIR ACESSO POR R$ 997
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
