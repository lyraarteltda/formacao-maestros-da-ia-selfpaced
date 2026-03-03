import { 
  Briefcase, 
  UserCircle, 
  GraduationCap, 
  Building2, 
  Bot, 
  BookOpen, 
  Copy, 
  Wrench,
  FileText,
  RefreshCw,
  Gift,
  Lock,
  AlertTriangle
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const TargetAudienceSection = () => {
  const profiles = [
    {
      icon: Briefcase,
      title: "O Empresário Sobrecarregado",
      description: "Você já tem um negócio funcionando, mas trabalha 10, 12, 14 horas por dia. Sabe que IA poderia aliviar, mas não sabe por onde começar. Você não precisa de teoria — precisa de funcionários digitais prontos para plugar na sua operação. O Agente de Vendas responde leads no WhatsApp em 3 segundos. O Agente de Suporte resolve 90% dos chamados. Você supervisiona 30 minutos por dia."
    },
    {
      icon: UserCircle,
      title: "O Expert Que Não Escala",
      description: "Você produz conteúdo incrível, tem audiência, mas seu faturamento não reflete seu conhecimento. O Agente de Conteúdo cria, agenda e publica em 3 plataformas sem você tocar. O Agente Copywriter redige emails, legendas e scripts de venda. Você para de ser operador e vira estrategista."
    },
    {
      icon: GraduationCap,
      title: "O Futuro Profissional de IA",
      description: "Você viu a oportunidade: empresas de TODOS os tamanhos estão desesperadas por automação. Projetos de IA pagam R$ 3.000, R$ 5.000, R$ 10.000. A Formação te entrega agentes documentados que você pode replicar para clientes, e acesso ao nosso pipeline de empresas buscando automação."
    },
    {
      icon: Building2,
      title: "O Empreendedor do Piloto Automático",
      description: "Seu sonho é criar um negócio que roda sozinho enquanto você vive. O Framework Maestro completo faz exatamente isso: prospecta, qualifica, vende, atende, publica e reporta — tudo sem você. Você rege. Os agentes executam."
    }
  ];

  const deliverables = [
    {
      icon: Bot,
      title: "O Framework Maestro: 11+ Agentes Autônomos de IA",
      description: "Cada um substituindo um funcionário de R$ 2.000 a R$ 4.000/mês. Prontos para copiar e ativar. Seu primeiro agente roda nas primeiras 24 horas.",
      equivalent: "R$ 29.500/mês = R$ 354.000/ano"
    },
    {
      icon: BookOpen,
      title: "10 Módulos de Implementação Prática",
      description: "Do zero ao piloto automático. Cada módulo entrega agentes funcionando.",
      equivalent: "R$ 22.500"
    },
    {
      icon: Copy,
      title: "Templates 'Copie, Cole e Ative'",
      description: "Automações prontas para n8n, Make, ManyChat e mais. Nossos alunos reportam economia de 15 a 20 horas por semana.",
      equivalent: "R$ 39.000/ano"
    },
    {
      icon: Wrench,
      title: "Arsenal IA: +100 Recursos Testados",
      description: "Prompts, códigos, atalhos otimizados em 15 meses de operação real.",
      equivalent: "R$ 5.000 + 15 meses"
    },
    {
      icon: FileText,
      title: "Os Arquivos Confidenciais de R$2,5M",
      description: "Números reais, funil completo, margens, custos, prompts e scripts exatos de vendas.",
      equivalent: "R$ 20.000+"
    },
    {
      icon: RefreshCw,
      title: "1 Ano de Atualizações",
      description: "Novos agentes e automações sempre que validamos na operação.",
      equivalent: "Inestimável"
    }
  ];

  const bonuses = [
    {
      icon: Gift,
      title: "O Cofre de Projetos 'Copiar e Colar': Implemente Seu Primeiro Agente em 15 Minutos",
      value: "R$ 997",
      description: "Acesso ao nosso pipeline de empresas buscando automação com IA. Todos os dias dezenas de empresas preenchem nossa aplicação e atendemos apenas 5% delas. As outras 95%? São oportunidades reais para um Maestro como você.",
      scarcity: "Este bônus só está disponível para os primeiros 100 alunos desta turma."
    },
    {
      icon: Lock,
      title: "Os Arquivos Confidenciais de R$2,5M: Nossos Prompts e Scripts Exatos de Vendas",
      value: "R$ 1.497",
      description: "Não são apenas os números. São os ERROS. Os testes que falharam. As campanhas que perderam dinheiro. Nossos prompts exatos que geraram vendas reais. Os scripts de WhatsApp que convertem.",
      scarcity: null
    }
  ];

  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto max-w-6xl">
        {/* Target Audience */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center leading-tight">
            O Fato de Você Estar Aqui Já Te Coloca à Frente de{" "}
            <span className="gradient-text">99% do Mercado Brasileiro</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            A maioria dos empreendedores nem sabe que agentes autônomos existem. Você já está buscando soluções. Agora veja se você se reconhece:
          </p>
          
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
        </div>

        {/* Deliverables Section */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center leading-tight">
            Seu Exército de Funcionários Digitais —{" "}
            <span className="gradient-text">Com Nome, Função e Salário Que Você Economiza</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Cada agente abaixo faz o trabalho de um funcionário especializado. Você os recebe prontos para ativar — e nunca mais paga salário, férias ou 13º para essas funções.
          </p>
          
          <div className="space-y-6">
            {deliverables.map((item, index) => (
              <div key={index} className="bg-background p-6 rounded-xl border border-border/50">
                <div className="flex md:items-start md:gap-4 md:flex-row flex-col items-center text-center md:text-left">
                  <div className="p-3 bg-gradient-primary rounded-lg flex-shrink-0 md:mb-0 mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-2">{item.description}</p>
                    <span className="text-sm text-primary font-semibold">Equivalente: {item.equivalent}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Anchor text */}
          <div className="bg-gradient-primary p-1 rounded-xl mt-8">
            <div className="bg-background rounded-lg p-6 md:p-8 text-center">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Investimento real para montar tudo isso por conta própria: <span className="text-destructive font-bold line-through">R$ 4.997 a R$ 9.997</span>
              </p>
              <p className="text-xl md:text-2xl gradient-text font-bold mt-2">
                Seu investimento com O Framework Maestro: R$ 997
              </p>
            </div>
          </div>
        </div>

        {/* Bonus Section */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-12 text-center leading-tight">
            <span className="gradient-text animate-pulse">Bônus Exclusivos — Apenas Para Quem Agir Agora</span>
          </h2>
          <div className="space-y-6">
            {bonuses.map((bonus, index) => (
              <div key={index} className="bg-gradient-primary p-1 rounded-xl">
                <div className="bg-background rounded-lg p-6">
                  <div className="flex md:items-start md:gap-4 md:flex-row flex-col items-center text-center md:text-left">
                    <div className="p-3 bg-gradient-primary rounded-lg flex-shrink-0 md:mb-0 mb-4">
                      <bonus.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="text-lg font-bold text-foreground">{bonus.title}</h3>
                        <span className="text-sm text-primary font-bold bg-primary/10 px-2 py-1 rounded-full">Valor: {bonus.value}</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{bonus.description}</p>
                      {bonus.scarcity && (
                        <div className="flex items-center gap-2 mt-3 text-sm text-destructive font-medium">
                          <AlertTriangle className="w-4 h-4" />
                          <span>{bonus.scarcity}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bonus total */}
          <div className="text-center mt-8">
            <p className="text-lg text-muted-foreground">
              Valor total dos bônus: <span className="text-foreground font-bold line-through">R$ 2.494</span>
            </p>
            <p className="text-xl gradient-text font-bold mt-1">
              Seu custo: R$ 0 (incluído na Formação por tempo limitado)
            </p>
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
      </div>
    </section>
  );
};