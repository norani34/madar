import React, { useEffect, useState } from 'react';
import { Logo } from './Logo';

interface IntroOverlayProps {
  onFinish: () => void;
}

export const IntroOverlay: React.FC<IntroOverlayProps> = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Progress Timer
    const duration = 2500; // 2.5 seconds total load time
    const intervalTime = 20;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
      setProgress(newProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        // Start exit animation
        setTimeout(() => {
          setIsExiting(true);
        }, 200);
        
        // Unmount after animation
        setTimeout(() => {
            setShow(false);
            onFinish();
        }, 1200); // Wait for slide up animation
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onFinish]);

  if (!show) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-cosmic-dark flex flex-col items-center justify-center transition-transform duration-[1000ms] cubic-bezier(0.76, 0, 0.24, 1) ${isExiting ? '-translate-y-full' : 'translate-y-0'}`}
    >
        {/* Background Effects inside Intro */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orbit-blue/10 rounded-full blur-[100px] animate-pulse-glow pointer-events-none"></div>

        <div className={`relative z-10 flex flex-col items-center transition-opacity duration-500 ${isExiting ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}>
            
            {/* Logo Container */}
            <div className="relative mb-8">
                <div className="absolute inset-0 bg-white/10 blur-2xl rounded-full scale-150 animate-pulse"></div>
                <Logo className="w-24 h-24 md:w-32 md:h-32 text-white relative z-10 drop-shadow-[0_0_20px_rgba(100,255,218,0.5)]" />
            </div>

            {/* Brand Name */}
            <h1 className="text-4xl md:text-5xl font-black text-white font-heading tracking-widest mb-2">
                MADAR
            </h1>
            <p className="text-star-blue text-sm md:text-base tracking-[0.3em] uppercase mb-12 opacity-80">
                Marketing Agency
            </p>

            {/* Progress Bar & Counter */}
            <div className="w-64 relative">
                <div className="flex justify-between text-xs text-gray-400 font-bold mb-2 font-mono">
                    <span>LOADING ORBIT</span>
                    <span>{progress}%</span>
                </div>
                
                {/* Bar Background */}
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    {/* Filling Bar */}
                    <div 
                        className="h-full bg-gradient-to-r from-orbit-blue to-star-blue shadow-[0_0_10px_#60A5FA]"
                        style={{ width: `${progress}%`, transition: 'width 0.1s linear' }}
                    ></div>
                </div>
            </div>
        </div>
        
        {/* Bottom Tagline */}
        <div className={`absolute bottom-10 text-gray-500 text-xs tracking-widest uppercase transition-opacity duration-500 ${isExiting ? 'opacity-0' : 'opacity-50'}`}>
            Prepare for Liftoff
        </div>
    </div>
  );
};