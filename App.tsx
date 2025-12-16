import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import HomeServices from './components/HomeServices';
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

const B2BSection: React.FC = () => (
    <section className="py-16 md:py-24 bg-gradient-to-b from-matte-charcoal to-matte-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#D4A533_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-10 md:mb-16">
                 <h2 className="text-2xl md:text-5xl font-serif text-white mb-2 md:mb-6">B2B Trade</h2>
                 <p className="text-gold-500 text-[9px] md:text-xs tracking-[0.3em] uppercase">Connect. Trade. Succeed.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-6">
                {[
                    { num: "01", title: "Buyer Match", desc: "Right partners." },
                    { num: "02", title: "Trade Flow", desc: "Global commerce." },
                    { num: "03", title: "Market Entry", desc: "Expansion guide." },
                    { num: "04", title: "B2B Meets", desc: "Introductions." },
                    { num: "05", title: "Platforms", desc: "Marketplaces." },
                    { num: "06", title: "Documents", desc: "Compliance." },
                ].map((item, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-10% 0px -10% 0px" }}
                        transition={{ delay: i * 0.05 }}
                        className="bg-white/5 border border-white/5 p-3 md:p-8 rounded-lg md:rounded-xl hover:border-gold-500/20 transition-colors"
                    >
                        <div className="flex justify-between items-start mb-1 md:mb-4">
                            <h4 className="text-white font-serif font-bold text-xs md:text-lg leading-tight">{item.title}</h4>
                            <span className="text-xl md:text-3xl font-serif text-white/5 font-bold leading-none">{item.num}</span>
                        </div>
                        <p className="text-gray-500 text-[9px] md:text-xs leading-relaxed">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

const BookkeepingSection: React.FC = () => (
    <section className="py-16 md:py-24 bg-matte-black">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20">
            <div>
                <h3 className="text-xl md:text-3xl text-white font-serif mb-4 md:mb-8">Remote Bookkeeping</h3>
                <p className="text-gray-400 mb-6 md:mb-10 leading-relaxed font-light text-xs md:text-base">
                    Professional remote bookkeeping and taxation tailored for businesses.
                </p>
                <ul className="space-y-3 md:space-y-6">
                    {["Expert financial management", "Strict security protocols", "Cost-effective for SMEs", "Integration with BizSense ERP"].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 md:gap-4 text-gray-300">
                             <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-gold-500 flex items-center justify-center text-black shrink-0"><Check size={10} className="md:w-3.5 md:h-3.5" /></div>
                             <span className="text-[10px] md:text-sm tracking-wide">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className="text-xl md:text-3xl text-white font-serif mb-4 md:mb-8">ROI-Driven Marketing</h3>
                <p className="text-gray-400 mb-6 md:mb-10 leading-relaxed font-light text-xs md:text-base">
                    Delivering measurable ROI beyond vanity metrics. Ideal for SMEs looking for tangible outcomes.
                </p>
                <div className="grid grid-cols-2 gap-2 md:gap-4">
                    {["Web Development", "Global SEO", "Social Media", "PPC Ads", "Branding", "Export Promo"].map((item, i) => (
                        <div key={i} className="bg-white/5 p-2 md:p-4 text-[9px] md:text-xs text-gray-300 border-l border-gold-500/50 hover:bg-white/10 transition-colors uppercase tracking-wider">{item}</div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

// --- Page Components ---

const Home: React.FC = () => (
  <PageWrapper pt="pt-0">
    <Hero />
    <HomeServices />
    <B2BSection />
    <BookkeepingSection />
    <Contact />
  </PageWrapper>
);

const About: React.FC = () => (
    <PageWrapper pt="pt-20">
        <B2BSection />
        <BookkeepingSection />
        <Contact />
    </PageWrapper>
);

// Modular App-Style Footer (Universal)
const Footer: React.FC = () => (
  <footer className="bg-matte-charcoal border-t border-white/5 pt-10 pb-8 text-sm relative z-10">
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-8">
         <div className="bg-white/5 p-4 rounded-xl flex flex-col items-center justify-center gap-2 border border-white/5 hover:border-gold-500/30 transition-colors">
            <h5 className="text-gold-500 text-[10px] uppercase font-bold">Services</h5>
            <div className="flex gap-2 text-white/50">
               <Laptop size={16} /> <Globe size={16} />
            </div>
         </div>
         <div className="bg-white/5 p-4 rounded-xl flex flex-col items-center justify-center gap-2 border border-white/5 hover:border-gold-500/30 transition-colors">
            <h5 className="text-gold-500 text-[10px] uppercase font-bold">Contact</h5>
            <div className="flex gap-2 text-white/50">
               <Users size={16} /> <ArrowRight size={16} />
            </div>
         </div>
         <div className="bg-white/5 p-4 rounded-xl flex flex-col items-center justify-center gap-2 border border-white/5 hover:border-gold-500/30 transition-colors col-span-2 md:col-span-1">
            <h5 className="text-gold-500 text-[10px] uppercase font-bold">Social</h5>
            <div className="flex gap-4 text-white/50">
               <Twitter size={16} /> <Linkedin size={16} /> <Facebook size={16} />
            </div>
         </div>
         <div className="bg-white/5 p-4 rounded-xl flex flex-col items-center justify-center gap-2 border border-white/5 hover:border-gold-500/30 transition-colors col-span-2 md:col-span-1">
             <h5 className="text-gold-500 text-[10px] uppercase font-bold">Support</h5>
             <span className="text-white/50 text-[10px]">{CONFIG.company.email}</span>
         </div>
      </div>

      <div className="text-center text-gray-600 text-[9px] md:text-[10px] border-t border-white/5 pt-6 uppercase tracking-widest">
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
      <div className="min-h-screen bg-matte-black text-gray-200 font-sans selection:bg-gold-500 selection:text-black overflow-x-hidden">
        {/* Global Parallax Background Gradient */}
        <div className="fixed inset-0 bg-gradient-to-b from-[#0A0A0A] to-[#050505] -z-20" />
        <div className="fixed top-0 left-0 w-full h-[500px] bg-gold-500/5 blur-[150px] -z-10 opacity-30 pointer-events-none" />
        
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