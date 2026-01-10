import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { CONFIG } from '../config/config-english';
import ServiceModal from './ServiceModal';

const Services: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedService = CONFIG.services.find(s => s.id === selectedId);

  return (
    <section className="min-h-screen py-24 bg-transparent relative overflow-hidden flex flex-col justify-center">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-biz-emerald/10 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="text-center mb-10">
          <h2 className="text-biz-emerald text-[8px] md:text-[10px] font-bold tracking-[0.3em] uppercase mb-1">Expertise</h2>
          <h3 className="text-xl md:text-3xl font-display text-white leading-tight font-bold uppercase tracking-tight">
            Core Services
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {CONFIG.services.map((service, idx) => (
            <motion.div
              key={service.id}
              onClick={() => setSelectedId(service.id)}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.01, borderColor: "rgba(16,185,129,0.25)" }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group relative bg-white/5 backdrop-blur-md border border-white/5 p-4 cursor-pointer rounded-2xl flex flex-col justify-center transition-all duration-300 overflow-hidden shadow-lg"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                    <div className="text-biz-emerald group-hover:text-white transition-colors">
                        <service.icon size={20} strokeWidth={1.5} />
                    </div>
                    <h4 className="text-sm md:text-base font-display text-white group-hover:text-biz-emerald font-bold uppercase tracking-wide">
                        {service.title}
                    </h4>
                </div>
                <div className="w-8 h-[1px] bg-biz-emerald/20 mb-3 group-hover:w-12 transition-all" />
                <p className="text-[10px] md:text-[11px] text-gray-400 font-bold leading-relaxed mb-4 line-clamp-2">
                   {service.summary}
                </p>
                <div className="flex justify-end">
                    <ArrowRight size={14} className="-rotate-45 group-hover:rotate-0 text-biz-emerald/60 group-hover:text-biz-emerald transition-all" />
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