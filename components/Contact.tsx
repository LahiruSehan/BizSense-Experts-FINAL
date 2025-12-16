import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Globe } from 'lucide-react';
import Button from './UI/Button';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you. An expert will contact you shortly.");
  };

  return (
    <section className="py-16 md:py-24 bg-matte-black relative border-t border-white/5" id="contact">
       <div className="container mx-auto px-4 md:px-6">
         <div className="flex flex-col lg:flex-row gap-12 md:gap-20">
           
           {/* Contact Info */}
           <motion.div 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="lg:w-1/3"
           >
             <h2 className="text-gold-500 font-bold uppercase tracking-widest text-[9px] md:text-xs mb-3 md:mb-4">Contact Us</h2>
             <h3 className="text-3xl md:text-4xl font-serif text-white mb-6 md:mb-8">Let's Grow.</h3>
             <p className="text-gray-400 mb-8 md:mb-12 font-light leading-relaxed text-xs md:text-base">
               Ready to transform your business with innovative ERP, dynamic digital marketing, seamless B2B trade, or expert SME advisory?
             </p>

             <div className="space-y-6 md:space-y-8">
               <div className="flex items-center gap-4 group">
                 <div className="w-8 h-8 md:w-10 md:h-10 bg-gold-500/10 border border-gold-500/20 rounded-full flex items-center justify-center text-gold-500 shrink-0">
                   <Phone size={14} className="md:w-[18px]" />
                 </div>
                 <div>
                   <p className="text-[8px] md:text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-0.5">Call Us</p>
                   <p className="text-white font-serif text-sm md:text-lg">0701 75 75 76</p>
                 </div>
               </div>

               <div className="flex items-center gap-4 group">
                 <div className="w-8 h-8 md:w-10 md:h-10 bg-gold-500/10 border border-gold-500/20 rounded-full flex items-center justify-center text-gold-500 shrink-0">
                   <Mail size={14} className="md:w-[18px]" />
                 </div>
                 <div>
                   <p className="text-[8px] md:text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-0.5">Email Us</p>
                   <p className="text-white font-serif text-sm md:text-lg">info@bizsenselk.com</p>
                 </div>
               </div>

               <div className="flex items-center gap-4 group">
                 <div className="w-8 h-8 md:w-10 md:h-10 bg-gold-500/10 border border-gold-500/20 rounded-full flex items-center justify-center text-gold-500 shrink-0">
                   <Globe size={14} className="md:w-[18px]" />
                 </div>
                 <div>
                   <p className="text-[8px] md:text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-0.5">Serving</p>
                   <p className="text-white font-serif text-sm md:text-lg">Sri Lanka & Global</p>
                 </div>
               </div>
             </div>
           </motion.div>

           {/* Form - Compact on Mobile */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="lg:w-2/3 bg-[#0A0A0A] border border-white/5 p-6 md:p-12 rounded-xl shadow-2xl relative overflow-hidden"
           >
             <div className="absolute top-0 right-0 w-40 h-40 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
             
             <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 relative z-10">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                 <div>
                   <label className="block text-[9px] md:text-[10px] text-gold-500 uppercase font-bold mb-1.5 md:mb-2">Full Name</label>
                   <input 
                     type="text" 
                     name="name" 
                     value={formData.name}
                     onChange={handleChange}
                     className="w-full bg-white/5 border border-white/10 p-3 md:p-4 text-white rounded-lg focus:outline-none focus:border-gold-500/50 transition-colors text-xs md:text-sm"
                     placeholder="John Doe"
                     required
                   />
                 </div>
                 <div>
                   <label className="block text-[9px] md:text-[10px] text-gold-500 uppercase font-bold mb-1.5 md:mb-2">Company</label>
                   <input 
                     type="text" 
                     name="company" 
                     value={formData.company}
                     onChange={handleChange}
                     className="w-full bg-white/5 border border-white/10 p-3 md:p-4 text-white rounded-lg focus:outline-none focus:border-gold-500/50 transition-colors text-xs md:text-sm"
                     placeholder="Enterprise Ltd."
                   />
                 </div>
               </div>

               <div>
                 <label className="block text-[9px] md:text-[10px] text-gold-500 uppercase font-bold mb-1.5 md:mb-2">Email</label>
                 <input 
                   type="email" 
                   name="email" 
                   value={formData.email}
                   onChange={handleChange}
                   className="w-full bg-white/5 border border-white/10 p-3 md:p-4 text-white rounded-lg focus:outline-none focus:border-gold-500/50 transition-colors text-xs md:text-sm"
                   placeholder="john@company.com"
                   required
                 />
               </div>

               <div>
                 <label className="block text-[9px] md:text-[10px] text-gold-500 uppercase font-bold mb-1.5 md:mb-2">Message</label>
                 <textarea 
                   rows={4}
                   name="message"
                   value={formData.message}
                   onChange={handleChange}
                   className="w-full bg-white/5 border border-white/10 p-3 md:p-4 text-white rounded-lg focus:outline-none focus:border-gold-500/50 transition-colors text-xs md:text-sm"
                   placeholder="How can we assist?"
                   required
                 />
               </div>

               <div className="pt-2 md:pt-4">
                 <Button type="submit" className="w-full md:w-auto">
                   Send Message <Send size={12} className="ml-2" />
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