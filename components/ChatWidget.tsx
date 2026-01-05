
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Sparkles, Bot, Volume2, Loader2 } from 'lucide-react';
import { sendMessageToGemini, generateSpeech, decodeBase64Audio, decodeAudioData } from '../services/geminiService';
import { ChatMessage } from '../types';
import { useLanguage } from '../context/LanguageContext';

const ChatWidget: React.FC = () => {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [showFloatingButton, setShowFloatingButton] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState<string | null>(null);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    const greeting = language === 'si' 
      ? 'ආයුබෝවන්. මම Bizsense Experts AI. වසර 20ක උපායමාර්ගික හා මූල්‍ය අත්දැකීම් සහිත මම ඔබට ERP, ඩිජිටල් වර්ධනය හෝ ව්‍යාපාරික උපාය මාර්ග සඳහා උපකාර කිරීමට සූදානම්.'
      : 'Greetings. I am Bizsense Experts AI. With 20+ years of strategic expertise, I am here to optimize your ERP, Digital Growth, and Strategic Profitability.';
    
    const suggestions = language === 'si'
      ? ["Odoo/Zoho ERP ගැන", "B2B අපනයන වෙළඳපල", "ඩිජිටල් ROI උපදෙස්"]
      : ["Odoo vs Zoho for SMEs", "Global B2B Trading", "ROI-Driven SEO"];

    setMessages([{
      id: 'welcome',
      role: 'model',
      text: greeting,
      timestamp: new Date(),
      suggestions: suggestions
    }]);
  }, [language]);

  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  useEffect(() => { scrollToBottom(); }, [messages, isOpen, isLoading]);

  useEffect(() => {
    const handleOpenChat = () => setIsOpen(true);
    window.addEventListener('openBizSenseChat' as any, handleOpenChat);
    const handleScroll = () => setShowFloatingButton(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('openBizSenseChat' as any, handleOpenChat);
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const handleSend = async (text: string = inputValue) => {
    if (!text.trim() || isLoading) return;
    const userMsg: ChatMessage = { id: Date.now().toString(), role: 'user', text, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    const response = await sendMessageToGemini(userMsg.text, language || 'en');
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

  const handleSpeak = async (text: string, msgId: string) => {
    if (isSpeaking) return;
    setIsSpeaking(msgId);
    
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      }
      
      const base64Audio = await generateSpeech(text, language || 'en');
      if (base64Audio) {
        const audioData = decodeBase64Audio(base64Audio);
        const buffer = await decodeAudioData(audioData, audioContextRef.current);
        const source = audioContextRef.current.createBufferSource();
        source.buffer = buffer;
        source.connect(audioContextRef.current.destination);
        source.onended = () => setIsSpeaking(null);
        source.start();
      } else {
        setIsSpeaking(null);
      }
    } catch (e) {
      console.error(e);
      setIsSpeaking(null);
    }
  };

  // Helper to format text removing ** and replacing with spans
  const formatMessageText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <span key={i} className="chat-bold">{part.slice(2, -2)}</span>;
      }
      return part;
    });
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsOpen(false)} className="absolute inset-0 bg-black/80 backdrop-blur-md" />

             <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              className="relative w-full max-w-[500px] h-[85vh] bg-matte-black/95 border border-gold-500/30 rounded-[32px] shadow-[0_30px_100px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden ring-1 ring-gold-500/20"
            >
              <div className="p-6 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-matte-black via-neutral-900 to-matte-black">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-2xl bg-gold-900/40 flex items-center justify-center border border-gold-500/40 shadow-[0_0_20px_rgba(212,165,51,0.2)]">
                      <Bot className="w-6 h-6 text-gold-400" />
                    </div>
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-matte-black animate-pulse"></span>
                  </div>
                  <div>
                    <h3 className="text-gray-100 font-serif font-black text-lg tracking-wider">Bizsense Experts AI</h3>
                    <div className="flex items-center gap-1.5">
                        <Sparkles size={10} className="text-gold-500" />
                        <p className="text-[10px] text-gold-500/80 uppercase tracking-[0.2em] font-black">Powered by Gemini 3 Pro</p>
                    </div>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10"><X size={20} /></button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
                {messages.map((msg, index) => (
                  <div key={msg.id} className={`flex flex-col gap-3 ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                    <div className="flex items-end gap-2 max-w-full">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        className={`relative group p-5 rounded-3xl text-sm leading-relaxed shadow-xl ${
                          msg.role === 'user'
                            ? 'bg-gradient-to-br from-gold-600/20 to-gold-800/20 border border-gold-500/30 text-gold-50 rounded-br-none font-bold'
                            : 'bg-white/5 border border-white/10 text-gray-200 rounded-bl-none font-bold'
                        }`}
                      >
                        {formatMessageText(msg.text)}
                      </motion.div>
                      
                      {msg.role === 'model' && (
                        <motion.button 
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => handleSpeak(msg.text, msg.id)}
                          className={`p-2 bg-gold-500/10 border border-gold-500/30 rounded-full text-gold-500 hover:bg-gold-500 hover:text-black transition-all shadow-[0_0_15px_rgba(212,165,51,0.2)] mb-1 shrink-0 ${isSpeaking === msg.id ? 'animate-pulse' : ''}`}
                          title="Listen to advice"
                        >
                          {isSpeaking === msg.id ? <Loader2 className="w-4 h-4 animate-spin" /> : <Volume2 className="w-4 h-4" />}
                        </motion.button>
                      )}
                    </div>
                    
                    {msg.role === 'model' && index === messages.length - 1 && msg.suggestions && (
                       <div className="flex flex-wrap gap-2 mt-2">
                         {msg.suggestions.map((suggestion, idx) => (
                           <motion.button
                             key={idx}
                             whileHover={{ scale: 1.05, backgroundColor: 'rgba(212,165,51,0.15)' }}
                             whileTap={{ scale: 0.95 }}
                             onClick={() => handleSend(suggestion)}
                             className="text-[11px] bg-gold-500/5 border border-gold-500/20 text-gold-400 px-4 py-2 rounded-xl transition-all font-bold tracking-wide"
                           >
                             {suggestion}
                           </motion.button>
                         ))}
                       </div>
                    )}
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white/5 border border-white/5 px-6 py-4 rounded-3xl rounded-bl-none flex gap-2 items-center">
                      <div className="w-2 h-2 bg-gold-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 bg-gold-500 rounded-full animate-bounce" style={{ animationDelay: '200ms' }} />
                      <div className="w-2 h-2 bg-gold-500 rounded-full animate-bounce" style={{ animationDelay: '400ms' }} />
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <div className="p-6 bg-matte-black border-t border-white/10">
                <div className="relative flex items-center bg-white/5 rounded-2xl border border-white/10 focus-within:border-gold-500/50 focus-within:ring-1 focus-within:ring-gold-500/30 transition-all group overflow-hidden shadow-inner">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder={language === 'si' ? "උපදේශකයාගෙන් විමසන්න..." : "Ask your elite consultant..."}
                    className="flex-1 bg-transparent py-4 px-5 text-sm text-gray-100 focus:outline-none placeholder:text-gray-600 font-bold"
                  />
                  <button
                    onClick={() => handleSend()}
                    disabled={isLoading || !inputValue.trim()}
                    className="p-4 text-gold-500 hover:text-white disabled:opacity-30 transition-all hover:scale-110"
                  >
                    {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send size={20} />}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05, rotate: -5 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: showFloatingButton ? 1 : 0, opacity: showFloatingButton ? 1 : 0 }}
        className="fixed bottom-6 right-4 md:right-8 z-50 w-16 h-16 bg-gradient-to-br from-gold-400 via-gold-600 to-gold-800 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(212,165,51,0.4)] border border-white/20 hover:shadow-[0_0_70px_rgba(212,165,51,0.6)] transition-all pointer-events-auto overflow-hidden group"
      >
        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
        <AnimatePresence mode='wait'>
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="text-black w-7 h-7" />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <Sparkles className="text-black w-7 h-7 fill-black/20" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
};

export default ChatWidget;
