import { useEffect } from "react";

interface CTAPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CTAPopup = ({ open, onOpenChange }: CTAPopupProps) => {
  useEffect(() => {
    if (open) {
      // Generate UUID for sck if doesn't exist
      if (!(window as any).globalSck) {
        (window as any).globalSck = crypto.randomUUID();
      }
      
      // Get UTMs from current URL
      const params = new URLSearchParams(window.location.search);
      const utms = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term']
        .map(param => `${param}=${params.get(param) || ''}`)
        .join('&');
      
      const baseURL = 'https://pay.onprofit.com.br/M5Ene7El?off=l6y2P7';
      const finalURL = `${baseURL}&${utms}&sck=${(window as any).globalSck}`;
      
      window.open(finalURL, '_blank');
      onOpenChange(false);
    }
  }, [open, onOpenChange]);

  return null;
};