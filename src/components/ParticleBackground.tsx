import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  life: number;
  maxLife: number;
}

export const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticle = (): Particle => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.1,
        life: 0,
        maxLife: Math.random() * 300 + 200
      };
    };

    const initParticles = () => {
      particlesRef.current = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push(createParticle());
      }
    };

    const updateParticles = () => {
      particlesRef.current.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life++;

        // Fade in and out
        const lifeCycle = particle.life / particle.maxLife;
        if (lifeCycle < 0.1) {
          particle.opacity = (lifeCycle / 0.1) * 0.6;
        } else if (lifeCycle > 0.9) {
          particle.opacity = ((1 - lifeCycle) / 0.1) * 0.6;
        }

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Recreate particle when life ends
        if (particle.life >= particle.maxLife) {
          particlesRef.current[index] = createParticle();
        }
      });
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections between nearby particles
      particlesRef.current.forEach((particle, i) => {
        particlesRef.current.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            const opacity = Math.max(0, (100 - distance) / 100) * 0.2;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(16, 185, 129, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      // Draw particles
      particlesRef.current.forEach(particle => {
        // Outer glow
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 3
        );
        gradient.addColorStop(0, `rgba(16, 185, 129, ${particle.opacity * 0.8})`);
        gradient.addColorStop(0.5, `rgba(16, 185, 129, ${particle.opacity * 0.3})`);
        gradient.addColorStop(1, 'rgba(16, 185, 129, 0)');

        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
        ctx.fill();

        // Inner particle
        ctx.beginPath();
        ctx.fillStyle = `rgba(16, 185, 129, ${particle.opacity})`;
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Core highlight
        ctx.beginPath();
        ctx.fillStyle = `rgba(110, 231, 183, ${particle.opacity * 0.8})`;
        ctx.arc(particle.x, particle.y, particle.size * 0.5, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const animate = () => {
      updateParticles();
      drawParticles();
      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initParticles();
    animate();

    const handleResize = () => {
      resizeCanvas();
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-60"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};