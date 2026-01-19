import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Lock, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const leadSchema = z.object({
  name: z.string().trim().min(2, "Nome deve ter pelo menos 2 caracteres").max(100, "Nome muito longo"),
  email: z.string().trim().email("E-mail inválido").max(255, "E-mail muito longo"),
  whatsapp: z.string().trim().max(20, "WhatsApp muito longo").optional().or(z.literal("")),
});

type LeadFormData = z.infer<typeof leadSchema>;

export const LeadCaptureSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<LeadFormData>({
    name: "",
    email: "",
    whatsapp: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof LeadFormData, string>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof LeadFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validate form data
    const result = leadSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof LeadFormData, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof LeadFormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate API call (replace with actual endpoint)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    toast({
      title: "Guia enviado! 🎉",
      description: "Verifique seu e-mail em alguns instantes.",
    });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-950 via-slate-900 to-purple-900">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary rounded-full filter blur-[100px] animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto section-padding py-12 md:py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 rounded-full px-4 py-1.5 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">GUIA GRATUITO</span>
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
              Os 12 Erros Fatais que Empreendedores Cometem com IA{" "}
              <span className="text-primary">(E Como Evitá-los)</span>
            </h2>

            <p className="text-lg md:text-xl text-purple-200/80 mb-8 leading-relaxed">
              Descubra por que 90% dos negócios falham ao implementar IA — e o que fazer diferente
            </p>

            {/* Ebook Mockup */}
            <div className="relative hidden md:block">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-purple-500/30 shadow-2xl">
                <div className="flex items-start gap-4">
                  <div className="w-20 h-28 bg-gradient-to-br from-primary to-purple-600 rounded-lg shadow-lg flex items-center justify-center flex-shrink-0">
                    <Download className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">Guia Digital PDF</p>
                    <p className="text-purple-300/70 text-sm mb-3">32 páginas de conteúdo prático</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">Checklist</span>
                      <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">Templates</span>
                      <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">Exemplos</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-primary rounded-2xl blur-lg opacity-40"></div>
              
              {/* Form Card */}
              <div className="relative bg-slate-900/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-purple-500/30">
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Guia Enviado!</h3>
                    <p className="text-purple-200/80">
                      Verifique seu e-mail (e a pasta de spam) em alguns instantes.
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">
                      Baixe Seu Guia Gratuito
                    </h3>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Input
                          type="text"
                          name="name"
                          placeholder="Seu nome"
                          value={formData.name}
                          onChange={handleChange}
                          className={`bg-slate-800/50 border-purple-500/30 text-white placeholder:text-purple-300/50 h-12 ${
                            errors.name ? "border-red-500" : ""
                          }`}
                        />
                        {errors.name && (
                          <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                        )}
                      </div>

                      <div>
                        <Input
                          type="email"
                          name="email"
                          placeholder="Seu melhor e-mail"
                          value={formData.email}
                          onChange={handleChange}
                          className={`bg-slate-800/50 border-purple-500/30 text-white placeholder:text-purple-300/50 h-12 ${
                            errors.email ? "border-red-500" : ""
                          }`}
                        />
                        {errors.email && (
                          <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                        )}
                      </div>

                      <div>
                        <Input
                          type="tel"
                          name="whatsapp"
                          placeholder="WhatsApp (opcional)"
                          value={formData.whatsapp}
                          onChange={handleChange}
                          className={`bg-slate-800/50 border-purple-500/30 text-white placeholder:text-purple-300/50 h-12 ${
                            errors.whatsapp ? "border-red-500" : ""
                          }`}
                        />
                        {errors.whatsapp && (
                          <p className="text-red-400 text-sm mt-1">{errors.whatsapp}</p>
                        )}
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-14 text-lg font-bold bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 shadow-lg shadow-primary/30 transition-all duration-300"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            Enviando...
                          </span>
                        ) : (
                          <>
                            <Download className="w-5 h-5 mr-2" />
                            QUERO MEU GUIA GRATUITO
                          </>
                        )}
                      </Button>
                    </form>

                    {/* Privacy Text */}
                    <div className="flex items-center justify-center gap-2 mt-4 text-purple-300/60 text-sm">
                      <Lock className="w-4 h-4" />
                      <span>Seus dados estão seguros. Odiamos spam tanto quanto você.</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
