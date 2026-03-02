import { useState } from "react";
import { motion } from "framer-motion";
import { Star, TrendingUp, Award, Users, Quote, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { CTAPopup } from "./CTAPopup";

export const SocialProofSection = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  const credibilityBadges = [
    { icon: TrendingUp, value: "R$ 2,5M", label: "faturados com o sistema em 15 meses" },
    { icon: Award, value: "75", label: "aulas 100% práticas e aplicáveis" },
    { icon: Users, value: "10+", label: "agentes de IA prontos para usar" },
  ];

  const testimonials = [
    {
      quote: "Um processo que levava cerca de uma semana, hoje a gente consegue fazer de 4 a 6 horas usando a automação.",
      name: "Bruno",
      role: "Empresário",
    },
    {
      quote: "Um pouco tempo de curso, eu já consegui vender alguns projetos no mercado com segurança, com ticket médio considerável para alguém que está iniciando.",
      name: "Andre",
      role: "Empreendedor",
    },
    {
      quote: "Gente, foi muito mais do que eu esperava. Me ajudou demais a enxergar AI como uma aliada estratégica do meu negócio.",
      name: "Alice",
      role: "Empresária",
    },
    {
      quote: "Metade das coisas que eu achava impossível, hoje eu estou fazendo em casa e no trabalho. Quando você vê seu primeiro fluxo rodando sozinho, você nunca mais olha para a rotina da mesma forma.",
      name: "Ricardo",
      role: "Profissional",
    },
    {
      quote: "Independente da área que você venha, você vai aprender e conseguir aplicar no seu dia a dia. O curso é extremamente prático.",
      name: "Regis",
      role: "Aluno",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background via-secondary/10 to-background">
      <div className="container mx-auto max-w-6xl">
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
              Veja o Que Alunos Conquistaram com o Conteúdo da Formação
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Estes resultados foram alcançados com o conteúdo da formação — as mesmas 75 aulas, agentes e automações que você vai acessar.
          </p>
        </motion.div>

        {/* Credibility Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {credibilityBadges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-colors">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <badge.icon className="w-8 h-8 text-primary" />
                </div>
                <p className="text-3xl md:text-4xl font-bold text-foreground mb-2">{badge.value}</p>
                <p className="text-muted-foreground">{badge.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 gap-4 mb-16 max-w-2xl mx-auto"
        >
          <div className="bg-card border border-border rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-primary">30 min/dia</p>
            <p className="text-sm text-muted-foreground">tempo dedicado à operação</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-primary">+100</p>
            <p className="text-sm text-muted-foreground">ferramentas, prompts e códigos</p>
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          {/* Desktop Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors"
              >
                <Quote className="w-8 h-8 text-primary/40 mb-4" />
                <p className="text-foreground/90 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border border-border flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary/60" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-6 mb-16"
        >
          <div className="flex items-center gap-2 text-muted-foreground">
            <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
            <span className="text-sm">Único curso de violão com 5 estrelas no TOP 10 Hotmart</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="text-sm">Garantia incondicional de 7 dias</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="text-sm">Acesso imediato após a compra</span>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center"
        >
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
        </motion.div>
      </div>

      <CTAPopup open={popupOpen} onOpenChange={setPopupOpen} />
    </section>
  );
};
