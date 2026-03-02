import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "Por que essa formação custa R$ 997 e não R$ 2.997?",
      answer: "A versão Premium inclui acesso direto a Arthur e Lyria em chamadas ao vivo e acompanhamento personalizado. Isso limita a quantidade de alunos que podemos atender e exige nosso tempo pessoal. Esta versão tem exatamente o mesmo conteúdo — as mesmas 75 aulas, os mesmos agentes de IA, as mesmas automações e os mesmos arquivos confidenciais. A diferença é que você implementa no seu ritmo, sem depender da nossa agenda. Para quem é autodidata, é a mesma formação por um terço do preço."
    },
    {
      question: "O conteúdo é o mesmo da versão Premium?",
      answer: "Sim. 100% idêntico. As mesmas 75 aulas práticas, os mesmos 10 módulos, os mesmos agentes de IA prontos para usar, as mesmas automações copie e cole, o mesmo Arsenal IA com +100 ferramentas e prompts, e os mesmos arquivos confidenciais com os números reais da nossa operação. A única diferença é o formato de acompanhamento: na versão Premium há chamadas ao vivo. Aqui, você avança com autonomia total."
    },
    {
      question: "O que NÃO está incluído nesta versão?",
      answer: "Esta versão não inclui as chamadas ao vivo com Arthur e Lyria nem o acompanhamento personalizado da versão Premium. Tudo que envolve conteúdo, ferramentas e materiais está 100% presente. Essa é justamente a razão do preço ser R$ 997 e não R$ 2.997 — você está acessando o sistema completo sem o custo do tempo pessoal dos fundadores. Para quem aprende fazendo, isso não é uma limitação. É uma vantagem: você avança no seu ritmo, sem fila de espera e sem depender de ninguém."
    },
    {
      question: "Preciso saber programar ou ter conhecimento técnico?",
      answer: "Não. A formação foi desenhada para ser prática e acessível. Usamos ferramentas no-code e templates prontos em todas as aulas. Se você sabe copiar e colar um texto, sabe usar nosso sistema. As aulas são 100% passo a passo — você acompanha na tela e replica. E os templates de automação são literalmente \"copie e cole\" — você não precisa criar nada do zero."
    },
    {
      question: "E se eu tiver dúvidas ou ficar travado em alguma parte?",
      answer: "As aulas foram projetadas para serem 100% autoexplicativas e práticas. Cada módulo inclui passo a passo completo, desde a configuração até a implementação final. A formação também segue uma estrutura progressiva — os módulos de fundamentos te preparam para os módulos avançados, eliminando gaps de conhecimento antes que eles aconteçam. Além disso, você tem acesso ao Arsenal IA com +100 ferramentas, prompts e códigos documentados para consultar sempre que precisar."
    },
    {
      question: "Por quanto tempo terei acesso?",
      answer: "Você terá 1 ano de acesso completo a todas as 75 aulas, agentes de IA, templates de automação, Arsenal IA e atualizações de conteúdo. É tempo de sobra para absorver todo o material e implementar as estratégias no seu próprio ritmo."
    },
    {
      question: "Isso é para iniciantes ou para quem já trabalha com IA?",
      answer: "Para os dois. O Módulo 1 começa do zero — fundamentos da IA, setup inicial, seu primeiro agente — perfeito para quem nunca automatizou nada. A partir do Módulo 4, o conteúdo avança para marketing automatizado, vendas com IA, dashboards em tempo real e sistemas completos de monetização. Se você é iniciante, a estrutura progressiva te leva do básico ao avançado sem pular etapas. Se já tem experiência, pode ir direto aos módulos avançados e pegar os agentes e automações prontos para usar na sua operação."
    },
    {
      question: "E se eu quiser fazer upgrade para a versão Premium depois?",
      answer: "Sim, é possível. Se depois de começar a formação você sentir que quer o acompanhamento ao vivo com Arthur e Lyria, pode migrar para a versão Premium pagando a diferença. Entre em contato com nossa equipe para saber as condições."
    },
    {
      question: "Que resultados posso esperar?",
      answer: "Os mesmos resultados que nossos alunos mais dedicados alcançam. Alunos como o Bruno reduziram processos de uma semana para 4-6 horas com automação. O André começou a vender projetos de IA no mercado com ticket médio considerável poucos dias após iniciar. Esses resultados vieram da implementação do conteúdo — das 75 aulas, dos agentes prontos e das automações. Quem executa o sistema, gera resultado."
    },
    {
      question: "Existe alguma garantia?",
      answer: "Sim. Você tem uma garantia incondicional de 7 dias. Se nos primeiros 7 dias você sentir que a formação não é para você, devolvemos 100% do seu investimento. Sem perguntas. Sem burocracia. 7 dias é tempo suficiente para acessar as primeiras 15+ aulas, ver os agentes de IA em ação e decidir se este sistema faz sentido para o seu negócio."
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium tracking-wide uppercase mb-6">
            FAQ
          </span>
          <h2 className="text-heading-1 md:text-display font-bold">
            Perguntas <span className="gradient-text">Frequentes</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="card-base px-6 py-1 data-[state=open]:border-emerald-500/20 transition-all duration-300"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-emerald-400 py-5 transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[hsl(215,12%,65%)] leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
