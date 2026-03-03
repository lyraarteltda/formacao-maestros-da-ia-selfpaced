import { useEffect, useRef, useState } from "react";
import Player from "@vimeo/player";
import { Play } from "lucide-react";
import videoThumbnail from "@/assets/video-thumbnail.jpg";
import { Button } from "@/components/ui/button";
import { CTAPopup } from "@/components/CTAPopup";

export const VideoTeaserSection = () => {
  const [showThumbnail, setShowThumbnail] = useState(true);
  const [popupOpen, setPopupOpen] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<Player | null>(null);

  useEffect(() => {
    if (iframeRef.current) {
      playerRef.current = new Player(iframeRef.current);
      
      playerRef.current.on('play', async () => {
        setShowThumbnail(false);
        if (playerRef.current) {
          try {
            await playerRef.current.setMuted(false);
            await playerRef.current.setVolume(1);
          } catch (error) {
            console.error('Error unmuting video:', error);
          }
        }
      });
      
      playerRef.current.on('pause', () => {
        setShowThumbnail(true);
      });
      
      playerRef.current.on('ended', () => {
        setShowThumbnail(true);
      });
    }
    
    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, []);

  const handleThumbnailClick = async () => {
    if (playerRef.current) {
      try {
        await playerRef.current.setVolume(1);
        await playerRef.current.setMuted(false);
        await playerRef.current.play();
        setShowThumbnail(false);
      } catch (error) {
        console.error('Error playing video:', error);
      }
    }
  };

  return (
    <section className="py-8 md:py-16 bg-gradient-to-br from-primary/10 via-background to-accent/10 relative overflow-hidden border-y border-primary/20">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="block md:hidden text-xl font-bold text-center mb-4 gradient-text">
          Veja O Framework Maestro Por Dentro
        </h2>
        <h2 className="hidden md:block text-4xl lg:text-5xl font-bold text-center mb-4 gradient-text">
          Veja O Framework Maestro Por Dentro — Antes de Decidir
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground text-center max-w-4xl mx-auto mb-12 leading-relaxed">
          Não acredite na nossa palavra. Veja com seus próprios olhos o que cada agente faz especificamente: o Agente de Vendas respondendo leads reais no WhatsApp. O Agente de Conteúdo publicando em 3 plataformas. O Dashboard mostrando métricas em tempo real. Tudo funcionando — 24 horas por dia, 7 dias por semana, 365 dias por ano.
        </p>
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video w-full rounded-lg overflow-hidden shadow-2xl relative">
            <iframe
              ref={iframeRef}
              width="100%"
              height="100%"
              src="https://player.vimeo.com/video/1131703322?autoplay=0&muted=0"
              title="Vimeo video player"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
            
            {/* Custom Thumbnail Overlay */}
            {showThumbnail && (
              <div 
                className="absolute inset-0 cursor-pointer group"
                onClick={handleThumbnailClick}
              >
                <img 
                  src={videoThumbnail} 
                  alt="Video thumbnail" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-primary/90 group-hover:bg-primary flex items-center justify-center transition-all group-hover:scale-110 animate-pulse">
                    <Play className="w-10 h-10 text-white ml-1" fill="white" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Post-video text */}
          <p className="text-lg md:text-xl text-muted-foreground text-center mt-8 leading-relaxed max-w-3xl mx-auto">
            Isso é apenas uma fração. O sistema completo inclui agentes especializados em vendas, suporte, conteúdo, tráfego, dados e mais — cada um fazendo o trabalho de um funcionário dedicado. E você os recebe prontos para copiar e ativar no seu negócio, no seu ritmo, com autonomia total.
          </p>

          {/* CTA */}
          <div className="text-center mt-8">
            <Button
              variant="cta"
              size="xl"
              className="w-full md:w-auto text-sm md:text-lg px-4 md:px-10"
              onClick={() => setPopupOpen(true)}
            >
              QUERO ATIVAR MEUS FUNCIONÁRIOS DIGITAIS
            </Button>
            <p className="text-sm text-muted-foreground mt-3">
              Acesso imediato + Garantia de Execução de 90 dias
            </p>
          </div>
        </div>
      </div>

      <CTAPopup open={popupOpen} onOpenChange={setPopupOpen} />
    </section>
  );
};