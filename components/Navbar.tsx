import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Activity, Home, Users, Phone, Star } from 'lucide-react';

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
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: Users },
    { name: 'Services', path: '/services', icon: Activity },
    { name: 'Contact', path: '/contact', icon: Phone },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 border-b ${
        scrolled
          ? 'bg-matte-black/80 backdrop-blur-xl border-gold-500/10 py-2'
          : 'bg-gradient-to-b from-black/60 to-transparent border-transparent py-3 md:py-4'
      }`}
    >
      <div className="container mx-auto px-3 md:px-6 flex flex-row items-center justify-between">
        
        {/* LEFT: Navigation Buttons (Unified Desktop & Mobile) */}
        <div className="flex items-center">
          <div className="flex items-center bg-white/5 rounded-full px-2 md:px-4 py-1 border border-white/5 backdrop-blur-md shadow-lg">
            {navLinks.map((link, index) => (
              <div key={link.name} className="flex items-center">
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `relative px-2 md:px-5 py-1 text-[8px] md:text-[10px] font-sans font-bold tracking-[0.1em] md:tracking-[0.15em] uppercase transition-all duration-300 group flex items-center gap-1 md:gap-2 ${
                      isActive ? 'text-gold-400' : 'text-gray-400 hover:text-white'
                    }`
                  }
                >
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gold-500 hidden md:block">
                    <link.icon size={10} />
                  </span>
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gold-500 group-hover:w-1/2 transition-all duration-500" />
                </NavLink>
                {/* Thin Gold Divider */}
                {index < navLinks.length - 1 && (
                  <div className="h-2 md:h-3 w-[1px] bg-gold-500/20" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Logo (Unified) */}
        <NavLink to="/" className="flex items-center gap-2 md:gap-4 group relative z-50">
          <div className="flex flex-col items-end">
            <span className="text-sm md:text-2xl font-serif font-bold tracking-[0.1em] text-white group-hover:text-gold-100 transition-colors drop-shadow-md">
              BIZSENSE
            </span>
            <span className="flex items-center gap-1 text-[0.4rem] md:text-[0.6rem] text-gold-500 tracking-[0.2em] md:tracking-[0.4em] uppercase font-bold opacity-90">
              Experts <Star size={6} className="fill-gold-500" />
            </span>
          </div>
          <div className="w-6 h-6 md:w-10 md:h-10 border border-gold-500/50 flex items-center justify-center rotate-45 group-hover:rotate-0 transition-transform duration-700 ease-[0.22,1,0.36,1] bg-gradient-to-br from-gold-500/20 to-transparent backdrop-blur-sm rounded-[2px] md:rounded-sm shadow-[0_0_10px_rgba(212,165,51,0.2)] md:shadow-[0_0_20px_rgba(212,165,51,0.2)]">
            <div className="w-3 h-3 md:w-5 md:h-5 bg-gold-500 -rotate-45 group-hover:rotate-0 transition-transform duration-700 ease-out shadow-inner" />
          </div>
        </NavLink>

      </div>
    </nav>
  );
};

export default Navbar;