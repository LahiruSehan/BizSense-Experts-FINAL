import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSelector: React.FC = () => {
  const { setLanguage, language } = useLanguage();

  if (language) return null;

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-6">
      {/* Heavy Backdrop Blur */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 bg-black/90 backdrop-blur-3xl"
      />

      {/* Epic Dual Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gemini-500/10 blur-[140px] pointer-events-none rounded-full animate-pulse-soft" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gold-500/5 blur-[100px] pointer-events-none rounded-full" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="relative z-10 w-full max-w-md bg-matte-black/95 border border-white/10 rounded-[40px] p-8 md:p-12 shadow-[0_0_80px_rgba(0,0,0,0.9),0_0_40px_rgba(14,165,233,0.15)] overflow-hidden ring-1 ring-gemini-500/20"
      >
        {/* Intricate Border Strokes */}
        <div className="absolute inset-0 rounded-[40px] border border-gold-500/20 pointer-events-none" />
        <div className="absolute inset-0 rounded-[40px] ring-1 ring-inset ring-white/5 pointer-events-none" />
        
        {/* Top Accent Line */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gemini-500/50 to-transparent shadow-[0_0_15px_rgba(14,165,233,0.5)]" />
        
        {/* Shine Overlay */}
        <motion.div 
          animate={{ x: ['-200%', '200%'] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent skew-x-12 pointer-events-none" 
        />
        
        {/* Content */}
        <div className="flex flex-col items-center">
          <motion.div 
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, 90, 90, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-16 h-16 border border-gemini-500/30 flex items-center justify-center rotate-45 bg-gradient-to-br from-gemini-500/10 to-transparent rounded-lg mb-8 shadow-[0_0_20px_rgba(14,165,233,0.2)]"
          >
            {/* Custom A/අ Icon */}
            <div className="-rotate-45 flex items-center justify-center gap-1.5 relative">
              <span className="text-2xl font-serif font-black text-gemini-400 leading-none">A</span>
              <div className="w-[1px] h-6 bg-gemini-500/30 rotate-12" />
              <span className="text-2xl font-serif font-bold text-gemini-400 leading-none">අ</span>
            </div>
          </motion.div>

          <h1 className="gold-title-realistic text-3xl font-serif font-black mb-2 tracking-[0.2em]">
            BIZSENSE
          </h1>
          <p className="text-gray-400 text-[10px] tracking-[0.3em] uppercase font-bold mb-10 text-center">
            Choose Experience / භාෂාව තෝරන්න
          </p>

          <div className="grid grid-cols-1 w-full gap-4">
            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(14, 165, 233, 0.08)' }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setLanguage('en')}
              className="group relative h-16 border border-white/5 bg-white/[0.02] rounded-2xl flex items-center justify-center transition-all duration-300"
            >
              <div className="absolute left-6 w-1 h-1 bg-gemini-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_8px_rgba(14,165,233,0.8)]" />
              <span className="text-white font-bold tracking-[0.25em] uppercase text-xs group-hover:text-gemini-300 transition-colors">English</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(14, 165, 233, 0.08)' }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setLanguage('si')}
              className="group relative h-16 border border-white/5 bg-white/[0.02] rounded-2xl flex items-center justify-center transition-all duration-300"
            >
              <div className="absolute left-6 w-1 h-1 bg-gemini-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_8px_rgba(14,165,233,0.8)]" />
              <span className="text-white font-bold tracking-widest text-sm group-hover:text-gemini-300 transition-colors">සිංහල</span>
            </motion.button>
          </div>

          <div className="mt-10 flex items-center gap-2 text-gray-600 text-[9px] uppercase tracking-[0.3em] font-bold">
            <Star size={10} className="fill-gray-800" /> <span className="text-gemini-500/50">Elite Digital Standards</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LanguageSelector;