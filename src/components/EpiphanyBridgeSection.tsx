import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CTAPopup } from "@/components/CTAPopup";

export const EpiphanyBridgeSection = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  const comparison = [
    {
      isolated: "Você digita um prompt, recebe uma resposta",
      maestro: "O agente lê seus leads, qualifica sozinho, responde em 3 segundos"
    },
    {
      isolated: "Você pede para escrever um post",
      maestro: "O agente cria, agenda e publica em 3 plataformas sem você tocar"
    },
    {
      isolated: "Você gera uma imagem bonita",
      maestro: "O agente produz 30 criativos, testa todos, e otimiza a campanha"
    },
    {
      isolated: "Você fecha o computador, tudo para",
      maestro: "Você dorme, os agentes continuam vendendo, atendendo e publicando"
    }
  ];

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
          <h2 className="block md:hidden text-xl font-bold mb-8 leading-tight">
            97% Usam IA Sem Resultado.{" "}
            <span className="gradient-text">Os 3% Fazem Diferente.</span>
          </h2>
          <h2 className="hidden md:block text-3xl lg:text-4xl font-bold mb-8 leading-tight">
            Por Que 97% Das Pessoas Que "Usam IA"{" "}
            <span className="gradient-text">Não Geram Resultado Nenhum</span>{" "}
            — E O Que Os Outros 3% Fazem Diferente
          </h2>
        </motion.div>

        {/* Core Insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto mb-12 space-y-6"
        >
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
            Você já reparou numa coisa estranha? Todo mundo fala de IA. Todo mundo "usa" IA. Mas quase ninguém consegue mostrar resultado <span className="text-primary font-semibold">CONCRETO</span> — em dinheiro gerado ou tempo economizado.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
            Aqui está o motivo, sem rodeios:
          </p>
          <div className="bg-card p-6 md:p-8 rounded-xl border border-border/50">
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              <span className="text-primary font-semibold">Usar ferramenta de IA</span> é como ter um músico genial que só toca quando você aponta a batuta — e para no segundo que você abaixa o braço.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mt-4">
              <span className="text-primary font-semibold">Ter O Framework Maestro de agentes autônomos</span> é como ter uma ORQUESTRA COMPLETA ensaiada — ela executa a sinfonia inteira sozinha, 24 horas por dia, enquanto você está vivendo sua vida.
            </p>
          </div>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto mb-12"
        >
          <div className="grid grid-cols-2 gap-2 md:gap-4">
            {/* Header */}
            <div className="bg-destructive/20 border border-destructive/30 rounded-lg p-3 md:p-4 text-center">
              <span className="font-bold text-destructive text-sm md:text-base">Ferramenta isolada</span>
            </div>
            <div className="bg-primary/20 border border-primary/30 rounded-lg p-3 md:p-4 text-center">
              <span className="font-bold text-primary text-sm md:text-base">O Framework Maestro</span>
            </div>

            {/* Rows */}
            {comparison.map((row, index) => (
              <>
                <div key={`iso-${index}`} className="bg-card border border-border/30 rounded-lg p-3 md:p-4">
                  <p className="text-muted-foreground text-sm md:text-base">{row.isolated}</p>
                </div>
                <div key={`mae-${index}`} className="bg-card border border-primary/20 rounded-lg p-3 md:p-4">
                  <p className="text-foreground font-medium text-sm md:text-base">{row.maestro}</p>
                </div>
              </>
            ))}
          </div>
        </motion.div>

        {/* Closing paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="bg-gradient-primary p-1 rounded-xl">
            <div className="bg-background rounded-lg p-6 md:p-8">
              <p className="text-lg md:text-xl leading-relaxed text-foreground font-semibold text-center">
                A maioria dos cursos de IA te ensina a usar ferramentas — como apertar botões. A <span className="gradient-text">Formação Maestros da IA</span> te ensina a ORQUESTRAR — como reger uma operação autônoma usando O Framework Maestro.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Formation vs Mentoria */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto mb-12 space-y-6"
        >
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
            A Formação (<span className="text-primary font-semibold">R$ 997</span>) te entrega a orquestra completa. Todos os instrumentos, a partitura, o manual do regente. Você tem TUDO o que precisa para executar a sinfonia. E a maioria dos nossos alunos que mais cresceram fizeram exatamente isso: pegaram o sistema, implementaram com disciplina, e colheram os resultados.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
            Agora, se você quer Arthur e Lyria como regentes ao seu lado — ajustando cada agente COM você, em tempo real, corrigindo sua rota antes de qualquer erro — existe a <span className="text-primary font-semibold">Mentoria Premium (R$ 2.997)</span>. É como a diferença entre estudar com a partitura sozinho e ter o compositor ao seu lado ensinando cada nuance.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-foreground font-semibold text-center">
            Ambas as opções te levam ao resultado. A Mentoria só garante que você chegue mais rápido e com acompanhamento de elite.
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
            <span className="block md:hidden">QUERO O FRAMEWORK</span>
            <span className="hidden md:block">QUERO O FRAMEWORK MAESTRO COMPLETO</span>
          </Button>
          <p className="text-sm text-muted-foreground mt-3">
            Acesso imediato + Garantia de Execução de 90 dias
          </p>
        </div>
      </div>

      <CTAPopup open={popupOpen} onOpenChange={setPopupOpen} />
    </section>
  );
};
