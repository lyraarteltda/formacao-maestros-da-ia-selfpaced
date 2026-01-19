import { CheckCircle, PlayCircle, Cog, Users } from "lucide-react";
export const HowItWorksSection = () => {
  const steps = [{
    number: 1,
    icon: CheckCircle,
    title: "Inscreva-se e receba acesso imediato",
    description: "Acesso instantâneo a toda plataforma"
  }, {
    number: 2,
    icon: PlayCircle,
    title: "Aprenda com módulos curtos e práticos",
    description: "Conteúdo otimizado para aprendizado rápido"
  }, {
    number: 3,
    icon: Cog,
    title: "Implemente sistemas prontos no seu negócio",
    description: "Templates e automações para usar imediatamente"
  }, {
    number: 4,
    icon: Users,
    title: "Participe da comunidade exclusiva",
    description: "Suporte diário e networking com outros maestros"
  }];
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Como funciona
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            4 passos simples para transformar sua vida com IA
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  {step.number}
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};