import { motion } from "framer-motion";
import { Users, Music, TrendingUp, Rocket, GraduationCap, Handshake } from "lucide-react";

const mainTimeline = [
  { icon: Users, label: "Do Zero", description: "Início da jornada", color: "from-emerald-500/20 to-emerald-600/10" },
  { icon: Music, label: "Infoproduto", description: "Primeiro negócio", color: "from-emerald-500/20 to-emerald-600/10" },
  { icon: TrendingUp, label: "R$2,5M", description: "Em 15 meses", color: "from-emerald-500/20 to-emerald-600/10" },
  { icon: Rocket, label: "Piloto Automático", description: "6 dígitos/mês 100% com Agente de IA", color: "from-emerald-500/20 to-emerald-600/10" },
];

const maestrosBranches = [
  { icon: Users, label: "Mentores de Empresários", description: "Dezenas de cases", delay: 0.8 },
  { icon: Handshake, label: "Parceiros de Grandes Marcas", description: "Hostinger e Pipefy", delay: 0.9 },
  { icon: TrendingUp, label: "150.000+ seguidores", description: "em 4 meses", delay: 1.0 },
];

// Timeline node component with premium styling
const TimelineNode = ({ 
  step, 
  index, 
  isLast = false 
}: { 
  step: typeof mainTimeline[0]; 
  index: number; 
  isLast?: boolean;
}) => {
  const Icon = step.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        delay: 0.15 * index,
        type: "spring",
        stiffness: 100
      }}
      className="relative flex flex-col items-center group"
    >
      {/* Glow effect behind node */}
      <div className="absolute -inset-4 bg-gradient-to-b from-primary/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Node circle with glass effect */}
      <div className="relative">
        {/* Outer ring animation */}
        <motion.div 
          className="absolute -inset-1 rounded-full border border-primary/30"
          initial={{ scale: 1, opacity: 0.5 }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
        />
        
        {/* Main node */}
        <div className={`
          relative w-16 h-16 rounded-full 
          bg-gradient-to-br ${step.color}
          backdrop-blur-sm
          border-2 border-primary/60
          flex items-center justify-center
          shadow-[0_0_20px_rgba(34,197,94,0.3)]
          group-hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]
          group-hover:border-primary
          transition-all duration-300
          z-10
        `}>
          <Icon className="w-7 h-7 text-amber-400 group-hover:scale-110 transition-transform duration-300" />
        </div>
      </div>

      {/* Label */}
      <motion.div 
        className="mt-4 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 + index * 0.15 }}
      >
        <p className="font-bold text-foreground text-sm md:text-base leading-tight">{step.label}</p>
        <p className="text-xs text-muted-foreground leading-tight mt-1 max-w-[120px]">{step.description}</p>
      </motion.div>
    </motion.div>
  );
};

