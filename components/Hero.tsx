import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Star, ArrowRight, MessageCircle, Phone, Sparkles, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { servicesList } from './Services';
import ServiceModal from './ServiceModal';

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedService = servicesList.find(s => s.id === selectedId);

  const headlines = [
    "Innovative Solutions",
    "Tailored ERP Systems",
    "Strategic Growth",
    "Financial Control",
    "Global Trade Power"
  ];
  
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
        staggerChildren: 0.05,
        delayChildren: 0.2 
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      {/* Container restricted to 100vh - fit to screen */}
      <section className="relative h-screen max-h-screen w-full flex flex-col pt-20 md:pt-24 pb-0 overflow-hidden bg-matte-black">
        
        {/* Top Landscape Image (Between Navbar and Title) */}
        <div className="absolute top-0 left-0 w-full h-[35vh] md:h-[45vh] z-0 pointer-events-none">
           <img 
             src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop" 
             alt="Luxury Office" 
             className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
           />
           {/* Smooth Fade to Black Gradient */}
           <div className="absolute inset-0 bg-gradient-to-b from-matte-black/40 via-matte-black/80 to-matte-black" />
        </div>

        {/* Cinematic Background (Base Layer) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-[0.02]" />
        </div>

        {/* Main Flex Content */}
        <div className="container mx-auto px-4 md:px-6 relative z-10 flex-1 flex flex-col items-center min-h-0">
          
          {/* Top: Headlines */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center w-full max-w-4xl flex flex-col items-center shrink-0 mb-3 md:mb-5 mt-2 md:mt-4"
          >
            {/* Badge */}
            <motion.div 
               variants={itemVariants}
               className="inline-flex items-center gap-1.5 py-1 px-4 border border-gold-500/20 rounded-full bg-gold-500/5 mb-3 backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.5)]"
            >
               <Star size={8} className="text-gold-500 fill-gold-500 animate-pulse" />
               <span className="text-gold-200 text-[8px] md:text-[9px] font-bold tracking-[0.3em] uppercase">
                 Intelligent Business Solutions
               </span>
            </motion.div>
            
            {/* Main Headline */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold leading-none mb-1 tracking-tight drop-shadow-2xl">
               <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#F9F1D8] via-[#D4A533] to-[#80631F] animate-text-shimmer bg-[length:200%_auto]">
                 EMPOWERING BUSINESSES
               </span>
            </h1>

            {/* Sub-Headline */}
            <div className="h-6 md:h-8 flex justify-center items-center drop-shadow-lg">
              <span className="text-gray-500 font-light text-[10px] md:text-sm mr-2 uppercase tracking-widest">With</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 5, filter: 'blur(3px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -5, filter: 'blur(3px)' }}
                  transition={{ duration: 0.6 }}
                  className="font-serif italic text-white text-sm md:text-lg border-b border-gold-500/50 pb-0.5"
                >
                  {headlines[index]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Middle: 2x3 Services Grid - Compact Spacing */}
          {/* Removed mt-auto, added specific mt-2 to reduce gap */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-3 gap-2 md:gap-3 w-full max-w-2xl mt-2 content-center"
          >
            {servicesList.map((service) => (
              <motion.button
                key={service.id}
                variants={itemVariants}
                onClick={() => setSelectedId(service.id)}
                whileTap={{ scale: 0.95 }}
                className="group relative flex flex-col items-center justify-center p-2 md:p-4 bg-matte-black/60 backdrop-blur-md rounded-xl md:rounded-2xl transition-all overflow-hidden h-full min-h-[85px] md:min-h-[110px] border border-gold-500/20 md:border-gold-500/30 md:shadow-[0_0_10px_rgba(212,165,51,0.1)] hover:bg-matte-black/80"
              >
                {/* ALWAYS ON EFFECTS - Subtle on mobile, stronger on desktop */}
                <div className="absolute inset-0 border border-gold-500/20 rounded-xl md:rounded-2xl opacity-50 md:opacity-100 md:animate-pulse-soft" />
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent" />
                
                <div className="p-1.5 md:p-3 rounded-full bg-gold-500/10 text-gold-500 mb-1.5 md:mb-2 relative z-10">
                  <service.icon size={16} className="md:w-6 md:h-6" strokeWidth={1.5} />
                </div>
                <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-wider text-gray-200 leading-tight text-center relative z-10">
                  {service.title.replace("Solutions", "").replace("Services", "")}
                </span>
                
                {/* Always Visible Arrow */}
                <div className="absolute bottom-1 right-1 text-gold-500 animate-bounce opacity-70 md:opacity-100">
                  <ArrowRight size={8} />
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Bottom Controls: Pill Shaped Buttons */}
          {/* Added mt-auto to push this group to the bottom of the flex container */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full max-w-2xl grid grid-cols-3 gap-3 mb-16 md:mb-14 shrink-0 z-20 mt-auto"
          >
             <button 
                onClick={() => navigate('/contact')} 
                className="group relative h-10 md:h-12 bg-gradient-to-r from-gold-600 to-gold-400 rounded-full flex items-center justify-center gap-2 shadow-[0_0_10px_rgba(212,165,51,0.1)] md:shadow-[0_0_15px_rgba(212,165,51,0.2)]"
             >
                <div className="w-5 h-5 bg-black/20 rounded-full flex items-center justify-center">
                    <Phone size={10} className="text-black" />
                </div>
                <span className="text-[9px] md:text-[10px] uppercase font-bold text-black tracking-widest">Consult</span>
             </button>

             <button 
                onClick={openWhatsApp}
                className="group relative h-10 md:h-12 bg-[#0D1F15] border border-[#25D366]/50 rounded-full flex items-center justify-center gap-2 shadow-[0_0_10px_rgba(37,211,102,0.1)] md:shadow-[0_0_15px_rgba(37,211,102,0.1)]"
             >
                <div className="w-5 h-5 bg-[#25D366]/20 rounded-full flex items-center justify-center">
                    <MessageCircle size={10} className="text-[#25D366] fill-[#25D366]" />
                </div>
                <span className="text-[9px] md:text-[10px] uppercase font-bold text-[#25D366] tracking-widest">WhatsApp</span>
             </button>

             <button 
                onClick={openChat} 
                className="group relative h-10 md:h-12 bg-matte-charcoal border border-gold-500/50 rounded-full flex items-center justify-center gap-2 shadow-[0_0_10px_rgba(212,165,51,0.05)] md:shadow-[0_0_15px_rgba(212,165,51,0.1)]"
             >
                <div className="w-5 h-5 bg-gold-500/20 rounded-full flex items-center justify-center">
                    <Sparkles size={10} className="text-gold-400" />
                </div>
                <span className="text-[9px] md:text-[10px] uppercase font-bold text-gold-400 tracking-widest">AI Chat</span>
             </button>
          </motion.div>

          {/* Absolute Bottom Scroll Indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50 animate-pulse-soft z-0">
             <span className="text-[7px] uppercase tracking-[0.2em] text-gray-600">Scroll</span>
             <ChevronDown size={14} className="text-gold-500" />
          </div>

        </div>
      </section>

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