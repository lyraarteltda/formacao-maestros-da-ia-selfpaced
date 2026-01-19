import { useRef, useEffect } from "react";

interface Drop {
  x: number;
  y: number;
  speed: number;
  chars: string[];
  opacity: number[];
}

const MatrixBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Enhanced character set with more variety
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+=[]{}|\\:;\"'<>,.?/~`";
    const katakana = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
    const allChars = characters + katakana;
    
    const fontSize = 16;
    let columns = 0;
    let drops: Drop[] = [];

    const initializeDrops = () => {
      columns = Math.floor(canvas.width / fontSize);
      drops = [];
      for (let i = 0; i < columns; i++) {
        drops.push({
          x: i * fontSize,
          y: Math.random() * -500,
          speed: Math.random() * 3 + 2,
          chars: Array.from({ length: Math.random() * 20 + 10 }, () => 
            allChars[Math.floor(Math.random() * allChars.length)]
          ),
          opacity: (() => {
            const length = Math.random() * 20 + 10;
            return Array.from({ length }, (_, index) => 
              Math.max(0, 1 - (index / length))
            );
          })()
        });
      }
    };

    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initializeDrops();
    };

    resizeCanvas();

    const draw = () => {
      // Create trailing effect with semi-transparent black
      ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px 'Courier New', monospace`;
      ctx.textAlign = "center";

      drops.forEach((drop) => {
        drop.chars.forEach((char, charIndex) => {
          const y = drop.y + charIndex * fontSize;
          
          if (y > 0 && y < canvas.height + fontSize) {
            // Calculate opacity based on position in trail
            let opacity = drop.opacity[charIndex];
            
            // Make the leading character brighter
            if (charIndex === 0) {
              opacity = 1;
              ctx.fillStyle = "hsl(155, 100%, 80%)";
              ctx.shadowColor = "hsl(155, 100%, 50%)";
              ctx.shadowBlur = 8;
            } else if (charIndex === 1) {
              opacity = 0.8;
              ctx.fillStyle = "hsl(155, 100%, 65%)";
              ctx.shadowBlur = 4;
            } else {
              ctx.fillStyle = `hsl(155, 100%, ${Math.max(20, 50 - charIndex * 3)}%)`;
              ctx.shadowBlur = 1;
            }
            
            // Apply opacity
            ctx.globalAlpha = opacity;
            
            // Random character change for dynamic effect
            if (Math.random() < 0.02) {
              drop.chars[charIndex] = allChars[Math.floor(Math.random() * allChars.length)];
            }
            
            ctx.fillText(char, drop.x, y);
          }
        });

        // Reset shadow and opacity
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;

        // Move drop down
        drop.y += drop.speed;

        // Reset drop when it goes off screen
        if (drop.y - drop.chars.length * fontSize > canvas.height) {
          drop.y = Math.random() * -500;
          drop.speed = Math.random() * 3 + 2;
          drop.chars = Array.from({ length: Math.random() * 20 + 10 }, () => 
            allChars[Math.floor(Math.random() * allChars.length)]
          );
          drop.opacity = Array.from({ length: drop.chars.length }, (_, index) => 
            Math.max(0, 1 - (index / drop.chars.length))
          );
        }
      });

      // Add random bright flashes
      if (Math.random() < 0.003) {
        const flashX = Math.random() * canvas.width;
        const flashY = Math.random() * canvas.height;
        ctx.fillStyle = "hsl(155, 100%, 90%)";
        ctx.shadowColor = "hsl(155, 100%, 50%)";
        ctx.shadowBlur = 20;
        ctx.globalAlpha = 0.8;
        ctx.fillText(
          allChars[Math.floor(Math.random() * allChars.length)], 
          flashX, 
          flashY
        );
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
      }
    };

    // Smooth animation at 60fps
    let animationId: number;
    const animate = () => {
      draw();
      animationId = requestAnimationFrame(animate);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-25 z-0"
    />
  );
};

export default MatrixBackground;