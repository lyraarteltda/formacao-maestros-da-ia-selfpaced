import { Play, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

interface VideoTestimonial {
  name: string;
  quote: string;
  videoUrl?: string;
  isPlaceholder?: boolean;
}

const testimonials: VideoTestimonial[] = [
  // Row 1
  {
    name: "Andre",
    quote: "Um pouco tempo de curso, eu já consegui vender alguns projetos no mercado com segurança, com ticket médio considerável para alguém que está iniciando",
    videoUrl: "" // Placeholder - adicionar URL real aqui
  },
  {
    name: "Alice",
    quote: "Gente, foi muito mais do que eu esperava. Me ajudou demais a enxergar AI como uma aliada estratégica do meu negócio",
    videoUrl: "" // Placeholder - adicionar URL real aqui
  },
  {
    name: "Bruno",
    quote: "Um processo que levava cerca de uma semana, hoje a gente consegue fazer de 4 a 6 horas usando a automação",
    videoUrl: "" // Placeholder - adicionar URL real aqui
  },
  // Row 2
  {
    name: "Regis",
    quote: "Independente da área que você venha, você vai aprender e conseguir aplicar no seu dia a dia. O curso é extremamente prático",
    videoUrl: "" // Placeholder - adicionar URL real aqui
  },
  {
    name: "Lucas",
    quote: "Foi a melhor aquisição que eu poderia ter feito para avançar nessa área. A mentoria deles é excelente",
    videoUrl: "" // Placeholder - adicionar URL real aqui
  },
  {
    name: "Ricardo",
    quote: "Metade das coisas que eu achava impossível, hoje eu estou fazendo em casa e no trabalho. Quando você vê seu primeiro fluxo rodando sozinho, você nunca mais olha para a rotina da mesma forma",
    videoUrl: "" // Placeholder - adicionar URL real aqui
  },
  // Row 3
  {
    name: "Rodrigo",
    quote: "Uma formação bem clara e bem prática. A comunidade no WhatsApp é muito forte, todo mundo se ajuda e troca informações",
    videoUrl: "" // Placeholder - adicionar URL real aqui
  },
  {
    name: "Rodrigo Eve",
    quote: "Se eu consegui, tenha a certeza, você vai conseguir também. Todas as dificuldades foram superadas com o suporte da equipe",
    videoUrl: "" // Placeholder - adicionar URL real aqui
  },
  {
    name: "Em Breve",
    quote: "Mais histórias de sucesso chegando...",
    isPlaceholder: true
  }
];

const VideoCard = ({ 
  testimonial, 
  index, 
  onPlay 
}: { 
  testimonial: VideoTestimonial; 
  index: number;
  onPlay: (testimonial: VideoTestimonial) => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group ${testimonial.isPlaceholder ? 'opacity-50' : ''}`}
    >
      <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-[0_10px_40px_-15px_hsl(var(--primary)/0.3)] hover:-translate-y-1">
        {/* Video Container - Portrait 9:16 */}
        <div 
          className="relative aspect-[9/16] bg-gradient-to-br from-muted/80 to-muted/40 overflow-hidden cursor-pointer"
          onClick={() => !testimonial.isPlaceholder && onPlay(testimonial)}
        >
          {/* Placeholder Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
              backgroundSize: '20px 20px'
            }} />
          </div>
          
          {/* Video Placeholder Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-sm text-muted-foreground/60 text-center px-4">
              Vídeo {testimonial.isPlaceholder ? '' : `de ${testimonial.name}`}
            </span>
          </div>
          
          {/* Play Button Overlay */}
          {!testimonial.isPlaceholder && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl scale-150 group-hover:scale-[2] transition-transform duration-500" />
                
                {/* Play button */}
                <div className="relative w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center shadow-lg group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" />
                </div>
              </div>
            </div>
          )}
          
          {/* Coming Soon Overlay for placeholder */}
          {testimonial.isPlaceholder && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 border-2 border-dashed border-primary/30 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl">🎬</span>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Content */}
        <div className="p-5">
          <h4 className="font-semibold text-lg text-foreground mb-3">{testimonial.name}</h4>
          <blockquote className="text-sm text-muted-foreground leading-relaxed italic">
            "{testimonial.quote}"
          </blockquote>
        </div>
        
        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </motion.div>
  );
};

export const VideoTestimonialsSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoTestimonial | null>(null);

  const handlePlayVideo = (testimonial: VideoTestimonial) => {
    setSelectedVideo(testimonial);
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
  };

  return (
    <>
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
              💬 Depoimentos Reais
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              O Que Nossos{" "}
              <span className="text-primary">Alunos</span> Dizem
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Histórias reais de transformação de quem já passou pelo Maestros
            </p>
          </motion.div>
          
          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <VideoCard 
                key={index} 
                testimonial={testimonial} 
                index={index} 
                onPlay={handlePlayVideo}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <Dialog open={!!selectedVideo} onOpenChange={handleCloseModal}>
        <DialogContent className="max-w-3xl w-[90vw] p-0 bg-background/95 backdrop-blur-xl border-border/50 overflow-hidden">
          <DialogTitle className="sr-only">
            Depoimento de {selectedVideo?.name}
          </DialogTitle>
          
          {selectedVideo && (
            <div className="relative">
              {/* Video Container - maintains 9:16 ratio in modal */}
              <div className="relative w-full max-h-[80vh] flex items-center justify-center bg-black/90 p-4">
                <div className="relative aspect-[9/16] h-[70vh] max-w-full">
                  {selectedVideo.videoUrl ? (
                    <video
                      className="w-full h-full object-contain rounded-lg"
                      controls
                      autoPlay
                      playsInline
                    >
                      <source src={selectedVideo.videoUrl} type="video/mp4" />
                      Seu navegador não suporta vídeos HTML5.
                    </video>
                  ) : (
                    <div className="w-full h-full bg-muted/20 rounded-lg flex flex-col items-center justify-center border border-border/30">
                      <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                        <Play className="w-8 h-8 text-primary" />
                      </div>
                      <p className="text-muted-foreground text-center px-8">
                        Vídeo de {selectedVideo.name}
                      </p>
                      <p className="text-xs text-muted-foreground/60 mt-2">
                        URL do vídeo será adicionada em breve
                      </p>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Video Info */}
              <div className="p-6 bg-card/80">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {selectedVideo.name}
                </h3>
                <blockquote className="text-muted-foreground italic">
                  "{selectedVideo.quote}"
                </blockquote>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
