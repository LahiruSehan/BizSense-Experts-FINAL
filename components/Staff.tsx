
import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

const Staff: React.FC = () => {
  const staff = [
    {
      name: "Strategic Lead",
      title: "Senior Business Consultant",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop",
    },
    {
      name: "Financial Architect",
      title: "ERP & Compliance Specialist",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2670&auto=format&fit=crop",
    }
  ];

  return (
    <section className="py-16 bg-matte-black border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-gold-500 text-[10px] font-bold tracking-[0.3em] uppercase mb-2">Our Team</h2>
          <h3 className="text-3xl md:text-4xl font-serif text-white font-bold">OUR STAFF</h3>
        </div>

        {/* Forced 1 row grid */}
        <div className="grid grid-cols-2 gap-4 md:gap-12 max-w-4xl mx-auto">
          {staff.map((person, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative flex flex-col items-center"
            >
              <div className="w-full aspect-[3/4] max-w-[180px] md:max-w-[220px] bg-matte-charcoal rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 group-hover:border-gold-500/50 transition-all duration-500 relative">
                <img src={person.img} alt={person.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                {/* Overlay details on hover */}
                <div className="absolute bottom-4 left-0 w-full px-4 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                   <div className="flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Linkedin size={16} className="text-white hover:text-gold-500 cursor-pointer" />
                      <Mail size={16} className="text-white hover:text-gold-500 cursor-pointer" />
                   </div>
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <h4 className="text-white font-serif text-sm md:text-lg font-bold group-hover:text-gold-400 transition-colors">{person.name}</h4>
                <p className="text-gold-500 text-[8px] md:text-xs font-bold uppercase tracking-widest mt-1">{person.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Staff;