// Maestros Hub - The central node with branches
const MaestrosHub = () => {
  return (
    <div className="relative mt-8">
      {/* Vertical connector from timeline */}
      <motion.div 
        className="absolute left-1/2 -top-8 w-0.5 h-8 -translate-x-1/2 hidden md:block"
        initial={{ scaleY: 0, opacity: 0 }}
        whileInView={{ scaleY: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        style={{ 
          background: 'linear-gradient(to bottom, hsl(var(--primary)), hsl(var(--accent)))' 
        }}
      />

      {/* Central Hub */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.6, 
          delay: 0.65,
          type: "spring",
          stiffness: 100
        }}
        className="flex flex-col items-center relative z-20"
      >
        {/* Pulsing glow layers */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            className="w-32 h-32 rounded-full bg-primary/20 blur-2xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.1, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            className="w-24 h-24 rounded-full bg-accent/30 blur-xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.2, 0.4] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
          />
        </div>

        {/* Hub node */}
        <div className="relative">
          {/* Rotating ring */}
          <motion.div 
            className="absolute -inset-3 rounded-full border-2 border-dashed border-primary/40"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Main hub circle */}
          <div className="
            relative w-24 h-24 rounded-full
            bg-gradient-to-br from-primary/40 via-accent/30 to-primary/40
            backdrop-blur-md
            border-2 border-primary
            flex items-center justify-center
            shadow-[0_0_40px_rgba(34,197,94,0.4),inset_0_0_20px_rgba(34,197,94,0.2)]
          ">
            <GraduationCap className="w-12 h-12 text-amber-400" />
          </div>
        </div>

        {/* Label */}
        <motion.div 
          className="mt-4 text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <p className="font-bold text-foreground text-xl bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">Maestros</p>
          <p className="text-sm text-muted-foreground mt-1">Ensinando IA</p>
        </motion.div>
      </motion.div>

      {/* SVG Branch Lines */}
      <svg 
        className="absolute top-[140px] left-1/2 -translate-x-1/2 w-full max-w-[500px] h-20 hidden md:block" 
        viewBox="0 0 500 80"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="branchGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.4" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Animated branch lines */}
        <motion.path 
          d="M 250 0 Q 250 40 80 70" 
          stroke="url(#branchGrad)" 
          strokeWidth="2" 
          fill="none"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.9 }}
        />
        <motion.path 
          d="M 250 0 L 250 70" 
          stroke="url(#branchGrad)" 
          strokeWidth="2" 
          fill="none"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.95 }}
        />
        <motion.path 
          d="M 250 0 Q 250 40 420 70" 
          stroke="url(#branchGrad)" 
          strokeWidth="2" 
          fill="none"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
        />
      </svg>

      {/* Branch nodes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 md:mt-24">
        {maestrosBranches.map((branch, index) => {
          const Icon = branch.icon;
          return (
            <motion.div
              key={branch.label}
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: branch.delay,
                type: "spring"
              }}
              className="flex flex-col items-center group"
            >
              {/* Glow */}
              <div className="absolute -inset-4 bg-gradient-to-b from-accent/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Node */}
              <div className="
                relative w-16 h-16 rounded-full
                bg-gradient-to-br from-accent/20 to-accent/5
                backdrop-blur-sm
                border-2 border-accent/50
                flex items-center justify-center
                shadow-[0_0_15px_rgba(251,191,36,0.2)]
                group-hover:shadow-[0_0_25px_rgba(251,191,36,0.4)]
                group-hover:border-accent
                transition-all duration-300
              ">
                <Icon className="w-7 h-7 text-amber-400 group-hover:scale-110 transition-transform duration-300" />
              </div>

              {/* Label */}
              <div className="mt-4 text-center">
                <p className="font-bold text-foreground text-sm leading-tight">{branch.label}</p>
                <p className="text-xs text-muted-foreground leading-tight mt-1">{branch.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export const JourneyTimeline = () => {
  return (
    <div className="relative py-8">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Title */}
      <motion.h4 
        className="text-2xl font-bold mb-10 text-center bg-gradient-to-r from-foreground via-foreground/90 to-foreground bg-clip-text"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Nossa Jornada
      </motion.h4>

      {/* Main Timeline Row */}
      <div className="relative">
        {/* Connecting line with animated gradient */}
        <div className="absolute top-8 left-[12%] right-[12%] h-[2px] hidden md:block overflow-hidden">
          <motion.div 
            className="h-full w-full"
            style={{
              background: 'linear-gradient(90deg, transparent, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)), transparent)'
            }}
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          />
          {/* Animated shine effect */}
          <motion.div 
            className="absolute top-0 h-full w-20 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{ x: ['-100%', '500%'] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
          />
        </div>

        {/* Timeline nodes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {mainTimeline.map((step, index) => (
            <TimelineNode 
              key={step.label} 
              step={step} 
              index={index} 
              isLast={index === mainTimeline.length - 1}
            />
          ))}
        </div>
      </div>

      {/* Maestros Hub Section */}
      <MaestrosHub />
    </div>
  );
};
