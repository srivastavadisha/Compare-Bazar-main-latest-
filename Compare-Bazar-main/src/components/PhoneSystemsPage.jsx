import React, { useState } from 'react';
import PhoneSystemCardCommon from './PhoneSystemCardCommon';
import PhoneSystemContent from './PhoneSystemContent';
import Navbar from './Navbar';
import WideDiv from './WideDiv';
import Footer from './Footer';
import Modal from './Modal';
import BusinessPhoneSystemForm from './BusinessPhoneSystemForm';
import TableOfContents from './TableOfContents';
import { Link } from 'react-router-dom';

const PhoneSystemsPage = () => {
  const [showMore, setShowMore] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  // const contents = [
  //   { id: 1, title: "Introduction to Best Phone System", slug: "intro-phonesystem" },
  //   { id: 2, title: "What Is Business Phone System?", slug: "what-is-phonesystem" },
  //   { id: 3, title: "Benefits of Implementing a Business Phone System", slug: "phonesystem-benefits" },
  //   { id: 4, title: "Key Features to Look For", slug: "phonesystem-features" },
  //   { id: 5, title: "Pricing Models for Business Phone System", slug: "phonesystem-pricing" },
  //   { id: 6, title: "Types of Best Business Phone Systems", slug: "phonesystem-types" },
  //   { id: 7, title: "Integration Capabilities", slug: "integration" },
  //   { id: 8, title: "Implementation Process", slug: "implementation" },
  //   { id: 9, title: "Case Studies & Success Stories", slug: "case-studies" },
  //   { id: 10, title: "Comparing Top CRM Providers", slug: "comparison" },
  //   { id: 11, title: "FAQs", slug: "phonesystem-faq" },
  //   { id: 12, title: "What is the difference between Phone Services and a Business Phone System", slug: "phonesystem-diff" }
  // ];

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

  const additionalText = " The modern business phone system landscape has evolved significantly, with cloud-based VoIP solutions replacing traditional landlines in many organizations. Today's business phone systems offer advanced features like AI-powered call routing, CRM integration, voicemail-to-text transcription, and comprehensive analytics. These tools help businesses enhance customer service, improve team collaboration, and streamline communication workflows. When evaluating different providers, it's important to consider factors such as scalability, call quality, integration capabilities, and total cost of ownership. Many systems now include unified communications capabilities, bringing together voice, video, messaging, and conferencing in a single platform.";

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto p-4">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">The Best Business Phone Systems of 2025</h1>
  
          <p className="text-gray-800 text-lg md:text-lg mb-4">
            At <span className="text-orange-500 font-semibold">Compare Bazar</span>, we understand the importance of seamless communication for your business. That's why we recommend the <span className="text-orange-500 font-semibold">best business phone systems</span> that provide crystal-clear call quality and advanced features for modern enterprises. The <span className="text-orange-500 font-semibold">best VoIP and UCaaS solutions</span> offer AI-driven call analytics, auto-attendants, and seamless integrations to help you manage communications more effectively. Whether you're running a small startup or a large corporation, the right phone system can transform how you connect with customers and collaborate with your team.
          </p>
        </header>
  
        <section className="mb-6">
          <p className="text-gray-800 text-lg md:text-lg">
            As your business grows, ensuring you have the right communication tools is critical. Small teams can often manage with basic phone services, but as your operations expand, it's essential that your phone system scales accordingly. Implementing the <span className="text-orange-500 font-semibold">
          <Link to="/phonesystemform" className="hover:underline">
            best business phone system
          </Link>
        </span> can significantly enhance your ability to improve customer service, reduce costs, and boost productivity. At <span className="text-orange-500 font-semibold">Compare Bazar</span>, we help you find the perfect communication solution that aligns with your business needs, offering features like call forwarding, video conferencing, and real-time analytics.
            {showMore && (
              <span className="block mt-3">
                {additionalText} Additionally, the <span className="text-orange-500 font-semibold">best business phone systems</span> provide advanced capabilities such as AI-powered virtual assistants, call recording, and multi-channel support to optimize your communications. With <span className="text-orange-500 font-semibold">Compare Bazar</span>, you can easily compare the top phone system providers, evaluate their features, and choose the one that best fits your growing business. Let us guide you to the tools that will take your business communications to the next level.
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
      {/* <TableOfContents contents={contents} /> */}

      {/* Added Business component */}
      <PhoneSystemContent />
    </div>
    <WideDiv/>
    <Footer/>
    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <BusinessPhoneSystemForm />
      </Modal>
    </>
  );
};

export default PhoneSystemsPage;