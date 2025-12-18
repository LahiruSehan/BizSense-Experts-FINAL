import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import HomeServices from './components/HomeServices';
import WhyChoose from './components/WhyChoose';
import ERPPage from './components/Pages/ERPPage';
import Contact from './components/Contact';
import ChatWidget from './components/ChatWidget';
import WhatsAppFloat from './components/UI/WhatsAppFloat';
import LanguageToggle from './components/UI/LanguageToggle';
import WhatsAppModal from './components/WhatsAppModal';
import LanguageSelector from './components/LanguageSelector';
import { motion, AnimatePresence } from 'framer-motion';
import { Facebook } from 'lucide-react';
import { useLanguage } from './context/LanguageContext';

// --- Shared Components ---

const PageWrapper: React.FC<{children: React.ReactNode, pt?: string}> = ({ children, pt = "pt-24" }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.6, ease: "easeInOut" }}
    className={pt}
  >
    {children}
  </motion.div>
);

// --- Page Components ---

const Home: React.FC = () => (
  <PageWrapper pt="pt-0">
    <Hero />
    <HomeServices />
    <WhyChoose />
    <Contact />
  </PageWrapper>
);

const About: React.FC = () => (
    <PageWrapper pt="pt-20">
        <WhyChoose />
        <Contact />
    </PageWrapper>
);

// Modular App-Style Footer (Universal)
const Footer: React.FC = () => {
  const { config } = useLanguage();
  return (
    <footer className="bg-matte-charcoal border-t border-white/5 pt-10 pb-8 text-sm relative z-10 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gemini-900/15 blur-[80px] pointer-events-none animate-pulse-soft" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 mb-8">
           <div className="bg-white/5 p-4 rounded-xl flex flex-col items-center justify-center gap-2 border border-white/5 hover:border-gold-500/30 transition-colors">
              <h5 className="text-gold-500 text-[10px] uppercase font-bold">Contact</h5>
              <div className="flex flex-col items-center gap-1 text-white/50">
                 <a href={`https://wa.me/${config.company.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold hover:text-white transition-colors">0701 75 75 76</a>
                 <span className="text-[10px] font-bold">0711 75 75 76</span>
              </div>
           </div>
           <div className="bg-white/5 p-4 rounded-xl flex flex-col items-center justify-center gap-2 border border-white/5 hover:border-gold-500/30 transition-colors">
              <h5 className="text-gold-500 text-[10px] uppercase font-bold">Social</h5>
              <a 
                href="https://web.facebook.com/profile.php?id=61562605711713" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex gap-4 text-white/50 hover:text-white transition-colors"
              >
                 <Facebook size={16} /> <span className="text-[10px] font-bold">Facebook</span>
              </a>
           </div>
           <div className="bg-white/5 p-4 rounded-xl flex flex-col items-center justify-center gap-2 border border-white/5 hover:border-gold-500/30 transition-colors col-span-2 md:col-span-1">
               <h5 className="text-gold-500 text-[10px] uppercase font-bold">Support</h5>
               <span className="text-white/50 text-[10px] font-bold">{config.company.email}</span>
           </div>
        </div>

        <div className="text-center text-gray-500 text-[9px] md:text-[10px] border-t border-white/5 pt-6 uppercase tracking-widest font-bold">
          &copy; {new Date().getFullYear()} {config.company.name}.
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  const { language } = useLanguage();
  const [showFloaters, setShowFloaters] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Synchronized to 500 for unified entry/exit with AI chat and Language toggle
      setShowFloaters(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-matte-black text-gray-200 font-sans selection:bg-gold-500 selection:text-black overflow-x-hidden relative">
        <div className="fixed inset-0 bg-matte-black -z-20" />
        <div className="fixed top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.05),transparent_90%)] pointer-events-none -z-10 animate-pulse-soft" />
        <div className="fixed bottom-0 left-0 w-[800px] h-[800px] bg-gemini-900/10 blur-[150px] pointer-events-none -z-10 animate-blob" />
        <div className="fixed top-0 right-0 w-[800px] h-[800px] bg-gemini-900/10 blur-[150px] pointer-events-none -z-10 animate-blob" style={{ animationDelay: '2s' }} />

        {/* Global Language Selector (First Time) */}
        {!language && <LanguageSelector />}

        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<PageWrapper pt="pt-20"><Services /></PageWrapper>} />
            <Route path="/services/erp" element={<PageWrapper pt="pt-0"><ERPPage /></PageWrapper>} />
            <Route path="/services/*" element={<PageWrapper pt="pt-20"><Services /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper pt="pt-20"><Contact /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
        
        <WhatsAppModal />
        <ChatWidget />
        
        {/* Floating Actions */}
        <LanguageToggle />
        
        <div className={`transition-opacity duration-700 ${showFloaters ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <WhatsAppFloat />
        </div>

        <Footer />
      </div>
    </Router>
  );
};

export default App;