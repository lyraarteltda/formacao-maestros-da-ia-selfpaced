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
    <section className="section-padding bg-[hsl(220,18%,6%)]">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium tracking-wide uppercase mb-6">
            Resultados Reais
          </span>
          <h2 className="text-heading-1 md:text-display font-bold mb-4">
            Veja o Que Alunos Conquistaram com o{" "}
            <span className="gradient-text">Conteúdo da Formação</span>
          </h2>
          <p className="text-body-lg text-[hsl(215,12%,65%)] max-w-3xl mx-auto">
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
            <div
              key={index}
              className="card-base p-8 text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                <badge.icon className="w-7 h-7 text-emerald-400" />
              </div>
              <p className="text-4xl font-bold text-foreground font-mono mb-2">{badge.value}</p>
              <p className="text-sm text-[hsl(215,12%,65%)]">{badge.label}</p>
            </div>
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
          <div className="card-base p-5 text-center">
            <p className="text-2xl font-bold text-emerald-400 font-mono">30 min/dia</p>
            <p className="text-sm text-[hsl(215,12%,65%)]">tempo dedicado à operação</p>
          </div>
          <div className="card-base p-5 text-center">
            <p className="text-2xl font-bold text-emerald-400 font-mono">+100</p>
            <p className="text-sm text-[hsl(215,12%,65%)]">ferramentas, prompts e códigos</p>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="card-base p-6 flex flex-col"
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-amber-400/60 fill-amber-400/60" />
                  ))}
                </div>

                <Quote className="w-6 h-6 text-emerald-500/30 mb-3" />
                <p className="text-foreground/90 mb-6 leading-relaxed flex-1">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500/30 to-emerald-600/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-emerald-300">{testimonial.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                    <p className="text-xs text-[hsl(215,10%,45%)]">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-6 mb-16"
        >
          <div className="flex items-center gap-2 text-[hsl(215,12%,65%)]">
            <Star className="w-4 h-4 text-amber-400/60 fill-amber-400/60" />
            <span className="text-sm">Único curso de violão com 5 estrelas no TOP 10 Hotmart</span>
          </div>
          <span className="w-1 h-1 rounded-full bg-white/10" />
          <div className="flex items-center gap-2 text-[hsl(215,12%,65%)]">
            <span className="text-sm">Garantia incondicional de 7 dias</span>
          </div>
          <span className="w-1 h-1 rounded-full bg-white/10" />
          <div className="flex items-center gap-2 text-[hsl(215,12%,65%)]">
            <span className="text-sm">Acesso imediato após a compra</span>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="flex flex-col items-center gap-3">
            <Button
              onClick={() => setPopupOpen(true)}
              className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-base md:text-lg px-10 md:px-14 py-4 md:py-5 h-auto rounded-xl shadow-[0_4px_20px_rgba(16,185,129,0.3)] hover:shadow-[0_8px_30px_rgba(16,185,129,0.45)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              QUERO O SISTEMA COMPLETO
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <p className="text-sm text-[hsl(215,10%,45%)]">
              Acesso imediato + Garantia de 7 dias
            </p>
          </div>
        </motion.div>
      </div>

      <CTAPopup open={popupOpen} onOpenChange={setPopupOpen} />
    </section>
  );
};
