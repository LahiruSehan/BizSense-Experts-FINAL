// BizSense Experts Core Engine - Pure ESM
import { GoogleGenAI } from "@google/genai";

// --- CONFIGURATION & DATA ---
const HEADLINES = [
  "Digital Marketing",
  "Innovative Solutions",
  "Tailored ERP Systems",
  "Strategic Digital Growth",
  "Global B2B Connections",
  "Financial Advisory",
  "Accounting Control"
];

const SERVICE_INFO: Record<string, string> = {
  erp: `
    <div class="max-w-4xl mx-auto py-12">
      <h1 class="text-4xl md:text-6xl font-display font-black text-black mb-8 uppercase tracking-tighter">ERP Solutions</h1>
      <p class="text-xl md:text-2xl text-emerald-600 italic border-l-4 border-emerald-500 pl-8 mb-10 font-medium">"Systemic Control is the Foundation of Profit."</p>
      <p class="text-gray-600 leading-relaxed text-lg mb-8">Achieve absolute precision in inventory, cash flow management, and real-time reporting architectures with our high-grade ERP implementations.</p>
      <div class="flex flex-wrap gap-3">
        <span class="px-5 py-2 bg-emerald-100 text-emerald-700 rounded-full text-xs font-black uppercase">Odoo</span>
        <span class="px-5 py-2 bg-emerald-100 text-emerald-700 rounded-full text-xs font-black uppercase">ERPNext</span>
        <span class="px-5 py-2 bg-emerald-100 text-emerald-700 rounded-full text-xs font-black uppercase">Zoho</span>
      </div>
    </div>
  `,
  b2b: `
    <div class="max-w-4xl mx-auto py-12">
      <h1 class="text-4xl md:text-6xl font-display font-black text-black mb-8 uppercase tracking-tighter">B2B Trade</h1>
      <p class="text-xl md:text-2xl text-emerald-600 italic border-l-4 border-emerald-500 pl-8 mb-10 font-medium">"Strategic market entry for global commerce."</p>
      <p class="text-gray-600 leading-relaxed text-lg mb-8">Connecting verified buyers and sellers in the UK, EU, Middle East, and Asia. We help businesses navigate global commerce with ease.</p>
    </div>
  `,
  marketing: `
    <div class="max-w-4xl mx-auto py-12">
      <h1 class="text-4xl md:text-6xl font-display font-black text-black mb-8 uppercase tracking-tighter">Digital Growth</h1>
      <p class="text-xl md:text-2xl text-emerald-600 italic border-l-4 border-emerald-500 pl-8 mb-10 font-medium">"ROI-driven strategies for actual revenue."</p>
      <p class="text-gray-600 leading-relaxed text-lg mb-8">Vanity metrics don't pay bills. We focus on conversion optimization, international SEO, and high-performance branding.</p>
    </div>
  `,
  finance: `
    <div class="max-w-4xl mx-auto py-12">
      <h1 class="text-4xl md:text-6xl font-display font-black text-black mb-8 uppercase tracking-tighter">Finance Advisory</h1>
      <p class="text-xl md:text-2xl text-emerald-600 italic border-l-4 border-emerald-500 pl-8 mb-10 font-medium">"20+ years of professional financial advisory."</p>
      <p class="text-gray-600 leading-relaxed text-lg mb-8">Strategic cash flow oversight, risk assessment, and financial control frameworks built for scalable enterprises.</p>
    </div>
  `
};

// --- CORE ENGINE ---

// 1. Particle Background System
const canvas = document.getElementById('particleCanvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d')!;
let particles: Particle[] = [];

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

class Particle {
  x: number; y: number; size: number; spX: number; spY: number; opacity: number;
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 0.5;
    this.spX = (Math.random() - 0.5) * 0.4;
    this.spY = (Math.random() - 0.5) * 0.4;
    this.opacity = Math.random() * 0.4 + 0.1;
  }
  update() {
    this.x += this.spX;
    this.y += this.spY;
    if (this.x < 0 || this.x > canvas.width) this.spX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.spY *= -1;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(16, 185, 129, ${this.opacity})`;
    ctx.fill();
  }
}

function initParticles() {
  particles = Array.from({length: 80}, () => new Particle());
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => { p.update(); p.draw(); });
  requestAnimationFrame(animate);
}

// 2. Rotating Headline System
const rotatingTextEl = document.getElementById('rotating-text');
let headlineIdx = 0;

function updateHeadline() {
  if (!rotatingTextEl) return;
  
  // Transition Out
  rotatingTextEl.style.opacity = '0';
  rotatingTextEl.style.transform = 'translateY(15px)';
  rotatingTextEl.style.filter = 'blur(10px)';
  
  setTimeout(() => {
    headlineIdx = (headlineIdx + 1) % HEADLINES.length;
    const text = HEADLINES[headlineIdx];
    
    // Dynamic Font Scaling for Long Words
    if (text.length > 22) {
      rotatingTextEl.className = 'text-shine text-[20px] sm:text-3xl md:text-5xl lg:text-6xl font-display font-black uppercase tracking-tighter whitespace-nowrap';
    } else if (text.length > 16) {
      rotatingTextEl.className = 'text-shine text-[24px] sm:text-4xl md:text-6xl lg:text-7xl font-display font-black uppercase tracking-tighter whitespace-nowrap';
    } else {
      rotatingTextEl.className = 'text-shine text-[28px] sm:text-5xl md:text-7xl lg:text-8xl font-display font-black uppercase tracking-tighter whitespace-nowrap';
    }

    rotatingTextEl.textContent = text;
    
    // Transition In
    rotatingTextEl.style.opacity = '1';
    rotatingTextEl.style.transform = 'translateY(0)';
    rotatingTextEl.style.filter = 'blur(0)';
  }, 600);
}

// 3. Luxury Background Transition System
const luxuryBg = document.getElementById('luxuryBg');
function bgCycle() {
  if (!luxuryBg) return;
  const roll = Math.random();
  // Randomly flicker/appear for luxury "glimmer" effect
  if (roll > 0.7) {
    luxuryBg.style.opacity = (Math.random() * 0.2 + 0.15).toString();
  } else {
    luxuryBg.style.opacity = '0';
  }
  setTimeout(bgCycle, Math.random() * 6000 + 3000);
}

// 4. Global UI Handlers
(window as any).openServiceModal = (id: string) => {
  const modal = document.getElementById('service-modal');
  const content = document.getElementById('modal-content');
  if (modal && content) {
    content.innerHTML = SERVICE_INFO[id] || '<div class="text-center py-20 text-gray-400 uppercase font-black">Content Loading...</div>';
    modal.classList.add('modal-active');
    document.body.style.overflow = 'hidden';
  }
};

(window as any).closeModal = () => {
  const modal = document.getElementById('service-modal');
  if (modal) {
    modal.classList.remove('modal-active');
    document.body.style.overflow = 'auto';
  }
};

// --- START UP ---
window.addEventListener('resize', resize);
resize();
initParticles();
animate();
setInterval(updateHeadline, 4500);
setTimeout(bgCycle, 2000);

console.log('BizSense Core Architecture - Live');