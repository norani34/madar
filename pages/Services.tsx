import React, { useState } from 'react';
import { FuturisticServices } from '../components/FuturisticServices';
import { Section } from '../components/Section';
import { useLanguage } from '../contexts/LanguageContext';
import { Check, ChevronDown, ChevronUp, Rocket, Star, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Services: React.FC = () => {
  const { t, direction } = useLanguage();

  const packages = [
    {
      title: 'pkg_basic',
      desc: 'pkg_basic_desc',
      price: '$999',
      features: ['Strategy Blueprint', 'Social Media (2 Platforms)', 'Monthly Report', 'Basic SEO'],
      icon: Rocket,
      color: 'text-blue-400',
      border: 'border-blue-500/30'
    },
    {
      title: 'pkg_pro',
      desc: 'pkg_pro_desc',
      price: '$2499',
      features: ['Advanced Strategy', 'Social Media (4 Platforms)', 'Content Creation (Video + Graphics)', 'Ads Management', 'Weekly Meetings'],
      icon: Zap,
      color: 'text-star-blue',
      border: 'border-star-blue',
      popular: true
    },
    {
      title: 'pkg_elite',
      desc: 'pkg_elite_desc',
      price: 'Custom',
      features: ['Full Branding Overhaul', 'Omnichannel Marketing', 'Dedicated Account Manager', '24/7 Priority Support', 'Crisis Management'],
      icon: Star,
      color: 'text-purple-400',
      border: 'border-purple-500/30'
    }
  ];

  const faqs = [
    { q: 'How long does it take to see results?', a: 'Marketing is a journey. While paid ads can show immediate traffic, organic growth and brand authority typically take 3-6 months to mature.' },
    { q: 'Do you offer custom packages?', a: 'Absolutely. Our mission control team will tailor a flight plan specifically for your business goals and budget.' },
    { q: 'What industries do you specialize in?', a: 'We have experience across Tech, E-commerce, Real Estate, and Healthcare. Our data-driven approach works universally.' },
    { q: 'How do we communicate?', a: 'We use Slack/WhatsApp for daily comms and Zoom/Google Meet for weekly strategy sessions. You are never left in the dark.' },
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="pt-20 min-h-screen">
      <FuturisticServices />

      {/* ---------------- PRICING / PACKAGES ---------------- */}
      <Section className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
            {t('packages_title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-orbit-blue to-transparent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <div key={idx} className={`glass-2034 rounded-[2rem] p-8 relative flex flex-col ${pkg.popular ? 'scale-105 z-10 shadow-[0_0_50px_rgba(59,130,246,0.3)]' : ''} border ${pkg.border}`}>
               
               <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 ${pkg.color} neon-icon-glow`}>
                  <pkg.icon size={32} />
               </div>

               <h3 className="text-2xl font-bold text-white font-heading mb-2">{t(pkg.title as any)}</h3>
               <p className="text-gray-400 text-sm mb-6 h-10">{t(pkg.desc as any)}</p>

               <ul className="space-y-4 mb-8 flex-grow">
                 {pkg.features.map((feat, i) => (
                   <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                      <Check size={18} className={`mt-0.5 ${pkg.color}`} />
                      <span>{feat}</span>
                   </li>
                 ))}
               </ul>

               <Link to="/contact" className={`w-full py-4 rounded-xl font-bold text-center transition-all ${pkg.popular ? 'bg-gradient-to-r from-orbit-blue to-blue-600 text-white hover:shadow-lg' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                 {t('cta_start')}
               </Link>
            </div>
          ))}
        </div>
      </Section>



    </div>
  );
};