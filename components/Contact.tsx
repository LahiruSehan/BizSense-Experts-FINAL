import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, ArrowRight } from 'lucide-react';
import Button from './UI/Button';
import { useLanguage } from '../context/LanguageContext';

const Contact: React.FC = () => {
  const { config } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*Inquiry:* ${formData.message}\n*From:* ${formData.name}\n*Org:* ${formData.company}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${config.company.whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section className="py-24 md:py-40 bg-biz-deep relative border-t border-white/5 overflow-hidden" id="contact">
       <div className="container mx-auto px-6 relative z-10">
         <div className="flex flex-col lg:flex-row gap-20 items-start">
           
           <motion.div 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="lg:w-1/2 space-y-10"
           >
             <div>
               <h2 className="text-biz-emerald font-display font-bold uppercase tracking-[0.4em] text-sm mb-6">Engagement</h2>
               <h3 className="text-5xl md:text-8xl font-display text-white font-extrabold tracking-tighter leading-[0.9] uppercase">
                 Start the <br /> Convergence.
               </h3>
             </div>

             <p className="text-gray-400 font-normal leading-relaxed text-lg md:text-xl max-w-md">
               {config.contact.subtitle}
             </p>

             <div className="space-y-6 pt-10 border-t border-white/5">
               <div className="flex items-center gap-6 group">
                 <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-biz-emerald group-hover:bg-biz-emerald group-hover:text-biz-deep transition-all duration-500">
                   <Mail size={24} />
                 </div>
                 <div>
                   <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Electronic Mail</p>
                   <p className="text-white font-display text-lg font-bold">{config.company.email}</p>
                 </div>
               </div>
               
               <div className="flex items-center gap-6 group">
                 <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-biz-emerald group-hover:bg-biz-emerald group-hover:text-biz-deep transition-all duration-500">
                   <MessageCircle size={24} />
                 </div>
                 <div>
                   <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Direct Priority</p>
                   <p className="text-white font-display text-lg font-bold">{config.company.phone}</p>
                 </div>
               </div>
             </div>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="w-full lg:w-1/2"
           >
             <form onSubmit={handleSubmit} className="space-y-8 glass-panel p-10 md:p-16 rounded-[40px] border-white/10">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="relative group">
                   <input type="text" name="name" value={formData.name} onChange={handleChange} className="peer w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-biz-emerald transition-all font-medium" placeholder=" " required />
                   <label className="absolute left-0 top-4 text-gray-500 text-sm font-bold uppercase tracking-widest transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-xs peer-focus:text-biz-emerald pointer-events-none">Full Name</label>
                 </div>
                 <div className="relative group">
                   <input type="text" name="company" value={formData.company} onChange={handleChange} className="peer w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-biz-emerald transition-all font-medium" placeholder=" " />
                   <label className="absolute left-0 top-4 text-gray-500 text-sm font-bold uppercase tracking-widest transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-xs peer-focus:text-biz-emerald pointer-events-none">Organization</label>
                 </div>
               </div>
               
               <div className="relative group">
                 <input type="email" name="email" value={formData.email} onChange={handleChange} className="peer w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-biz-emerald transition-all font-medium" placeholder=" " required />
                 <label className="absolute left-0 top-4 text-gray-500 text-sm font-bold uppercase tracking-widest transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-xs peer-focus:text-biz-emerald pointer-events-none">Digital ID (Email)</label>
               </div>
               
               <div className="relative group">
                 <textarea rows={3} name="message" value={formData.message} onChange={handleChange} className="peer w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-biz-emerald transition-all font-medium resize-none" placeholder=" " required />
                 <label className="absolute left-0 top-4 text-gray-500 text-sm font-bold uppercase tracking-widest transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-xs peer-focus:text-biz-emerald pointer-events-none">Brief Project Brief</label>
               </div>

               <div className="pt-8">
                 <Button type="submit" className="w-full !py-6 text-lg group">
                   Initialize Project <ArrowRight size={20} className="ml-3 group-hover:translate-x-2 transition-transform" />
                 </Button>
               </div>
             </form>
           </motion.div>
         </div>
       </div>
    </section>
  );
};

export default Contact;