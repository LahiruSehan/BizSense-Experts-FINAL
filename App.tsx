
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeServices from './components/HomeServices';
import Services from './components/Services';
import WhyChoose from './components/WhyChoose';
import Staff from './components/Staff';
import ERPPage from './components/Pages/ERPPage';
import Contact from './components/Contact';
import ChatWidget from './components/ChatWidget';
import WhatsAppFloat from './components/UI/WhatsAppFloat';
import LanguageToggle from './components/UI/LanguageToggle';
import WhatsAppModal from './components/WhatsAppModal';
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
    <Staff />
    <Contact />
  </PageWrapper>
);

const About: React.FC = () => (
    <PageWrapper pt="pt-20">
        <WhyChoose />
        <Staff />
    </PageWrapper>
);

// Modular App-Style Footer (Universal) - Resized Even Smaller
const Footer: React.FC = () => {
  const { config } = useLanguage();
  return (
    <footer className="bg-matte-charcoal border-t border-white/5 pt-4 pb-4 text-sm relative z-10 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 mb-3">
           <div className="bg-white/5 p-2 rounded-lg flex flex-col items-center justify-center gap-0.5 border border-white/5 hover:border-gold-500/20 transition-colors">
              <h5 className="text-gold-500 text-[7px] uppercase font-bold tracking-[0.2em]">Connect</h5>
              <a href={`https://wa.me/${config.company.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="text-[8px] font-bold text-white/40 hover:text-white transition-colors">
                {config.company.phone}
              </a>
           </div>
           <div className="bg-white/5 p-2 rounded-lg flex flex-col items-center justify-center gap-0.5 border border-white/5 hover:border-gold-500/20 transition-colors">
              <h5 className="text-gold-500 text-[7px] uppercase font-bold tracking-[0.2em]">Social</h5>
              <a href="https://web.facebook.com/profile.php?id=61562605711713" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-white/40 hover:text-white transition-colors">
                 <Facebook size={10} /> <span className="text-[8px] font-bold">Facebook</span>
              </a>
           </div>
           <div className="bg-white/5 p-2 rounded-lg flex flex-col items-center justify-center gap-0.5 border border-white/5 hover:border-gold-500/20 transition-colors col-span-2 md:col-span-1">
               <h5 className="text-gold-500 text-[7px] uppercase font-bold tracking-[0.2em]">Inquiries</h5>
               <span className="text-white/40 text-[8px] font-bold">{config.company.email}</span>
           </div>
        </div>
        <div className="text-center text-gray-600 text-[7px] border-t border-white/5 pt-3 uppercase tracking-[0.3em] font-bold">
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
      setShowFloaters(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-matte-black text-gray-200 font-sans selection:bg-gold-500 selection:text-black overflow-x-hidden relative">
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
