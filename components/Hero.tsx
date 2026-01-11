import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ChevronRight, Briefcase, MessageCircle } from 'lucide-react';
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
            className="h-10 md:h-14 w-auto object-contain opacity-90 drop-shadow-[0_0_20px_rgba(16,185,129,0.3)]"
          />
        </motion.div>

        <div className="flex flex-col items-center max-w-6xl mx-auto w-full">
          {/* Extra Thick Bold Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h1 className="text-[44px] sm:text-[68px] md:text-[110px] leading-[1.0] font-display font-[950] tracking-[-0.06em] text-white mb-6 uppercase">
              Empowering <br className="md:block" /> Businesses
            </h1>
          </motion.div>

          {/* Cinematic "- with -" Connector */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex flex-row items-center gap-4 md:gap-8 mb-2"
          >
            <div className="w-8 md:w-16 h-[2px] bg-gradient-to-r from-transparent to-white/40" />
            <span className="text-base md:text-2xl font-display font-black text-white/50 tracking-[0.4em] uppercase italic">
              with
            </span>
            <div className="w-8 md:w-16 h-[2px] bg-gradient-to-l from-transparent to-white/40" />
          </motion.div>

          {/* Animated Headlines with Cinematic Flare */}
          <div className="h-[40px] md:h-[70px] flex items-center overflow-hidden mb-8">
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 1.1, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="cinematic-flare text-2xl sm:text-5xl md:text-6xl font-display font-black text-gradient-teal tracking-tighter uppercase"
              >
                {headlines[index]}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Bio Description */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-4 md:mt-8 max-w-5xl px-2 md:px-0"
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

          {/* 3-Button Row: 3D Embossed Hard + Shining Stroke */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="w-full flex flex-row items-center justify-center gap-3 md:gap-8 mt-14 md:mt-20 max-w-2xl px-2"
          >
            {/* Portfolio CTA */}
            <button
              onClick={() => navigate('/portfolio')}
              className="flex-1 flex flex-col items-center justify-center gap-1.5 py-4 md:py-6 px-1 rounded-2xl bg-white/5 btn-embossed-hard shine-stroke text-white font-display font-black text-[9px] sm:text-[10px] md:text-sm tracking-widest hover:bg-white/10 transition-all uppercase"
            >
              <Briefcase size={22} className="text-biz-emerald drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
              <span>Projects</span>
            </button>
            
            {/* Direct WhatsApp CTA - The King Button */}
            <button
              onClick={() => window.open(`https://wa.me/94701757576`, '_blank')}
              className="flex-1 flex flex-col items-center justify-center gap-1.5 py-6 md:py-8 px-1 rounded-2xl bg-gradient-to-br from-biz-emerald to-biz-teal btn-embossed-hard shine-stroke text-biz-deep font-display font-black text-[10px] sm:text-[11px] md:text-base scale-110 shadow-[0_15px_40px_-5px_rgba(16,185,129,0.5)] transition-all uppercase"
            >
              <MessageCircle size={24} className="animate-pulse" />
              <span>Contact</span>
            </button>
            
            {/* Demo/Calendar CTA */}
            <button
              className="flex-1 flex flex-col items-center justify-center gap-1.5 py-4 md:py-6 px-1 rounded-2xl bg-white/5 btn-embossed-hard shine-stroke text-white font-display font-black text-[9px] sm:text-[10px] md:text-sm tracking-widest hover:bg-white/10 transition-all uppercase"
            >
              <Calendar size={22} className="text-biz-cyan drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]" />
              <span>Demo</span>
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-24 md:mt-32 pb-10 flex flex-col items-center opacity-30"
        >
          <span className="text-[9px] uppercase tracking-[0.5em] font-black mb-3 text-biz-emerald">Discover</span>
          <div className="w-[2px] h-20 bg-gradient-to-b from-biz-emerald via-biz-emerald/50 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;