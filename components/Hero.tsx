import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Calendar, Briefcase } from 'lucide-react';
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

  return (
    <section className="relative min-h-screen flex flex-col pt-12 md:pt-16 pb-20 overflow-hidden">
      {/* Dynamic Glow Accents */}
      <div className="absolute top-0 right-0 w-[60%] h-[40%] bg-biz-emerald/10 blur-[120px] rounded-full animate-glow-pulse" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-biz-cyan/5 blur-[100px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* Logo Replacement for Headline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6 md:mb-10"
        >
          <img 
            src="https://i.ibb.co/7mmBhMJ/LOGO.png" 
            alt="BizSense Experts" 
            className="h-20 md:h-32 w-auto object-contain brightness-110 drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]"
          />
        </motion.div>

        {/* Dynamic Text Row */}
        <div className="mb-4">
          <h1 className="text-3xl md:text-6xl font-serif text-white leading-tight font-bold">
            Empowering Businesses
          </h1>
          <div className="flex items-center justify-center gap-4 mt-2">
            <span className="text-3xl md:text-6xl font-serif text-white/70 font-bold italic lowercase">with</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="text-3xl md:text-6xl font-serif text-biz-emerald font-bold text-glow-green"
              >
                {headlines[index]}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

        {/* Sub Headline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-400 text-xs md:text-base font-medium tracking-wide mb-10 max-w-xl mx-auto"
        >
          Strategic Digital Solutions bridging Technology and Financial Growth.
        </motion.p>

        {/* Triple Button Grid */}
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 mb-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-luxury-green px-8 py-3.5 rounded-full text-biz-deep text-[10px] font-black uppercase tracking-widest flex items-center gap-2"
          >
            Consultation <ArrowUpRight size={16} />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-luxury-outline px-8 py-3.5 rounded-full text-white text-[10px] font-black uppercase tracking-widest flex items-center gap-2 border-biz-emerald/30"
          >
            <Calendar size={16} className="text-biz-emerald" /> Book Demo
          </motion.button>

          <motion.button
            onClick={() => navigate('/portfolio')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-biz-navy/80 border border-biz-cyan/30 px-8 py-3.5 rounded-full text-biz-cyan text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-biz-cyan hover:text-biz-deep transition-all shadow-[0_0_20px_rgba(6,182,212,0.1)]"
          >
            <Briefcase size={16} /> Our Portfolio
          </motion.button>
        </div>

        {/* Mid Heading Section */}
        <div className="max-w-4xl mb-12">
          <h2 className="text-xl md:text-3xl font-serif text-white font-bold mb-4">
            Your Trusted Partner for <br />
            <span className="italic text-biz-emerald">Driving Business Success</span>
          </h2>
          <p className="text-gray-400 text-[11px] md:text-sm leading-relaxed max-w-2xl mx-auto opacity-80">
            {config.hero.description}
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 w-full max-w-4xl border-y border-white/5 py-8">
          {[
            { value: '20+', label: 'Years Experience' },
            { value: '300+', label: 'Satisfied Clients' },
            { value: '97%', label: 'Success Rate' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-serif text-biz-emerald font-bold mb-1 tracking-tighter">
                {stat.value}
              </span>
              <span className="text-[9px] md:text-[10px] text-gray-500 uppercase font-black tracking-widest">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;