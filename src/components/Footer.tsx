import { Logo } from "@/components/Logo";

export const Footer = () => {
  return (
    <footer className="bg-[hsl(220,20%,3%)] border-t border-border/30 py-10 sm:py-16 px-4 sm:px-6 md:px-12">
      <div className="container mx-auto max-w-4xl">
        {/* Logo */}
        <div className="text-center mb-8">
          <Logo size="sm" />
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
          <a href="mailto:contato@lyraarte.com?subject=Pol%C3%ADtica%20de%20Privacidade" className="text-sm text-[hsl(215,10%,45%)] hover:text-emerald-400 transition-colors">Privacidade</a>
          <span className="w-1 h-1 rounded-full bg-white/10" />
          <a href="mailto:contato@lyraarte.com?subject=Termos%20de%20Uso" className="text-sm text-[hsl(215,10%,45%)] hover:text-emerald-400 transition-colors">Termos de Uso</a>
          <span className="w-1 h-1 rounded-full bg-white/10" />
          <a href="mailto:contato@lyraarte.com" className="text-sm text-[hsl(215,10%,45%)] hover:text-emerald-400 transition-colors">Contato</a>
        </div>

        {/* Disclaimer */}
        <div className="text-center space-y-3 text-xs text-[hsl(215,8%,35%)] max-w-2xl mx-auto">
          <p>
            &copy; 2026 Formação Maestros da IA — Lyra Arte LTDA. Todos os direitos reservados.
          </p>
          <p className="leading-relaxed">
            Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho de alunos ou à receita gerada pelos criadores é verídica e documentada, porém resultados individuais podem variar e dependem de fatores como dedicação, experiência prévia e condições de mercado.
          </p>
          <p className="leading-relaxed">
            Este site não é afiliado ao Facebook, Instagram, Google ou qualquer plataforma mencionada. Todo o conteúdo deste site é de responsabilidade exclusiva de seus criadores.
          </p>
          <p>
            Ao adquirir este produto, você concorda com os nossos Termos de Uso e Política de Privacidade.
          </p>
          <p className="text-[hsl(215,8%,28%)] pt-2">
            Lyra Arte LTDA — CNPJ sob consulta · Atendimento: contato@lyraarte.com
          </p>
        </div>
      </div>
    </footer>
  );
};
