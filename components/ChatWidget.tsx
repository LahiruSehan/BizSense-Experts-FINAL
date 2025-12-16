import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Sparkles, Bot } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showFloatingButton, setShowFloatingButton] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: 'Greetings. I am BizSense AI. I can assist with ERP Systems, Global Trade, or Financial Strategy. How may I help?',
      timestamp: new Date(),
      suggestions: ["How can ERP help me?", "Global Trade Services", "Digital Marketing"]
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, isLoading]);

  useEffect(() => {
    const handleOpenChat = () => setIsOpen(true);
    window.addEventListener('openBizSenseChat' as any, handleOpenChat);
    
    const handleScroll = () => {
        setShowFloatingButton(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('openBizSenseChat' as any, handleOpenChat);
        window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const handleSend = async (text: string = inputValue) => {
    if (!text.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: text,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    const response = await sendMessageToGemini(userMsg.text);

    const botMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: response.text,
      timestamp: new Date(),
      suggestions: response.suggestions
    };

    setMessages(prev => [...prev, botMsg]);
    setIsLoading(false);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
             {/* Backdrop */}
             <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
             />

             {/* Modal */}
             <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-[95vw] md:w-[450px] h-[80vh] md:h-[650px] bg-matte-charcoal/95 backdrop-blur-2xl border border-white/10 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden ring-1 ring-gold-500/20"
            >
              {/* Header */}
              <div className="p-4 border-b border-white/5 flex items-center justify-between bg-gradient-to-r from-matte-black to-neutral-900/50">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-9 h-9 rounded-full bg-gold-900/30 flex items-center justify-center border border-gold-500/30">
                      <Bot className="w-5 h-5 text-gold-400" />
                    </div>
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-matte-black rounded-full"></span>
                  </div>
                  <div>
                    <h3 className="text-gray-100 font-serif font-semibold text-sm tracking-wide">BizSense AI</h3>
                    <p className="text-[10px] text-gold-500/70 uppercase tracking-wider font-bold">Consultant Online</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-white/30 hover:text-white transition-colors p-1"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-5 space-y-4 custom-scrollbar bg-matte-black/40">
                {messages.map((msg, index) => (
                  <div key={msg.id} className="flex flex-col gap-2">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[85%] p-3.5 rounded-2xl text-xs md:text-sm leading-relaxed ${
                          msg.role === 'user'
                            ? 'bg-gold-600/10 border border-gold-500/20 text-gold-100 rounded-br-sm'
                            : 'bg-white/5 border border-white/5 text-gray-300 rounded-bl-sm'
                        }`}
                      >
                        {msg.text}
                      </div>
                    </motion.div>
                    
                    {/* Suggestions (Only for the latest message from model) */}
                    {msg.role === 'model' && index === messages.length - 1 && msg.suggestions && (
                       <motion.div 
                         initial={{ opacity: 0 }}
                         animate={{ opacity: 1 }}
                         className="flex flex-wrap gap-2 mt-1 ml-2"
                       >
                         {msg.suggestions.map((suggestion, idx) => (
                           <button
                             key={idx}
                             onClick={() => handleSend(suggestion)}
                             className="text-[10px] bg-gold-500/5 border border-gold-500/20 text-gold-400 px-3 py-1.5 rounded-full hover:bg-gold-500 hover:text-black transition-colors"
                           >
                             {suggestion}
                           </button>
                         ))}
                       </motion.div>
                    )}
                  </div>
                ))}
                {isLoading && (
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="bg-white/5 border border-white/5 px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1.5 items-center">
                      <span className="w-1 h-1 bg-gold-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-1 h-1 bg-gold-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-1 h-1 bg-gold-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 border-t border-white/5 bg-matte-black">
                <div className="flex items-center gap-2 bg-white/5 rounded-lg px-2 border border-white/5 focus-within:border-gold-500/30 transition-colors">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Ask your strategy consultant..."
                    className="flex-1 bg-transparent py-3 px-2 text-sm text-gray-200 focus:outline-none placeholder:text-gray-600"
                  />
                  <button
                    onClick={() => handleSend()}
                    disabled={isLoading}
                    className="p-2 text-gold-500 hover:text-white disabled:opacity-30 transition-colors"
                  >
                    <Send size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: showFloatingButton ? 1 : 0, opacity: showFloatingButton ? 1 : 0 }}
        className="fixed bottom-6 right-4 md:right-8 z-50 w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(212,165,51,0.3)] border border-white/20 hover:shadow-[0_0_40px_rgba(212,165,51,0.5)] transition-shadow pointer-events-auto"
      >
        <AnimatePresence mode='wait'>
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="text-black w-5 h-5" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <Sparkles className="text-black w-5 h-5" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
};

export default ChatWidget;