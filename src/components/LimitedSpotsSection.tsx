import { Progress } from "@/components/ui/progress";
import { Users, AlertTriangle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import avatar1 from "@/assets/avatar1.jpg";
import avatar2 from "@/assets/avatar2.jpg";
import avatar3 from "@/assets/avatar3.jpg";

export const LimitedSpotsSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-muted/30 border-b border-border relative">
      <div className="container mx-auto max-w-3xl text-center space-y-8">
        {/* Limited Spots Warning */}
        <div className="relative">
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/30 dark:to-orange-900/20 border-2 border-orange-300 dark:border-orange-700 rounded-xl p-6 shadow-lg backdrop-blur-sm">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="bg-orange-200 dark:bg-orange-800 p-2 rounded-full animate-pulse">
                <AlertTriangle className="text-orange-700 dark:text-orange-300 w-6 h-6" />
              </div>
              <h3 className="text-orange-900 dark:text-orange-100 font-bold text-xl">
                VAGAS PARA O LANÇAMENTO QUASE ESGOTADAS
              </h3>
            </div>
            <p className="text-orange-800 dark:text-orange-200 text-base leading-relaxed font-medium">
              Para garantir o máximo de atenção, abriremos apenas <strong>20 vagas</strong> no grupo de lançamento com o preço especial. Quando o limite for atingido, o valor irá subir.
            </p>
          </div>
          
          {/* Pulsing Arrow */}
          <div className="flex justify-center mt-6">
            <div className="animate-bounce">
              <ChevronDown className="w-8 h-8 text-primary opacity-70" />
            </div>
          </div>
        </div>

        {/* Unified Vagas & Maestros Card */}
        <div className="bg-card/95 backdrop-blur-sm rounded-2xl border border-border shadow-2xl p-8 max-w-lg mx-auto">
          {/* Avatars */}
          <div className="flex justify-center mb-6 -space-x-2">
            <img 
              src={avatar1} 
              alt="User 1" 
              className="w-12 h-12 rounded-full border-3 border-background shadow-lg"
            />
            <img 
              src={avatar2} 
              alt="User 2" 
              className="w-12 h-12 rounded-full border-3 border-background shadow-lg"
            />
            <img 
              src={avatar3} 
              alt="User 3" 
              className="w-12 h-12 rounded-full border-3 border-background shadow-lg"
            />
          </div>

          {/* Main Title */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="bg-primary/10 p-2 rounded-full">
              <Users className="text-primary w-6 h-6" />
            </div>
            <div className="text-center">
              <p className="text-xl font-bold text-foreground mb-1">
                <span className="text-primary">12/20</span> Vagas Preenchidas
              </p>
              <p className="text-sm text-muted-foreground">
                Atualmente: <span className="text-primary font-semibold">12 Maestros</span>
              </p>
            </div>
            <div className="bg-primary/10 p-2 rounded-full">
              <Users className="text-primary w-6 h-6" />
            </div>
          </div>

          {/* Visual Progress Bar */}
          <div className="mb-6">
            <div className="w-full bg-muted/50 rounded-full p-1 shadow-inner border border-border/50">
              <div className="flex gap-1">
                {Array.from({ length: 20 }, (_, index) => (
                  <div
                    key={index}
                    className={`flex-1 h-3 rounded-full transition-all duration-300 ${
                      index < 12
                        ? 'bg-gradient-to-r from-primary to-primary-glow shadow-sm'
                        : 'bg-muted'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Progress Details */}
          <div className="space-y-3 text-center">
            <p className="text-sm font-medium text-muted-foreground">Progresso:</p>
            <div className="relative">
              <Progress value={60} className="h-4 bg-muted shadow-inner" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse opacity-50"></div>
            </div>
            <p className="text-base font-semibold text-primary">60% Preenchido</p>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 pointer-events-none"></div>
    </section>
  );
};