import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Calendar, ChevronRight } from 'lucide-react';
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
    <section className="relative min-h-screen flex flex-col pt-10 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full flex justify-center mb-16 md:mb-24"
        >
          <img 
            src="https://i.ibb.co/7mmBhMJ/LOGO.png" 
            alt="BizSense" 
            className="h-10 md:h-14 w-auto object-contain opacity-80"
          />
        </motion.div>

        <div className="flex flex-col items-center text-center max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-[42px] sm:text-[60px] md:text-[100px] leading-[0.95] font-display font-extrabold tracking-[-0.04em] text-white mb-4">
              Empowering <br className="hidden md:block" /> Businesses
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xl md:text-2xl font-display font-light text-white/40 tracking-[0.2em] uppercase">
              with
            </span>
            <div className="h-[40px] md:h-[60px] flex items-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-2xl sm:text-4xl md:text-5xl font-display font-bold text-gradient-teal tracking-tighter"
                >
                  {headlines[index]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* New Detailed Summary Sentence */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-10 md:mt-14 max-w-4xl"
          >
            <p className="text-gray-400 text-sm md:text-xl leading-[1.6] md:leading-[1.8] tracking-tight font-medium">
              Bridging <span className="text-white font-extrabold px-1">20+ Years</span> of deep-tier 
              <span className="text-white border-b border-biz-emerald/30 font-bold mx-1 italic">Financial & Export Logic</span> 
              to engineer <span className="text-biz-emerald font-black uppercase tracking-widest px-1">Intelligent Systems</span> 
              that deliver absolute <span className="text-biz-cyan font-bold italic">Control</span>, 
              maximum <span className="text-biz-emerald font-bold underline decoration-biz-emerald/40 underline-offset-4">Profitability</span>, 
              and <span className="text-white font-extrabold underline decoration-biz-cyan">Scalable Global Growth</span> 
              for modern SMEs.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-row items-center justify-center gap-3 md:gap-4 mt-12 md:mt-20 w-full max-w-lg"
          >
            <button
              onClick={() => navigate('/portfolio')}
              className="flex-1 px-4 py-4 md:py-5 rounded-xl md:rounded-full btn-modern-primary text-white font-display font-bold text-[10px] md:text-base flex items-center justify-center gap-2"
            >
              Portfolio <ChevronRight size={14} />
            </button>
            
            <button
              className="flex-1 px-4 py-4 md:py-5 rounded-xl md:rounded-full btn-modern-outline text-white font-display font-medium text-[10px] md:text-base flex items-center justify-center gap-2"
            >
              <Calendar size={14} className="text-biz-emerald" /> Demo
            </button>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-auto pb-10 flex justify-center opacity-10"
        >
          <div className="w-px h-16 bg-gradient-to-b from-biz-emerald to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;