import { useState } from "react";
import MatrixBackground from "./MatrixBackground";
import { AlertTriangle, Bot, FileText, Megaphone, HeadphonesIcon, BarChart3, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTAPopup } from "@/components/CTAPopup";

export const ProblemSolutionSection = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  const agentPoints = [
    {
      icon: Bot,
      text: "Agentes de vendas estão respondendo leads no WhatsApp às 3h da manhã — qualificando, negociando e fechando — sem humano envolvido. Cada agente desses substitui um vendedor de R$ 3.000/mês."
    },
    {
      icon: FileText,
      text: "Agentes de conteúdo estão produzindo e publicando em 3 plataformas simultaneamente — posts, legendas, hashtags e agendamento. Substituem um social media de R$ 2.500/mês."
    },
    {
      icon: Megaphone,
      text: "Agentes de tráfego estão criando 100 criativos por dia e otimizando campanhas em tempo real. Substituem um gestor de tráfego de R$ 4.000/mês."
    },
    {
      icon: HeadphonesIcon,
      text: "Agentes de suporte estão resolvendo 90% dos chamados sem interromper ninguém. Substituem um atendente de R$ 2.000/mês."
    },
    {
      icon: BarChart3,
      text: "Agentes de dados estão analisando métricas e gerando relatórios executivos automaticamente. Substituem um analista de R$ 3.500/mês."
    },
    {
      icon: Zap,
      text: "E novos agentes estão sendo ativados toda semana, ampliando a vantagem."
    }
  ];

  return (
    <section className="section-padding bg-background relative overflow-hidden" data-section="problem-solution">
      <MatrixBackground />
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Urgency Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-destructive/20 border border-destructive/30 rounded-full px-4 py-2 mb-6">
            <AlertTriangle className="w-4 h-4 text-destructive" />
            <span className="text-sm font-medium text-destructive">Atenção</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 leading-tight">
            Enquanto Você Lê Esta Página, Seus Concorrentes Já Têm{" "}
            <span className="gradient-text">Funcionários Digitais Trabalhando Por Eles</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
            {agentPoints.map((point, index) => (
              <div key={index} className="p-6 rounded-lg bg-card border border-destructive/20 hover:border-destructive/40 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-destructive/10 rounded-lg flex-shrink-0">
                    <point.icon className="w-6 h-6 text-destructive" />
                  </div>
                  <p className="text-foreground font-medium text-left">{point.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Cost comparison */}
          <div className="bg-gradient-primary p-1 rounded-xl max-w-4xl mx-auto mb-12">
            <div className="bg-background rounded-lg p-8 text-center">
              <p className="text-lg md:text-xl leading-relaxed text-foreground font-semibold">
                Faz a conta: só esses 5 agentes substituem <span className="gradient-text">R$ 15.000/mês</span> em folha de pagamento. <span className="gradient-text">R$ 180.000 por ano.</span>
              </p>
              <p className="text-xl md:text-2xl mt-4 gradient-text font-bold">
                O sistema inteiro custa R$ 997.
              </p>
            </div>
          </div>
        </div>

        {/* Solution Section */}
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              Se você já testou dezenas de ferramentas de IA e não conseguiu transformar isso em resultado real, nós entendemos — porque passamos exatamente pela mesma frustração. Gastamos dinheiro com ferramentas que prometiam revolução e entregavam confusão. O problema nunca foi você. O problema é que ferramentas isoladas não geram resultado. O que gera resultado é um <span className="text-primary font-semibold">SISTEMA</span> — onde cada agente tem uma função clara, cada automação está conectada à próxima, e tudo roda junto como uma orquestra afinada.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              Você não precisa de mais uma ferramenta. Você precisa do sistema que já gerou{" "}
              <span className="text-primary font-semibold">R$ 2,5 milhões em vendas reais</span>. Documentado. Testado. Pronto para copiar.
            </p>
            
            <div className="bg-card p-8 rounded-xl border border-border/50">
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                Cada dia que você passa sem implementar seus agentes, você perde horas da sua vida e dinheiro para concorrentes que já estão usando IA. Faça uma conta rápida: contratar um dev básico (R$ 5.000) e um copywriter (R$ 4.000) por apenas 1 mês = <span className="text-primary font-semibold">R$ 9.000</span>. O sistema inteiro — que faz o trabalho deles pronto e funcionando 24 horas — custa <span className="text-primary font-semibold">R$ 997</span>.
              </p>
              <p className="text-xl md:text-2xl font-bold text-foreground mt-4 text-center">
                O custo de <span className="gradient-text">NÃO agir</span> é 9x maior que o custo de agir.
              </p>
            </div>

            {/* CTA */}
            <div className="text-center pt-4">
              <Button 
                variant="cta" 
                size="xl" 
                className="w-full md:w-auto text-sm md:text-lg px-4 md:px-10"
                onClick={() => setPopupOpen(true)}
              >
                QUERO MEU EXÉRCITO DE FUNCIONÁRIOS DIGITAIS
              </Button>
              <p className="text-sm text-muted-foreground mt-3">
                Acesso imediato + Garantia de Execução de 90 dias
              </p>
            </div>
          </div>
        </div>
      </div>

      <CTAPopup open={popupOpen} onOpenChange={setPopupOpen} />
    </section>
  );
};
