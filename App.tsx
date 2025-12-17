import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import HomeServices from './components/HomeServices';
import WhyChoose from './components/WhyChoose';
import ERPPage from './components/Pages/ERPPage';
import Contact from './components/Contact';
import ChatWidget from './components/ChatWidget';
import WhatsAppFloat from './components/UI/WhatsAppFloat';
import WhatsAppModal from './components/WhatsAppModal';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Globe, Laptop, PieChart, TrendingUp, Users, Target, Lightbulb, Trophy, ArrowRight, Twitter, Linkedin, Facebook } from 'lucide-react';
import { CONFIG } from './config/config-english';

// --- Shared Components ---

const PageWrapper: React.FC<{children: React.ReactNode, pt?: string}> = ({ children, pt = "pt-24" }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.6, ease: "easeInOut" }}
    className={pt} // Allow overriding padding
  >
    {children}
  </motion.div>
);

// --- Page Components ---

const Home: React.FC = () => (
  <PageWrapper pt="pt-0">
    <Hero />
    {/* Swapped Order: Solutions first, then Why Choose */}
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
const Footer: React.FC = () => (
  <footer className="bg-matte-charcoal border-t border-white/5 pt-10 pb-8 text-sm relative z-10 overflow-hidden">
    {/* Footer Specific Faint Blue Glow - Slightly Increased */}
    <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gemini-900/15 blur-[80px] pointer-events-none animate-pulse-soft" />
    
    <div className="container mx-auto px-4 md:px-6 relative z-10">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 mb-8">
         {/* Services Column Removed */}
         
         <div className="bg-white/5 p-4 rounded-xl flex flex-col items-center justify-center gap-2 border border-white/5 hover:border-gold-500/30 transition-colors">
            <h5 className="text-gold-500 text-[10px] uppercase font-bold">Contact</h5>
            <div className="flex gap-2 text-white/50">
               <Users size={16} /> <ArrowRight size={16} />
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
             <span className="text-white/50 text-[10px] font-bold">{CONFIG.company.email}</span>
         </div>
      </div>

      <div className="text-center text-gray-500 text-[9px] md:text-[10px] border-t border-white/5 pt-6 uppercase tracking-widest font-bold">
        &copy; {new Date().getFullYear()} {CONFIG.company.name}.
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  const [showFloaters, setShowFloaters] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloaters(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-matte-black text-gray-200 font-sans selection:bg-gold-500 selection:text-black overflow-x-hidden relative">
        {/* Global Background Layer */}
        <div className="fixed inset-0 bg-matte-black -z-20" />
        
        {/* Faint Blue Ambient Light - Global Coverage (Opacity Increased) */}
        <div className="fixed top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.05),transparent_90%)] pointer-events-none -z-10 animate-pulse-soft" />
        
        {/* Corner Accents - Very Faint but Visible & Moving */}
        <div className="fixed bottom-0 left-0 w-[800px] h-[800px] bg-gemini-900/10 blur-[150px] pointer-events-none -z-10 animate-blob" />
        <div className="fixed top-0 right-0 w-[800px] h-[800px] bg-gemini-900/10 blur-[150px] pointer-events-none -z-10 animate-blob" style={{ animationDelay: '2s' }} />

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
        
        {/* Modals and Widgets */}
        <WhatsAppModal />
        
        {/* ChatWidget is always mounted */}
        <ChatWidget />
        
        {/* Floating WhatsApp Bubble */}
        <div className={`transition-opacity duration-700 ${showFloaters ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <WhatsAppFloat />
        </div>

        <Footer />
      </div>
    </Router>
  );
};

export default App;