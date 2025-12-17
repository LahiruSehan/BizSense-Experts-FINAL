import React from 'react';
import { motion } from 'framer-motion';
import { CONFIG } from '../config/config-english';

const WhyChoose: React.FC = () => {
  return (
    <section className="py-12 bg-matte-black border-t border-white/5 relative overflow-hidden">
      {/* Faint Blue Glow - Increased Opacity */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.05),transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-5xl mx-auto"
        >
          <h3 className="text-center text-gold-500 text-[10px] uppercase tracking-[0.3em] font-bold mb-8">Why Choose BizSense?</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {CONFIG.hero.whyChoose.map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center text-center p-4 md:p-6 bg-white/5 border border-white/5 rounded-xl hover:border-gold-500/30 hover:bg-white/10 transition-all group shadow-lg relative"
                >
                  <div className="absolute inset-0 bg-gemini-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500 mb-4 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(212,165,51,0.15)] relative z-10">
                    <item.icon size={20} className="md:w-6 md:h-6" />
                  </div>
                  <h4 className="text-gray-100 text-[11px] md:text-sm font-bold uppercase tracking-wider mb-2 relative z-10">{item.title}</h4>
                  {/* Updated: Bold and Gold */}
                  <p className="text-gold-500 text-[10px] md:text-xs leading-relaxed font-bold max-w-[200px] drop-shadow-sm relative z-10">{item.text}</p>
                </motion.div>
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChoose;