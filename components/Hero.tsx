import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Star, ArrowRight, MessageCircle, Phone, Sparkles, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ServiceModal from './ServiceModal';
import { CONFIG } from '../config/config-english';

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedService = CONFIG.services.find(s => s.id === selectedId);

  const headlines = CONFIG.hero.headlines;
  
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % headlines.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const openChat = () => {
    window.dispatchEvent(new Event('openBizSenseChat'));
  };

  const openWhatsApp = () => {
    window.dispatchEvent(new Event('openWhatsAppModal'));
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2 
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <div className="relative w-full min-h-screen flex flex-col pt-16 md:pt-20 pb-10 overflow-hidden bg-matte-black">
        
        {/* Background Layer */}
        <div className="absolute inset-0 z-0 pointer-events-none">
           <img 
             src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop" 
             alt="Luxury Office" 
             className="absolute top-0 left-0 w-full h-[60vh] object-cover opacity-20 mix-blend-luminosity"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-matte-black/60 via-matte-black/90 to-matte-black" />
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-[0.03]" />
        </div>

        {/* Main Flex Content */}
        <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center">
          
          {/* Top: Headlines */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center w-full max-w-4xl flex flex-col items-center mb-4 mt-2 md:mt-6"
          >
            {/* Badge */}
            <motion.div 
               variants={itemVariants}
               className="inline-flex items-center gap-1.5 py-1.5 px-5 border border-gold-500/20 rounded-full bg-gold-500/5 mb-4 backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.5)]"
            >
               <Star size={10} className="text-gold-500 fill-gold-500 animate-pulse" />
               <span className="text-gold-200 text-[9px] md:text-[10px] font-bold tracking-[0.25em] uppercase">
                 {CONFIG.hero.badge}
               </span>
            </motion.div>
            
            {/* Main Headline - REALISTIC GOLD & THICK TEXT */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-black leading-none mb-3 gold-title-realistic">
               {CONFIG.hero.mainHeadlinePrefix}
            </h1>

            {/* Changing Gold Text */}
            <div className="h-8 md:h-12 flex justify-center items-center drop-shadow-lg mb-4">
              <span className="text-gray-500 font-light text-[10px] md:text-sm mr-3 uppercase tracking-widest">With</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 10, filter: 'blur(5px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -10, filter: 'blur(5px)' }}
                  transition={{ duration: 0.5 }}
                  className="font-serif italic text-gold-500 text-lg md:text-3xl border-b border-gold-500/30 pb-1"
                >
                  {headlines[index]}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Detailed Description */}
            <motion.p 
              variants={itemVariants}
              className="text-gray-400 text-xs md:text-base font-light max-w-2xl leading-relaxed mx-auto mb-6 text-center"
            >
              {CONFIG.hero.description}
            </motion.p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full max-w-lg grid grid-cols-3 gap-3 md:gap-4 mb-8"
          >
             <button 
                onClick={() => navigate('/contact')} 
                className="group relative h-10 md:h-12 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 rounded-full flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(212,165,51,0.2)] hover:shadow-[0_0_25px_rgba(212,165,51,0.4)] transition-all"
             >
                <span className="text-[10px] md:text-xs uppercase font-bold text-black tracking-widest">{CONFIG.hero.cta.consult}</span>
             </button>

             <button 
                onClick={openWhatsApp}
                className="group relative h-10 md:h-12 bg-[#0D1F15] border border-[#25D366]/40 rounded-full flex items-center justify-center gap-2 hover:bg-[#25D366]/10 transition-colors"
             >
                <div className="w-4 h-4 rounded-full bg-[#25D366]/20 flex items-center justify-center">
                    <MessageCircle size={10} className="text-[#25D366] fill-[#25D366]" />
                </div>
                <span className="text-[10px] md:text-xs uppercase font-bold text-[#25D366] tracking-widest">{CONFIG.hero.cta.whatsapp}</span>
             </button>

             <button 
                onClick={openChat} 
                className="group relative h-10 md:h-12 bg-matte-charcoal border border-gold-500/30 rounded-full flex items-center justify-center gap-2 hover:bg-gold-500/5 transition-colors"
             >
                <div className="w-4 h-4 bg-gold-500/10 rounded-full flex items-center justify-center">
                    <Sparkles size={10} className="text-gold-400" />
                </div>
                <span className="text-[10px] md:text-xs uppercase font-bold text-gold-400 tracking-widest">{CONFIG.hero.cta.ai}</span>
             </button>
          </motion.div>

          {/* Why Choose Section - Bigger Elements, 3x2 Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full max-w-5xl mt-2 pt-4 border-t border-white/5"
          >
            <h3 className="text-center text-gold-500 text-[9px] uppercase tracking-[0.3em] font-bold mb-6">Why Choose BizSense?</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
               {CONFIG.hero.whyChoose.map((item, idx) => (
                 <motion.div 
                   key={idx}
                   variants={itemVariants}
                   className="flex flex-col items-center text-center p-4 md:p-5 bg-white/5 border border-white/5 rounded-xl hover:border-gold-500/20 hover:bg-white/10 transition-all group"
                 >
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500 mb-3 group-hover:scale-110 transition-transform shadow-[0_0_10px_rgba(212,165,51,0.1)]">
                      <item.icon size={18} className="md:w-5 md:h-5" />
                    </div>
                    <h4 className="text-gray-100 text-[10px] md:text-xs font-bold uppercase tracking-wider mb-2">{item.title}</h4>
                    <p className="text-gray-500 text-[9px] md:text-[10px] leading-relaxed font-light max-w-[200px]">{item.text}</p>
                 </motion.div>
               ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Reusable Modal */}
      <AnimatePresence>
        {selectedId && selectedService && (
          <ServiceModal selectedService={selectedService} setSelectedId={setSelectedId} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Hero;