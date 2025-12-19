import { Layers, Globe, BarChart3, Calculator, ShieldCheck, Truck, ShoppingBag, Factory, Building2, Users, TrendingUp, Laptop, PieChart, Lock, Car } from 'lucide-react';
import { ServiceType, SiteConfig } from '../types';

export const CONFIG: SiteConfig = {
  company: {
    name: "BizSense Experts",
    tagline: "Smart Business Solutions for a Digital World",
    phone: "0701 75 75 76",
    phoneSecondary: "0711 75 75 76",
    email: "Bizsensexperts@gmail.com",
    whatsappNumber: "94701757576",
    location: "Sri Lanka & International Markets"
  },
  
  hero: {
    badge: "Designed by business professionals. Built for growth.",
    mainHeadlinePrefix: "EMPOWERING BUSINESSES",
    withText: "with",
    headlines: [
      "Innovative Solutions",
      "Tailored ERP Systems",
      "Strategic Digital Growth",
      "Global B2B Connections",
      "Practical Financial Advisory",
      "Accurate Accounting Control"
    ],
    description: "BizSense Experts is a multi-disciplinary business solutions company. With 20+ years of banking, finance, and SME consulting experience, we bridge the gap between technology and real business needs. We don't just sell software — we design systems that improve profitability.",
    cta: {
      consult: "Request Consultation",
      whatsapp: "Book a Demo",
      ai: "AI Business Strategy"
    },
    whyChoose: [
      { 
        icon: ShieldCheck, 
        title: "Banking Logic", 
        text: "20+ years of banking & SME experience built into every solution." 
      },
      { 
        icon: PieChart, 
        title: "Finance First", 
        text: "Deep understanding of finance, credit, and cash flow control." 
      },
      { 
        icon: Laptop, 
        title: "Practical ERP", 
        text: "Affordable solutions designed for real-world operations." 
      },
      { 
        icon: Globe, 
        title: "Global Reach", 
        text: "Connecting local exporters to UK, EU, Middle East, and Asia." 
      },
      { 
        icon: TrendingUp, 
        title: "Growth Driven", 
        text: "ROI-driven marketing and scalable SME advisory." 
      },
      { 
        icon: Lock, 
        title: "BizSense", 
        text: "Business + Sense: The trusted partner for your digital journey." 
      }
    ]
  },

  services: [
    {
      id: 'erp',
      title: "ERP Solutions",
      shortDesc: "ERP Designed by a Banker, for Businesses.",
      summary: "Achieve absolute control over inventory, cash flow, and reporting with systems designed by financial experts.",
      fullDesc: "Our ERP solutions help businesses control inventory, manage debtors, improve reporting, and comply with regulations. We implement world-class platforms tailored to your specific scale.",
      features: ["Odoo & ERPNext", "Zoho (Books, Inventory, CRM)", "BizSense ERP – Light", "Financial Control Logic"],
      icon: Layers,
      path: '/services/erp',
    },
    {
      id: 'marketing',
      title: "Digital Marketing",
      shortDesc: "ROI-Driven Growth & Online Visibility.",
      summary: "Focusing on tangible revenue growth, not just likes. Ideal for exporters, tourism, and SMEs.",
      fullDesc: "BizSense Digital Marketing focuses on ROI-driven results. From SEO to Meta Ads, we craft strategies that convert digital presence into actual business growth.",
      features: ["Business Websites", "International SEO", "Google & Meta Ads", "Export Market Promotion"],
      icon: BarChart3,
      path: '/services/marketing',
    },
    {
      id: 'b2b',
      title: "B2B Trade Services",
      shortDesc: "Local & International Trade Facilitation.",
      summary: "Find, connect, and trade with verified buyers and sellers globally.",
      fullDesc: "We help businesses navigate global commerce. Connecting Sri Lankan exporters with markets in the UK, EU, Middle East, and Asia through strategic networking.",
      features: ["Buyer & Seller Matching", "Market Entry Support", "Global B2B Platforms", "Trade Documentation"],
      icon: Globe,
      path: '/services/trade',
    },
    {
      id: 'advisory',
      title: "SME & Export Advisory",
      shortDesc: "Practical SME & Strategic Consulting.",
      summary: "Bridging the gap between technology and real-world financial reality.",
      fullDesc: "Expert consulting for SMEs looking to scale. We analyze your business model with a banker's eye for credit, risk, and profitability.",
      features: ["Business Modeling", "Process Optimization", "Financial Planning", "Export Strategy"],
      icon: ShieldCheck,
      path: '/services/advisory',
    },
    {
      id: 'accounting',
      title: "Accounting & Control",
      shortDesc: "Accurate Financial & Accounting Control.",
      summary: "Bank-grade financial oversight for growing enterprises.",
      fullDesc: "Professional remote bookkeeping and financial oversight. We ensure your business maintains the strict financial discipline required for banking and audits.",
      features: ["Bookkeeping", "Taxation", "Cash Flow Management", "Audit Readiness"],
      icon: Calculator,
      path: '/services/accounting',
    }
  ],

  erpPage: {
    title: "BizSense ERP Solutions",
    subtitle: "Designed by a Banker, for Businesses",
    description: "Our ERP solutions are meticulously designed to empower businesses with unparalleled control. We focus on inventory management, debtor control, and regulatory compliance to ensure your business scales safely.",
    platforms: ['Odoo', 'ERPNext', 'Zoho (Books, Inventory, CRM, People)', 'BizSense ERP – Light (Custom)'],
    industries: [
      { name: "Importers & Distributors", icon: Truck },
      { name: "Exporters (Coir, Agro, Spices...)", icon: Globe },
      { name: "Vehicle Traders", icon: Car },
      { name: "Retail & Wholesale", icon: ShoppingBag },
      { name: "Manufacturing & Processing", icon: Factory },
      { name: "Tourism & Services", icon: Building2 },
    ],
    modules: [
      { title: "Accounting & Finance", desc: "Manage your financial health with banking-grade precision." },
      { title: "Inventory Management", desc: "Optimize stock levels and prevent leakage." },
      { title: "Sales & CRM", desc: "Drive growth with data-backed customer insights." },
      { title: "Purchasing", desc: "Streamline procurement and vendor control." },
      { title: "Debtors & Credit Control", desc: "Maintain healthy cash flow and reduce bad debt." },
      { title: "Manufacturing & Costing", desc: "Accurate production tracking and resource planning." },
      { title: "Export Documentation", desc: "Simplify complex international trade paperwork." },
      { title: "HR & Payroll", desc: "Professional employee and salary management." },
      { title: "POS & Integrations", desc: "Seamless point-of-sale and API connectivity." },
    ]
  },

  contact: {
    title: "BizSense = Business + Sense",
    subtitle: "Ready to transform your business with professional ERP, digital growth, or strategic advisory? Let's discuss your roadmap.",
    form: {
      name: "Your Name",
      company: "Business Name",
      email: "Email Address",
      message: "How can we help?",
      button: "Connect via WhatsApp"
    }
  }
};