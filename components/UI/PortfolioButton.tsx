import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PortfolioButton: React.FC = () => {
  const navigate = useNavigate();
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.9 }}
      className="fixed bottom-[160px] right-6 z-[160] group"
      onClick={() => navigate('/portfolio')}
    >
      <div className="w-14 h-14 rounded-full bg-biz-navy/80 backdrop-blur-xl border border-white/10 flex items-center justify-center shadow-2xl group-hover:border-biz-emerald/40 transition-all text-biz-emerald">
        <Briefcase size={22} />
      </div>
      
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-biz-deep/90 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl text-[10px] uppercase font-display font-black tracking-widest text-biz-emerald opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
        View Portfolio
      </div>
    </motion.button>
  );
};

export default PortfolioButton;