import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const PortfolioButton: React.FC = () => {
  return (
    <motion.button
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 left-6 z-[150] group flex items-center gap-3"
      onClick={() => window.open('https://bizsenselk.com/portfolio', '_blank')}
    >
      <div className="w-16 h-16 rounded-full bg-biz-emerald/10 backdrop-blur-xl border border-biz-emerald/30 flex items-center justify-center shadow-[0_0_30px_rgba(163,230,53,0.15)] group-hover:bg-biz-emerald/20 transition-all">
        <Briefcase className="text-biz-emerald w-7 h-7" />
      </div>
      
      <div className="bg-biz-deep/90 backdrop-blur border border-biz-emerald/20 px-4 py-2 rounded-xl text-[10px] uppercase font-black tracking-widest text-biz-emerald opacity-0 group-hover:opacity-100 transition-opacity shadow-2xl">
        Our Portfolio
      </div>
    </motion.button>
  );
};

export default PortfolioButton;