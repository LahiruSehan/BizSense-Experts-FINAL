import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight, Check } from 'lucide-react';
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
        className="relative w-full max-w-5xl bg-matte-black border border-gold-500/30 shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col md:flex-row h-[90vh] md:h-[85vh] rounded-[20px] md:rounded-[30px] overflow-hidden"
      >
        {/* Close Button */}
        <button 
          onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
          className="absolute top-3 right-3 md:top-6 md:right-6 z-50 p-1.5 md:p-2 bg-black/50 hover:bg-gold-500 hover:text-black rounded-full text-white transition-colors border border-white/10"
        >
          <X size={16} className="md:w-5 md:h-5" />
        </button>

        {/* Content Area - Flex Column with Scrollable Middle */}
        <div className="flex-1 flex flex-col h-full min-h-0">
            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-5 md:p-14 pb-0">
                {/* Header */}
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-8">
                    <div className="p-2 md:p-3 bg-gold-500/10 border border-gold-500/20 rounded-lg text-gold-500">
                        <selectedService.icon size={18} className="md:w-7 md:h-7" />
                    </div>
                    <h3 className="text-lg md:text-3xl font-serif text-white leading-tight font-bold">{selectedService.title}</h3>
                </div>

                <p className="text-gray-300 leading-relaxed text-xs md:text-lg font-bold mb-4 md:mb-10 border-l-2 border-gold-500 pl-3 md:pl-6">
                    {selectedService.fullDesc}
                </p>

                {/* Specific Layout for B2B Trade Service - Merged Content */}
                {selectedService.id === 'b2b' ? (
                    <div className="space-y-12 pb-6">
                        {/* 1. B2B Breakdown */}
                        <div className="bg-white/5 p-6 rounded-xl border border-white/5">
                            <h4 className="text-gold-500 font-bold uppercase tracking-widest text-xs mb-6">Global Commerce Engine</h4>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {[
                                    { num: "01", title: "Buyer Match", desc: "Right partners." },
                                    { num: "02", title: "Trade Flow", desc: "Global commerce." },
                                    { num: "03", title: "Market Entry", desc: "Expansion guide." },
                                    { num: "04", title: "B2B Meets", desc: "Introductions." },
                                    { num: "05", title: "Platforms", desc: "Marketplaces." },
                                    { num: "06", title: "Documents", desc: "Compliance." },
                                ].map((item, i) => (
                                    <div key={i} className="bg-black/40 p-3 rounded-lg border border-white/5">
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="text-white font-serif text-sm font-bold">{item.title}</span>
                                            <span className="text-white/20 text-xs font-serif font-bold">{item.num}</span>
                                        </div>
                                        <p className="text-gold-500 text-[10px] font-bold">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 2. Remote Bookkeeping (Merged) */}
                        <div>
                             <h3 className="text-xl text-white font-serif mb-4 font-bold">Remote Bookkeeping</h3>
                             <p className="text-gray-400 mb-4 text-sm font-bold">
                                 Professional remote bookkeeping and taxation tailored for businesses.
                             </p>
                             <ul className="space-y-3">
                                 {["Expert financial management", "Strict security protocols", "Cost-effective for SMEs", "Integration with BizSense ERP"].map((item, i) => (
                                     <li key={i} className="flex items-center gap-3 text-gray-300">
                                          <div className="w-4 h-4 rounded-full bg-gold-500 flex items-center justify-center text-black shrink-0"><Check size={10} strokeWidth={3} /></div>
                                          <span className="text-xs tracking-wide font-bold">{item}</span>
                                     </li>
                                 ))}
                             </ul>
                        </div>

                        {/* 3. ROI Marketing (Merged) */}
                        <div>
                             <h3 className="text-xl text-white font-serif mb-4 font-bold">ROI-Driven Marketing</h3>
                             <p className="text-gray-400 mb-4 text-sm font-bold">
                                 Delivering measurable ROI beyond vanity metrics. Ideal for SMEs looking for tangible outcomes.
                             </p>
                             <div className="grid grid-cols-2 gap-3">
                                 {["Web Development", "Global SEO", "Social Media", "PPC Ads", "Branding", "Export Promo"].map((item, i) => (
                                     <div key={i} className="bg-white/5 p-3 text-[10px] text-gray-300 border-l border-gold-500/50 uppercase tracking-wider font-bold">{item}</div>
                                 ))}
                             </div>
                        </div>
                    </div>
                ) : (
                    /* Default Features List for other services */
                    <div className="mb-6 md:mb-12">
                        <h4 className="text-gold-500 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] mb-3 md:mb-6">Capabilities</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                        {selectedService.features.map((feature: string) => (
                            <div key={feature} className="flex items-center gap-2 md:gap-3 text-gray-400">
                                <CheckCircle2 size={12} className="md:w-4 md:h-4 text-gold-500 shrink-0" />
                                <span className="text-[10px] md:text-sm font-bold">{feature}</span>
                            </div>
                        ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Sticky Actions Footer */}
            <div className="p-5 md:p-8 md:pt-4 border-t border-white/10 bg-matte-black z-10 shrink-0">
                <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                    <Button 
                        onClick={(e) => { e.stopPropagation(); navigate('/contact'); setSelectedId(null); }}
                        className="w-full md:w-auto py-2.5 md:py-3 text-[10px] md:text-[11px] shadow-[0_0_20px_rgba(212,165,51,0.3)] animate-pulse-soft font-bold"
                    >
                    Consult Expert
                    </Button>
                    
                    {selectedService.id === 'erp' ? (
                        <Button 
                            variant="secondary" 
                            onClick={(e) => { e.stopPropagation(); navigate(selectedService.path); setSelectedId(null); }}
                            className="w-full md:w-auto py-2.5 md:py-3 text-[10px] md:text-[11px] font-bold"
                        >
                            Full Details <ArrowRight size={12} className="ml-1" />
                        </Button>
                    ) : (
                        <Button 
                            variant="secondary" 
                            onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                            className="w-full md:w-auto py-2.5 md:py-3 text-[10px] md:text-[11px] font-bold"
                        >
                            Back
                        </Button>
                    )}
                </div>
            </div>
        </div>

        {/* Right: Visual Accent (Desktop only) */}
        <div className="hidden md:block w-[30%] bg-gradient-to-b from-matte-charcoal to-black border-l border-white/5 relative overflow-hidden">
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