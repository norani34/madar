import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Section } from '../components/Section';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area, CartesianGrid } from 'recharts';
import { ArrowUpRight } from 'lucide-react';

const data = [
  { name: 'Jan', reach: 120, interaction: 80 },
  { name: 'Feb', reach: 150, interaction: 90 },
  { name: 'Mar', reach: 180, interaction: 110 },
  { name: 'Apr', reach: 240, interaction: 130 },
  { name: 'May', reach: 235, interaction: 170 }, // Matches PDF roughly
  { name: 'Jun', reach: 290, interaction: 200 },
];

const Counter = ({ end, duration = 4000, suffix = '', decimals = 0 }: { end: number, duration?: number, suffix?: string, decimals?: number }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Ease out expo function for smooth effect
      const ease = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      
      setCount(end * ease);

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isVisible]);

  return (
    <span ref={countRef}>
      {count.toLocaleString('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
};

export const Stats: React.FC = () => {
  const { t, direction } = useLanguage();

  return (
    <div className="pt-20 min-h-screen bg-cosmic-dark">
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
            {t('stats_title')}
          </h2>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Card 1: Reach */}
          <div className="glass-2034 p-6 rounded-[2rem] relative group holographic-border">
             <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent rounded-t-[2rem] pointer-events-none"></div>
             {/* Backlight Bleed */}
             <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/20 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none rounded-[2rem]"></div>
             
             {/* Internal Feature Bar */}
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-t-[2rem]"></div>
             
             <div className="relative z-10">
               <p className="text-gray-400 text-sm mb-2 font-medium">{t('stat_reach')}</p>
               <h3 className="text-3xl font-bold text-white mb-4">
                 <Counter end={235.4} decimals={1} suffix=" K" />
               </h3>
               <div className="flex items-center text-green-400 text-sm gap-1 bg-green-400/10 w-fit px-2 py-1 rounded-lg">
                  <ArrowUpRight size={14} />
                  <span>+4.2%</span>
               </div>
             </div>
          </div>

          {/* Card 2: Likes */}
          <div className="glass-2034 p-6 rounded-[2rem] relative group holographic-border">
             <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent rounded-t-[2rem] pointer-events-none"></div>
             {/* Backlight Bleed */}
             <div className="absolute inset-0 bg-gradient-to-b from-pink-500/20 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none rounded-[2rem]"></div>
             
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-rose-500 rounded-t-[2rem]"></div>
             
             <div className="relative z-10">
               <p className="text-gray-400 text-sm mb-2 font-medium">{t('stat_likes')}</p>
               <h3 className="text-3xl font-bold text-white mb-4">
                  <Counter end={17.8} decimals={1} suffix=" K" />
               </h3>
               <div className="flex items-center text-green-400 text-sm gap-1 bg-green-400/10 w-fit px-2 py-1 rounded-lg">
                  <ArrowUpRight size={14} />
                  <span>+2.7%</span>
               </div>
             </div>
          </div>

          {/* Card 3: Comments */}
          <div className="glass-2034 p-6 rounded-[2rem] relative group holographic-border">
             <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent rounded-t-[2rem] pointer-events-none"></div>
             {/* Backlight Bleed */}
             <div className="absolute inset-0 bg-gradient-to-b from-blue-400/20 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none rounded-[2rem]"></div>
             
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-t-[2rem]"></div>
             
             <div className="relative z-10">
               <p className="text-gray-400 text-sm mb-2 font-medium">{t('stat_comments')}</p>
               <h3 className="text-3xl font-bold text-white mb-4">
                  <Counter end={8950} decimals={0} />
               </h3>
               <div className="flex items-center text-green-400 text-sm gap-1 bg-green-400/10 w-fit px-2 py-1 rounded-lg">
                  <ArrowUpRight size={14} />
                  <span>+3.1%</span>
               </div>
             </div>
          </div>

           {/* Card 4: Campaigns */}
          <div className="glass-2034 p-6 rounded-[2rem] relative group holographic-border">
             <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent rounded-t-[2rem] pointer-events-none"></div>
             {/* Backlight Bleed */}
             <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none rounded-[2rem]"></div>
             
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-t-[2rem]"></div>
             
             <div className="relative z-10">
               <p className="text-gray-400 text-sm mb-2 font-medium">{t('stat_campaigns')}</p>
               <h3 className="text-3xl font-bold text-white mb-4">
                  <Counter end={93} decimals={0} suffix="+" />
               </h3>
               <div className="flex items-center text-gray-400 text-sm gap-1 w-fit px-2 py-1">
                  <span>Active Now</span>
               </div>
             </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
           {/* Area Chart */}
           <div className="glass-2034 p-6 md:p-8 rounded-[2rem] holographic-border relative group">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent rounded-t-[2rem] pointer-events-none"></div>
              {/* Corner Accents */}
              <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-white/30 rounded-tl-sm opacity-50"></div>
              <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-white/30 rounded-br-sm opacity-50"></div>

              <h3 className="text-xl font-bold text-white mb-6 font-heading text-center lg:text-start relative z-10">{t('service_analysis')} - {t('stat_reach')}</h3>
              <div className="h-[300px] w-full relative z-10" dir="ltr"> {/* Force LTR for Charts */}
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="colorReach" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                    <XAxis dataKey="name" stroke="#94a3b8" tickLine={false} axisLine={false} />
                    <YAxis stroke="#94a3b8" tickLine={false} axisLine={false} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', borderColor: 'rgba(59, 130, 246, 0.5)', color: '#fff', borderRadius: '12px', backdropFilter: 'blur(10px)' }}
                      itemStyle={{ color: '#fff' }}
                    />
                    <Area type="monotone" dataKey="reach" stroke="#3B82F6" fillOpacity={1} fill="url(#colorReach)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
           </div>

           {/* Bar Chart */}
           <div className="glass-2034 p-6 md:p-8 rounded-[2rem] holographic-border relative group">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent rounded-t-[2rem] pointer-events-none"></div>
              {/* Corner Accents */}
              <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-white/30 rounded-tl-sm opacity-50"></div>
              <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-white/30 rounded-br-sm opacity-50"></div>

              <h3 className="text-xl font-bold text-white mb-6 font-heading text-center lg:text-start relative z-10">{t('stat_likes')} vs {t('stat_comments')}</h3>
              <div className="h-[300px] w-full relative z-10" dir="ltr">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                    <XAxis dataKey="name" stroke="#94a3b8" tickLine={false} axisLine={false} />
                    <YAxis stroke="#94a3b8" tickLine={false} axisLine={false} />
                    <Tooltip cursor={{fill: 'rgba(255,255,255,0.05)'}} contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', borderColor: 'rgba(59, 130, 246, 0.5)', color: '#fff', borderRadius: '12px', backdropFilter: 'blur(10px)' }} />
                    <Bar dataKey="interaction" fill="#64FFDA" radius={[4, 4, 0, 0]} barSize={30} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
           </div>
        </div>
      </Section>
    </div>
  );
};