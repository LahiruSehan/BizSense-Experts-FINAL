import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight, Check } from 'lucide-react';
import Button from './UI/Button';
import { useNavigate } from 'react-router-dom';

interface ServiceModalProps {
  selectedService: any;
  setSelectedId: (id: string | null) => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ selectedService, setSelectedId }) => {
  const navigate = useNavigate();

  if (!selectedService) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setSelectedId(null)}
        className="absolute inset-0 bg-black/95 backdrop-blur-3xl"
      />
      
      <motion.div
        layoutId={`card-${selectedService.id}`}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-6xl bg-biz-deep border border-white/10 shadow-2xl flex flex-col md:flex-row h-[90vh] md:h-[80vh] rounded-[40px] overflow-hidden"
      >
        <button 
          onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
          className="absolute top-6 right-6 z-50 p-3 bg-white/5 hover:bg-biz-emerald hover:text-biz-deep rounded-full text-white transition-all border border-white/10"
        >
          <X size={20} />
        </button>

        <div className="flex-1 flex flex-col h-full min-h-0 bg-biz-navy/30">
            <div className="flex-1 overflow-y-auto custom-scrollbar p-8 md:p-20 pb-0">
                <div className="flex items-center gap-5 mb-10">
                    <div className="p-5 bg-biz-emerald/10 border border-biz-emerald/20 rounded-2xl text-biz-emerald">
                        <selectedService.icon size={32} />
                    </div>
                    <h3 className="text-3xl md:text-5xl font-display text-white font-extrabold tracking-tight">{selectedService.title}</h3>
                </div>

                <p className="text-gray-300 leading-relaxed text-lg md:text-2xl font-normal mb-12 border-l-4 border-biz-emerald pl-8">
                    {selectedService.fullDesc}
                </p>

                <div className="mb-12">
                    <h4 className="text-biz-emerald text-sm font-display font-bold uppercase tracking-[0.2em] mb-8">Ecosystem Capabilities</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {selectedService.features.map((feature: string) => (
                        <div key={feature} className="flex items-center gap-4 text-gray-400 glass-panel p-5 rounded-2xl hover:border-biz-emerald/30 transition-colors">
                            <CheckCircle2 size={18} className="text-biz-emerald shrink-0" />
                            <span className="text-base font-medium text-white/90">{feature}</span>
                        </div>
                    ))}
                    </div>
                </div>
            </div>

            <div className="p-8 md:p-12 border-t border-white/10 bg-biz-deep/50 backdrop-blur-md z-10">
                <div className="flex flex-col md:flex-row gap-4">
                    <Button 
                        onClick={(e) => { e.stopPropagation(); navigate('/contact'); setSelectedId(null); }}
                        className="w-full md:w-auto"
                    >
                    Acquire Consultation
                    </Button>
                    
                    <Button 
                        variant="secondary" 
                        onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                        className="w-full md:w-auto"
                    >
                        Return to Hub
                    </Button>
                </div>
            </div>
        </div>

        <div className="hidden md:block w-[35%] bg-gradient-to-br from-biz-navy to-black relative overflow-hidden">
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-10 grayscale mix-blend-screen" />
           <div className="absolute inset-0 bg-biz-emerald/5" />
           <div className="absolute inset-0 flex items-center justify-center">
              <selectedService.icon size={200} className="text-white/5 -rotate-12 animate-float" />
           </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceModal;