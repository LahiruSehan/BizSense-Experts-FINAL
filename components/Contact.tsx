import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle } from 'lucide-react';
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
    const message = `*New Inquiry via Website*\n\n*Name:* ${formData.name}\n*Company:* ${formData.company}\n*Email:* ${formData.email}\n*Message:* ${formData.message}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${config.company.whatsappNumber}?text=${encodedMessage}`, '_blank');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <section className="py-12 bg-biz-deep relative border-t border-white/5 overflow-hidden flex flex-col justify-center min-h-[60vh]" id="contact">
       <div className="container mx-auto px-4 md:px-6 relative z-10">
         <div className="flex flex-col lg:flex-row gap-10 items-center justify-center">
           
           <motion.div 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="lg:w-2/5 text-center lg:text-left space-y-4"
           >
             <h2 className="text-biz-emerald font-bold uppercase tracking-widest text-[10px]">Connect With Us</h2>
             
             <div className="flex items-center justify-center lg:justify-start gap-1.5 overflow-hidden whitespace-nowrap">
                <span className="text-sm md:text-xl font-serif text-white/90 font-bold">Business</span>
                <span className="text-sm md:text-lg text-white/30 font-serif">+</span>
                <span className="text-sm md:text-xl font-serif text-white/70 font-medium">Sense</span>
                <span className="text-sm md:text-lg text-white/30 font-serif">=</span>
                <span className="text-lg md:text-2xl font-serif text-biz-emerald font-black tracking-tight uppercase">BIZSENSE</span>
             </div>

             <p className="text-gray-400 font-medium leading-relaxed text-[11px] md:text-sm max-w-sm mx-auto lg:mx-0">
               {config.contact.subtitle}
             </p>

             <div className="flex flex-row flex-wrap justify-center lg:justify-start items-center gap-x-6 gap-y-3 pt-6 border-t border-white/5">
               <div className="flex items-center gap-2">
                 <div className="w-7 h-7 bg-biz-emerald/10 border border-biz-emerald/20 rounded-full flex items-center justify-center text-biz-emerald shrink-0">
                   <Mail size={12} />
                 </div>
                 <p className="text-white font-serif text-[10px] truncate max-w-[150px]">{config.company.email}</p>
               </div>
               
               <div className="flex items-center gap-2">
                 <div className="w-7 h-7 bg-biz-emerald/10 border border-biz-emerald/20 rounded-full flex items-center justify-center text-biz-emerald shrink-0">
                   <MessageCircle size={12} />
                 </div>
                 <p className="text-white font-serif text-[10px]">{config.company.phone}</p>
               </div>
             </div>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="w-full lg:w-3/5 bg-biz-navy/40 border border-white/10 p-6 md:p-8 rounded-3xl relative overflow-hidden shadow-2xl max-w-xl"
           >
             <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
               <div className="grid grid-cols-2 gap-4">
                 <div>
                   <label className="block text-[8px] text-biz-emerald uppercase font-bold mb-1">{config.contact.form.name}</label>
                   <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-biz-deep/50 border border-white/10 p-2.5 text-white rounded-xl focus:outline-none focus:border-biz-emerald/50 text-xs font-bold" required />
                 </div>
                 <div>
                   <label className="block text-[8px] text-biz-emerald uppercase font-bold mb-1">{config.contact.form.company}</label>
                   <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full bg-biz-deep/50 border border-white/10 p-2.5 text-white rounded-xl focus:outline-none focus:border-biz-emerald/50 text-xs font-bold" />
                 </div>
               </div>
               <div>
                 <label className="block text-[8px] text-biz-emerald uppercase font-bold mb-1">{config.contact.form.email}</label>
                 <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-biz-deep/50 border border-white/10 p-2.5 text-white rounded-xl focus:outline-none focus:border-biz-emerald/50 text-xs font-bold" required />
               </div>
               <div>
                 <label className="block text-[8px] text-biz-emerald uppercase font-bold mb-1">{config.contact.form.message}</label>
                 <textarea rows={3} name="message" value={formData.message} onChange={handleChange} className="w-full bg-biz-deep/50 border border-white/10 p-2.5 text-white rounded-xl focus:outline-none focus:border-biz-emerald/50 text-xs font-bold" required />
               </div>
               <div className="pt-2">
                 <Button type="submit" className="w-full !min-w-0 !py-3">
                   {config.contact.form.button}
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