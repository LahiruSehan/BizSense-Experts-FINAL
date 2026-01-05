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
    <section className="py-6 md:py-10 bg-matte-black relative border-t border-white/5 overflow-hidden flex flex-col justify-center min-h-[60vh] md:min-h-screen" id="contact">
       <div className="container mx-auto px-4 md:px-6 relative z-10">
         <div className="flex flex-col lg:flex-row gap-6 md:gap-10 items-center justify-center">
           
           <motion.div 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="lg:w-2/5 text-center lg:text-left space-y-4"
           >
             <h2 className="text-gold-500 font-bold uppercase tracking-widest text-[8px] md:text-[10px]">Connect With Us</h2>
             
             {/* Logo Equation Styling: Business + Sense = BIZSENSE (Gold) */}
             <div className="flex items-center justify-center lg:justify-start gap-1 md:gap-1.5 overflow-hidden whitespace-nowrap">
                <span className="text-sm md:text-xl font-serif text-white/90 font-bold">Business</span>
                <span className="text-sm md:text-lg text-white/30 font-serif">+</span>
                <span className="text-sm md:text-xl font-serif text-white/70 font-medium">Sense</span>
                <span className="text-sm md:text-lg text-white/30 font-serif">=</span>
                <span className="text-lg md:text-2xl font-serif text-gold-500 font-black tracking-tight uppercase">BIZSENSE</span>
             </div>

             <p className="text-gray-400 font-light leading-relaxed text-[10px] md:text-sm max-w-sm mx-auto lg:mx-0">
               {config.contact.subtitle}
             </p>

             {/* Single row for Email and 2 Phone numbers */}
             <div className="flex flex-row flex-wrap justify-center lg:justify-start items-center gap-x-4 gap-y-2 pt-4 border-t border-white/5">
               <div className="flex items-center gap-1.5">
                 <div className="w-6 h-6 bg-gold-500/10 border border-gold-500/20 rounded-full flex items-center justify-center text-gold-500 shrink-0">
                   <Mail size={10} />
                 </div>
                 <p className="text-white font-serif text-[9px] md:text-[10px] truncate max-w-[110px]">{config.company.email}</p>
               </div>
               
               <div className="flex items-center gap-1.5">
                 <div className="w-6 h-6 bg-gold-500/10 border border-gold-500/20 rounded-full flex items-center justify-center text-gold-500 shrink-0">
                   <MessageCircle size={10} />
                 </div>
                 <p className="text-white font-serif text-[9px] md:text-[10px]">{config.company.phone}</p>
               </div>

               {config.company.phoneSecondary && (
                 <div className="flex items-center gap-1.5">
                   <div className="w-6 h-6 bg-gold-500/10 border border-gold-500/20 rounded-full flex items-center justify-center text-gold-500 shrink-0">
                     <MessageCircle size={10} />
                   </div>
                   <p className="text-white font-serif text-[9px] md:text-[10px]">{config.company.phoneSecondary}</p>
                 </div>
               )}
             </div>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="w-full lg:w-3/5 bg-matte-charcoal border border-white/5 p-4 md:p-6 rounded-2xl relative overflow-hidden shadow-2xl max-w-lg"
           >
             <form onSubmit={handleSubmit} className="space-y-2.5 relative z-10">
               <div className="grid grid-cols-2 gap-2.5">
                 <div>
                   <label className="block text-[7px] md:text-[9px] text-gold-500 uppercase font-bold mb-0.5">{config.contact.form.name}</label>
                   <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-white/5 border border-white/10 p-2 text-white rounded-lg focus:outline-none focus:border-gold-500/50 text-[10px]" required />
                 </div>
                 <div>
                   <label className="block text-[7px] md:text-[9px] text-gold-500 uppercase font-bold mb-0.5">{config.contact.form.company}</label>
                   <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full bg-white/5 border border-white/10 p-2 text-white rounded-lg focus:outline-none focus:border-gold-500/50 text-[10px]" />
                 </div>
               </div>
               <div>
                 <label className="block text-[7px] md:text-[9px] text-gold-500 uppercase font-bold mb-0.5">{config.contact.form.email}</label>
                 <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-white/5 border border-white/10 p-2 text-white rounded-lg focus:outline-none focus:border-gold-500/50 text-[10px]" required />
               </div>
               <div>
                 <label className="block text-[7px] md:text-[9px] text-gold-500 uppercase font-bold mb-0.5">{config.contact.form.message}</label>
                 <textarea rows={2} name="message" value={formData.message} onChange={handleChange} className="w-full bg-white/5 border border-white/10 p-2 text-white rounded-lg focus:outline-none focus:border-gold-500/50 text-[10px]" required />
               </div>
               <div className="pt-1.5">
                 <Button type="submit" className="w-full !min-w-0 !py-2 text-[9px] md:text-[10px]">
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