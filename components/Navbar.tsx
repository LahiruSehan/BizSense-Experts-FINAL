import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
        scrolled
          ? 'bg-biz-deep/90 backdrop-blur-2xl border-b border-white/5 py-3'
          : 'bg-gradient-to-b from-biz-deep to-transparent py-5 md:py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex flex-row items-center justify-between">
        
        {/* LOGO */}
        <NavLink to="/" className="flex items-center h-8 md:h-12 group">
          <img 
            src="https://i.ibb.co/7mmBhMJ/LOGO.png" 
            alt="BizSense Experts Logo" 
            className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </NavLink>

        {/* NAVIGATION */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-[10px] font-black uppercase tracking-[0.25em] transition-all duration-300 relative group ${
                  isActive ? 'text-biz-emerald' : 'text-gray-400 hover:text-white'
                }`
              }
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-biz-emerald group-hover:w-full transition-all duration-500" />
            </NavLink>
          ))}
        </div>

        {/* CTA BUTTON */}
        <button className="hidden md:block border border-biz-emerald/40 text-biz-emerald text-[10px] font-black uppercase tracking-widest px-8 py-2.5 rounded-md hover:bg-biz-emerald hover:text-biz-deep transition-all duration-500">
          Request Consultation
        </button>

      </div>
    </nav>
  );
};

export default Navbar;