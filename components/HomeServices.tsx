import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { CONFIG } from '../config/config-english';
import ServiceModal from './ServiceModal';

const HomeServices: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedService = CONFIG.services.find(s => s.id === selectedId);

  return (
    <section className="py-12 md:py-16 bg-matte-black border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-10">
           <h2 className="text-gold-500 text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase mb-2">Our Solutions</h2>
           <h3 className="text-2xl md:text-3xl font-serif text-white">Expert Services</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 max-w-5xl mx-auto">
          {CONFIG.services.map((service, idx) => (
            <motion.button
              key={service.id}
              onClick={() => setSelectedId(service.id)}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group flex items-center justify-between p-4 md:p-5 bg-white/5 border border-white/5 hover:border-gold-500/30 rounded-xl transition-all duration-300 hover:bg-white/10 text-left"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500 group-hover:scale-110 transition-transform border border-gold-500/20">
                   <service.icon size={20} />
                </div>
                <div>
                  <h3 className="text-white font-serif text-base md:text-lg leading-tight group-hover:text-gold-200 transition-colors">{service.title}</h3>
                  <p className="text-gray-500 text-[10px] md:text-xs mt-0.5 opacity-80">{service.shortDesc}</p>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-500 group-hover:text-gold-500 group-hover:border-gold-500/30 transition-colors">
                 <ArrowRight size={14} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
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