import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "Qual a diferença entre a Formação (R$ 997) e a Mentoria Premium (R$ 2.997)?",
      answer: "A Formação te entrega O Framework Maestro COMPLETO: todos os agentes de IA, os 10 módulos de implementação, templates de automação, Arsenal IA, e Os Arquivos Confidenciais. É a orquestra completa com a partitura e o manual do regente — você tem tudo para reger sua operação com autonomia total. A Mentoria Premium adiciona Arthur e Lyria como seus regentes ao lado: chamadas ao vivo, ajustes em tempo real nos seus agentes, correção de rota personalizada e acompanhamento de perto. É para quem quer estrear com uma performance impecável na metade do tempo. Os dois caminhos funcionam — a Mentoria garante que você chegue mais rápido e sem erro."
    },
    {
      question: "O conteúdo é o mesmo da versão Premium?",
      answer: "Sim. 100% idêntico. Os mesmos agentes de IA prontos para ativar, os mesmos 10 módulos, as mesmas automações, o mesmo Arsenal IA com +100 recursos, e os mesmos Arquivos Confidenciais. A única diferença é o nível de acompanhamento: na Premium, Arthur e Lyria estão ao vivo acelerando sua implementação. Na Formação, você avança com o poder do Framework Maestro e sua própria disciplina."
    },
    {
      question: "Preciso saber programar ou ter conhecimento técnico?",
      answer: "Não. Zero. Arthur é músico — não sabia escrever uma linha de código quando começou. E justamente por isso que O Framework Maestro foi desenhado para funcionar sem programação. Programadores digitam código e torcem para funcionar. Maestros apontam a batuta e assistem o sistema executar. Usamos ferramentas no-code e templates prontos. As implementações são 100% passo a passo — você acompanha na tela e replica. Se você sabe copiar e colar um texto, você consegue ativar seus agentes."
    },
    {
      question: "E se eu tiver dúvidas ou ficar travado?",
      answer: "Cada módulo segue uma estrutura progressiva — os fundamentos te preparam para o avançado, eliminando gaps antes que apareçam. Você também tem o Arsenal IA com +100 recursos documentados para consultar. E se precisar de direcionamento pontual, nossa equipe está disponível por WhatsApp. Ninguém fica travado."
    },
    {
      question: "Por quanto tempo terei acesso?",
      answer: "1 ano completo. Acesso a todos os agentes, módulos, templates, Arsenal IA e atualizações de conteúdo. Sempre que validamos algo novo na operação, adicionamos à formação. Tempo de sobra para ativar todo o sistema."
    },
    {
      question: "Isso é para iniciantes ou para quem já trabalha com IA?",
      answer: "Para os dois. Se você é iniciante: o Módulo 1 começa do absoluto zero e seu primeiro agente está ativo nas primeiras 24 horas. Se você já tem experiência: vá direto aos módulos avançados e pegue os agentes prontos para plugar na sua operação. O Framework Maestro se adapta ao seu nível."
    },
    {
      question: "A IA muda todo dia. O conteúdo não vai ficar desatualizado?",
      answer: "Por isso seu acesso inclui 1 ano de atualizações. Nós usamos O Framework Maestro na nossa própria operação todos os dias — quando algo muda, nós atualizamos primeiro na prática e depois na formação. Você não está comprando um curso estático — está comprando acesso a um sistema vivo. E os fundamentos de orquestração de agentes que ensinamos não mudam com modismos. São a base que funciona independente de qual ferramenta está na moda."
    },
    {
      question: "Em quanto tempo recupero os R$ 997?",
      answer: "Seu primeiro agente roda nas primeiras 24 horas (Módulo 1). Se você implementar apenas o Agente de Vendas no WhatsApp e ele gerar UMA venda extra por semana, o sistema se paga no primeiro mês. Se você vender projetos de automação para empresas (Módulo 10), um ÚNICO projeto já paga a formação várias vezes. Nossos alunos mais rápidos recuperaram o investimento nas primeiras 2 semanas."
    },
    {
      question: "E se eu quiser upgrade para a Mentoria Premium depois?",
      answer: "Sim. Se após começar a Formação você decidir que quer Arthur e Lyria ao vivo acelerando sua implementação, pode fazer upgrade pagando apenas a diferença. O caminho está sempre aberto."
    },
    {
      question: "Como funciona a Garantia de Execução de 90 dias?",
      answer: "Assista às aulas, copie nossos 3 primeiros agentes e rode o sistema. Se em 90 dias você não automatizar pelo menos 10 horas do seu trabalho semanal, devolvemos 100% do investimento + 1 hora de consultoria gratuita para consertar seu funil. Basta enviar um email para contato@lyraarte.com mostrando que você implementou os 3 primeiros agentes. Sem burocracia. O risco é inteiramente nosso — porque confiamos no Framework Maestro."
    }
  ];

  return (
    <section className="py-8 md:py-16 px-4 md:px-8 lg:px-16 bg-background">
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
