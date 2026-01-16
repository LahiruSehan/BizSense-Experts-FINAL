import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import HomeServices from './components/HomeServices';
import Services from './components/Services';
import WhyChoose from './components/WhyChoose';
import Staff from './components/Staff';
import ERPPage from './components/Pages/ERPPage';
import PortfolioPage from './components/Pages/PortfolioPage';
import Contact from './components/Contact';
import WhatsAppFloat from './components/UI/WhatsAppFloat';
import LanguageToggle from './components/UI/LanguageToggle';
import WhatsAppModal from './components/WhatsAppModal';
import PortfolioButton from './components/UI/PortfolioButton';
import ServiceLifecycle from './components/ServiceLifecycle';
import ERPSolutionsSection from './components/ERPSolutionsSection';
import { motion, AnimatePresence } from 'framer-motion';
import { Facebook } from 'lucide-react';
import { useLanguage } from './context/LanguageContext';

const PageWrapper: React.FC<{children: React.ReactNode, pt?: string}> = ({ children, pt = "pt-12" }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.8 }}
    className={`${pt} bg-transparent`}
  >
    {children}
  </motion.div>
);

const Home: React.FC = () => (
  <PageWrapper pt="pt-0">
    <Hero />
    <HomeServices />
    <ServiceLifecycle />
    <WhyChoose />
    <Staff />
    <ERPSolutionsSection />
    <Contact />
  </PageWrapper>
);

const Footer: React.FC = () => {
  const { config } = useLanguage();
  return (
    <footer className="bg-transparent border-t border-white/5 pt-12 pb-12 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <img src="https://i.ibb.co/7mmBhMJ/LOGO.png" alt="Logo" className="h-10 opacity-60" />
            <div className="flex gap-8">
                <a href="#" className="text-gray-500 hover:text-biz-emerald transition-colors text-xs font-bold uppercase tracking-widest">Privacy</a>
                <a href="#" className="text-gray-500 hover:text-biz-emerald transition-colors text-xs font-bold uppercase tracking-widest">Terms</a>
                <a href="#" className="text-gray-500 hover:text-biz-emerald transition-colors text-xs font-bold uppercase tracking-widest">Careers</a>
            </div>
            <div className="flex gap-4">
                <a href="https://web.facebook.com/profile.php?id=61562605711713" target="_blank" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:border-biz-emerald hover:text-biz-emerald transition-all">
                    <Facebook size={18} />
                </a>
            </div>
        </div>
        <div className="text-center text-gray-700 text-[10px] uppercase tracking-[0.4em] font-black">
          &copy; {new Date().getFullYear()} {config.company.name}. Excellence Redefined.
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-transparent text-slate-200 font-display selection:bg-biz-emerald selection:text-biz-deep overflow-x-hidden relative">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<PageWrapper pt="pt-0"><PortfolioPage /></PageWrapper>} />
            <Route path="/services" element={<PageWrapper pt="pt-12"><Services /></PageWrapper>} />
            <Route path="/services/erp" element={<PageWrapper pt="pt-0"><ERPPage /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper pt="pt-12"><Contact /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
        
        <WhatsAppModal />
        <PortfolioButton />
        <LanguageToggle />
        <WhatsAppFloat />
        <Footer />
      </div>
    </Router>
  );
};

export default App;