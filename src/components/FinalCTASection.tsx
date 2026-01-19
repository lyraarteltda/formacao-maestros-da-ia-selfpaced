import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { CTAPopup } from "@/components/CTAPopup";

export const FinalCTASection = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <section className="section-padding bg-gradient-primary text-primary-foreground">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 text-white">
          Pronto para se tornar um Maestro da IA?
        </h2>
        
        <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto text-white">
          Inscreva-se hoje e esteja à frente do mercado.
        </p>
        
        <div className="flex flex-col items-center gap-3">
          <Button 
            onClick={() => setPopupOpen(true)}
            className="bg-white text-primary hover:bg-white/90 font-bold text-lg md:text-xl px-8 md:px-12 py-5 md:py-6 h-auto rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
          >
            COMEÇAR MINHA TRANSFORMAÇÃO AGORA
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <p className="text-sm text-white/80">
            Acesso imediato + Garantia de 7 dias
          </p>
        </div>
        
        <CTAPopup open={popupOpen} onOpenChange={setPopupOpen} />
      </div>
    </section>
  );
};
