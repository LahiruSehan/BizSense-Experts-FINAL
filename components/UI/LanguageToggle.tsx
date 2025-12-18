import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();
  const [isShifted, setIsShifted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Threshold matches the appearance of AI Chat and WhatsApp buttons
      setIsShifted(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.button
      onClick={toggleLanguage}
      initial={{ opacity: 0, x: 20 }}
      animate={{ 
        opacity: 1, 
        x: 0,
        bottom: isShifted ? '168px' : '24px' // Dynamic bottom position
      }}
      transition={{ 
        type: "spring", 
        damping: 20, 
        stiffness: 120,
        bottom: { duration: 0.5, ease: "easeInOut" } 
      }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      className="fixed right-4 md:right-8 z-[150] group flex items-center gap-3"
    >
      {/* Label - Left of the button */}
      <div className="hidden md:block bg-matte-black/80 backdrop-blur border border-white/10 px-3 py-1.5 rounded text-[10px] uppercase font-bold tracking-widest text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xl pointer-events-none">
        {language === 'si' ? 'English' : 'සිංහල'}
      </div>

      <div className="w-12 h-12 rounded-full bg-matte-charcoal/90 backdrop-blur-xl border border-gold-500/20 flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:border-gold-500/50 transition-colors relative overflow-hidden">
        {/* Animated Background Shine */}
        <motion.div 
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-500/10 to-transparent skew-x-12"
        />
        
        <div className="relative z-10 flex flex-col items-center">
            {/* Custom A/අ Icon */}
            <div className="flex items-center justify-center gap-0.5">
              <span className="text-sm font-serif font-black text-gold-500 group-hover:text-gold-300 transition-colors leading-none">A</span>
              <div className="w-[1px] h-3 bg-gold-500/30 rotate-12" />
              <span className="text-sm font-serif font-bold text-gold-500 group-hover:text-gold-300 transition-colors leading-none">අ</span>
            </div>
        </div>
      </div>
    </motion.button>
  );
};

export default LanguageToggle;