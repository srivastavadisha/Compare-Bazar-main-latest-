import React, { useState, useEffect } from 'react';
import backgroundImage from "../assets/images/bg.webp";
import "./Home.css";
import haha from "/images/design.png";
import { 
  Phone, 
  FileText, 
  CreditCard, 
  Users, 
  DollarSign, 
  MapPin, 
  Briefcase, 
  UserCheck, 
  Wallet, 
  Mail, 
  Globe, 
  Headphones, 
  Clipboard 
} from 'lucide-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Feedback from './Feedback';
import Navbar from "../components/Navbar";
import WideDiv from "../components/WideDiv";
import Footer from "../components/Footer";

const Home = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  // HANDELING THE SUBSCRIBE BUTTON
  const handleSubscribe = async () => {
    if (!email.trim()) return alert("Please enter a valid email!");

    setLoading(true);

    const formData = new FormData();
    formData.append("access_key", "4e9faa02-cb51-4253-98e6-b5794f4ece3a"); // Replace with your Web3Forms API Key
    formData.append("subject", "New Subscription");
    formData.append("from_name", "Subscription Form");
    formData.append("message", `New user subscribed: ${email}`);
    formData.append("reply_to", email);
    formData.append("redirect", "");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSubscribed(true);
        setTimeout(() => {
          setEmail(""); // Clear input field
          setSubscribed(false); // Reset button state
        }, 3000); // Reset form after 3 seconds
      } else {
        alert("Failed to subscribe. Try again!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };
  const [activeIndex, setActiveIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  const clients = [
    { name: "Willscot", image: "https://www.shutterstock.com/image-vector/abstract-call-center-contact-us-600nw-2174864233.jpg" },
    { name: "RingCentral", image: "https://www.shutterstock.com/image-vector/client-colored-rainbow-word-text-260nw-1192699408.jpg" },
    { name: "Culligan", image: "https://seekvectorlogo.com/wp-content/uploads/2019/03/amdocs-vector-logo.png" },
    { name: "Toshiba", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" },
    { name: "Satellite", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png" },
    { name: "Google", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" },
    { name: "Client 7", image: "https://www.shutterstock.com/image-vector/client-colored-rainbow-word-text-260nw-1192699408.jpg" },
    { name: "Apple", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/505px-Apple_logo_black.svg.png" },
    { name: "Apple 2", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/505px-Apple_logo_black.svg.png" },
    { name: "Netflix", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" },
    { name: "Netflix 2", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" },
    { name: "Netflix 3", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" },
  ];

  // Handle component mounting and resizing
  useEffect(() => {
    setIsMounted(true);
    setWidth(window.innerWidth);
    
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
      
      // Get current and new logos per screen values
      const currentLogosPerScreen = getLogosPerScreen(width);
      const newLogosPerScreen = getLogosPerScreen(newWidth);
      
      // If number of logos shown changes due to resize, adjust activeIndex
      if (currentLogosPerScreen !== newLogosPerScreen) {
        // Calculate what "group" we're currently on
        const currentGroup = Math.floor(activeIndex / currentLogosPerScreen);
        
        // Set new activeIndex based on the same group but with new logosPerScreen
        const newStartIndex = currentGroup * newLogosPerScreen;
        
        // Make sure we don't exceed the maximum valid index
        const maxValidIndex = Math.max(0, clients.length - newLogosPerScreen);
        setActiveIndex(Math.min(newStartIndex, maxValidIndex));
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [width, activeIndex]);

  // Number of logos to show at once - accepts width parameter for calculations
  const getLogosPerScreen = (screenWidth) => {
    if (!screenWidth) screenWidth = width || window.innerWidth;
    
    if (screenWidth < 640) return 1; // Small screens: 1 logo
    if (screenWidth < 1024) return 3; // Medium screens: 3 logos
    return 6; // Large screens: 6 logos
  };

  // Current logos per screen
  const logosPerScreen = getLogosPerScreen();
  
  // Get visible logos based on active index
  const getVisibleLogos = () => {
    return clients.slice(activeIndex, activeIndex + logosPerScreen);
  };

  const goToLogo = (index) => {
    // Ensure index is a multiple of logosPerScreen
    const adjustedIndex = index * logosPerScreen;
    
    // Make sure we don't exceed the maximum valid index
    const maxValidIndex = Math.max(0, clients.length - logosPerScreen);
    setActiveIndex(Math.min(adjustedIndex, maxValidIndex));
  };

  const nextLogo = () => {
    if (activeIndex + logosPerScreen < clients.length) {
      setActiveIndex((prev) => prev + logosPerScreen);
    } else {
      setActiveIndex(0); // Restart from the beginning
    }
  };

  const prevLogo = () => {
    if (activeIndex - logosPerScreen >= 0) {
      setActiveIndex((prev) => prev - logosPerScreen);
    } else {
      // Jump to the last valid starting position
      const maxValidIndex = Math.max(0, clients.length - logosPerScreen);
      setActiveIndex(maxValidIndex);
    }
  };

  const shouldShowDots = () => {
    return width >= 640 && clients.length > logosPerScreen; // Only show dots on medium+ screens when needed
  };

  const getNumberOfDots = () => {
    return Math.ceil(clients.length / logosPerScreen);
  };

  // Don't render until component is mounted to avoid SSR issues with window
  if (!isMounted) return null;


  // Updated categorized cards data with only Marketing, Technology, and Sales
  const categories = [
    {
      title: "Marketing",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
</svg>
      ),
      cards: [
        {
          title: "Your Guide to Creating a Small Business Marketing Plan",
          link: "/marketing-plan",
        },
        {
          title: "5 Tips to Market Research Like a Pro",
          link: "/market-research-tips",
        },
        {
          title: "6 Email Marketing Challenges and How to Overcome Them",
          link: "/email-marketing-challenges",
        },
      ],
    },
    {
      title: "Technology",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
      ),
      cards: [
        {
          title: "How Telematics Can Improve Worksite Productivity",
          link: "/telematics-productivity",
        },
        {
          title: "Types of Cyber Risks Businesses Should Be Aware Of",
          link: "/cyber-risks",
        },
        {
          title: "Essential Tech Tools for Small Business Growth",
          link: "/tech-tools-growth",
        },
      ],
    },
    {
      title: "Sales",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      ),
      cards: [
        {
          title: "10 Proven Strategies to Boost Your Sales Pipeline",
          link: "/sales-pipeline-strategies",
        },
        {
          title: "How to Build an Effective Sales Team from Scratch",
          link: "/build-sales-team",
        },
        {
          title: "Converting Leads to Customers: The Ultimate Guide",
          link: "/lead-conversion-guide",
        },
      ],
    },
  ];

  const tools = [
    { name: "Best CRM Software", icon: <Users />, link: "/BestCRMSoftware" },
    { name: "Best Email Marketing Services", icon: <Mail />, link: "/best-email-marketing-services" },
    { name: "Best Website Building Platforms", icon: <Globe />, link: "/best-website-building-platforms" },
    { name: "Business Phone Systems", icon: <Phone />, link: "/phone-systems" },
    { name: "GPS Fleet Management Software", icon: <MapPin />, link: "/GpsFleetMangement"},
    { name: "Best Employee Management Software", icon: <Users />, link: "/BestEmployeeMangementSoftware"},
    { name: "Best Call Center Management Software", icon: <Headphones />, link: "/Callcenter"},
    { name: "Careers", icon: <Briefcase />, link: "/careers" },
    { name: "Best Project Management Software", icon: <Clipboard />, link: "/best-project-management-software" },
  ];

  return (
    <>
      <Navbar />
      <div className="relative w-full">
        {/* First Section*/}
        <div
          className="relative h-[600px] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          {/* Content Container */}
          <div className="relative z-10 flex flex-col items-start justify-center h-full pl-8 pr-4 md:pl-16 lg:pl-32 brightness-100">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold italic text-white mb-4 text-left">
              Expert Reviews & <br />
              Compare Bazaar 
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-white mb-8 max-w-2xl text-left">
              Advice, resources, podcasts, and newsletters for the 11 million U.S. businesses with between $50K and $50 million in revenue.
            </p>

            {/* Email Subscription Form */}
            <div className="w-full max-w-md bg-white rounded-full flex overflow-hidden">
              <div className="flex-grow flex items-center pl-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full py-3 px-2 outline-none text-gray-700"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                />
              </div>
              <button
                className="text-gray-800 font-medium py-3 px-6 transition-colors disabled:opacity-50"
                style={{ backgroundColor: '#ff8633', hover: { backgroundColor: '#e65c00' } }}
                onClick={handleSubscribe}
                disabled={loading}
              >
                {loading ? "Subscribing..." : subscribed ? "Subscribed ✅" : "Subscribe"}
              </button>
            </div>
          </div>
        </div>

       {/* Cards Section - Fully linkable with orange hover effects */}
{/* Cards Section - Only one card rotates at a time */}
<div className="container mx-auto px-6 lg:px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-2">Advice for Professionals by Professionals</h2>
      <p className="text-lg text-center text-gray-600 mb-12">What does your business need next?</p>

      {/* Category Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 px-4 sm:px-6 md:px-10 lg:px-16 mx-auto max-w-screen-xl">
        {categories.map((category, index) => (
          <div
            key={index}
            id={`card-${index}`}
            className="card-container h-[400px] w-full rounded-xl relative overflow-hidden"
            style={{
              perspective: '1500px',
              transformStyle: 'preserve-3d',
              transition: 'all 0.6s ease',
              boxShadow: '0 10px 25px rgba(255, 134, 51, 0.3), 0 5px 10px rgba(255, 134, 51, 0.2)',
            }}
            onMouseEnter={(e) => {
              // Reset all cards first
              categories.forEach((_, i) => {
                if (i !== index) {
                  const otherCardInner = document.getElementById(`card-inner-${i}`);
                  if (otherCardInner) {
                    otherCardInner.style.transform = 'rotateY(0deg)';
                  }
                  const otherCard = document.getElementById(`card-${i}`);
                  if (otherCard) {
                    otherCard.style.boxShadow = '0 10px 25px rgba(255, 134, 51, 0.3), 0 5px 10px rgba(255, 134, 51, 0.2)';
                  }
                  const otherGlow = document.getElementById(`card-glow-${i}`);
                  if (otherGlow) {
                    otherGlow.style.opacity = '0';
                  }
                  const otherShadow = document.getElementById(`bottom-shadow-${i}`);
                  if (otherShadow) {
                    otherShadow.style.opacity = '0';
                  }
                }
              });
              
              // Animate the current card
              const cardInner = document.getElementById(`card-inner-${index}`);
              // Reset rotation to 0deg to allow re-triggering the animation
              cardInner.style.transition = 'none'; // Disable transition temporarily
              cardInner.style.transform = 'rotateY(0deg)';
              // Force reflow to apply the reset
              void cardInner.offsetHeight;
              // Re-enable transition and apply the flip
              cardInner.style.transition = 'transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)';
              cardInner.style.transform = 'rotateY(360deg)';

              // Apply other effects
              document.getElementById(`card-${index}`).style.boxShadow = '0 20px 40px rgba(255, 134, 51, 0.4), 0 0 20px rgba(255, 134, 51, 0.3)';
              document.getElementById(`card-glow-${index}`).style.opacity = '0.4';
              document.getElementById(`bottom-shadow-${index}`).style.opacity = '0.3';
            }}
            onMouseLeave={(e) => {
              // Remove effects
              document.getElementById(`card-${index}`).style.boxShadow = '0 10px 25px rgba(255, 134, 51, 0.3), 0 5px 10px rgba(255, 134, 51, 0.2)';
              document.getElementById(`card-glow-${index}`).style.opacity = '0';
              document.getElementById(`bottom-shadow-${index}`).style.opacity = '0';
            }}
          >
            <div
              id={`card-inner-${index}`}
              className="w-full h-full flex flex-col"
              style={{
                position: 'relative',
                transformStyle: 'preserve-3d',
                transition: 'transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              {/* Category Header */}
              <a
                href={category.link || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gradient-to-r from-[#000e54] to-[#203299] p-6 cursor-pointer w-full relative overflow-hidden rounded-t-xl flex-shrink-0 transition-colors duration-300"
                style={{ height: '80px' }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center relative z-10">
                  <h3 className="text-2xl font-bold text-white hover:text-[#ff8633] transition-colors duration-300">{category.title}</h3>
                  <div className="text-[#ff8633] transform transition-transform duration-300 hover:scale-125 hover:rotate-6">
                    {category.icon}
                  </div>
                </div>
                <div
                  className="absolute inset-0 opacity-80"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,14,84,0.95) 0%, rgba(32,50,153,0.95) 100%)',
                    backgroundImage: 'radial-gradient(circle at top right, rgba(255,134,51,0.15) 0%, rgba(255,255,255,0) 60%)',
                  }}
                ></div>
              </a>
              
              {/* Category Articles */}
              <div className="flex flex-col bg-gradient-to-br from-[#000e54] to-[#203299] rounded-b-xl flex-grow relative">
                {category.cards.map((card, cardIndex) => {
                  // Calculate equal height for all card items
                  const itemHeight = `calc((320px - ${category.cards.length - 1}px) / ${category.cards.length})`;
                  
                  return (
                    <a
                      key={cardIndex}
                      href={card.link || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block py-4 px-6 border-t border-opacity-20 border-gray-400 transition-all duration-300 hover:bg-[#001374] relative overflow-hidden flex items-center"
                      style={{ 
                        height: itemHeight,
                        borderImage: 'linear-gradient(to right, rgba(255,134,51,0.1), rgba(255,134,51,0.2), rgba(255,134,51,0.1)) 1'
                      }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="flex items-center h-full relative z-10 w-full">
                        <div className="text-[#ff8633] mr-3 flex-shrink-0 transform transition-all duration-300">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <h4 className="text-white text-md font-medium hover:text-[#ff8633] text-left transition-colors duration-300 line-clamp-2">{card.title}</h4>
                      </div>
                      
                      {/* Individual item hover effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#ff8633] to-transparent opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
                    </a>
                  );
                })}
              </div>

              {/* Reflection effect */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,134,51,0.1) 0%, rgba(255,255,255,0) 50%)',
                  transformStyle: 'preserve-3d',
                  transform: 'translateZ(1px)',
                  borderRadius: '0.75rem',
                }}
              ></div>
            </div>

            {/* Card glow effect */}
            <div 
              id={`card-glow-${index}`}
              className="absolute -inset-0.5 bg-gradient-to-br from-[#ff8633] to-[#203299] rounded-xl opacity-0 blur-md transition-all duration-700 -z-10"
            ></div>
            
            {/* Additional orange bottom shadow */}
            <div 
              id={`bottom-shadow-${index}`}
              className="absolute bottom-0 left-0 right-0 h-6 bg-[#ff8633] opacity-0 blur-xl -z-10 transition-opacity duration-500"
              style={{
                transform: 'translateY(10px)',
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>

        {/* BEST TOOLS SECTION */}
        {/* #ebf5fb;color light blue if needed */}
        <div className="bg-[#f8f8f8] py-12">
          <div className="container mx-auto px-12 lg:px-24">
            <h2 className="text-3xl font-bold text-center mb-8 text-black">Best tools to run your business</h2>
            <p className="text-lg text-center text-gray-600 mb-12">
              Compare reviews and prices on the best brands and products for:
            </p>

            {/* Grid for Tools */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map((tool, index) => (
                <a
                  key={index}
                  href={tool.link}
                  className="group flex items-center gap-4 bg-white p-6 rounded-2xl shadow-lg 
                  hover:bg-gradient-to-r from-[#000e54] to-[#203299] hover:text-[#ff8633] hover:shadow-xl "
                >
                  <div className="bg-[#203299] text-gray-300 p-3 rounded-full flex items-center justify-center 
                        group-hover:bg-[#ff8633] group-hover:text-white ">
                    {tool.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-left">{tool.name}</h3>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* CLIENTS SECTION */}
        <section className="py-16 px-5 bg-white">
          <div className="w-full max-w-7xl mx-auto py-10 px-4">
            <h2 className="text-2xl font-bold text-center mb-2">Brands We Work With</h2>
            <p className="text-center text-gray-600 mb-8">Our Learners Work at Global Companies & Startups</p>

            {/* Navigation and logos container */}
            <div className="relative flex items-center justify-center">
              {/* Left Arrow */}
              <button
                onClick={prevLogo}
                className="absolute left-0 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
                aria-label="Previous logos"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>

              {/* Logo Container - reduced width for 1024px with increased spacing */}
              <div className="flex justify-center items-center space-x-12 overflow-hidden w-full lg:w-3/4 xl:w-4/5">
                {getVisibleLogos().map((client, index) => (
                  <div key={index} className="flex items-center justify-center h-15 w-30 transition-all duration-300">
                    <img
                      src={client.image}
                      alt={`${client.name} logo`}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                ))}
              </div>

              {/* Right Arrow */}
              <button
                onClick={nextLogo}
                className="absolute right-0 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
                aria-label="Next logos"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-6">
              {shouldShowDots() && (
                <div className="flex">
                  {Array.from({ length: getNumberOfDots() }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goToLogo(i)}
                      className={`w-2 h-2 rounded-full mx-1 mb-1 transition-colors duration-200 ${
                        i === Math.floor(activeIndex / logosPerScreen)
                          ? 'bg-gray-700'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to logo group ${i + 1}`}
                      aria-current={i === Math.floor(activeIndex / logosPerScreen) ? 'true' : 'false'}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
        <div className="relative w-full bg-white py-12 px-4 md:px-8 lg:px-12 overflow-hidden">
          {/* Floating grey curves in the background */}
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            {/* Curve 1 */}
            <div className="absolute top-1/3 left-1/4 w-64 h-64 border-2 border-gray-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
            {/* Curve 2 */}
            <div className="absolute top-1/2 left-5/6 w-48 h-48 border-2 border-gray-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
            {/* Curve 3 */}
            <div className="absolute top-3/4 left-1/2 w-32 h-32 border-2 border-gray-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>

          {/* Background curve */}
          {/* <div className="absolute top-0 right-0 w-3/4 h-full opacity-10">
        <div className="w-full h-full border-2 border-gray-900 rounded-full transform translate-x-1/4 translate-y-1/4"></div>
      </div> */}

          <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
            {/* Left side - Image (middle on mobile) */}
            <div className="w-full md:w-1/2 order-2 md:order-1 mt-8 md:mt-0 flex justify-center md:justify-start">
              <div className="w-full max-w-md">
                <img
                  src={haha}
                  alt="Business analytics illustration"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Right side - Text content (top on mobile, without button) */}
            <div className="w-full md:w-1/2 md:pl-8 text-center md:text-left order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-800 mb-3">
                We can help you grow <br />your business
              </h2>
              <p className="text-gray-600 mb-6">Partner with us in these ways:</p>

              <ul className="space-y-3 mb-8 inline-block text-left">
                <li className="flex items-start">
                  <div className="min-w-4 flex items-center justify-center mr-2 mt-1.5">
                    <span className="inline-block w-1.5 h-1.5 bg-black rounded-full"></span>
                  </div>
                  <span>Drive traffic to your site from interested companies</span>
                </li>
                <li className="flex items-start">
                  <div className="min-w-4 flex items-center justify-center mr-2 mt-1.5">
                    <span className="inline-block w-1.5 h-1.5 bg-black rounded-full"></span>
                  </div>
                  <span>Advertise on our sites and b.newsletter</span>
                </li>
                <li className="flex items-start">
                  <div className="min-w-4 flex items-center justify-center mr-2 mt-1.5">
                    <span className="inline-block w-1.5 h-1.5 bg-black rounded-full"></span>
                  </div>
                  <span>Acquire qualified leads that convert to customers</span>
                </li>
              </ul>

              {/* Button only visible on medium screens and up */}
              <div className="hidden md:block">
                <button className="bg-[#ff8633] text-white px-6 py-3 font-medium rounded hover:bg-[#000e54] transition-colors">
                  Learn More
                </button>
              </div>
            </div>

            {/* Button for mobile (below image) */}
            <div className="w-full order-3 mt-8 text-center md:hidden">
              <button className="bg-[#ff8633] text-white px-6 py-3 font-medium rounded hover:bg-[#000e54] transition-colors">
                Learn More
              </button>
            </div>
            
          </div>
        
        </div>
        <Feedback/>
        <WideDiv/>
        <Footer/>
      </div>
    </>
  );
};

export default Home;