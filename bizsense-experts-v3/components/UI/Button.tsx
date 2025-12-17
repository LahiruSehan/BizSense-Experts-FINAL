import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className, ...props }) => {
  // Soft edged (rounded-full), fixed min-width for alignment
  const baseStyles = "relative min-w-[180px] px-8 py-3 font-sans font-bold tracking-[0.1em] uppercase text-[11px] transition-all duration-500 overflow-hidden group rounded-full flex items-center justify-center";
  
  const variants = {
    primary: "bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-black border border-gold-400 shadow-[0_0_20px_rgba(212,165,51,0.2)] hover:shadow-[0_0_30px_rgba(212,165,51,0.4)]",
    secondary: "bg-transparent border border-white/20 text-white/90 hover:border-gold-500 hover:text-gold-100 hover:bg-white/5",
    outline: "border border-gold-500/30 text-gold-500 hover:bg-gold-500/10 backdrop-blur-sm"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02, translateY: -2 }}
      whileTap={{ scale: 0.96 }}
      className={`${baseStyles} ${variants[variant]} ${className || ''}`}
      {...props}
    >
      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-2 text-center w-full">{children}</span>
      
      {/* Primary: Liquid Shine Sweep */}
      {variant === 'primary' && (
        <>
          <div className="absolute inset-0 bg-white/40 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out z-0 transform skew-x-12" />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
        </>
      )}

      {/* Secondary: Subtle Glow Background */}
      {variant === 'secondary' && (
        <div className="absolute inset-0 bg-gold-500/0 group-hover:bg-gold-500/5 transition-colors duration-300 z-0" />
      )}
    </motion.button>
  );
};

export default Button;