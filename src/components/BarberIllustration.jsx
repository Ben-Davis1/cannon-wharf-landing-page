import React from 'react'

const BarberIllustration = () => {
  return (
    <div className="relative w-80 h-80 animate-float">
      <svg
        viewBox="0 0 300 300"
        className="w-full h-full drop-shadow-2xl"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Circle */}
        <circle
          cx="150"
          cy="150"
          r="140"
          fill="url(#backgroundGradient)"
          stroke="url(#borderGradient)"
          strokeWidth="4"
          className="animate-glow-pulse"
        />
        
        {/* Body */}
        <ellipse cx="150" cy="220" rx="45" ry="60" fill="#2D1B69" />
        
        {/* Neck */}
        <rect x="135" y="180" width="30" height="25" fill="#F4C2A1" rx="15" />
        
        {/* Head */}
        <circle cx="150" cy="160" r="35" fill="#F4C2A1" />
        
        {/* Hair (Stylish Cut) */}
        <path
          d="M 115 140 Q 125 120 150 125 Q 175 120 185 140 Q 180 135 150 140 Q 120 135 115 140 Z"
          fill="#1A1A1A"
        />
        
        {/* Beard */}
        <path
          d="M 125 175 Q 135 190 150 185 Q 165 190 175 175 Q 170 180 150 182 Q 130 180 125 175 Z"
          fill="#2D1B69"
        />
        
        {/* Eyes */}
        <circle cx="140" cy="155" r="3" fill="#fff" />
        <circle cx="160" cy="155" r="3" fill="#fff" />
        <circle cx="140" cy="155" r="1.5" fill="#000" />
        <circle cx="160" cy="155" r="1.5" fill="#000" />
        
        {/* Cool Sunglasses */}
        <rect x="125" y="150" width="50" height="15" rx="7" fill="#000" opacity="0.8" />
        <rect x="127" y="152" width="20" height="11" rx="5" fill="url(#sunglassGradient)" />
        <rect x="153" y="152" width="20" height="11" rx="5" fill="url(#sunglassGradient)" />
        
        {/* Nose */}
        <ellipse cx="150" cy="165" rx="2" ry="4" fill="#E6A885" />
        
        {/* Mouth */}
        <path d="M 145 172 Q 150 175 155 172" stroke="#333" strokeWidth="2" fill="none" />
        
        {/* Tattoo on Arm */}
        <circle cx="105" cy="240" r="8" fill="none" stroke="#FF0080" strokeWidth="2" />
        <path d="M 100 240 L 110 240 M 105 235 L 105 245" stroke="#FF0080" strokeWidth="2" />
        
        {/* Arms */}
        <ellipse cx="110" cy="230" rx="15" ry="35" fill="#F4C2A1" transform="rotate(-20 110 230)" />
        <ellipse cx="190" cy="230" rx="15" ry="35" fill="#F4C2A1" transform="rotate(20 190 230)" />
        
        {/* Barber Tools */}
        {/* Scissors in right hand */}
        <g transform="translate(195, 215) rotate(15)">
          <rect x="0" y="0" width="2" height="20" fill="#C0C0C0" />
          <rect x="3" y="0" width="2" height="20" fill="#C0C0C0" />
          <circle cx="1" cy="22" r="3" fill="none" stroke="#06B6D4" strokeWidth="1" />
          <circle cx="4" cy="22" r="3" fill="none" stroke="#06B6D4" strokeWidth="1" />
        </g>
        
        {/* Comb in left hand */}
        <g transform="translate(95, 220)">
          <rect x="0" y="0" width="3" height="15" fill="#FF0080" />
          <rect x="1" y="0" width="1" height="18" fill="#FF0080" />
          <rect x="1" y="18" width="1" height="2" fill="#FF0080" />
          <rect x="1" y="21" width="1" height="2" fill="#FF0080" />
          <rect x="1" y="24" width="1" height="2" fill="#FF0080" />
        </g>
        
        {/* Apron/Shirt */}
        <rect x="120" y="195" width="60" height="50" fill="#1A1A2E" rx="5" />
        <text x="150" y="215" textAnchor="middle" fill="#FF0080" fontSize="8" fontFamily="Arial">BARBER</text>
        
        {/* Neon Glow Effects */}
        <defs>
          <linearGradient id="backgroundGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1A1A2E" />
            <stop offset="50%" stopColor="#2D1B69" />
            <stop offset="100%" stopColor="#0A0A0F" />
          </linearGradient>
          
          <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF0080" />
            <stop offset="50%" stopColor="#6B21A8" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
          
          <linearGradient id="sunglassGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF0080" opacity="0.7" />
            <stop offset="100%" stopColor="#06B6D4" opacity="0.7" />
          </linearGradient>
          
          <filter id="neonGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
      </svg>
      
      {/* Floating Elements Around Barber */}
      <div className="absolute -top-4 -right-4 text-2xl animate-bounce" style={{animationDelay: '0.5s'}}>✂️</div>
      <div className="absolute -bottom-4 -left-4 text-xl animate-bounce" style={{animationDelay: '1s'}}>💈</div>
      <div className="absolute top-1/2 -left-8 text-lg animate-bounce" style={{animationDelay: '1.5s'}}>⭐</div>
    </div>
  )
}

export default BarberIllustration