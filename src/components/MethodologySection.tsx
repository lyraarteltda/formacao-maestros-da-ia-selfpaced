import { useState } from "react";
import { Wrench, TrendingUp, Bot, Coins, CheckCircle, ChevronDown, ChevronUp, Calendar, Star, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CTAPopup } from "@/components/CTAPopup";

export const MethodologySection = () => {
  const [showFullCurriculum, setShowFullCurriculum] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);

  const transformationBlocks = [
    {
      icon: Wrench,
      weeks: "MÓDULOS 1-3",
      title: "FUNDAMENTOS + PRIMEIRO AGENTE",
      description: "Configure seu ambiente e tenha seu primeiro agente autônomo funcionando em 24 horas",
      includes: "Setup completo + Primeiro agente ativo"
    },
    {
      icon: TrendingUp,
      weeks: "MÓDULOS 4-6",
      title: "MARKETING & VENDAS AUTÔNOMOS",
      description: "Agentes de conteúdo, tráfego e vendas trabalhando no piloto automático",
      includes: "Agente de Vendas WhatsApp + Pipeline automatizado"
    },
    {
      icon: Bot,
      weeks: "MÓDULOS 7-8",
      title: "AGENTES AVANÇADOS + ESCALA",
      description: "Agentes com memória, contexto e personalização — sua orquestra completa",
      includes: "Agentes inteligentes + Segundo cérebro operacional"
    },
    {
      icon: Coins,
      weeks: "MÓDULOS 9-10",
      title: "DASHBOARD CEO + MONETIZAÇÃO",
      description: "Visão executiva em tempo real e operação no piloto automático total",
      includes: "Dashboard completo + Estratégia de monetização"
    }
  ];

  const weeklyContent = [
    {
      week: 1,
      title: "Fundamentos da IA e Setup Estratégico",
      outcome: "Você sai com: Ambiente configurado + primeiro agente autônomo funcionando em 24 horas",
      badge: null,
      items: ["Fundamentos da IA: Como funciona, onde aplicar e oportunidades de lucro", "Visão estratégica: Como usar IA como vantagem competitiva", "Setup do Ambiente: Configure contas, ferramentas e integrações", "Plataformas Essenciais: Make, n8n", "Primeira Automação: Aprenda a implementar seu primeiro workflow do zero dentro do seu negócio"]
    },
    {
      week: 2,
      title: "Automações Básicas e Primeiros Resultados",
      outcome: "Você sai com: Automações rodando e economizando tempo real",
      badge: null,
      items: ["Ferramentas e Plataformas de IA/Automação: OpenRouter, Fal.ai, Manychat, Metricool, Airtable…", "Engenharia de Prompt: Entenda a estrutura ideal para gerar resultados 10x melhores", "Automação Nível 2: Crie automações mais elaboradas e coloque-as para trabalhar por você"]
    },
    {
      week: 3,
      title: "Arsenal de Ferramentas de IA",
      outcome: "Você sai com: Suas próprias ferramentas de IA construídas e operando",
      badge: "MAIS POPULAR",
      items: ["TOP 15 Ferramentas de IA: Lovable, Netlify, GitHub, 21st.dev, ChatGPT, Claude, Gemini, Grok, VEO3, Runway… (atualizadas frequentemente)", "Assistentes Personalizados: Crie assistentes específicos para seu negócio com GPTs e Projetos (Claude)", "Automação de Postagem: Reduza o trabalho de redes sociais ao máximo", "Templates Prontos: Copie e cole automações que já validamos"]
    },
    {
      week: 4,
      title: "Marketing Automatizado - Fundamentos",
      outcome: "Você sai com: Pipeline de conteúdo automatizado publicando sem você",
      badge: null,
      items: ["Funil de Marketing Automatizado: Da captação à conversão", "Produção de vídeos com IA: VEO3, Runway, HeyGen…", "100% da Produção de Conteúdo Automatizada: Instagram, TikTok, YouTube"]
    },
    {
      week: 5,
      title: "Marketing Automatizado - Avançado",
      outcome: "Você sai com: Agentes inteligentes ativos no seu fluxo de trabalho",
      badge: null,
      items: ["Análise Qualificatória: IA para selecionar Smart Leads pós-formulários", "Agente de Gestão de Tráfego: Facebook Ads otimizado automaticamente por IA"]
    },
    {
      week: 6,
      title: "Sales Automation e CRM Inteligente",
      outcome: "Você sai com: Agente de Vendas no WhatsApp qualificando e vendendo 24/7",
      badge: "MAIOR ROI",
      items: ["Agente SDR com IA: Prospecção e qualificação automatizada", "Recuperação de Carrinho: Converta clientes perdidos automaticamente", "CRM Inteligente: Abordagem e segmentação automática de leads", "Follow-up Personalizado: Mensagens customizadas em escala", "Chatbot com voz: Clone sua voz ou gere respostas automáticas e personalizadas em áudio para seus clientes"]
    },
    {
      week: 7,
      title: "Agentes Inteligentes e Assistentes Avançados",
      outcome: "Você sai com: Agentes com memória, contexto e personalização",
      badge: null,
      items: ["Agente de Vendas Completo: Da apresentação ao fechamento", "Assistente de Atendimento: Suporte Personalizado 24/7 com IA", "Databases Inteligentes (Vetoriais) e RAG: Armazenamento de conversas para respostas humanizadas"]
    },
    {
      week: 8,
      title: "Sistemas de Escala e Otimização",
      outcome: "Você sai com: Avatares de IA e segundo cérebro operacional",
      badge: null,
      items: ["Sistemas de Escala: Multiplique resultados sem aumentar equipe", "Otimização Contínua: IA que analisa e melhora seus processos automaticamente", "Relatório de Desempenho Automatizado: Monitore o desempenho de sua equipe e seus agentes"]
    },
    {
      week: 9,
      title: "Business Intelligence e Dashboard Executivo",
      outcome: "Você sai com: Dashboard com métricas em tempo real — visão de CEO",
      badge: null,
      items: ["BI com IA Avançado: Análises preditivas da operação com sugestões automáticas de otimização, projeções de receita e identificação de gargalos", "Dashboard CEO Completo: Métricas em tempo real, KPIs automatizados, alertas inteligentes e relatórios executivos que se geram sozinhos", "Conselho de IA (AI Board): Crie um board de diretores AI para receber insights estratégicos, análise de cenários e recomendações de crescimento", "Análise Competitiva Automatizada: Monitore concorrentes, preços e tendências de mercado automaticamente"]
    },
    {
      week: 10,
      title: "Monetização e Aquisição de Clientes",
      outcome: "Você sai com: Operação no piloto automático + estratégia de monetização ativa",
      badge: "AVANÇADO",
      items: ["Prospecção de Clientes Automatizada: Como buscar clientes para sua empresa/nicho de forma 100% automatizada", "Pitch de Vendas: Apresentações com IA que convertem", "Folder de Projetos: Acesso exclusivo ao nosso formulário com propostas de empresas buscando automatizar seus negócios"]
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
            O Roteiro Exato Que Transformou R$ 2.300/Mês em{" "}
            <span className="gradient-text">R$ 2,5 Milhões</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-3">
            Cada módulo entrega agentes e automações funcionando no seu negócio — no seu ritmo. Você não estuda IA. Você INSTALA funcionários digitais.
          </p>
          <span className="inline-block text-sm font-bold text-primary bg-primary/10 px-4 py-2 rounded-full">
            10 Módulos · O Framework Maestro Completo de Agentes Autônomos
          </span>
        </div>

        {/* 4 Transformation Blocks */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {transformationBlocks.map((block, index) => (
            <motion.div
              key={index}
              className="bg-card p-6 rounded-xl border border-border/50 hover:border-primary/30 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-primary rounded-lg flex-shrink-0">
                  <block.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {block.weeks}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{block.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">{block.description}</p>
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <CheckCircle className="w-4 h-4" />
                    <span className="font-medium">Inclui: {block.includes}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expandable Full Curriculum */}
        <div className="max-w-4xl mx-auto mb-10">
          <button
            onClick={() => setShowFullCurriculum(!showFullCurriculum)}
            className="w-full bg-card hover:bg-muted/50 border border-border rounded-xl p-4 flex items-center justify-center gap-2 transition-all group"
          >
            {showFullCurriculum ? (
              <ChevronUp className="w-5 h-5 text-primary" />
            ) : (
              <ChevronDown className="w-5 h-5 text-primary" />
            )}
            <span className="font-medium text-foreground">
              {showFullCurriculum ? "Ocultar currículo detalhado" : "▼ Ver currículo completo — 10 módulos detalhados"}
            </span>
          </button>

          <AnimatePresence>
            {showFullCurriculum && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-bold text-foreground">O Framework Maestro — 10 Módulos</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">
                    Cada módulo entrega agentes funcionando. Você tem 1 ano completo para implementar no seu ritmo.
                  </p>
                  
                  {weeklyContent.map((content, index) => (
                    <div key={index} className="bg-muted/30 p-4 rounded-lg border border-border/30">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-gradient-primary rounded-lg flex-shrink-0">
                          <span className="text-white font-bold text-sm">{String(content.week).padStart(2, '0')}</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <h4 className="font-bold text-foreground">{content.title}</h4>
                            {content.badge && (
                              <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full flex items-center gap-1">
                                {content.badge === "MAIS POPULAR" && <Star className="w-3 h-3" />}
                                {content.badge === "MAIOR ROI" && <TrendingUp className="w-3 h-3" />}
                                {content.badge === "AVANÇADO" && <Zap className="w-3 h-3" />}
                                {content.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-primary font-semibold mb-2">{content.outcome}</p>
                          <ul className="space-y-1">
                            {content.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start gap-2 text-sm">
                                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {["Novos Agentes Mensais", "Automações Atualizadas", "1 Ano de Acesso"].map((tag) => (
            <span key={tag} className="text-sm font-medium text-primary bg-primary/10 border border-primary/20 px-4 py-2 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            variant="cta"
            size="xl"
            className="w-full md:w-auto text-sm md:text-lg px-4 md:px-10"
            onClick={() => setPopupOpen(true)}
          >
            QUERO CONSTRUIR MEU EXÉRCITO DE AGENTES
          </Button>
        </div>
      </div>

      <CTAPopup open={popupOpen} onOpenChange={setPopupOpen} />
    </section>
  );
};
