import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Shield, Gift, MessageCircle, Sparkles, Lock, Zap, HeadphonesIcon } from "lucide-react";
import { CheckoutDialog } from "@/components/CheckoutDialog";
import { CTAPopup } from "@/components/CTAPopup";
import { motion } from "framer-motion";

export const PricingSection = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const checkoutUrl = 'https://pay.onprofit.com.br/M5Ene7El?off=m0koTN';

  const checklist = [
    "O Framework Maestro: 11+ Agentes Autônomos de IA — Prontos Para Ativar (valor: R$ 354.000/ano em salários)",
    "10 Módulos de Implementação Prática (75 implementações progressivas)",
    "Templates de Automação \"Copie, Cole e Ative\"",
    "Arsenal IA: +100 Ferramentas, Prompts e Códigos Testados",
    "Os Arquivos Confidenciais de R$2,5M (Números Reais + Prompts + Scripts de Vendas)",
    "BÔNUS: O Cofre de Projetos \"Copiar e Colar\" (primeiros 100 alunos)",
    "BÔNUS: Arquivos Confidenciais 2.0 — Bastidores Completos (por tempo limitado)",
    "1 Ano de Acesso Completo + Atualizações Mensais",
    "Garantia de Execução de 90 Dias",
    "Primeiro agente rodando em 24 horas (Módulo 1)"
  ];

  const trustBadges = [
    { icon: Lock, text: "Pagamento 100% Seguro" },
    { icon: Shield, text: "Garantia de Execução de 90 Dias" },
    { icon: Zap, text: "Acesso Imediato" },
    { icon: HeadphonesIcon, text: "Suporte por WhatsApp" }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-background via-card to-background" data-section="pricing">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary">Oferta Especial de Lançamento</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center leading-tight">
            Tudo Que Você{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Recebe Hoje
            </span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Emotional Closing */}
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              Você chegou até aqui. A maioria das pessoas lê 3 linhas e fecha a página. Você não. Você leu cada seção, avaliou cada agente, pesou cada argumento. Isso mostra algo sobre você: você é o tipo de empreendedor que toma decisões com informação — não por impulso. E por isso que esse sistema funciona tão bem nas mãos de pessoas como você. Porque <span className="text-primary font-semibold">quem chega até aqui, implementa. E quem implementa, colhe resultado.</span>
            </p>
          </motion.div>

          {/* Logical Closing */}
          <motion.div
            className="bg-card border border-border/50 rounded-xl p-6 md:p-8 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              Vamos aos números frios. Contratar um dev básico (<span className="text-foreground font-semibold">R$ 5.000</span>) e um copywriter (<span className="text-foreground font-semibold">R$ 4.000</span>) por apenas 1 mês já custa <span className="text-foreground font-semibold">R$ 9.000</span> — e eles vão precisar de semanas só para entender seu negócio. O Framework Maestro entrega o trabalho deles pronto, testado e documentado: 11+ agentes autônomos funcionando, 10 módulos de implementação, +100 recursos otimizados. Tudo por <span className="text-primary font-bold">R$ 997</span>. Uma vez. E você tem 90 dias para implementar e ver resultado — ou recebe 100% de volta, mais 1 hora de consultoria gratuita para consertar seu funil.
            </p>
          </motion.div>

          {/* Urgency Closing */}
          <motion.div
            className="bg-destructive/5 border border-destructive/20 rounded-xl p-6 md:p-8 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              Cada dia que você passa sem seus agentes ativos, você perde horas da sua vida e dinheiro para concorrentes que já estão usando IA. O preço de <span className="text-primary font-bold">R$ 997</span> é de lançamento. Após o encerramento desta turma, sobe para <span className="text-destructive font-bold">R$ 1.497</span> — e os bônus exclusivos são os primeiros a sair. O Cofre de Projetos é limitado a 100 vagas (nosso tempo é finito — não podemos atender todos). <span className="text-foreground font-semibold">Quem entrar depois, paga mais e recebe menos.</span>
            </p>
          </motion.div>

          {/* Price Display */}
          <motion.div 
            className="max-w-md mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-2 border-green-500/50 rounded-2xl p-8 text-center relative overflow-hidden">
              <div className="relative">
                <p className="text-sm text-muted-foreground mb-2">
                  <span className="line-through decoration-2">De R$ 2.997</span>
                </p>
                <p className="text-sm text-green-600 dark:text-green-400 uppercase tracking-wide mb-2 font-bold">
                  🚀 Preço de Lançamento
                </p>
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-green-500/20 blur-2xl rounded-full" />
                  <span className="relative text-5xl md:text-6xl font-black text-green-600 dark:text-green-400">
                    R$ 997
                  </span>
                </div>
                <p className="text-lg text-muted-foreground mt-2">ou 12x de R$ 97,42</p>
              </div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <div className="flex flex-col items-center gap-3 mb-8">
            <Button 
              variant="cta" 
              size="xl" 
              className="w-full md:w-auto px-6 md:px-10 text-sm md:text-lg group" 
              onClick={() => setPopupOpen(true)}
            >
              GARANTIR MEU ACESSO AO FRAMEWORK MAESTRO POR R$ 997
            </Button>
            <p className="text-sm text-muted-foreground">
              Garantia de Execução de 90 dias — veja os detalhes abaixo.
            </p>
          </div>

          {/* Checklist */}
          <motion.div 
            className="bg-card border border-border rounded-2xl overflow-hidden shadow-xl mb-8 p-6 md:p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="space-y-3">
              {checklist.map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.05 * index }}
                >
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <p className="text-foreground font-medium leading-tight text-sm md:text-base">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8">
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                <badge.icon className="w-4 h-4 text-primary" />
                <span>{badge.text}</span>
              </div>
            ))}
          </div>

          {/* Questions Button */}
          <div className="flex justify-center">
            <Button
              onClick={() => window.open("https://wa.me/5511942131610", '_blank')}
              variant="outline"
              size="lg"
              className="gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Tenho Dúvidas
            </Button>
          </div>
        </div>
        
        <CTAPopup open={popupOpen} onOpenChange={setPopupOpen} />
        <CheckoutDialog open={dialogOpen} onOpenChange={setDialogOpen} checkoutUrl={checkoutUrl} />
      </div>
    </section>
  );
};
