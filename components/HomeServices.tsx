import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import ServiceModal from './ServiceModal';

const HomeServices: React.FC = () => {
  const { config } = useLanguage();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedService = config.services.find(s => s.id === selectedId);

  return (
    <section className="relative z-20 -mt-60 md:-mt-64 pb-16 px-4 md:px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gemini-900/10 to-transparent pointer-events-none -z-10 animate-pulse-soft" />
      
      <div className="container mx-auto">
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12 relative"
        >
           <h2 className="text-gold-500 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-2 flex items-center justify-center gap-2">
              Our Solutions
           </h2>
           <h3 className="text-2xl md:text-4xl font-serif text-white font-bold drop-shadow-xl">
             Expert Services
           </h3>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-6xl mx-auto">
          {config.services.map((service, idx) => (
            <motion.button
              key={service.id}
              onClick={() => setSelectedId(service.id)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5, scale: 1.01 }}
              className="group relative flex items-center justify-between p-5 md:p-6 bg-matte-charcoal/90 border border-white/5 rounded-2xl transition-all duration-300 text-left overflow-hidden shadow-2xl backdrop-blur-sm"
            >
              <div className="absolute inset-0 border border-transparent group-hover:border-gemini-500/20 rounded-2xl transition-colors duration-500" />
              <div className="absolute -bottom-full left-0 w-full h-full bg-gradient-to-t from-gemini-900/20 to-transparent group-hover:bottom-0 transition-all duration-700 ease-out" />
              
              <div className="flex items-center gap-5 relative z-10">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-matte-black to-gray-900 flex items-center justify-center text-gold-500 group-hover:text-gemini-400 group-hover:scale-105 transition-all border border-white/10 group-hover:border-gemini-500/40 shadow-inner">
                   <service.icon size={24} className="drop-shadow-[0_0_8px_rgba(212,165,51,0.5)] group-hover:drop-shadow-[0_0_12px_rgba(56,189,248,0.5)] transition-all" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-white font-serif text-lg md:text-xl leading-tight group-hover:text-gold-200 transition-colors font-bold mb-1">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-[11px] md:text-xs font-bold group-hover:text-white transition-colors">
                    {service.shortDesc}
                  </p>
                </div>
              </div>

              <div className="relative z-10 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 group-hover:text-black group-hover:bg-gold-500 group-hover:border-gold-500 transition-all duration-300 shadow-lg">
                 <ArrowRight size={16} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
              </div>
            </motion.button>
          ))}
        </div>
      </div>
      
      <AnimatePresence>
        {selectedId && selectedService && (
           <ServiceModal selectedService={selectedService} setSelectedId={setSelectedId} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default HomeServices;