
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Star, MessageCircle, Sparkles, ArrowRight, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ServiceModal from './ServiceModal';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { config, language } = useLanguage();
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedService = config.services.find(s => s.id === selectedId);

  const headlines = config.hero.headlines;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % headlines.length);
    }, 4000);
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
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 }
  };

  const quoteVariants = {
    initial: { x: -30, opacity: 0, filter: 'blur(8px)' },
    animate: { 
      x: 0, 
      opacity: 1, 
      filter: 'blur(0px)',
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } 
    },
    exit: { 
      x: 30, 
      opacity: 0, 
      filter: 'blur(8px)',
      transition: { duration: 0.5, ease: "easeInOut" } 
    }
  };

  // Badge Text Wave Animation - Subtle and Slow
  const badgeText = config.hero.badge;
  const letters = Array.from(badgeText);

  return (
    <>
      <div className="relative w-full min-h-[90vh] md:min-h-[100vh] flex flex-col pt-20 md:pt-24 pb-24 md:pb-32 overflow-hidden bg-matte-black justify-start items-center">
        {/* Background Visuals */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
           <div className="absolute inset-0 w-full h-full animate-ken-burns">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop" 
                alt="Luxury Office" 
                className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
              />
           </div>
           <div className="absolute inset-0 bg-gradient-to-b from-matte-black/50 via-matte-black/90 to-matte-black" />
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.12),transparent_60%)] animate-pulse-soft" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center mt-4 md:mt-8 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="w-full max-w-6xl flex flex-col items-center"
          >
            {/* Badge - Letter Wave - Subtle and Slow */}
            <motion.div 
               variants={itemVariants}
               className="inline-flex items-center gap-2 py-1 md:py-1.5 px-4 md:px-5 border border-gold-500/10 rounded-full bg-black/60 mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(14,165,233,0.1)] ring-1 ring-gemini-500/20 max-w-[95%] md:max-w-none"
            >
               <Star size={8} className="text-gold-500 fill-gold-500 animate-pulse shrink-0" />
               <div className="flex overflow-hidden">
                 {letters.map((char, i) => (
                   <motion.span
                     key={i}
                     initial={{ y: 0 }}
                     animate={{ y: [0, -1, 0] }}
                     transition={{
                       duration: 4,
                       repeat: Infinity,
                       delay: 2 + (i * 0.08), // Start after 2s and stagger slowly
                       ease: "easeInOut"
                     }}
                     className="text-gold-100 text-[8px] md:text-[10px] font-bold tracking-[0.1em] md:tracking-[0.2em] uppercase whitespace-pre"
                   >
                     {char}
                   </motion.span>
                 ))}
               </div>
               <Star size={8} className="text-gold-500 fill-gold-500 animate-pulse shrink-0" />
            </motion.div>
            
            {/* Main Title */}
            <h1 className="text-4xl md:text-8xl lg:text-9xl font-serif font-black leading-[1.1] mb-2 gold-title-realistic drop-shadow-2xl max-w-5xl mx-auto">
               {config.hero.mainHeadlinePrefix}
            </h1>

            {/* Sub Headline Area */}
            <div className="flex flex-col items-center justify-center mb-4 md:mb-6">
              <div className="flex flex-col md:flex-row items-center gap-x-3 gap-y-1">
                <span className="text-lg md:text-3xl lg:text-4xl font-serif font-black text-gray-100 tracking-tighter uppercase italic">
                   {language === 'si' ? 'ව්‍යාපාර සවිබල ගැන්වීම' : 'EMPOWERING BUSINESSES'}
                </span>
                <span className="text-sm md:text-xl lg:text-2xl font-sans font-bold text-white/60 tracking-widest px-2 py-0.5 border-x border-white/10">
                   {config.hero.withText}
                </span>
              </div>
              
              <div className="relative min-h-[2rem] md:min-h-[4rem] flex items-center justify-center overflow-hidden mt-2">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={index}
                    variants={quoteVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="font-serif italic text-gold-500 text-xl md:text-4xl lg:text-5xl font-bold tracking-tight text-center px-4"
                  >
                    {headlines[index]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            {/* Description - Smaller for fit */}
            <motion.p 
              variants={itemVariants}
              className="text-gold-200/70 text-[10px] md:text-sm lg:text-base font-bold max-w-2xl leading-relaxed mx-auto mb-6 md:mb-8 drop-shadow-lg px-2"
            >
              {config.hero.description}
            </motion.p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-8"
          >
             <button 
                onClick={() => navigate('/contact')} 
                className="group relative h-11 md:h-14 rounded-full flex items-center justify-center gap-2 overflow-hidden transition-all duration-300 transform hover:-translate-y-1"
             >
                <div className="absolute inset-0 bg-gradient-to-b from-gold-400 via-gold-600 to-gold-800" />
                <span className="relative text-[9px] md:text-xs uppercase font-black text-[#1a1000] tracking-widest flex items-center gap-2 group-hover:tracking-[0.15em] transition-all">
                  {config.hero.cta.consult} <ArrowRight size={12} className="-rotate-45 group-hover:rotate-0 transition-transform" />
                </span>
             </button>

             <button 
                onClick={openWhatsApp}
                className="group relative h-11 md:h-14 bg-black border border-[#25D366]/30 rounded-full flex items-center justify-center gap-2 hover:bg-[#25D366]/5 transition-all hover:border-[#25D366] shadow-[0_0_15px_rgba(37,211,102,0.05)] overflow-hidden"
             >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-[#25D366]/15 to-transparent"
                  animate={{ x: ['-200%', '200%'] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
                />
                <MessageCircle size={14} className="text-[#25D366] relative z-10" />
                <span className="text-[9px] md:text-xs uppercase font-bold text-[#25D366] tracking-widest relative z-10">{config.hero.cta.whatsapp}</span>
             </button>

             <button 
                onClick={openChat} 
                className="group relative h-11 md:h-14 rounded-full flex items-center justify-center gap-2 overflow-hidden transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(10,20,50,0.5)]"
             >
                <div className="absolute inset-0 bg-gradient-to-b from-[#1e3a8a] to-[#0f172a]" />
                <Sparkles size={12} className="text-blue-200 relative z-10" />
                <span className="text-[9px] md:text-xs uppercase font-bold text-blue-50 tracking-widest relative z-10">
                    {config.hero.cta.ai}
                </span>
             </button>
          </motion.div>

          {/* Scroll Down Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 3 }}
            className="flex flex-col items-center gap-0.5 opacity-40"
          >
            <span className="text-[7px] md:text-[8px] uppercase font-bold tracking-[0.3em] text-gold-500/60">Scroll Down</span>
            <ChevronDown size={12} className="text-gold-500/60" />
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
