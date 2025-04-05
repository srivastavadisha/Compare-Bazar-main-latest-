import React, { useState } from 'react';
import PhoneSystemCardCommon from './PhoneSystemCardCommon';
import Navbar from './Navbar';
import WideDiv from './WideDiv';
import Footer from './Footer';
import Feedback from './Feedback';
import Article from './ArticleLayoutCommon';
import busimage from '../assets/images/bg.webp';
import GPSFleetComponent from './GPSFleetComponent';
import ShopComponent from './ShopComponent';
import GPSFleetForm from './GPSFleetForm';
import Modal from './Modal';
import TableOfContents from './TableOfContents';
import GPSFleetContent from './GPSFleetContent';

const GpsFleetManagementSoftware = () => {
  const [showMore, setShowMore] = useState(false);
const [isModalOpen, setIsModalOpen] = useState(false);
  const systems = [
    {
      name: "Azuga",
      logo: "/images/azuga.png",
      bestFor:"Best for Midsize Fleets",
      price: "Starts at $19.95 per user/month",
      videoCapacity: "Video capacity: 100",
      support: "24/7 customer support",
      link: "#",
      linkText: "Links to Ooma Office"
    },
    {
      name: "Motive",
      logo: "/images/motive.png",
      bestFor: "Best for  Accountability",
      price: "Starts at $19.95 per user/month",
      videoCapacity: "Video capacity: 100",
      support: "24/7 customer support",
      link: "#",
      linkText: "Links to Ooma Office"
    },
    {
      name: "Teletracnavman",
      logo: "/images/tele.png",
      bestFor: "Best for Maintenance",
      price: "Starts at $10 per user/month",
      videoCapacity: "Video capacity: 1000",
      support: "24/7 customer support",
      link: "#",
      linkText: "Links to Zoom"
    },
    {
      name: "Verizon Connect",
      logo: "/images/verizon.png",
      bestFor:"Best for Midsize Fleets",
      price: "Starts at $36 per user/month",
      videoCapacity: "Video capacity: 250",
      support: "24/7 customer support",
      link: "#",
      linkText: "Links to NextivoONE"
    },
    {
      name: "Samsara",
      logo: "/images/samsara.png",
      bestFor: "Best for Sustainability",
      price: "Starts at $19.95 per user/month",
      videoCapacity: "Video capacity: 100",
      support: "24/7 customer support",
      link: "#",
      linkText: "Links to Ooma Office"
    },
  ];

  const contents = [
    { id: 1, title: "Introduction to GPS Fleet", slug: "intro-gps" },
    { id: 2, title: "What Is GPS Fleet Tracking?", slug: "what-is-gpstracking" },
    { id: 3, title: "How Does GPS Fleet Tracking Works", slug: "gpstracking-working" },
    { id: 4, title: "Benefits of GPS Fleet Tracking", slug: "gpstracking-benefits" },
    { id: 5, title: "Pricing Models for CRM Software", slug: "crm-pricing" },
    { id: 6, title: "Key Features to Look For", slug: "key-features" },
    { id: 7, title: "Integration Capabilities", slug: "integration" },
    { id: 8, title: "Implementation Process", slug: "implementation" },
    { id: 9, title: "Case Studies & Success Stories", slug: "case-studies" },
    { id: 10, title: "Comparing Top CRM Providers", slug: "comparison" }
  ];

  // Ripple effect for buttons
  const createRipple = (event) => {
    const button = event.currentTarget;
    const ripple = document.createElement("span");
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${event.clientY - rect.top - size / 2}px`;
    ripple.classList.add("ripple");
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };
  
  const articles1 = [
    {
      id: 1,
      title: "VoIP vs Landline Phone System",
      image: busimage,
      author: "Catie",
      date: "November 21, 2019",
      excerpt: "American businesses today face a major debate when deciding on technology. Should I get VoIP vs. a traditional landline ...",
      link: "#"
    },
    {
      id: 2,
      title: "RingCentral Business Phone System: Features, Pricing, Pros and Cons",
      image: busimage,
      author: "Catie",
      date: "October 7, 2020",
      excerpt: "RingCentral Overview RingCentral is a popular VoIP provider offering both cloud-based and hosted solutions for businesses of various sizes. They ...",
      link: "#"
    },
    {
      id: 3,
      title: "8 Steps for Choosing the Right VoIP Service Provider",
      image: busimage,
      author: "Catie",
      date: "January 11, 2023",
      excerpt: "As a business leader, surely you want to find the best business phone system for your organization's needs. With ...",
      link: "#"
    }
  ];
  
  const additionalText = "Modern business phone systems have evolved dramatically in recent years, incorporating advanced features like artificial intelligence assistants, real-time analytics, and seamless integration with other business tools. Enterprise-level systems often include call recording, routing, and detailed reporting capabilities to improve customer service outcomes. Medium-sized businesses can benefit from scalable solutions that grow alongside their operations, while small businesses might prioritize cost-effective options with essential functionality. Many providers offer cloud-based solutions that eliminate the need for expensive on-premise hardware and allow for flexible remote work arrangements. When selecting a business phone system, it's important to consider factors such as integration capabilities, mobile functionality, security features, and ongoing support options to ensure you're making the right long-term investment for your organization's communication needs.";
  
  return (
    <>
      <Navbar/>
      <div className="max-w-6xl mx-auto p-4">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">The Best  GPS Fleet Management Software 2025</h1>
          <p className="text-gray-700 text-sm md:text-base mb-4">
            Modern business phone systems boast AI tools for conversation intelligence, video capabilities, detailed analytics and more.
          </p>
          
          <div className="flex flex-wrap items-center mt-2">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-300 mr-3"></div>
            <div>
              <p className="text-xs md:text-sm">
                <span>Written by: <strong>Jessica Elliott</strong>, Senior Analyst</span>
                <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  ✓ Editor Verified: <strong>Chad Brooks</strong>
                </span>
              </p>
              <p className="text-xs text-gray-500">Updated Mar 03, 2025</p>
            </div>
          </div>

          <div className="text-xs md:text-sm text-gray-600 mt-4 pb-4 border-b">
            Business.com earns commissions from some listed providers. <a href="#" className="text-blue-600 hover:underline">Editorial Guidelines</a>.
          </div>
        </header>

        <section className="mb-6">
          <p className="text-gray-800 text-sm md:text-base">
            As your business grows, ensuring you have the right communication tools is critical. Startups can often get by with a basic business phone 
            system that doesn't include many bells and whistles. But, as your business becomes more sophisticated, it is critical that your communication 
            tools also become more advanced.
            {showMore && (
              <span className="block mt-3">{additionalText}</span>
            )}
          </p>
          <button 
            className="mt-2 text-blue-600 font-medium flex items-center"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? 'LESS -' : 'MORE +'}
          </button>
        </section>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-6">
          {systems.map((system, index) => (
            <PhoneSystemCardCommon 
              key={index} 
              system={system} 
              createRipple={createRipple} 
              onCompareQuotesClick={() => setIsModalOpen(true)}
            />
          ))}
        </div>
      </div>
      <GPSFleetComponent/>
      <TableOfContents contents={contents} />
      <GPSFleetContent/>
      <Article
        title="Related Articles" 
        items={articles1} 
        buttonText="View Post" 
        buttonColor="bg-[#ff8633]" 
      />
      <ShopComponent/>
      <Feedback/>
      <WideDiv/>
      <Footer/>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <GPSFleetForm/>
         </Modal>
    
    </>
  );
};

export default GpsFleetManagementSoftware;