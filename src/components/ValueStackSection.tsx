import { Check, GraduationCap, Video, Wrench, FolderOpen, FileText, HeadphonesIcon } from "lucide-react";
import { motion } from "framer-motion";

interface StackItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  value: number;
  isMain?: boolean;
}

const stackItems: StackItem[] = [
  {
    icon: <GraduationCap className="w-6 h-6 md:w-8 md:h-8" />,
    title: "Formação Maestros da IA",
    description: "Sistema Completo de 10 Semanas",
    value: 4997,
    isMain: true,
  },
  {
    icon: <Video className="w-6 h-6 md:w-8 md:h-8" />,
    title: "BÔNUS #1: O Cofre de Mentoria e Aceleração de Lucros",
    description: "12 mentorias ao vivo mensais com Arthur e Lyria",
    value: 2997,
  },
  {
    icon: <Wrench className="w-6 h-6 md:w-8 md:h-8" />,
    title: "BÔNUS #2: Arsenal de 100+ Ferramentas de IA",
    description: "Curadoria exclusiva das melhores ferramentas",
    value: 1497,
  },
  {
    icon: <FolderOpen className="w-6 h-6 md:w-8 md:h-8" />,
    title: "BÔNUS #3: Pasta de Projetos Reais",
    description: "Propostas de clientes reais — servimos apenas 5% dos que nos procuram",
    value: 1997,
  },
  {
    icon: <FileText className="w-6 h-6 md:w-8 md:h-8" />,
    title: "BÔNUS #4: Arquivos Confidenciais de Operação",
    description: "Como administramos nosso negócio em apenas 30 minutos por dia",
    value: 2497,
  },
  {
    icon: <HeadphonesIcon className="w-6 h-6 md:w-8 md:h-8" />,
    title: "BÔNUS #5: Suporte Técnico por 1 Ano",
    description: "Nunca fique travado — acesso direto a nossa equipe",
    value: 1997,
  },
];

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

export const ValueStackSection = () => {
  const totalValue = stackItems.reduce((acc, item) => acc + item.value, 0);
  const investmentToday = 3000;
  const monthlyValue = 323;

  return (
    <section className="section-padding bg-gradient-to-b from-background via-secondary/30 to-background">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Tudo Que Você Vai Receber</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Veja o valor real de cada componente do ecossistema Maestros da IA
          </p>
        </motion.div>

        {/* Value Stack */}
        <div className="space-y-4 md:space-y-6 mb-10">
          {stackItems.map((item, index) => {
            const runningTotal = stackItems
              .slice(0, index + 1)
              .reduce((acc, i) => acc + i.value, 0);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative rounded-2xl border ${
                  item.isMain
                    ? "border-primary bg-primary/10 shadow-lg shadow-primary/20"
                    : "border-border/50 bg-card/50 backdrop-blur-sm"
                } p-4 md:p-6`}
              >
                <div className="flex items-start gap-4">
                  {/* Checkmark */}
                  <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-5 h-5 md:w-6 md:h-6 text-primary" strokeWidth={3} />
                  </div>

                  {/* Icon */}
                  <div className={`flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center ${
                    item.isMain ? "bg-primary text-primary-foreground" : "bg-secondary text-primary"
                  }`}>
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-bold text-base md:text-lg lg:text-xl mb-1 ${
                      item.isMain ? "text-primary" : "text-foreground"
                    }`}>
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Value */}
                  <div className="flex-shrink-0 text-right">
                    <p className="text-lg md:text-xl lg:text-2xl font-bold text-muted-foreground line-through decoration-2">
                      {formatCurrency(item.value)}
                    </p>
                  </div>
                </div>

                {/* Running Total Indicator */}
                {index < stackItems.length - 1 && (
                  <div className="absolute -bottom-4 md:-bottom-5 right-6 md:right-8 bg-secondary border border-border rounded-full px-3 py-1 text-xs md:text-sm font-medium text-muted-foreground z-10">
                    Subtotal: {formatCurrency(runningTotal)}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Total and Investment */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Decorative Line */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-6 w-px h-12 bg-gradient-to-b from-transparent via-primary to-primary/50"></div>

          <div className="bg-gradient-to-br from-primary/20 via-card to-primary/10 border-2 border-primary rounded-3xl p-6 md:p-10 text-center shadow-2xl shadow-primary/20">
            {/* Total Value */}
            <div className="mb-6 pb-6 border-b border-primary/30">
              <p className="text-lg md:text-xl text-muted-foreground mb-2">
                VALOR TOTAL DO ECOSSISTEMA
              </p>
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-muted-foreground line-through decoration-4 decoration-destructive/60">
                {formatCurrency(totalValue)}
              </p>
            </div>

            {/* Investment Today */}
            <div className="mb-6">
              <p className="text-xl md:text-2xl text-foreground font-medium mb-3">
                SEU INVESTIMENTO HOJE
              </p>
              <div className="flex items-center justify-center gap-2 md:gap-4 flex-wrap">
                <span className="text-5xl md:text-6xl lg:text-7xl font-bold gradient-text">
                  {formatCurrency(investmentToday)}
                </span>
              </div>
              <p className="text-lg md:text-xl text-muted-foreground mt-3">
                ou <span className="text-primary font-semibold">12x de {formatCurrency(monthlyValue)}</span>
              </p>
            </div>

            {/* Savings Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 rounded-full px-5 py-2 md:px-6 md:py-3">
              <span className="text-primary font-bold text-lg md:text-xl">
                🎉 Economia de {formatCurrency(totalValue - investmentToday)}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
