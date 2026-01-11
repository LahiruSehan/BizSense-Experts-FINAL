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
    }, 3500);
    return () => clearInterval(interval);
  }, [headlines]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center text-center max-w-full">
        
        {/* Animated Brand Logo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="mb-10 md:mb-16"
        >
          <img 
            src="https://i.ibb.co/7mmBhMJ/LOGO.png" 
            alt="BizSense" 
            className="h-9 md:h-14 w-auto object-contain opacity-95 drop-shadow-[0_0_25px_rgba(16,185,129,0.3)]"
          />
        </motion.div>

        <div className="flex flex-col items-center w-full max-w-[95vw]">
          {/* Extra Thick Massive Bold Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <h1 className="text-[40px] sm:text-[68px] md:text-[120px] lg:text-[140px] leading-[0.9] font-display font-[950] tracking-[-0.07em] text-white mb-6 uppercase text-center">
              Empowering <br className="hidden md:block" /> Businesses
            </h1>
          </motion.div>

          {/* Cinematic "- with -" Connector */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex flex-row items-center gap-4 md:gap-12 mb-2"
          >
            <div className="w-8 md:w-24 h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            <span className="text-sm md:text-2xl font-display font-black text-white/40 tracking-[0.5em] uppercase italic">
              with
            </span>
            <div className="w-8 md:w-24 h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          </motion.div>

          {/* Animated Headlines with Embedded Shine */}
          <div className="h-[44px] md:h-[80px] flex items-center justify-center overflow-hidden mb-6 w-full">
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="text-shine-embedded text-[22px] sm:text-5xl md:text-7xl lg:text-8xl font-display font-black tracking-tighter uppercase whitespace-nowrap"
              >
                {headlines[index]}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Bio Description - Strictly Constrained */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-4 md:mt-8 max-w-4xl px-2"
          >
            <p className="text-gray-400 text-[12px] md:text-[18px] leading-[1.7] md:leading-[1.9] font-medium tracking-tight">
              <span className="text-white font-black">BizSense Experts</span> is a 
              <span className="text-white/60 mx-1">multi-disciplinary</span> business solutions firm providing 
              <span className="text-biz-emerald font-bold px-1 underline decoration-biz-emerald/20 underline-offset-4">ERP systems</span>, 
              <span className="text-biz-cyan font-bold italic px-1">digital marketing</span>, and 
              <span className="text-white font-bold border-b border-biz-emerald/30">B2B trade facilitation</span>. 
              With over <span className="text-biz-emerald font-black text-lg md:text-2xl px-1">20 years</span> of 
              experience in finance and operations, we bridge the gap between technology and 
              <span className="text-white font-bold"> real business needs</span>.
            </p>
          </motion.div>

          {/* 3-Button Row - Fit to Screen */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="w-full grid grid-cols-3 gap-2 sm:gap-4 md:gap-8 mt-12 md:mt-16 max-w-2xl px-2"
          >
            {/* Portfolio CTA */}
            <button
              onClick={() => navigate('/portfolio')}
              className="flex flex-col items-center justify-center gap-1.5 py-4 md:py-6 px-1 rounded-2xl bg-white/5 btn-embossed-hard shine-stroke text-white font-display font-black text-[9px] md:text-sm tracking-widest hover:bg-white/10 transition-all uppercase"
            >
              <Briefcase size={20} className="text-biz-emerald md:w-6 md:h-6" />
              <span className="text-[8px] md:text-xs">Projects</span>
            </button>
            
            {/* Direct WhatsApp CTA */}
            <button
              onClick={() => window.open(`https://wa.me/94701757576`, '_blank')}
              className="flex flex-col items-center justify-center gap-1.5 py-6 md:py-8 px-1 rounded-2xl bg-gradient-to-br from-biz-emerald to-biz-teal btn-embossed-hard shine-stroke text-biz-deep font-display font-black text-[10px] md:text-base scale-110 shadow-[0_15px_40px_-5px_rgba(16,185,129,0.5)] transition-all uppercase"
            >
              <MessageCircle size={24} className="animate-pulse md:w-7 md:h-7" />
              <span className="text-[9px] md:text-sm">Contact</span>
            </button>
            
            {/* Demo/Calendar CTA */}
            <button
              className="flex flex-col items-center justify-center gap-1.5 py-4 md:py-6 px-1 rounded-2xl bg-white/5 btn-embossed-hard shine-stroke text-white font-display font-black text-[9px] md:text-sm tracking-widest hover:bg-white/10 transition-all uppercase"
            >
              <Calendar size={20} className="text-biz-cyan md:w-6 md:h-6" />
              <span className="text-[8px] md:text-xs">Demo</span>
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-16 md:mt-24 flex flex-col items-center opacity-40"
        >
          <span className="text-[9px] uppercase tracking-[0.5em] font-black mb-3 text-biz-emerald">Discover</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-biz-emerald to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;