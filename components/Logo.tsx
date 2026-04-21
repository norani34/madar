import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Abstract Orbit/Black Hole Shape */}
      <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="8" className="opacity-80" />
      <path 
        d="M10 50 C 10 20, 90 20, 90 50 C 90 80, 10 80, 10 50" 
        stroke="currentColor" 
        strokeWidth="4" 
        fill="none"
        className="opacity-60"
        transform="rotate(-15 50 50)"
      />
      <circle cx="50" cy="50" r="10" fill="currentColor" className="opacity-100" />
      
      {/* Satellite/Particle */}
      <circle cx="85" cy="50" r="4" fill="#64FFDA">
        <animateTransform 
            attributeName="transform" 
            type="rotate" 
            from="0 50 50" 
            to="360 50 50" 
            dur="6s" 
            repeatCount="indefinite" 
        />
      </circle>
    </svg>
  );
};
