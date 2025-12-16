import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Server, Layers, Building2, ShoppingBag, Factory, Truck } from 'lucide-react';
import Button from '../UI/Button';

const ERPPage: React.FC = () => {
  const modules = [
    { title: "Accounting & Finance", desc: "Manage your financial health with precision." },
    { title: "Inventory Control", desc: "Optimize stock levels and reduce waste." },
    { title: "Sales & CRM", desc: "Enhance customer relationships and drive sales." },
    { title: "Purchasing", desc: "Streamline procurement and vendor management." },
    { title: "Debtors & Credit Control", desc: "Improve cash flow and mitigate risks." },
    { title: "Manufacturing & Costing", desc: "Accurate cost tracking and production planning." },
    { title: "Export Documentation", desc: "Simplify complex international trade paperwork." },
    { title: "HR & Payroll", desc: "Efficient human resources and salary management." },
    { title: "POS & Integrations", desc: "Seamless point-of-sale and system connectivity." },
  ];

  const industries = [
    { name: "Importers & Distributors", icon: Truck },
    { name: "Exporters", icon: GlobeIcon },
    { name: "Vehicle Traders", icon: Truck }, // Using Truck as placeholder
    { name: "Retail & Wholesale", icon: ShoppingBag },
    { name: "Manufacturing", icon: Factory },
    { name: "Hotels & Restaurants", icon: Building2 },
  ];

  // Helper for icon
  function GlobeIcon(props: any) {
      return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
  }

  return (
    <div className="pt-24 min-h-screen bg-matte-black">
      {/* Page Header */}
      <section className="relative py-24 px-6 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-gold-500/5 pointer-events-none"></div>
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 tracking-tight">BizSense ERP Solutions</h1>
            <h2 className="text-xl md:text-2xl text-gold-500 font-serif mb-6">Designed by a Banker, for Businesses</h2>
            <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-2xl">
              Our ERP solutions are meticulously designed to empower businesses with unparalleled control and efficiency. Leveraging insights from a banking perspective, we focus on real-world financial management.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Platforms & Benefits */}
      <section className="py-24 px-6">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Left Column: Platforms */}
          <div>
            <h3 className="text-gold-500 uppercase tracking-[0.2em] font-bold text-xs mb-10">ERP Platforms We Implement</h3>
            <div className="space-y-4">
              {['Odoo', 'ERP Next', 'Quick Book (Pro Advisor)', 'Zoho (Books, Inventory, CRM, People)', 'Custom ERP (BizSense ERP – Light)'].map((tech, i) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="p-5 border-l-2 border-gold-500 bg-white/5 hover:bg-white/10 transition-colors flex items-center gap-4 group cursor-default"
                >
                   <span className="text-gray-200 text-lg font-serif group-hover:text-gold-100 transition-colors">{tech}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-12">
               <h3 className="text-gold-500 uppercase tracking-[0.2em] font-bold text-xs mb-8">Industries Served</h3>
               <div className="grid grid-cols-2 gap-4">
                   {industries.map((ind, i) => (
                       <div key={i} className="flex items-center gap-3 text-gray-400">
                           <ind.icon size={16} className="text-gold-500" />
                           <span className="text-sm">{ind.name}</span>
                       </div>
                   ))}
               </div>
            </div>
          </div>

          {/* Right Column: Modules */}
          <div>
            <h3 className="text-gold-500 uppercase tracking-[0.2em] font-bold text-xs mb-10">Comprehensive Modules</h3>
            <div className="grid grid-cols-1 gap-6">
                {modules.map((mod, i) => (
                    <motion.div
                       key={i}
                       initial={{ opacity: 0, y: 10 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       transition={{ delay: i * 0.05 }}
                       className="flex items-start gap-4 p-4 border border-white/5 rounded-xl hover:border-gold-500/30 transition-colors bg-matte-charcoal"
                    >
                        <div className="w-8 h-8 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500 shrink-0 mt-1">
                            <Layers size={14} />
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-sm mb-1">{mod.title}</h4>
                            <p className="text-gray-500 text-xs">{mod.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
            
            <div className="mt-12">
                <Button>Request Demo</Button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ERPPage;