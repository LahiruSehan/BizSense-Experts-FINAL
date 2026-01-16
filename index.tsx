// BizSense Experts Core Engine - Refined Grid Portfolio Build
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

// 1. ROTATING HEADLINES
const HEADLINES = [
  "Digital Marketing",
  "Tailored ERP Systems",
  "Strategic Digital Growth",
  "Global B2B Connections",
  "Financial Advisory",
  "Innovative Solutions"
];
let hIdx = 0;
const hEl = document.getElementById('rotating-headline');
setInterval(() => {
  if (!hEl) return;
  hEl.classList.add('opacity-0', 'translate-y-4');
  setTimeout(() => {
    hIdx = (hIdx + 1) % HEADLINES.length;
    hEl.textContent = HEADLINES[hIdx];
    hEl.classList.remove('opacity-0', 'translate-y-4');
  }, 500);
}, 3500);

// 2. PORTFOLIO DATA
const PORTFOLIO = [
  // ERP
  { id: 1, cat: 'ERP', title: 'BizSense Statement Generator', client: 'ERP Automation', img: 'https://i.ibb.co/fzZHqXhm/Chat-GPT-Image-Jan-11-2026-04-46-39-PM.png' },
  
  // Web
  { id: 2, cat: 'Web', title: 'Dream Stay Tours Website', client: 'Tourism Sector', img: 'https://i.ibb.co/b5wg2QjG/Dream-Stay-Tours-Webbsite.png', url: 'https://www.dreamstaytours.com' },
  { id: 3, cat: 'Web', title: 'BizSense Experts Website', client: 'Corporate Site', img: 'https://i.ibb.co/MkJ93wNs/Biz-Sense-Experts-Website.png', url: 'https://www.bizsenselk.com' },
  { id: 301, cat: 'Web', title: 'Shani Fashion E-Commerce', client: 'Fashion Retail', img: 'https://i.ibb.co/prhH4nj0/Chat-GPT-Image-Jan-16-2026-03-22-33-PM.png', url: 'https://lahirusehan.github.io/DEMO-E-COMMERCE-SITE/' },
  
  // Graphics
  { id: 4, cat: 'Graphics', title: 'Design 26', client: 'Social Assets', img: 'https://i.ibb.co/9Ht4Rgrd/Design-26.png' },
  { id: 5, cat: 'Graphics', title: 'Design 31', client: 'Social Assets', img: 'https://i.ibb.co/x8jrWgtZ/Design-31.png' },
  { id: 6, cat: 'Graphics', title: 'Design 34', client: 'Social Assets', img: 'https://i.ibb.co/B2Wr5LLR/Design-34.png' },
  { id: 7, cat: 'Graphics', title: 'Design 39', client: 'Social Assets', img: 'https://i.ibb.co/fdS2Fxrg/Design-39.png' },
  { id: 8, cat: 'Graphics', title: 'Design 44', client: 'Social Assets', img: 'https://i.ibb.co/YFCMtZtF/Design-44.png' },
  { id: 9, cat: 'Graphics', title: 'Design 2', client: 'Social Assets', img: 'https://i.ibb.co/G4TZxBgf/Design-2.png' },
  { id: 10, cat: 'Graphics', title: 'Design 4', client: 'Social Assets', img: 'https://i.ibb.co/Z6MkWCC7/Design-4.png' },
  { id: 11, cat: 'Graphics', title: 'Design 5', client: 'Social Assets', img: 'https://i.ibb.co/601nX4hd/Design-5.png' },
  { id: 12, cat: 'Graphics', title: 'Design 7', client: 'Social Assets', img: 'https://i.ibb.co/C54xtrKQ/Design-7.jpg' },
  { id: 13, cat: 'Graphics', title: 'Design 7 PNG', client: 'Social Assets', img: 'https://i.ibb.co/MyH9mWFm/Design-7.png' },
  { id: 14, cat: 'Graphics', title: 'Design 8', client: 'Social Assets', img: 'https://i.ibb.co/ds2cWfZq/Design-8.jpg' },
  { id: 15, cat: 'Graphics', title: 'Design 9', client: 'Social Assets', img: 'https://i.ibb.co/501bT8z/Design-9.jpg' },
  { id: 16, cat: 'Graphics', title: 'Design 19', client: 'Social Assets', img: 'https://i.ibb.co/jPqGKwsP/Design-19.png' },
  { id: 17, cat: 'Graphics', title: 'Design 20', client: 'Social Assets', img: 'https://i.ibb.co/cWbxfMt/Design-20.png' },
  
  // Marketing
  { id: 18, cat: 'Marketing', title: 'Global SEO Strategy', client: 'Export Corp', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop' },
  { id: 19, cat: 'Marketing', title: 'Lead Funnel Opt.', client: 'SME Retail', img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop' }
];

// 3. SERVICE MODAL DATA
const SERVICE_CONTENT: Record<string, string> = {
  erp: `
    <div class="max-w-4xl mx-auto py-12">
      <h2 class="text-biz-emerald text-[10px] font-black uppercase tracking-[0.4em] mb-4">Core Pillar</h2>
      <h1 class="text-4xl md:text-6xl font-display font-black text-white mb-8">ERP Solutions & Implementation</h1>
      <p class="text-xl md:text-2xl text-biz-emerald italic mb-10 border-l-4 border-biz-emerald pl-8 font-medium">"ERP Is Not Software. It Is a Business Discipline."</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-400">
        <div>
          <h3 class="text-white text-lg font-bold mb-4">Why ERP Is Critical</h3>
          <p class="mb-6 leading-relaxed">Businesses without ERP struggle with disconnected spreadsheets and hidden losses. We provide one source of truth across the organization.</p>
        </div>
        <div class="bg-white/5 p-8 rounded-3xl border border-white/5 flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-biz-emerald/10 text-biz-emerald rounded-full text-[9px] font-black uppercase">Odoo</span>
            <span class="px-3 py-1 bg-biz-emerald/10 text-biz-emerald rounded-full text-[9px] font-black uppercase">Zoho</span>
            <span class="px-3 py-1 bg-biz-emerald/10 text-biz-emerald rounded-full text-[9px] font-black uppercase">ERP Next</span>
        </div>
      </div>
    </div>`,
  b2b: `
    <div class="max-w-4xl mx-auto py-12">
      <h2 class="text-biz-emerald text-[10px] font-black uppercase tracking-[0.4em] mb-4">Global Trade</h2>
      <h1 class="text-4xl md:text-6xl font-display font-black text-white mb-8">B2B Trade & Export Support</h1>
      <p class="text-gray-400 text-lg md:text-xl mb-12 italic border-l-4 border-biz-emerald pl-8 font-medium">"We don't just introduce contacts — we prepare businesses to close deals."</p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="p-6 bg-white/5 border border-white/10 rounded-2xl text-center"><p class="text-white font-bold text-[10px] uppercase">Buyer Matching</p></div>
          <div class="p-6 bg-white/5 border border-white/10 rounded-2xl text-center"><p class="text-white font-bold text-[10px] uppercase">Export Support</p></div>
          <div class="p-6 bg-white/5 border border-white/10 rounded-2xl text-center"><p class="text-white font-bold text-[10px] uppercase">Documentation</p></div>
      </div>
    </div>`,
  marketing: `
    <div class="max-w-4xl mx-auto py-12">
      <h2 class="text-biz-emerald text-[10px] font-black uppercase tracking-[0.4em] mb-4">Growth</h2>
      <h1 class="text-4xl md:text-6xl font-display font-black text-white mb-8">Digital Marketing</h1>
      <p class="text-xl md:text-2xl text-biz-emerald italic mb-10 border-l-4 border-biz-emerald pl-8 font-medium">"Marketing Should Create Revenue — Not Just Likes."</p>
      <p class="text-gray-400 text-sm max-w-2xl">High-performance websites, international SEO, and strategic LinkedIn campaigns. We bridge the gap between operations and sales.</p>
    </div>`,
  finance: `
    <div class="max-w-4xl mx-auto py-12">
      <h2 class="text-biz-emerald text-[10px] font-black uppercase tracking-[0.4em] mb-4">Finance</h2>
      <h1 class="text-4xl md:text-6xl font-display font-black text-white mb-8">Accounting & Control</h1>
      <p class="text-xl md:text-2xl text-biz-emerald italic mb-10 border-l-4 border-biz-emerald pl-8 font-medium">"Profit Is Opinion. Cash Flow Is Reality."</p>
      <div class="space-y-4">
        <p class="text-gray-400">Cash flow forecasting, working capital optimization, and management dashboards (MIS) for real financial clarity.</p>
      </div>
    </div>`
};

// 4. PORTFOLIO ENGINE
function renderPortfolio(cat: string = 'ERP') {
  const filtered = PORTFOLIO.filter(p => p.cat === cat);
  
  return `
    <div class="py-12">
      <div class="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
        <h1 class="text-3xl md:text-5xl font-display font-black text-white uppercase tracking-tighter">Our Work</h1>
        <div class="flex flex-row flex-nowrap overflow-x-auto no-scrollbar justify-center gap-2 max-w-full px-2">
          ${['ERP', 'Web', 'Graphics', 'Marketing'].map(c => `
            <button onclick="updatePortfolio('${c}')" class="flex-none px-6 py-2 rounded-full text-[9px] font-black uppercase tracking-widest transition-all ${cat === c ? 'bg-biz-emerald text-biz-deep shadow-lg' : 'bg-white/5 text-gray-500 hover:bg-white/10'}">${c}</button>
          `).join('')}
        </div>
      </div>
      
      <!-- New Grid Presentation: 6 cols desktop, 2 cols mobile -->
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        ${filtered.map(item => `
          <div class="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-xl transition-all duration-500 hover:border-biz-emerald/40 aspect-square">
            <img 
              src="${item.img}" 
              alt="${item.title}" 
              class="w-full h-full object-cover img-loading"
              onload="this.classList.add('img-loaded');"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-left">
              <span class="text-biz-emerald text-[7px] font-black uppercase mb-1 tracking-widest">${item.cat}</span>
              <p class="text-white font-display font-bold text-[10px] uppercase tracking-tight leading-tight">${item.title}</p>
              
              ${item.cat === 'Web' && item.url ? `
                <button 
                  onclick="window.open('${item.url}', '_blank')" 
                  class="mt-3 w-full bg-biz-emerald text-biz-deep text-[8px] font-black py-2 rounded uppercase tracking-widest hover:bg-white transition-colors"
                >
                  Visit Site
                </button>
              ` : `
                <p class="text-gray-500 text-[8px] uppercase mt-1">${item.client}</p>
              `}
            </div>
          </div>
        `).join('')}
      </div>
      <p class="text-center text-gray-600 text-[8px] uppercase font-black tracking-[0.5em] mt-16 pb-12">Expert Portfolio Gallery</p>
    </div>
  `;
}

// Global Handlers
(window as any).openModal = (id: string) => {
  const modal = document.getElementById('main-modal');
  const content = document.getElementById('modal-content');
  if (modal && content) {
    if (id === 'portfolio') {
      content.innerHTML = renderPortfolio('ERP');
    } else {
      content.innerHTML = SERVICE_CONTENT[id] || '<div class="text-center py-24 text-white uppercase font-black">Content Coming Soon</div>';
    }
    modal.classList.add('modal-active');
    document.body.style.overflow = 'hidden';
  }
};

(window as any).closeModal = () => {
  const modal = document.getElementById('main-modal');
  if (modal) {
    modal.classList.remove('modal-active');
    document.body.style.overflow = 'auto';
  }
};

(window as any).updatePortfolio = (cat: string) => {
  const content = document.getElementById('modal-content');
  if (content) {
    content.innerHTML = renderPortfolio(cat);
  }
};

// Initial setup
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear().toString();
});