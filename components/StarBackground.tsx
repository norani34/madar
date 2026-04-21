import React from 'react';

export const StarBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-cosmic-dark transform-gpu">
      {/* 1. Base Background - replaced photographic stars with a soft radial gradient */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(59,130,246,0.45) 0%, rgba(2,6,23,0.9) 60%)',
        }}
      ></div>

      {/* 2. Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* 3. Deep Blue Gradient Overlay to enhance the color mood */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-black/60 mix-blend-overlay"></div>

      {/* 4. Atmospheric Glows - Reduced blur radius for mobile perf implicitly via CSS if needed, but transform:gpu helps */}
      <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-blue-600/10 rounded-full blur-[80px] md:blur-[120px] mix-blend-screen animate-pulse-glow"></div>
      
      {/* 5. Planet Horizon Effect at bottom */}
      <div className="absolute bottom-[-30%] left-1/2 -translate-x-1/2 w-[150vw] h-[70vh] bg-blue-500/10 rounded-[100%] blur-[60px] md:blur-[80px] mix-blend-screen pointer-events-none"></div>

      {/* (Stars removed) */}
      
      {/* 8. (Removed) Global noise overlay to keep background clean */}
    </div>
  );
};