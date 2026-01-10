import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const WhyChoose: React.FC = () => {
  const { config } = useLanguage();
  return (
    <section className="py-12 bg-biz-deep border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.03),transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-5xl mx-auto"
        >
          <h3 className="text-center text-biz-emerald text-[10px] uppercase tracking-[0.3em] font-bold mb-10">Why Choose BizSense?</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {config.hero.whyChoose.map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center text-center p-6 bg-biz-navy/40 border border-white/5 rounded-2xl hover:border-biz-emerald/30 hover:bg-biz-navy/60 transition-all group shadow-xl relative"
                >
                  <div className="absolute inset-0 bg-biz-emerald/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  <div className="w-12 h-12 rounded-full bg-biz-emerald/10 flex items-center justify-center text-biz-emerald mb-4 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(16,185,129,0.15)] relative z-10">
                    <item.icon size={22} />
                  </div>
                  <h4 className="text-gray-100 text-[11px] md:text-xs font-bold uppercase tracking-wider mb-2 relative z-10">{item.title}</h4>
                  <p className="text-biz-cyan text-[10px] leading-relaxed font-bold max-w-[200px] relative z-10 opacity-70 group-hover:opacity-100 transition-opacity">{item.text}</p>
                </motion.div>
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChoose;