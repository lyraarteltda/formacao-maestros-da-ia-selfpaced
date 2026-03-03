import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
export const TestimonialsSection = () => {
  const testimonials = [{
    name: "Carlos Silva",
    image: testimonial1,
    quote: "Transformei meu negócio em menos de 60 dias.",
    role: "Empreendedor Digital"
  }, {
    name: "Ana Santos",
    image: testimonial2,
    quote: "Economizei horas de trabalho todos os dias com automações.",
    role: "Consultora de Marketing"
  }, {
    name: "Roberto Costa",
    image: testimonial3,
    quote: "É o melhor investimento que já fiz.",
    role: "CEO Tech Startup"
  }];
  return (
    <section className="py-8 md:py-16 px-4 md:px-8 lg:px-16 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            O que nossos alunos dizem
          </h2>
          <p className="text-xl text-muted-foreground">
            Resultados reais de pessoas reais
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card p-8 rounded-2xl shadow-sm border">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                </div>
              </div>
              <blockquote className="text-lg italic">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};