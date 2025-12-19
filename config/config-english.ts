
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
 * 3. Icons (like 'Layers', 'Globe') refer to specific images/symbols used.
 * ==============================================================================
 */

import { Layers, Globe, BarChart3, Calculator, ShieldCheck, Truck, ShoppingBag, Factory, Building2, Users, TrendingUp, Laptop, PieChart, Lock, Car } from 'lucide-react';
import { SiteConfig } from '../types';

export const CONFIG: SiteConfig = {

  // 1. GLOBAL COMPANY SETTINGS (Appears in Header, Footer, and Contact areas)
  // ------------------------------------------------------------------------------
  company: {
    name: "BizSense Experts",
    tagline: "Smart Business Solutions for a Digital World",
    phone: "0701-75 75 76",              // Primary display number
    phoneSecondary: "0711 75 75 76",     // Secondary display number
    email: "Bizsensexperts@gmail.com",   // Official contact email
    whatsappNumber: "94701757576",       // Phone number for the WhatsApp link (No spaces or plus)
    location: "Sri Lanka & International Markets"
  },
  
  // 2. HERO SECTION (The main top area of the homepage)
  // ------------------------------------------------------------------------------
  hero: {
    badge: "Designed by business professionals. Built for growth.", // Tiny text at the very top
    mainHeadlinePrefix: "BIZSENSE ERP", // Large bold title
    withText: "—", // Connector between headline and changing taglines
    
    // Rotating headlines below the main title
    headlines: [
      "Empowering Businesses with Innovative Solutions",
      "Empowering Businesses with Tailored ERP Systems",
      "Empowering Businesses with Strategic Digital Growth",
      "Empowering Businesses Through Global B2B Connections",
      "Empowering Businesses with Practical Financial & Strategic Advisory",
      "Empowering Businesses with Accurate Accounting & Financial Control"
    ],
    
    // The paragraph below the headlines
    description: "BizSense Experts is a multi-disciplinary business solutions company providing ERP systems, digital marketing, B2B trade services, and SME advisory to local and international businesses. With 20+ years of banking, finance, and SME consulting experience, BizSense bridges the gap between technology and real business needs. We don't just sell software — we design systems that improve profitability, control, and scalability.",
    
    // Text on the 3 main buttons
    cta: {
      consult: "Request Free Consultation",
      whatsapp: "Book a Demo",
      ai: "AI Business Strategy"
    },

    // 3. "WHY CHOOSE US" GRID (Found lower down the page)
    // ------------------------------------------------------------------------------
    whyChoose: [
      { 
        icon: ShieldCheck, 
        title: "20+ Years Experience", 
        text: "Deep understanding of finance, credit, and banking logic built-in." 
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

  // 4. MAIN SERVICES (The cards/tiles on the homepage and services page)
  // ------------------------------------------------------------------------------
  services: [
    {
      id: 'erp',
      title: "ERP Solutions (International & Local)",
      shortDesc: "ERP Designed by a Banker, for Businesses.",
      summary: "Achieve absolute control over inventory, cash flow, and reporting with systems designed by financial experts.",
      fullDesc: "Our ERP solutions help businesses control inventory, manage debtors, improve reporting, and comply with regulations. We implement world-class platforms tailored to your specific scale.",
      features: [
        "Inventory Precision & Control",
        "Debtor & Cash Flow Management",
        "Accurate Financial Reporting",
        "Scalable Operations",
        "Regulatory & Tax Compliance"
      ],
      icon: Layers,
      path: '/services/erp',
    },
    {
      id: 'marketing',
      title: "Digital Marketing & Online Growth",
      shortDesc: "Digital Transformation for SMEs.",
      summary: "Focusing on ROI-driven growth, not just vanity metrics like 'likes' or 'views'.",
      fullDesc: "BizSense Digital Marketing focuses on ROI-driven results. From high-performance websites to international SEO, we craft strategies that convert digital presence into actual business growth.",
      features: [
        "Business Website Development",
        "Local & International SEO",
        "Social Media & Meta Ads",
        "Google Ads & Content Strategy",
        "Export Market Online Promotion"
      ],
      icon: BarChart3,
      path: '/services/marketing',
    },
    {
      id: 'b2b',
      title: "B2B Trade Services (Local & International)",
      shortDesc: "B2B Trade Facilitation – Local & Global.",
      summary: "Find, connect, and trade with verified buyers and sellers in Sri Lanka and globally.",
      fullDesc: "We help businesses navigate global commerce. Connecting exporters with markets in the UK, EU, Middle East, and Asia through strategic networking and registration on global platforms.",
      features: [
        "Buyer & Seller Matching",
        "International Trade Facilitation",
        "Export Market Entry Support",
        "B2B Meetings & Introductions",
        "Trade Documentation Support"
      ],
      icon: Globe,
      path: '/services/trade',
    },
    {
      id: 'advisory',
      title: "SME & Export Advisory",
      shortDesc: "Practical SME & Strategic Consulting.",
      summary: "Expert consulting for SMEs looking to scale with financial discipline.",
      fullDesc: "We analyze your business model with a banker's eye for credit, risk, and profitability, ensuring your path to growth is financially sound and sustainable.",
      features: [
        "Business Modeling & Strategy",
        "Process Optimization",
        "Financial & Credit Planning",
        "Export Strategy Development",
        "Scalability Roadmaps"
      ],
      icon: ShieldCheck,
      path: '/services/advisory',
    },
    {
      id: 'accounting',
      title: "Accounting & Control",
      shortDesc: "Accurate Accounting & Financial Control.",
      summary: "Professional financial oversight to ensure banking and audit readiness.",
      fullDesc: "Bank-grade financial oversight for growing enterprises. We ensure your business maintains the strict financial discipline required for sustainable growth.",
      features: [
        "Remote Bookkeeping",
        "Taxation & Compliance",
        "Cash Flow Oversight",
        "Financial Discipline Systems",
        "Audit Readiness"
      ],
      icon: Calculator,
      path: '/services/accounting',
    }
  ],

  // 5. ERP DETAILED PAGE (Information specifically for the ERP sub-page)
  // ------------------------------------------------------------------------------
  erpPage: {
    title: "BizSense ERP Solutions",
    subtitle: "ERP Designed by a Banker, for Businesses",
    description: "Our ERP solutions help businesses achieve total control. From inventory to cash flow, we implement platforms that ensure scalability and regulatory compliance.",
    platforms: ['Odoo', 'ERPNext', 'Zoho (Books, Inventory, CRM, People)', 'BizSense ERP – Light (Custom)'],
    
    // Industries section on the ERP page
    industries: [
      { name: "Importers & Distributors", icon: Truck },
      { name: "Exporters (Coir, Agro, Dehydrated Foods, Spices)", icon: Globe },
      { name: "Vehicle Traders", icon: Car },
      { name: "Retail & Wholesale", icon: ShoppingBag },
      { name: "Manufacturing & Processing", icon: Factory },
      { name: "Tourism & Services", icon: Building2 },
    ],

    // Individual benefit boxes on the ERP page
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

  // 6. CONTACT SECTION (Bottom of the page and separate Contact page)
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
