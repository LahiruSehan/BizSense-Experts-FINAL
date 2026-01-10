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
    <section className="relative min-h-screen flex flex-col pt-6 md:pt-10 overflow-hidden">
      {/* Background Motion Layer */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
         <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-biz-emerald/5 blur-[120px] rounded-full animate-glow-pulse" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col">
        
        {/* Minimal Nav / Logo */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-start md:justify-center mb-16 md:mb-24"
        >
          <img 
            src="https://i.ibb.co/7mmBhMJ/LOGO.png" 
            alt="BizSense" 
            className="h-8 md:h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
          />
        </motion.div>

        {/* Cinematic Headline Section */}
        <div className="flex flex-col items-start md:items-center text-left md:text-center max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-[52px] md:text-[110px] leading-[0.95] font-display font-extrabold tracking-[-0.04em] text-white mb-6">
              Empowering <br className="hidden md:block" /> Businesses
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-5"
          >
            <span className="text-xl md:text-4xl font-display font-light text-white/50 tracking-tight">
              integrated with
            </span>
            <div className="h-[40px] md:h-[60px] flex items-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="text-2xl md:text-5xl font-display font-bold text-gradient-teal tracking-tighter"
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
            className="mt-8 md:mt-12 text-gray-400 text-base md:text-xl font-normal leading-relaxed max-w-2xl"
          >
            {config.hero.description}
          </motion.p>

          {/* Buttons Grid - Modernized */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-4 mt-12 md:mt-16 w-full sm:w-auto"
          >
            <button
              onClick={() => navigate('/portfolio')}
              className="w-full sm:w-auto px-10 py-5 rounded-full btn-modern-primary text-white font-display font-bold text-base md:text-lg flex items-center justify-center gap-3 transition-all hover:scale-[1.03] active:scale-[0.98]"
            >
              Our Portfolio <ChevronRight size={20} />
            </button>
            
            <button
              className="w-full sm:w-auto px-10 py-5 rounded-full btn-modern-outline text-white font-display font-medium text-base md:text-lg flex items-center justify-center gap-3 transition-all hover:bg-white/5"
            >
              <Calendar size={20} className="text-biz-emerald" /> Book Demo
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-auto pt-24 pb-10 flex justify-center opacity-30"
        >
          <div className="w-px h-16 bg-gradient-to-b from-biz-emerald to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;