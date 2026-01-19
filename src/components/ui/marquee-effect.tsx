import { useRef, useEffect, useState } from "react";
import { motion, useAnimationFrame, useMotionValue, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface MarqueeAnimationProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  baseVelocity?: number;
  className?: string;
}

export function MarqueeAnimation({
  children,
  direction = "left",
  baseVelocity = -3,
  className,
}: MarqueeAnimationProps) {
  const baseX = useMotionValue(0);
  const [width, setWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.offsetWidth);
    }
  }, [children]);

  useAnimationFrame((t, delta) => {
    let moveBy = (baseVelocity * delta) / 16;
    
    if (direction === "right") {
      moveBy = -moveBy;
    }

    baseX.set(baseX.get() + moveBy);
  });

  const x = useTransform(baseX, (v) => {
    if (width === 0) return "0%";
    const offset = v % width;
    return `${offset}px`;
  });

  return (
    <div className={cn("overflow-hidden whitespace-nowrap relative", className)}>
      {/* Shimmer effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[slide-in-right_3s_ease-in-out_infinite] pointer-events-none z-10"></div>
      
      <motion.div
        ref={containerRef}
        style={{ x }}
        className="inline-flex gap-8"
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <span 
            key={i} 
            className="inline-block font-black text-lg md:text-2xl tracking-wide drop-shadow-lg"
            style={{
              textShadow: "0 2px 10px rgba(0,0,0,0.3), 0 0 20px rgba(255,255,255,0.5)"
            }}
          >
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
