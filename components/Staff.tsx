import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

const Staff: React.FC = () => {
  const staff = [
    {
      name: "Strategic Lead",
      title: "Senior Business Architect",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop",
    },
    {
      name: "Finance Architect",
      title: "ERP Control Specialist",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2670&auto=format&fit=crop",
    }
  ];

  return (
    <section className="py-24 md:py-40 bg-biz-deep relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mb-16 md:mb-24">
          <h2 className="text-biz-emerald text-sm font-display font-bold tracking-[0.4em] uppercase mb-4">Leadership</h2>
          <h3 className="text-4xl md:text-7xl font-display text-white font-extrabold tracking-tighter uppercase leading-[0.9]">
            The Core Architects.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {staff.map((person, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative flex flex-col items-center md:items-start"
            >
              <div className="w-full aspect-[4/5] bg-white/5 rounded-[40px] overflow-hidden border border-white/5 group-hover:border-biz-emerald/50 transition-all duration-700 relative">
                <img src={person.img} alt={person.name} className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 scale-105 group-hover:scale-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-biz-deep via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-8 left-8 right-8">
                   <div className="flex gap-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-biz-emerald hover:text-biz-deep cursor-pointer transition-all">
                        <Linkedin size={20} />
                      </div>
                      <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-biz-emerald hover:text-biz-deep cursor-pointer transition-all">
                        <Mail size={20} />
                      </div>
                   </div>
                </div>
              </div>
              
              <div className="mt-8 text-center md:text-left">
                <h4 className="text-white font-display text-3xl font-bold group-hover:text-biz-emerald transition-colors tracking-tight">{person.name}</h4>
                <p className="text-gray-500 text-sm font-display font-bold uppercase tracking-widest mt-2">{person.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Staff;