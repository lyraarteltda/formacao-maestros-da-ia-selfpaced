export const BonusSection = () => {
  return (
    <section className="section-padding bg-gradient-primary text-primary-foreground">
      <div className="container mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-heading-2 sm:text-heading-1 md:text-display font-bold mb-4">
            <span className="gradient-text tracking-wider">OS MAESTROS</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-20 items-center md:items-start">
            <div className="order-2 lg:order-1 md:pr-6">
              <p className="text-base md:text-lg leading-relaxed text-white">
                Somos um casal por trás do Maestros da IA e provamos que é possível crescer rápido no digital: faturamos 2,5 milhões em apenas um ano, começando do absoluto zero e com poucos recursos.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-white mt-4 md:mt-6">
                Nossa virada veio quando automatizamos processos e aplicamos IA no nosso negócio. Agora, através da Formação Maestros da IA, entregamos esse sistema completo para você implementar no seu ritmo.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-white mt-4 md:mt-6">
                Mostramos como a Inteligência Artificial e a Automação podem transformar não só empresas, mas também a sua rotina de trabalho — tudo de forma simples e sem complicação.
              </p>
            </div>
            <div className="order-1 lg:order-2 md:pl-6">
              <img src="/lovable-uploads/f3b2c877-3564-40ef-8dab-1ee449dbc40a.png" alt="Casal por trás do Maestros da IA" className="w-full h-auto rounded-2xl shadow-lg ring-1 ring-white/[0.06] md:max-w-xl lg:max-w-sm md:mx-auto" />
            </div>
          </div>

          {/* Founders Details */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mt-10 sm:mt-16">
            {/* Lyria Zoccal */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 sm:p-8 border border-white/20 transition-all duration-300 hover:bg-white/[0.12]">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Lyria Zoccal</h3>
              <p className="text-base sm:text-lg text-white/90 mb-4 sm:mb-6">Co-Fundadora Lyra Academy e Maestria Academy | Especialista em IA e Automação</p>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 flex-shrink-0 mt-2" />
                  <span>Estudou Administração (UFPR)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 flex-shrink-0 mt-2" />
                  <span>Experiência em TI: Consultoria (ERP - SAP Business One)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 flex-shrink-0 mt-2" />
                  <span>Estudou 3 anos de Medicina</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 flex-shrink-0 mt-2" />
                  <span>Transição estratégica para mercado de IA e Automação</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 flex-shrink-0 mt-2" />
                  <span>Visão empresarial focada em inovação e eficiência com o uso de IA e Automação</span>
                </li>
              </ul>
            </div>

            {/* Arthur Endo */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 sm:p-8 border border-white/20 transition-all duration-300 hover:bg-white/[0.12]">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Arthur Endo</h3>
              <p className="text-base sm:text-lg text-white/90 mb-4 sm:mb-6">Co-Fundador Lyra Academy e Maestria Academy | Especialista em IA e Automação</p>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 flex-shrink-0 mt-2" />
                  <span>Graduação em Música (Unicamp)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 flex-shrink-0 mt-2" />
                  <span>Violonista clássico premiado nacional e internacionalmente</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 flex-shrink-0 mt-2" />
                  <span>3 discos gravados e turnês internacionais</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 flex-shrink-0 mt-2" />
                  <span>Doutor Honoris Causa pela Universidade FACEI</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 flex-shrink-0 mt-2" />
                  <span>Pioneiro em aplicação prática de IA em operações empresariais</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
