import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PortfolioButton: React.FC = () => {
  const navigate = useNavigate();
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2 }}
      className="fixed bottom-8 left-8 z-[150] group flex items-center gap-4"
      onClick={() => navigate('/portfolio')}
    >
      <div className="w-14 h-14 rounded-2xl bg-biz-deep/80 backdrop-blur-xl border border-biz-emerald/30 flex items-center justify-center shadow-2xl group-hover:bg-biz-emerald group-hover:text-biz-deep transition-all duration-500">
        <Briefcase size={24} />
      </div>
      
      <div className="bg-biz-deep/90 backdrop-blur-md border border-white/5 px-5 py-2.5 rounded-2xl text-[10px] uppercase font-display font-black tracking-widest text-biz-emerald opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500 shadow-2xl">
        Our Portfolio
      </div>
    </motion.button>
  );
};

export default PortfolioButton;