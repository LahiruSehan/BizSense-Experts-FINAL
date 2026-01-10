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
  const baseStyles = "relative min-w-[200px] px-10 py-5 font-display font-bold tracking-tight text-base transition-all duration-500 overflow-hidden group rounded-full flex items-center justify-center";
  
  const variants = {
    primary: "bg-gradient-to-r from-biz-emerald to-biz-teal text-white shadow-[0_10px_30px_rgba(16,185,129,0.3)] hover:shadow-[0_15px_40px_rgba(16,185,129,0.4)]",
    secondary: "bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 hover:border-white/20",
    outline: "border border-biz-emerald/40 text-biz-emerald hover:bg-biz-emerald/5 backdrop-blur-sm"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.96 }}
      className={`${baseStyles} ${variants[variant]} ${className || ''}`}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-3">{children}</span>
      
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out skew-x-12" />
      )}
    </motion.button>
  );
};

export default Button;