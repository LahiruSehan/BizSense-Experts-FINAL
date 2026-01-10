import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Calendar, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { config, language } = useLanguage();
  const [index, setIndex] = useState(0);
  const headlines = config.hero.headlines;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % headlines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [headlines]);

  return (
    <section className="relative min-h-screen flex flex-col pt-32 pb-20 overflow-hidden">
      {/* Dynamic Glow Accents */}
      <div className="absolute top-0 right-0 w-[60%] h-[40%] bg-biz-emerald/10 blur-[120px] rounded-full animate-glow-pulse" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-biz-cyan/5 blur-[100px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-biz-emerald text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase mb-8 border-y border-white/5 py-2 px-6"
        >
          {config.hero.mainHeadlinePrefix}
        </motion.div>

        {/* Headline Row */}
        <div className="mb-4">
          <h1 className="text-4xl md:text-7xl font-serif text-white leading-tight font-bold">
            Empowering Businesses
          </h1>
          <div className="flex items-center justify-center gap-4 mt-2">
            <span className="text-4xl md:text-7xl font-serif text-white font-bold italic lowercase">with</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-4xl md:text-7xl font-serif text-biz-emerald font-bold text-glow-green"
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
          className="text-gray-400 text-sm md:text-lg font-medium tracking-wide mb-12"
        >
          Driving Growth Through Technology & Expertise
        </motion.p>

        {/* Buttons Row */}
        <div className="flex flex-col md:flex-row gap-4 mb-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-luxury-green px-10 py-4 rounded-full text-biz-deep text-xs font-black uppercase tracking-widest flex items-center gap-3"
          >
            Request Free Consultation <ArrowUpRight size={18} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, borderColor: 'rgba(163, 230, 53, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="btn-luxury-outline px-10 py-4 rounded-full text-white text-xs font-black uppercase tracking-widest flex items-center gap-3"
          >
            <Calendar size={18} className="text-biz-emerald" /> Book a Demo
          </motion.button>
        </div>

        {/* Tabs Row */}
        <div className="flex gap-8 md:gap-16 border-b border-white/10 pb-4 mb-20">
          {['ERP Systems', 'Digital Marketing', 'B2B Trade Services'].map((tab, i) => (
            <button
              key={tab}
              className={`text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] transition-colors ${
                i === 0 ? 'text-biz-emerald border-b-2 border-biz-emerald pb-4 -mb-[18px]' : 'text-gray-500 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Mid Heading Section */}
        <div className="max-w-4xl mb-24">
          <h2 className="text-2xl md:text-4xl font-serif text-white font-bold mb-6">
            Your Trusted Partner for <br />
            <span className="italic text-biz-emerald">Driving Business Success</span>
          </h2>
          <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-2xl mx-auto">
            {config.hero.description}
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 mb-32 w-full max-w-4xl border-y border-white/5 py-12">
          {[
            { value: '20+', label: 'Years Experience' },
            { value: '300+', label: 'Satisfied Clients' },
            { value: '97%', label: 'Success Rate' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-serif text-biz-emerald font-bold mb-2 tracking-tighter">
                {stat.value}
              </span>
              <span className="text-[10px] md:text-[11px] text-gray-500 uppercase font-black tracking-widest">
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