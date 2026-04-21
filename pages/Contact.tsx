import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Section } from '../components/Section';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-20 min-h-screen bg-cosmic-dark flex flex-col relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] animate-pulse-glow"></div>
      
      <Section className="flex-grow relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Info Side */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading neon-text">
                {t('contact_title')}
              </h2>
              <p className="text-xl text-gray-400 font-light">
                {t('contact_subtitle')}
              </p>
            </div>

            <div className="space-y-6 pt-8">
               {/* Contact Card 1 */}
               <div className="glass-2034 p-6 rounded-[2rem] flex items-center gap-6 group holographic-border relative hover:translate-x-2 transition-transform duration-500">
                  <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent rounded-t-[2rem] pointer-events-none"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-orbit-blue/10 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none rounded-[2rem]"></div>
                  
                  <div className="w-14 h-14 bg-orbit-blue/10 rounded-xl flex items-center justify-center text-orbit-blue group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(59,130,246,0.3)] neon-icon-glow relative z-10">
                     <MapPin size={24} />
                  </div>
                  <div className="relative z-10">
                     <h3 className="text-lg font-bold text-white font-heading mb-1">{t('contact')}</h3>
                     <p className="text-gray-400 group-hover:text-white transition-colors">{t('contact_address')}</p>
                  </div>
               </div>
               
               {/* Contact Card 2 */}
               <div className="glass-2034 p-6 rounded-[2rem] flex items-center gap-6 group holographic-border relative hover:translate-x-2 transition-transform duration-500">
                  <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent rounded-t-[2rem] pointer-events-none"></div>
                   <div className="absolute inset-0 bg-gradient-to-r from-star-blue/10 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none rounded-[2rem]"></div>

                  <div className="w-14 h-14 bg-star-blue/10 rounded-xl flex items-center justify-center text-star-blue group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(100,255,218,0.3)] neon-icon-glow relative z-10">
                     <Mail size={24} />
                  </div>
                  <div className="relative z-10">
                     <h3 className="text-lg font-bold text-white font-heading mb-1">{t('form_email')}</h3>
                     <p className="text-gray-400 group-hover:text-white transition-colors">hello@madar.agency</p>
                  </div>
               </div>

               {/* Contact Card 3 */}
               <div className="glass-2034 p-6 rounded-[2rem] flex items-center gap-6 group holographic-border relative hover:translate-x-2 transition-transform duration-500">
                  <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent rounded-t-[2rem] pointer-events-none"></div>
                   <div className="absolute inset-0 bg-gradient-to-r from-nebula-purple/10 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none rounded-[2rem]"></div>

                  <div className="w-14 h-14 bg-nebula-purple/10 rounded-xl flex items-center justify-center text-nebula-purple group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(139,92,246,0.3)] neon-icon-glow relative z-10">
                     <Phone size={24} />
                  </div>
                  <div className="relative z-10">
                     <h3 className="text-lg font-bold text-white font-heading mb-1">{t('contact')}</h3>
                     <p className="text-gray-400 group-hover:text-white transition-colors" dir="ltr">+123-456-7890</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Form Side - with new Glassmorphism */}
          <div className="glass-2034 p-10 rounded-[2rem] holographic-border relative group">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent rounded-t-[2rem] pointer-events-none"></div>
             {/* Corner Accents */}
             <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-white/30 rounded-tl-sm opacity-50"></div>
             <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-white/30 rounded-br-sm opacity-50"></div>
            
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
               <div className="group">
                 <label className="block text-sm font-bold text-gray-400 mb-2 group-focus-within:text-orbit-blue transition-colors">{t('form_name')}</label>
                 <input 
                    type="text" 
                    className="w-full bg-cosmic-dark/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-orbit-blue focus:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all"
                    placeholder="..."
                 />
               </div>
               <div className="group">
                 <label className="block text-sm font-bold text-gray-400 mb-2 group-focus-within:text-orbit-blue transition-colors">{t('form_email')}</label>
                 <input 
                    type="email" 
                    className="w-full bg-cosmic-dark/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-orbit-blue focus:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all"
                    placeholder="name@example.com"
                 />
               </div>
               <div className="group">
                 <label className="block text-sm font-bold text-gray-400 mb-2 group-focus-within:text-orbit-blue transition-colors">{t('form_message')}</label>
                 <textarea 
                    rows={4}
                    className="w-full bg-cosmic-dark/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-orbit-blue focus:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all"
                 ></textarea>
               </div>
               <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-orbit-blue to-blue-600 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]"
               >
                  <span>{t('form_send')}</span>
                  <Send size={18} className="rtl:rotate-180" />
               </button>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
};