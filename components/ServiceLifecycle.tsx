import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Settings2, Code2, GraduationCap } from 'lucide-react';

const ServiceLifecycle: React.FC = () => {
  const pillars = [
    { title: "Consultation", desc: "Expert assessment & roadmap planning.", icon: MessageSquare },
    { title: "Implementation", desc: "Seamless deployment & data migration.", icon: Settings2 },
    { title: "Customization", desc: "Tailoring logic to your unique workflows.", icon: Code2 },
    { title: "Training", desc: "Empowering your team for peak performance.", icon: GraduationCap }
  ];

  const platforms = ["Odoo", "ERPNext", "Zoho", "SAP", "Local Custom Solutions"];

  return (
    <section className="py-24 bg-biz-deep/50 relative border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div>
            <h2 className="text-biz-emerald text-[10px] font-bold tracking-[0.4em] uppercase mb-4">Core Competencies</h2>
            <h3 className="text-3xl md:text-5xl font-display text-white font-extrabold tracking-tight mb-8">
              Expertise Across the <br/> Entire Deployment Lifecycle.
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pillars.map((p, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-biz-emerald/30 transition-all"
                >
                  <p.icon size={24} className="text-biz-emerald mb-4" />
                  <h4 className="text-white font-bold mb-2 uppercase text-xs tracking-widest">{p.title}</h4>
                  <p className="text-gray-500 text-[11px] leading-relaxed font-bold">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 bg-biz-emerald/5 blur-[80px] rounded-full pointer-events-none" />
            <div className="bg-biz-navy/40 border border-white/10 p-10 rounded-[40px] relative z-10 backdrop-blur-xl">
              <h4 className="text-white font-display text-lg font-bold mb-8 flex items-center gap-3">
                <span className="w-8 h-px bg-biz-emerald" /> Supported Tech Ecosystem
              </h4>
              
              <div className="flex flex-col gap-4">
                {platforms.map((plat, i) => (
                  <div key={i} className="flex items-center justify-between group">
                    <span className="text-gray-400 group-hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">
                      {plat}
                    </span>
                    <div className="flex-1 border-b border-white/5 mx-6 h-px" />
                    <div className="text-biz-emerald font-black text-[9px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                      Active Deployment
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-biz-emerald/10 border border-biz-emerald/20 rounded-2xl">
                <p className="text-[10px] text-biz-emerald font-black uppercase tracking-[0.2em]">Our Commitment</p>
                <p className="text-white text-xs mt-2 font-medium leading-relaxed">
                  We don't just sell software; we deliver strategic operational dominance by bridging financial logic with the world's most powerful platforms.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceLifecycle;