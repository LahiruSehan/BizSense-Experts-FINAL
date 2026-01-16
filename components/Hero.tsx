import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Briefcase, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const { config } = useLanguage();
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const headlines = config.hero.headlines;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % headlines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [headlines]);

  // Helper to determine font size for rotating headlines to prevent cutoff
  const getHeadlineFontSize = (text: string) => {
    if (text.length > 20) return 'text-[20px] sm:text-4xl md:text-6xl lg:text-7xl';
    if (text.length > 15) return 'text-[22px] sm:text-5xl md:text-7xl lg:text-8xl';
    return 'text-[24px] sm:text-5xl md:text-8xl lg:text-9xl';
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-start items-center overflow-hidden pt-4 md:pt-10">
      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center text-center max-w-full">
        
        {/* Logo at the Top Spot */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8 md:mb-12"
        >
          <img 
            src="https://i.ibb.co/7mmBhMJ/LOGO.png" 
            alt="BizSense" 
            className="h-12 md:h-20 w-auto object-contain drop-shadow-[0_0_20px_rgba(16,185,129,0.4)]"
          />
        </motion.div>

        <div className="flex flex-col items-center w-full max-w-[95vw]">
          {/* Main Title - Empowering Businesses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-[42px] sm:text-[72px] md:text-[110px] lg:text-[130px] leading-[0.9] font-display font-[950] tracking-[-0.05em] text-white mb-6 uppercase text-center">
              Empowering <br className="hidden md:block" /> Businesses
            </h1>
          </motion.div>

          {/* Cinematic "with" Connector */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex flex-row items-center gap-6 md:gap-16 mb-2"
          >
            <div className="w-10 md:w-32 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            <span className="text-xs md:text-2xl font-display font-black text-white/40 tracking-[0.5em] uppercase italic">
              with
            </span>
            <div className="w-10 md:w-32 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          </motion.div>

          {/* Animated Headlines - Dynamic Sizing and Luxury Transition */}
          <div className="headline-container mb-4 w-full">
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`text-shine-embedded font-display font-black tracking-tighter uppercase whitespace-nowrap block ${getHeadlineFontSize(headlines[index])}`}
              >
                {headlines[index]}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Consultancy Metadata - Repositioned Below the Changing Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex flex-col items-center mb-10"
          >
            <div className="h-px w-24 bg-biz-primary mb-4" />
            <span className="text-gray-400 font-display font-black uppercase tracking-[0.4em] text-[8px] md:text-sm">
              Consultancy & Systems <span className="mx-2 text-biz-primary">|</span> 20+ Years Excellence
            </span>
          </motion.div>

          {/* Bio Description */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="max-w-4xl px-4"
          >
            <p className="text-gray-300 text-[12px] md:text-[18px] leading-[1.7] md:leading-[1.9] font-medium tracking-tight text-center">
              <span className="text-white font-black">BizSense Experts</span> is a 
              <span className="text-white/60 mx-1">multi-disciplinary</span> business solutions firm providing 
              <span className="text-biz-primary font-bold px-1 underline decoration-biz-primary/20 underline-offset-4">ERP systems</span>, 
              <span className="text-biz-secondary font-bold italic px-1">digital marketing</span>, and 
              <span className="text-white font-bold border-b border-biz-primary/30">B2B trade facilitation</span>. 
              Bridging the gap between technology and <span className="text-white font-bold">real business needs</span>.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="w-full grid grid-cols-3 gap-4 sm:gap-6 md:gap-10 mt-10 md:mt-16 max-w-2xl px-2"
          >
            <button
              onClick={() => navigate('/portfolio')}
              className="flex flex-col items-center justify-center gap-1.5 py-4 md:py-6 px-1 rounded-2xl bg-white/5 border border-white/10 text-white font-display font-black text-[9px] md:text-sm tracking-widest hover:bg-white/10 transition-all uppercase"
            >
              <Briefcase size={20} className="text-biz-primary md:w-6 md:h-6" />
              <span className="text-[8px] md:text-xs">Projects</span>
            </button>
            
            <button
              onClick={() => window.open(`https://wa.me/94701757576`, '_blank')}
              className="flex flex-col items-center justify-center gap-1.5 py-6 md:py-8 px-1 rounded-2xl bg-gradient-to-br from-biz-primary to-biz-accent text-biz-deep font-display font-black text-[10px] md:text-base scale-110 shadow-[0_15px_40px_-5px_rgba(16,185,129,0.5)] transition-all uppercase"
            >
              <MessageCircle size={24} className="animate-pulse md:w-7 md:h-7" />
              <span className="text-[9px] md:text-sm">Contact</span>
            </button>
            
            <button
              className="flex flex-col items-center justify-center gap-1.5 py-4 md:py-6 px-1 rounded-2xl bg-white/5 border border-white/10 text-white font-display font-black text-[9px] md:text-sm tracking-widest hover:bg-white/10 transition-all uppercase"
            >
              <Calendar size={20} className="text-biz-secondary md:w-6 md:h-6" />
              <span className="text-[8px] md:text-xs">Demo</span>
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-12 md:mt-20 flex flex-col items-center opacity-40"
        >
          <span className="text-[9px] uppercase tracking-[0.5em] font-black mb-3 text-biz-primary">Discover</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-biz-primary to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;