import React, { useState, useEffect, useRef } from 'react';

const GPSBannerForm = () => {
  const [widgetLoaded, setWidgetLoaded] = useState(false);
  const widgetRef = useRef(null);

  useEffect(() => {
    if (document.querySelector('script[src*="bzWidget.min.js"]')) return;
  
    const script1 = document.createElement('script');
    script1.src = "https://cdn.buyerzone.com/apps/widget/bzWidget.min.js";
    script1.async = true;
    script1.setAttribute('data-bzwidget', '');
    script1.setAttribute('data-bzwidget-pub-id', '59578');
    script1.setAttribute('data-bzwidget-color-palette-name', 'default');
    script1.setAttribute('data-bzwidget-category-id', '10144');
  
    const container = document.getElementById('buyerzone-widget-container');
    if (container) {
      container.appendChild(script1);
      
      script1.onload = () => {
        if (typeof bzWidget !== 'undefined') {
          bzWidget.init();
        }
      };
    }
  
    return () => {
      if (container && container.contains(script1)) {
        container.removeChild(script1);
      }
    };
  }, []);

  useEffect(() => {
    const iframe = document.createElement('iframe');
    iframe.src = 'about:blank';
    iframe.style.width = '100%';
    iframe.style.maxWidth = '500px';
    iframe.style.height = window.innerWidth < 640 ? '700px' : '650px';
    iframe.style.border = 'none';
    iframe.style.overflow = 'hidden';
    iframe.style.display = 'block';
    iframe.style.margin = '0 auto';
    
    const widgetContainer = document.getElementById('buyerzone-widget-container');
    
    if (widgetContainer) {
      widgetContainer.innerHTML = '';
      widgetContainer.appendChild(iframe);
      
      setTimeout(() => {
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        iframeDoc.open();
        iframeDoc.write(`
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Phone Systems Comparison</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                align-items: center;
                text-align-center;
              }
              #bzWidgetContainer {
                width: 100%;
                max-width: 500px;
                margin: 0 auto;
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-top:20px;
              }
              .loading {
                text-align: center;
                padding: 30px;
                width: 100%;
              }
              .spinner {
                border: 4px solid rgba(0, 0, 0, 0.1);
                border-left: 4px solid #0d6efd;
                border-radius: 50%;
                width: 40px;
                height: 40px;
                animation: spin 1s linear infinite;
                margin: 20px auto;
              }
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
              @media (max-width: 640px) {
                .loading {
                  padding: 15px;
                }
                .spinner {
                  width: 30px;
                  height: 30px;
                }
              }
            </style>
          </head>
          <body>
            <div id="bzWidgetContainer">
              <div class="loading">
                <div class="spinner"></div>
                <p>Loading comparison tool...</p>
              </div>
            </div>
            
            <script data-bzwidget
              src="https://cdn.buyerzone.com/apps/widget/bzWidget.min.js"
              data-bzwidget-pub-id="59578"
              data-bzwidget-color-palette-name="default"
              data-bzwidget-category-id="10144">
            </script>
            
            <script>
              function initBzWidget() {
                if (typeof bzWidget !== 'undefined') {
                  bzWidget.init();
                  document.getElementById('bzWidgetContainer').querySelector('.loading').style.display = 'none';
                } else {
                  setTimeout(initBzWidget, 500);
                }
              }
              
              document.addEventListener('DOMContentLoaded', function() {
                setTimeout(initBzWidget, 1000);
                
                setTimeout(function() {
                  if (typeof bzWidget === 'undefined') {
                    document.getElementById('bzWidgetContainer').innerHTML = 
                      '<p style="text-align:center; padding:20px; color:#e74c3c;">Unable to load the comparison tool. Please refresh and try again.</p>';
                  }
                }, 10000);
              });

              window.addEventListener('resize', function() {
                if (typeof bzWidget !== 'undefined' && bzWidget.refresh) {
                  bzWidget.refresh();
                }
              });
            </script>
          </body>
          </html>
        `);
        iframeDoc.close();
        
        setWidgetLoaded(true);
      }, 0);
    }
    
    const handleResize = () => {
      if (iframe) {
        iframe.style.height = window.innerWidth < 640 ? '700px' : '650px';
        iframe.style.width = '100%';
        iframe.style.maxWidth = '500px';
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="rounded-lg mx-auto w-full max-w-6xl relative overflow-hidden">
      {/* Background SVG rendered directly */}
      <svg 
        className="absolute inset-0 w-full h-full -z-10" 
        viewBox="0 0 800 600" 
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#003366', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#0066cc', stopOpacity: 1 }} />
          </linearGradient>
          <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        <rect width="800" height="600" fill="url(#bgGradient)" />
        {/* Network nodes */}
        <circle cx="100" cy="100" r="15" fill="#0d6efd" filter="url(#glow)" />
        <circle cx="250" cy="150" r="15" fill="#0d6efd" filter="url(#glow)" />
        <circle cx="400" cy="100" r="15" fill="#0d6efd" filter="url(#glow)" />
        <circle cx="550" cy="150" r="15" fill="#0d6efd" filter="url(#glow)" />
        <circle cx="700" cy="100" r="15" fill="#0d6efd" filter="url(#glow)" />
        {/* Connection lines */}
        <path 
          d="M100,100 L250,150 L400,100 L550,150 L700,100" 
          stroke="rgba(255,255,255,0.3)" 
          strokeWidth="2" 
          strokeDasharray="5,5" 
          fill="none" 
        />
        {/* Phone icons */}
        <g transform="translate(200, 300)">
          <rect x="-40" y="-80" width="80" height="160" rx="10" ry="10" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
          <rect x="-30" y="-70" width="60" height="140" rx="5" ry="5" fill="rgba(0,0,0,0.3)" />
          <circle cx="0" cy="60" r="10" fill="rgba(255,255,255,0.3)" />
          <rect x="-20" y="-50" width="40" height="30" rx="2" fill="rgba(13,110,253,0.5)" />
          <rect x="-15" y="-10" width="30" height="40" rx="2" fill="rgba(255,255,255,0.1)" />
        </g>
        <g transform="translate(400, 300)">
          <rect x="-40" y="-80" width="80" height="160" rx="10" ry="10" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
          <rect x="-30" y="-70" width="60" height="140" rx="5" ry="5" fill="rgba(0,0,0,0.3)" />
          <circle cx="0" cy="60" r="10" fill="rgba(255,255,255,0.3)" />
          <rect x="-20" y="-50" width="40" height="30" rx="2" fill="rgba(13,110,253,0.5)" />
          <rect x="-15" y="-10" width="30" height="40" rx="2" fill="rgba(255,255,255,0.1)" />
        </g>
        <g transform="translate(600, 300)">
          <rect x="-40" y="-80" width="80" height="160" rx="10" ry="10" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
          <rect x="-30" y="-70" width="60" height="140" rx="5" ry="5" fill="rgba(0,0,0,0.3)" />
          <circle cx="0" cy="60" r="10" fill="rgba(255,255,255,0.3)" />
          <rect x="-20" y="-50" width="40" height="30" rx="2" fill="rgba(13,110,253,0.5)" />
          <rect x="-15" y="-10" width="30" height="40" rx="2" fill="rgba(255,255,255,0.1)" />
        </g>
        <text x="400" y="550" fontFamily="Arial" fontSize="24" fill="white" textAnchor="middle"></text>
      </svg>
      
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-60 rounded-lg"></div>
      
      {/* Main content container with top spacing */}
      <div className="relative z-10 w-full flex flex-col items-center pt-12 pb-6 px-4 sm:py-16 sm:px-6">
        {/* Content container with consistent width */}
        <div className="w-full max-w-[800px] mx-auto">
          {/* Banner Image with increased top margin */}
          <div className="w-full text-center mb-12 flex justify-center">
            <div>
              <a href="http://www.buyerzone.com/telecom-equipment/business-phone-systems/rfqz/?publisherId=59578&publisherTypeId=1789"
                target="_self" className="block">
                <img 
                  src="http://www.buyerzone.com/telecom-equipment/business-phone-systems/banners/468x60.gif" 
                  className="mx-auto hover:opacity-95 transition-opacity duration-300 rounded-lg"
                  alt="Phone system comparison" 
                  style={{ 
                    width: '486px',
                    maxWidth: '100%',
                    height: '60px',
                    display: 'block',
                    margin: '0 auto',
                  }}
                />
              </a>
            </div>
          </div>
          
          <div className="absolute -z-10 w-full h-full top-0 left-0">
            <div className="absolute w-full h-full bg-white bg-opacity-30 rounded-lg shadow-lg 
                            border-2 border-white border-opacity-50 
                            before:content-[''] before:absolute before:inset-0 
                            before:rounded-lg before:border-2 before:border-white before:border-opacity-30 
                            before:pointer-events-none"></div>
          </div>

          {/* Centered single column layout */}
          <div className="w-full flex flex-col md:flex-row items-center mt-8 gap-8">
            {/* Promotional content - centered */}
            <div className="w-full max-w-[500px] bg-white bg-opacity-80 p-8 rounded-lg shadow-md border border-blue-100 text-center mb-8 md:mb-0">
              <h1 className="text-3xl font-bold text-blue-800 mb-6">Need a Phone System?</h1>
              <h2 className="text-2xl font-bold text-blue-700 mb-6">Compare Business Communication Solutions – 100% Free!</h2>
              <p className="text-gray-700 mb-6 text-lg mx-auto max-w-[500px]">
                Looking for the best phone system or communication tools for your business? Just answer a few quick questions and get customized quotes from top providers.
              </p>
              
              <div className="space-y-4 mb-8 flex flex-col items-center">
                <div className="flex items-center">
                  <span className="text-green-600 text-xl mr-3">✅</span>
                  <span className="font-semibold text-lg">Fast & Easy</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 text-xl mr-3">✅</span>
                  <span className="font-semibold text-lg">100% Free</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 text-xl mr-3">✅</span>
                  <span className="font-semibold text-lg">No Obligation to Buy</span>
                </div>
              </div>
            </div>
            
            {/* Widget container - centered */}
            <div className="w-full max-w-[500px] bg-white bg-opacity-70 rounded-lg shadow-md">
              <div id="buyerzone-widget-container" className="w-full h-full rounded-lg"></div>
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default GPSBannerForm;