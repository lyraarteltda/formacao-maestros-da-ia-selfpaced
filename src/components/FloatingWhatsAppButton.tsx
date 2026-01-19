import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FloatingWhatsAppButton = () => {
  const whatsappUrl = "https://wa.me/5511942131610";

  return (
    <Button
      onClick={() => window.open(whatsappUrl, '_blank')}
      className="fixed bottom-6 right-6 z-50 shadow-glow hover:shadow-2xl gap-2"
      variant="cta"
      size="default"
    >
      <MessageCircle className="w-4 h-4" />
      Tenho Dúvidas
    </Button>
  );
};
