import { Logo } from "@/components/Logo";

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border section-padding">
      <div className="container mx-auto">
        <div className="text-center">
          <p className="text-lg font-semibold gradient-text mb-6">Formação Maestros da IA</p>
        </div>

        <div className="mt-6 pt-6 border-t border-border text-center text-muted-foreground space-y-4 text-sm leading-relaxed max-w-3xl mx-auto">
          <p>&copy; 2026 Formação Maestros da IA — Lyra Arte LTDA. Todos os direitos reservados.</p>
          
          <p>
            Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho de alunos ou à receita gerada pelos criadores é verídica e documentada, porém resultados individuais podem variar e dependem de fatores como dedicação, experiência prévia e condições de mercado.
          </p>
          
          <p>
            Este site não é afiliado ao Facebook, Instagram, Google ou qualquer plataforma mencionada. Todo o conteúdo deste site é de responsabilidade exclusiva de seus criadores.
          </p>
          
          <p>
            Ao adquirir este produto, você concorda com os nossos Termos de Uso e Política de Privacidade.
          </p>
          
          <p>
            Lyra Arte LTDA — CNPJ sob consulta · Atendimento: contato@lyraarte.com
          </p>
        </div>
      </div>
    </footer>
  );
};
