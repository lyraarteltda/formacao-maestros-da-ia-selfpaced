import { Logo } from "@/components/Logo";
import { Youtube, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  const socialLinks = [
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  const links = [
    { text: "Sobre", href: "#" },
    { text: "Termos", href: "#" },
    { text: "Suporte", href: "#" }
  ];

  return (
    <footer className="bg-background border-t border-border section-padding">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="col-span-full text-center">
            <p className="text-lg font-semibold gradient-text">Formação Maestros da IA</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; 2025 Formação Maestros da IA. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};