import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CTAPopup } from "@/components/CTAPopup";
import { Shield } from "lucide-react";

export const FinalCTASection = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <section className="py-8 md:py-16 px-4 md:px-8 lg:px-16 bg-gradient-primary text-primary-foreground">
      <div className="container mx-auto max-w-4xl">
        <h2 className="block md:hidden text-xl font-bold mb-8 text-white text-center leading-tight">
          Sua Decisão: Ter Funcionários Digitais Trabalhando Por Você
        </h2>
        <h2 className="hidden md:block text-4xl lg:text-5xl font-bold mb-8 text-white text-center leading-tight">
          Você Está a Uma Decisão de Distância de Ter Um Exército de Funcionários Digitais Trabalhando Por Você
        </h2>
        
        <div className="text-left text-white/90 text-lg leading-relaxed space-y-6 mb-10">
          <p>
            Vamos recapitular. Você leu até aqui — isso já te coloca entre os empreendedores mais sérios do Brasil. Agora você sabe:
          </p>

          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-primary-foreground mt-1">•</span>
              <span>Que existe O Framework Maestro — um sistema documentado de agentes autônomos que gerou R$ 2,5 milhões em 15 meses — criado por um músico e uma administradora que não sabiam programar</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-foreground mt-1">•</span>
              <span>Que esse sistema funciona em qualquer nicho — nós provamos com um simples curso de VIOLÃO</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-foreground mt-1">•</span>
              <span>Que cada agente substitui um funcionário de R$ 2.000 a R$ 4.000/mês e trabalha 24 horas sem folga</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-foreground mt-1">•</span>
              <span>Que você não precisa programar, não precisa de equipe, e não precisa de experiência prévia</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-foreground mt-1">•</span>
              <span>Que seu primeiro agente roda em 24 horas — no Módulo 1</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-foreground mt-1">•</span>
              <span>Que você pode copiar cada agente, cada automação, cada workflow — e ativar no seu negócio</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-foreground mt-1">•</span>
              <span>Que você tem 90 dias para implementar e ver resultado — ou recebe 100% de volta + 1 hora de consultoria gratuita</span>
            </li>
          </ul>

          <p>
            A maioria do mercado é escrava da tecnologia. Trabalham PARA os algoritmos. Nós somos os Maestros que regem a IA para trabalhar PARA NÓS. E agora a porta da nossa tribo está aberta para você.
          </p>

          <p className="text-white font-semibold text-xl text-center">
            Programadores digitam código e torcem para funcionar. Maestros apontam a batuta e assistem o sistema executar.
          </p>

          <p>
            A única pergunta que resta é: você vai continuar acordando às 3 da manhã em suor frio respondendo leads manualmente... ou vai tomar a decisão que separa operadores de Maestros?
          </p>
        </div>

        {/* Price */}
        <div className="text-center mb-6">
          <p className="text-white/70 text-lg line-through mb-1">De R$ 2.997</p>
          <p className="text-white text-4xl md:text-5xl font-black mb-1">12x de R$ 97,42</p>
          <p className="text-white/80 text-lg">ou R$ 997 à vista</p>
          <p className="text-white/60 text-sm mt-2">Preço de lançamento — valor sobe para R$ 1.497 após o encerramento. Bônus exclusivos por tempo limitado.</p>
        </div>
        
        {/* CTA */}
        <div className="flex flex-col items-center gap-2 mb-10">
          <Button 
            variant="cta" 
            size="xl" 
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-primary-foreground font-bold text-sm md:text-lg px-4 md:px-10 py-4 md:py-6 h-auto w-full md:w-auto"
            onClick={() => setPopupOpen(true)}
          >
            <span className="block md:hidden">GARANTIR MEU ACESSO AGORA</span>
            <span className="hidden md:block">EU ESCOLHO SER MAESTRO — GARANTIR MEU ACESSO AGORA</span>
          </Button>
          <p className="text-sm text-white/70 mt-2 text-center">
            Acesso imediato · Garantia de Execução de 90 dias · 11+ agentes autônomos · 12x de R$ 97,42
          </p>
        </div>
        
        <CTAPopup open={popupOpen} onOpenChange={setPopupOpen} />
        
        {/* P.S. Section */}
        <div className="pt-8 border-t border-white/20 space-y-6">
          <p className="text-left text-white/90 text-lg leading-relaxed">
            <span className="font-bold text-white">P.S.</span> — Você já sabe que precisa de IA no seu negócio. Todo mundo sabe. A diferença é que agora você tem acesso ao FRAMEWORK MAESTRO — não a mais uma ferramenta, não a mais um curso teórico, mas ao exército completo de funcionários digitais que transformou um simples curso de violão em R$ 2,5 milhões. Os mesmos agentes. As mesmas automações. Cada um com nome, função e resultado documentado. Prontos para você copiar, ativar, e assistir seu negócio operar de uma forma que você nunca achou possível. E o melhor: seu primeiro agente roda em 24 horas. Não daqui a semanas. <span className="font-bold text-white">Amanhã.</span> Daqui a 12 meses, você pode ser o Maestro que rege sua orquestra de agentes e vive a vida que projetou — ou pode ser a mesma pessoa lendo outra página de vendas, suando às 3 da manhã respondendo mensagens. A decisão é só sua. Mas O Framework Maestro está aqui. A Garantia de Execução é de 90 dias. E a tribo dos Maestros está esperando por você.
          </p>

          <p className="text-left text-white/90 text-lg leading-relaxed">
            <span className="font-bold text-white">P.P.S.</span> — Lembra do Agente de Vendas que você copiou de graça lá em cima? Aquilo é UM agente. Na Formação, você recebe mais de 10 — cada um mais poderoso que o anterior, todos trabalhando juntos como uma orquestra afinada. Se aquele agente grátis já te impressionou... <span className="font-bold text-white">imagine O Framework Maestro completo.</span>
          </p>
        </div>
      </div>
    </section>
  );
};
