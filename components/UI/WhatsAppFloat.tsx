import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const WhatsAppFloat: React.FC = () => {
  const { config } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hide buttons at the top of the page on mobile
      const threshold = window.innerWidth < 768 ? 400 : -1;
      setIsVisible(window.scrollY > threshold);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href={`https://wa.me/${config.company.whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-6 right-6 z-[160] group flex items-center gap-3 cursor-pointer"
        >
          <div className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.4)] border border-white/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            <svg 
              width="28" 
              height="28" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-white relative z-10"
            >
              <path d="M17.472 14.382C17.112 14.202 15.344 13.332 15.013 13.193C14.682 13.053 14.441 12.984 14.2 13.345C13.959 13.706 13.267 14.516 13.057 14.757C12.846 14.997 12.636 15.027 12.275 14.847C11.915 14.667 10.753 14.287 9.375 13.059C8.286 12.089 7.55 10.89 7.34 10.529C7.129 10.169 7.317 9.974 7.498 9.794C7.659 9.634 7.857 9.377 8.037 9.167C8.218 8.957 8.278 8.796 8.398 8.556C8.518 8.315 8.458 8.105 8.368 7.925C8.278 7.745 7.587 6.044 7.286 5.354C6.999 4.694 6.702 4.777 6.485 4.787C6.287 4.795 6.061 4.795 5.836 4.795C5.61 4.795 5.249 4.88 4.934 5.226C4.618 5.572 3.731 6.402 3.731 8.092C3.731 9.782 4.964 11.415 5.144 11.656C5.325 11.896 7.564 15.348 11.132 16.736C14.699 18.124 14.699 17.653 15.33 17.593C15.961 17.533 17.367 16.762 17.668 15.921C17.968 15.079 17.968 14.358 17.878 14.208C17.788 14.058 17.562 13.968 17.202 13.788H17.472V14.382Z" fill="currentColor"/>
            </svg>
          </div>
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppFloat;