import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Play, TrendingUp, Award, Users, ChevronLeft, ChevronRight, Quote, Image, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { CTAPopup } from "./CTAPopup";

export const SocialProofSection = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const credibilityBadges = [
    { icon: TrendingUp, value: "R$2,5 Milhões", label: "em Vendas em 15 Meses" },
    { icon: Award, value: "Único 5 Estrelas", label: "no TOP 10 Hotmart" },
    { icon: Users, value: "500+", label: "Alunos Transformados" },
  ];

  const videoTestimonials = [
    { id: 1, name: "Aluno 1", role: "Empresário Digital" },
    { id: 2, name: "Aluno 2", role: "Consultor de IA" },
    { id: 3, name: "Aluno 3", role: "Infoprodutor" },
  ];

  const textTestimonials = [
    {
      quote: "Em apenas 3 meses, consegui automatizar todo meu processo de vendas e triplicar meu faturamento. O método é simples de aplicar e os resultados são reais.",
      name: "Maria Silva",
      role: "CEO, Digital Agency",
      rating: 5,
    },
    {
      quote: "Eu já tinha feito outros cursos de IA, mas nenhum me deu o resultado que a Formação Maestros me deu. Agora trabalho menos e faturo mais.",
      name: "João Santos",
      role: "Infoprodutor",
      rating: 5,
    },
    {
      quote: "A mentoria com Arthur e Lyria foi o diferencial. Eles realmente se importam com o sucesso de cada aluno. Meu negócio nunca mais foi o mesmo.",
      name: "Ana Oliveira",
      role: "Consultora de Marketing",
      rating: 5,
    },
  ];

  const resultPlaceholders = [
    { title: "Faturamento", value: "R$ 150K/mês", growth: "+340%" },
    { title: "Leads Gerados", value: "5.000+", growth: "+520%" },
    { title: "Tempo Economizado", value: "30h/semana", growth: "-80% trabalho manual" },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % textTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + textTestimonials.length) % textTestimonials.length);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background via-secondary/10 to-background">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Prova Social
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Resultados reais de pessoas reais
          </p>
        </motion.div>

        {/* Section 1: Credibility Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mb-20"
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

        {/* Section 2: Video Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">
            Depoimentos em Vídeo
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {videoTestimonials.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="relative group cursor-pointer"
              >
                <div className="aspect-video bg-gradient-to-br from-card to-secondary/30 rounded-xl border border-border overflow-hidden">
                  {/* Video Placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-primary/20 border-2 border-primary/50 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/30 transition-all duration-300">
                        <Play className="w-8 h-8 text-primary ml-1" />
                      </div>
                      <p className="text-muted-foreground text-sm">Vídeo Depoimento</p>
                    </div>
                  </div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="mt-3 text-center">
                  <p className="font-semibold text-foreground">{video.name}</p>
                  <p className="text-sm text-muted-foreground">{video.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Section 2b: Text Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">
            O Que Nossos Alunos Dizem
          </h3>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {textTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors"
              >
                <Quote className="w-8 h-8 text-primary/40 mb-4" />
                <p className="text-foreground/90 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  {/* Photo Placeholder */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border border-border flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary/60" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                {/* Star Rating */}
                <div className="flex gap-1 mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden relative">
            <div className="bg-card border border-border rounded-2xl p-6">
              <Quote className="w-8 h-8 text-primary/40 mb-4" />
              <p className="text-foreground/90 mb-6 leading-relaxed italic min-h-[120px]">
                "{textTestimonials[currentTestimonial].quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border border-border flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-primary/60" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground">{textTestimonials[currentTestimonial].name}</p>
                  <p className="text-sm text-muted-foreground">{textTestimonials[currentTestimonial].role}</p>
                </div>
              </div>
              <div className="flex gap-1 mt-4">
                {[...Array(textTestimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>
            </div>
            
            {/* Carousel Controls */}
            <div className="flex justify-center gap-4 mt-4">
              <Button variant="outline" size="icon" onClick={prevTestimonial}>
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <div className="flex items-center gap-2">
                {textTestimonials.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-primary' : 'bg-muted'
                    }`}
                  />
                ))}
              </div>
              <Button variant="outline" size="icon" onClick={nextTestimonial}>
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Section 3: Results Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">
            Resultados dos Nossos Alunos
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {resultPlaceholders.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-card border border-emerald-500/30 rounded-2xl overflow-hidden">
                  {/* Screenshot Placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-emerald-950/30 to-green-950/20 flex items-center justify-center border-b border-emerald-500/20">
                    <div className="text-center">
                      <Image className="w-12 h-12 text-emerald-500/40 mx-auto mb-2" />
                      <p className="text-emerald-400/60 text-sm">Screenshot de Resultado</p>
                    </div>
                  </div>
                  {/* Result Stats */}
                  <div className="p-4 text-center">
                    <p className="text-sm text-muted-foreground mb-1">{result.title}</p>
                    <p className="text-2xl font-bold text-foreground mb-1">{result.value}</p>
                    <p className="text-sm text-emerald-400 font-semibold">{result.growth}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Section 4: Trust Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mb-16"
        >
          <h3 className="text-xl text-muted-foreground mb-8">
            Como visto em:
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {[1, 2, 3, 4, 5].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                className="w-32 h-12 bg-card border border-border rounded-lg flex items-center justify-center text-muted-foreground/50 hover:border-primary/30 transition-colors"
              >
                <span className="text-xs">Logo Parceiro</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA After Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="flex flex-col items-center gap-3">
            <Button
              onClick={() => setPopupOpen(true)}
              className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-base md:text-lg px-8 md:px-10 py-5 md:py-6 h-auto rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-105"
            >
              QUERO RESULTADOS COMO ESSES
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
