interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const Logo = ({ className = "", size = "md" }: LogoProps) => {
  const sizeClasses = {
    sm: "text-xl",
    md: "text-2xl md:text-3xl",
    lg: "text-3xl md:text-4xl lg:text-5xl"
  };

  return (
    <div className={`font-bold text-center md:text-left ${sizeClasses[size]} ${className}`}>
      <span className="bg-gradient-primary bg-clip-text text-transparent">
        Formação Maestros da{" "}
        <span className="text-primary font-black tracking-wider">IA</span>
      </span>
    </div>
  );
};