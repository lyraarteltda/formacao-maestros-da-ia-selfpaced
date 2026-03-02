import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTAPopup } from "@/components/CTAPopup";
import MatrixBackground from "./MatrixBackground";

export const ProblemSolutionSection = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <section className="section-padding bg-background relative overflow-hidden" data-section="problem-solution">
      <MatrixBackground />
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Competitors Section */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 leading-tight">
            Enquanto Você Lê Esta Página, Seus Concorrentes Estão Usando Robôs Para:
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="p-6 rounded-lg bg-card border border-border/50">
              <p className="text-foreground font-medium">Automatizar 90% do processo de vendas</p>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border/50">
              <p className="text-foreground font-medium">Produzir conteúdo em escala para atrair clientes organicamente</p>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border/50">
              <p className="text-foreground font-medium">Produzir 100 criativos por dia para escalar o tráfego pago</p>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border/50">
              <p className="text-foreground font-medium">Reduzir custos operacionais e maximizar o lucro</p>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border/50">
              <p className="text-foreground font-medium">Analisar métricas e otimizar funis como um analista de dados profissional</p>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border/50">
              <p className="text-foreground font-medium">E muito mais…</p>
            </div>
          </div>
        </div>

        {/* Problem Statement */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-primary p-1 rounded-xl mb-8">
            <div className="bg-background rounded-lg p-8">
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-6">
                Se você se sente perdido com tantas ferramentas ou frustrado por não conseguir transformar o potencial da IA em lucro real, nós entendemos. O problema não é você — é a falta de um sistema estruturado.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-6">
                Tentar usar a IA sem um método validado por empresas que já escalaram é como tentar montar um quebra-cabeça no escuro. Você gasta tempo, dinheiro e energia para, no fim, continuar no mesmo lugar.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-foreground font-semibold">
                A maioria tenta, mas falha por não ter um caminho validado e um sistema estruturado.
              </p>
            </div>
          </div>

          {/* Cost of Inaction */}
          <div className="bg-card p-8 rounded-xl border border-border/50">
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              Se você continua no modo manual por mais 6 meses, quanto vai perder em vendas que poderiam ser automatizadas? Quanto vai gastar em funcionários fazendo trabalho que um agente de IA faz em segundos?{" "}
              <span className="text-primary font-semibold">O custo de NÃO agir é infinitamente maior que R$ 997.</span>
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="flex flex-col items-center gap-3">
            <Button
              onClick={() => setPopupOpen(true)}
              className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-base md:text-lg px-8 md:px-10 py-5 md:py-6 h-auto rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-105"
            >
              QUERO PARAR DE PERDER TEMPO
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <p className="text-sm text-muted-foreground">
              Acesso imediato + Garantia de 7 dias
            </p>
          </div>
        </div>

        {/* Solution / Authority Section */}
        <div className="max-w-5xl mx-auto mt-20">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-center leading-tight">
            A Formação de Quem Construiu Resultados Reais —{" "}
            <span className="gradient-text">Sem Vender Ilusões</span>
          </h2>

          <div className="space-y-8">
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              Somos um casal de músicos, não de programadores. Quando começamos, não sabíamos nada de IA. Tentamos consultorias genéricas, investimos em ferramentas caras, contratamos equipes que prometeram resultados e entregaram planilhas.
            </p>

            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              Enquanto muitos "gurus" enriquecem vendendo promessas vazias, nós fizemos o oposto: montamos um negócio do zero e, em apenas 15 meses, alcançamos{" "}
              <span className="text-primary font-semibold">R$ 2,5 milhões em vendas</span> de infoprodutos de música — um dos mercados onde o público é mais resistente a investir. Nosso produto se tornou o único curso de violão com 5 estrelas entre os TOP 10 da Hotmart.
            </p>

            <div className="bg-card p-8 rounded-xl border-2 border-primary/30">
              <p className="text-lg md:text-xl leading-relaxed text-foreground font-semibold">
                Mas aqui está o ponto que muda tudo:
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mt-4">
                <span className="text-primary font-bold">Percebemos que não foi a mentoria que nos fez chegar a R$ 2,5 milhões. Foi o SISTEMA.</span> Os agentes de IA. As automações. Os templates. O passo a passo que criamos e seguimos religiosamente. A mentoria foi só cereja no bolo — o bolo é o sistema. E agora estamos entregando esse bolo inteiro para você.
              </p>
            </div>

            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              Documentamos cada agente, cada automação, cada workflow que usamos na operação real. R$ 2,5 milhões em 15 meses, trabalhando menos de 30 minutos por dia. Agora estamos entregando esse sistema inteiro para você implementar com{" "}
              <span className="text-primary font-semibold">autonomia total</span>.
            </p>
          </div>
        </div>
      </div>

      <CTAPopup open={popupOpen} onOpenChange={setPopupOpen} />
    </section>
  );
};
