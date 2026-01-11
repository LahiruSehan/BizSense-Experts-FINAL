import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowLeft, Settings, Globe, Palette, Megaphone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

type Category = 'ERP' | 'Web' | 'Graphics' | 'Digital Marketing';

// Progressive Image Loader Component
const ProgressiveImage: React.FC<{ src: string; alt: string; index: number }> = ({ src, alt, index }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative overflow-hidden bg-white/5">
      {/* Pixelated/Blurred Placeholder */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 z-10 bg-biz-emerald/10 backdrop-blur-3xl flex items-center justify-center"
          >
            <div className="w-4 h-4 rounded-full bg-biz-emerald/20 animate-pulse" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.img
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        initial={{ opacity: 0, filter: 'blur(20px)', scale: 1.1 }}
        animate={isLoaded ? { 
          opacity: 1, 
          filter: 'blur(0px)', 
          scale: 1,
        } : {}}
        transition={{ 
          duration: 1.2, 
          delay: index * 0.1, // Staggered loading feel
          ease: "easeOut" 
        }}
        className="w-full h-auto block object-contain transition-transform duration-700 group-hover:scale-105"
      />
    </div>
  );
};

const PortfolioPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<Category>('ERP');

  const categories = [
    { name: 'ERP', icon: Settings },
    { name: 'Web', icon: Globe },
    { name: 'Graphics', icon: Palette },
    { name: 'Digital Marketing', icon: Megaphone }
  ];

  const portfolioItems = [
    // ERP
    { 
      id: 5, 
      category: 'ERP', 
      title: 'BizSense Statement Generator', 
      client: 'Financial Automation', 
      image: 'https://i.ibb.co/fzZHqXhm/Chat-GPT-Image-Jan-11-2026-04-46-39-PM.png' 
    },

    // Web
    { 
      id: 3, 
      category: 'Web', 
      title: 'Modern Tour Website', 
      client: 'Dream Stay Tours', 
      image: 'https://i.ibb.co/b5wg2QjG/Dream-Stay-Tours-Webbsite.png',
      url: 'https://www.dreamstaytours.com'
    },
    { 
      id: 6, 
      category: 'Web', 
      title: 'BizSense Experts Site', 
      client: 'BizSense Corporate', 
      image: 'https://i.ibb.co/MkJ93wNs/Biz-Sense-Experts-Website.png' 
    },
    
    // Graphics (Simplified Metadata)
    { id: 201, category: 'Graphics', title: '', client: 'Social Media Post', image: 'https://i.ibb.co/9Ht4Rgrd/Design-26.png' },
    { id: 202, category: 'Graphics', title: '', client: 'Social Media Post', image: 'https://i.ibb.co/x8jrWgtZ/Design-31.png' },
    { id: 203, category: 'Graphics', title: '', client: 'Social Media Post', image: 'https://i.ibb.co/B2Wr5LLR/Design-34.png' },
    { id: 204, category: 'Graphics', title: '', client: 'Social Media Post', image: 'https://i.ibb.co/fdS2Fxrg/Design-39.png' },
    { id: 205, category: 'Graphics', title: '', client: 'Social Media Post', image: 'https://i.ibb.co/YFCMtZtF/Design-44.png' },
    { id: 206, category: 'Graphics', title: '', client: 'Social Media Post', image: 'https://i.ibb.co/G4TZxBgf/Design-2.png' },
    { id: 207, category: 'Graphics', title: '', client: 'Social Media Post', image: 'https://i.ibb.co/Z6MkWCC7/Design-4.png' },
    { id: 208, category: 'Graphics', title: '', client: 'Social Media Post', image: 'https://i.ibb.co/601nX4hd/Design-5.png' },
    { id: 209, category: 'Graphics', title: '', client: 'Social Media Post', image: 'https://i.ibb.co/C54xtrKQ/Design-7.jpg' },
    { id: 210, category: 'Graphics', title: '', client: 'Social Media Post', image: 'https://i.ibb.co/MyH9mWFm/Design-7.png' },
    { id: 211, category: 'Graphics', title: '', client: 'Social Media Post', image: 'https://i.ibb.co/ds2cWfZq/Design-8.jpg' },
    { id: 212, category: 'Graphics', title: '', client: 'Social Media Post', image: 'https://i.ibb.co/501bT8z/Design-9.jpg' },
    { id: 213, category: 'Graphics', title: '', client: 'Social Media Post', image: 'https://i.ibb.co/jPqGKwsP/Design-19.png' },
    { id: 214, category: 'Graphics', title: '', client: 'Social Media Post', image: 'https://i.ibb.co/cWbxfMt/Design-20.png' },

    // Digital Marketing
    { id: 1, category: 'Digital Marketing', title: 'Global SEO Strategy', client: 'Export Corp', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop' },
    { id: 4, category: 'Digital Marketing', title: 'Social Media Management', client: 'Café Blue', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop' },
  ];

  const filteredItems = portfolioItems.filter(item => item.category === activeTab);

  const handleLinkClick = (url?: string) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="min-h-screen bg-biz-deep relative pt-8 md:pt-12">
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-biz-emerald/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-10 md:mb-16 gap-4">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-biz-emerald font-display font-black uppercase tracking-widest text-[9px] hover:text-white transition-colors group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back Home
          </button>
          
          <div className="text-center">
            <h1 className="text-2xl md:text-5xl font-display text-white font-extrabold tracking-tight mb-1">Our Projects</h1>
            <p className="text-gray-500 text-[8px] md:text-sm font-display font-bold uppercase tracking-[0.4em]">Strategic Results</p>
          </div>

          <div className="w-[80px] hidden md:block" />
        </div>

        {/* Single Row Navigation Bar */}
        <div className="flex justify-center mb-10 md:mb-16">
          <div className="inline-flex flex-nowrap items-center bg-white/5 p-1.5 rounded-2xl md:rounded-full border border-white/10 backdrop-blur-xl overflow-x-auto no-scrollbar max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveTab(cat.name as Category)}
                className={`flex-none flex items-center gap-2 px-3 sm:px-6 py-2 rounded-xl md:rounded-full text-[8px] sm:text-xs font-display font-bold uppercase tracking-widest transition-all duration-500 whitespace-nowrap ${
                  activeTab === cat.name 
                    ? 'bg-biz-emerald text-biz-deep shadow-lg' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <cat.icon size={14} className="hidden sm:block" />
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Content */}
        <div className="min-h-[400px]">
          {activeTab === 'Graphics' ? (
            /* Masonry Layout for Graphics - minimalist info focus */
            <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-8 pb-32">
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="mb-3 md:mb-8 break-inside-avoid group relative bg-white/5 border border-white/10 rounded-2xl md:rounded-[32px] overflow-hidden hover:border-biz-emerald/30 transition-all duration-500 shadow-xl"
                  >
                    <ProgressiveImage src={(item as any).image} alt={item.category} index={idx} />
                    
                    <div className="p-3 md:p-5 bg-biz-deep/60 backdrop-blur-md border-t border-white/5">
                      <span className="text-biz-emerald text-[6px] md:text-[9px] font-display font-bold uppercase tracking-[0.2em] block mb-0.5 md:mb-1">
                        {item.category}
                      </span>
                      <p className="text-gray-400 text-[6px] md:text-[10px] font-black uppercase tracking-widest">
                        {item.client}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            /* Grid Layout for other categories (1:1 Aspect Ratio) */
            <motion.div 
              layout
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-8 pb-32"
            >
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="group relative bg-white/5 border border-white/10 rounded-3xl md:rounded-[40px] overflow-hidden hover:border-biz-emerald/30 transition-all duration-500 shadow-xl"
                  >
                    <div className="aspect-square overflow-hidden bg-black/40">
                      <img 
                        src={(item as any).image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4 md:p-8 bg-biz-deep/40 backdrop-blur-sm border-t border-white/5">
                      <span className="text-biz-emerald text-[7px] md:text-[10px] font-display font-bold uppercase tracking-[0.2em] block mb-1">{item.category}</span>
                      <h3 className="text-white font-display text-xs md:text-xl font-bold mb-1 tracking-tight line-clamp-2">{item.title}</h3>
                      <p className="text-gray-500 text-[6px] md:text-[9px] font-black uppercase tracking-widest mb-3">{item.client}</p>
                      
                      <div className="flex justify-end">
                        <button 
                          onClick={() => handleLinkClick((item as any).url)}
                          className={`w-7 h-7 md:w-12 md:h-12 rounded-lg md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-biz-emerald transition-all ${
                            (item as any).url ? 'hover:bg-biz-emerald hover:text-biz-deep cursor-pointer' : 'opacity-20 cursor-default'
                          }`}
                        >
                          <ExternalLink size={14} className="md:w-[18px] md:h-[18px]" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
          
          {filteredItems.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-gray-500 font-display font-bold uppercase tracking-widest text-xs">
              Coming Soon
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;