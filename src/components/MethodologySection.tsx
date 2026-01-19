import { useState } from "react";
import { Calendar, Target, Users, TrendingUp, Clock, CheckCircle, ArrowRight, AlertTriangle, Crown, TrendingDown, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTAPopup } from "@/components/CTAPopup";

export const MethodologySection = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const weeklyContent = [{
    week: 1,
    title: "Fundamentos da IA e Setup Estratégico",
    items: ["Fundamentos da IA: Como funciona, onde aplicar e oportunidades de lucro", "Visão estratégica: Como usar IA como vantagem competitiva", "Setup do Ambiente: Configure contas, ferramentas e integrações", "Plataformas Essenciais: Make, n8n", "Primeira Automação: Aprenda a implementar seu primeiro workflow do zero dentro do seu negócio"]
  }, {
    week: 2,
    title: "Automações Básicas e Primeiros Resultados",
    items: ["Ferramentas e Plataformas de IA/Automação: OpenRouter, Fal.ai, Manychat, Metricool, Airtable…", "Engenharia de Prompt: Entenda a estrutura ideal para gerar resultados 10x melhores", "Automação Nível 2: Crie automações mais elaboradas e coloque-as para trabalhar por você"]
  }, {
    week: 3,
    title: "Arsenal de Ferramentas de IA",
    items: ["TOP 15 Ferramentas de IA: Lovable, Netlify, GitHub, 21st.dev, ChatGPT, Claude, Gemini, Grok, VEO3, Runway… (atualizadas frequentemente)", "Assistentes Personalizados: Crie assistentes específicos para seu negócio com GPTs e Projetos (Claude)", "Automação de Postagem: Reduza o trabalho de redes sociais ao máximo", "Templates Prontos: Copie e cole automações que já validamos"]
  }, {
    week: 4,
    title: "Marketing Automatizado - Fundamentos",
    items: ["Funil de Marketing Automatizado: Da captação à conversão", "Produção de vídeos com IA: VEO3, Runway, HeyGen…", "100% da Produção de Conteúdo Automatizada: Instagram, TikTok, YouTube"]
  }, {
    week: 5,
    title: "Marketing Automatizado - Avançado",
    items: ["Análise Qualificatória: IA para selecionar Smart Leads pós-formulários", "Agente de Gestão de Tráfego: Facebook Ads otimizado automaticamente por IA"]
  }, {
    week: 6,
    title: "Sales Automation e CRM Inteligente",
    items: ["Agente SDR com IA: Prospecção e qualificação automatizada", "Recuperação de Carrinho: Converta clientes perdidos automaticamente", "CRM Inteligente: Abordagem e segmentação automática de leads", "Follow-up Personalizado: Mensagens customizadas em escala", "Chatbot com voz: Clone sua voz ou gere respostas automáticas e personalizadas em áudio para seus clientes"]
  }, {
    week: 7,
    title: "Agentes Inteligentes e Assistentes Avançados",
    items: ["Agente de Vendas Completo: Da apresentação ao fechamento", "Assistente de Atendimento: Suporte Personalizado 24/7 com IA", "Databases Inteligentes (Vetoriais) e RAG: Armazenamento de conversas para respostas humanizadas"]
  }, {
    week: 8,
    title: "Sistemas de Escala e Otimização",
    items: ["Sistemas de Escala: Multiplique resultados sem aumentar equipe", "Otimização Contínua: IA que analisa e melhora seus processos automaticamente", "Relatório de Desempenho Automatizado: Monitore o desempenho de sua equipe e seus agentes"]
  }, {
    week: 9,
    title: "Business Intelligence e Dashboard Executivo",
    items: ["BI com IA Avançado: Análises preditivas da operação com sugestões automáticas de otimização, projeções de receita e identificação de gargalos", "Dashboard CEO Completo: Métricas em tempo real, KPIs automatizados, alertas inteligentes e relatórios executivos que se geram sozinhos", "Conselho de IA (AI Board): Crie um board de diretores AI para receber insights estratégicos, análise de cenários e recomendações de crescimento", "Análise Competitiva Automatizada: Monitore concorrentes, preços e tendências de mercado automaticamente"]
  }, {
    week: 10,
    title: "Monetização e Aquisição de Clientes",
    items: ["Prospecção de Clientes Automatizada: Como buscar clientes para sua empresa/nicho de forma 100% automatizada", "Pitch de Vendas: Apresentações com IA que convertem", "Folder de Projetos: Acesso exclusivo ao nosso formulário com propostas de empresas buscando automatizar seus negócios"]
  }];
  return <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Methodology */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-center leading-tight">
            Como a Formação Funciona: <span className="gradient-text">Metodologia Testada e Comprovada</span>
          </h2>
          
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center mb-8">
              Nossa metodologia é baseada em implementação progressiva e resultados práticos. Cada semana você receberá conteúdo estratégico, ferramentas prontas e suporte para garantir que você não apenas aprenda, mas aplique e lucre com IA.
            </p>
            
            <div className="bg-card p-8 rounded-xl border border-border/50">
              <div className="flex items-center gap-4 mb-6">
                <Calendar className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Cronograma de 10 Semanas</h3>
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

        {/* Support Section - Premium Card */}
        <div className="mb-8">
          <div className="bg-gradient-primary p-1 rounded-2xl shadow-glow">
            <div className="bg-background rounded-xl p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-6 shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                  <span className="gradient-text">Suporte Completo</span> e Evolução Constante
                </h2>
              </div>
              
              <div className="max-w-4xl mx-auto space-y-6 mb-8">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Além do conteúdo estruturado das 10 semanas, você terá{" "}
                  <span className="text-primary font-bold text-xl">1 ano inteiro</span> de suporte técnico especializado, mentorias mensais de negócios com os fundadores e atualizações contínuas do material conforme a IA evolui, garantindo que você esteja sempre à frente das estratégias e ferramentas mais atuais do mercado.
                </p>
                
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Sabemos que o universo da Inteligência Artificial muda em ritmo acelerado. Por isso, nosso compromisso é mantê-lo sempre na vanguarda, com acesso às inovações mais recentes, novos agentes validados em nossa operação e ajustes estratégicos baseados nas mudanças do mercado.
                </p>
              </div>

              {/* Key Benefits Grid */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-card p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground">Suporte Técnico</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Ajuda especializada durante 1 ano completo</p>
                </div>

                <div className="bg-card p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <TrendingUp className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground">12 Mentorias</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Sessões mensais com os fundadores</p>
                </div>

                <div className="bg-card p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground">Atualizações</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Conteúdo sempre atualizado com as novidades</p>
                </div>
              </div>

              {/* Value Highlight */}
              <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 p-6 rounded-xl border border-primary/20 mb-8">
                <p className="text-center text-lg md:text-xl font-bold text-foreground leading-relaxed">
                  Só o nosso suporte técnico já valeria muito mais do que o valor total da formação.
                </p>
              </div>
              
              <div className="text-center space-y-6">
                <p className="text-xl md:text-2xl font-bold text-foreground leading-relaxed">
                  Você não fica apenas com o conhecimento de hoje, você evolui junto com a tecnologia.
                </p>
                
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full"></div>
                  <div className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 px-8 py-6 rounded-2xl border-2 border-primary/30">
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <ArrowRight className="w-6 h-6 text-primary animate-pulse" />
                      <p className="text-2xl md:text-3xl font-black gradient-text">
                        A Decisão é Sua
                      </p>
                      <ArrowRight className="w-6 h-6 text-primary animate-pulse" />
                    </div>
                    <p className="text-sm md:text-base text-muted-foreground font-medium">
                      Ficar para trás ou liderar o futuro?
                    </p>
                  </div>
                </div>
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
              COMEÇAR MINHA TRANSFORMAÇÃO AGORA
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