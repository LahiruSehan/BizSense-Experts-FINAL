import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowLeft, Layout, Settings, Palette } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

type Category = 'Digital Marketing' | 'ERP' | 'Graphic & Web';

const PortfolioPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<Category>('Digital Marketing');

  const categories = [
    { name: 'Digital Marketing', icon: Layout },
    { name: 'ERP', icon: Settings },
    { name: 'Graphic & Web', icon: Palette }
  ];

  const portfolioItems = [
    { id: 1, category: 'Digital Marketing', title: 'Global SEO Strategy', client: 'Export Corp', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop' },
    { id: 2, category: 'ERP', title: 'Odoo Implementation', client: 'Retail Chain', image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2670&auto=format&fit=crop' },
    { id: 3, category: 'Graphic & Web', title: 'Luxury Brand Identity', client: 'Aura Homes', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop' },
    { id: 4, category: 'Digital Marketing', title: 'Social Media Management', client: 'Café Blue', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop' },
    { id: 5, category: 'ERP', title: 'Inventory Control System', client: 'Agro Export', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop' },
    { id: 6, category: 'Graphic & Web', title: 'B2B Portal Design', client: 'BizConnect', image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2670&auto=format&fit=crop' },
  ];

  const filteredItems = portfolioItems.filter(item => item.category === activeTab);

  return (
    <div className="min-h-screen bg-biz-deep relative pt-12">
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-biz-emerald/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-biz-emerald font-black uppercase tracking-widest text-[10px] hover:text-white transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back Home
          </button>
          
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-serif text-white font-bold tracking-tight mb-2">Our Portfolio</h1>
            <p className="text-gray-500 text-xs md:text-sm font-bold uppercase tracking-[0.3em]">Excellence in Action</p>
          </div>

          <div className="w-[100px] hidden md:block" />
        </div>

        {/* 3-Item Navigation Bar */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-biz-navy/60 p-1.5 rounded-full border border-white/5 backdrop-blur-xl">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveTab(cat.name as Category)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-500 ${
                  activeTab === cat.name 
                    ? 'bg-biz-emerald text-biz-deep shadow-[0_0_20px_rgba(16,185,129,0.3)]' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <cat.icon size={14} />
                <span className="hidden sm:inline">{cat.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-24"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-biz-navy/40 border border-white/5 rounded-3xl overflow-hidden hover:border-biz-emerald/50 transition-all duration-500"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0"
                  />
                </div>
                <div className="p-8">
                  <span className="text-biz-emerald text-[9px] font-black uppercase tracking-widest block mb-2">{item.category}</span>
                  <h3 className="text-white font-serif text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-xs font-bold">{item.client}</p>
                  
                  <div className="mt-6 flex justify-end">
                    <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-biz-emerald hover:bg-biz-emerald hover:text-biz-deep transition-all">
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default PortfolioPage;