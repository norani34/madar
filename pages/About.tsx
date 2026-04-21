import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Section } from '../components/Section';
import { Rocket, Target, Eye } from 'lucide-react';

export const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-20 min-h-screen">
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 font-heading neon-text">
            {t('about_title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-orbit-blue to-transparent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image/Visual Area */}
          <div className="relative perspective-[1000px]">
             <div className="aspect-square rounded-[2rem] overflow-hidden glass-2034 border border-white/10 relative group transform rotate-y-6 hover:rotate-y-0 transition-transform duration-700 ease-out holographic-border">
                {/* Refraction Layer */}
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent rounded-t-[2rem] pointer-events-none z-20"></div>
                
                <img
                  src="/assets/image-wm.png"
                  alt="Team working"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-80 mix-blend-overlay relative z-0"
                />
                 <div className="absolute inset-0 bg-gradient-to-tr from-cosmic-blue via-transparent to-transparent opacity-90 z-10"></div>
                 
                 {/* Floating Badge */}
                 <div className="absolute bottom-8 left-8 right-8 text-white p-6 glass-2034 rounded-2xl border border-white/20 backdrop-blur-xl animate-float z-30">
                    <p className="font-heading text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-star-blue to-white">{t('brandTagline')}</p>
                 </div>
             </div>
             {/* Decorative element behind */}
             <div className="absolute -z-10 top-10 -right-10 w-full h-full border border-dashed border-white/20 rounded-[2rem] animate-spin-slow"></div>
          </div>

          {/* Text Content */}
          <div className="space-y-8">
            {/* Description Card */}
            <div className="glass-2034 p-8 rounded-[2rem] holographic-border group relative">
               <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent rounded-t-[2rem] pointer-events-none"></div>
               {/* Corner Accents */}
               <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-white/30 rounded-tl-sm opacity-50"></div>
               <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-white/30 rounded-br-sm opacity-50"></div>
               
               <p className="text-xl leading-relaxed text-gray-300 font-light relative z-10">
                {t('about_desc')}
              </p>
            </div>

            <div className="grid gap-6">
              {/* Mission Card */}
              <div className="flex gap-6 p-6 rounded-[2rem] glass-2034 holographic-border relative group hover:translate-x-2 transition-all duration-500">
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent rounded-t-[2rem] pointer-events-none"></div>
                {/* Backlight Bleed */}
                <div className="absolute inset-0 bg-gradient-to-r from-orbit-blue/20 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none rounded-[2rem]"></div>
                
                <div className="w-16 h-16 bg-orbit-blue/20 rounded-2xl flex items-center justify-center text-orbit-blue shrink-0 shadow-[0_0_20px_rgba(59,130,246,0.3)] neon-icon-glow relative z-10">
                  <Target size={32} />
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-2 font-heading">{t('about_mission')}</h3>
                  <p className="text-gray-400 leading-relaxed">{t('about_mission_text')}</p>
                </div>
              </div>

              {/* Vision Card */}
              <div className="flex gap-6 p-6 rounded-[2rem] glass-2034 holographic-border relative group hover:translate-x-2 transition-all duration-500">
                 <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent rounded-t-[2rem] pointer-events-none"></div>
                 {/* Backlight Bleed */}
                <div className="absolute inset-0 bg-gradient-to-r from-star-blue/20 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none rounded-[2rem]"></div>

                 <div className="w-16 h-16 bg-star-blue/20 rounded-2xl flex items-center justify-center text-star-blue shrink-0 shadow-[0_0_20px_rgba(100,255,218,0.3)] neon-icon-glow relative z-10">
                  <Eye size={32} />
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-2 font-heading">{t('about_vision')}</h3>
                  <p className="text-gray-400 leading-relaxed">{t('about_vision_text')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};