import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { CONFIG } from '../config/config-english';
import ServiceModal from './ServiceModal';

const Services: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedService = CONFIG.services.find(s => s.id === selectedId);

  return (
    <section className="min-h-screen py-24 md:py-40 bg-biz-deep relative overflow-hidden flex flex-col justify-center">
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl mb-16 md:mb-24">
          <h2 className="text-biz-emerald text-sm font-display font-bold tracking-[0.4em] uppercase mb-4">Capabilities</h2>
          <h3 className="text-4xl md:text-7xl font-display text-white font-extrabold tracking-tighter leading-none uppercase">
            Core Expert <br /> Systems
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {CONFIG.services.map((service, idx) => (
            <motion.div
              key={service.id}
              onClick={() => setSelectedId(service.id)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group relative glass-panel p-10 cursor-pointer rounded-[40px] flex flex-col transition-all duration-500 hover:border-biz-emerald/40 hover:bg-biz-navy/40"
            >
              <div className="flex items-center justify-between mb-8">
                  <div className="text-biz-emerald p-4 bg-white/5 rounded-2xl group-hover:bg-biz-emerald group-hover:text-biz-deep transition-all duration-500">
                      <service.icon size={28} strokeWidth={1.5} />
                  </div>
                  <ArrowRight size={24} className="-rotate-45 group-hover:rotate-0 text-white/20 group-hover:text-biz-emerald transition-all duration-500" />
              </div>
              
              <h4 className="text-2xl font-display text-white group-hover:text-biz-emerald font-bold mb-4 transition-colors">
                  {service.title}
              </h4>
              <p className="text-sm text-gray-400 font-normal leading-relaxed line-clamp-2">
                 {service.summary}
              </p>
              
              <div className="mt-10 h-1 w-full bg-white/5 overflow-hidden rounded-full">
                 <div className="h-full w-0 group-hover:w-full bg-biz-emerald transition-all duration-1000 ease-out" />
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