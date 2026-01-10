import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Calendar, Briefcase, ChevronRight } from 'lucide-react';
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
    <section className="relative min-h-[90vh] md:min-h-screen flex flex-col pt-6 md:pt-10 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Minimal Nav / Logo */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full flex justify-center mb-16 md:mb-24"
        >
          <img 
            src="https://i.ibb.co/7mmBhMJ/LOGO.png" 
            alt="BizSense" 
            className="h-10 md:h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
          />
        </motion.div>

        {/* Cinematic Headline Section */}
        <div className="flex flex-col items-center text-center max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-[44px] sm:text-[64px] md:text-[110px] leading-[0.95] font-display font-extrabold tracking-[-0.04em] text-white mb-4">
              Empowering <br className="hidden md:block" /> Businesses
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xl md:text-3xl font-display font-light text-white/40 tracking-[0.2em] uppercase">
              with
            </span>
            <div className="h-[40px] md:h-[70px] flex items-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="text-2xl sm:text-4xl md:text-6xl font-display font-bold text-gradient-teal tracking-tighter"
                >
                  {headlines[index]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-8 md:mt-12 text-gray-400 text-sm md:text-xl font-normal leading-relaxed max-w-2xl opacity-80"
          >
            Strategic tech-finance advisory designed for modern enterprises bridging the gap between complexity and growth.
          </motion.p>

          {/* Unified Single Row Buttons Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="flex flex-row items-center justify-center gap-2 md:gap-4 mt-12 md:mt-16 w-full max-w-lg"
          >
            <button
              onClick={() => navigate('/portfolio')}
              className="flex-1 px-3 sm:px-8 py-4 sm:py-5 rounded-xl md:rounded-full btn-modern-primary text-white font-display font-bold text-[10px] sm:text-xs md:text-base flex items-center justify-center gap-1.5 sm:gap-2 transition-all hover:scale-[1.03]"
            >
              Portfolio <ChevronRight size={14} className="hidden sm:block" />
            </button>
            
            <button
              className="flex-1 px-3 sm:px-8 py-4 sm:py-5 rounded-xl md:rounded-full btn-modern-outline text-white font-display font-medium text-[10px] sm:text-xs md:text-base flex items-center justify-center gap-1.5 sm:gap-2 transition-all hover:bg-white/5"
            >
              <Calendar size={14} className="text-biz-emerald hidden sm:block" /> Demo
            </button>

            <button
              onClick={() => navigate('/contact')}
              className="flex-1 px-3 sm:px-8 py-4 sm:py-5 rounded-xl md:rounded-full bg-white/5 border border-white/10 text-white font-display font-medium text-[10px] sm:text-xs md:text-base flex items-center justify-center gap-1.5 sm:gap-2 transition-all hover:bg-white/10"
            >
              Consult <ArrowRight size={14} className="hidden sm:block" />
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-auto pt-16 pb-10 flex justify-center opacity-20"
        >
          <div className="w-px h-12 bg-gradient-to-b from-biz-emerald to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;