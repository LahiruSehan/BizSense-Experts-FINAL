import React from 'react';
import { motion } from 'framer-motion';
// Added missing 'Calendar' import
import { BarChart3, Megaphone, Handshake, ChevronRight, Calendar } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const HomeServices: React.FC = () => {
  const { config } = useLanguage();
  
  const featuredServices = [
    {
      title: 'ERP Systems & Automation',
      desc: 'Streamline operations with advanced ERP and automation solutions.',
      icon: BarChart3,
    },
    {
      title: 'Digital Marketing',
      desc: 'Drive growth with targeted campaigns, SEO, and online advertising.',
      icon: Megaphone,
    },
    {
      title: 'B2B Trade & Advisory',
      desc: 'Expand and manage your B2B trade network with expert guidance.',
      icon: Handshake,
    }
  ];

  return (
    <section className="relative z-10 py-24 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {featuredServices.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-10 rounded-3xl group flex flex-col items-center text-center transition-all duration-500 hover:border-biz-emerald/40"
            >
              <div className="w-24 h-24 rounded-full bg-biz-emerald/5 flex items-center justify-center text-biz-emerald mb-8 group-hover:bg-biz-emerald/10 transition-colors shadow-[0_0_40px_rgba(163,230,53,0.1)]">
                <service.icon size={44} strokeWidth={1} />
              </div>
              
              <h3 className="text-lg md:text-xl font-sans text-white font-bold uppercase tracking-widest mb-4 group-hover:text-biz-emerald transition-colors">
                {service.title}
              </h3>
              
              <p className="text-xs text-gray-400 font-medium leading-relaxed mb-8 max-w-[240px]">
                {service.desc}
              </p>
              
              <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/40 group-hover:text-biz-emerald transition-all border border-white/10 px-6 py-3 rounded-full hover:border-biz-emerald/40">
                Learn More <ChevronRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Row from screenshot */}
        <div className="mt-24 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 text-center">
            <h4 className="text-xl md:text-3xl font-serif text-white font-bold tracking-tight">
                Ready to Accelerate Your Business Growth? <span className="inline-block animate-bounce ml-2">↗</span>
            </h4>
            <div className="flex gap-4">
                <button className="btn-luxury-green px-8 py-3 rounded-xl text-biz-deep text-[10px] font-black uppercase tracking-widest">
                    Request Consultation
                </button>
                <button className="btn-luxury-outline px-8 py-3 rounded-xl text-white text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                    <Calendar size={14} className="text-biz-emerald" /> Book a Demo
                </button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;