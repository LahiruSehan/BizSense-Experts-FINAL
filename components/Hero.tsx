import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ChevronRight, Briefcase, MessageCircle, ArrowUpRight } from 'lucide-react';
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
    <section className="relative min-h-screen flex flex-col pt-10 md:pt-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* Animated Brand Logo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full flex justify-center mb-12 md:mb-24"
        >
          <img 
            src="https://i.ibb.co/7mmBhMJ/LOGO.png" 
            alt="BizSense" 
            className="h-10 md:h-14 w-auto object-contain opacity-90 drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]"
          />
        </motion.div>

        <div className="flex flex-col items-center max-w-6xl mx-auto w-full">
          {/* Main Title with Centering */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h1 className="text-[38px] sm:text-[60px] md:text-[100px] leading-[1.1] md:leading-[0.95] font-display font-extrabold tracking-[-0.05em] text-white mb-6">
              Empowering <br className="md:block" /> Businesses
            </h1>
          </motion.div>

          {/* Sub-headline Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex flex-col items-center gap-1 md:gap-2"
          >
            <span className="text-sm md:text-2xl font-display font-light text-white/40 tracking-[0.25em] uppercase">
              with
            </span>
            <div className="h-[36px] md:h-[60px] flex items-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5 }}
                  className="text-xl sm:text-4xl md:text-5xl font-display font-bold text-gradient-teal tracking-tighter"
                >
                  {headlines[index]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Bio Description - Mobile Centered & Highly Readable */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-8 md:mt-14 max-w-5xl px-2 md:px-0"
          >
            <p className="text-gray-400 text-[13px] md:text-[19px] leading-[1.8] md:leading-[1.9] tracking-normal md:tracking-tight font-medium">
              <span className="text-white font-black">BizSense Experts</span> is a 
              <span className="text-white/60 mx-1 italic">multi-disciplinary</span> business solutions firm providing 
              <span className="text-biz-emerald font-bold px-1 underline decoration-biz-emerald/20 underline-offset-4">ERP systems</span>, 
              <span className="text-biz-cyan font-bold italic px-1">digital marketing</span>, 
              <span className="text-white font-bold border-b border-biz-emerald/30">B2B trade facilitation</span>, and 
              <span className="text-gray-300 mx-1 font-semibold">SME advisory services</span> to local and international clients. 
              With over <span className="text-biz-emerald font-black text-lg md:text-2xl px-1">20 years</span> of 
              hands-on experience in <span className="text-white font-extrabold tracking-widest uppercase text-[10px] md:text-[15px] bg-white/5 px-2 py-0.5 rounded">finance, operations, exports</span>, and 
              <span className="text-gray-300 italic mx-1">SME consulting</span>, we bridge the gap between technology and 
              <span className="text-white font-bold"> practical business needs</span>. We design and implement 
              <span className="text-biz-cyan font-extrabold tracking-tighter italic px-1 text-base md:text-2xl">intelligent systems</span> that enhance 
              <span className="text-biz-emerald font-black"> profitability</span>, strengthen 
              <span className="text-white font-bold border-b-2 border-biz-cyan/40 px-1">control</span>, and support 
              <span className="text-biz-cyan font-black italic"> scalable growth</span>.
            </p>
          </motion.div>

          {/* 3-Button Row for Mobile CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="w-full flex flex-row items-center justify-center gap-2 md:gap-4 mt-12 md:mt-16 max-w-2xl px-2"
          >
            {/* Portfolio CTA */}
            <button
              onClick={() => navigate('/portfolio')}
              className="flex-1 flex flex-col md:flex-row items-center justify-center gap-1 md:gap-3 py-4 md:py-5 px-2 rounded-2xl md:rounded-full bg-white/5 border border-white/10 text-white font-display font-bold text-[10px] md:text-base hover:bg-biz-emerald hover:text-biz-deep hover:border-transparent transition-all group"
            >
              <Briefcase size={18} className="md:w-5 md:h-5 text-biz-emerald group-hover:text-biz-deep" />
              <span className="hidden sm:inline">Portfolio</span>
              <span className="sm:hidden">Projects</span>
            </button>
            
            {/* Direct WhatsApp CTA - The Primary High-Impact Button */}
            <button
              onClick={() => window.open(`https://wa.me/94701757576`, '_blank')}
              className="flex-1 flex flex-col md:flex-row items-center justify-center gap-1 md:gap-3 py-5 md:py-6 px-2 rounded-2xl md:rounded-full btn-modern-primary text-biz-deep font-display font-black text-[10px] md:text-base shadow-[0_0_30px_rgba(16,185,129,0.4)] scale-110 md:scale-100"
            >
              <MessageCircle size={20} className="md:w-6 md:h-6" />
              <span className="hidden sm:inline">WhatsApp</span>
              <span className="sm:hidden">Contact</span>
            </button>
            
            {/* Demo/Calendar CTA */}
            <button
              className="flex-1 flex flex-col md:flex-row items-center justify-center gap-1 md:gap-3 py-4 md:py-5 px-2 rounded-2xl md:rounded-full bg-white/5 border border-white/10 text-white font-display font-bold text-[10px] md:text-base hover:border-biz-cyan transition-all group"
            >
              <Calendar size={18} className="md:w-5 md:h-5 text-biz-cyan" />
              <span className="hidden sm:inline">Book Demo</span>
              <span className="sm:hidden">Demo</span>
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-20 md:mt-24 pb-10 flex flex-col items-center opacity-20"
        >
          <span className="text-[9px] uppercase tracking-[0.4em] font-black mb-3">Scroll</span>
          <div className="w-px h-16 bg-gradient-to-b from-biz-emerald to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;