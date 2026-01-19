import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "Preciso saber programar ou ter conhecimento técnico?",
      answer: "Não. A formação foi desenhada tanto para iniciantes quanto para quem já tem experiência. Nós te damos acesso a produtos e ferramentas no-code e suporte técnico necessário."
    },
    {
      question: "Em quanto tempo consigo ter resultados?",
      answer: "Alunos dedicados conquistam resultados em menos de 30 dias, aplicando nossa metodologia e vendendo os produtos prontos."
    },
    {
      question: "Por quanto tempo terei acesso?",
      answer: "Você terá 1 ano de acesso ao suporte, formação, comunidade e encontros ao vivo."
    },
    {
      question: "E se eu tiver dúvidas durante o processo?",
      answer: "Você terá suporte técnico na comunidade e encontros mensais ao vivo para garantir que nenhuma dúvida te impeça de avançar."
    },
    {
      question: "Existe alguma garantia?",
      answer: "Sim. Você tem uma garantia incondicional de 7 dias. Se achar que a formação não é para você, devolvemos 100% do investimento."
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Perguntas <span className="gradient-text">Frequentes</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border rounded-lg px-6"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};