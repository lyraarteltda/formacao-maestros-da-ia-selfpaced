import { 
  Building2, 
  Target, 
  Rocket, 
  Settings, 
  Map, 
  Bot, 
  Copy, 
  HelpCircle, 
  Users, 
  Wrench, 
  Handshake, 
  Globe, 
  Lock,
  UserCheck,
  Folder,
  Shield,
  DollarSign
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const TargetAudienceSection = () => {
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
      title: "Suporte Técnico",
      description: "Apoio de especialistas para resolver seus problemas técnicos."
    },
    {
      icon: Globe,
      title: "Networking",
      description: "Comunidade com os fundadores, empresários, especialistas e futuros líderes da IA no Brasil."
    }
  ];

  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto max-w-6xl">
        {/* Target Audience */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-12 text-center leading-tight">
            Esta Formação Foi Criada Especificamente Para:
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {profiles.map((profile, index) => (
              <div key={index} className="bg-background p-8 rounded-xl border border-border/50 hover:border-primary/20 transition-all duration-300">
                <div className="flex md:items-start md:gap-4 md:flex-row flex-col items-center text-center md:text-left">
                  <div className="p-3 bg-gradient-primary rounded-lg flex-shrink-0 md:mb-0 mb-4">
                    <profile.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{profile.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{profile.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Se você se identificou com pelo menos um desses perfis, a{" "}
              <span className="gradient-text font-semibold">Formação Maestros da IA</span> foi desenhada pensando exatamente em você. Não importa seu nível atual — vamos te levar ao próximo patamar.
            </p>
          </div>
        </div>

        {/* Ecosystem Section */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-12 text-center leading-tight">
            O Ecossistema Completo Para Você{" "}
            <span className="gradient-text">Escalar com IA e Automação</span>
          </h2>
          
          <div className="space-y-6">
            {ecosystemFeatures.map((feature, index) => (
              <div key={index} className="bg-background p-6 rounded-xl border border-border/50">
                <div className="flex md:items-start md:gap-4 md:flex-row flex-col items-center text-center md:text-left">
                  <div className="p-3 bg-gradient-primary rounded-lg flex-shrink-0 md:mb-0 mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlighted Features */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-12 text-center leading-tight">
            <span className="gradient-text animate-pulse">Bônus Exclusivos de Lançamento</span>
          </h2>
          <div className="space-y-6">
            {[
              {
                icon: UserCheck,
                title: "Mentoria com os Maestros",
                description: "Reuniões ao vivo conduzidas por Arthur e Lyria, com foco em atualizações de mercado, networking e direcionamento estratégico."
              },
              {
                icon: Wrench,
                title: "Arsenal IA Completo",
                description: "+100 ferramentas selecionadas, prompts e códigos para potencializar seus resultados."
              },
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
                title: "Valor Promocional Garantido",
                description: "Ao se tornar um dos 100 membros fundadores, você trava o preço mais baixo de toda a história da formação. Assim que o grupo dos fundadores for fechado, o valor irá subir entre 25% e 50% de forma definitiva."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gradient-primary p-1 rounded-xl">
                <div className="bg-background rounded-lg p-6">
                  <div className="flex md:items-start md:gap-4 md:flex-row flex-col items-center text-center md:text-left">
                    <div className="p-3 bg-gradient-primary rounded-lg flex-shrink-0 md:mb-0 mb-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Accelerated Execution */}
        <div className="bg-gradient-primary p-1 rounded-xl">
          <div className="bg-background rounded-lg p-8 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Execução Acelerada:</span> Aplique Desde o Primeiro Dia
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              Você não precisa esperar meses para ver os primeiros resultados. Nossa metodologia foi desenhada para acelerar sua execução desde o início, sem pular etapas cruciais. Você entra com a dedicação — nós entregamos o que há de mais avançado no Brasil em{" "}
              <span className="text-primary font-semibold">Inteligência Artificial aplicada a negócios</span>.
            </p>
          </div>
        </div>
        
        <div className="flex justify-center mt-8">
          <Button 
            variant="cta" 
            size="xl"
            onClick={() => {
              const pricingSection = document.querySelector('[data-section="pricing"]');
              pricingSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            GARANTIR VAGA
          </Button>
        </div>
      </div>
    </section>
  );
};