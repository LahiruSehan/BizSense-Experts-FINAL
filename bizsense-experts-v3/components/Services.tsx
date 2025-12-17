import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { CONFIG } from '../config/config-english';
import ServiceModal from './ServiceModal';

const Services: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedService = CONFIG.services.find(s => s.id === selectedId);

  return (
    <section className="py-20 md:py-32 bg-matte-charcoal relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-gold-500/10 to-transparent" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/10 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-gold-500 text-[9px] md:text-[10px] font-bold tracking-[0.3em] uppercase mb-4">Expertise</h2>
          <h3 className="text-3xl md:text-5xl font-serif text-white leading-tight font-bold">
            Core Services
          </h3>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CONFIG.services.map((service, idx) => (
            <motion.div
              key={service.id}
              layoutId={`card-${service.id}`}
              onClick={() => setSelectedId(service.id)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                scale: 1,
                borderColor: "rgba(255,255,255,0.05)"
              }}
              whileHover={{ 
                scale: 1.01, 
                borderColor: "rgba(212,165,51,0.3)",
                backgroundColor: "rgba(15,15,15,0.9)"
              }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative min-h-[180px] bg-matte-black/60 border border-white/5 p-5 md:p-6 cursor-pointer overflow-hidden transition-all duration-500 flex flex-col rounded-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Icon & Title */}
                <div className="flex items-center gap-3 mb-3">
                    <div className="text-gold-500 group-hover:text-gold-300 transition-colors duration-300">
                        <service.icon size={20} strokeWidth={1.5} />
                    </div>
                    <h4 className="text-lg md:text-xl font-serif text-white group-hover:text-gold-200 transition-colors leading-tight font-bold">
                        {service.title}
                    </h4>
                </div>

                {/* Divider */}
                <div className="w-10 h-[1px] bg-gold-500/30 mb-3 group-hover:w-20 transition-all duration-500" />

                {/* Summary Description - Bold and Gold */}
                <p className="text-xs text-gold-500 font-bold leading-relaxed mb-4 flex-grow line-clamp-3">
                   {service.summary}
                </p>

                {/* Tiny See More Button - Animated Gradient */}
                <div className="flex justify-start pt-1">
                    <div className="relative overflow-hidden inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[9px] uppercase tracking-widest text-gray-400 group-hover:text-black group-hover:font-bold transition-all duration-300">
                        <div className="absolute inset-0 bg-gradient-to-r from-gold-500 via-gold-300 to-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="relative z-10">See More</span>
                        <ArrowRight size={10} className="relative z-10 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                    </div>
                </div>
              </div>
            </motion.div>
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

export default Services;