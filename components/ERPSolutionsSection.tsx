import React from 'react';
import { motion } from 'framer-motion';
import { Layers, CheckCircle, Database, ShieldCheck } from 'lucide-react';

const ERPSolutionsSection: React.FC = () => {
  return (
    <section className="relative py-24 md:py-32 bg-biz-deep/50 border-t border-white/5 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-biz-primary/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-biz-secondary/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/3" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Visual Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:w-1/2 relative group"
          >
            <div className="relative rounded-[40px] md:rounded-[60px] overflow-hidden border border-white/10 shadow-2xl aspect-[4/5] md:aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop" 
                alt="ERP Visualization" 
                className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-75 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-biz-deep via-transparent to-transparent opacity-80" />
              
              {/* Floating Stat Card */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 p-6 md:p-8 bg-biz-deep/60 backdrop-blur-2xl border border-white/10 rounded-3xl"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-full bg-biz-primary/20 flex items-center justify-center text-biz-primary">
                    <Database size={20} />
                  </div>
                  <span className="text-white font-display font-black uppercase tracking-widest text-[10px] md:text-xs">Real-Time Facts</span>
                </div>
                <p className="text-gray-300 text-[10px] md:text-sm leading-relaxed font-medium italic">
                  "Without ERP, businesses operate on assumptions. <br className="hidden md:block" />
                  <span className="text-white font-bold">With ERP, businesses operate on facts.</span>"
                </p>
              </motion.div>
            </div>

            {/* Decorative Icon */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-biz-primary rounded-3xl rotate-12 flex items-center justify-center shadow-2xl shadow-biz-primary/20 hidden md:flex">
                <Layers size={32} className="text-biz-deep" />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="lg:w-1/2"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-biz-primary/10 border border-biz-primary/20 text-biz-primary mb-8">
              <span className="w-2 h-2 rounded-full bg-biz-primary animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest">Core Advisory</span>
            </div>

            <h2 className="text-3xl md:text-6xl font-display font-black text-white leading-tight uppercase tracking-tighter mb-6">
              ERP Solutions & <br className="hidden sm:block" /> <span className="text-biz-primary">Implementation</span>
            </h2>

            <div className="w-20 h-1 bg-biz-primary mb-10" />

            <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-6 leading-snug">
              ERP Is Not Software. <br className="hidden sm:block" /> 
              <span className="text-biz-primary italic">It Is a Business Discipline.</span>
            </h3>

            <div className="bg-white/5 border-l-4 border-biz-primary p-6 md:p-8 rounded-r-3xl mb-10 backdrop-blur-sm">
              <p className="text-gray-300 text-sm md:text-lg leading-relaxed font-medium italic">
                “Implementing an ERP system is not an IT project — it is a change in business culture.”
              </p>
            </div>

            <p className="text-gray-400 text-sm md:text-lg leading-relaxed mb-10 font-medium">
              ERP brings all business functions into one integrated system, enabling 
              <span className="text-white font-bold px-1">real-time visibility</span>, 
              <span className="text-biz-primary font-bold px-1">control</span>, and 
              <span className="text-white font-bold px-1">informed decision-making</span>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 text-biz-primary"><CheckCircle size={20} /></div>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-1">Operational Truth</h4>
                  <p className="text-gray-500 text-[10px] leading-relaxed">No more silos. Every department speaks the same data language.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 text-biz-secondary"><ShieldCheck size={20} /></div>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-1">Risk Mitigation</h4>
                  <p className="text-gray-500 text-[10px] leading-relaxed">Systems built on 20+ years of financial and compliance logic.</p>
                </div>
              </div>
            </div>

            <button 
              onClick={() => window.open('https://wa.me/94701757576', '_blank')}
              className="mt-12 px-10 py-4 bg-white text-biz-deep rounded-2xl font-display font-black text-[10px] md:text-xs uppercase tracking-[0.2em] hover:bg-biz-primary hover:text-white transition-all shadow-xl"
            >
              Discuss Your System
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ERPSolutionsSection;