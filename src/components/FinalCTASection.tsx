import { useState } from "react";
import { Button } from "@/components/ui/button";
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
        
        <div className="flex justify-center">
          <Button 
            variant="cta" 
            size="xl" 
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-primary-foreground font-bold text-xl px-8 md:px-12 py-4 md:py-6 h-auto"
            onClick={() => setPopupOpen(true)}
          >
            GARANTIR VAGA
          </Button>
        </div>
        
        <CTAPopup open={popupOpen} onOpenChange={setPopupOpen} />
      </div>
    </section>
  );
};