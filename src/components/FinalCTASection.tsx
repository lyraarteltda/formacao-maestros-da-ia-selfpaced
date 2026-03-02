import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { CTAPopup } from "@/components/CTAPopup";

export const FinalCTASection = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <section className="section-padding bg-gradient-primary text-primary-foreground">
      <div className="container mx-auto text-center max-w-4xl">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 text-white">
          Cada Dia Sem Este Sistema é Um Dia de Oportunidades Perdidas
        </h2>

        <p className="text-lg md:text-xl mb-4 opacity-90 max-w-3xl mx-auto text-white leading-relaxed">
          Enquanto você analisa esta página, outros profissionais estão ativando agentes de IA que vendem, automatizam e escalam por eles. Estão colocando automações para rodar enquanto dormem. Estão construindo negócios que funcionam 24 horas por dia — com menos de 30 minutos de trabalho.
        </p>

        <p className="text-lg md:text-xl mb-8 text-white font-semibold">
          A diferença entre quem lidera e quem fica para trás não é talento. É acesso ao sistema certo. E hoje, esse acesso custa R$ 997.
        </p>

        {/* Pricing reminder */}
        <div className="mb-8">
          <span className="text-xl text-white/60 line-through">De R$ 2.997</span>
          <span className="text-2xl md:text-3xl text-white font-bold ml-3">por 12x de R$ 97,42 ou R$ 997 à vista</span>
          <p className="text-sm text-white/80 mt-2">
            Preço de lançamento — valor sobe para R$ 1.497 após o encerramento da oferta.
          </p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <Button
            onClick={() => setPopupOpen(true)}
            className="bg-white text-primary hover:bg-white/90 font-bold text-lg md:text-xl px-8 md:px-12 py-5 md:py-6 h-auto rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
          >
            QUERO O SISTEMA COMPLETO
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <p className="text-sm text-white/80">
            Acesso imediato · Garantia de 7 dias · 75 aulas práticas · 12x de R$ 97,42
          </p>
        </div>

        {/* P.S. */}
        <div className="mt-12 max-w-3xl mx-auto text-left">
          <p className="text-sm text-white/80 leading-relaxed">
            <span className="font-bold text-white">P.S.</span> — Se você leu até aqui, já sabe que precisa de IA no seu negócio. A pergunta não é "se" — é "quando". E a resposta é agora, enquanto o preço ainda é R$ 997. Esse é o mesmo sistema que gerou R$ 2,5 milhões em 15 meses. As mesmas 75 aulas. Os mesmos agentes de IA. As mesmas automações. Tudo pronto para usar, no seu ritmo, com autonomia total. Daqui a 6 meses, você pode estar comemorando seus resultados — ou desejando ter começado hoje. A decisão é sua.
          </p>
        </div>

        <CTAPopup open={popupOpen} onOpenChange={setPopupOpen} />
      </div>
    </section>
  );
};
