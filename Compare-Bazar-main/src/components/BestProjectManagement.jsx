import React, { useState, useEffect } from 'react';
import PhoneSystemCardCommon from './PhoneSystemCardCommon';
import Navbar from './Navbar';
import WideDiv from './WideDiv';
import Footer from './Footer';
import TableOfContents from './TableOfContents';
import ProjectManagementContent from './ProjectManagementContent';
import { CheckCircle, Clock, Calendar, Users, BarChart2 } from 'lucide-react';



const BestProjectManagement = () => {
  const [showMore, setShowMore] = useState(false);
  const [progress, setProgress] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  

  // Animate progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev >= 100 ? 0 : prev + 1));
    }, 50);
    return () => clearInterval(interval);
    
  }, []);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  // Brand colors
  const primaryColor = "#ff8633"; // Orange
  const secondaryColor = "#000e54";



  const systems = [
   {
      name: "Ooma Office",
      logo: "/images/ooma.png",
      bestFor: "Best for Ease of Use",
      price: "Starts at $19.95 per user/month",
      videoCapacity: "Video capacity: 100",
      support: "24/7 customer support",
      link: "https://www.ooma.com/?srsltid=AfmBOopMghJy72vEAYHkgK_7Ny9Js61zv5HdvxWmPXpeW3AhzGg_Q0cz",
      linkText: "Links to Ooma Office"
    },
    {
      name: "RingEX",
      logo: "/images/ringcentral.png",
      bestFor: "Best for Ease of Use",
      price: "Starts at $19.95 per user/month",
      videoCapacity: "Video capacity: 100",
      support: "24/7 customer support",
      link: "#",
      linkText: "Links to RingEX"
    },
    {
      name: "Zoom",
      logo: "/images/zoom.png",
      bestFor: "Video Conferencing",
      price: "Starts at $10 per user/month",
      videoCapacity: "Video capacity: 1000",
      support: "24/7 customer support",
      link: "#",
      linkText: "Links to Zoom"
    },
    {
      name: "NextivoONE",
      logo: "/images/nextiva.png",
      bestFor: "Best for Support",
      price: "Starts at $36 per user/month",
      videoCapacity: "Video capacity: 250",
      support: "24/7 customer support",
      link: "#",
      linkText: "Links to NextivoONE"
    },
    {
      name: "Vonage",
      logo: "/images/vonage.png",
      bestFor: "Best for Support",
      price: "Starts at $36 per user/month",
      videoCapacity: "Video capacity: 250",
      support: "24/7 customer support",
      link: "#",
      linkText: "Links to NextivoONE"
    },
  ];

  const contents = [
    { id: 1, title: "Introduction to Best Project Management Software", slug: "intro-project" },
    { id: 2, title: "What Is Project Management Software?", slug: "what-is-projectmanagementsoftware" },
    { id: 3, title: "How Does Project Management Software Works", slug: "projectmanagementsoftware-working" },
    { id: 4, title: "Approach of Project Management System", slug: "projectmanagementsoftware-approach" },
    { id: 5, title: "Key Features For Project Management System", slug: "project-feature" },
    { id: 6, title: "Complete Business Software Ecosystem", slug: "project-ecosystem" },
    { id: 7, title: "Future Trends in Project Management Tools", slug: "project-trends" },
    { id: 8, title: "Related Articles", slug: "project-articles" },
    { id: 9, title: "FAQs", slug: "project-faq" } ,
  ];


  // Ripple effect for buttons
  const createRipple = (event) => {
    const button = event.currentTarget;
    const ripple = document.createElement("span");
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height =` ${size}px`;
    ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${event.clientY - rect.top - size / 2}px`;
    ripple.classList.add("ripple");
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };

  const additionalText = "The project management software landscape has evolved significantly, with AI-powered automation replacing manual task tracking in many organizations. Today's project management systems offer advanced features like predictive scheduling, resource allocation algorithms, real-time collaboration tools, and comprehensive performance dashboards. These tools help teams deliver projects faster, improve cross-functional alignment, and streamline workflows. When evaluating different solutions, it's important to consider factors such as scalability, customization options, integration capabilities, and team adoption rates. Many platforms now include unified work management capabilities, bringing together task tracking, document collaboration, time management, and portfolio analytics in a single interface.";

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto p-4">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">The Best Project Management Software of 2025</h1>
  
          <p className="text-gray-800 text-lg md:text-lg mb-4">
            At <span className="text-orange-500 font-semibold">Compare Bazar</span>, we understand the importance of efficient project execution for your business. That's why we recommend the <span className="text-orange-500 font-semibold">best project management platforms</span> that provide powerful planning tools and team collaboration features. The <span className="text-orange-500 font-semibold">top project management solutions</span> offer intelligent task automation, multi-view project tracking, and real-time progress analytics to help you deliver projects successfully. Whether you're managing a small team or enterprise-level initiatives, the right project management system can transform how you plan, execute, and monitor your work.
          </p>
        </header>
  
        <section className="mb-6">
          <p className="text-gray-800 text-lg md:text-lg">
            As your projects grow in complexity, having the right management tools becomes critical. Small teams might manage with basic task lists, but as your initiatives scale, you need software that grows with you. Implementing the <span className="text-orange-500 font-semibold">best project management platform</span> can significantly enhance your ability to meet deadlines, optimize resources, and maintain visibility across all projects. At <span className="text-orange-500 font-semibold">Compare Bazar</span>, we help you find the perfect solution that aligns with your workflow, offering features like Gantt charts, Kanban boards, workload balancing, and customizable reporting.
            {showMore && (
              <span className="block mt-3">
                {additionalText} Additionally, the <span className="text-orange-500 font-semibold">best project management platforms</span> provide advanced capabilities such as risk prediction, budget tracking, client portals, and AI-assisted scheduling to optimize your project outcomes. With <span className="text-orange-500 font-semibold">Compare Bazar</span>, you can easily compare top solutions, evaluate their collaboration features, and choose the one that best fits your organizational needs. Let us guide you to the tools that will take your project delivery and team productivity to the next level.
              </span>
            )}
          </p>
          <button
            className="mt-2 text-[#000e54] font-medium flex items-center"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? 'LESS -' : 'MORE +'}
          </button>
        </section>
      {/* Responsive Grid Layout */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-6">
        {systems.map((system, index) => (
          <PhoneSystemCardCommon 
            key={index} 
            system={system} 
            createRipple={createRipple} 
            onCompareQuotesClick={() => setIsModalOpen(true)}
          />
        ))}
      </div> */}
    </div>

{/* <div className="max-w-6xl mx-auto p-4 mt-12 mb-20">
  <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden rounded-xl shadow-xl">

    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-orange-50"></div>
    
    <div className="absolute inset-0 flex items-center justify-center">
   
      <div className="relative w-full max-w-3xl">

        <div className="h-3 bg-gray-200 rounded-full w-full relative overflow-hidden">
          <div 
            className="h-full bg-orange-500 rounded-full"
            style={{
              width: '60%',
              animation: 'progress 3s ease-in-out infinite'
            }}
          ></div>
        </div>
        
        <div className="flex justify-between mt-4">
          {['Planning', 'Design', 'Development', 'Testing', 'Deployment'].map((stage, index) => (
            <div key={index} className="flex flex-col items-center">
              <div 
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  index < 3 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-600'
                }`}
                style={{
                  animation: index < 3 ? `pop 0.5s ease-out ${index * 0.5}s` : 'none',
                  animationFillMode: 'backwards'
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-xs font-medium mt-2">{stage}</span>
            </div>
          ))}
        </div>
        
        {[
          { top: '5rem', left: '10%', delay: '0s', title: 'UI Design' },
          { top: '8rem', left: '30%', delay: '0.7s', title: 'Backend API' },
          { top: '3rem', left: '60%', delay: '1.4s', title: 'Testing' },
          { top: '7rem', left: '80%', delay: '2.1s', title: 'Deployment' }
        ].map((card, index) => (
          <div 
            key={index}
            className="absolute bg-white p-3 rounded-lg shadow-lg w-24 sm:w-32"
            style={{
              top: card.top,
              left: card.left,
              animation: `float 3s ease-in-out infinite ${card.delay}`,
              zIndex: 10
            }}
          >
            <div className="h-1 w-12 bg-orange-500 mb-2 rounded"></div>
            <div className="text-xs font-bold">{card.title}</div>
            <div className="flex items-center mt-1">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div className="text-xs ml-1">In progress</div>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-300 rounded-full opacity-20"></div>
    <div className="absolute -top-10 right-10 w-40 h-40 bg-blue-400 rounded-full opacity-10"></div>
  </div>
  
  <style jsx>{`
    @keyframes progress {
      0%, 100% { width: 40%; }
      50% { width: 70%; }
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    
    @keyframes pop {
      0% { transform: scale(0); }
      70% { transform: scale(1.2); }
      100% { transform: scale(1); }
    }
  `}</style>
</div> */}

{/* <div className="max-w-6xl mx-auto p-4 mt-12 mb-16 overflow-hidden">
  <div className="relative h-80 md:h-96 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl shadow-lg">
    
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="grid grid-cols-3 md:grid-cols-5 gap-6 md:gap-12 p-6">
        {['asana', 'jira', 'monday', 'trello', 'clickup'].map((tool, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center justify-center transform transition-all duration-300 hover:scale-110 hover:shadow-xl"
            style={{ animation: `fadeIn 0.8s ease-out ${index * 0.2}s backwards` }}
          >
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-lg flex items-center justify-center" style={{ 
              backgroundColor: ['#ff5722', '#0052cc', '#ff642e', '#0079bf', '#7b68ee'][index],
            }}>
              <div className="text-white font-bold text-xl">{tool.charAt(0).toUpperCase()}</div>
            </div>
            <div className="mt-3 text-center">
              <div className="font-bold text-sm md:text-base capitalize">{tool}</div>
              <div className="text-xs text-gray-500 mt-1">{['4.7/5', '4.5/5', '4.6/5', '4.8/5', '4.7/5'][index]}</div>
            </div>
            <div className="mt-2 flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="absolute bottom-6 left-0 right-0 px-8">
      <div className="h-10 bg-white rounded-lg shadow-md flex">
        <div className="flex-1 flex items-center justify-center text-sm font-medium border-r border-gray-100">Features</div>
        <div className="flex-1 flex items-center justify-center text-sm font-medium border-r border-gray-100">Pricing</div>
        <div className="flex-1 flex items-center justify-center text-sm font-medium border-r border-gray-100">Usability</div>
        <div className="flex-1 flex items-center justify-center text-sm font-medium border-r border-gray-100">Support</div>
        <div className="flex-1 flex items-center justify-center text-sm font-medium">ROI</div>
      </div>
    </div>
    
    <div className="absolute top-4 right-4 bg-white py-1 px-3 rounded-full shadow-sm flex items-center">
      <span className="text-orange-500 font-semibold text-sm">Compare Bazar</span>
      <span className="ml-1 text-xs text-gray-500">Analysis</span>
    </div>
    
    <div className="absolute top-10 left-10 opacity-5">
      <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 24 24" strokeWidth="0.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <rect x="4" y="4" width="6" height="6" rx="1" />
        <rect x="14" y="4" width="6" height="6" rx="1" />
        <rect x="4" y="14" width="6" height="6" rx="1" />
        <rect x="14" y="14" width="6" height="6" rx="1" />
      </svg>
    </div>
  </div>
  
  <style jsx>{`
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `}</style>
</div> */}

{/* <div className="max-w-6xl mx-auto p-4 mt-8 mb-16">
  <div className="relative h-64 md:h-80 overflow-hidden rounded-xl shadow-lg">

    <div className="absolute inset-0 bg-gradient-to-r from-orange-50 via-white to-blue-50"></div>
    
    <div 
      className="absolute inset-0 flex items-center"
      style={{ animation: 'slideCarousel 30s linear infinite' }}
    >
      <div className="flex space-x-6 px-6">
        {Array(8).fill().map((_, i) => (
          <div key={i} className="flex-shrink-0 w-56 h-44 bg-white rounded-lg shadow-md p-4 flex flex-col">
            <div className="flex items-center mb-3">
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center text-white"
                style={{ backgroundColor: ['#ff8633', '#4285f4', '#34a853', '#ea4335', '#fbbc05', '#1877f2', '#7b68ee', '#ff5722'][i % 8] }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <div className="ml-3">
                <div className="font-bold">Task Management</div>
                <div className="text-xs text-gray-500">Organize & Track</div>
              </div>
            </div>
            <div className="mt-2 space-y-2">
              <div className="h-2 bg-gray-100 rounded-full w-full">
                <div 
                  className="h-full rounded-full" 
                  style={{ 
                    width: ['85%', '70%', '65%', '90%', '75%', '80%', '60%', '85%'][i % 8],
                    backgroundColor: ['#ff8633', '#4285f4', '#34a853', '#ea4335', '#fbbc05', '#1877f2', '#7b68ee', '#ff5722'][i % 8]
                  }}
                ></div>
              </div>
              <div className="h-2 bg-gray-100 rounded-full w-full">
                <div 
                  className="h-full rounded-full" 
                  style={{ 
                    width: ['75%', '90%', '80%', '65%', '85%', '70%', '75%', '60%'][i % 8],
                    backgroundColor: ['#ff8633', '#4285f4', '#34a853', '#ea4335', '#fbbc05', '#1877f2', '#7b68ee', '#ff5722'][i % 8] 
                  }}
                ></div>
              </div>
              <div className="h-2 bg-gray-100 rounded-full w-full">
                <div 
                  className="h-full rounded-full" 
                  style={{ 
                    width: ['65%', '85%', '70%', '80%', '60%', '90%', '65%', '75%'][i % 8],
                    backgroundColor: ['#ff8633', '#4285f4', '#34a853', '#ea4335', '#fbbc05', '#1877f2', '#7b68ee', '#ff5722'][i % 8]
                  }}
                ></div>
              </div>
            </div>
            <div className="mt-auto pt-3 flex justify-between items-center">
              <div className="flex -space-x-2">
                {[...Array(3)].map((_, j) => (
                  <div key={j} className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-bold">
                    {['JD', 'AB', 'SK', 'LM', 'RH', 'PJ'][j]}
                  </div>
                ))}
              </div>
              <div className="text-xs font-medium text-gray-500">Compare</div>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent"></div>
    <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent"></div>
    
    <div className="absolute bottom-4 right-4 bg-white py-1 px-3 rounded-full shadow-md flex items-center">
      <div className="mr-2 w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
        </svg>
      </div>
      <span className="text-orange-500 font-semibold text-sm">Compare Bazar</span>
    </div>
  </div>
  
  <style jsx>{`
    @keyframes slideCarousel {
      0% { transform: translateX(0); }
      100% { transform: translateX(-800px); }
    }
  `}</style>
</div> */}








    <div className="relative h-auto min-h-96 max-w-6xl mx-auto bg-gradient-to-br from-blue-50 to-orange-50 rounded-xl shadow-xl overflow-hidden p-3 sm:p-6 mb-6 sm:mb-10">
  {/* Decorative elements - smaller on mobile */}
  <div className="absolute -top-10 sm:-top-16 -right-10 sm:-right-16 w-32 sm:w-64 h-32 sm:h-64 rounded-full opacity-20" style={{ backgroundColor: secondaryColor }}></div>
  <div className="absolute -bottom-10 sm:-bottom-20 -left-10 sm:-left-20 w-40 sm:w-80 h-40 sm:h-80 rounded-full opacity-20" style={{ backgroundColor: primaryColor }}></div>
  
  {/* Title - smaller on mobile */}
  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center relative z-10 mb-4 sm:mb-8" style={{ color: secondaryColor }}>
    Best Project Management Software
  </h2>
  
  {/* Main content container */}
  <div className="relative z-10 flex justify-center">
    <div className="w-full max-w-4xl">
      
      {/* Moving timeline - simplified on mobile */}
      <div className="relative mb-12 sm:mb-20">
        {/* Timeline bar */}
        <div className="h-2 sm:h-3 bg-white bg-opacity-60 rounded-full w-full">
          <div 
            className="h-full rounded-full transition-all duration-300"
            style={{ width: `${progress}%`, backgroundColor: primaryColor }}
          ></div>
        </div>
        
        {/* Timeline milestones - compressed on mobile */}
        <div className="flex justify-between mt-1 sm:mt-2">
          {['Plan', 'Design', 'Dev', 'Test', 'Launch'].map((phase, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center"
              style={{
                transition: 'all 0.3s ease',
                transform: progress >= index * 25 ? 'translateY(0)' : 'translateY(5px)',
                opacity: progress >= index * 25 ? 1 : 0.5
              }}
            >
              <div className="w-5 h-5 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-white"
                style={{ 
                  backgroundColor: progress >= index * 25 ? primaryColor : '#CBD5E0'
                }}
              >
                {progress >= index * 25 ? 
                  <CheckCircle size={10} className="sm:hidden" /> :
                  <span className="text-xxs sm:text-xs font-bold sm:hidden">{index + 1}</span>
                }
                {progress >= index * 25 ? 
                  <CheckCircle size={16} className="hidden sm:block" /> :
                  <span className="text-xs font-bold hidden sm:block">{index + 1}</span>
                }
              </div>
              <span className="text-xxs sm:text-xs font-medium mt-1" style={{ color: secondaryColor }}>
                {index === 2 && window.innerWidth < 360 ? 'Dev' : phase}
              </span>
            </div>
          ))}
        </div>
        
        {/* Desktop floating task cards - visible only on larger screens */}
        <div className="hidden sm:block">
          {[
            { 
              left: '5%', top: '4rem', delay: '0s', 
              title: 'Task Planning', 
              icon: <Calendar size={14} style={{ color: primaryColor }} />
            },
            { 
              left: '25%', top: '7rem', delay: '0.3s', 
              title: 'Time Tracking', 
              icon: <Clock size={14} style={{ color: primaryColor }} />
            },
            { 
              left: '55%', top: '4rem', delay: '0.6s', 
              title: 'Team Collaboration', 
              icon: <Users size={14} style={{ color: primaryColor }} />
            },
            { 
              left: '80%', top: '7rem', delay: '0.9s', 
              title: 'Analytics', 
              icon: <BarChart2 size={14} style={{ color: primaryColor }} />
            }
          ].map((card, index) => (
            <div 
              key={index}
              className="absolute bg-white p-3 rounded-lg shadow-md border w-32 sm:w-40"
              style={{
                left: card.left,
                top: card.top,
                animation: `float 3s ease-in-out infinite ${card.delay}`,
                animationFillMode: 'both',
                borderColor: primaryColor,
                borderWidth: '2px',
                zIndex: 20 - index
              }}
            >
              <div className="flex items-center mb-1">
                {card.icon}
                <span className="ml-1 text-xs font-bold" style={{ color: secondaryColor }}>{card.title}</span>
              </div>
              <div className="h-1 w-12 rounded mb-1" style={{ backgroundColor: primaryColor }}></div>
              <p className="text-xs" style={{ color: secondaryColor }}>
                {index === 0 && "Plan your project roadmap"}
                {index === 1 && "Track hours & deadlines"}
                {index === 2 && "Work together seamlessly"}
                {index === 3 && "Track project metrics"}
              </p>
            </div>
          ))}
        </div>
        
        {/* Mobile task cards - extremely compact for iPhone */}
        <div className="sm:hidden mt-4 space-y-2 mb-6 ml-43 w-full">
          {[
            { 
              title: 'Task Planning', 
              icon: <Calendar size={12} style={{ color: primaryColor }} />,
              text: "Plan your project roadmap"
            },
            { 
              title: 'Time Tracking', 
              icon: <Clock size={12} style={{ color: primaryColor }} />,
              text: "Track hours & deadlines"
            },
            { 
              title: 'Team Collab', 
              icon: <Users size={12} style={{ color: primaryColor }} />,
              text: "Work together seamlessly"
            },
            { 
              title: 'Analytics', 
              icon: <BarChart2 size={12} style={{ color: primaryColor }} />,
              text: "Track project metrics"
            }
          ].map((card, index) => (
            <div 
              key={index}
              className="bg-white p-2 rounded-lg shadow-md border flex items-center"
              style={{
                borderColor: primaryColor,
                borderWidth: '1px',
                animation: `slideUp 0.5s ease-out ${index * 0.15}s`,
                animationFillMode: 'both'
              }}
            >
              <div className="mr-2 p-1 rounded flex-shrink-0">
                {card.icon}
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs font-bold truncate" style={{ color: secondaryColor }}>{card.title}</div>
                <p className="text-xs truncate" style={{ color: secondaryColor }}>{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

     {/* Features row - properly centered */}
<div className="flex justify-center w-full">
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-8 w-full max-w-md sm:max-w-2xl mx-auto">
    {[
      { percent: '85%', label: 'Productivity Increase' },
      { percent: '60%', label: 'Time Saved' },
      { percent: '95%', label: 'Customer Satisfaction' }
    ].map((stat, index) => (
      <div 
        key={index} 
        className="bg-white bg-opacity-80 backdrop-blur-sm rounded-lg p-2 sm:p-3 text-center shadow-md ml-43 w-full"
        style={{
          animation: `slideUp 0.5s ease-out ${index * 0.2}s`,
          animationFillMode: 'both'
        }}
      >
        <div className="text-lg sm:text-xl md:text-2xl font-bold" style={{ color: primaryColor }}>{stat.percent}</div>
        <div className="text-xs" style={{ color: secondaryColor }}>{stat.label}</div>
      </div>
    ))}
  </div>
</div>
    </div>
  </div>
        
  {/* CSS Animations */}
  <style jsx>{`
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
    
    @keyframes slideUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    /* Custom text-xxs class for extremely small text on tiny screens */
    .text-xxs {
      font-size: 0.65rem;
      line-height: 0.75rem;
    }
  `}</style>
</div>






    <TableOfContents contents={contents} />
    <ProjectManagementContent/>
    <WideDiv/>
    <Footer/>
    </>
  );
};

export default BestProjectManagement;