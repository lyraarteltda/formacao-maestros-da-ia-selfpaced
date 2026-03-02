import { useState } from "react";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTAPopup } from "@/components/CTAPopup";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

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

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium tracking-wide uppercase mb-6">
            10 Módulos &middot; 75 Aulas Práticas
          </span>
          <h2 className="text-heading-1 md:text-display font-bold mb-6 leading-tight">
            Metodologia{" "}
            <span className="gradient-text">Testada e Comprovada</span>
          </h2>
          <p className="text-body-lg text-[hsl(215,12%,65%)] max-w-3xl mx-auto leading-relaxed">
            Cada módulo entrega conteúdo estratégico e ferramentas prontas para garantir que você não apenas aprenda, mas aplique e lucre com IA — no seu ritmo.
          </p>
        </div>

        {/* Progress bar showing 10 modules */}
        <div className="flex items-center gap-1 mb-12 max-w-2xl mx-auto">
          {weeklyContent.map((_, i) => (
            <div key={i} className="flex-1 h-1.5 rounded-full bg-emerald-500/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full" />
            </div>
          ))}
        </div>

        {/* Accordion Curriculum */}
        <Accordion type="single" collapsible className="space-y-3">
          {weeklyContent.map((content, index) => (
            <AccordionItem
              key={index}
              value={`module-${index}`}
              className="border-0 card-base p-0 overflow-hidden data-[state=open]:border-emerald-500/30 data-[state=open]:bg-[hsl(220,16%,8%)]"
            >
              <AccordionTrigger className="w-full p-0 hover:no-underline [&>svg]:text-[hsl(215,10%,45%)] [&>svg]:w-5 [&>svg]:h-5 [&>svg]:mr-5 [&>svg]:md:mr-6">
                <div className="flex items-center gap-4 md:gap-6 p-5 md:p-6 w-full">
                  {/* Module Number Badge */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-emerald-400 font-bold text-xl font-mono">{String(content.week).padStart(2, '0')}</span>
                  </div>

                  {/* Title + Meta */}
                  <div className="flex-1 text-left">
                    <h3 className="text-lg md:text-xl font-bold text-foreground mb-1">{content.title}</h3>
                    <p className="text-sm text-[hsl(215,10%,45%)]">{content.items.length} aulas</p>
                  </div>
                </div>
              </AccordionTrigger>

              {/* Expanded lesson list */}
              <AccordionContent className="px-5 md:px-6 pb-6">
                <div className="ml-[4.5rem] md:ml-[5.5rem] space-y-0">
                  {content.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-3 py-2.5 border-b border-border/30 last:border-0 group/item">
                      <div className="w-6 h-6 rounded-md bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs text-emerald-400/70 font-mono font-medium">{String(itemIndex + 1).padStart(2, '0')}</span>
                      </div>
                      <span className="text-foreground/80 leading-relaxed group-hover/item:text-foreground transition-colors">{item}</span>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Overview Card */}
        <div className="mt-12 card-elevated p-8 md:p-10 text-center border-emerald-500/20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Calendar className="w-7 h-7 text-emerald-400" />
            <h3 className="text-2xl font-bold text-foreground">1 Ano de Acesso Completo</h3>
          </div>
          <p className="text-[hsl(215,12%,65%)] leading-relaxed max-w-2xl mx-auto">
            As aulas são liberadas progressivamente para que você absorva cada detalhe. Você tem 1 ano completo para implementar tudo no seu ritmo.
          </p>
        </div>

        {/* Content Evolution badges */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4 text-center">
          <span className="text-sm text-[hsl(215,10%,45%)]">Conteúdo que evolui:</span>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
              Novos Agentes
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
              Automações Atualizadas
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
              1 Ano de Acesso
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
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
