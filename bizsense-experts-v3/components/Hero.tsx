import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Star, MessageCircle, Sparkles, ArrowRight } from 'lucide-react';
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
      <div className="relative w-full min-h-[120vh] flex flex-col pt-24 pb-64 overflow-hidden bg-matte-black justify-start items-center">
        
        {/* Animated Background Layer (Ken Burns) */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
           {/* Image Wrapper with Animation */}
           <div className="absolute inset-0 w-full h-full animate-ken-burns">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop" 
                alt="Luxury Office" 
                className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
              />
           </div>
           
           {/* Complex Gradient Overlays for Blue/Gold Vibe */}
           <div className="absolute inset-0 bg-gradient-to-b from-matte-black/50 via-matte-black/90 to-matte-black" />
           
           {/* Faint Blue Ambient Light */}
           <div className="absolute inset-0 bg-gradient-to-r from-gemini-900/10 via-transparent to-gemini-900/10 mix-blend-overlay" />
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.08),transparent_60%)]" />
           
           {/* Texture */}
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-[0.02]" />
        </div>

        {/* Main Flex Content */}
        <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center mt-10 md:mt-16">
          
          {/* Top: Headlines */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center w-full max-w-5xl flex flex-col items-center mb-10"
          >
            {/* Badge */}
            <motion.div 
               variants={itemVariants}
               className="inline-flex items-center gap-1.5 py-1.5 px-5 border border-gold-500/10 rounded-full bg-black/60 mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(14,165,233,0.1)] ring-1 ring-gemini-500/20"
            >
               <Star size={10} className="text-gold-500 fill-gold-500 animate-pulse" />
               <span className="text-gold-100 text-[9px] md:text-[10px] font-bold tracking-[0.25em] uppercase">
                 {CONFIG.hero.badge}
               </span>
            </motion.div>
            
            {/* Main Headline - REALISTIC GOLD & THICK TEXT */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-black leading-[0.9] mb-4 gold-title-realistic drop-shadow-2xl">
               {CONFIG.hero.mainHeadlinePrefix}
            </h1>

            {/* Changing Gold Text */}
            <div className="h-10 md:h-16 flex justify-center items-center drop-shadow-2xl mb-6 relative">
              <div className="absolute inset-0 bg-gemini-500/10 blur-3xl rounded-full"></div>
              {/* Changed: With text is now Bold and Gold */}
              <span className="relative text-gold-500 font-bold text-xs md:text-base mr-3 uppercase tracking-widest drop-shadow-md">With</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                  transition={{ duration: 0.5 }}
                  className="relative font-serif italic text-gold-400 text-2xl md:text-4xl border-b-2 border-gold-500/50 pb-1 font-bold tracking-wide"
                >
                  {headlines[index]}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Detailed Description - BOLD GOLD */}
            <motion.p 
              variants={itemVariants}
              className="text-gold-200/90 text-sm md:text-lg font-bold max-w-3xl leading-relaxed mx-auto mb-10 text-center drop-shadow-lg"
            >
              {CONFIG.hero.description}
            </motion.p>
          </motion.div>

          {/* Action Buttons - PREMIUM REDESIGN */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full max-w-2xl grid grid-cols-3 gap-4 md:gap-6 mb-12"
          >
             {/* 1. Consult Button - Gold Metallic */}
             <button 
                onClick={() => navigate('/contact')} 
                className="group relative h-12 md:h-14 rounded-full flex items-center justify-center gap-2 overflow-hidden transition-all duration-300 transform hover:-translate-y-1"
             >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-gold-400 via-gold-600 to-gold-800" />
                
                {/* Gloss Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent opacity-50" />
                
                {/* Border Ring */}
                <div className="absolute inset-0 rounded-full border border-gold-300/50" />
                
                {/* Content */}
                <span className="relative text-[10px] md:text-xs uppercase font-black text-[#1a1000] tracking-widest flex items-center gap-2 group-hover:tracking-[0.15em] transition-all">
                  {CONFIG.hero.cta.consult} <ArrowRight size={12} className="text-[#1a1000] -rotate-45 group-hover:rotate-0 transition-transform" />
                </span>
                
                {/* Glow Shadow */}
                <div className="absolute -inset-3 bg-gold-500/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             </button>

             {/* 2. WhatsApp Button - Clean Dark Green */}
             <button 
                onClick={openWhatsApp}
                className="group relative h-12 md:h-14 bg-[#05110A] border border-[#25D366]/30 rounded-full flex items-center justify-center gap-2 hover:bg-[#25D366]/5 transition-all hover:border-[#25D366] shadow-[0_0_15px_rgba(37,211,102,0.05)] hover:shadow-[0_0_25px_rgba(37,211,102,0.2)]"
             >
                <div className="w-6 h-6 rounded-full bg-[#25D366]/10 flex items-center justify-center border border-[#25D366]/20">
                    <MessageCircle size={12} className="text-[#25D366] fill-[#25D366]" />
                </div>
                <span className="text-[10px] md:text-xs uppercase font-bold text-[#25D366] tracking-widest group-hover:text-white transition-colors">{CONFIG.hero.cta.whatsapp}</span>
             </button>

             {/* 3. AI Chat Button - Deep Luxury Navy (No Light Blue) */}
             <button 
                onClick={openChat} 
                className="group relative h-12 md:h-14 rounded-full flex items-center justify-center gap-2 overflow-hidden transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(10,20,50,0.5)] hover:shadow-[0_0_35px_rgba(30,58,138,0.5)]"
             >
                {/* Deep Royal/Navy Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#1e3a8a] to-[#0f172a]" />
                
                {/* Metallic Blue Sheen */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Thin Blue-Gold Border */}
                <div className="absolute inset-0 rounded-full border border-blue-400/30 group-hover:border-gold-500/50 transition-colors" />

                {/* Content */}
                <div className="w-5 h-5 bg-black/20 rounded-full flex items-center justify-center relative z-10 border border-white/10">
                    <Sparkles size={12} className="text-blue-200 fill-blue-200" />
                </div>
                <span className="text-[10px] md:text-xs uppercase font-bold text-blue-50 tracking-widest relative z-10 drop-shadow-md group-hover:text-gold-200 transition-colors">
                    {CONFIG.hero.cta.ai}
                </span>
             </button>
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