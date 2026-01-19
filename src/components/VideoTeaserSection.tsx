import { useEffect, useRef, useState } from "react";
import Player from "@vimeo/player";
import { Play } from "lucide-react";
import videoThumbnail from "@/assets/video-thumbnail.jpg";
import { AnimatedLogos } from "@/components/ui/animated-logos";

export const VideoTeaserSection = () => {
  const [showThumbnail, setShowThumbnail] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<Player | null>(null);

  useEffect(() => {
    if (iframeRef.current) {
      playerRef.current = new Player(iframeRef.current);
      
      playerRef.current.on('play', async () => {
        setShowThumbnail(false);
        // Ensure video is always unmuted when playing
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
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 gradient-text">
          Veja um pouco da formação por dentro
        </h2>
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
        </div>
        
        {/* Tools Section - Full Width */}
        <div className="mt-16 max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-center gradient-text">
            Algumas das Ferramentas que você vai Dominar
          </h3>
          <AnimatedLogos />
        </div>
      </div>
    </section>
  );
};
