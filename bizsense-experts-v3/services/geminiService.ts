// Local "BizSense AI" Logic Engine
import { CONFIG } from '../config/config-english';

interface KnowledgeNode {
  triggers: string[];
  response: string;
  priority?: number;
  suggestions?: string[];
}

const KNOWLEDGE_BASE: KnowledgeNode[] = [
  {
    triggers: ['hello', 'hi', 'greetings', 'hey', 'start', 'good morning', 'good evening'],
    response: "Greetings. I am BizSense AI, your virtual strategy consultant. I can assist you with ERP implementations, Global Trade, Digital Marketing, or Financial Control. Where shall we begin?",
    priority: 10,
    suggestions: ["Tell me about ERP", "Global Trade Services", "Digital Marketing ROI"]
  },
  {
    triggers: ['price', 'cost', 'quote', 'fee', 'much', 'rates', 'pricing'],
    response: "At BizSense, we believe in bespoke value. Our solutions—whether ERP architecture or global trade facilitation—are tailored to your specific enterprise scale. I recommend scheduling a consultation with our experts to discuss a proposal fitted to your needs.",
    priority: 9,
    suggestions: ["Request a Consultation", "Contact Details", "ERP Services"]
  },
  {
    triggers: ['erp', 'odoo', 'sap', 'system', 'software', 'inventory', 'stock'],
    response: "Our ERP division is our flagship offering. Our systems (specializing in Odoo and ERPNext) are designed by expert consultants to ensure strict financial control, inventory auditing, and manufacturing cost precision. We implement systems that secure your bottom line.",
    priority: 8,
    suggestions: ["Which ERP platforms?", "Request ERP Demo", "Bookkeeping Services"]
  },
  {
    triggers: ['marketing', 'seo', 'digital', 'ads', 'facebook', 'instagram', 'social'],
    response: "We focus exclusively on ROI-driven Digital Marketing. We move beyond 'vanity metrics' like likes and shares. Our strategies in SEO, Performance Branding, and Lead Generation are engineered to deliver tangible revenue growth and global market penetration.",
    priority: 8,
    suggestions: ["SEO Services", "Lead Generation", "Global Trade"]
  },
  {
    triggers: ['trade', 'export', 'import', 'b2b', 'global', 'buyer', 'shipping'],
    response: "Our Global Trade arm facilitates complex B2B commerce. We specialize in matching exporters with verified buyers in the UK, EU, and Asia. We also handle the intricate documentation required for seamless international logistics.",
    priority: 8,
    suggestions: ["Export Documentation", "Find Buyers", "Consult an Expert"]
  },
  {
    triggers: ['account', 'book', 'tax', 'audit', 'finance', 'remote', 'cfo'],
    response: "We offer elite remote bookkeeping and virtual CFO services. Designed for SMEs, our financial team ensures your books are maintained with bank-grade security and full regulatory compliance, integrated directly with your ERP.",
    priority: 8,
    suggestions: ["Virtual CFO", "Tax Compliance", "ERP Integration"]
  },
  {
    triggers: ['contact', 'call', 'email', 'phone', 'location', 'address', 'reach'],
    response: `You may reach our senior consultants directly at ${CONFIG.company.phone} or via email at ${CONFIG.company.email}. Alternatively, you can use the 'Consult' button below to schedule a direct advisory session.`,
    priority: 9,
    suggestions: ["WhatsApp Us", "Email Us"]
  },
  {
    triggers: ['who', 'about', 'company', 'bizsense', 'team'],
    response: "BizSense Experts is a premier consultancy firm bridging the gap between Technology and Financial Reality. With over 20 years of experience, we combine financial discipline with cutting-edge software solutions to empower business growth.",
    priority: 5,
    suggestions: ["Our Services", "Why Choose BizSense?", "Contact Us"]
  }
];

const DEFAULT_RESPONSES = [
  "That is an interesting inquiry. Could you clarify if this relates to our ERP Solutions, Marketing, or Financial Advisory?",
  "I understand. To provide the most accurate strategic advice, could you elaborate on your specific business requirement?",
  "My knowledge base is tuned to High-Level Business Strategy. Could we discuss how our ERP or Trade solutions might apply to your case?"
];

const DEFAULT_SUGGESTIONS = ["Explore ERP", "Global Trade", "Marketing Strategy", "Contact Experts"];

// Helper to simulate "thinking" time
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const sendMessageToGemini = async (message: string): Promise<{ text: string, suggestions: string[] }> => {
  // Simulate network delay for realism
  await delay(1000 + Math.random() * 800);

  const lowerMsg = message.toLowerCase();

  // 1. Check Knowledge Base
  const sortedKnowledge = [...KNOWLEDGE_BASE].sort((a, b) => (b.priority || 0) - (a.priority || 0));

  for (const node of sortedKnowledge) {
    if (node.triggers.some(trigger => lowerMsg.includes(trigger))) {
      return { 
        text: node.response, 
        suggestions: node.suggestions || DEFAULT_SUGGESTIONS 
      };
    }
  }

  // 2. Fallback Logic
  return {
    text: DEFAULT_RESPONSES[Math.floor(Math.random() * DEFAULT_RESPONSES.length)],
    suggestions: DEFAULT_SUGGESTIONS
  };
};

export const initializeChat = () => {
  console.log("BizSense Local AI Initialized");
};