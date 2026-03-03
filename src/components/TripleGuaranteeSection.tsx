import { Shield, Trophy, CheckCircle, BadgeCheck, Clock, Zap, BarChart3, Lock, HeadphonesIcon } from "lucide-react";

export const TripleGuaranteeSection = () => {
  const timeline = [
    { label: "Dia 1", text: "Ambiente configurado e primeiro agente ativo (primeiras 24 horas)" },
    { label: "Semana 1-4", text: "Automações de vendas e conteúdo rodando" },
    { label: "Mês 2-3", text: "Sistema completo operando com múltiplos agentes" },
    { label: "Mês 3", text: "Dashboard executivo com visão completa do negócio" }
  ];

  return (
    <section className="py-8 md:py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-background via-card/50 to-background" data-section="dual-guarantee">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2 mb-6">
            <BadgeCheck className="w-5 h-5 text-green-500" />
            <span className="text-sm font-semibold text-green-500">O Risco É 100% Nosso</span>
          </div>
          <h2 className="block md:hidden text-xl font-bold mb-4 text-center leading-tight">
            Garantia de 90 Dias —{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Risco Zero Para Você
            </span>
          </h2>
          <h2 className="hidden md:block text-4xl lg:text-5xl font-bold mb-4 text-center leading-tight">
            Garantia de Execução de 90 Dias —{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              O Risco É 100% Nosso
            </span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto font-semibold">
            Nós Não Apostamos Em Você. Nós INVESTIMOS Em Você.
          </p>
        </div>

        {/* Main Guarantee Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative bg-card border border-green-500/20 rounded-2xl p-8 hover:border-green-500/50 transition-colors duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/25">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Garantia de Execução Maestro</h3>
              </div>

              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Aqui está o acordo — e preste atenção, porque nenhum concorrente oferece isso:
                </p>
                <p>
                  Nós não vamos te dar 7 dias para "espiar" o conteúdo e devolver. Isso não prova nada.
                </p>
                <p>
                  Em vez disso, nós te damos <span className="text-primary font-bold">90 DIAS</span> para implementar O Framework Maestro de verdade. Ative seus agentes. Coloque as automações para rodar. Teste no seu negócio real.
                </p>
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                  <p className="text-foreground font-semibold text-xl mb-4">A Garantia de Execução Maestro:</p>
                  <p>
                    Assista às aulas, copie nossos 3 primeiros agentes e rode o sistema. Se em 90 dias você não automatizar pelo menos <span className="text-primary font-bold">10 horas do seu trabalho semanal</span>, eu devolvo 100% dos seus R$ 997 <span className="text-primary font-bold">+ 1 hora de consultoria gratuita</span> para consertar seu funil.
                  </p>
                </div>
                <p>
                  Sim, leu certo. Além de devolver cada centavo, nós AINDA sentamos com você por 1 hora para encontrar o que travou e consertar. Porque se o sistema não funcionou, queremos saber por quê — e te ajudar a resolver.
                </p>
                <p>
                  <span className="text-foreground font-semibold">Por que oferecemos isso?</span> Porque SABEMOS o que acontece quando alguém implementa esse sistema. Nós vemos os resultados toda semana. A confiança é tão grande que estamos colocando NOSSO dinheiro e NOSSO tempo na mesa.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 90-Day Timeline */}
        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-xl font-bold text-foreground text-center mb-6">O Que Acontece Em 90 Dias</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {timeline.map((item, index) => (
              <div key={index} className="bg-card border border-border/50 rounded-xl p-4 text-center hover:border-primary/30 transition-all">
                <span className="inline-block bg-primary/20 text-primary font-bold text-sm px-3 py-1 rounded-full mb-3">
                  {item.label}
                </span>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Statement */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="bg-card border border-border/50 rounded-xl p-6 md:p-8">
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Se depois de 90 dias implementando você olhar para tudo isso e disser "não automatizei 10 horas por semana" — e nós verificarmos que você de fato seguiu os 3 primeiros agentes — devolvemos cada centavo + 1 hora de consultoria. <span className="text-foreground font-semibold">E seguimos amigos.</span>
            </p>

            {/* Signature */}
            <div className="border-t border-border/50 pt-6 text-center">
              <p className="text-foreground font-bold text-lg">Arthur Endo & Lyria Zoccal</p>
              <p className="text-sm text-muted-foreground">Fundadores da Formação Maestros da IA</p>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30">
                <Shield className="w-7 h-7 text-primary-foreground" />
              </div>
            </div>
            <p className="text-lg md:text-xl text-foreground leading-relaxed font-medium">
              O risco é nosso. O compromisso é mútuo.{" "}
              <span className="gradient-text font-bold">A transformação é sua.</span>
            </p>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-8">
          {[
            { icon: Lock, text: "Pagamento 100% Seguro" },
            { icon: Shield, text: "Garantia de Execução de 90 Dias" },
            { icon: Zap, text: "Acesso Imediato" },
            { icon: HeadphonesIcon, text: "Suporte por WhatsApp" }
          ].map((badge, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
              <badge.icon className="w-4 h-4 text-primary" />
              <span>{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
