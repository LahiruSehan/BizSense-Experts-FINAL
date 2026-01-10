import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion.button
      onClick={toggleLanguage}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.7 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-[92px] right-6 z-[160] group flex items-center gap-3"
    >
      <div className="w-14 h-14 rounded-full bg-biz-navy/80 backdrop-blur-xl border border-white/10 flex items-center justify-center shadow-2xl group-hover:border-biz-emerald/40 transition-all">
        <div className="flex items-center justify-center gap-0.5">
          <span className="text-sm font-display font-bold text-white leading-none">A</span>
          <div className="w-[1px] h-3 bg-white/20 rotate-12" />
          <span className="text-sm font-display font-bold text-biz-emerald leading-none">අ</span>
        </div>
      </div>
    </motion.button>
  );
};

export default LanguageToggle;