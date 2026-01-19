import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Crown, MessageCircle, CreditCard, Shield, Lock, Smartphone } from "lucide-react";
import { CheckoutDialog } from "@/components/CheckoutDialog";
import { CTAPopup } from "@/components/CTAPopup";

export const PricingSection = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const checkoutUrl = 'https://pay.onprofit.com.br/M5Ene7El?off=l6y2P7';

  const valueStack = [
    { item: "Formação Completa", value: "R$ 4.997" },
    { item: "12 Mentorias ao Vivo", value: "R$ 2.997" },
    { item: "Arsenal de 100+ Ferramentas", value: "R$ 1.497" },
    { item: "Pasta de Projetos Reais", value: "R$ 1.997" },
    { item: "Arquivos Confidenciais", value: "R$ 2.497" },
    { item: "Suporte Técnico 1 Ano", value: "R$ 1.997" },
  ];

  const totalValue = "R$ 15.982";

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background via-card to-background" data-section="pricing">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              RESUMO DO SEU INVESTIMENTO
            </span>
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Value Stack Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 rounded-2xl blur-xl opacity-50" />
            
            <div className="relative bg-card border border-border rounded-2xl overflow-hidden">
              {/* Founder Badge */}
              <div className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-black font-bold py-3 text-center">
                <div className="flex items-center justify-center gap-2">
                  <Crown className="w-5 h-5" />
                  <span>LOTE FUNDADOR — ÚLTIMA VAGA</span>
                  <Crown className="w-5 h-5" />
                </div>
              </div>

              <div className="p-6 md:p-8">
                {/* Value Stack List */}
                <div className="space-y-3 mb-6">
                  {valueStack.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="flex items-center justify-between py-2 border-b border-border/50"
                    >
                      <div className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground text-sm md:text-base">{item.item}</span>
                      </div>
                      <span className="text-muted-foreground text-sm md:text-base">{item.value}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Total Value Line */}
                <div className="flex items-center justify-between py-4 border-t-2 border-primary/30 mb-8">
                  <span className="text-lg font-bold text-foreground">VALOR TOTAL:</span>
                  <span className="text-2xl font-bold text-red-400 line-through">{totalValue}</span>
                </div>

                {/* Price Anchoring */}
                <div className="text-center space-y-4 mb-8">
                  {/* Original Price */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                  >
                    <span className="text-xl text-muted-foreground">De </span>
                    <span className="text-3xl md:text-4xl text-red-400 line-through font-semibold">R$ 7.000</span>
                  </motion.div>

                  {/* "Por apenas" */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                    className="text-lg text-muted-foreground"
                  >
                    Por apenas
                  </motion.p>

                  {/* Final Price */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="relative inline-block"
                  >
                    <div className="absolute -inset-4 bg-emerald-500/20 rounded-2xl blur-2xl" />
                    <div className="relative">
                      <span className="text-6xl md:text-7xl lg:text-8xl font-black text-emerald-400 drop-shadow-[0_0_30px_rgba(52,211,153,0.5)]">
                        R$ 3.000
                      </span>
                    </div>
                  </motion.div>

                  {/* Installment Option - Highlighted */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.9 }}
                    className="relative inline-block"
                  >
                    <div className="absolute -inset-2 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 rounded-xl blur-lg opacity-70" />
                    <div className="relative bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 border-2 border-primary/50 rounded-xl px-6 py-4">
                      <p className="text-lg text-muted-foreground mb-1">ou</p>
                      <p className="text-2xl md:text-3xl font-bold text-foreground">
                        12x de <span className="text-primary">R$ 323,00</span>
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">no cartão de crédito</p>
                    </div>
                  </motion.div>

                  {/* Daily Cost Comparison */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 1 }}
                    className="text-lg text-muted-foreground mt-4"
                  >
                    Menos de <span className="text-emerald-400 font-bold">R$ 11 por dia</span> para transformar seu negócio
                  </motion.p>
                </div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 1.1 }}
                  className="mb-8"
                >
                  <Button 
                    variant="cta" 
                    size="xl" 
                    className="w-full text-lg py-6 h-auto"
                    onClick={() => setPopupOpen(true)}
                  >
                    <Crown className="w-5 h-5 mr-2" />
                    GARANTIR MINHA VAGA DE FUNDADOR
                  </Button>
                </motion.div>

                {/* Payment Methods */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 1.2 }}
                  className="space-y-4"
                >
                  <p className="text-center text-sm text-muted-foreground">Formas de pagamento aceitas:</p>
                  
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    {/* Pix */}
                    <div className="flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-2">
                      <Smartphone className="w-5 h-5 text-emerald-400" />
                      <span className="text-sm font-medium text-foreground">Pix</span>
                    </div>
                    
                    {/* Credit Cards */}
                    <div className="flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-2">
                      <CreditCard className="w-5 h-5 text-blue-400" />
                      <span className="text-sm font-medium text-foreground">Cartão de Crédito</span>
                    </div>
                    
                    {/* Boleto */}
                    <div className="flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-2">
                      <svg className="w-5 h-5 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="16" rx="2" />
                        <line x1="7" y1="8" x2="7" y2="16" />
                        <line x1="11" y1="8" x2="11" y2="16" />
                        <line x1="15" y1="8" x2="15" y2="16" />
                      </svg>
                      <span className="text-sm font-medium text-foreground">Boleto</span>
                    </div>
                  </div>

                  {/* Trust Badges */}
                  <div className="flex flex-wrap items-center justify-center gap-6 pt-4 border-t border-border/50">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Shield className="w-5 h-5 text-emerald-500" />
                      <span className="text-xs">Compra 100% Segura</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Lock className="w-5 h-5 text-emerald-500" />
                      <span className="text-xs">Dados Criptografados</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Check className="w-5 h-5 text-emerald-500" />
                      <span className="text-xs">Garantia de 7 Dias</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Doubts Button */}
          <div className="flex justify-center mt-6">
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
