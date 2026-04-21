import React, { useState, useEffect } from 'react';
import { NavLink as RouterLink, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { NavLink } from '../types';
import { Menu, X, Globe } from 'lucide-react';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const { t, toggleLanguage, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links: NavLink[] = [
    { key: 'home', path: '/' },
    { key: 'about', path: '/about' },
    { key: 'services', path: '/services' },
    { key: 'stats', path: '/stats' },
    { key: 'testimonials', path: '/testimonials' },
    { key: 'contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-cosmic-dark/80 backdrop-blur-xl border-b border-white/10 py-2 shadow-[0_0_20px_rgba(0,0,0,0.5)]' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <RouterLink to="/" className="flex items-center gap-2 group">
              <div className="relative">
                <div className="absolute inset-0 bg-orbit-blue blur-lg opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <Logo className="w-10 h-10 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="text-2xl font-bold font-heading text-white tracking-wider group-hover:text-star-blue transition-colors">
                {t('brandName')}
              </span>
            </RouterLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4 space-x-reverse rtl:space-x-reverse">
              {links.map((link) => (
                <RouterLink
                  key={link.key}
                  to={link.path}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 border border-transparent ${
                    isActive(link.path)
                      ? 'text-white bg-white/10 border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)]'
                      : 'text-gray-300 hover:text-white hover:bg-white/5 hover:border-white/10'
                  }`}
                >
                  {t(link.key as any)}
                </RouterLink>
              ))}
            </div>
          </div>

          {/* Language Switcher & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors px-3 py-1 rounded-full border border-white/10 hover:border-star-blue/50 hover:shadow-[0_0_10px_rgba(100,255,218,0.2)]"
            >
              <Globe size={16} />
              <span className="uppercase text-xs font-bold">{language === 'ar' ? 'EN' : 'AR'}</span>
            </button>
            <RouterLink
              to="/contact"
              className="relative overflow-hidden bg-orbit-blue text-white px-6 py-2 rounded-full text-sm font-bold shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all transform hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] group"
            >
              <span className="relative z-10">{t('cta_start')}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </RouterLink>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
             <button
              onClick={toggleLanguage}
              className="mr-4 ml-4 text-gray-300 font-bold"
            >
              {language === 'ar' ? 'EN' : 'AR'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none focus:bg-white/10"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Enhanced opacity for better readability */}
      {isOpen && (
        <div className="lg:hidden bg-cosmic-dark/95 backdrop-blur-xl border-b border-white/10 border-t border-white/5 shadow-2xl">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {links.map((link) => (
              <RouterLink
                key={link.key}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-bold transition-all ${
                  isActive(link.path)
                    ? 'text-white bg-white/10 border border-white/10'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {t(link.key as any)}
              </RouterLink>
            ))}
            <div className="mt-6">
               <RouterLink
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full block text-center bg-gradient-to-r from-orbit-blue to-purple-600 text-white px-5 py-3 rounded-xl font-bold shadow-lg"
              >
                {t('cta_start')}
              </RouterLink>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};