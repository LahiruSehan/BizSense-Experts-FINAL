import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Globe, BarChart3, Calculator, ShieldCheck, ArrowRight, Layers } from 'lucide-react';
import { ServiceType } from '../types';
import { useNavigate } from 'react-router-dom';
import ServiceModal from './ServiceModal';

// Enhanced Service Data - Exported for Hero Mobile Usage
export const servicesList = [
  {
    id: 'erp',
    title: ServiceType.ERP,
    shortDesc: "Tailored ERP.",
    fullDesc: "We don't just install software; we engineer financial clarity. Our ERP solutions (Odoo, ERPNext, SAP) are designed by bankers to ensure regulatory compliance, inventory control, and operational scalability.",
    features: ["Inventory Control", "Real-time Reporting", "Multi-currency Support", "Custom Workflow Design"],
    icon: Layers,
    path: '/services/erp',
  },
  {
    id: 'b2b',
    title: ServiceType.TRADE,
    shortDesc: "Trade Support.",
    fullDesc: "Navigate the complexities of global commerce. We facilitate connections between buyers and sellers, handle export documentation, and provide market entry strategies for the UK, EU, and Asia.",
    features: ["Buyer Matching", "Export Documentation", "Global Market Entry", "Trade Finance Advisory"],
    icon: Globe,
    path: '/services/trade',
  },
  {
    id: 'marketing',
    title: ServiceType.MARKETING,
    shortDesc: "Digital ROI.",
    fullDesc: "Move beyond vanity metrics. Our digital strategies focused on SEO, Social Media, and targeted Ad campaigns are crafted to deliver measurable Return on Investment and tangible business growth.",
    features: ["International SEO", "Performance Branding", "Lead Generation", "Content Strategy"],
    icon: BarChart3,
    path: '/services/marketing',
  },
  {
    id: 'accounting',
    title: ServiceType.ACCOUNTING,
    shortDesc: "Remote Books.",
    fullDesc: "Professional remote bookkeeping and taxation services tailored for SMEs and overseas companies operating locally. We ensure your financial health is monitored with bank-grade security.",
    features: ["Taxation & Compliance", "Cloud Integration", "Reconciliation", "Financial Reporting"],
    icon: Calculator,
    path: '/services/accounting',
  },
  {
    id: 'advisory',
    title: ServiceType.ADVISORY,
    shortDesc: "Growth Advisory.",
    fullDesc: "Expert consulting for small-to-medium enterprises. We analyze your business model, identify bottlenecks, and provide actionable strategies to scale your operations sustainably.",
    features: ["Business Modeling", "Process Optimization", "Financial Planning", "Growth Strategy"],
    icon: ShieldCheck,
    path: '/services/advisory',
  },
  {
    id: 'finance',
    title: "Accounting Services",
    shortDesc: "Finance Pro.",
    fullDesc: "Comprehensive financial management for businesses without in-house teams. Access expert accountants at a fraction of the cost, integrated directly with your ERP systems.",
    features: ["Payroll Management", "Cost Analysis", "Audit Support", "Virtual CFO"],
    icon: Activity,
    path: '/services/accounting',
  }
];

const Services: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedService = servicesList.find(s => s.id === selectedId);

  return (
    <section className="py-20 md:py-32 bg-matte-charcoal relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-gold-500/20 to-transparent" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="text-center mb-12 md:mb-24">
          <h2 className="text-gold-500 text-[8px] md:text-[10px] font-bold tracking-[0.3em] uppercase mb-4">Expertise</h2>
          <h3 className="text-3xl md:text-5xl font-serif text-white leading-tight">
            Core Services
          </h3>
        </div>

        {/* 3x2 Grid (2 cols on mobile to fit text, 3 on desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
          {servicesList.map((service, idx) => (
            <motion.div
              key={service.id}
              layoutId={`card-${service.id}`}
              onClick={() => setSelectedId(service.id)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                scale: 1,
                borderColor: "rgba(255,255,255,0.05)"
              }}
              whileHover={{ 
                scale: 1.02, 
                borderColor: "rgba(212,165,51,0.5)"
              }}
              viewport={{ 
                once: false,
                margin: "-40% 0px -40% 0px" 
              }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative h-40 md:h-64 bg-matte-black/60 border border-white/5 p-4 md:p-8 cursor-pointer overflow-hidden transition-colors duration-500 flex flex-col justify-between rounded-xl md:rounded-none"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10">
                <div className="mb-2 md:mb-6 text-gold-500 group-hover:scale-110 transition-transform duration-500 origin-left">
                   <service.icon size={20} className="md:w-8 md:h-8" strokeWidth={1.5} />
                </div>
                <h4 className="text-xs md:text-xl font-serif text-white mb-1 md:mb-2 group-hover:text-gold-200 transition-colors leading-tight">{service.title}</h4>
                <p className="text-[8px] md:text-xs text-gray-500 uppercase tracking-widest leading-tight">{service.shortDesc}</p>
              </div>

              <div className="relative z-10 flex justify-end">
                 <div className="w-5 h-5 md:w-8 md:h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-black group-hover:border-gold-500 transition-all duration-300">
                    <ArrowRight size={10} className="md:w-3.5 md:h-3.5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedId && selectedService && (
          <ServiceModal selectedService={selectedService} setSelectedId={setSelectedId} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;