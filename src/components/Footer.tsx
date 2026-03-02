import { Logo } from "@/components/Logo";

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border section-padding">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-lg font-semibold gradient-text mb-6">Formação Maestros da IA</p>
        </div>

        <div className="mt-6 text-center text-sm text-muted-foreground space-y-4">
          <p>
            &copy; 2026 Formação Maestros da IA — Lyra Arte LTDA. Todos os direitos reservados.
          </p>
          <p className="max-w-3xl mx-auto leading-relaxed">
            Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho de alunos ou à receita gerada pelos criadores é verídica e documentada, porém resultados individuais podem variar e dependem de fatores como dedicação, experiência prévia e condições de mercado.
          </p>
          <p className="max-w-3xl mx-auto">
            Este site não é afiliado ao Facebook, Instagram, Google ou qualquer plataforma mencionada. Todo o conteúdo deste site é de responsabilidade exclusiva de seus criadores.
          </p>
          <p>
            Ao adquirir este produto, você concorda com os nossos Termos de Uso e Política de Privacidade.
          </p>
          <div className="flex items-center justify-center gap-4 pt-4">
            <a href="mailto:contato@lyraarte.com?subject=Pol%C3%ADtica%20de%20Privacidade" className="text-muted-foreground hover:text-primary transition-colors">Privacidade</a>
            <span className="text-muted-foreground">·</span>
            <a href="mailto:contato@lyraarte.com?subject=Termos%20de%20Uso" className="text-muted-foreground hover:text-primary transition-colors">Termos de Uso</a>
            <span className="text-muted-foreground">·</span>
            <a href="mailto:contato@lyraarte.com" className="text-muted-foreground hover:text-primary transition-colors">Contato</a>
          </div>
          <p className="text-xs text-muted-foreground/60 pt-2">
            Lyra Arte LTDA — CNPJ sob consulta · Atendimento: contato@lyraarte.com
          </p>
        </div>
      </div>
    </footer>
  );
};
