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
    <section className="section-padding bg-[hsl(220,18%,6%)] relative overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/[0.04] rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-heading-1 md:text-display font-bold text-center mb-4">
          Veja um Pouco da Formação <span className="gradient-text">Por Dentro</span>
        </h2>
        <p className="text-lg md:text-xl text-[hsl(215,12%,65%)] text-center max-w-3xl mx-auto mb-12 leading-relaxed">
          Antes de decidir, assista. Veja com seus próprios olhos a qualidade das aulas, a profundidade do conteúdo e os agentes de IA que vão trabalhar por você — 24 horas por dia, 7 dias por semana.
        </p>

        {/* Video container with premium framing */}
        <div className="max-w-4xl mx-auto relative">
          {/* Glow behind video */}
          <div className="absolute inset-0 -m-4 bg-emerald-500/[0.08] rounded-3xl blur-2xl" />

          <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-[0_8px_60px_rgba(0,0,0,0.5)] ring-1 ring-white/[0.06]">
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
                  <div className="w-20 h-20 rounded-full bg-emerald-500/90 group-hover:bg-emerald-500 flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-[0_0_40px_rgba(16,185,129,0.4)]">
                    <Play className="w-10 h-10 text-white ml-1" fill="white" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Copy below video */}
          <p className="text-lg text-[hsl(215,12%,65%)] text-center mt-8 max-w-3xl mx-auto leading-relaxed">
            Isso é apenas uma amostra. São 75 aulas práticas como essa — cada uma te entregando uma ferramenta, automação ou agente de IA pronto para gerar resultado no seu negócio. Tudo no seu ritmo. Sem depender de ninguém.
          </p>

          {/* CTA after video */}
          <div className="flex flex-col items-center gap-3 mt-8">
            <Button
              onClick={() => setPopupOpen(true)}
              className="relative overflow-hidden bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-base md:text-lg px-10 md:px-14 py-4 md:py-5 h-auto rounded-xl shadow-[0_4px_20px_rgba(16,185,129,0.3)] hover:shadow-[0_8px_30px_rgba(16,185,129,0.45)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              QUERO ACESSO ÀS 75 AULAS
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <p className="text-sm text-[hsl(215,10%,45%)]">
              Acesso imediato + Garantia de 7 dias
            </p>
          </div>
        </div>

        {/* Tools Section */}
        <div className="mt-20 max-w-6xl mx-auto">
          <h3 className="text-heading-2 md:text-heading-1 font-bold mb-8 text-center">
            Algumas das Ferramentas que você vai <span className="gradient-text">Dominar</span>
          </h3>
          <AnimatedLogos />
        </div>
      </div>

      <CTAPopup open={popupOpen} onOpenChange={setPopupOpen} />
    </section>
  );
};
