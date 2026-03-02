import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { useState } from "react";
import makeLogo from "@/assets/logos/make-logo.png";
import n8nLogo from "@/assets/logos/n8n-logo.png";
import chatgptLogo from "@/assets/logos/chatgpt-logo.png";
import heygenLogo from "@/assets/logos/heygen-logo.png";
import geminiLogo from "@/assets/logos/gemini-logo.png";
import claudeLogo from "@/assets/logos/claude-logo.webp";
import falLogo from "@/assets/logos/fal-logo.png";
import pineconeLogo from "@/assets/logos/pinecone-full-logo.svg";
import supabaseLogo from "@/assets/logos/supabase-logo.png";
import metaAiLogo from "@/assets/logos/meta-ai-logo.webp";
import openrouterLogo from "@/assets/logos/openrouter-logo.svg";
import netlifyLogo from "@/assets/logos/netlify-logo.svg";
import manychatLogo from "@/assets/logos/manychat-logo.png";
import metricoolLogo from "@/assets/logos/metricool-logo.png";
import nanobananaLogo from "@/assets/logos/nanobanana-logo.png";
import githubLogo from "@/assets/logos/github-logo.png";
import veo3Logo from "@/assets/logos/veo3-logo.jpg";
import zapiLogo from "@/assets/logos/zapi-logo.webp";
import manateeLogo from "@/assets/logos/manatee-logo.png";
import lovableLogo from "@/assets/logos/lovable-logo.png";

const logos = [
  { src: makeLogo, alt: "Make" },
  { src: n8nLogo, alt: "N8N" },
  { src: chatgptLogo, alt: "ChatGPT" },
  { src: heygenLogo, alt: "HeyGen" },
  { src: pineconeLogo, alt: "Pinecone" },
  { src: supabaseLogo, alt: "Supabase" },
  { src: geminiLogo, alt: "Google Gemini" },
  { src: claudeLogo, alt: "Claude AI" },
  { src: falLogo, alt: "Fal AI" },
  { src: metaAiLogo, alt: "Meta AI" },
  { src: openrouterLogo, alt: "OpenRouter" },
  { src: netlifyLogo, alt: "Netlify" },
  { src: manychatLogo, alt: "ManyChat" },
  { src: metricoolLogo, alt: "Metricool" },
  { src: nanobananaLogo, alt: "Nano Banana" },
  { src: githubLogo, alt: "GitHub" },
  { src: veo3Logo, alt: "Veo 3" },
  { src: zapiLogo, alt: "Zapi" },
  { src: manateeLogo, alt: "Manatee" },
  { src: lovableLogo, alt: "Lovable" },
];

export const AnimatedLogos = () => {
  const baseX = useMotionValue(0);
  const [isDragging, setIsDragging] = useState(false);
  const baseVelocity = -80; // Pixels per second
  
  // Calculate total width of one set of logos (width + gap)
  const logoWidth = 144; // w-36 = 144px
  const gap = 32; // gap-8 = 32px
  const totalWidth = (logoWidth + gap) * logos.length;

  useAnimationFrame((t, delta) => {
    if (!isDragging) {
      // Move continuously
      let moveBy = (baseVelocity * delta) / 1000;
      baseX.set(baseX.get() + moveBy);
      
      // Seamlessly loop back when we've scrolled past one full set
      if (baseX.get() <= -totalWidth) {
        baseX.set(baseX.get() + totalWidth);
      }
      if (baseX.get() > 0) {
        baseX.set(baseX.get() - totalWidth);
      }
    }
  });

  return (
    <div className="w-full overflow-hidden py-8 relative">
      <motion.div
        className="flex gap-4 sm:gap-8 items-center cursor-grab active:cursor-grabbing"
        style={{ x: baseX }}
        drag="x"
        dragElastic={0.1}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
      >
        {/* Render 4 copies for seamless infinite scroll */}
        {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
          <motion.div
            key={index}
            className="relative flex-shrink-0 w-24 h-24 sm:w-36 sm:h-36 bg-white rounded-xl sm:rounded-2xl shadow-lg border border-white/10 p-4 sm:p-6 hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05, y: -4 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: (index % logos.length) * 0.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl" />
            <img
              src={logo.src}
              alt={logo.alt}
              className="w-full h-full object-contain relative z-10 pointer-events-none select-none"
              draggable={false}
            />
          </motion.div>
        ))}
      </motion.div>
      
      {/* Gradient fades for smooth edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none" />
    </div>
  );
};
