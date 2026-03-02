import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  nome: z.string()
    .min(5, "Nome completo deve ter pelo menos 5 caracteres")
    .regex(/\s/, "Digite seu nome e sobrenome completos")
    .refine((value) => value.trim().split(" ").length >= 2, {
      message: "Digite seu nome e sobrenome completos"
    }),
  codigoPais: z.string().min(1, "Código do país é obrigatório"),
  whatsapp: z.string().min(10, "WhatsApp deve ter pelo menos 10 dígitos"),
  email: z.string().email("Email inválido"),
});

type FormData = z.infer<typeof formSchema>;

interface CheckoutDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  checkoutUrl: string;
}

export const CheckoutDialog = ({ open, onOpenChange, checkoutUrl }: CheckoutDialogProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const countries = [
    { code: "+55", name: "Brasil" },
    { code: "+54", name: "Argentina" },
    { code: "+1", name: "Estados Unidos" },
    { code: "+1", name: "Canadá" },
    { code: "+56", name: "Chile" },
    { code: "+57", name: "Colômbia" },
    { code: "+51", name: "Peru" },
    { code: "+598", name: "Uruguai" },
    { code: "+595", name: "Paraguai" },
    { code: "+591", name: "Bolívia" },
    { code: "+593", name: "Equador" },
    { code: "+58", name: "Venezuela" },
    { code: "+52", name: "México" },
    { code: "+351", name: "Portugal" },
    { code: "+34", name: "Espanha" },
    { code: "+33", name: "França" },
    { code: "+49", name: "Alemanha" },
    { code: "+44", name: "Reino Unido" },
    { code: "+39", name: "Itália" },
    { code: "+41", name: "Suíça" },
    { code: "+31", name: "Holanda" },
    { code: "+32", name: "Bélgica" },
    { code: "+43", name: "Áustria" },
    { code: "+46", name: "Suécia" },
    { code: "+47", name: "Noruega" },
    { code: "+45", name: "Dinamarca" },
    { code: "+358", name: "Finlândia" },
    { code: "+353", name: "Irlanda" },
    { code: "+48", name: "Polônia" },
    { code: "+420", name: "República Tcheca" },
    { code: "+36", name: "Hungria" },
    { code: "+40", name: "Romênia" },
    { code: "+359", name: "Bulgária" },
    { code: "+385", name: "Croácia" },
    { code: "+381", name: "Sérvia" },
    { code: "+30", name: "Grécia" },
    { code: "+90", name: "Turquia" },
    { code: "+972", name: "Israel" },
    { code: "+971", name: "Emirados Árabes" },
    { code: "+966", name: "Arábia Saudita" },
    { code: "+81", name: "Japão" },
    { code: "+82", name: "Coreia do Sul" },
    { code: "+86", name: "China" },
    { code: "+91", name: "Índia" },
    { code: "+61", name: "Austrália" },
    { code: "+64", name: "Nova Zelândia" },
    { code: "+27", name: "África do Sul" },
    { code: "+234", name: "Nigéria" },
    { code: "+20", name: "Egito" },
    { code: "+7", name: "Rússia" },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Send data to webhook (non-blocking)
      const webhookUrl = "https://hook.us1.make.com/o2qfhplghxy36fifhfx6xl6114sc2dvn";
      
      // Try to send to webhook but don't block form submission if it fails
      fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        mode: "no-cors", // Handle CORS issues
        body: new URLSearchParams({
          nome: data.nome,
          codigoPais: data.codigoPais,
          whatsapp: data.whatsapp,
          email: data.email,
          timestamp: new Date().toISOString()
        }).toString(),
      }).catch(error => {
        console.log("Webhook error (non-blocking):", error);
      });

      // Build personalized checkout URL with only name and email
      const baseUrl = "https://pay.onprofit.com.br/M5Ene7El?off=MPTa5";
      const url = new URL(baseUrl);
      
      if (data.nome) url.searchParams.set("name", data.nome);
      if (data.email) url.searchParams.set("email", data.email);
      // Phone and country code are not included in URL parameters

      const personalizedCheckoutUrl = url.toString();
      
      console.log("User data:", data);
      console.log("Personalized checkout URL:", personalizedCheckoutUrl);
      
      toast({
        title: "Informações enviadas!",
        description: "Redirecionando para o checkout...",
      });

      // Redirect to personalized checkout after a brief delay
      setTimeout(() => {
        window.location.assign(personalizedCheckoutUrl);
        onOpenChange(false);
        reset();
        setIsSubmitting(false);
      }, 1000);
    } catch (error) {
      toast({
        title: "Erro",
        description: "Ocorreu um erro. Tente novamente.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold">
            Finalize sua inscrição
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="nome">Nome *</Label>
            <Input
              id="nome"
              placeholder="Seu nome completo"
              {...register("nome")}
              className={errors.nome ? "border-red-500" : ""}
            />
            {errors.nome && (
              <p className="text-sm text-red-500">{errors.nome.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="codigoPais">Código do País *</Label>
            <Controller
              name="codigoPais"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className={`bg-background ${errors.codigoPais ? "border-red-500" : ""}`}>
                    <SelectValue placeholder="Selecione o país" />
                  </SelectTrigger>
                  <SelectContent className="bg-background z-50">
                    {countries.map((country) => (
                      <SelectItem 
                        key={`${country.code}-${country.name}`} 
                        value={country.code}
                        className="bg-background hover:bg-accent"
                      >
                        {country.code} - {country.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.codigoPais && (
              <p className="text-sm text-red-500">{errors.codigoPais.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="whatsapp">WhatsApp *</Label>
            <Input
              id="whatsapp"
              type="tel"
              placeholder="11999999999"
              {...register("whatsapp")}
              className={errors.whatsapp ? "border-red-500" : ""}
              onInput={(e) => {
                const target = e.target as HTMLInputElement;
                target.value = target.value.replace(/\D/g, '');
              }}
            />
            {errors.whatsapp && (
              <p className="text-sm text-red-500">{errors.whatsapp.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              {...register("email")}
              className={errors.email ? "border-red-500" : ""}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="flex gap-2 pt-4">
            <Button
              type="button"
              variant="outline"
              className="flex-1"
              onClick={() => onOpenChange(false)}
              disabled={isSubmitting}
            >
              Cancelar
            </Button>
            <Button
              type="button"
              variant="cta"
              className="flex-1"
              disabled={isSubmitting}
              onClick={() => window.open('https://chat.whatsapp.com/COJc1AP9G1QJ1bX1ohg7DZ', '_blank')}
            >
              {isSubmitting ? "Processando..." : "QUERO O SISTEMA COMPLETO"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};