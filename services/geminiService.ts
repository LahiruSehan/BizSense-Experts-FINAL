// Local "BizSense AI" Logic Engine
// This replaces the external API with a robust, keyword-weighted response system
// designed to emulate a high-end business consultant.

interface KnowledgeNode {
  triggers: string[];
  response: string;
  priority?: number; // Higher number checks first
}

const KNOWLEDGE_BASE: KnowledgeNode[] = [
  {
    triggers: ['hello', 'hi', 'greetings', 'hey', 'start', 'good morning', 'good evening'],
    response: "Greetings. I am BizSense AI, your virtual strategy consultant. I can assist you with ERP implementations, Global Trade, Digital Marketing, or Financial Control. Where shall we begin?",
    priority: 10
  },
  {
    triggers: ['price', 'cost', 'quote', 'fee', 'much', 'rates', 'pricing'],
    response: "At BizSense, we believe in bespoke value. Our solutions—whether ERP architecture or global trade facilitation—are tailored to your specific enterprise scale. I recommend scheduling a consultation with our experts to discuss a proposal fitted to your needs.",
    priority: 9
  },
  {
    triggers: ['erp', 'odoo', 'sap', 'system', 'software', 'inventory', 'stock'],
    response: "Our ERP division is our flagship offering. Unlike standard IT firms, our systems (specializing in Odoo and ERPNext) are designed by bankers to ensure strict financial control, inventory auditing, and manufacturing cost precision. We implement systems that secure your bottom line.",
    priority: 8
  },
  {
    triggers: ['marketing', 'seo', 'digital', 'ads', 'facebook', 'instagram', 'social'],
    response: "We focus exclusively on ROI-driven Digital Marketing. We move beyond 'vanity metrics' like likes and shares. Our strategies in SEO, Performance Branding, and Lead Generation are engineered to deliver tangible revenue growth and global market penetration.",
    priority: 8
  },
  {
    triggers: ['trade', 'export', 'import', 'b2b', 'global', 'buyer', 'shipping'],
    response: "Our Global Trade arm facilitates complex B2B commerce. We specialize in matching exporters with verified buyers in the UK, EU, and Asia. We also handle the intricate documentation required for seamless international logistics.",
    priority: 8
  },
  {
    triggers: ['account', 'book', 'tax', 'audit', 'finance', 'remote', 'cfo'],
    response: "We offer elite remote bookkeeping and virtual CFO services. Designed for SMEs and overseas entities, our financial team ensures your books are maintained with bank-grade security and full regulatory compliance, integrated directly with your ERP.",
    priority: 8
  },
  {
    triggers: ['contact', 'call', 'email', 'phone', 'location', 'address', 'reach'],
    response: "You may reach our senior experts directly at 0701 75 75 76 or via email at info@bizsenselk.com. Alternatively, you can use the 'Consult' button below to schedule a direct advisory session.",
    priority: 9
  },
  {
    triggers: ['who', 'about', 'company', 'bizsense', 'team'],
    response: "BizSense Experts is a premier consultancy firm bridging the gap between Technology and Financial Reality. With over 20 years of experience, we combine banking-grade financial discipline with cutting-edge software solutions to empower business growth.",
    priority: 5
  }
];

const DEFAULT_RESPONSES = [
  "That is an interesting inquiry. Could you clarify if this relates to our ERP Solutions, Marketing, or Financial Advisory?",
  "I understand. To provide the most accurate strategic advice, could you elaborate on your specific business requirement?",
  "My knowledge base is tuned to High-Level Business Strategy. Could we discuss how our ERP or Trade solutions might apply to your case?"
];

// Helper to simulate "thinking" time
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const sendMessageToGemini = async (message: string): Promise<string> => {
  // Simulate network delay for realism (1.5 to 2.5 seconds)
  await delay(1500 + Math.random() * 1000);

  const lowerMsg = message.toLowerCase();

  // 1. Check Knowledge Base
  // Sort by priority first, then find first match
  const sortedKnowledge = [...KNOWLEDGE_BASE].sort((a, b) => (b.priority || 0) - (a.priority || 0));

  for (const node of sortedKnowledge) {
    if (node.triggers.some(trigger => lowerMsg.includes(trigger))) {
      return node.response;
    }
  }

  // 2. Fallback Logic
  return DEFAULT_RESPONSES[Math.floor(Math.random() * DEFAULT_RESPONSES.length)];
};

// Keep existing export for compatibility if needed, but logic is now local
export const initializeChat = () => {
  console.log("BizSense Local AI Initialized");
};