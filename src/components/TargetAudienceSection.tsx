import { useState } from "react";
import {
  Building2,
  Target,
  Rocket,
  Settings,
  Map,
  Bot,
  Copy,
  HelpCircle,
  Globe,
  Lock,
  Folder,
  DollarSign,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTAPopup } from "@/components/CTAPopup";

export const TargetAudienceSection = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  const profiles = [
    {
      icon: Building2,
      title: "Empresários Visionários",
      description: "Você já tem um negócio e busca aumentar o lucro, diminuir o desgaste operacional e escalar sua empresa usando ferramentas de IA."
    },
    {
      icon: Target,
      title: "Experts e Criadores de Conteúdo",
      description: "Você produz conteúdo de qualidade e tem audiência, mas não consegue estruturar um negócio sólido e escalável. Precisa transformar conhecimento em receita recorrente."
    },
    {
      icon: Rocket,
      title: "Futuros Empreendedores da IA",
      description: "Você quer se especializar em IA e automação para vender serviços de alto valor para empresas. Busca uma oportunidade real no mercado que mais cresce no mundo."
    },
    {
      icon: Settings,
      title: "Empreendedores do Piloto Automático",
      description: "Seu objetivo é criar do zero sistemas que rodam sozinhos, gerando lucro consistente enquanto você conquista qualidade de vida, tempo para o que realmente importa e liberdade geográfica."
    }
  ];

  const ecosystemFeatures = [
    {
      icon: Map,
      title: "Formação prática e estruturada",
      description: "Um programa passo a passo, validado e focado em resultados para você usar IA e Automação para construir seu futuro."
    },
    {
      icon: Bot,
      title: "Agentes Prontos para Usar (ou Revender)",
      description: "Tenha acesso a TODOS OS NOSSOS AGENTES DE IA já validados e responsáveis por gerar milhões. Inclui: Agente Copywriter, Gestor de Tráfego, Recuperador de Carrinho, Suporte Automático, Dashboard Inteligente, Analista de Dados, Prospector de Clientes, Analista de Concorrência e Mercado, Roteirista, Gerador de Vídeos, Automatizador de Postagens e muito mais — com atualizações constantes, sempre que novos agentes forem testados e validados em nossa própria operação."
    },
    {
      icon: Copy,
      title: "Automações \"Copie e Cole\"",
      description: "Templates para aplicar IA em Marketing, Vendas, Operações, Suporte, etc."
    },
    {
      icon: HelpCircle,
      title: "Arsenal IA Completo",
      description: "+100 ferramentas selecionadas, prompts otimizados e códigos prontos para potencializar cada etapa do seu negócio."
    },
    {
      icon: Globe,
      title: "Atualizações Constantes",
      description: "Conteúdo atualizado com novos agentes validados, automações e ajustes estratégicos durante 1 ano de acesso."
    }
  ];

  return (
    <section className="section-padding bg-background relative">
      <div className="container mx-auto max-w-6xl">
        {/* Target Audience */}
        <div className="mb-24">
          <h2 className="text-heading-1 md:text-display font-bold mb-12 text-center leading-tight">
            Esta Formação Foi Criada Especificamente Para:
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {profiles.map((profile, index) => (
              <div key={index} className="card-base p-8 group hover:border-emerald-500/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <profile.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{profile.title}</h3>
                    <p className="text-[hsl(215,12%,65%)] leading-relaxed">{profile.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg md:text-xl text-[hsl(215,12%,65%)] max-w-4xl mx-auto leading-relaxed">
              Se você se identificou com pelo menos um desses perfis, a{" "}
              <span className="gradient-text font-semibold">Formação Maestros da IA</span> foi desenhada pensando exatamente em você. Não importa seu nível atual — vamos te levar ao próximo patamar.
            </p>
          </div>
        </div>

        {/* Ecosystem Section */}
        <div className="mb-24">
          <h2 className="text-heading-1 md:text-display font-bold mb-12 text-center leading-tight">
            O Ecossistema Completo Para Você{" "}
            <span className="gradient-text">Escalar com IA e Automação</span>
          </h2>

          <div className="space-y-4">
            {ecosystemFeatures.map((feature, index) => (
              <div key={index} className="card-base p-6 group hover:border-emerald-500/20">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <feature.icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-[hsl(215,12%,65%)] leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlighted Features */}
        <div className="mb-24">
          <h2 className="text-heading-1 md:text-display font-bold mb-12 text-center leading-tight">
            <span className="gradient-text">O Que Mais Está Incluído</span>
          </h2>
          <div className="space-y-4">
            {[
              {
                icon: Folder,
                title: "Folder de Projetos",
                description: "Acesso exclusivo ao nosso formulário com propostas de empresas buscando automatizar seus negócios (todos os dias inúmeras empresas preenchem nossa aplicação e atendemos apenas 5% delas)."
              },
              {
                icon: Lock,
                title: "Arquivos confidenciais",
                description: "Todos os sistemas, automações, estratégias e números da nossa empresa que nos demanda menos de 30 minutos por dia e faturou mais de 2,5 M nos últimos 12 meses."
              },
              {
                icon: DollarSign,
                title: "Preço de Lançamento: R$ 997",
                description: "Acesse 100% do conteúdo, agentes e automações por R$ 997. Após o encerramento da oferta de lançamento, o valor sobe para R$ 1.497."
              }
            ].map((feature, index) => (
              <div key={index} className="card-elevated p-6 md:p-8 border-emerald-500/20">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <feature.icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-[hsl(215,12%,65%)] leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Accelerated Execution */}
        <div className="card-elevated p-8 md:p-10 text-center border-emerald-500/20">
          <h2 className="text-heading-2 md:text-heading-1 font-bold mb-6 leading-tight">
            <span className="gradient-text">Execução Acelerada:</span> Aplique Desde o Primeiro Dia
          </h2>
          <p className="text-lg md:text-xl text-[hsl(215,12%,65%)] leading-relaxed max-w-4xl mx-auto">
            Você não precisa esperar meses para ver os primeiros resultados. Nossa metodologia foi desenhada para acelerar sua execução desde o início, sem pular etapas cruciais. Você entra com a dedicação — nós entregamos o que há de mais avançado no Brasil em{" "}
            <span className="text-emerald-400 font-semibold">Inteligência Artificial aplicada a negócios</span>.
          </p>
        </div>

        <div className="flex justify-center mt-8">
          <div className="flex flex-col items-center gap-3">
            <Button
              onClick={() => setPopupOpen(true)}
              className="relative overflow-hidden bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-base md:text-lg px-10 md:px-14 py-4 md:py-5 h-auto rounded-xl shadow-[0_4px_20px_rgba(16,185,129,0.3)] hover:shadow-[0_8px_30px_rgba(16,185,129,0.45)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              QUERO O SISTEMA COMPLETO
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <p className="text-sm text-[hsl(215,10%,45%)]">
              Acesso imediato + Garantia de 7 dias
            </p>
          </div>
        </div>
      </div>

      <CTAPopup open={popupOpen} onOpenChange={setPopupOpen} />
    </section>
  );
};
