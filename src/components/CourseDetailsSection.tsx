import { Brain, Settings, TrendingUp } from "lucide-react";
import automationVisual from "@/assets/automation-visual.jpg";
export const CourseDetailsSection = () => {
  const features = [{
    icon: Brain,
    title: "Fundamentos da IA",
    description: "Entenda como usar as ferramentas mais poderosas de hoje."
  }, {
    icon: Settings,
    title: "Automação Prática",
    description: "Crie sistemas que funcionam 24/7 sem esforço manual."
  }, {
    icon: TrendingUp,
    title: "Escala de Negócio",
    description: "Estruture e escale operações com eficiência máxima."
  }];
  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            O que você vai aprender
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Um curso completo para dominar as ferramentas de IA e automação
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex md:gap-4 md:flex-row flex-col md:text-left text-center md:items-start items-center">
                <div className="flex-shrink-0 md:mb-0 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <img
              src={automationVisual}
              alt="Automação em ação"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};