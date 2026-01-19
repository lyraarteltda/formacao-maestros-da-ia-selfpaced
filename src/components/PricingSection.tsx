import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Users, Calendar, Bot, GraduationCap, Award, MoreHorizontal, Rocket, MessageCircle, AlertTriangle, Zap } from "lucide-react";
import { CheckoutDialog } from "@/components/CheckoutDialog";
import { CTAPopup } from "@/components/CTAPopup";
export const PricingSection = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const checkoutUrl = 'https://pay.onprofit.com.br/M5Ene7El?off=l6y2P7';
  const features = [{
    icon: Calendar,
    text: "Acesso Anual"
  }, {
    icon: GraduationCap,
    text: "Formação Completa"
  }, {
    icon: Users,
    text: "Comunidade Exclusiva"
  }, {
    icon: Bot,
    text: "Suporte Técnico IA e Automações"
  }, {
    icon: Award,
    text: "Mentoria de Negócios"
  }, {
    icon: MoreHorizontal,
    text: "Muito Mais..."
  }];
  return <section className="section-padding bg-card" data-section="pricing">
      <div className="container mx-auto">
          <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center leading-tight">
            Invista no Futuro do Seu Negócio e Aproveite a<br />
            <span className="gradient-text">Condição Especial de Black Friday</span>
          </h2>
        </div>

        <div className="max-w-xl md:max-w-lg mx-auto px-0 md:px-0">
          <div className="bg-gradient-primary p-1 rounded-xl shadow-glow">
            <div className="bg-background rounded-lg p-6 md:p-8 text-center">
              {/* Black Friday Banner */}
              <div className="mb-6 -mt-2 animate-[fade-in_0.5s_ease-out,scale-in_0.5s_ease-out]">
                <div className="relative overflow-hidden bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-black font-bold px-4 py-2 rounded-lg text-sm md:text-base shadow-xl border-2 border-yellow-300 animate-[pulse_1.5s_ease-in-out_infinite] hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[slide-in-right_2s_ease-in-out_infinite]"></div>
                  <span className="relative z-10">🔥 Oferta de Black Friday</span>
                </div>
              </div>

              {/* Urgency Banner */}
              <div className="mb-6">
                <div className="border border-primary/30 rounded-xl px-6 py-5 bg-gradient-to-br from-primary/5 to-primary/10 backdrop-blur-sm">
                  <div className="text-center space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                      <p className="text-foreground font-medium text-sm md:text-base">
                        Restam apenas <span className="text-primary font-bold">1 vaga</span> com preço de Black Friday
                      </p>
                      <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                    </div>
                    <p className="text-muted-foreground text-xs md:text-sm">
                      Valor sobe imediatamente ao atingir 60 membros
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mb-8 space-y-6">
                <div className="text-center space-y-4">
                  <div className="text-lg text-muted-foreground">
                    De <span className="line-through text-red-500 font-semibold text-2xl">R$ 7.000</span> por apenas
                  </div>
                  <div className="text-2xl font-medium text-muted-foreground">12x de</div>
                  <div className="text-5xl md:text-6xl font-black text-foreground leading-none">R$ 323,38</div>
                  
                </div>
                
                <div className="text-center">
                  <div className="inline-block relative">
                    <div className="absolute inset-0 bg-gradient-primary opacity-10 blur-2xl rounded-xl"></div>
                    <div className="relative px-6 py-4 border border-primary/20 rounded-xl bg-background/50 backdrop-blur-sm animate-[pulse_2s_ease-in-out_infinite] shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]">
                      <div className="text-4xl md:text-5xl font-black gradient-text leading-none">R$ 3.000</div>
                      <div className="text-lg font-semibold text-primary mt-2">à vista</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {features.map((feature, index) => <div key={index} className="flex items-center flex-row text-left">
                    <feature.icon className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-foreground">{feature.text}</span>
                  </div>)}
              </div>

              <div className="flex justify-center">
                <Button variant="cta" size="xl" className="w-full md:w-auto px-8" onClick={() => setPopupOpen(true)}>
                  GARANTIR VAGA
                </Button>
              </div>
              
              <CTAPopup open={popupOpen} onOpenChange={setPopupOpen} />
              
              <CheckoutDialog open={dialogOpen} onOpenChange={setDialogOpen} checkoutUrl={checkoutUrl} />
            </div>
          </div>
          
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
      </div>
    </section>;
};