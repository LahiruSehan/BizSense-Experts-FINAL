import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Megaphone, Handshake, ChevronRight, Calendar } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const HomeServices: React.FC = () => {
  const { config } = useLanguage();
  
  const featuredServices = [
    {
      title: 'ERP & Automation',
      desc: 'Seamless operations through intelligent enterprise resource planning.',
      icon: BarChart3,
      color: 'from-biz-emerald/20 to-transparent'
    },
    {
      title: 'Growth Strategy',
      desc: 'Performance marketing driven by data and high-tier digital assets.',
      icon: Megaphone,
      color: 'from-biz-cyan/20 to-transparent'
    },
    {
      title: 'B2B Trade Ops',
      desc: 'Strategic advisory for global market entry and supply chain control.',
      icon: Handshake,
      color: 'from-biz-teal/20 to-transparent'
    }
  ];

  return (
    <section className="relative py-24 md:py-40 bg-transparent">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16 md:mb-24"
        >
          <h2 className="text-sm font-display font-bold uppercase tracking-[0.3em] text-biz-emerald mb-4">Core Ecosystem</h2>
          <h3 className="text-4xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.1]">
            Intelligent Solutions for <br /> Modern Enterprises.
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredServices.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="glass-panel p-10 rounded-[40px] group relative overflow-hidden flex flex-col items-start transition-all duration-700 hover:border-biz-emerald/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-biz-emerald mb-10 group-hover:scale-110 group-hover:bg-biz-emerald/10 transition-all duration-500 relative z-10">
                <service.icon size={32} strokeWidth={1.5} />
              </div>
              
              <h4 className="text-2xl font-display text-white font-bold mb-4 relative z-10">
                {service.title}
              </h4>
              
              <p className="text-gray-400 font-normal leading-relaxed mb-10 relative z-10">
                {service.desc}
              </p>
              
              <button className="flex items-center gap-2 text-sm font-display font-bold uppercase tracking-widest text-biz-emerald mt-auto relative z-10 group/btn">
                Explore Tech <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;