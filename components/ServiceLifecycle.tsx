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
    <section className="py-24 bg-transparent relative border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
          
          <div className="flex flex-col items-center text-center">
            <h2 className="text-biz-emerald text-[10px] font-bold tracking-[0.4em] uppercase mb-4">Core Competencies</h2>
            <h3 className="text-3xl md:text-5xl font-display text-white font-extrabold tracking-tight mb-12">
              Expertise Across the <br/> Entire Deployment Lifecycle.
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {pillars.map((p, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-biz-emerald/30 transition-all flex flex-col items-center text-center group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-biz-emerald/10 flex items-center justify-center text-biz-emerald mb-6 group-hover:scale-110 transition-transform">
                    <p.icon size={24} />
                  </div>
                  <h4 className="text-white font-bold mb-3 uppercase text-xs tracking-[0.2em]">{p.title}</h4>
                  <p className="text-gray-500 text-[11px] leading-relaxed font-bold max-w-[180px]">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative w-full flex flex-col items-center">
            <div className="absolute -inset-10 bg-biz-emerald/5 blur-[100px] rounded-full pointer-events-none" />
            <div className="w-full max-w-xl bg-biz-navy/40 border border-white/10 p-8 md:p-14 rounded-[40px] relative z-10 backdrop-blur-2xl flex flex-col items-center text-center">
              <h4 className="text-white font-display text-lg md:text-xl font-bold mb-10 flex items-center justify-center gap-3">
                <span className="w-6 h-px bg-biz-emerald/50" /> Supported Tech Ecosystem <span className="w-6 h-px bg-biz-emerald/50" />
              </h4>
              
              <div className="flex flex-col gap-6 w-full items-center">
                {platforms.map((plat, i) => (
                  <div key={i} className="flex flex-col items-center group w-full">
                    <span className="text-gray-400 group-hover:text-white transition-colors text-sm md:text-base font-bold uppercase tracking-[0.3em] mb-2">
                      {plat}
                    </span>
                    <div className="text-biz-emerald font-black text-[9px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-1 group-hover:translate-y-0">
                      Active Deployment Strategy
                    </div>
                    {i < platforms.length - 1 && <div className="w-12 h-px bg-white/5 mt-4" />}
                  </div>
                ))}
              </div>

              <div className="mt-14 p-8 bg-biz-emerald/10 border border-biz-emerald/20 rounded-[30px] w-full text-center">
                <p className="text-[10px] text-biz-emerald font-black uppercase tracking-[0.3em] mb-3">Our Commitment</p>
                <p className="text-white text-xs md:text-sm font-medium leading-relaxed max-w-sm mx-auto">
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