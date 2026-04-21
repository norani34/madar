import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Section } from '../components/Section';
import { ArrowRight, ArrowLeft, Rocket, Zap, Globe, Sparkles, PlayCircle, TrendingUp, Search, Map, Flag, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FuturisticServices } from '../components/FuturisticServices';

export const Home: React.FC = () => {
  const { t, direction } = useLanguage();
  const Arrow = direction === 'rtl' ? ArrowLeft : ArrowRight;

  const processSteps = [
    { icon: Search, title: 'process_step1', desc: 'process_step1_desc', color: 'text-blue-400', bg: 'bg-blue-400/10' },
    { icon: Map, title: 'process_step2', desc: 'process_step2_desc', color: 'text-purple-400', bg: 'bg-purple-400/10' },
    { icon: Rocket, title: 'process_step3', desc: 'process_step3_desc', color: 'text-pink-400', bg: 'bg-pink-400/10' },
    { icon: Flag, title: 'process_step4', desc: 'process_step4_desc', color: 'text-green-400', bg: 'bg-green-400/10' },
  ];

  const projects = [
    { img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop', title: 'Nebula Tech', cat: 'Branding' },
    { img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop', title: 'Solar Energy', cat: 'Marketing' },
    { img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop', title: 'Cosmos App', cat: 'Development' },
  ];

  return (
    <div className="min-h-screen">
      {/* ---------------- HERO SECTION ---------------- */}
      <div className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pb-10 pt-24 md:pt-36 lg:pt-40">
        
        {/* StarBackground handles the global space ambiance */}
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT COLUMN: Content */}
          <div className="text-center lg:text-start order-2 lg:order-1">
             {/* Glowing Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-star-blue/30 bg-star-blue/10 backdrop-blur-md mb-6 animate-fade-in-up shadow-[0_0_15px_rgba(100,255,218,0.15)] mx-auto lg:mx-0">
              <Sparkles size={14} className="text-star-blue animate-pulse" />
              <span className="text-star-blue text-xs font-bold tracking-[0.2em] uppercase">{t('brandTagline')}</span>
            </div>

            <h1 className="font-black font-heading text-white mb-6 drop-shadow-2xl">
              <div className="flex items-baseline justify-center lg:justify-start gap-6 flex-wrap leading-tight">
                <span className="text-4xl md:text-5xl lg:text-6xl tracking-tight">{t('brandName')}</span>
                <span className="text-3xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
                  {t('hero_title')}
                </span>
              </div>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              {t('hero_subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link 
                to="/services" 
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-orbit-blue to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold text-lg rounded-full shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:shadow-[0_0_50px_rgba(59,130,246,0.6)] transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                 {t('cta_start')} <Arrow size={20} />
              </Link>
              
              <Link 
                to="/about" 
                className="w-full sm:w-auto px-8 py-4 glass-panel text-white font-bold text-lg rounded-full border border-white/20 hover:bg-white/10 transition-all hover:border-star-blue/50 flex items-center justify-center gap-2 group"
              >
                <PlayCircle size={20} className="text-star-blue group-hover:scale-110 transition-transform" />
                <span>{t('about')}</span>
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: The Visual (Telescope/Visionary) */}
          <div className="relative order-1 lg:order-2 flex justify-center items-center perspective-[1000px]">
             
             {/* Back Glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/20 rounded-full blur-[100px] animate-pulse-glow -z-10"></div>
             
             {/* Main Image Container - Styled as a Window/Portal */}
             <div className="relative z-10 w-full max-w-[600px] aspect-[4/3] md:aspect-square lg:aspect-[5/4] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] group">
                
                {/* The Image matching user's request (Silhouette with Telescope) */}
                <div className="absolute inset-0 bg-gradient-to-t from-cosmic-dark via-transparent to-transparent opacity-60 z-10"></div>
                {/* OPTIMIZATION: Reduced width URL (w=800), added lazy loading=eager (as it is LCP), and explicit size */}
                <img
                  src={`${import.meta.env.BASE_URL}assets/d4429e202109867.6680403deccea.jpg`}
                  alt="Hero visual"
                  width="800"
                  height="800"
                  loading="eager"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[2s] ease-in-out"
                />

                {/* Floating UI Card 1 (Top Left) */}
                <div className="absolute top-8 left-8 z-20 hidden md:block animate-float-delayed">
                   <div className="glass-panel p-4 rounded-2xl border border-white/20 backdrop-blur-xl flex items-center gap-4 shadow-lg">
                      <div className="w-10 h-10 rounded-full bg-star-blue/20 flex items-center justify-center text-star-blue">
                         <Globe size={20} />
                      </div>
                      <div>
                         <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Market Reach</p>
                         <p className="text-white font-bold text-lg">Global</p>
                      </div>
                   </div>
                </div>

                {/* Floating UI Card 2 (Bottom Right) */}
                <div className="absolute bottom-8 right-8 z-20 animate-float">
                   <div className="glass-panel p-5 rounded-2xl border border-white/20 backdrop-blur-xl flex flex-col gap-2 shadow-lg min-w-[160px]">
                      <div className="flex justify-between items-center mb-1">
                         <span className="text-xs text-gray-300">ROI Growth</span>
                         <TrendingUp size={16} className="text-green-400" />
                      </div>
                      <div className="text-2xl font-bold text-white flex items-end gap-2">
                         +245%
                         <span className="text-xs text-green-400 font-normal mb-1">this month</span>
                      </div>
                      {/* Mini chart visual */}
                      <div className="h-1 w-full bg-white/10 rounded-full mt-2 overflow-hidden">
                         <div className="h-full bg-gradient-to-r from-orbit-blue to-star-blue w-[85%]"></div>
                      </div>
                   </div>
                </div>

             </div>
             
             {/* Decorative Orbit Rings */}
             <div className="absolute inset-0 rounded-full border border-dashed border-white/10 animate-spin-slow pointer-events-none scale-125"></div>
             <div className="absolute inset-0 rounded-full border border-dashed border-white/5 animate-spin-reverse pointer-events-none scale-150"></div>
          </div>

        </div>
      </div>

      {/* ---------------- PROCESS SECTION (FLIGHT PLAN) ---------------- */}
      <Section className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
            {t('process_title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-orbit-blue to-transparent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
           {/* Connecting Line (Desktop) */}
           <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent border-t border-dashed border-white/20 z-0"></div>

           {processSteps.map((step, idx) => (
             <div key={idx} className="relative z-10 group">
                <div className={`w-24 h-24 mx-auto rounded-full ${step.bg} border border-white/10 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(0,0,0,0.3)] backdrop-blur-sm group-hover:scale-110 transition-transform duration-500`}>
                   <step.icon size={36} className={`${step.color} neon-icon-glow`} />
                </div>
                <div className="text-center glass-2034 p-6 rounded-2xl h-full border border-white/5">
                   <h3 className="text-xl font-bold text-white mb-3 font-heading">{t(step.title as any)}</h3>
                   <p className="text-gray-400 text-sm leading-relaxed">{t(step.desc as any)}</p>
                </div>
             </div>
           ))}
        </div>
      </Section>

      {/* ---------------- SERVICES SECTION (New Futuristic Design) ---------------- */}
      <FuturisticServices limit={4} />

      {/* ---------------- PORTFOLIO SECTION ---------------- */}
      <Section className="relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
           <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">{t('portfolio_title')}</h2>
              <p className="text-gray-400 max-w-xl">{t('portfolio_subtitle')}</p>
           </div>
           <Link to="/services" className="flex items-center gap-2 text-star-blue hover:text-white transition-colors uppercase tracking-widest text-sm font-bold">
              {t('view_project')} <ArrowRight size={16} className="rtl:rotate-180" />
           </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {projects.map((project, idx) => (
             <div key={idx} className="group relative rounded-[2rem] overflow-hidden aspect-[4/5] md:aspect-[3/4] cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-t from-cosmic-dark via-transparent to-transparent opacity-80 z-10"></div>
                <img src={project.img} alt={project.title} className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                
                <div className="absolute bottom-0 left-0 w-full p-8 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                   <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-star-blue text-xs font-bold uppercase tracking-wider mb-3 border border-white/10">{project.cat}</span>
                   <h3 className="text-3xl font-bold text-white font-heading mb-2">{project.title}</h3>
                   <div className="h-1 w-0 group-hover:w-full bg-orbit-blue transition-all duration-500 rounded-full"></div>
                </div>
             </div>
           ))}
        </div>
      </Section>

      {/* ---------------- FAQ SECTION (accordion style) ---------------- */}
      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-4">{t('faq_title')}</h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="space-y-4">
            {[
              { q: t('faq_q1'), a: t('faq_a1') },
              { q: t('faq_q2'), a: t('faq_a2') },
              { q: t('faq_q3'), a: t('faq_a3') },
              { q: t('faq_q4'), a: t('faq_a4') },
            ].map((faq, idx) => (
              <FaqItem key={idx} q={faq.q} a={faq.a} idx={idx} />
            ))}
          </div>
        </div>
      </Section>

    </div>
  );
};

// Local accordion item component to keep Home tidy
const FaqItem: React.FC<{ q: string; a: string; idx: number }> = ({ q, a, idx }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="glass-2034 p-4 rounded-[1rem] border border-white/5">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 text-left"
      >
        <span className="font-semibold text-white">{q}</span>
        <span className="text-gray-400">
          {open ? <ChevronUp className="text-orbit-blue" /> : <ChevronDown className="text-gray-400" />}
        </span>
      </button>

      <div className={`mt-3 text-gray-400 text-sm transition-all ${open ? 'block opacity-100' : 'hidden opacity-0'}`}>
        {a}
      </div>
    </div>
  );
};
