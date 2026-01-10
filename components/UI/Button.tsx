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
  const baseStyles = "relative min-w-[180px] px-8 py-3 font-sans font-bold tracking-[0.1em] uppercase text-[11px] transition-all duration-500 overflow-hidden group rounded-full flex items-center justify-center";
  
  const variants = {
    primary: "bg-gradient-to-r from-biz-emerald via-biz-teal to-biz-emerald text-biz-deep border border-biz-emerald/30 shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]",
    secondary: "bg-transparent border border-white/20 text-white/90 hover:border-biz-cyan hover:text-biz-cyan hover:bg-white/5",
    outline: "border border-biz-emerald/30 text-biz-emerald hover:bg-biz-emerald/10 backdrop-blur-sm"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02, translateY: -2 }}
      whileTap={{ scale: 0.96 }}
      className={`${baseStyles} ${variants[variant]} ${className || ''}`}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2 text-center w-full">{children}</span>
      
      {variant === 'primary' && (
        <>
          <div className="absolute inset-0 bg-white/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out z-0 transform skew-x-12" />
        </>
      )}

      {variant === 'secondary' && (
        <div className="absolute inset-0 bg-biz-cyan/5 group-hover:bg-biz-cyan/10 transition-colors duration-300 z-0" />
      )}
    </motion.button>
  );
};

export default Button;