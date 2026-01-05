
/**
 * ==============================================================================
 * BIZSENSE EXPERTS - MASTER CONTENT CONFIGURATION (ENGLISH)
 * ==============================================================================
 * This file contains all the text seen on the website. 
 * If you want to change a phone number, email, or headline, just edit the text 
 * inside the quotes " ". 
 * 
 * Instructions:
 * 1. Only edit text inside the quotation marks.
 * 2. Do not delete commas (,) or brackets ({ }).
 * ==============================================================================
 */

import { Layers, Globe, BarChart3, Calculator, ShieldCheck, Truck, ShoppingBag, Factory, Building2, TrendingUp, Laptop, PieChart, Lock, Car } from 'lucide-react';
import { SiteConfig } from '../types';

export const CONFIG: SiteConfig = {

  // 1. GLOBAL COMPANY SETTINGS
  // ------------------------------------------------------------------------------
  company: {
    name: "BizSense Experts",
    tagline: "Smart Business Solutions for a Digital World",
    phone: "0701-75 75 76",              
    phoneSecondary: "0711 75 75 76",     
    email: "Bizsensexperts@gmail.com",   
    whatsappNumber: "94701757576",       
    location: "Sri Lanka & International Markets"
  },
  
  // 2. HERO SECTION (Main Top Area)
  // ------------------------------------------------------------------------------
  hero: {
    badge: "FROM BUSINESS PROFESSIONALS FOR BUSINESS GROWTH", 
    mainHeadlinePrefix: "BIZSENSE EXPERTS", // The large gold title
    withText: "WITH", // The white connector text
    
    // These words will rotate in the animation after "EMPOWERING BUSINESSES WITH..."
    headlines: [
      "Digital Marketing",
      "Innovative Solutions",
      "Tailored ERP Systems",
      "Strategic Digital Growth",
      "Global B2B Connections",
      "Financial Advisory",
      "Accounting Control"
    ],
    
    description: "BizSense Experts is a multi-disciplinary business solutions company providing ERP systems, digital marketing, B2B trade services, and SME advisory to local and international businesses. With 20+ years of financial, strategic, and SME consulting experience, BizSense bridges the gap between technology and real business needs. We design systems that improve profitability, control, and scalability.",
    
    cta: {
      consult: "Request Free Consultation",
      whatsapp: "Book a Demo",
      ai: "AI Business Strategy"
    },

    // 3. WHY CHOOSE US
    // ------------------------------------------------------------------------------
    whyChoose: [
      { 
        icon: ShieldCheck, 
        title: "20+ Years Experience", 
        text: "Deep understanding of finance, credit, and professional business logic built-in." 
      },
      { 
        icon: PieChart, 
        title: "Finance & Credit", 
        text: "Strategic expertise in managing cash flow and business risk." 
      },
      { 
        icon: Laptop, 
        title: "Practical ERP", 
        text: "Affordable, industry-specific workflows that actually work." 
      },
      { 
        icon: Globe, 
        title: "Global Reach", 
        text: "Local trust combined with UK, EU, Middle East, and Asia exposure." 
      },
      { 
        icon: TrendingUp, 
        title: "Profitability Focus", 
        text: "Systems designed to improve control and scalability." 
      },
      { 
        icon: Lock, 
        title: "Business + Sense", 
        text: "Real-world solutions from professionals who understand business." 
      }
    ]
  },

  // 4. MAIN SERVICES
  // ------------------------------------------------------------------------------
  services: [
    {
      id: 'erp',
      title: "ERP Solutions (International & Local)",
      shortDesc: "ERP Designed by Professionals, for Businesses.",
      summary: "Achieve absolute control over inventory, cash flow, and reporting with systems designed by financial experts.",
      fullDesc: "Our ERP solutions help businesses control inventory, manage debtors, improve reporting, and comply with regulations. We implement world-class platforms tailored to your specific scale.",
      features: ["Inventory Precision & Control", "Debtor & Cash Flow Management", "Accurate Financial Reporting", "Scalable Operations", "Regulatory & Tax Compliance"],
      icon: Layers,
      path: '/services/erp',
    },
    {
      id: 'marketing',
      title: "Digital Marketing & Online Growth",
      shortDesc: "Digital Transformation for SMEs.",
      summary: "Focusing on ROI-driven growth, not just vanity metrics like 'likes' or 'views'.",
      fullDesc: "BizSense Digital Marketing focuses on ROI-driven results. From high-performance websites to international SEO, we craft strategies that convert digital presence into actual business growth.",
      features: ["Business Website Development", "Local & International SEO", "Social Media & Meta Ads", "Google Ads & Content Strategy", "Export Market Online Promotion"],
      icon: BarChart3,
      path: '/services/marketing',
    },
    {
      id: 'b2b',
      title: "B2B Trade Services (Local & International)",
      shortDesc: "B2B Trade Facilitation – Local & Global.",
      summary: "Find, connect, and trade with verified buyers and sellers in Sri Lanka and globally.",
      fullDesc: "We help businesses navigate global commerce. Connecting exporters with markets in the UK, EU, Middle East, and Asia through strategic networking and registration on global platforms.",
      features: ["Buyer & Seller Matching", "International Trade Facilitation", "Export Market Entry Support", "B2B Meetings & Introductions", "Trade Documentation Support"],
      icon: Globe,
      path: '/services/trade',
    },
    {
      id: 'advisory',
      title: "SME & Export Advisory",
      shortDesc: "Practical SME & Strategic Consulting.",
      summary: "Expert consulting for SMEs looking to scale with financial discipline.",
      fullDesc: "We analyze your business model with an expert's eye for credit, risk, and profitability, ensuring your path to growth is financially sound and sustainable.",
      features: ["Business Modeling & Strategy", "Process Optimization", "Financial & Credit Planning", "Export Strategy Development", "Scalability Roadmaps"],
      icon: ShieldCheck,
      path: '/services/advisory',
    },
    {
      id: 'accounting',
      title: "Accounting & Control",
      shortDesc: "Accurate Accounting & Financial Control.",
      summary: "Professional financial oversight to ensure audit readiness and operational control.",
      fullDesc: "Enterprise-grade financial oversight for growing enterprises. We ensure your business maintains the strict financial discipline required for sustainable growth.",
      features: ["Remote Bookkeeping", "Taxation & Compliance", "Cash Flow Oversight", "Financial Discipline Systems", "Audit Readiness"],
      icon: Calculator,
      path: '/services/accounting',
    }
  ],

  // 5. ERP DETAILED PAGE
  // ------------------------------------------------------------------------------
  erpPage: {
    title: "BizSense ERP Solutions",
    subtitle: "ERP Designed by Experts, for Businesses",
    description: "Our ERP solutions help businesses achieve total control. From inventory to cash flow, we implement platforms that ensure scalability and regulatory compliance.",
    platforms: ['Odoo', 'ERPNext', 'Zoho (Books, Inventory, CRM, People)', 'BizSense ERP – Light (Custom)'],
    industries: [
      { name: "Importers & Distributors", icon: Truck },
      { name: "Exporters (Coir, Agro, Dehydrated Foods, Spices)", icon: Globe },
      { name: "Vehicle Traders", icon: Car },
      { name: "Retail & Wholesale", icon: ShoppingBag },
      { name: "Manufacturing & Processing", icon: Factory },
      { name: "Tourism & Services", icon: Building2 },
    ],
    modules: [
      { title: "Accounting & Finance", desc: "Manage your financial health with high-level precision." },
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

  // 6. CONTACT SECTION
  // ------------------------------------------------------------------------------
  contact: {
    title: "BizSense = Business + Sense",
    subtitle: "Ready to transform your business with professional ERP, digital growth, or strategic advisory? Let's discuss your roadmap.",
    form: {
      name: "Your Name",
      company: "Business Name",
      email: "Email Address",
      message: "How can we help?",
      button: "Request Free Consultation"
    }
  }
};
