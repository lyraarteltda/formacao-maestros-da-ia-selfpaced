import { useEffect, useRef, useState } from "react";
import Player from "@vimeo/player";
import { Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTAPopup } from "@/components/CTAPopup";
import videoThumbnail from "@/assets/video-thumbnail.jpg";
import { AnimatedLogos } from "@/components/ui/animated-logos";

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
    <section className="py-12 md:py-16 bg-gradient-to-br from-primary/10 via-background to-accent/10 relative overflow-hidden border-y border-primary/20">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 gradient-text">
          Veja um Pouco da Formação Por Dentro
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-12">
          Antes de decidir, assista. Veja com seus próprios olhos a qualidade das aulas, a profundidade do conteúdo e os agentes de IA que vão trabalhar por você — 24 horas por dia, 7 dias por semana.
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

          {/* Copy below video */}
          <p className="text-lg text-muted-foreground text-center mt-8 max-w-3xl mx-auto">
            Isso é apenas uma amostra. São 75 aulas práticas como essa — cada uma te entregando uma ferramenta, automação ou agente de IA pronto para gerar resultado no seu negócio. Tudo no seu ritmo. Sem depender de ninguém.
          </p>

          {/* CTA after video */}
          <div className="flex flex-col items-center gap-3 mt-8">
            <Button
              onClick={() => setPopupOpen(true)}
              className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-base md:text-lg px-8 md:px-10 py-5 md:py-6 h-auto rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-105"
            >
              QUERO ACESSO ÀS 75 AULAS
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <p className="text-sm text-muted-foreground">
              Acesso imediato + Garantia de 7 dias
            </p>
          </div>
        </div>

        {/* Tools Section */}
        <div className="mt-16 max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-center gradient-text">
            Algumas das Ferramentas que você vai Dominar
          </h3>
          <AnimatedLogos />
        </div>
      </div>

      <CTAPopup open={popupOpen} onOpenChange={setPopupOpen} />
    </section>
  );
};
