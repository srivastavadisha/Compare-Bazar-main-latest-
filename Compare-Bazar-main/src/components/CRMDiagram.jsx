import React from 'react';

const CRMDiagram = () => {
  return (
    <div style={{width: "100%", height: "100vh", padding: "20px", background: "#121e2d"}}>
      <svg width="100%" height="100%" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="bg-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1e3a8a" stopOpacity="1" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="1" />
          </linearGradient>
          <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#000" floodOpacity="0.4" />
          </filter>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="title-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f97316" stopOpacity="1" />
            <stop offset="100%" stopColor="#fb923c" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="box-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f2746" stopOpacity="1" />
            <stop offset="100%" stopColor="#1e3a5f" stopOpacity="1" />
          </linearGradient>
        </defs>
        
        {/* Background with rounded corners */}
        <rect width="100%" height="100%" rx="20" ry="20" fill="url(#bg-gradient)" />
        
        {/* Decorative Elements */}
        <circle cx="100" cy="100" r="80" fill="none" stroke="#f97316" strokeOpacity="0.3" strokeWidth="20" />
        <circle cx="1100" cy="700" r="120" fill="none" stroke="#f97316" strokeOpacity="0.2" strokeWidth="15" />
        <path d="M 50,600 Q 150,550 100,700" stroke="#f97316" strokeOpacity="0.15" strokeWidth="20" fill="none" />
        
        {/* Center Title Box */}
        <rect x="300" y="40" width="600" height="140" rx="30" ry="30" fill="url(#title-gradient)" stroke="#0f2746" strokeWidth="6" filter="url(#shadow)" />
        <text x="600" y="110" fontFamily="Arial, sans-serif" fontSize="46" fontWeight="bold" textAnchor="middle" fill="#0f2746">Types of CRM Solutions</text>
        <text x="600" y="160" fontFamily="Arial, sans-serif" fontSize="32" fontWeight="bold" textAnchor="middle" fill="#0f2746">for B2B Businesses</text>
        
        {/* Connection Lines */}
        <path d="M 600,180 L 240,250" stroke="#f97316" strokeWidth="6" strokeLinecap="round" filter="url(#glow)" />
        <path d="M 600,180 L 960,250" stroke="#f97316" strokeWidth="6" strokeLinecap="round" filter="url(#glow)" />
        <path d="M 600,180 L 240,380" stroke="#f97316" strokeWidth="6" strokeLinecap="round" filter="url(#glow)" />
        <path d="M 600,180 L 960,380" stroke="#f97316" strokeWidth="6" strokeLinecap="round" filter="url(#glow)" />
        <path d="M 600,180 L 240,510" stroke="#f97316" strokeWidth="6" strokeLinecap="round" filter="url(#glow)" />
        <path d="M 600,180 L 960,510" stroke="#f97316" strokeWidth="6" strokeLinecap="round" filter="url(#glow)" />
        <path d="M 600,180 L 600,640" stroke="#f97316" strokeWidth="6" strokeLinecap="round" filter="url(#glow)" />
        
        {/* CRM Type Boxes */}
        <rect x="60" y="210" width="360" height="110" rx="20" ry="20" fill="url(#box-gradient)" stroke="#f97316" strokeWidth="5" filter="url(#shadow)" />
        <text x="95" y="270" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="#f97316">Operational CRM</text>
        <text x="95" y="300" fontFamily="Arial, sans-serif" fontSize="12" fill="#fff">Manages sales, marketing, and service automation</text>
        
        <rect x="780" y="210" width="360" height="110" rx="20" ry="20" fill="url(#box-gradient)" stroke="#f97316" strokeWidth="5" filter="url(#shadow)" />
        <text x="815" y="270" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="#f97316">Analytical CRM</text>
        <text x="815" y="300" fontFamily="Arial, sans-serif" fontSize="12" fill="#fff">Analyzes customer data and patterns</text>
        
        <rect x="60" y="340" width="360" height="110" rx="20" ry="20" fill="url(#box-gradient)" stroke="#f97316" strokeWidth="5" filter="url(#shadow)" />
        <text x="95" y="400" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="#f97316">Collaborative CRM</text>
        <text x="95" y="430" fontFamily="Arial, sans-serif" fontSize="12" fill="#fff">Facilitates cross-department communication</text>
        
        <rect x="780" y="340" width="360" height="110" rx="20" ry="20" fill="url(#box-gradient)" stroke="#f97316" strokeWidth="5" filter="url(#shadow)" />
        <text x="815" y="400" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="#f97316">Strategic CRM</text>
        <text x="815" y="430" fontFamily="Arial, sans-serif" fontSize="12" fill="#fff">Focuses on long-term customer relationships</text>
        
        <rect x="60" y="470" width="360" height="110" rx="20" ry="20" fill="url(#box-gradient)" stroke="#f97316" strokeWidth="5" filter="url(#shadow)" />
        <text x="95" y="530" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="#f97316">AI-Powered CRM</text>
        <text x="95" y="560" fontFamily="Arial, sans-serif" fontSize="12" fill="#fff">Uses ML for insights and automation</text>
        
        <rect x="780" y="470" width="360" height="110" rx="20" ry="20" fill="url(#box-gradient)" stroke="#f97316" strokeWidth="5" filter="url(#shadow)" />
        <text x="815" y="530" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="#f97316">Social CRM</text>
        <text x="815" y="560" fontFamily="Arial, sans-serif" fontSize="12" fill="#fff">Integrates social media platforms</text>
        
        <rect x="420" y="600" width="360" height="110" rx="20" ry="20" fill="url(#box-gradient)" stroke="#f97316" strokeWidth="5" filter="url(#shadow)" />
        <text x="455" y="660" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="#f97316">Mobile CRM</text>
        <text x="455" y="690" fontFamily="Arial, sans-serif" fontSize="12" fill="#fff">Access CRM functionality on mobile devices</text>
        
        {/* Connection Points */}
        <circle cx="600" cy="180" r="10" fill="#f97316" filter="url(#glow)" />
        <circle cx="240" cy="250" r="10" fill="#f97316" filter="url(#glow)" />
        <circle cx="960" cy="250" r="10" fill="#f97316" filter="url(#glow)" />
        <circle cx="240" cy="380" r="10" fill="#f97316" filter="url(#glow)" />
        <circle cx="960" cy="380" r="10" fill="#f97316" filter="url(#glow)" />
        <circle cx="240" cy="510" r="10" fill="#f97316" filter="url(#glow)" />
        <circle cx="960" cy="510" r="10" fill="#f97316" filter="url(#glow)" />
        <circle cx="600" cy="640" r="10" fill="#f97316" filter="url(#glow)" />
      </svg>
    </div>
  );
};

export default CRMDiagram;