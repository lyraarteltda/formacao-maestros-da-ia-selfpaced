import { useState } from "react";
import { Calendar, Target, Users, TrendingUp, Clock, CheckCircle, ArrowRight, AlertTriangle, Crown, TrendingDown, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTAPopup } from "@/components/CTAPopup";

export const MethodologySection = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const weeklyContent = [
    {
      week: 1,
      title: "Fundamentos da IA e Setup Estratégico",
      items: [
        "Introdução - Boas-Vindas",
        "Fundamentos da IA: Como funciona, onde aplicar e oportunidades de lucro",
        "Como Transformar IA em Vantagem Competitiva",
        "A Ferramenta de Automações Mais Robusta do Mercado",
        "A Plataforma Mais Veloz Para Criar Seus Agentes de IA",
        "Preparando Seu Arsenal IA",
        "Introdução ao n8n",
        "Criando seu primeiro agente de IA [n8n]",
        "Como conectar ferramentas do google no n8n sem ter um domínio",
        "Introdução ao make.com",
        "Criando seu Email Assistant [make.com]",
        "Como conectar ferramentas do google no make sem ter um domínio"
      ]
    },
    {
      week: 2,
      title: "Automações e Primeiros Resultados",
      items: [
        "Como Mudamos o Jogo da Nossa Empresa com IA e Automação",
        "Engenharia de Prompt: Entenda a estrutura ideal para gerar resultados 10x melhores",
        "Crie sua primeira automação no Manychat",
        "Conceitos Essenciais: APIs, Webhooks e Https requests",
        "Use qualquer modelo de LLM no seu WhatsApp [n8n]",
        "Automatize suas Postagens nas Redes Sociais [make.com]",
        "As 2 Melhores Ferramentas Para Automatizar Seus Posts (Blotato x Metricool)"
      ]
    },
    {
      week: 3,
      title: "Arsenal de Ferramentas de IA",
      items: [
        "As Melhores LLMs",
        "3 Ferramentas que Substituem uma Equipe Inteira: Lovable, GitHub e Netlify",
        "Setup do Ambiente: Lovable, Github e Netlify",
        "Nosso Agente Copywriter (100% validado) - RAG Iniciante",
        "Criando sua Primeira Página no Lovable (HTML + Domínio Próprio)",
        "Como Editar Seus Sites no Lovable",
        "Captura de Leads com Pop-up no Lovable + n8n",
        "Como Usar Templates Prontos (Make, n8n, JSON)"
      ]
    },
    {
      week: 4,
      title: "Marketing Automatizado - Fundamentos",
      items: [
        "Estratégia de Crescimento Orgânico",
        "Como Fazer o Algoritmo Trabalhar Por Você",
        "Criando Seu Agente Roteirista",
        "A Habilidade que Você Precisa Dominar",
        "Geração de Vídeos com Automação"
      ]
    },
    {
      week: 5,
      title: "Marketing Automatizado (Avançado)",
      items: [
        "Construa Experiências Interativas no Lovable com Efeitos Profissionais",
        "Como Criar Formulários com Alta Taxa de Resposta",
        "Como Vender Mais com Um Time de Vendas Menor (Qualificação de Leads) - n8n",
        "Automatize a Extração de Dados do Gerenciador de Anúncios [Meta Ads] - make.com",
        "Lógica Condicional: A Base de Toda Decisão Automatizada",
        "O Gestor de Tráfego Que Nunca Dorme [Meta Ads]"
      ]
    },
    {
      week: 6,
      title: "Vendas e CRM Inteligente",
      items: [
        "Criando Sistemas de Automação do WhatsApp",
        "Como Extrair Informações da Web com Agentes Inteligentes",
        "O Que É Possível Fazer ao Conectar Agentes Detetives com Automações",
        "Como Projetar Um Sistema Autônomo de Captação de Clientes",
        "Chatbot [Nível 1] - Atendimento no Whatsapp",
        "Chatbot [Nível 2] - Escuta de Áudios e Mensagens de Voz com IA"
      ]
    },
    {
      week: 7,
      title: "Agentes Inteligentes e Assistentes Avançados",
      items: [
        "A Automação de Follow-up que Converte",
        "Chatbot [Nível 3] - Mais de 90% das pessoas pensarão que é uma pessoa",
        "Como Personalizar a Inteligência Artificial - RAG",
        "RAG {Nível 1.1} - Agente de Análise de Dados",
        "RAG {Nível 1.2} - Agente com Dados da Empresa",
        "Como Criar um Agente de RAG em 5 minutos"
      ]
    },
    {
      week: 8,
      title: "Sistemas de Escala e Otimização",
      items: [
        "Avatares de IA - O Futuro da Produção de Conteúdo",
        "Criando seu Primeiro Clone de IA",
        "Conteúdo 100% Automatizado com Avatares de IA",
        "Como Grandes Empresas Armazenam Informações?",
        "Alimentando sua Database (Pinecone)",
        "Criando um Segundo Cérebro Confiável - RAG {Nível 2}"
      ]
    },
    {
      week: 9,
      title: "BI e Dashboard Executivo",
      items: [
        "Carrosséis Para as Redes Sociais com IA",
        "Carrosséis que Se Publicam Sozinhos em Todas as Redes (Blotato)",
        "Posts de Forma 100% Automática (Metricool)",
        "Como Criar Seu Próprio CRM com IA (Supabase + Lovable)",
        "Sistema Inteligente que Captura e Organiza Leads no CRM",
        "Como Unir Todos os Dados da Empresa em 1 Só Lugar",
        "Automação Infinita + Extraindo os Dados da Meta",
        "Dashboard em Tempo Real - (1/2)"
      ]
    },
    {
      week: 10,
      title: "Monetização e Aquisição de Clientes",
      items: [
        "Pesquisa de Anúncios Lucrativos dos Concorrentes",
        "Anúncios Estáticos que Geram Vendas",
        "Relatório de Movimentos Estratégicos dos Competidores",
        "Sistema de Inteligência Competitiva 100% Completo",
        "A Dashboard Absoluta",
        "Seu Time de Agentes de IA",
        "Seu Assistente Pessoal de Alto Nível",
        "Um Exército de Agentes no Seu Whatsapp",
        "Memória Infinita Para Seus Agentes de IA",
        "O Conselho de Diretores AI Perfeito Para sua Empresa",
        "Encerramento"
      ]
    }
  ];
  return <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Methodology */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-center leading-tight">
            Como a Formação Funciona: <span className="gradient-text">Metodologia Testada e Comprovada</span>
          </h2>
          
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center mb-8">
              Nossa metodologia é baseada em implementação progressiva e resultados práticos. Cada módulo entrega conteúdo estratégico e ferramentas prontas para garantir que você não apenas aprenda, mas aplique e lucre com IA — no seu ritmo.
            </p>
            
            <div className="bg-card p-8 rounded-xl border border-border/50">
              <div className="flex items-center gap-4 mb-6">
                <Calendar className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">10 Módulos • 75 Aulas</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                As aulas são 100% práticas e aplicáveis. Elas são liberadas semana após semana para que você tenha tempo de absorver cada detalhe, aplicar na prática e internalizar o conteúdo antes de avançar. Seu objetivo a cada semana será garantir que o conteúdo foi compreendido e implementado antes da próxima etapa.
              </p>
              <p className="text-sm text-primary font-semibold">
                (Você tem 1 ano completo para absorver todo o conteúdo e implementar as estratégias no seu próprio ritmo)
              </p>
            </div>
          </div>
        </div>

        {/* Weekly Curriculum */}
        <div className="mb-12">
          <div className="grid gap-6">
            {weeklyContent.map((content, index) => <div key={index} className="bg-card p-6 rounded-xl border border-border/50">
                <div className="flex md:items-start md:gap-4 md:flex-row flex-col items-center text-center md:text-left">
                  <div className="p-3 bg-gradient-primary rounded-lg flex-shrink-0 md:mb-0 mb-4">
                    <span className="text-white font-bold text-lg">S{content.week}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-4">{content.title}</h3>
                    <ul className="space-y-2">
                      {content.items.map((item, itemIndex) => <li key={itemIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground leading-relaxed">{item}</span>
                        </li>)}
                    </ul>
                  </div>
                </div>
              </div>)}
          </div>
        </div>

        {/* Guaranteed Results */}
        <div className="mb-12">
          <div className="bg-gradient-primary p-1 rounded-xl">
            <div className="bg-background rounded-lg p-8 text-center">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Target className="w-8 h-8 text-primary" />
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Resultado Garantido em 10 Semanas</h2>
              </div>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                Ao final das 10 semanas, você terá todo o conhecimento necessário para gerir um negócio digital completamente automatizado, gerando receita recorrente, com pipeline de clientes qualificados e sistemas que funcionam 24/7. Não é teoria - é um{" "}
                <span className="text-primary font-semibold">sistema completo e validado</span> que já gerou milhões em receita.
              </p>
            </div>
          </div>
        </div>

        {/* Content Evolution Card */}
        <div className="mb-8">
          <div className="bg-gradient-primary p-1 rounded-2xl shadow-glow">
            <div className="bg-background rounded-xl p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-6 shadow-lg">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                  <span className="gradient-text">Conteúdo que Evolui</span> com a Tecnologia
                </h2>
              </div>

              <div className="max-w-4xl mx-auto space-y-6 mb-8">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  O universo da IA muda em ritmo acelerado. Por isso, a formação recebe{" "}
                  <span className="text-primary font-bold text-xl">atualizações constantes</span> com novos agentes validados em nossa operação, novas automações e ajustes estratégicos baseados nas mudanças do mercado. Você terá acesso a cada atualização durante seu ano de acesso.
                </p>

                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Nosso compromisso é mantê-lo sempre na vanguarda, com acesso às inovações mais recentes e ajustes estratégicos baseados nas mudanças do mercado.
                </p>
              </div>

              {/* Key Benefits Grid */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-card p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <TrendingUp className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground">Novos Agentes</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Validados na nossa operação e adicionados à formação</p>
                </div>

                <div className="bg-card p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Target className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground">Automações Atualizadas</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Templates ajustados conforme ferramentas evoluem</p>
                </div>

                <div className="bg-card p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground">1 Ano de Acesso</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Absorva tudo no seu ritmo, com independência</p>
                </div>
              </div>

              <div className="text-center space-y-6">
                <p className="text-xl md:text-2xl font-bold text-foreground leading-relaxed">
                  Você não fica apenas com o conhecimento de hoje — evolui junto com a tecnologia.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA After Curriculum */}
        <div className="text-center mt-12">
          <div className="flex flex-col items-center gap-3">
            <Button
              onClick={() => setPopupOpen(true)}
              className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-base md:text-lg px-8 md:px-10 py-5 md:py-6 h-auto rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-105"
            >
              QUERO O SISTEMA COMPLETO
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <p className="text-sm text-muted-foreground">
              Acesso imediato + Garantia de 7 dias
            </p>
          </div>
        </div>
      </div>

      <CTAPopup open={popupOpen} onOpenChange={setPopupOpen} />
    </section>;
};