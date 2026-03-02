import { useState } from "react";
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTAPopup } from "@/components/CTAPopup";

export const ProblemSolutionSection = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  const competitorItems = [
    "Automatizar 90% do processo de vendas",
    "Produzir conteúdo em escala para atrair clientes organicamente",
    "Produzir 100 criativos por dia para escalar o tráfego pago",
    "Reduzir custos operacionais e maximizar o lucro",
    "Analisar métricas e otimizar funis como um analista de dados profissional",
    "E muito mais…"
  ];

  return (
    <section className="section-padding bg-background relative overflow-hidden" data-section="problem-solution">
      {/* Subtle ambient glow instead of MatrixBackground */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/[0.02] rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Competitors Section */}
        <div className="text-center mb-16">
          <h2 className="text-heading-1 md:text-display font-bold mb-8 leading-tight">
            Enquanto Você Lê Esta Página, Seus Concorrentes Estão Usando Robôs Para:
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {competitorItems.map((item, i) => (
              <div key={i} className="card-base p-6 group">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Zap className="w-4 h-4 text-emerald-400" />
                  </div>
                  <p className="text-foreground/90 font-medium leading-relaxed text-left">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Problem Statement */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="card-elevated p-8 md:p-10 border-emerald-500/20 mb-8">
            <div className="space-y-6">
              <p className="text-lg md:text-xl leading-relaxed text-[hsl(215,12%,65%)]">
                Se você se sente perdido com tantas ferramentas ou frustrado por não conseguir transformar o potencial da IA em lucro real, nós entendemos. O problema não é você — é a falta de um sistema estruturado.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-[hsl(215,12%,65%)]">
                Tentar usar a IA sem um método validado por empresas que já escalaram é como tentar montar um quebra-cabeça no escuro. Você gasta tempo, dinheiro e energia para, no fim, continuar no mesmo lugar.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-foreground font-semibold">
                A maioria tenta, mas falha por não ter um caminho validado e um sistema estruturado.
              </p>
            </div>
          </div>

          {/* Cost of Inaction */}
          <div className="card-base p-8 border-l-4 border-l-red-500/60">
            <p className="text-lg md:text-xl leading-relaxed text-[hsl(215,12%,65%)]">
              Se você continua no modo manual por mais 6 meses, quanto vai perder em vendas que poderiam ser automatizadas? Quanto vai gastar em funcionários fazendo trabalho que um agente de IA faz em segundos?{" "}
              <span className="text-emerald-400 font-semibold">O custo de NÃO agir é infinitamente maior que R$ 997.</span>
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="flex flex-col items-center gap-3">
            <Button
              onClick={() => setPopupOpen(true)}
              className="relative overflow-hidden bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-base md:text-lg px-10 md:px-14 py-4 md:py-5 h-auto rounded-xl shadow-[0_4px_20px_rgba(16,185,129,0.3)] hover:shadow-[0_8px_30px_rgba(16,185,129,0.45)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              QUERO PARAR DE PERDER TEMPO
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <p className="text-sm text-[hsl(215,10%,45%)]">
              Acesso imediato + Garantia de 7 dias
            </p>
          </div>
        </div>

        {/* Solution / Authority Section */}
        <div className="max-w-5xl mx-auto mt-24">
          <h2 className="text-heading-1 md:text-display font-bold mb-8 text-center leading-tight">
            A Formação de Quem Construiu Resultados Reais —{" "}
            <span className="gradient-text">Sem Vender Ilusões</span>
          </h2>

          <div className="space-y-8">
            <p className="text-lg md:text-xl leading-relaxed text-[hsl(215,12%,65%)]">
              Somos um casal de músicos, não de programadores. Quando começamos, não sabíamos nada de IA. Tentamos consultorias genéricas, investimos em ferramentas caras, contratamos equipes que prometeram resultados e entregaram planilhas.
            </p>

            <p className="text-lg md:text-xl leading-relaxed text-[hsl(215,12%,65%)]">
              Enquanto muitos "gurus" enriquecem vendendo promessas vazias, nós fizemos o oposto: montamos um negócio do zero e, em apenas 15 meses, alcançamos{" "}
              <span className="text-emerald-400 font-semibold">R$ 2,5 milhões em vendas</span> de infoprodutos de música — um dos mercados onde o público é mais resistente a investir. Nosso produto se tornou o único curso de violão com 5 estrelas entre os TOP 10 da Hotmart.
            </p>

            <div className="card-elevated p-8 md:p-10 border-emerald-500/30">
              <p className="text-lg md:text-xl leading-relaxed text-foreground font-semibold">
                Mas aqui está o ponto que muda tudo:
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-[hsl(215,12%,65%)] mt-4">
                <span className="text-emerald-400 font-bold">Percebemos que não foi a mentoria que nos fez chegar a R$ 2,5 milhões. Foi o SISTEMA.</span> Os agentes de IA. As automações. Os templates. O passo a passo que criamos e seguimos religiosamente. A mentoria foi só cereja no bolo — o bolo é o sistema. E agora estamos entregando esse bolo inteiro para você.
              </p>
            </div>

            <p className="text-lg md:text-xl leading-relaxed text-[hsl(215,12%,65%)]">
              Documentamos cada agente, cada automação, cada workflow que usamos na operação real. R$ 2,5 milhões em 15 meses, trabalhando menos de 30 minutos por dia. Agora estamos entregando esse sistema inteiro para você implementar com{" "}
              <span className="text-emerald-400 font-semibold">autonomia total</span>.
            </p>
          </div>
        </div>
      </div>

      <CTAPopup open={popupOpen} onOpenChange={setPopupOpen} />
    </section>
  );
};
