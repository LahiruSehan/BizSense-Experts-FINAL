import { Layers, Globe, BarChart3, Calculator, ShieldCheck, Activity, Truck, ShoppingBag, Factory, Building2, Trophy, Target, Lightbulb, Users, TrendingUp, Laptop, PieChart, Lock } from 'lucide-react';
import { ServiceType } from '../types';

export const CONFIG = {
  company: {
    name: "BizSense Experts",
    tagline: "Intelligent Business Solutions",
    phone: "0701 75 75 76",
    email: "bizsensexperts@gmail.com",
    whatsappNumber: "94701757576", // Format: CountryCodeNumber without +
    location: "Sri Lanka & Global"
  },
  
  hero: {
    badge: "Intelligent Business Solutions",
    mainHeadlinePrefix: "EMPOWERING BUSINESSES",
    headlines: [
      "Innovative Solutions",
      "Tailored ERP Systems",
      "Strategic Growth",
      "Financial Control",
      "Global Trade Power"
    ],
    description: "We are an elite consultancy firm bridging the gap between Technology and Financial Reality. Our solutions are designed by expert consultants to ensure strict financial control, inventory precision, and sustainable global growth for your enterprise.",
    cta: {
      consult: "Consult",
      whatsapp: "WhatsApp",
      ai: "AI Chat"
    },
    whyChoose: [
      { 
        icon: Globe, 
        title: "Global", 
        text: "Connecting you to international markets and verified buyers." 
      },
      { 
        icon: TrendingUp, 
        title: "Practical", 
        text: "Real-world strategies, not just theoretical advice." 
      },
      { 
        icon: Laptop, 
        title: "ERP", 
        text: "Systems engineered for total financial control." 
      },
      { 
        icon: PieChart, 
        title: "Finance", 
        text: "Precision in every transaction and audit." 
      },
      { 
        icon: Users, 
        title: "20+ Years", 
        text: "Decades of proven consultancy expertise." 
      },
      { 
        icon: Lock, 
        title: "Trusted", 
        text: "Reliable partner for long-term operational success." 
      }
    ]
  },

  services: [
    {
      id: 'erp',
      title: ServiceType.ERP,
      shortDesc: "Tailored ERP Solutions & Implementation.",
      summary: "Achieve absolute financial clarity through robust, custom-engineered software architecture designed for your specific operational needs.",
      fullDesc: "We do consultation, implementation and customization and training.",
      features: ["Consultation", "Implementation", "Customization", "Training"],
      icon: Layers,
      path: '/services/erp',
    },
    {
      id: 'b2b',
      title: ServiceType.TRADE,
      shortDesc: "Global Trade Support & Networking.",
      summary: "Facilitating complex global B2B commerce by connecting you with verified international buyers and managing logistics.",
      fullDesc: "Navigate the complexities of global commerce. We facilitate connections between buyers and sellers, handle export documentation, and provide market entry strategies for the UK, EU, and Asia.",
      features: ["Buyer Matching", "Export Documentation", "Global Market Entry", "Trade Finance Advisory"],
      icon: Globe,
      path: '/services/trade',
    },
    {
      id: 'marketing',
      title: ServiceType.MARKETING,
      shortDesc: "High ROI Digital Marketing Strategies.",
      summary: "Marketing strategies engineered for tangible revenue growth, moving beyond vanity metrics to deliver real business value.",
      fullDesc: "Move beyond vanity metrics. Our digital strategies focused on SEO, Social Media, and targeted Ad campaigns are crafted to deliver measurable Return on Investment and tangible business growth.",
      features: ["International SEO", "Performance Branding", "Lead Generation", "Content Strategy"],
      icon: BarChart3,
      path: '/services/marketing',
    },
    {
      id: 'accounting',
      title: ServiceType.ACCOUNTING,
      shortDesc: "Remote Bookkeeping & Financial Oversight.",
      summary: "Bank-grade financial oversight for SMEs, ensuring your books are maintained with strict security and compliance.",
      fullDesc: "Professional remote bookkeeping and taxation services tailored for SMEs. Our financial team ensures your books are maintained with strict security and full regulatory compliance.",
      features: ["Taxation & Compliance", "Cloud Integration", "Reconciliation", "Financial Reporting"],
      icon: Calculator,
      path: '/services/accounting',
    },
    {
      id: 'advisory',
      title: ServiceType.ADVISORY,
      shortDesc: "Strategic Business Growth Advisory.",
      summary: "Actionable strategies to scale operations sustainably, identifying bottlenecks and optimizing your business model.",
      fullDesc: "Expert consulting for small-to-medium enterprises. We analyze your business model, identify bottlenecks, and provide actionable strategies to scale your operations sustainably.",
      features: ["Business Modeling", "Process Optimization", "Financial Planning", "Growth Strategy"],
      icon: ShieldCheck,
      path: '/services/advisory',
    }
  ],

  erpPage: {
    title: "BizSense ERP Solutions",
    subtitle: "Designed by Consultants, for Businesses",
    description: "Our ERP solutions are meticulously designed to empower businesses with unparalleled control and efficiency. Leveraging insights from a top-tier consultancy perspective, we focus on real-world financial management and operational precision.",
    platforms: ['Odoo', 'ERP Next', 'Zoho', 'SAP', 'Few Locals', 'Other few-Global ERPS'],
    industries: [
      { name: "Importers & Distributors", icon: Truck },
      { name: "Exporters", icon: Globe },
      { name: "Retail & Wholesale", icon: ShoppingBag },
      { name: "Manufacturing", icon: Factory },
      { name: "Hotels & Restaurants", icon: Building2 },
    ],
    modules: [
      { title: "Accounting & Finance", desc: "Manage your financial health with precision." },
      { title: "Inventory Control", desc: "Optimize stock levels and reduce waste." },
      { title: "Sales & CRM", desc: "Enhance customer relationships and drive sales." },
      { title: "Purchasing", desc: "Streamline procurement and vendor management." },
      { title: "Debtors & Credit Control", desc: "Improve cash flow and mitigate risks." },
      { title: "Manufacturing & Costing", desc: "Accurate cost tracking and production planning." },
      { title: "Export Documentation", desc: "Simplify complex international trade paperwork." },
      { title: "HR & Payroll", desc: "Efficient human resources and salary management." },
      { title: "POS & Integrations", desc: "Seamless point-of-sale and system connectivity." },
    ]
  },

  contact: {
    title: "Let's Grow.",
    subtitle: "Ready to transform your business with innovative ERP, dynamic digital marketing, seamless B2B trade, or expert SME advisory?",
    form: {
      name: "Full Name",
      company: "Company",
      email: "Email",
      message: "Message",
      button: "Send via WhatsApp"
    }
  }
};