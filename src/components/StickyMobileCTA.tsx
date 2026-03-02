import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { CTAPopup } from "@/components/CTAPopup";

export const StickyMobileCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero section
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
          >
            <div className="bg-background/95 backdrop-blur-lg border-t border-border/50 px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
              <Button
                onClick={() => setPopupOpen(true)}
                className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold py-4 h-auto rounded-xl shadow-lg shadow-emerald-500/30 text-base"
              >
                QUERO O SISTEMA COMPLETO
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <p className="text-center text-xs text-muted-foreground mt-2">
                Acesso imediato + Garantia de 7 dias
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <CTAPopup open={popupOpen} onOpenChange={setPopupOpen} />
    </>
  );
};
