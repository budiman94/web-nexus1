
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-3 px-6 mx-4 mt-4 rounded-2xl' : 'bg-transparent py-6 px-8'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center font-bold text-xl text-white">
            N
          </div>
          <span className="text-xl font-heading font-bold tracking-tight text-white hidden sm:block">
            NEXUS <span className="text-blue-500">DIGITAL</span>
          </span>
        </a>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">About</a>
          <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Services</a>
          <a href="#portfolio" onClick={(e) => handleNavClick(e, 'portfolio')} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Portfolio</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-semibold transition-all shadow-lg shadow-blue-500/20">
            Get Started
          </a>
        </div>

        <button className="md:hidden text-white glass p-2 rounded-lg">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
