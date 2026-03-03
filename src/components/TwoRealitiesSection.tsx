import { useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTAPopup } from "@/components/CTAPopup";

export const TwoRealitiesSection = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <section className="py-8 md:py-16 px-4 bg-gradient-to-b from-background via-secondary/20 to-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
            Março de 2027: Duas Realidades.{" "}
            <span className="gradient-text">Você Só Pode Escolher Uma.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Reality A */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-destructive/20 to-destructive/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-card border border-destructive/30 rounded-2xl p-8 h-full hover:border-destructive/50 transition-all duration-300 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-destructive/10 rounded-lg">
                  <Moon className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <span className="text-xs font-bold text-destructive bg-destructive/10 px-2 py-1 rounded-full">REALIDADE A</span>
                  <h3 className="text-2xl font-bold text-foreground mt-1">O Escravo Glorificado</h3>
                </div>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  É março de 2027. São 3h17 da manhã. Você acorda em suor frio. O celular vibra na mesinha — mais um lead no WhatsApp. Você sabe que se não responder agora, perde a venda. Mas o corpo pesa. Os olhos ardem.
                </p>
                <p>
                  Às 6h47, o despertador toca. Você já está acordado faz 3 horas. Toma café rápido — sem sentir o gosto. Senta no computador. 23 mensagens de clientes esperando. Você começa a responder uma por uma. Manualmente.
                </p>
                <p>
                  No almoço, você abre o LinkedIn e vê que seu concorrente fechou o trimestre com 3x mais contratos. Ele está na praia. Você está no escritório. A diferença? Ele tem <span className="text-primary font-semibold">O Framework Maestro</span> de agentes autônomos trabalhando por ele.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Reality B */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-card border border-primary/30 rounded-2xl p-8 h-full hover:border-primary/50 transition-all duration-300 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Sun className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">REALIDADE B</span>
                  <h3 className="text-2xl font-bold text-foreground mt-1">O Maestro</h3>
                </div>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  É março de 2027. Você acorda naturalmente — sem despertador. São 8h30. Você pega o celular e abre seu dashboard. Os números da noite: <span className="text-primary font-semibold">R$ 3.470 em vendas</span> processadas enquanto você dormia.
                </p>
                <p>
                  Seu Agente de Vendas qualificou 12 leads ontem à noite — 4 fecharam sozinhos. Seu Agente de Conteúdo publicou 4 posts em 3 plataformas. Seu Agente de Suporte resolveu 8 chamados. Nenhum precisou de você.
                </p>
                <p>
                  Você se levanta, vai até a cozinha. O cheiro do café. A luz da manhã entrando pela janela. Calma. Você revisa os números em 20 minutos, ajusta uma campanha com 3 cliques, e fecha o laptop. O resto do dia é seu.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Final text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-8"
        >
          <p className="text-xl md:text-2xl font-bold text-foreground max-w-4xl mx-auto leading-relaxed">
            Quem você quer ser daqui a 12 meses? O operador que acorda às 3 da manhã? Ou o <span className="gradient-text">Maestro</span> que acorda às 8h30 e vê R$ 3.470 que entraram enquanto dormia?
          </p>
        </motion.div>

        {/* CTA */}
        <div className="text-center">
          <Button
            variant="cta"
            size="xl"
            className="w-full md:w-auto text-sm md:text-lg px-4 md:px-10"
            onClick={() => setPopupOpen(true)}
          >
            EU ESCOLHO SER MAESTRO
          </Button>
          <p className="text-sm text-muted-foreground mt-3">
            R$ 997 · 12x de R$ 97,42
          </p>
        </div>
      </div>

      <CTAPopup open={popupOpen} onOpenChange={setPopupOpen} />
    </section>
  );
};
