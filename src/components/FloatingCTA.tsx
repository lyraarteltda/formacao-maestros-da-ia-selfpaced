import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";
import { CTAPopup } from "@/components/CTAPopup";

export const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      if (scrollPercent >= 50 && !isDismissed) {
        setIsVisible(true);
      } else if (scrollPercent < 30) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-20 md:bottom-8 right-4 md:right-8 z-50 hidden md:block"
          >
            <div className="relative">
              <button
                onClick={handleDismiss}
                className="absolute -top-2 -right-2 w-6 h-6 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:bg-muted-foreground hover:text-muted transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
              <Button
                onClick={() => setPopupOpen(true)}
                className="relative overflow-hidden bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold px-6 py-4 h-auto rounded-xl shadow-[0_4px_20px_rgba(16,185,129,0.3)] hover:shadow-[0_8px_30px_rgba(16,185,129,0.45)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                QUERO O SISTEMA COMPLETO
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <CTAPopup open={popupOpen} onOpenChange={setPopupOpen} />
    </>
  );
};
