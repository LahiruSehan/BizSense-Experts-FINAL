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
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-sm bg-[#0A1A10] border border-[#25D366]/30 rounded-[30px] overflow-hidden shadow-[0_0_50px_rgba(37,211,102,0.2)]"
          >
            {/* Header */}
            <div className="bg-[#075E54] p-6 flex items-center justify-between relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] opacity-10 bg-repeat" />
                <div className="flex items-center gap-3 relative z-10">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                        <MessageCircle className="text-[#075E54] fill-[#075E54]" size={20} />
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-lg leading-none">WhatsApp</h3>
                        <p className="text-green-200 text-xs mt-1">Typically replies instantly</p>
                    </div>
                </div>
                <button 
                    onClick={() => setIsOpen(false)} 
                    className="relative z-10 p-2 text-white/70 hover:text-white transition-colors"
                >
                    <X size={20} />
                </button>
            </div>

            {/* Body */}
            <div className="p-6 bg-[#0D1F15] bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat">
                <p className="text-gray-300 text-sm mb-4 bg-[#1F2C34] p-3 rounded-lg rounded-tl-none inline-block border border-white/5 shadow-sm">
                    Hi! How can we help your business today?
                </p>

                {/* Quick Chips */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {quickQuestions.map((q, i) => (
                        <button
                            key={i}
                            onClick={() => setMessage(q)}
                            className="text-[10px] md:text-xs bg-[#1F2C34] text-[#25D366] px-3 py-2 rounded-full border border-[#25D366]/20 hover:bg-[#25D366]/10 transition-colors"
                        >
                            {q}
                        </button>
                    ))}
                </div>

                {/* Input Area */}
                <div className="flex items-center gap-2 bg-[#1F2C34] p-2 rounded-full border border-white/10">
                    <input 
                        type="text" 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type a message..."
                        className="flex-1 bg-transparent px-3 text-white text-sm placeholder:text-gray-500 focus:outline-none"
                    />
                    <button 
                        onClick={handleSend}
                        className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-lg hover:scale-105 transition-transform"
                    >
                        <Send size={18} />
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