import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Star, MessageCircle, Sparkles, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ServiceModal from './ServiceModal';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { config } = useLanguage();
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedService = config.services.find(s => s.id === selectedId);

  const headlines = config.hero.headlines;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % headlines.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [headlines]);

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

  const currentHeadline = headlines[index];

  return (
    <>
      <div className="relative w-full min-h-[120vh] flex flex-col pt-24 pb-64 overflow-hidden bg-matte-black justify-start items-center">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
           <div className="absolute inset-0 w-full h-full animate-ken-burns">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop" 
                alt="Luxury Office" 
                className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
              />
           </div>
           <div className="absolute inset-0 bg-gradient-to-b from-matte-black/50 via-matte-black/90 to-matte-black" />
           <div className="absolute inset-0 bg-gradient-to-r from-gemini-900/20 via-transparent to-gemini-900/20 mix-blend-overlay" />
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.12),transparent_60%)] animate-pulse-soft" />
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-[0.02]" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center mt-10 md:mt-16 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="w-full max-w-6xl"
          >
            <motion.div 
               variants={itemVariants}
               className="inline-flex items-center gap-1.5 py-1.5 px-5 border border-gold-500/10 rounded-full bg-black/60 mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(14,165,233,0.1)] ring-1 ring-gemini-500/20 mx-auto"
            >
               <Star size={10} className="text-gold-500 fill-gold-500 animate-pulse" />
               <span className="text-gold-100 text-[9px] md:text-[10px] font-bold tracking-[0.25em] uppercase">
                 {config.hero.badge}
               </span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-black leading-[1.1] mb-6 gold-title-realistic drop-shadow-2xl max-w-5xl mx-auto">
               {config.hero.mainHeadlinePrefix}
            </h1>

            <div className="flex flex-col items-center justify-center mb-10 min-h-[4rem]">
              <div className="relative">
                <div className="absolute inset-0 bg-gemini-500/5 blur-3xl rounded-full"></div>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative font-serif italic text-gold-400 text-xl md:text-3xl lg:text-4xl border-b border-gold-500/30 pb-2 font-bold tracking-tight inline-block"
                  >
                    {currentHeadline}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            <motion.p 
              variants={itemVariants}
              className="text-gold-200/80 text-sm md:text-base lg:text-lg font-bold max-w-4xl leading-relaxed mx-auto mb-12 drop-shadow-lg"
            >
              {config.hero.description}
            </motion.p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
          >
             <button 
                onClick={() => navigate('/contact')} 
                className="group relative h-14 rounded-full flex items-center justify-center gap-2 overflow-hidden transition-all duration-300 transform hover:-translate-y-1"
             >
                <div className="absolute inset-0 bg-gradient-to-b from-gold-400 via-gold-600 to-gold-800" />
                <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent opacity-50" />
                <div className="absolute inset-0 rounded-full border border-gold-300/50" />
                <span className="relative text-[10px] md:text-xs uppercase font-black text-[#1a1000] tracking-widest flex items-center gap-2 group-hover:tracking-[0.15em] transition-all">
                  {config.hero.cta.consult} <ArrowRight size={12} className="text-[#1a1000] -rotate-45 group-hover:rotate-0 transition-transform" />
                </span>
             </button>

             <button 
                onClick={openWhatsApp}
                className="group relative h-14 bg-black border border-[#25D366]/30 rounded-full flex items-center justify-center gap-2 hover:bg-[#25D366]/5 transition-all hover:border-[#25D366] shadow-[0_0_15px_rgba(37,211,102,0.05)] hover:shadow-[0_0_25px_rgba(37,211,102,0.2)]"
             >
                <div className="w-6 h-6 rounded-full bg-[#25D366]/10 flex items-center justify-center border border-[#25D366]/20">
                    <MessageCircle size={12} className="text-[#25D366] fill-[#25D366]" />
                </div>
                <span className="text-[10px] md:text-xs uppercase font-bold text-[#25D366] tracking-widest group-hover:text-white transition-colors">{config.hero.cta.whatsapp}</span>
             </button>

             <button 
                onClick={openChat} 
                className="group relative h-14 rounded-full flex items-center justify-center gap-2 overflow-hidden transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(10,20,50,0.5)]"
             >
                <div className="absolute inset-0 bg-gradient-to-b from-[#1e3a8a] to-[#0f172a]" />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 rounded-full border border-blue-400/30 group-hover:border-gold-500/50 transition-colors" />
                <div className="w-5 h-5 bg-black/20 rounded-full flex items-center justify-center relative z-10 border border-white/10">
                    <Sparkles size={12} className="text-blue-200 fill-blue-200" />
                </div>
                <span className="text-[10px] md:text-xs uppercase font-bold text-blue-50 tracking-widest relative z-10 drop-shadow-md group-hover:text-gold-200 transition-colors">
                    {config.hero.cta.ai}
                </span>
             </button>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {selectedId && selectedService && (
          <ServiceModal selectedService={selectedService} setSelectedId={setSelectedId} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Hero;