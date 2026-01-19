import MatrixBackground from "./MatrixBackground";

export const ProblemSolutionSection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden" data-section="problem-solution">
      <MatrixBackground />
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Competitors Section */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 leading-tight">
            Enquanto você lê esta página, seus concorrentes estão usando robôs para:
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="p-6 rounded-lg bg-card border border-border/50">
              <p className="text-foreground font-medium">Automatizar 90% do processo de vendas</p>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border/50">
              <p className="text-foreground font-medium">Produzir conteúdo em escala para atrair clientes organicamente</p>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border/50">
              <p className="text-foreground font-medium">Produzir 100 criativos por dia para escalar o tráfego pago</p>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border/50">
              <p className="text-foreground font-medium">Reduzir custos operacionais e maximizar o lucro</p>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border/50">
              <p className="text-foreground font-medium">Analisar métricas e otimizar funis como um analista de dados profissional</p>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border/50">
              <p className="text-foreground font-medium">E muito mais…</p>
            </div>
          </div>
        </div>

        {/* Problem Statement */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-primary p-1 rounded-xl mb-8">
            <div className="bg-background rounded-lg p-8">
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-6">
                Se você se sente perdido com tantas ferramentas ou frustrado por não conseguir transformar o potencial da IA em lucro real, nós entendemos. O problema não é você, é a falta de um mapa.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-6">
                Tentar usar a IA sem um método validado por empresas que já escalaram é como tentar montar um quebra-cabeça no escuro. Você gasta tempo, dinheiro e energia para, no fim, continuar no mesmo lugar.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-foreground font-semibold">
                A maioria tenta, mas falha por não ter um caminho validado e uma orientação direcionada.
              </p>
            </div>
          </div>
        </div>

        {/* Solution Section */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-center leading-tight">
            A Formação de quem construiu resultados reais —{" "}
            <span className="gradient-text">sem vender ilusões</span>
          </h2>
          
          <div className="space-y-8">
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              Enquanto muitos "gurus" enriquecem vendendo promessas vazias, nós fizemos o oposto: montamos um negócio do zero e, em apenas 15 meses, alcançamos{" "}
              <span className="text-primary font-semibold">R$ 2,5 milhões em vendas</span> de infoprodutos de música, um dos mercados onde o público é mais resistente a investir. Nosso produto se tornou o único curso de violão com 5 estrelas entre os TOP 10 da Hotmart.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              As estratégias que você vai aprender não nasceram de teorias genéricas e brainstorms aleatórios. Foram{" "}
              <span className="text-primary font-semibold">validadas na prática</span> em um mercado sem hype, sem crescimento acelerado e sem promessas milagrosas.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              Ao entrar na Formação, você terá acesso aos nossos números reais e a{" "}
              <span className="text-primary font-semibold">100% das estratégias, ferramentas de IA, Agentes e Automações</span> que usamos para ultrapassar os 6 dígitos por mês, trabalhando menos de 30 minutos por dia.
            </p>
            
            <div className="bg-card p-8 rounded-xl border border-border/50 text-center">
              <p className="text-xl md:text-2xl font-bold text-foreground mb-4">
                A Formação Maestros da IA não é apenas mais um curso.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground mb-6">
                É um <span className="gradient-text font-semibold">ecossistema completo</span> para você escalar, usando as melhores ferramentas de inteligência artificial e automação do mercado.
              </p>
              
              <div className="space-y-4 mt-6">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Quando você estiver conosco, fará parte de um <span className="gradient-text font-semibold">clube exclusivo</span> que proporcionará uma experiência privilegiada.
                </p>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Estará cercado por <span className="gradient-text font-semibold">empresários de alto nível</span> que serão sua inspiração, pessoas que admirará e com quem poderá aprender constantemente.
                </p>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Forneceremos o conhecimento mais avançado sobre IA e automação para manter sua vantagem competitiva e garantir que você nunca desperdice oportunidades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};