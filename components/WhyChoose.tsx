import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const WhyChoose: React.FC = () => {
  const { config } = useLanguage();
  return (
    <section className="py-24 md:py-40 bg-biz-deep relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-24">
           <h2 className="text-sm font-display font-bold uppercase tracking-[0.4em] text-biz-emerald mb-6">Competitive Edge</h2>
           <h3 className="text-4xl md:text-6xl font-display font-extrabold text-white tracking-tighter">Why Global Leaders Trust Us.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {config.hero.whyChoose.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-8 glass-panel rounded-3xl group flex flex-col items-center text-center hover:border-biz-emerald/20 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-full bg-biz-emerald/5 flex items-center justify-center text-biz-emerald mb-6 group-hover:bg-biz-emerald/10 group-hover:scale-110 transition-all">
                  <item.icon size={24} />
                </div>
                <h4 className="text-white font-display font-bold text-lg mb-3 tracking-tight">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed font-normal opacity-80">{item.text}</p>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;