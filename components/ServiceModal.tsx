import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import Button from './UI/Button';
import { useNavigate } from 'react-router-dom';
import { ServiceType } from '../types';

interface ServiceModalProps {
  selectedService: any;
  setSelectedId: (id: string | null) => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ selectedService, setSelectedId }) => {
  const navigate = useNavigate();

  if (!selectedService) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setSelectedId(null)}
        className="absolute inset-0 bg-black/90 backdrop-blur-xl"
      />
      
      <motion.div
        layoutId={`card-${selectedService.id}`}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="relative w-full max-w-4xl bg-matte-black border border-gold-500/30 shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col md:flex-row max-h-[85vh] md:max-h-[600px] rounded-[20px] md:rounded-[30px] overflow-hidden"
      >
        {/* Close Button */}
        <button 
          onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
          className="absolute top-3 right-3 md:top-6 md:right-6 z-50 p-1.5 md:p-2 bg-black/50 hover:bg-gold-500 hover:text-black rounded-full text-white transition-colors border border-white/10"
        >
          <X size={16} className="md:w-5 md:h-5" />
        </button>

        {/* Left: Content */}
        <div className="flex-1 p-5 md:p-14 flex flex-col h-full min-h-0">
           {/* Header */}
           <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-8 shrink-0">
              <div className="p-2 md:p-3 bg-gold-500/10 border border-gold-500/20 rounded-lg text-gold-500">
                <selectedService.icon size={18} className="md:w-7 md:h-7" />
              </div>
              <h3 className="text-lg md:text-3xl font-serif text-white leading-tight">{selectedService.title}</h3>
           </div>

           {/* Description - Scrollable only if needed, otherwise compact */}
           <div className="overflow-y-auto custom-scrollbar flex-1 pr-2">
               <p className="text-gray-300 leading-relaxed text-xs md:text-lg font-light mb-4 md:mb-10 border-l-2 border-gold-500 pl-3 md:pl-6">
                 {selectedService.fullDesc}
               </p>

               <div className="mb-6 md:mb-12">
                 <h4 className="text-gold-500 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] mb-3 md:mb-6">Capabilities</h4>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                   {selectedService.features.map((feature: string) => (
                     <div key={feature} className="flex items-center gap-2 md:gap-3 text-gray-400">
                        <CheckCircle2 size={12} className="md:w-4 md:h-4 text-gold-500 shrink-0" />
                        <span className="text-[10px] md:text-sm">{feature}</span>
                     </div>
                   ))}
                 </div>
               </div>
           </div>

           {/* Actions - Stacked on Mobile */}
           <div className="flex flex-col md:flex-row gap-2 md:gap-4 mt-4 shrink-0">
             <Button 
                onClick={(e) => { e.stopPropagation(); navigate('/contact'); setSelectedId(null); }}
                className="w-full md:w-auto py-2.5 md:py-3 text-[10px] md:text-[11px] shadow-[0_0_20px_rgba(212,165,51,0.3)] animate-pulse-soft"
             >
               Consult Expert
             </Button>
             <Button 
                variant="secondary" 
                onClick={(e) => { e.stopPropagation(); navigate(selectedService.path); setSelectedId(null); }}
                className="w-full md:w-auto py-2.5 md:py-3 text-[10px] md:text-[11px]"
             >
               Full Details <ArrowRight size={12} className="ml-1" />
             </Button>
           </div>
        </div>

        {/* Right: Visual Accent (Desktop only) */}
        <div className="hidden md:block w-1/3 bg-gradient-to-b from-matte-charcoal to-black border-l border-white/5 relative overflow-hidden">
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay" />
           <div className="absolute inset-0 bg-gold-500/5" />
           <div className="absolute bottom-0 right-0 p-10">
              <selectedService.icon size={120} className="text-white/5 rotate-12" />
           </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceModal;