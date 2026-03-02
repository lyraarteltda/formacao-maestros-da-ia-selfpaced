import { Clock } from "lucide-react";

export const TopBanner = () => {
  return (
    <div className="bg-gradient-primary text-primary-foreground py-2 px-4 relative overflow-hidden animate-pulse">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-white/10 to-primary/20 animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-bounce"></div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 text-center">
          <div className="flex items-center gap-2 text-xs md:text-sm">
            <Clock className="w-3 h-3 md:w-4 md:h-4" />
            <div className="font-bold">
              <div>Formação</div>
              <div>Maestros da IA</div>
            </div>
            <span className="opacity-75">• Oferta de Lançamento</span>
          </div>

          <div className="flex items-center gap-3 text-xs md:text-sm">
            <span className="font-bold text-green-300">Lançamento: R$ 997</span>
            <span className="opacity-75">vs</span>
            <span className="line-through opacity-75">Após: R$ 1.497</span>
          </div>

          <div className="text-xs opacity-90 max-w-xs md:max-w-none">
            75 aulas práticas · Agentes de IA · Automações prontas
          </div>
        </div>
      </div>
    </div>
  );
};
