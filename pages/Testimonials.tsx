import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Section } from '../components/Section';
import { Star, Quote, Play } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const { t } = useLanguage();

  const testimonials = [
    { textKey: 'testi_1', stars: 5, author: 'Ahmed K.', role: 'E-commerce Owner' },
    { textKey: 'testi_2', stars: 5, author: 'Sarah M.', role: 'Marketing Manager' },
    { textKey: 'testi_3', stars: 5, author: 'Faisal R.', role: 'Startup Founder' },
    { textKey: 'testi_4', stars: 5, author: 'Layla H.', role: 'Fashion Brand CEO' },
    { textKey: 'testi_5', stars: 5, author: 'Omar D.', role: 'Tech Lead' },
    { textKey: 'testi_6', stars: 5, author: 'Khaled A.', role: 'Restaurant Owner' },
  ];

  return (
    <div className="pt-20 min-h-screen bg-cosmic-dark">
      
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">
            {t('testi_title')}
          </h2>
          <p className="text-xl text-gray-400">{t('testi_subtitle')}</p>
        </div>

          {/* top client-story cards removed as requested */}
          {/* ---------------- CLIENT IMPACT (KPI highlights + case studies) ---------------- */}
          <div className="mb-24">
          

             {/* KPI highlights (styled like Stats cards) */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
               <div className="glass-2034 p-6 rounded-[2rem] relative group holographic-border">
                 <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent rounded-t-[2rem] pointer-events-none"></div>
                 <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none rounded-[2rem]"></div>
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-t-[2rem]"></div>
                 <div className="relative z-10">
                   <div className="text-sm text-orbit-blue font-semibold">نمو العائد</div>
                   <div className="text-2xl font-bold text-white">245%+</div>
                   <div className="text-xs text-gray-400 mt-2">متوسط زيادة العائد بعد العمل معنا</div>
                 </div>
               </div>

               <div className="glass-2034 p-6 rounded-[2rem] relative group holographic-border">
                 <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent rounded-t-[2rem] pointer-events-none"></div>
                 <div className="absolute inset-0 bg-gradient-to-b from-pink-500/10 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none rounded-[2rem]"></div>
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-rose-500 rounded-t-[2rem]"></div>
                 <div className="relative z-10">
                   <div className="text-sm text-orbit-blue font-semibold">زيادة الزيارات</div>
                   <div className="text-2xl font-bold text-white">120%</div>
                   <div className="text-xs text-gray-400 mt-2">نمو في الزيارات العضوية والممولة</div>
                 </div>
               </div>

               <div className="glass-2034 p-6 rounded-[2rem] relative group holographic-border">
                 <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent rounded-t-[2rem] pointer-events-none"></div>
                 <div className="absolute inset-0 bg-gradient-to-b from-blue-400/10 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none rounded-[2rem]"></div>
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-t-[2rem]"></div>
                 <div className="relative z-10">
                   <div className="text-sm text-orbit-blue font-semibold">تحويلات شهرية</div>
                   <div className="text-2xl font-bold text-white">50+ / شهر</div>
                   <div className="text-xs text-gray-400 mt-2">عملاء جدد ومؤهلون</div>
                 </div>
               </div>
             </div>

             {/* Case studies */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="rounded-3xl overflow-hidden relative group glass-2034 border border-white/10 p-6 flex flex-col h-full">
                 <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop" alt="TechCorp" className="w-full h-28 object-cover rounded-xl mb-4 flex-shrink-0" />
                 <h4 className="text-white font-bold text-lg mb-2">TechCorp — حالة نجاح</h4>
                 <p className="text-gray-300 text-sm overflow-hidden max-h-[72px]">عملنا مع TechCorp على حملة تسويق رقمي متكاملة أدت إلى نمو ملموس في العملاء والمبيعات خلال 30 يومًا.</p>
               </div>

               <div className="rounded-3xl overflow-hidden relative group glass-2034 border border-white/10 p-6 flex flex-col h-full">
                 <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop" alt="Bloom Flowers" className="w-full h-28 object-cover rounded-xl mb-4 flex-shrink-0" />
                 <h4 className="text-white font-bold text-lg mb-2">Bloom Flowers — حالة نجاح</h4>
                 <p className="text-gray-300 text-sm overflow-hidden max-h-[72px]">قُمنا بإعادة بناء العلامة التجارية وتحسين قنوات البيع، مما أدى إلى زيادة التحويلات وتقليل تكلفة الاكتساب.</p>
               </div>
             </div>
          </div>


        {/* ---------------- GRID REVIEWS (fixed card sizes, names removed) ---------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div 
              key={idx}
              className="glass-2034 p-8 rounded-[2rem] relative flex flex-col justify-between group holographic-border hover:-translate-y-1 transition-transform duration-300 h-64 lg:h-72"
            >
              {/* Internal Refraction */}
              <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white/5 to-transparent rounded-t-[2rem] pointer-events-none"></div>
              
              <Quote className="text-orbit-blue/30 w-10 h-10 mb-4 rotate-180 rtl:rotate-0" />
              
              <div className="relative z-10 w-full mb-6 overflow-hidden">
                 <p className="text-lg text-gray-200 font-light leading-relaxed italic line-clamp-6">
                   "{t(item.textKey as any)}"
                 </p>
              </div>

              <div className="pt-6 border-t border-white/5 flex items-center justify-end gap-0.5">
                {[...Array(item.stars)].map((_, i) => (
                  <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};