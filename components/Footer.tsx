import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { NavLink as RouterLink } from 'react-router-dom';
import { Logo } from './Logo';
import { Instagram, Twitter, Linkedin, Mail, MapPin, Phone, ArrowRight, ArrowLeft } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t, direction } = useLanguage();
  const Arrow = direction === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <footer className="relative mt-20">
      {/* Glowing Horizon Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-orbit-blue to-transparent opacity-80 shadow-[0_0_15px_rgba(59,130,246,0.8)]"></div>
      
      <div className="bg-black/40 backdrop-blur-xl footer-gradient pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Newsletter Section - "Join the Transmission" */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16 pb-12 border-b border-white/5">
            <div className="text-center md:text-start">
               <h3 className="text-3xl font-bold text-white font-heading mb-2">{t('cta_start')}</h3>
               <p className="text-gray-400">Join our orbit for weekly updates on the galaxy of marketing.</p>
            </div>
            <div className="w-full md:w-auto">
               <div className="relative group">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full md:w-96 bg-white/5 border border-white/10 rounded-full py-4 px-6 text-white focus:outline-none focus:border-orbit-blue/50 transition-colors backdrop-blur-md"
                  />
                  <button className="absolute right-2 rtl:left-2 rtl:right-auto top-2 bg-orbit-blue hover:bg-blue-500 text-white p-2 rounded-full transition-all hover:scale-105 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                     <Arrow size={20} />
                  </button>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            
            {/* Brand Column */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Logo className="w-10 h-10 text-white" />
                <span className="text-3xl font-bold font-heading text-white">{t('brandName')}</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                {t('about_desc').substring(0, 100)}...
              </p>
              <div className="flex space-x-4 space-x-reverse rtl:space-x-reverse pt-2">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-orbit-blue hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] transition-all">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-star-blue hover:shadow-[0_0_15px_rgba(100,255,218,0.6)] hover:text-black transition-all">
                  <Twitter size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-nebula-purple hover:shadow-[0_0_15px_rgba(139,92,246,0.6)] transition-all">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold mb-6 font-heading text-lg relative inline-block">
                {t('home')}
                <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-star-blue"></span>
              </h3>
              <ul className="space-y-3">
                <li><RouterLink to="/services" className="text-gray-400 hover:text-star-blue text-sm transition-colors hover:translate-x-1 rtl:hover:-translate-x-1 block">{t('services')}</RouterLink></li>
                <li><RouterLink to="/stats" className="text-gray-400 hover:text-star-blue text-sm transition-colors hover:translate-x-1 rtl:hover:-translate-x-1 block">{t('stats')}</RouterLink></li>
                <li><RouterLink to="/about" className="text-gray-400 hover:text-star-blue text-sm transition-colors hover:translate-x-1 rtl:hover:-translate-x-1 block">{t('about')}</RouterLink></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-bold mb-6 font-heading text-lg relative inline-block">
                {t('services')}
                <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-orbit-blue"></span>
              </h3>
               <ul className="space-y-3">
                <li><span className="text-gray-400 text-sm hover:text-orbit-blue cursor-pointer transition-colors block">{t('service_marketing')}</span></li>
                <li><span className="text-gray-400 text-sm hover:text-orbit-blue cursor-pointer transition-colors block">{t('service_content')}</span></li>
                <li><span className="text-gray-400 text-sm hover:text-orbit-blue cursor-pointer transition-colors block">{t('service_branding')}</span></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-bold mb-6 font-heading text-lg relative inline-block">
                {t('contact')}
                <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-nebula-purple"></span>
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-400 text-sm group">
                  <MapPin size={18} className="text-orbit-blue shrink-0 mt-1 group-hover:text-star-blue transition-colors" />
                  <span className="group-hover:text-gray-200 transition-colors">{t('contact_address')}</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400 text-sm group">
                  <Mail size={18} className="text-orbit-blue shrink-0 group-hover:text-star-blue transition-colors" />
                  <span className="group-hover:text-gray-200 transition-colors">hello@madar.agency</span>
                </li>
                 <li className="flex items-center gap-3 text-gray-400 text-sm group">
                  <Phone size={18} className="text-orbit-blue shrink-0 group-hover:text-star-blue transition-colors" />
                  <span dir="ltr" className="group-hover:text-gray-200 transition-colors">+123-456-7890</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="text-gray-600 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} MADAR Agency. All rights reserved.
            </p>
            <div className="flex gap-6 text-gray-600">
               <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
               <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};