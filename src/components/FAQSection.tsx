import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "Por que essa formacao custa R$ 997 e nao R$ 2.997?",
      answer: "A versao Premium inclui chamadas ao vivo com Arthur e Lyria — isso limita a quantidade de alunos e exige nosso tempo pessoal. Esta versao tem exatamente o mesmo conteudo — as mesmas 75 aulas, os mesmos agentes de IA, as mesmas automacoes e os mesmos arquivos confidenciais. A diferenca e que voce implementa no seu ritmo, sem depender da nossa agenda. Para quem e autodidata, e a mesma formacao por um terco do preco."
    },
    {
      question: "O conteudo e o mesmo da versao Premium?",
      answer: "Sim. 100% identico. As mesmas 75 aulas praticas, os mesmos 10 modulos, os mesmos agentes de IA prontos para usar, as mesmas automacoes copie e cole, o mesmo Arsenal IA com +100 ferramentas e prompts, e os mesmos arquivos confidenciais com os numeros reais da nossa operacao. A unica diferenca e o formato de acompanhamento: na versao Premium ha chamadas ao vivo. Aqui, voce avanca com autonomia total."
    },
    {
      question: "O que NAO esta incluido nesta versao?",
      answer: "Chamadas ao vivo com Arthur e Lyria. E so. O sistema completo esta 100% presente — e essa e justamente a razao do preco ser R$ 997 e nao R$ 2.997. Voce acessa o sistema completo sem o custo do tempo pessoal dos fundadores. Para quem executa, isso e VANTAGEM: sem fila, sem agenda, sem depender de ninguem."
    },
    {
      question: "Preciso saber programar ou ter conhecimento tecnico?",
      answer: "Nao. A formacao foi desenhada para ser pratica e acessivel. Usamos ferramentas no-code e templates prontos em todas as aulas. Se voce sabe copiar e colar um texto, sabe usar nosso sistema. As aulas sao 100% passo a passo — voce acompanha na tela e replica. E os templates de automacao sao literalmente \"copie e cole\" — voce nao precisa criar nada do zero."
    },
    {
      question: "E se eu tiver duvidas ou ficar travado em alguma parte?",
      answer: "As aulas foram projetadas para serem 100% autoexplicativas e praticas. Cada modulo inclui passo a passo completo, desde a configuracao ate a implementacao final. A formacao tambem segue uma estrutura progressiva — os modulos de fundamentos te preparam para os modulos avancados, eliminando gaps de conhecimento antes que eles acontecam. Alem disso, voce tem acesso ao Arsenal IA com +100 ferramentas, prompts e codigos documentados para consultar sempre que precisar. Se precisar de direcionamento pontual, nossa equipe esta disponivel por WhatsApp."
    },
    {
      question: "Por quanto tempo terei acesso?",
      answer: "Voce tera 1 ano de acesso completo a todas as 75 aulas, agentes de IA, templates de automacao, Arsenal IA e atualizacoes de conteudo. E tempo de sobra para absorver todo o material e implementar as estrategias no seu proprio ritmo."
    },
    {
      question: "Isso e para iniciantes ou para quem ja trabalha com IA?",
      answer: "Para os dois. O Modulo 1 comeca do zero — fundamentos da IA, setup inicial, seu primeiro agente — perfeito para quem nunca automatizou nada. A partir do Modulo 4, o conteudo avanca para marketing automatizado, vendas com IA, dashboards em tempo real e sistemas completos de monetizacao. Se voce e iniciante, a estrutura progressiva te leva do basico ao avancado sem pular etapas. Se ja tem experiencia, pode ir direto aos modulos avancados e pegar os agentes e automacoes prontos para usar na sua operacao."
    },
    {
      question: "A IA muda todo dia. O conteudo nao vai ficar desatualizado?",
      answer: "Essa e exatamente a razao pela qual seu acesso inclui 1 ano de atualizacoes. Sempre que testamos e validamos um novo agente ou automacao na nossa propria operacao, adicionamos ao conteudo da formacao. Voce nao esta comprando um curso estatico — esta comprando acesso a um sistema vivo que evolui com a tecnologia. E os fundamentos de automacao, agentes e workflows que ensinamos nos primeiros modulos nao mudam com as tendencias. Sao a base que funciona independente de qual ferramenta esta na moda."
    },
    {
      question: "Em quanto tempo recupero os R$ 997?",
      answer: "Se voce implementar apenas UMA automacao do Modulo 6 — um chatbot de recuperacao de leads, por exemplo — e ela gerar UMA venda extra por semana, o sistema se paga no primeiro mes. Nossos alunos mais rapidos aplicaram o conteudo nas primeiras 2 semanas. Os mais empreendedores comecaram a vender projetos de automacao para outras empresas com ticket que pagou a formacao varias vezes."
    },
    {
      question: "Que resultados posso esperar?",
      answer: "Os mesmos resultados que nossos alunos mais dedicados alcancam. Alunos como o Bruno reduziram processos de uma semana para 4-6 horas com automacao. O Andre comecou a vender projetos de IA no mercado com ticket medio consideravel poucos dias apos iniciar. Esses resultados vieram da implementacao do conteudo — das 75 aulas, dos agentes prontos e das automacoes. Quem executa o sistema, gera resultado."
    },
    {
      question: "Existe alguma garantia?",
      answer: "Sim. Voce tem uma garantia incondicional de 7 dias. Se nos primeiros 7 dias voce sentir que a formacao nao e para voce, devolvemos 100% do seu investimento. Sem perguntas. Sem burocracia. 7 dias e tempo suficiente para acessar os primeiros 2 modulos, configurar seu primeiro agente de IA e decidir se este sistema faz sentido para o seu negocio."
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-10 sm:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium tracking-wide uppercase mb-6">
            FAQ
          </span>
          <h2 className="text-heading-2 sm:text-heading-1 md:text-display font-bold">
            Perguntas <span className="gradient-text">Frequentes</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="card-base px-4 sm:px-6 py-1 data-[state=open]:border-emerald-500/20 transition-all duration-300"
            >
              <AccordionTrigger className="text-left text-sm sm:text-base font-semibold text-foreground hover:text-emerald-400 py-4 sm:py-5 transition-colors min-h-[44px]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-[hsl(215,12%,65%)] leading-relaxed pb-4 sm:pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
