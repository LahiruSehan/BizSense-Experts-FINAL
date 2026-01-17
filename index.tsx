// BizSense Experts Core Engine - V4.2 Blue Theme
import { GoogleGenAI } from "@google/genai";

// --- CONFIGURATION ---
const HEADLINES = [
  "Digital Marketing",
  "Tailored ERP Systems",
  "Global B2B Trade",
  "Financial Advisory",
  "Strategic Growth",
  "Accounting Control"
];

const SERVICE_INFO: Record<string, string> = {
  erp: `
    <div class="py-12 animate-reveal active">
      <h2 class="text-sky-400 text-[10px] font-black uppercase tracking-[0.5em] mb-4">Core Systems</h2>
      <h1 class="text-4xl md:text-7xl font-display font-black text-white mb-10 uppercase tracking-tighter">ERP Solutions</h1>
      <div class="glass-card p-10 rounded-[40px] border-l-4 border-sky-400 mb-12 bg-sky-500/5 shadow-2xl shadow-sky-500/10">
        <p class="text-xl md:text-2xl text-slate-200 italic font-medium leading-relaxed">"Systemic Control is the Foundation of Profit."</p>
      </div>
      <p class="text-slate-400 text-lg md:text-xl leading-relaxed mb-12">Achieve absolute precision in inventory, cash flow management, and real-time reporting architectures with our high-grade ERP implementations.</p>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="glass-card p-6 rounded-3xl text-center border-white/5 hover:border-sky-400/50 transition-all"><p class="text-white font-black text-xs uppercase tracking-widest">ODOO</p></div>
        <div class="glass-card p-6 rounded-3xl text-center border-white/5 hover:border-sky-400/50 transition-all"><p class="text-white font-black text-xs uppercase tracking-widest">ERPNext</p></div>
        <div class="glass-card p-6 rounded-3xl text-center border-white/5 hover:border-sky-400/50 transition-all"><p class="text-white font-black text-xs uppercase tracking-widest">Zoho</p></div>
        <div class="glass-card p-6 rounded-3xl text-center border-white/5 hover:border-sky-400/50 transition-all"><p class="text-white font-black text-xs uppercase tracking-widest">QuickBooks</p></div>
      </div>
    </div>
  `,
  b2b: `
    <div class="py-12 animate-reveal active">
      <h2 class="text-sky-400 text-[10px] font-black uppercase tracking-[0.5em] mb-4">Global Trade</h2>
      <h1 class="text-4xl md:text-7xl font-display font-black text-white mb-10 uppercase tracking-tighter">B2B Trade</h1>
      <div class="glass-card p-10 rounded-[40px] border-l-4 border-blue-600 mb-12 bg-blue-600/5">
        <p class="text-xl md:text-2xl text-slate-200 italic font-medium leading-relaxed">"Strategic market entry for global commerce."</p>
      </div>
      <p class="text-slate-400 text-lg md:text-xl leading-relaxed mb-12">Connecting verified buyers and sellers in the UK, EU, Middle East, and Asia. We help businesses navigate global commerce with ease and preparation.</p>
    </div>
  `,
  marketing: `
    <div class="py-12 animate-reveal active">
      <h2 class="text-sky-400 text-[10px] font-black uppercase tracking-[0.5em] mb-4">Growth Engine</h2>
      <h1 class="text-4xl md:text-7xl font-display font-black text-white mb-10 uppercase tracking-tighter">Marketing</h1>
      <div class="glass-card p-10 rounded-[40px] border-l-4 border-yellow-400 mb-12 bg-yellow-400/5">
        <p class="text-xl md:text-2xl text-slate-200 italic font-medium leading-relaxed">"ROI-driven strategies for actual revenue."</p>
      </div>
      <p class="text-slate-400 text-lg md:text-xl leading-relaxed mb-12">Vanity metrics don't pay bills. We focus on conversion optimization, international SEO, and high-performance branding that connects with your financials.</p>
    </div>
  `,
  finance: `
    <div class="py-12 animate-reveal active">
      <h2 class="text-sky-400 text-[10px] font-black uppercase tracking-[0.5em] mb-4">Financial Oversight</h2>
      <h1 class="text-4xl md:text-7xl font-display font-black text-white mb-10 uppercase tracking-tighter">Advisory</h1>
      <div class="glass-card p-10 rounded-[40px] border-l-4 border-sky-400 mb-12 bg-sky-400/5">
        <p class="text-xl md:text-2xl text-slate-200 italic font-medium leading-relaxed">"20+ years of professional financial advisory."</p>
      </div>
      <p class="text-slate-400 text-lg md:text-xl leading-relaxed mb-12">Strategic cash flow oversight, risk assessment, and financial control frameworks built for scalable enterprises and SMEs.</p>
    </div>
  `
};

// --- ENGINE COMPONENTS ---

// 1. Particle System
const canvas = document.getElementById('particleCanvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d')!;
let particles: any[] = [];

function resize() {
  if (!canvas) return;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

class Particle {
  x: number; y: number; size: number; spX: number; spY: number; opacity: number;
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 1.5 + 0.5;
    this.spX = (Math.random() - 0.5) * 0.25;
    this.spY = (Math.random() - 0.5) * 0.25;
    this.opacity = Math.random() * 0.2 + 0.1;
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
    // Updated to Sky Blue to match theme
    ctx.fillStyle = `rgba(56, 189, 248, ${this.opacity})`;
    ctx.fill();
  }
}

function initParticles() {
  if (!canvas) return;
  particles = Array.from({length: 120}, () => new Particle());
}

function animateParticles() {
  if (!ctx || !canvas) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => { p.update(); p.draw(); });
  requestAnimationFrame(animateParticles);
}

// 2. Headline Rotation
const rotatingTextEl = document.getElementById('rotating-text');
let headIdx = 0;

function rotateHeadline() {
  if (!rotatingTextEl) return;
  rotatingTextEl.style.opacity = '0';
  rotatingTextEl.style.transform = 'translateY(15px) scale(0.95)';
  
  setTimeout(() => {
    headIdx = (headIdx + 1) % HEADLINES.length;
    rotatingTextEl.textContent = HEADLINES[headIdx];
    rotatingTextEl.style.opacity = '1';
    rotatingTextEl.style.transform = 'translateY(0) scale(1)';
  }, 600);
}

// 3. Scroll Behavior
const navEl = document.getElementById('main-nav');
const observerOptions = { threshold: 0.1 };

const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, observerOptions);

function handleScroll() {
  const scrollPos = window.scrollY;
  if (scrollPos > 300) {
    navEl?.classList.add('visible');
  } else {
    navEl?.classList.remove('visible');
  }
}

// 4. Modal Handlers
(window as any).openServiceModal = (id: string) => {
  const modal = document.getElementById('service-modal');
  const content = document.getElementById('modal-content');
  if (modal && content) {
    content.innerHTML = SERVICE_INFO[id] || '<div class="text-center py-20 text-gray-500 uppercase font-black">Loading Portfolio...</div>';
    modal.classList.add('modal-active');
    document.body.style.overflow = 'hidden';
  }
};

(window as any).closeModal = () => {
  document.getElementById('service-modal')?.classList.remove('modal-active');
  document.body.style.overflow = 'auto';
};

// --- STARTUP ---
window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', resize);

if (canvas) {
    resize();
    initParticles();
    animateParticles();
}

setInterval(rotateHeadline, 4000);

document.querySelectorAll('.animate-reveal').forEach(el => scrollObserver.observe(el));

console.log('BizSense Blue Ultra V4.2 Active');