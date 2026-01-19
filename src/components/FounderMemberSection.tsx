import { useState } from "react";
import { motion } from "framer-motion";
import { 
  AlertTriangle, 
  Check, 
  Crown, 
  Users, 
  Video, 
  HeadphonesIcon, 
  Star, 
  Infinity, 
  MessageSquare, 
  Sparkles,
  Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CTAPopup } from "@/components/CTAPopup";

const founderBenefits = [
  {
    icon: <Crown className="w-5 h-5" />,
    text: "Preço mais baixo da história da formação (R$ 3.000 vs R$ 5.000)",
  },
  {
    icon: <Star className="w-5 h-5" />,
    text: 'Badge de "Membro Fundador" permanente na comunidade',
  },
  {
    icon: <Infinity className="w-5 h-5" />,
    text: "Acesso vitalício a TODAS as atualizações futuras",
  },
  {
    icon: <HeadphonesIcon className="w-5 h-5" />,
    text: "Prioridade permanente no suporte técnico",
  },
  {
    icon: <MessageSquare className="w-5 h-5" />,
    text: "Influência direta no desenvolvimento do curso",
  },
  {
    icon: <Users className="w-5 h-5" />,
    text: "Networking exclusivo com os primeiros 100 membros",
  },
];

export const FounderMemberSection = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const spotsTotal = 100;
  const spotsFilled = 99;
  const spotsRemaining = spotsTotal - spotsFilled;
  const progressPercentage = (spotsFilled / spotsTotal) * 100;

  return (
    <section className="section-padding bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary rounded-full filter blur-[150px]"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-amber-500 rounded-full filter blur-[150px]"></div>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 rounded-full px-4 py-1.5 mb-6">
            <Crown className="w-4 h-4 text-amber-500" />
            <span className="text-sm font-semibold text-amber-500 uppercase tracking-wider">
              Lote Fundador
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Acesso Exclusivo para</span>
            <br />
            <span className="text-foreground">Membros Fundadores</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Estamos construindo a elite da IA no Brasil. As condições atuais de{" "}
            <span className="text-primary font-semibold">R$ 3.000</span> são exclusivas para os 
            primeiros 100 alunos que nos ajudarão a moldar a comunidade.
          </p>
        </motion.div>

        {/* Progress Bar Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="font-bold text-lg">LOTE FUNDADOR</span>
              </div>
              <span className="text-2xl font-black text-primary">{progressPercentage.toFixed(0)}% PREENCHIDO</span>
            </div>

            <div className="relative mb-4">
              <Progress value={progressPercentage} className="h-6 bg-muted" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-sm font-bold text-primary-foreground drop-shadow-md">
                  {spotsFilled}/{spotsTotal} vagas
                </span>
              </div>
            </div>

            <p className="text-center text-muted-foreground">
              <span className="text-primary font-bold">{spotsFilled} Maestros</span> já entraram.{" "}
              <span className="text-amber-500 font-bold">
                Resta apenas {spotsRemaining} vaga nesta condição.
              </span>
            </p>
          </div>
        </motion.div>

        {/* Exclusive Warning Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 rounded-2xl blur opacity-40 animate-pulse"></div>
            <div className="relative bg-gradient-to-br from-amber-950/80 via-orange-950/80 to-amber-950/80 border-2 border-amber-500/60 rounded-2xl p-6 md:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-amber-500 mb-2">
                    ⚠️ ÚLTIMA VAGA DE MEMBRO FUNDADOR
                  </h3>
                  <p className="text-amber-200/80">
                    {spotsFilled} Maestros já garantiram acesso a:
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3 bg-amber-500/10 rounded-xl p-4 border border-amber-500/30">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Video className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">
                      12 mentorias mensais com Arthur e Lyria
                    </p>
                    <p className="text-amber-500 text-sm font-bold uppercase">
                      EXCLUSIVO - nunca mais disponível
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-amber-500/10 rounded-xl p-4 border border-amber-500/30">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <HeadphonesIcon className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">
                      Suporte técnico por 12 meses
                    </p>
                    <p className="text-amber-500 text-sm font-bold uppercase">
                      EXCLUSIVO - nunca mais disponível
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-red-950/50 border border-red-500/40 rounded-xl p-4 text-center">
                <p className="text-red-200 font-medium">
                  Resta apenas <span className="text-red-400 font-bold">{spotsRemaining} vaga</span> com estes benefícios.
                  <br />
                  <span className="text-red-400">
                    Após esta vaga, estes bônus serão REMOVIDOS da oferta permanentemente.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Price Anchoring */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 md:p-8 inline-block max-w-2xl">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              O valor de mercado será{" "}
              <span className="text-2xl font-bold text-muted-foreground line-through">R$ 5.000</span>
              {" "}— e <span className="font-semibold text-foreground">SEM</span> as mentorias e suporte técnico.
            </p>
            <p className="text-lg md:text-xl text-foreground mt-3 font-medium">
              Entrando como Fundador, você{" "}
              <span className="text-primary font-bold">economiza R$ 2.000</span> E garante{" "}
              <span className="text-primary font-bold">acesso exclusivo aos fundadores</span>.
            </p>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Button 
            variant="cta" 
            size="xl" 
            className="px-8 md:px-12 text-base md:text-lg"
            onClick={() => setPopupOpen(true)}
          >
            <Crown className="w-5 h-5 mr-2" />
            GARANTIR MINHA VAGA DE MEMBRO FUNDADOR
          </Button>
          <CTAPopup open={popupOpen} onOpenChange={setPopupOpen} />
        </motion.div>

        {/* Founder Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-primary/10 via-card to-primary/5 border border-primary/30 rounded-2xl p-6 md:p-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="w-6 h-6 text-primary" />
              <h3 className="text-xl md:text-2xl font-bold text-center">
                BENEFÍCIOS EXCLUSIVOS PARA MEMBROS FUNDADORES
              </h3>
              <Sparkles className="w-6 h-6 text-primary" />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {founderBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 bg-background/50 rounded-xl p-4 border border-border/50"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                    {benefit.icon}
                  </div>
                  <p className="text-foreground font-medium">{benefit.text}</p>
                </motion.div>
              ))}
            </div>

            {/* Trust Badge */}
            <div className="flex items-center justify-center gap-2 mt-6 pt-6 border-t border-border/50">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground">
                Garantia de 7 dias ou seu dinheiro de volta
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
