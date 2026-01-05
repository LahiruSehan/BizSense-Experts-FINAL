import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, MessageCircle } from 'lucide-react';
import { CONFIG } from '../config/config-english';

const WhatsAppModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    // Cast to any to bypass strict TypeScript window event map checks
    window.addEventListener('openWhatsAppModal' as any, handleOpen);
    return () => window.removeEventListener('openWhatsAppModal' as any, handleOpen);
  }, []);

  const handleSend = () => {
    const baseUrl = `https://wa.me/${CONFIG.company.whatsappNumber}`; // Replace with actual number
    const encodedMsg = encodeURIComponent(message || "Hello, I would like to inquire about your services.");
    window.open(`${baseUrl}?text=${encodedMsg}`, '_blank');
    setIsOpen(false);
    setMessage('');
  };

  const quickQuestions = [
    "I need ERP pricing.",
    "Help with B2B Exports.",
    "Book a consultation."
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-sm bg-matte-black border border-gold-500/30 rounded-[32px] overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.8)] ring-1 ring-gold-500/20"
          >
            {/* Header - Luxury Dark Gold Style */}
            <div className="bg-matte-charcoal p-6 flex items-center justify-between border-b border-gold-500/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-500/5 to-transparent animate-text-shimmer bg-[length:200%_auto]" />
                <div className="flex items-center gap-3 relative z-10">
                    <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center border border-gold-500/30 shadow-[0_0_15px_rgba(212,165,51,0.2)]">
                        <MessageCircle className="text-gold-500 fill-gold-500/10" size={20} />
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-lg leading-none font-serif tracking-tight">WhatsApp</h3>
                        <p className="text-gold-500/70 text-[10px] uppercase font-black tracking-widest mt-1">Direct Priority Support</p>
                    </div>
                </div>
                <button 
                    onClick={() => setIsOpen(false)} 
                    className="relative z-10 p-2 text-white/40 hover:text-white transition-colors bg-white/5 rounded-full"
                >
                    <X size={18} />
                </button>
            </div>

            {/* Body */}
            <div className="p-6 bg-matte-black/40 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
                <p className="text-gray-100 text-[11px] mb-4 bg-white/5 p-3 rounded-2xl rounded-tl-none inline-block border border-white/10 shadow-sm backdrop-blur-sm max-w-[85%] font-bold">
                    Welcome to BizSense Elite Support. How can we optimize your business today?
                </p>

                {/* Quick Chips */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {quickQuestions.map((q, i) => (
                        <button
                            key={i}
                            onClick={() => setMessage(q)}
                            className="text-[10px] bg-gold-500/5 text-gold-400 px-3 py-2 rounded-xl border border-gold-500/20 hover:bg-gold-500/10 hover:border-gold-500 transition-all font-bold tracking-wide"
                        >
                            {q}
                        </button>
                    ))}
                </div>

                {/* Input Area */}
                <div className="flex items-center gap-2 bg-white/5 p-1.5 rounded-full border border-white/10 focus-within:border-gold-500/50 transition-all group">
                    <input 
                        type="text" 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type your inquiry..."
                        className="flex-1 bg-transparent px-4 text-white text-xs placeholder:text-gray-600 focus:outline-none font-bold"
                    />
                    <button 
                        onClick={handleSend}
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-gold-700 flex items-center justify-center text-black shadow-lg hover:scale-105 transition-transform"
                    >
                        <Send size={16} strokeWidth={3} />
                    </button>
                </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppModal;