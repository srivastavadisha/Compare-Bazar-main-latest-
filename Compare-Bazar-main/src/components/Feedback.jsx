import React, { useState, useEffect, useRef } from 'react';

const CRMFeedbackShowcase = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [animated, setAnimated] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  // Track mouse position for 3D effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // Store element rects in state
  const [elementRects, setElementRects] = useState({});

  // Using refs to track cards
  const cardRefs = useRef({});

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        setAnimated(true);
      }, 300);
    }, 800);
    
    // Event listener for mouse movement (for 3D effect)
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Update element rect when hovering
  useEffect(() => {
    if (hoveredCard !== null && cardRefs.current[hoveredCard]) {
      const rect = cardRefs.current[hoveredCard].getBoundingClientRect();
      setElementRects(prev => ({
        ...prev,
        [hoveredCard]: rect
      }));
    }
  }, [hoveredCard, mousePosition]);

  // CRM-specific feedback data
  const crmFeedbackData = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Sales Director",
      company: "GlobalTech Solutions",
      rating: 5,
      comment: "This CRM has transformed our sales pipeline management. The customer journey mapping feature helped us identify gaps in our process and increase conversions by 24%.",
      date: "March 15, 2025",
      category: "sales",
      avatar: "1"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Marketing Manager",
      company: "Innovate Dynamics",
      rating: 5,
      comment: "The integration between marketing campaign tracking and customer data has been seamless. We can now attribute revenue directly to specific marketing efforts with precision.",
      date: "March 8, 2025",
      category: "marketing",
      avatar: "2"
    },
    {
      id: 3,
      name: "Aisha Patel",
      role: "Customer Support Lead",
      company: "ServiceFirst Inc.",
      rating: 4,
      comment: "Our support team resolution time has decreased by 35% since implementing the ticketing system. The AI-powered suggestions have been particularly helpful for our newer team members.",
      date: "March 2, 2025",
      category: "support",
      avatar: "3"
    },
    {
      id: 4,
      name: "David Rodriguez",
      role: "Sales Operations Manager",
      company: "Enterprise Solutions",
      rating: 5,
      comment: "The forecasting tools have dramatically improved our revenue projections. We're now able to predict quarterly results with 92% accuracy, which has transformed our resource allocation.",
      date: "February 25, 2025",
      category: "sales",
      avatar: "4"
    },
    {
      id: 5,
      name: "Emma Wilson",
      role: "E-commerce Director",
      company: "ShopNow Retail",
      rating: 4,
      comment: "The ability to track the entire customer journey from initial website visit through purchase and beyond has given us insights we never had before. Our personalization strategy has improved significantly.",
      date: "February 18, 2025",
      category: "marketing",
      avatar: "5"
    },
    {
      id: 6,
      name: "Jamal Washington",
      role: "VP of Customer Success",
      company: "SaaS Accelerator",
      rating: 5,
      comment: "Customer retention has increased by 17% since implementing the at-risk customer identification features. The early warning system has been a game-changer for our success team.",
      date: "February 12, 2025",
      category: "support",
      avatar: "6"
    },
    {
      id: 7,
      name: "Sophia Martinez",
      role: "CRM Administrator",
      company: "DataDriven Tech",
      rating: 5,
      comment: "The customization options are incredible. We've been able to adapt the CRM to our specific workflows rather than changing our processes to fit the software. The automation capabilities have saved us countless hours.",
      date: "February 5, 2025",
      category: "analytics",
      avatar: "7"
    },
    {
      id: 8,
      name: "Thomas Kim",
      role: "VP of Sales",
      company: "Growth Ventures",
      rating: 4,
      comment: "The mobile app has transformed our field sales team's productivity. They can update opportunities, add notes, and access customer information in real-time, even without internet connectivity.",
      date: "January 28, 2025",
      category: "sales",
      avatar: "8"
    },
    {
      id: 9,
      name: "Olivia Brown",
      role: "Customer Intelligence Analyst",
      company: "Insight Retail Group",
      rating: 5,
      comment: "The analytics dashboard has revolutionized how we understand customer behavior. We've identified several key segments we were previously missing and developed targeted campaigns with outstanding results.",
      date: "January 20, 2025",
      category: "analytics",
      avatar: "9"
    },
    {
      id: 10,
      name: "Raj Patel",
      role: "CTO",
      company: "Accelerate Systems",
      rating: 5,
      comment: "The API is extensive and well-documented. We've integrated the CRM with our proprietary systems easily, creating a unified data ecosystem that has eliminated previous silos in our organization.",
      date: "January 15, 2025",
      category: "technical",
      avatar: "10"
    },
    {
      id: 11,
      name: "Laura Schmidt",
      role: "Marketing Automation Specialist",
      company: "Precision Marketing",
      rating: 5,
      comment: "The email marketing campaign tools have increased our open rates by 32% and click-through rates by 47%. The ability to segment based on customer behavior has transformed our approach.",
      date: "January 8, 2025",
      category: "marketing",
      avatar: "11"
    },
    {
      id: 12,
      name: "Carlos Mendez",
      role: "Sales Director",
      company: "Worldwide Solutions",
      rating: 5,
      comment: "The sales forecasting capabilities have given us unprecedented visibility into our pipeline. We can now predict which deals are most likely to close with remarkable accuracy.",
      date: "December 28, 2024",
      category: "sales",
      avatar: "12"
    },
    {
      id: 13,
      name: "Grace Liu",
      role: "Business Intelligence Manager",
      company: "Data Insights Inc.",
      rating: 4,
      comment: "The reporting features are robust and flexible. We've created custom dashboards that provide real-time insights to different departments, allowing for faster decision-making across the organization.",
      date: "December 20, 2024",
      category: "analytics",
      avatar: "13"
    },
    {
      id: 14,
      name: "Nathan Jackson",
      role: "Customer Support Manager",
      company: "Premier Service Co.",
      rating: 5,
      comment: "The customer support ticketing system has transformed our response times and resolution rates. The AI-powered suggestions have helped our team handle 22% more tickets without additional staff.",
      date: "December 12, 2024",
      category: "support",
      avatar: "14"
    },
    {
      id: 15,
      name: "Elena Volkov",
      role: "Chief Revenue Officer",
      company: "Strategic Growth Ltd.",
      rating: 5,
      comment: "The holistic view of our customers has transformed our cross-selling and upselling strategies. We've seen a 28% increase in customer lifetime value since implementing this CRM solution.",
      date: "December 5, 2024",
      category: "sales",
      avatar: "15"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Feedback' },
    { id: 'sales', name: 'Sales' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'support', name: 'Customer Support' },
    { id: 'analytics', name: 'Analytics & Reporting' },
    { id: 'technical', name: 'Technical' }
  ];

  const filteredFeedback = activeCategory === 'all' 
    ? crmFeedbackData 
    : crmFeedbackData.filter(item => item.category === activeCategory);

  const handleCardClick = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Function to calculate 3D transform for cards
  const calculate3DTransform = (cardId) => {
    if (!elementRects[cardId] || hoveredCard !== cardId) return '';
    
    const rect = elementRects[cardId];
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (mousePosition.x - centerX) / 20;
    const deltaY = (mousePosition.y - centerY) / 20;
    
    return `perspective(1000px) rotateX(${-deltaY}deg) rotateY(${deltaX}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  // Loading animation
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="text-center">
          <div className="relative w-24 h-24 mx-auto mb-8">
            <div className="absolute inset-0 border-t-4 border-[#000e54] border-solid rounded-full animate-spin"></div>
            <div className="absolute inset-3 border-t-4 border-[#000e54] border-solid rounded-full animate-spin animate-delay-150"></div>
            <div className="absolute inset-6 border-t-4 border-[#000e54] border-solid rounded-full animate-spin animate-delay-300"></div>
          </div>
          <p className="text-[#000e54] text-xl font-bold">Loading CRM Feedback...</p>
        </div>
      </div>
    );
  }

  // Stars component for ratings
  const Stars = ({ rating }) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <svg 
            key={i} 
            className={`w-5 h-5 ${i < rating ? 'text-[#000e54]' : 'text-gray-300'}`} 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  // Reusable 3D shadow effect style
  const shadow3dStyle = {
    boxShadow: '0 10px 30px -5px rgba(0, 14, 84, 0.2), 0 20px 60px -10px rgba(0, 14, 84, 0.1)',
  };

  // Fixed animation classes
  const animationClasses = {
    delay150: "delay-150",
    delay300: "delay-300"
  };

  return (
    <div className="min-h-screen bg-white text-black overflow-hidden">
      {/* Header */}
      <header className="relative overflow-hidden py-16 px-10 lg:px-28 md:px-8 sm:px-13">
        <div className="absolute inset-0 opacity-5"></div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div
            className={`transition-all duration-1000 transform ${animated ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              } flex flex-col items-center justify-center`}
          >
            <h1 className="text-5xl text-center font-bold mb-4 text-[#000e54]">
              CRM Software Feedback
            </h1>
            <p className="text-2xl mb-8 text-[#000e54] max-w-2xl text-center">
              See what our customers are saying about our powerful CRM solution
            </p>
            <div className="flex items-center space-x-3 text-center">
              <div className="h-2 w-20 bg-[#000e54] rounded-full"></div>
              <div className="h-2 w-12 bg-[#000e54] opacity-70 rounded-full"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Filter Tabs */}
      <div className={`bg-white shadow-lg sticky top-0 z-20 transition-all duration-700 transform ${animated ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'}`} style={{
        boxShadow: '0 4px 20px -2px rgba(0, 14, 84, 0.15)',
      }}>
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto py-4">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 mr-3 rounded-xl whitespace-nowrap transition-all duration-300 transform ${
                  activeCategory === category.id 
                    ? 'bg-[#000e54] text-white scale-105 shadow-lg' 
                    : 'bg-gray-100 text-[#000e54] hover:bg-gray-200'
                } ${animated ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                style={{ 
                  transitionDelay: `${index * 50}ms`,
                  boxShadow: activeCategory === category.id ? '0 10px 25px -5px rgba(0, 14, 84, 0.3)' : 'none',
                }}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Feedback Cards */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFeedback.map((item, index) => (
            <div
              key={item.id}
              ref={el => cardRefs.current[item.id] = el}
              onClick={() => handleCardClick(item.id)}
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`relative bg-white border border-gray-200 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ${
                expandedId === item.id ? 'scale-105' : ''
              } ${animated ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ 
                transitionDelay: `${(index % 6) * 100}ms`,
                transform: calculate3DTransform(item.id),
                boxShadow: hoveredCard === item.id || expandedId === item.id 
                  ? '0 30px 60px -12px rgba(0, 14, 84, 0.25), 0 18px 36px -18px rgba(0, 14, 84, 0.3)' 
                  : '0 10px 30px -15px rgba(0, 14, 84, 0.2)',
              }}
            >
              {/* Card Header 3D Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#000e54] via-transparent to-transparent opacity-5"></div>
              
              <div className="p-6">
                <div className="flex items-start mb-6">
                  <div className="mr-4">
                    <div className="w-14 h-14 bg-[#000e54] rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
                      {item.avatar}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-[#000e54] mb-1">{item.name}</h3>
                    <p className="text-[#000e54] mb-1">{item.role}</p>
                    <p className="text-gray-600 text-sm mb-2">{item.company}</p>
                    <Stars rating={item.rating} />
                  </div>
                </div>
                <div className={`relative transition-all duration-500 ${
                  expandedId === item.id ? 'max-h-80' : 'max-h-24 overflow-hidden'
                }`}>
                  <p className="text-gray-700">
                    "{item.comment}"
                  </p>
                  {expandedId !== item.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent"></div>
                  )}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center">
                  <span className="text-sm text-gray-500">{item.date}</span>
                  <span className="px-3 py-1 bg-[#000e54] rounded-full text-xs uppercase font-semibold text-white shadow-lg">
                    {categories.find(cat => cat.id === item.category)?.name || item.category}
                  </span>
                </div>
              </div>
              
              {/* Interactive footer */}
              <div className={`bg-[#000e54] px-6 py-4 flex justify-center items-center transition-all duration-500 ${
                expandedId === item.id ? 'opacity-100 h-16' : 'opacity-0 h-0 py-0 overflow-hidden'
              }`}>
                <button className="text-white flex items-center font-medium relative overflow-hidden group">
                  <span className="relative z-10 transition-transform duration-300 transform group-hover:translate-x-1">Read full case study</span>
                  <svg className="w-5 h-5 ml-2 relative z-10 transition-transform duration-300 transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CRM Features Section */}
      <div className="relative py-16 px-10 lg:px-28 md:px-8 sm:px-13 overflow-hidden">
        {/* Background image with matching padding */}
        <div
          className="absolute inset-x-10 sm:inset-x-13 md:inset-x-8 lg:inset-x-28 inset-y-5 opacity-5"
         
        ></div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#000e54]">
              Our CRM Features
            </h2>
            <div className="flex justify-center">
              <div className="h-1 w-24 bg-[#000e54] rounded-full"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Contact Management', description: 'Centralize customer data and interaction history' },
              { title: 'Sales Pipeline', description: 'Track and manage your deals from lead to close' },
              { title: 'Marketing Automation', description: 'Create and manage targeted marketing campaigns' },
              { title: 'Support Ticketing', description: 'Streamline customer support and issue resolution' },
              { title: 'Analytics & Reporting', description: 'Gain insights with powerful reporting tools' },
              { title: 'Mobile Access', description: 'Access your CRM anywhere, anytime on any device' },
            ].map((feature, index) => (
              <div
                key={index}
                className={`relative bg-white border border-gray-200 rounded-2xl p-6 transition-all duration-700 transform hover:scale-105 hover:shadow-xl ${animated ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                style={{
                  transitionDelay: `${(index + 1) * 100}ms`,
                  boxShadow: '0 10px 30px -15px rgba(0, 14, 84, 0.2)',
                }}
              >
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[#000e54]">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
                {/* Decorative elements */}
                <div className="absolute w-12 h-12 -bottom-2 -right-2 bg-[#000e54] opacity-5 rounded transform rotate-12"></div>
                <div className="absolute w-8 h-8 -top-1 -left-1 bg-[#000e54] opacity-5 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* CRM Stats Section */}
      <div className="relative py-16 bg-white">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '94%', label: 'Customer Satisfaction' },
              { value: '45%', label: 'Increase in Sales' },
              { value: '4.2x', label: 'ROI on CRM' },
              { value: '68%', label: 'Faster Deal Closing' },
            ].map((stat, index) => (
              <div 
                key={index} 
                className={`relative bg-white border border-gray-200 rounded-2xl p-6 text-center transition-all duration-700 transform hover:scale-105 ${
                  animated ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ 
                  transitionDelay: `${(index + 1) * 200}ms`,
                  boxShadow: '0 15px 30px -10px rgba(0, 14, 84, 0.15)',
                }}
              >
                <div>
                  <div className="text-5xl font-bold mb-2 text-[#000e54]">
                    {stat.value}
                  </div>
                  <p className="text-[#000e54]">{stat.label}</p>
                </div>
                {/* Background effect */}
                <div className="absolute inset-0 bg-[#000e54] opacity-5 rounded-2xl transform scale-95"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-20 ">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(#000e54 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className={`transition-all duration-1000 transform ${animated ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h2 className="text-4xl font-bold mb-4 text-[#000e54]">
              Ready to transform your business with our CRM?
            </h2>
            <p className="text-xl text-[#000e54] mb-8 max-w-2xl mx-auto">
              Join thousands of businesses using our powerful CRM software to boost sales, improve customer relationships, and drive growth.
            </p>
            <button className="relative group">
              <div className="absolute inset-0 bg-[#000e54] rounded-lg transform scale-105 opacity-20 blur-lg transition-transform duration-300 group-hover:scale-110"></div>
              <div className="relative px-8 py-4 bg-[#000e54] rounded-lg leading-none flex items-center transition-transform duration-300 transform group-hover:scale-105">
                <span className="text-white font-semibold transition duration-300">
                  Start Free Trial
                </span>
                <svg className="w-5 h-5 ml-2 text-white transition duration-300 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CRMFeedbackShowcase;