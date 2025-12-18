import React from 'react';
import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';
import Button from '../UI/Button';
import { useLanguage } from '../../context/LanguageContext';

const ERPPage: React.FC = () => {
  const { config } = useLanguage();
  const { title, subtitle, description, platforms, industries, modules } = config.erpPage;

  return (
    <div className="pt-24 min-h-screen bg-matte-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-gemini-900/10 blur-[150px] pointer-events-none animate-blob" />

      <section className="relative py-24 px-6 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-gold-500/5 pointer-events-none"></div>
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 tracking-tight">{title}</h1>
            <h2 className="text-xl md:text-2xl text-gold-500 font-serif mb-6">{subtitle}</h2>
            <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-2xl">
              {description}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 relative">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gemini-900/10 blur-[120px] pointer-events-none animate-blob" style={{ animationDelay: '2s' }} />

        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
          <div>
            <h3 className="text-gold-500 uppercase tracking-[0.2em] font-bold text-xs mb-10">ERP Platforms We Implement</h3>
            <div className="space-y-4">
              {platforms.map((tech, i) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="p-5 border-l-2 border-gold-500 bg-white/5 hover:bg-white/10 transition-colors flex items-center gap-4 group cursor-default"
                >
                   <span className="text-gray-200 text-lg font-serif group-hover:text-gold-100 transition-colors">{tech}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-12">
               <h3 className="text-gold-500 uppercase tracking-[0.2em] font-bold text-xs mb-8">Industries Served</h3>
               <div className="grid grid-cols-2 gap-4">
                   {industries.map((ind, i) => (
                       <div key={i} className="flex items-center gap-3 text-gray-400">
                           <ind.icon size={16} className="text-gold-500" />
                           <span className="text-sm">{ind.name}</span>
                       </div>
                   ))}
               </div>
            </div>
          </div>

          <div>
            <h3 className="text-gold-500 uppercase tracking-[0.2em] font-bold text-xs mb-10">Comprehensive Modules</h3>
            <div className="grid grid-cols-1 gap-6">
                {modules.map((mod, i) => (
                    <motion.div
                       key={i}
                       initial={{ opacity: 0, y: 10 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       transition={{ delay: i * 0.05 }}
                       className="flex items-start gap-4 p-4 border border-white/5 rounded-xl hover:border-gold-500/30 transition-colors bg-matte-charcoal relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gemini-900/0 hover:bg-gemini-900/5 transition-colors duration-500 pointer-events-none" />
                        <div className="w-8 h-8 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500 shrink-0 mt-1 relative z-10">
                            <Layers size={14} />
                        </div>
                        <div className="relative z-10">
                            <h4 className="text-white font-bold text-base mb-1">{mod.title}</h4>
                            <p className="text-gray-200 font-bold text-sm">{mod.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
            
            <div className="mt-12">
                <Button onClick={() => window.open(`https://wa.me/94701757576?text=I%20am%20interested%20in%20an%20ERP%20Demo`, '_blank')}>Request Demo</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ERPPage;