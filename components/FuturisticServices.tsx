import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Section } from '../components/Section';
import { Megaphone, PenTool, BarChart3, Palette, Layers, Users, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FuturisticServicesProps {
  limit?: number;
}

export const FuturisticServices: React.FC<FuturisticServicesProps> = ({ limit }) => {
  const { t, direction } = useLanguage();
  const Arrow = direction === 'rtl' ? ArrowLeft : ArrowRight;

  const services = [
    {
      icon: Megaphone,
      titleKey: 'service_marketing',
      descKey: 'service_marketing_desc',
      color: '#64FFDA', // Neon Cyan
      gradient: 'from-[#64FFDA]/20 to-transparent',
    },
    {
      icon: Palette,
      titleKey: 'service_branding',
      descKey: 'service_branding_desc',
      color: '#3B82F6', // Orbit Blue
      gradient: 'from-[#3B82F6]/20 to-transparent',
    },
    {
      icon: PenTool,
      titleKey: 'service_content',
      descKey: 'service_content_desc',
      color: '#C084FC', // Purple
      gradient: 'from-[#C084FC]/20 to-transparent',
    },
    {
      icon: Layers,
      titleKey: 'service_ads',
      descKey: 'service_ads_desc',
      color: '#F472B6', // Pink
      gradient: 'from-[#F472B6]/20 to-transparent',
    },
    {
      icon: Users,
      titleKey: 'service_social',
      descKey: 'service_social_desc',
      color: '#F59E0B', // Amber
      gradient: 'from-[#F59E0B]/20 to-transparent',
    },
    {
      icon: BarChart3,
      titleKey: 'service_analysis',
      descKey: 'service_analysis_desc',
      color: '#4ADE80', // Green
      gradient: 'from-[#4ADE80]/20 to-transparent',
    },
  ];

  const displayServices = limit ? services.slice(0, limit) : services;

  return (
    <div className="relative py-24 overflow-hidden">
      
      {/* --- BACKGROUND IMAGE LAYER --- */}
      <div className="absolute inset-0 z-0">
        <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed"
            style={{ 
                // Background image to demonstrate frosted glass effect
                backgroundImage: `url('https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=2070&auto=format&fit=crop')`,
            }}
        ></div>
        {/* Dark overlay to ensure text readability behind the glass */}
        <div className="absolute inset-0 bg-cosmic-dark/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-cosmic-dark via-transparent to-cosmic-dark"></div>
      </div>

      {/* --- LIGHT TRAILS & EFFECTS LAYER --- */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orbit-blue/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-glow z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-nebula-purple/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-glow z-0 pointer-events-none" style={{ animationDelay: '2s' }}></div>
      
      {/* Connecting Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-30 z-0">
         <svg className="w-full h-full">
            <defs>
               <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="transparent" />
                  <stop offset="50%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="transparent" />
               </linearGradient>
            </defs>
            <path d="M0,100 Q400,300 800,100 T1600,300" fill="none" stroke="url(#lineGrad)" strokeWidth="1" className="animate-pulse" />
         </svg>
      </div>

      <Section className="relative z-10">
        <div className="text-center mb-20 relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4 font-heading tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
             <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-gray-400 pb-2">
                {t('services_title')}
             </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-star-blue to-transparent mx-auto rounded-full shadow-[0_0_10px_#64FFDA]"></div>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 ${limit ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-8 relative z-10`}>
          {displayServices.map((service, idx) => (
            <div 
              key={idx}
              className="glass-2034 rounded-[2rem] p-8 group flex flex-col items-center text-center relative holographic-border"
            >
              {/* Internal Refraction Highlight */}
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent rounded-t-[2rem] pointer-events-none"></div>

              {/* Backlight Bleed Effect - shows through the frosted glass on hover */}
              <div 
                className={`absolute inset-0 bg-gradient-to-b ${service.gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-700 rounded-[2rem] pointer-events-none`}
              ></div>

              {/* Icon with 3D Translucent Neon Look */}
              <div className="relative mb-8 transform group-hover:scale-110 transition-transform duration-500">
                <div className="absolute inset-0 bg-white/5 blur-xl rounded-full"></div>
                <service.icon 
                  size={48} 
                  className="neon-icon-glow relative z-10" 
                  style={{ color: service.color, filter: `drop-shadow(0 0 10px ${service.color})` }} 
                />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 font-heading group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all drop-shadow-md leading-relaxed tracking-normal">
                {t(service.titleKey as any)}
              </h3>

              <p className="text-gray-300 font-light leading-relaxed mb-8 group-hover:text-white transition-colors relative z-10">
                {t(service.descKey as any)}
              </p>

              {/* Action Indicator */}
              <div className="mt-auto opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                 <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:underline" style={{ color: service.color }}>
                    <span>{t('cta_start')}</span>
                    <Arrow size={16} />
                 </Link>
              </div>

              {/* Decorative Corner Accents (Cyberpunk style) */}
              <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-white/30 rounded-tl-sm opacity-50"></div>
              <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-white/30 rounded-br-sm opacity-50"></div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};