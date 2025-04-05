import React, { useState, useEffect } from 'react';
import PhoneSystemCardCommon from './PhoneSystemCardCommon';
import Navbar from './Navbar';
import WideDiv from './WideDiv';
import Footer from './Footer';
import Feedback from './Feedback';
import { ChevronDown, ChevronUp, List, BookOpen } from 'lucide-react';
import TableOfContents from './TableOfContents';
import CRMDiagram from './CRMDiagram';
import CRMComparison from './CRMComparison';
import FeedbackPage from './FeedbackPage';
import Advice from './Advice '
import Modal from './Modal';
import CRMForm from './CRMForm';


const BestCRMSoftware = () => {
  const [showMore, setShowMore] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const systems = [
    {
      name: "Zoho CRM",
      logo: "/images/zoho.png",
      bestFor: "Best for Growing Businesses",
      price: "Starts at $14 per user per month",
      videoCapacity: "15-day free trial",
      support: "24/7 customer support",
      link: "#",
      linkText: "Links to RingEX"
    },
    {
      name: "Creatio",
      logo: "/images/creatio.png",
      bestFor: "Best for Customer Lifecycle Management",
      price: "Starts at $25 per user per month",
      videoCapacity: "14-day free trial",
      support: "24/7 customer support",
      link: "#",
      linkText: "Links to Ooma Office"
    },
    {
      name: "Hub CRM",
      logo: "/images/hub.png",
      bestFor: "Best for Sales and Marketing Integrations",
      price: "Starts at $15 per month per user",
      videoCapacity: "Free plan or 14-day free trial",
      support: "Email chat support included",
      link: "#",
      linkText: "Links to Zoom"
    },
    {
      name: "HoneyBook",
      logo: "/images/honey.png",
      bestFor: "Best All-In-One Option",
      price: "Starts at $16 per user per month",
      videoCapacity: "7-day free trial",
      support: "24/7 phone and email support",
      link: "#",
      linkText: "Links to NextivoONE"
    },
    {
      name: "Pipedrive",
      logo: "/images/pipe.png",
      bestFor: "Best for Automation and Management",
      price: "Starts at $14 per user per month",
      videoCapacity: "14-day free trial",
      support: "24/7 online chat, premium for phone",
      link: "#",
      linkText: "Links to NextivoONE"
    },
  ];

  const contents = [
    { id: 1, title: "Introduction to CRM", slug: "intro-crm" },
    { id: 2, title: "What Is CRM Software?", slug: "what-is-crm" },
    { id: 3, title: "Benefits of Implementing a CRM", slug: "crm-benefits" },
    { id: 4, title: "Types of CRM Solutions", slug: "crm-types" },
    { id: 5, title: "Pricing Models for CRM Software", slug: "crm-pricing" },
    { id: 6, title: "Key Features to Look For", slug: "key-features" },
    { id: 7, title: "Integration Capabilities", slug: "integration" },
    { id: 8, title: "Implementation Process", slug: "implementation" },
    { id: 9, title: "Case Studies & Success Stories", slug: "case-studies" },
    { id: 10, title: "Comparing Top CRM Providers", slug: "comparison" }
  ];

  const createRipple = (event) => {
    const button = event.currentTarget;
    const ripple = document.createElement("span");
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height =`${size}px`;
    ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${event.clientY - rect.top - size / 2}px`;
    ripple.classList.add("ripple");
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };


  const additionalText = " The modern business communication landscape has evolved significantly, with VoIP (Voice over Internet Protocol) systems replacing traditional PBX setups in many organizations. Today's business phone systems offer advanced features like AI-powered voicemail transcription, intelligent call routing, CRM integration, and comprehensive analytics dashboards. These tools help businesses track performance metrics, improve customer satisfaction, and streamline their communication processes. When evaluating different providers, it's important to consider factors such as scalability, reliability, security features, and total cost of ownership. Many systems now include unified communications capabilities, bringing together voice, video, messaging, and collaboration tools in a single platform.";
 
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto p-4">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">The Best CRM Software of 2025</h1>


<p className="text-gray-700 text-sm md:text-base mb-4">
          At <span className="text-orange-500 font-semibold">Compare Bazar</span>, we understand the importance of choosing the right tools for your business. That’s why we recommend the <span className="text-orange-500 font-semibold">best CRM software</span> that integrates seamlessly with modern VoIP systems. The <span className="text-orange-500 font-semibold">best CRM software</span> offers AI-driven insights, advanced automation, and real-time analytics to help you manage customer relationships more effectively. Whether you're a small business or a large enterprise, the right CRM can transform how you communicate, collaborate, and grow.
</p>

<div className="text-xs md:text-sm text-gray-600 mt-4 pb-4 border-b">
          Explore the <span className="text-orange-500 font-semibold">best CRM software</span> options with <span className="text-orange-500 font-semibold">Compare Bazar</span>. Our platform helps you compare features, pricing, and reviews to find the perfect solution for your business needs. From AI-powered conversation intelligence to robust analytics and automation, the <span className="text-orange-500 font-semibold">best CRM software</span> ensures you stay ahead in today’s competitive market. Let <span className="text-orange-500 font-semibold">Compare Bazar</span> guide you to the tools that will elevate your business communication and customer management.
</div>

<div className="text-xs md:text-sm text-gray-600 mt-4 pb-4 border-b">
  Discover the <span className="text-orange-500 font-semibold">best modern CRM software</span>, offering AI-driven conversation intelligence, robust video tools, deep analytics, and powerful automation to optimize business workflows. With these cutting-edge features, businesses can unlock new levels of productivity, improve customer engagement, and make data-driven decisions with ease.
</div>
        </header>

        <section className="mb-6">
        <p className="text-gray-800 text-sm md:text-base">
            As your business grows, ensuring you have the right communication tools is critical. Startups can often get by with a basic business phone
            system that doesn't include many bells and whistles. But, as your business becomes more sophisticated, it is critical that your communication
            tools also become more advanced. Integrating the <span className="text-orange-500 font-semibold">best CRM software</span> into your workflow can significantly enhance your ability to manage customer relationships, streamline operations, and drive growth. At <span className="text-orange-500 font-semibold">Compare Bazar</span>, we help you find the perfect CRM solution that aligns with your business needs, offering features like AI-powered analytics, automation, and seamless integration with modern communication tools.
            {showMore && (
              <span className="block mt-3">
                {additionalText} Additionally, the <span className="text-orange-500 font-semibold">best CRM software</span> provides advanced capabilities such as AI-driven conversation intelligence, real-time analytics, and robust automation to optimize your business workflows. With <span className="text-orange-500 font-semibold">Compare Bazar</span>, you can easily compare the top CRM solutions, evaluate their features, and choose the one that best fits your growing business. Let us guide you to the tools that will take your communication and customer management to the next level.
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
      </div>

    
      <TableOfContents contents={contents} />



      {/* Big Divs for Each Section */}
      
      <div className="max-w-6xl mx-auto p-4 space-y-12">
  {/* Introduction to CRM */}
  <div id="intro-crm" className="py-20 bg-white rounded-xl shadow-lg">
    <div className="max-w-5xl mx-auto px-6 md:px-12">
    <h2 className="text-4xl font-semibold text-black mb-6 text-center">
        Introduction to CRM for B2B Marketing
</h2>
      <p className="text-gray-700 text-lg mb-8 text-center">
  Customer Relationship Management (CRM) is more than just a tool—it's a strategic approach that empowers businesses to manage interactions with leads and customers efficiently. For B2B companies like Compare Bazaar, a robust CRM system is essential for optimizing lead generation, streamlining email marketing automation, and enhancing sales pipeline management.  

  An effective CRM centralizes customer data, allowing businesses to track interactions, nurture prospects, and improve customer retention. It integrates with marketing automation tools, enabling personalized email campaigns, automated follow-ups, and insightful analytics to refine strategies.  

  Moreover, CRM solutions help sales teams prioritize high-value leads, automate repetitive tasks, and provide real-time reports for data-driven decision-making. By leveraging a powerful CRM, Compare Bazaar can maximize efficiency, increase conversions, and foster long-term customer relationships.  
</p>


     

      <h3 className="text-3xl font-semibold text-gray-900 mb-5">
        Why CRM is Essential for B2B Businesses?
      </h3>
      <p className="text-gray-700 text-lg mb-6">
        B2B transactions are complex and require detailed tracking of customer interactions. CRM systems provide a centralized platform to manage every aspect of the sales process, ensuring efficiency and data-driven decision-making.
      </p>

      <ul className="text-gray-700 text-lg list-disc pl-6 space-y-4 mb-8">
        <li><span className="font-bold">Longer Sales Cycles:</span> B2B deals often take months to close; CRM helps monitor every touchpoint and nurture leads effectively.</li>
        <li><span className="font-bold">Account-Based Marketing (ABM):</span> CRM enables businesses to personalize outreach for high-value clients and improve conversion rates.</li>
        <li><span className="font-bold">Multiple Decision Makers:</span> Unlike B2C, B2B sales involve multiple stakeholders. CRM ensures seamless communication and record-keeping.</li>
        <li><span className="font-bold">Data-Driven Lead Generation:</span> Advanced analytics in CRM helps identify and prioritize high-converting prospects.</li>
        <li><span className="font-bold">Automation & Workflow Optimization:</span> CRM automates repetitive tasks such as follow-ups and email sequences, improving efficiency.</li>
        <li><span className="font-bold">Customer Retention & Relationship Management:</span> A well-implemented CRM strategy helps nurture long-term client relationships, leading to repeat business.</li>
      </ul>

      <div className="my-12 flex justify-center">
        <img 
          src="https://kylas.io/wp-content/uploads/2023/04/What-are-the-Crucial-Steps-in-the-CRM-Process-1024x576.jpg" 
          alt="CRM Process Diagram" 
          className="w-full max-w-4xl rounded-lg shadow-md" 
        />
      </div>

      <h3 className="text-3xl font-semibold text-gray-900 mb-5">
        Key Features of an Effective B2B CRM
      </h3>
      <p className="text-gray-700 text-lg mb-6">
        The right CRM should offer a range of features tailored to the needs of B2B businesses:
      </p>
      <ul className="text-gray-700 text-lg list-disc pl-6 space-y-4">
        <li><span className="font-bold">Lead & Contact Management:</span> Track customer interactions and maintain detailed records.</li>
        <li><span className="font-bold">Sales Pipeline Visibility:</span> Monitor deal progress and forecast revenue.</li>
        <li><span className="font-bold">Marketing Automation:</span> Automate email campaigns, follow-ups, and lead nurturing.</li>
        <li><span className="font-bold">Integration with Other Tools:</span> Connect with email, calendar, and analytics platforms.</li>
        <li><span className="font-bold">Reporting & Analytics:</span> Gain insights into sales performance and customer behavior.</li>
        <li><span className="font-bold">Mobile Accessibility:</span> Access CRM data on the go for improved productivity.</li>
      </ul>
    </div>
  </div>

  {/* What is CRM */}
  <div id="what-is-crm" className="py-20 bg-gray-50 rounded-xl shadow-lg">
    <div className="max-w-5xl mx-auto px-6 md:px-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">What Is CRM Software?</h2>
      <p className="text-gray-700 text-lg mb-4">
        CRM (Customer Relationship Management) software is a type of software businesses use to manage their sales and marketing interactions with current and potential customers. CRM stands for customer relationship management, so another way to think of CRM software is as a platform that helps companies manage their customer relationships throughout the customer lifecycle — from lead to renewal. With the help of a CRM system, you can generate leads, manage your deal pipeline, close sales, collect and store customer data, execute marketing campaigns, analyze business data and even automate workflows.
      </p>
      <p className="text-gray-700 text-lg mb-8">
        Any business engaged in sales can make excellent use of a CRM. For example, a clothing store may want to use a CRM to house customer data and identify its most loyal shoppers. A timeshare company can use a CRM to assist with lead management and ensure they are engaging their ideal prospects. An enterprise that wants to better coordinate between its sales and marketing teams will find CRM software gives it the tools to do so. However, a CRM system doesn't make sense for certain types of businesses. For example, a fast-food restaurant is unlikely to use a CRM, and so is a doctor's office. However, each may use other technology, such as a POS system and medical software, that contains applicable CRM functions.
      </p>

      <h3 className="text-2xl font-semibold text-gray-900 mb-5">Key Functionalities for B2B CRM:</h3>
      <ul className="list-disc pl-6 text-gray-700 text-lg mb-8 space-y-3">
        <li><span className="font-bold">✅ Lead Tracking & Management:</span> Capture leads from various sources like websites, emails, and ads. CRM software helps businesses keep track of lead activities and enables smooth follow-ups, improving lead conversion rates.</li>
        <li><span className="font-bold">✅ Sales Pipeline Visualization:</span> Monitor the different stages of deals and opportunities in your sales pipeline. Visualizing this helps predict revenue, allocate resources effectively, and manage team performance.</li>
        <li><span className="font-bold">✅ Automated Email & Follow-ups:</span> Schedule emails and follow-ups automatically, ensuring that no lead is missed and that your outreach is timely and personalized. This reduces manual work for your team.</li>
        <li><span className="font-bold">✅ Customer Data Analytics:</span> Gain deep insights into customer behavior and preferences, allowing you to tailor marketing efforts and sales strategies. This data-driven approach enables more informed decision-making.</li>
        <li><span className="font-bold">✅ Integration with Marketing Tools:</span> Seamlessly sync with email marketing platforms, social media, and ads to ensure a holistic view of customer interactions. This integration empowers your marketing team to reach the right audience at the right time.</li>
      </ul>

      <h3 className="text-2xl font-semibold text-gray-900 mb-5">Benefits of CRM for Businesses:</h3>
      <ul className="list-disc pl-6 text-gray-700 text-lg mb-8 space-y-3">
        <li><span className="font-bold">Improved Customer Experience:</span> CRM software allows you to provide more personalized and responsive service, enhancing the overall customer experience and fostering loyalty.</li>
        <li><span className="font-bold">Increased Efficiency:</span> Automation of manual tasks like data entry, follow-ups, and reporting frees up your team's time, allowing them to focus on higher-value activities.</li>
        <li><span className="font-bold">Better Collaboration:</span> With a centralized database, all team members have access to real-time customer information, enabling seamless collaboration between sales, marketing, and customer service teams.</li>
        <li><span className="font-bold">Stronger Customer Relationships:</span> By keeping track of customer interactions and preferences, you can tailor your communication, making customers feel valued and understood.</li>
        <li><span className="font-bold">Increased Revenue:</span> Streamlined processes, better lead management, and improved customer insights result in higher conversion rates, sales, and customer retention.</li>
      </ul>

      <div className="my-12 flex justify-center">
  <img 
    src="/images/crm.svg" 
    alt="CRM Process Diagram" 
    className="w-full max-w-4xl rounded-lg shadow-md"
    loading="lazy" // Optional for lazy loading
  />
</div>

    </div>
  </div>

  {/* Benefits of Implementing a CRM */}
  <div id="crm-benefits" className="py-20 bg-white rounded-xl shadow-lg">
    <div className="max-w-5xl mx-auto px-6 md:px-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Benefits of Implementing a CRM</h2>
      <p className="text-gray-700 text-lg mb-8 text-center">
        Implementing a CRM system can lead to improved customer satisfaction, increased sales, and better decision-making. It also helps in automating repetitive tasks and provides valuable insights through analytics.
      </p>
      
      <div className="space-y-8">
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
            <span className="text-blue-600 mr-2">1.</span> Higher Lead Conversion Rates
          </h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Average 30% increase in lead-to-customer conversion rates</li>
            <li>50% more sales-ready leads at 33% lower cost per lead</li>
            <li>Reduced lead leakage through automated follow-up sequences</li>
            <li>Prioritization of high-potential prospects using behavioral scoring</li>
            <li>Clear visibility into conversion bottlenecks for continuous optimization</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
            <span className="text-blue-600 mr-2">2.</span> Personalized Email Marketing & Outreach
          </h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Segment leads based on industry, company size, previous interactions, and engagement patterns</li>
            <li>Create buyer persona-specific content delivery pathways</li>
            <li>Implement behavioral segmentation based on website activity and content consumption</li>
            <li>Automate drip campaigns with dynamic content blocks that adapt to recipient attributes</li>
            <li>Progressive profiling to gather additional data points with each interaction</li>
            <li>Trigger-based communications responding to specific prospect actions</li>
            <li>Personalized subject lines increasing open rates by up to 26%</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
            <span className="text-blue-600 mr-2">3.</span> Improved Sales Forecasting & Revenue Growth
          </h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Use CRM analytics to predict sales trends with 80% higher accuracy</li>
            <li>Identify most profitable client segments and allocate resources accordingly</li>
            <li>Track velocity metrics to optimize sales cycle length</li>
            <li>Implement weighted pipeline calculations based on stage probabilities</li>
            <li>Create reliable quarterly and annual revenue projections</li>
            <li>Analyze win/loss patterns to refine sales approaches</li>
            <li>Monitor customer lifetime value and identify expansion opportunities</li>
            <li>Detect early warning signs of potential churn for proactive intervention</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
            <span className="text-blue-600 mr-2">4.</span> Enhanced Team Collaboration
          </h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>CRM enables marketing, sales, and support teams to work from a single source of truth</li>
            <li>Eliminate data silos with centralized customer information</li>
            <li>Transparent handoffs between departments with complete interaction history</li>
            <li>Real-time activity notifications for immediate follow-up opportunities</li>
            <li>Collaborative account planning for strategic clients</li>
            <li>Shared document repositories for consistent messaging</li>
            <li>Performance dashboards visible across teams for aligned objectives</li>
            <li>Automated task assignments based on customer journey stage</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
            <span className="text-blue-600 mr-2">5.</span> Streamlined Customer Onboarding & Retention
          </h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Map customer journeys and automate welcome sequences</li>
            <li>Schedule systematic check-ins at critical milestones</li>
            <li>Monitor product/service adoption metrics to identify training needs</li>
            <li>Trigger automated interventions for at-risk accounts</li>
            <li>Implement systematic renewal management processes</li>
            <li>Create tailored cross-sell/upsell campaigns based on usage patterns</li>
            <li>Track customer satisfaction scores and correlate with retention</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
            <span className="text-blue-600 mr-2">6.</span> Data-Driven Decision Making
          </h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Replace gut feelings with quantifiable metrics for business decisions</li>
            <li>A/B test different approaches to determine highest ROI activities</li>
            <li>Identify trends in customer preferences and buying behaviors</li>
            <li>Optimize territory assignments based on performance data</li>
            <li>Adjust marketing spend allocation based on attribution reporting</li>
            <li>Make informed product development decisions based on customer feedback</li>
            <li>Set realistic KPIs grounded in historical performance data</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
            <span className="text-blue-600 mr-2">7.</span> Regulatory Compliance & Data Management
          </h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Maintain organized records for industry-specific compliance requirements</li>
            <li>Implement consistent data entry standards across the organization</li>
            <li>Secure storage of customer communication records</li>
            <li>Automated data retention and archiving policies</li>
            <li>GDPR/CCPA compliant preference and consent management</li>
            <li>Audit trails for sensitive customer information access</li>
            <li>Simplified reporting for regulatory requirements</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
            <span className="text-blue-600 mr-2">8.</span> Competitive Advantage & Market Positioning
          </h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Faster response times than competitors (average 5x improvement)</li>
            <li>More consistent customer experiences across all touchpoints</li>
            <li>Better understanding of market needs through aggregated intelligence</li>
            <li>More accurate competitive displacement strategies</li>
            <li>Higher customer satisfaction scores leading to more referrals</li>
            <li>Ability to scale personalized service as company grows</li>
            <li>Clearer differentiation in customer communications</li>
          </ul>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600">

<rect width="1000" height="600" fill="#e6f7f5" />


<text x="100" y="80" font-family="Arial" font-size="40" font-weight="bold" fill="#1a365d">Benefits of using CRM for Retail</text>


<circle cx="900" cy="60" r="40" fill="#ffffff" stroke="#1a365d" stroke-width="2" />
<text x="870" y="70" font-family="Arial" font-size="16" font-weight="bold" fill="#1a365d">C B</text>
<text x="840" y="90" font-family="Arial" font-size="12" fill="#1a365d">Compare Bazar</text>


<rect x="400" y="370" width="200" height="150" rx="10" fill="#1a365d" />
<rect x="350" y="370" width="300" height="120" rx="5" fill="#ffffff" stroke="#1a365d" stroke-width="2" />


<rect x="360" y="380" width="50" height="100" fill="#f0a500" opacity="0.7" />
<rect x="420" y="390" width="220" height="20" rx="3" fill="#1a365d" />
<rect x="420" y="420" width="220" height="20" rx="3" fill="#1a365d" />
<rect x="420" y="450" width="220" height="20" rx="3" fill="#1a365d" />


<rect x="400" y="480" width="20" height="40" fill="#f0a500" />
<rect x="430" y="480" width="20" height="60" fill="#f0a500" />
<rect x="460" y="480" width="20" height="30" fill="#f0a500" />
<rect x="490" y="480" width="20" height="50" fill="#f0a500" />
<rect x="520" y="480" width="20" height="20" fill="#f0a500" />
<rect x="550" y="480" width="20" height="45" fill="#f0a500" />


<circle cx="210" y="300" r="40" fill="#ffffff" stroke="#1a365d" stroke-width="3" />
<text x="190" y="305" font-family="Arial" font-size="20" fill="#f0a500">❤️</text>
<text x="65" y="260" font-family="Arial" font-size="18" font-weight="bold" fill="#1a365d">Provides Exceptional</text>
<text x="65" y="285" font-family="Arial" font-size="18" font-weight="bold" fill="#1a365d">Personalization</text>


<circle cx="180" y="400" r="40" fill="#ffffff" stroke="#f0a500" stroke-width="3" />
<text x="160" y="405" font-family="Arial" font-size="20" fill="#1a365d">🧲</text>
<text x="53" y="460" font-family="Arial" font-size="18" font-weight="bold" fill="#1a365d">Boosts Customer</text>
<text x="53" y="485" font-family="Arial" font-size="18" font-weight="bold" fill="#1a365d">Retention</text>


<circle cx="220" y="500" r="40" fill="#ffffff" stroke="#1a365d" stroke-width="3" />
<text x="200" y="505" font-family="Arial" font-size="20" fill="#f0a500">🤝</text>
<text x="85" y="560" font-family="Arial" font-size="18" font-weight="bold" fill="#1a365d">Fosters Customer</text>
<text x="85" y="585" font-family="Arial" font-size="18" font-weight="bold" fill="#1a365d">Loyalty</text>


<circle cx="380" y="250" r="40" fill="#ffffff" stroke="#f0a500" stroke-width="3" />
<text x="360" y="255" font-family="Arial" font-size="20" fill="#1a365d">📈</text>
<text x="288" y="200" font-family="Arial" font-size="18" font-weight="bold" fill="#1a365d">Drives Sales</text>
<text x="288" y="225" font-family="Arial" font-size="18" font-weight="bold" fill="#1a365d">Growth</text>

<circle cx="500" y="200" r="40" fill="#ffffff" stroke="#1a365d" stroke-width="3" />
<text x="480" y="205" font-family="Arial" font-size="20" fill="#f0a500">📣</text>
<text x="360" y="135" font-family="Arial" font-size="18" font-weight="bold" fill="#1a365d">Enables More Effective Marketing</text>
<text x="383" y="160" font-family="Arial" font-size="18" font-weight="bold" fill="#1a365d">Campaigns with Higher ROI</text>


<circle cx="620" y="250" r="40" fill="#ffffff" stroke="#f0a500" stroke-width="3" />
<text x="600" y="255" font-family="Arial" font-size="20" fill="#1a365d">📊</text>
<text x="575" y="200" font-family="Arial" font-size="18" font-weight="bold" fill="#1a365d">Delivers Valuable</text>
<text x="575" y="225" font-family="Arial" font-size="18" font-weight="bold" fill="#1a365d">Analytics</text>


<circle cx="780" y="300" r="40" fill="#ffffff" stroke="#1a365d" stroke-width="3" />
<text x="760" y="305" font-family="Arial" font-size="20" fill="#f0a500">⭐</text>
<text x="818" y="260" font-family="Arial" font-size="18" font-weight="bold" fill="#1a365d">Enhances Overall</text>
<text x="818" y="285" font-family="Arial" font-size="14" font-weight="bold" fill="#1a365d">Company Performance</text>


<circle cx="820" y="400" r="40" fill="#ffffff" stroke="#f0a500" stroke-width="3" />
<text x="800" y="405" font-family="Arial" font-size="20" fill="#1a365d">👥</text>
<text x="863" y="390" font-family="Arial" font-size="18" font-weight="bold" fill="#1a365d">Improves</text>
<text x="863" y="415" font-family="Arial" font-size="18" font-weight="bold" fill="#1a365d">Customer</text>
<text x="863" y="440" font-family="Arial" font-size="18" font-weight="bold" fill="#1a365d">Support</text>


<circle cx="780" y="500" r="40" fill="#ffffff" stroke="#1a365d" stroke-width="3" />
<text x="760" y="505" font-family="Arial" font-size="20" fill="#f0a500">💰</text>
<text x="848" y="505" font-family="Arial" font-size="18" font-weight="bold" fill="#1a365d">Increases</text>
<text x="848" y="530" font-family="Arial" font-size="18" font-weight="bold" fill="#1a365d">Profitability</text>

<line x1="250" y1="300" x2="350" y2="370" stroke="#1a365d" stroke-width="2" stroke-dasharray="5,5" />
<line x1="220" y1="400" x2="350" y2="400" stroke="#f0a500" stroke-width="2" stroke-dasharray="5,5" />
<line x1="260" y1="500" x2="350" y2="450" stroke="#1a365d" stroke-width="2" stroke-dasharray="5,5" />
<line x1="380" y1="290" x2="400" y2="370" stroke="#f0a500" stroke-width="2" stroke-dasharray="5,5" />
<line x1="500" y1="240" x2="500" y2="370" stroke="#1a365d" stroke-width="2" stroke-dasharray="5,5" />
<line x1="620" y1="290" x2="600" y2="370" stroke="#f0a500" stroke-width="2" stroke-dasharray="5,5" />
<line x1="740" y1="300" x2="650" y2="370" stroke="#1a365d" stroke-width="2" stroke-dasharray="5,5" />
<line x1="780" y1="400" x2="650" y2="400" stroke="#f0a500" stroke-width="2" stroke-dasharray="5,5" />
<line x1="740" y1="500" x2="650" y2="450" stroke="#1a365d" stroke-width="2" stroke-dasharray="5,5" />
</svg>
      </div>


    </div>
  </div>

        {/* Types of CRM Solutions */}
        <div id="crm-types" className="py-20">
  <h2 className="text-3xl font-bold text-gray-900 mb-4">Types of CRM Solutions for B2B Businesses</h2>
  <p className="text-gray-700 text-lg mb-6">
    There are several types of CRM solutions, each designed to address different business needs and challenges.
  </p>
  <div className="overflow-x-auto">
    <table className="min-w-full bg-white border border-orange-500">
      <thead>
        <tr className="bg-gray-100">
          <th className="py-2 px-4 border border-orange-500">CRM Type</th>
          <th className="py-2 px-4 border border-orange-500">Features</th>
          <th className="py-2 px-4 border border-orange-500">Best For</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="py-2 px-4 border border-orange-500">Operational CRM</td>
          <td className="py-2 px-4 border border-orange-500">Lead tracking, sales automation, email workflows</td>
          <td className="py-2 px-4 border border-orange-500">Companies needing streamlined processes</td>
        </tr>
        <tr className="bg-gray-50">
          <td className="py-2 px-4 border border-orange-500">Analytical CRM</td>
          <td className="py-2 px-4 border border-orange-500">Customer behavior insights, predictive analytics</td>
          <td className="py-2 px-4 border border-orange-500">Data-driven businesses optimizing sales strategy</td>
        </tr>
        <tr>
          <td className="py-2 px-4 border border-orange-500">Collaborative CRM</td>
          <td className="py-2 px-4 border border-orange-500">Shared databases, multi-team collaboration</td>
          <td className="py-2 px-4 border border-orange-500">Businesses needing strong internal communication</td>
        </tr>
        <tr className="bg-gray-50">
          <td className="py-2 px-4 border border-orange-500">Strategic CRM</td>
          <td className="py-2 px-4 border border-orange-500">Long-term customer engagement focus</td>
          <td className="py-2 px-4 border border-orange-500">Businesses focusing on account-based marketing</td>
        </tr>
        <tr>
          <td className="py-2 px-4 border border-orange-500">AI-Powered CRM</td>
          <td className="py-2 px-4 border border-orange-500">Machine learning insights, automated recommendations</td>
          <td className="py-2 px-4 border border-orange-500">Businesses leveraging AI for personalization</td>
        </tr>
        <tr className="bg-gray-50">
          <td className="py-2 px-4 border border-orange-500">Social CRM</td>
          <td className="py-2 px-4 border border-orange-500">Social media integration, sentiment analysis</td>
          <td className="py-2 px-4 border border-orange-500">Companies focusing on brand engagement</td>
        </tr>
        <tr>
          <td className="py-2 px-4 border border-orange-500">Mobile CRM</td>
          <td className="py-2 px-4 border border-orange-500">Access CRM features on mobile devices</td>
          <td className="py-2 px-4 border border-orange-500">Remote teams and field sales representatives</td>
        </tr>
      </tbody>
    </table>


    <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" className='py-10'>
  <defs>
    <linearGradient id="bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f1f5f9" />
      <stop offset="100%" stop-color="#e2e8f0" />
    </linearGradient>
    <filter id="drop-shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="2" dy="4" stdDeviation="4" flood-opacity="0.2" />
    </filter>
    <radialGradient id="center-glow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
      <stop offset="0%" stop-color="#1e40af" />
      <stop offset="100%" stop-color="#000e54" />
    </radialGradient>
  </defs>
  
 
  
  <text x="400" y="30" font-family="Arial, sans-serif" font-size="32" font-weight="bold" text-anchor="middle" fill="#000e54">7 Types of CRM Software</text>
  <line x1="275" y1="75" x2="525" y2="75" stroke="#000e54" stroke-width="3" stroke-linecap="round" />
  
  <circle cx="400" cy="300" r="85" fill="url(#center-glow)" filter="url(#drop-shadow)" />
  <text x="400" y="290" font-family="Arial, sans-serif" font-size="28" font-weight="bold" text-anchor="middle" fill="white">CRM</text>
  <text x="400" y="315" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="white">Customer Relationship</text>
  <text x="400" y="330" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="white">Management</text>
  
  <circle cx="200" cy="260" r="70" fill="#0284c7" filter="url(#drop-shadow)" />
  <text x="200" y="230" font-family="Arial, sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="white">Operational</text>
  <text x="200" y="260" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="white">Sales Automation</text>
  <text x="200" y="275" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="white">Marketing</text>
  <text x="200" y="290" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="white">Service</text>
  
 
<path d="M200,200 a12,12 0 1,0 0.1,0 M188,200 L184,200 M212,200 L216,200 M192,192 L189,189 M208,192 L211,189 M192,208 L189,211 M208,208 L211,211"
  stroke="white" stroke-width="2" fill="none" />
<circle cx="200" cy="200" r="6" fill="white" />
  
  <line x1="280" y1="210" x2="330" y2="230" stroke="#0284c7" stroke-width="3" stroke-linecap="round" />
  
  <circle cx="600" cy="250" r="70" fill="#7e22ce" filter="url(#drop-shadow)" />
  <text x="600" y="240" font-family="Arial, sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="white">Analytical</text>
  <text x="600" y="260" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="white">Data Mining</text>
  <text x="600" y="275" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="white">Reporting</text>
  <text x="600" y="290" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="white">Forecasting</text>
  
  <g transform="translate(600, 205) scale(0.8)">
    <rect x="-30" y="0" width="10" height="25" fill="white" />
    <rect x="-15" y="-10" width="10" height="35" fill="white" />
    <rect x="0" y="-5" width="10" height="30" fill="white" />
    <rect x="15" y="-15" width="10" height="40" fill="white" />
    
    <polyline points="-25,10 -10,-5 5,5 20,-10" 
      stroke="white" stroke-width="2.5" fill="none" />
    <circle cx="-25" cy="10" r="3" fill="white" />
    <circle cx="-10" cy="-5" r="3" fill="white" />
    <circle cx="5" cy="5" r="3" fill="white" />
    <circle cx="20" cy="-10" r="3" fill="white" />
  </g>
  
  <line x1="520" y1="220" x2="470" y2="230" stroke="#7e22ce" stroke-width="3" stroke-linecap="round" />
  
  <circle cx="600" cy="450" r="70" fill="#0891b2" filter="url(#drop-shadow)" />
  <text x="600" y="430" font-family="Arial, sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="white">Collaborative</text>
  <text x="600" y="460" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="white">Shared Data</text>
  <text x="600" y="475" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="white">Team Access</text>
  <text x="600" y="490" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="white">Interaction</text>
  
  <circle cx="590" cy="400" r="5" fill="white" />
  <circle cx="610" cy="400" r="5" fill="white" />
  <path d="M585,410 Q590,415 595,410 M605,410 Q610,415 615,410" stroke="white" stroke-width="1.5" fill="none" />
  <path d="M590,405 L590,412 Q600,417 610,412 L610,405" stroke="white" stroke-width="1.5" fill="none" />
  
  <line x1="520" y1="420" x2="470" y2="370" stroke="#0891b2" stroke-width="3" stroke-linecap="round" />
  
  <circle cx="200" cy="450" r="70" fill="#10b981" filter="url(#drop-shadow)" />
  <text x="200" y="430" font-family="Arial, sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="white">Strategic</text>
  <text x="200" y="460" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="white">Customer</text>
  <text x="200" y="475" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="white">Retention</text>
  <text x="200" y="490" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="white">Loyalty</text>
  
  <circle cx="200" cy="400" r="10" stroke="white" stroke-width="2" fill="none" />
  <circle cx="200" cy="400" r="5" stroke="white" stroke-width="2" fill="none" />
  <circle cx="200" cy="400" r="1" fill="white" />
  <line x1="185" y1="400" x2="195" y2="400" stroke="white" stroke-width="1" />
  <line x1="205" y1="400" x2="215" y2="400" stroke="white" stroke-width="1" />
  <line x1="200" y1="385" x2="200" y2="395" stroke="white" stroke-width="1" />
  <line x1="200" y1="405" x2="200" y2="415" stroke="white" stroke-width="1" />
  
  <line x1="280" y1="420" x2="330" y2="370" stroke="#10b981" stroke-width="3" stroke-linecap="round" />
  
  <circle cx="300" cy="100" r="60" fill="#3b82f6" filter="url(#drop-shadow)" />
  <text x="300" y="90" font-family="Arial, sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="white">Cloud-Based</text>
  <text x="300" y="110" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="white">SaaS</text>
  <text x="300" y="125" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="white">Subscription</text>
  
  <path d="M285,70 Q275,75 280,85 Q270,85 270,95 Q280,100 290,95 Q295,105 305,100 Q315,105 315,95 Q325,95 325,85 Q320,75 310,80 Q305,65 285,70" 
    stroke="white" stroke-width="1.5" fill="white" fill-opacity="0.3" />
  
  <line x1="340" y1="140" x2="380" y2="180" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" />
  
  <circle cx="500" cy="100" r="60" fill="#8b5cf6" filter="url(#drop-shadow)" />
  <text x="500" y="90" font-family="Arial, sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="white">AI-Powered</text>
  <text x="500" y="110" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="white">Automation</text>
  <text x="500" y="125" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="white">Intelligence</text>
  
  <path d="M500,60 Q490,55 485,65 Q475,65 475,75 Q480,80 485,75 Q490,85 500,80 Q510,85 515,75 Q520,80 525,75 Q525,65 515,65 Q510,55 500,60" 
    stroke="white" stroke-width="1.5" fill="white" fill-opacity="0.3" />
  <path d="M495,70 L495,75 M500,70 L500,77 M505,70 L505,75" stroke="white" stroke-width="1" />
  
  <line x1="460" y1="140" x2="420" y2="180" stroke="#8b5cf6" stroke-width="2" stroke-linecap="round" />
  
  <circle cx="400" cy="500" r="60" fill="#f59e0b" filter="url(#drop-shadow)" />
  <text x="400" y="490" font-family="Arial, sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="white">Industry</text>
  <text x="400" y="510" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="white">Specific</text>
  <text x="400" y="525" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="white">Specialized</text>
  
  <path d="M385,465 L385,480 L415,480 L415,465 Z" stroke="white" stroke-width="1.5" fill="white" fill-opacity="0.3" />
  <path d="M390,465 L390,455 L410,455 L410,465" stroke="white" stroke-width="1.5" fill="none" />
  <path d="M395,480 L395,470 L400,470 L400,480 M405,480 L405,470 L410,470 L410,480" stroke="white" stroke-width="1" />
  
  <line x1="400" y1="440" x2="400" y2="380" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" />
  
  <circle cx="400" cy="300" r="90" fill="none" stroke="#1e3a8a" stroke-width="2" opacity="0.5">
    <animate attributeName="r" from="85" to="95" dur="2s" repeatCount="indefinite" />
    <animate attributeName="opacity" from="0.5" to="0" dur="2s" repeatCount="indefinite" />
  </circle>
  
  <g stroke="#64748b" stroke-width="1" stroke-dasharray="3,3" opacity="0.3">
    <line x1="200" y1="150" x2="600" y2="150" />
    <line x1="200" y1="450" x2="600" y2="450" />
    <line x1="300" y1="100" x2="500" y2="100" />
    <line x1="200" y1="150" x2="300" y2="100" />
    <line x1="600" y1="150" x2="500" y2="100" />
    <line x1="200" y1="450" x2="400" y2="500" />
    <line x1="600" y1="450" x2="400" y2="500" />
  </g>
</svg>
  </div>
  <div className="mt-6">
    <h3 className="text-xl font-semibold text-gray-900 mb-2">Example Use Cases:</h3>
    <ul className="list-disc list-inside text-gray-700 text-lg">
      <li>A SaaS Company using CRM for subscription management & renewals.</li>
      <li>A B2B Service Provider automating lead nurturing and email marketing.</li>
      <li>An E-commerce business integrating AI-driven customer insights.</li>
      <li>A retail company using social CRM for brand engagement.</li>
      <li>A sales team utilizing mobile CRM for on-the-go client interactions.</li>
    </ul>
  </div>
</div>
<CRMDiagram/>


        {/* Pricing Models for CRM Software */}
  <div id="crm-pricing" className="py-20">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">Pricing Models for CRM Software</h2>
    <p className="text-gray-700 text-lg mb-6">
      CRM costs vary based on features and business needs.
    </p>
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h3 className="text-xl font-semibold mb-4">Common Pricing Models</h3>
      <ul className="space-y-4">
        <li className="flex items-start">
          <span className="font-bold mr-2">1.</span>
          <div>
            <p className="font-medium">Subscription-Based Pricing</p>
            <p className="text-gray-600">Monthly/annual fees per user.</p>
            <p className="text-gray-600">Best for small-to-medium businesses (e.g., HubSpot, Zoho CRM).</p>
          </div>
        </li>
        <li className="flex items-start">
          <span className="font-bold mr-2">2.</span>
          <div>
            <p className="font-medium">Feature-Based Pricing</p>
            <p className="text-gray-600">Pay for only the needed features.</p>
            <p className="text-gray-600">Ideal for startups with limited budgets.</p>
          </div>
        </li>
        <li className="flex items-start">
          <span className="font-bold mr-2">3.</span>
          <div>
            <p className="font-medium">Enterprise Custom Pricing</p>
            <p className="text-gray-600">Fully customized CRM solutions for large organizations.</p>
            <p className="text-gray-600">Best for businesses needing advanced analytics and automation.</p>
          </div>
        </li>
      </ul>
     
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400">
  
  <rect width="800" height="400" fill="#f8f9fa" />

  <text x="400" y="40" font-family="Arial" font-size="24" font-weight="bold" text-anchor="middle" fill="#333333">Common CRM Pricing Models</text>
  
 
  <rect x="80" y="80" width="200" height="240" rx="10" fill="#003366" />
  <text x="180" y="120" font-family="Arial" font-size="18" font-weight="bold" text-anchor="middle" fill="white">1. Subscription-Based</text>
  <text x="180" y="150" font-family="Arial" font-size="10" text-anchor="middle" fill="white">Monthly/annual fees per user</text>
  <text x="180" y="180" font-family="Arial" font-size="10" text-anchor="middle" fill="white">Best for small-to-medium</text>
  <text x="180" y="200" font-family="Arial" font-size="10" text-anchor="middle" fill="white">businesses</text>
  <text x="180" y="230" font-family="Arial" font-size="10" text-anchor="middle" fill="white">Examples: HubSpot, Zoho CRM</text>

  <circle cx="180" cy="280" r="25" fill="#ff8c00" />
  <text x="180" y="287" font-family="Arial" font-size="20" font-weight="bold" text-anchor="middle" fill="white">$</text>
  

  <rect x="300" y="80" width="200" height="240" rx="10" fill="#ff8c00" />
  <text x="400" y="120" font-family="Arial" font-size="18" font-weight="bold" text-anchor="middle" fill="white">2. Feature-Based</text>
  <text x="400" y="150" font-family="Arial" font-size="0" text-anchor="middle" fill="white">Pay for only needed features</text>
  <text x="400" y="180" font-family="Arial" font-size="10" text-anchor="middle" fill="white">Ideal for startups with</text>
  <text x="400" y="200" font-family="Arial" font-size="10" text-anchor="middle" fill="white">limited budgets</text>
  

  <rect x="375" y="230" width="20" height="20" fill="#003366" />
  <rect x="400" y="230" width="20" height="20" fill="#003366" />
  <rect x="375" y="255" width="20" height="20" fill="#003366" />
  <rect x="400" y="255" width="20" height="20" fill="#003366" opacity="0.5" />
  <rect x="375" y="280" width="20" height="20" fill="#003366" opacity="0.5" />
  <rect x="400" y="280" width="20" height="20" fill="#003366" opacity="0.3" />
 
  <rect x="520" y="80" width="200" height="240" rx="10" fill="#003366" />
  <text x="620" y="120" font-family="Arial" font-size="18" font-weight="bold" text-anchor="middle" fill="white">3. Enterprise Custom</text>
  <text x="620" y="150" font-family="Arial" font-size="10" text-anchor="middle" fill="white">Fully customized solutions</text>
  <text x="620" y="180" font-family="Arial" font-size="10" text-anchor="middle" fill="white">Best for large organizations</text>
  <text x="620" y="200" font-family="Arial" font-size="10" text-anchor="middle" fill="white">with advanced needs</text>
  
  <circle cx="585" cy="260" r="15" fill="#ff8c00" />
  <circle cx="620" cy="260" r="15" fill="#ff8c00" />
  <circle cx="655" cy="260" r="15" fill="#ff8c00" />
  <rect x="580" y="280" width="80" height="10" fill="#ff8c00" />
  
  <text x="400" y="360" font-family="Arial" font-size="14" text-anchor="middle" fill="#666666">Choose the pricing model that best fits your business needs and budget</text>
</svg>
  </div>
 

  {/* Key Features to Look for in a B2B CRM */}
  <div id="key-features" className="py-20">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features to Look for in a B2B CRM</h2>
    <p className="text-gray-700 text-lg mb-6">
      When choosing a CRM system, look for these essential features that drive business growth.
    </p>
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <ul className="space-y-4">
        <li className="flex items-start">
          <span className="text-green-500 mr-2">✅</span>
          <div>
            <p className="font-medium">Lead Scoring & Prioritization</p>
            <p className="text-gray-600">Rank leads based on potential value.</p>
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-green-500 mr-2">✅</span>
          <div>
            <p className="font-medium">Automated Email Workflows</p>
            <p className="text-gray-600">Send drip campaigns and follow-ups.</p>
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-green-500 mr-2">✅</span>
          <div>
            <p className="font-medium">Sales Forecasting & Analytics</p>
            <p className="text-gray-600">Predict revenue and optimize sales.</p>
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-green-500 mr-2">✅</span>
          <div>
            <p className="font-medium">Third-Party Integrations</p>
            <p className="text-gray-600">Sync CRM with marketing and ad platforms.</p>
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-green-500 mr-2">✅</span>
          <div>
            <p className="font-medium">Mobile Accessibility</p>
            <p className="text-gray-600">Manage CRM on the go with mobile apps.</p>
          </div>
        </li>
      </ul>

    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500">
  
  <rect width="800" height="500" fill="#f8f9fa" />
  
  
  <text x="400" y="50" font-family="Arial" font-size="24" font-weight="bold" text-anchor="middle" fill="#333333">Key Features to Look for in a B2B CRM</text>
  

  <circle cx="400" cy="250" r="80" fill="#003366" />
  <text x="400" y="250" font-family="Arial" font-size="18" font-weight="bold" text-anchor="middle" fill="white">Business</text>
  <text x="400" y="275" font-family="Arial" font-size="18" font-weight="bold" text-anchor="middle" fill="white">Growth</text>
  

  <circle cx="180" cy="150" r="60" fill="#ff8c00" />
  <text x="180" y="140" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle" fill="white">Lead Scoring</text>
  <text x="180" y="160" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle" fill="white">& Prioritization</text>
  <text x="180" y="180" font-family="Arial" font-size="12" text-anchor="middle" fill="white">Rank leads by value</text>
  

  <line x1="236" y1="180" x2="332" y2="222" stroke="#003366" stroke-width="3" />
  <text x="290" y="190" font-family="Arial" font-size="12" text-anchor="middle" fill="#333333">Focused Sales</text>
  <text x="290" y="205" font-family="Arial" font-size="12" text-anchor="middle" fill="#333333">Efforts</text>
  
 
  <circle cx="180" cy="350" r="60" fill="#003366" />
  <text x="180" y="340" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle" fill="white">Automated Email</text>
  <text x="180" y="360" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle" fill="white">Workflows</text>
  <text x="180" y="380" font-family="Arial" font-size="12" text-anchor="middle" fill="white">Drip campaigns</text>
  

  <line x1="236" y1="326" x2="332" y2="278" stroke="#ff8c00" stroke-width="3" />
  <text x="290" y="320" font-family="Arial" font-size="12" text-anchor="middle" fill="#333333">Consistent</text>
  <text x="290" y="335" font-family="Arial" font-size="12" text-anchor="middle" fill="#333333">Engagement</text>
  

  <circle cx="400" cy="430" r="60" fill="#ff8c00" />
  <text x="400" y="420" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle" fill="white">Sales Forecasting</text>
  <text x="400" y="440" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle" fill="white">& Analytics</text>
  <text x="400" y="460" font-family="Arial" font-size="12" text-anchor="middle" fill="white">Predict revenue</text>
  
  
  <line x1="400" y1="370" x2="400" y2="330" stroke="#003366" stroke-width="3" />
  <text x="440" y="365" font-family="Arial" font-size="12" text-anchor="middle" fill="#333333">Strategic</text>
  <text x="440" y="380" font-family="Arial" font-size="12" text-anchor="middle" fill="#333333">Planning</text>
  

  <circle cx="620" cy="350" r="60" fill="#003366" />
  <text x="620" y="340" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle" fill="white">Third-Party</text>
  <text x="620" y="360" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle" fill="white">Integrations</text>
  <text x="620" y="380" font-family="Arial" font-size="12" text-anchor="middle" fill="white">Sync platforms</text>
  

  <line x1="564" y1="326" x2="468" y2="278" stroke="#ff8c00" stroke-width="3" />
  <text x="530" y="320" font-family="Arial" font-size="12" text-anchor="middle" fill="#333333">Unified</text>
  <text x="530" y="335" font-family="Arial" font-size="12" text-anchor="middle" fill="#333333">Systems</text>
  

  <circle cx="620" cy="150" r="60" fill="#ff8c00" />
  <text x="620" y="140" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle" fill="white">Mobile</text>
  <text x="620" y="160" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle" fill="white">Accessibility</text>
  <text x="620" y="180" font-family="Arial" font-size="12" text-anchor="middle" fill="white">CRM on the go</text>
  
  
  <line x1="564" y1="180" x2="468" y2="222" stroke="#003366" stroke-width="3" />
  <text x="530" y="190" font-family="Arial" font-size="12" text-anchor="middle" fill="#333333">Responsive</text>
  <text x="530" y="205" font-family="Arial" font-size="12" text-anchor="middle" fill="#333333">Team</text>
  

  <text x="162" y="115" font-family="Arial" font-size="18" font-weight="bold" text-anchor="middle" fill="#003366">✓</text>
  <text x="162" y="315" font-family="Arial" font-size="18" font-weight="bold" text-anchor="middle" fill="#ff8c00">✓</text>
  <text x="382" y="395" font-family="Arial" font-size="18" font-weight="bold" text-anchor="middle" fill="#003366">✓</text>
  <text x="602" y="315" font-family="Arial" font-size="18" font-weight="bold" text-anchor="middle" fill="#ff8c00">✓</text>
  <text x="602" y="115" font-family="Arial" font-size="18" font-weight="bold" text-anchor="middle" fill="#003366">✓</text>
</svg>
  </div>
 

  {/* How CRM Enhances Lead Generation & Email Marketing */}
  <div id="lead-generation" className="py-20">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">How CRM Enhances Lead Generation & Email Marketing</h2>
    <p className="text-gray-700 text-lg mb-6">
      A CRM-powered lead generation system allows businesses to attract, nurture, and convert leads effectively.
    </p>
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h3 className="text-xl font-semibold mb-4">Lead Generation Process with CRM:</h3>
      <ul className="space-y-6">
        <li className="flex items-start">
          <span className="font-bold mr-2">1.</span>
          <div>
            <p className="font-medium">Attract Leads</p>
            <ul className="text-gray-600 ml-4 list-disc space-y-1 mt-1">
              <li>Capture contacts via landing pages, social media, and ads</li>
              <li>Track lead source attribution for marketing ROI analysis</li>
              <li>Implement website visitor tracking with company identification</li>
              <li>Create gated content with automated CRM entry</li>
              <li>Manage event registrations and webinar attendees</li>
              <li>Deploy chatbots with direct CRM integration</li>
            </ul>
          </div>
        </li>
        <li className="flex items-start">
          <span className="font-bold mr-2">2.</span>
          <div>
            <p className="font-medium">Qualify Leads</p>
            <ul className="text-gray-600 ml-4 list-disc space-y-1 mt-1">
              <li>Use lead scoring to prioritize high-value prospects</li>
              <li>Implement predictive lead scoring using AI algorithms</li>
              <li>Create qualification frameworks (BANT, MEDDIC, etc.)</li>
              <li>Set up automated routing rules based on lead criteria</li>
              <li>Develop lead nurturing paths for different qualification levels</li>
              <li>Track engagement metrics to identify sales-readiness</li>
            </ul>
          </div>
        </li>
        <li className="flex items-start">
          <span className="font-bold mr-2">3.</span>
          <div>
            <p className="font-medium">Nurture with Email Marketing</p>
            <ul className="text-gray-600 ml-4 list-disc space-y-1 mt-1">
              <li>Automated drip campaigns for engagement</li>
              <li>Industry-specific content journeys</li>
              <li>Re-engagement sequences for dormant leads</li>
              <li>Educational sequences to address pain points</li>
              <li>Case study distribution based on industry interest</li>
              <li>Trigger-based campaigns responding to specific actions</li>
            </ul>
          </div>
        </li>
        <li className="flex items-start">
          <span className="font-bold mr-2">4.</span>
          <div>
            <p className="font-medium">Convert into Customers</p>
            <ul className="text-gray-600 ml-4 list-disc space-y-1 mt-1">
              <li>Move leads through the sales funnel efficiently</li>
              <li>Automated meeting scheduling with sales representatives</li>
              <li>Proposal and quote generation with tracking capabilities</li>
              <li>Follow-up sequences after sales meetings</li>
              <li>Contract management and electronic signature integration</li>
              <li>Onboarding sequence activation upon conversion</li>
            </ul>
          </div>
        </li>
      </ul>
      
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500">

  <rect width="800" height="500" fill="#0a2457" />
  
 
  <circle cx="400" cy="250" r="80" fill="#ff7f27" />
  <text x="400" y="240" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-weight="bold" font-size="24">LEAD</text>
  <text x="400" y="270" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-weight="bold" font-size="24">GENERATION</text>
  
 
  <rect x="320" y="60" width="160" height="70" rx="15" fill="#ff7f27" opacity="0.9" />
  <text x="400" y="105" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-weight="bold" font-size="18">Higher Revenue</text>
 
  <line x1="400" y1="130" x2="400" y2="170" stroke="#ff7f27" stroke-width="2" />

  <rect x="320" y="370" width="160" height="70" rx="15" fill="#ff7f27" opacity="0.9" />
  <text x="400" y="415" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-weight="bold" font-size="18">Brand Recognition</text>
  
  <line x1="400" y1="370" x2="400" y2="330" stroke="#ff7f27" stroke-width="2" />
  
 
  <rect x="50" y="110" width="200" height="70" rx="15" fill="#ff7f27" opacity="0.9" />
  <text x="150" y="155" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-weight="bold" font-size="18">Increased Your Market</text>
  <text x="150" y="175" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-weight="bold" font-size="18">Potential</text>
 
  <line x1="250" y1="145" x2="330" y2="220" stroke="#ff7f27" stroke-width="2" />
  

  <rect x="50" y="215" width="200" height="70" rx="15" fill="#ff7f27" opacity="0.9" />
  <text x="150" y="260" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-weight="bold" font-size="18">High Quality Leads</text>
 
  <line x1="250" y1="250" x2="320" y2="250" stroke="#ff7f27" stroke-width="2" />
  

  <rect x="50" y="320" width="200" height="70" rx="15" fill="#ff7f27" opacity="0.9" />
  <text x="150" y="365" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-weight="bold" font-size="18">More Engagement</text>

  <line x1="250" y1="355" x2="330" y2="280" stroke="#ff7f27" stroke-width="2" />
  
  
  <rect x="550" y="110" width="200" height="70" rx="15" fill="#ff7f27" opacity="0.9" />
  <text x="650" y="155" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-weight="bold" font-size="18">Better Business</text>
  <text x="650" y="175" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-weight="bold" font-size="18">Opportunities</text>
  
  <line x1="550" y1="145" x2="470" y2="220" stroke="#ff7f27" stroke-width="2" />
  
  
  <rect x="550" y="215" width="200" height="70" rx="15" fill="#ff7f27" opacity="0.9" />
  <text x="650" y="260" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-weight="bold" font-size="18">More Sales</text>
 
  <line x1="550" y1="250" x2="480" y2="250" stroke="#ff7f27" stroke-width="2" />
  

  <rect x="550" y="320" width="200" height="70" rx="15" fill="#ff7f27" opacity="0.9" />
  <text x="650" y="365" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-weight="bold" font-size="18">Higher Conversion Rate</text>
  
  <line x1="550" y1="355" x2="470" y2="280" stroke="#ff7f27" stroke-width="2" />
  

  <text x="400" y="470" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-weight="bold" font-size="20">fluentCRM  with Compare Bazar</text>
</svg>
  </div>
  
  {/* How CRM Supports Email Marketing & Automation */}
  <div id="email-marketing" className="py-20">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">How CRM Supports Email Marketing & Automation</h2>
    <p className="text-gray-700 text-lg mb-6">
      CRM-driven email marketing ensures timely and relevant communication with leads.
    </p>
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <ul className="space-y-6">
        <li className="flex items-start">
          <span className="font-bold mr-2">1.</span>
          <div>
            <p className="font-medium">Automated Drip Campaigns</p>
            <ul className="text-gray-600 ml-4 list-disc space-y-1 mt-1">
              <li>Send a sequence of emails based on user actions</li>
              <li>Timing optimization: Determine ideal intervals between emails</li>
              <li>Content progression: Start educational, gradually introduce sales elements</li>
              <li>Multi-channel integration: Coordinate email with social and ad retargeting</li>
              <li>Campaign performance metrics: Track completion and conversion rates</li>
              <li>Example sequence: Welcome email → Educational content → Industry-specific case study → Solution comparison → Sales pitch → Follow-up → Final offer</li>
            </ul>
          </div>
        </li>
        <li className="flex items-start">
          <span className="font-bold mr-2">2.</span>
          <div>
            <p className="font-medium">Email Personalization & Segmentation</p>
            <ul className="text-gray-600 ml-4 list-disc space-y-1 mt-1">
              <li>Group leads based on industry, interests, and behavior</li>
              <li>Dynamic content blocks that change based on recipient attributes</li>
              <li>Personalization tokens for company name, contact name, industry references</li>
              <li>Behavioral segmentation based on content engagement patterns</li>
              <li>Interest-based segmentation from website tracking data</li>
              <li>Integration with firmographic data for company-specific messaging</li>
              <li>Recommendation engines suggesting relevant content and solutions</li>
            </ul>
          </div>
        </li>
        <li className="flex items-start">
          <span className="font-bold mr-2">3.</span>
          <div>
            <p className="font-medium">A/B Testing & Analytics</p>
            <ul className="text-gray-600 ml-4 list-disc space-y-1 mt-1">
              <li>Test subject lines, CTA buttons, and content to optimize email performance</li>
              <li>Split testing of send times for optimal open rates</li>
              <li>Content format testing (text vs. HTML, long vs. short form)</li>
              <li>CTA placement and style testing for click-through optimization</li>
              <li>From-name testing (personal vs. company branding)</li>
              <li>Comprehensive performance dashboards showing key metrics</li>
              <li>Attribution modeling to connect email engagement to revenue</li>
            </ul>
          </div>
        </li>
        <li className="flex items-start">
          <span className="font-bold mr-2">4.</span>
          <div>
            <p className="font-medium">Engagement Monitoring & Scoring</p>
            <ul className="text-gray-600 ml-4 list-disc space-y-1 mt-1">
              <li>Track open rates, click-through rates, and content interactions</li>
              <li>Score engagement to identify high-potential prospects</li>
              <li>Set up alerts for sales when engagement thresholds are reached</li>
              <li>Monitor unsubscribe and complaint rates for list health</li>
              <li>Implement re-engagement campaigns for inactive subscribers</li>
              <li>Analyze forwarding and sharing patterns to identify champions</li>
              <li>Connect email metrics to overall lead scoring models</li>
            </ul>
          </div>
        </li>
      </ul>
      <div className="my-12 flex justify-center">
        <img 
          src="https://www.rolustech.com/wp-content/uploads/2017/01/Blog-Banner-mid.jpg" 
          alt="CRM Process Diagram" 
          className="w-full max-w-4xl rounded-lg shadow-md" 
        />
      </div>
    </div>
    
  </div>

  {/* Integration Capabilities: CRM in a B2B Tech Stack */}
  <div id="integration" className="py-20">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">Integration Capabilities: CRM in a B2B Tech Stack</h2>
    <p className="text-gray-700 text-lg mb-6">
      A strong CRM integrates seamlessly with various business tools.
    </p>
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <ul className="space-y-6">
        <li className="flex items-start">
          <span className="font-bold mr-2">1.</span>
          <div>
            <p className="font-medium">Email Marketing Platforms</p>
            <ul className="text-gray-600 ml-4 list-disc space-y-1 mt-1">
              <li>Mailchimp, ActiveCampaign, HubSpot – Sync email campaigns with CRM</li>
              <li>Bi-directional data synchronization ensuring consistent information</li>
              <li>Campaign performance metrics imported into CRM for holistic reporting</li>
              <li>Unified subscriber and contact management across platforms</li>
              <li>Automated list updates based on CRM status changes</li>
              <li>Suppress converted leads from marketing campaigns</li>
              <li>Tag-based segmentation shared between systems</li>
            </ul>
          </div>
        </li>
        <li className="flex items-start">
          <span className="font-bold mr-2">2.</span>
          <div>
            <p className="font-medium">Lead Generation Tools</p>
            <ul className="text-gray-600 ml-4 list-disc space-y-1 mt-1">
              <li>LinkedIn Sales Navigator, ZoomInfo – Capture and qualify leads</li>
              <li>Automated contact and company data enrichment</li>
              <li>Social selling integration for relationship building</li>
              <li>Intent data platforms identifying companies actively researching solutions</li>
              <li>Webinar platforms with direct registration-to-lead conversion</li>
              <li>Form builders with progressive profiling capabilities</li>
              <li>Website visitor identification tools with company lookup</li>
            </ul>
          </div>
        </li>
        <li className="flex items-start">
          <span className="font-bold mr-2">3.</span>
          <div>
            <p className="font-medium">Sales & Customer Support</p>
            <ul className="text-gray-600 ml-4 list-disc space-y-1 mt-1">
              <li>Salesforce, Zendesk, Intercom – Manage customer interactions</li>
              <li>Unified customer view across marketing, sales and support</li>
              <li>Ticket history and resolution tracking in customer records</li>
              <li>Service level agreement (SLA) monitoring and alerting</li>
              <li>Customer health scoring based on support interactions</li>
              <li>Knowledge base integration for consistent information delivery</li>
              <li>Voice calling platforms with automatic call logging</li>
            </ul>
          </div>
        </li>
        <li className="flex items-start">
          <span className="font-bold mr-2">4.</span>
          <div>
            <p className="font-medium">Advertising & Retargeting</p>
            <ul className="text-gray-600 ml-4 list-disc space-y-1 mt-1">
              <li>Google Ads, Facebook Ads – Retarget CRM leads with paid ads</li>
              <li>Custom audience creation based on CRM segments</li>
              <li>Look-alike audience generation from high-value customer profiles</li>
              <li>Ad performance data imported into CRM for attribution</li>
              <li>Campaign budget allocation based on lead quality metrics</li>
              <li>Sequential advertising aligned with email nurturing stages</li>
              <li>Conversion tracking across multiple platforms</li>
            </ul>
          </div>
        </li>
        <li className="flex items-start">
          <span className="font-bold mr-2">5.</span>
          <div>
            <p className="font-medium">Analytics & Business Intelligence</p>
            <ul className="text-gray-600 ml-4 list-disc space-y-1 mt-1">
              <li>Tableau, Power BI – Visualize CRM data for advanced insights</li>
              <li>Custom dashboard creation for executive reporting</li>
              <li>Predictive analytics for sales forecasting and opportunity scoring</li>
              <li>Customer journey analytics identifying conversion patterns</li>
              <li>ROI calculation across marketing channels and campaigns</li>
              <li>Cohort analysis for customer retention and expansion metrics</li>
              <li>Competitive intelligence integration for market positioning</li>
            </ul>
          </div>
        </li>
      </ul>
    
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
 
 <rect width="800" height="600" fill="#f5f7fa" rx="5" ry="5"/>
 
 <text x="400" y="50" font-family="Arial, sans-serif" font-size="24" font-weight="bold" text-anchor="middle" fill="#1e3a8a">CRM Integration Capabilities</text>
 

 <circle cx="400" cy="300" r="100" fill="#1e3a8a" opacity="0.9"/>
 <text x="400" y="300" font-family="Arial, sans-serif" font-size="22" font-weight="bold" text-anchor="middle" fill="white">CRM</text>
 <text x="400" y="330" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="white">Core Platform</text>
 

 <circle cx="180" cy="150" r="70" fill="#f97316" opacity="0.9"/>
 <text x="180" y="140" font-family="Arial, sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="white">Email Marketing</text>
 <text x="180" y="160" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="white">Mailchimp,</text>
 <text x="180" y="175" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="white">ActiveCampaign</text>
 

 <circle cx="180" cy="450" r="70" fill="#f97316" opacity="0.9"/>
 <text x="180" y="440" font-family="Arial, sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="white">Lead Generation</text>
 <text x="180" y="460" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="white">LinkedIn Sales,</text>
 <text x="180" y="475" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="white">ZoomInfo</text>
 

 <circle cx="620" cy="150" r="70" fill="#f97316" opacity="0.9"/>
 <text x="620" y="140" font-family="Arial, sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="white">Sales & Support</text>
 <text x="620" y="160" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="white">Salesforce,</text>
 <text x="620" y="175" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="white">Zendesk</text>
 

 <circle cx="620" cy="450" r="70" fill="#f97316" opacity="0.9"/>
 <text x="620" y="440" font-family="Arial, sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="white">Advertising</text>
 <text x="620" y="460" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="white">Google Ads,</text>
 <text x="620" y="475" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="white">Facebook Ads</text>
 

 <circle cx="400" cy="500" r="70" fill="#f97316" opacity="0.9"/>
 <text x="400" y="490" font-family="Arial, sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="white">Analytics & BI</text>
 <text x="400" y="510" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="white">Tableau,</text>
 <text x="400" y="525" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="white">Power BI</text>
 

 <line x1="270" y1="165" x2="320" y2="230" stroke="#1e3a8a" stroke-width="3" stroke-dasharray="5,5"/>
 <line x1="270" y1="435" x2="320" y2="370" stroke="#1e3a8a" stroke-width="3" stroke-dasharray="5,5"/>
 <line x1="530" y1="165" x2="480" y2="230" stroke="#1e3a8a" stroke-width="3" stroke-dasharray="5,5"/>
 <line x1="530" y1="435" x2="480" y2="370" stroke="#1e3a8a" stroke-width="3" stroke-dasharray="5,5"/>
 <line x1="400" y1="430" x2="400" y2="400" stroke="#1e3a8a" stroke-width="3" stroke-dasharray="5,5"/>
 

 <rect x="245" y="130" width="310" height="25" rx="12" ry="12" fill="#1e3a8a" opacity="0.7"/>
 <text x="400" y="147" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="white">Bi-directional data synchronization</text>
 
 <rect x="245" y="445" width="310" height="25" rx="12" ry="12" fill="#1e3a8a" opacity="0.7"/>
 <text x="400" y="462" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="white">Custom audience creation</text>
 
 <rect x="40" y="300" width="200" height="25" rx="12" ry="12" fill="#1e3a8a" opacity="0.7"/>
 <text x="140" y="317" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="white">Automated data enrichment</text>
 
 <rect x="560" y="300" width="200" height="25" rx="12" ry="12" fill="#1e3a8a" opacity="0.7"/>
 <text x="660" y="317" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="white">Unified customer view</text>
 

 <rect x="650" y="40" width="120" height="50" rx="5" ry="5" fill="white" stroke="#ccc"/>
 <circle cx="670" cy="55" r="8" fill="#1e3a8a"/>
 <text x="685" y="60" font-family="Arial, sans-serif" font-size="12" fill="#333">Core System</text>
 <circle cx="670" cy="75" r="8" fill="#f97316"/>
 <text x="685" y="80" font-family="Arial, sans-serif" font-size="12" fill="#333">Integrations</text>
</svg>
  </div>



  {/* How Compare Bazaar Can Use CRM for Growth */}
  <div id="case-studies" className="py-20">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">How Compare Bazaar Can Use CRM for Growth</h2>
    <p className="text-gray-700 text-lg mb-6">
      By leveraging CRM, Compare Bazaar can enhance operations and drive growth.
    </p>
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <li className="flex items-start">
          <span className="text-green-500 mr-2">✅</span>
          <p className="text-gray-700">Automate lead generation and follow-ups across comparison categories</p>
        </li>
        <li className="flex items-start">
          <span className="text-green-500 mr-2">✅</span>
          <p className="text-gray-700">Improve conversion rates with personalized email campaigns targeted by industry</p>
        </li>
        <li className="flex items-start">
          <span className="text-green-500 mr-2">✅</span>
          <p className="text-gray-700">Optimize marketing ROI with data-driven strategies and attribution modeling</p>
        </li>
        <li className="flex items-start">
          <span className="text-green-500 mr-2">✅</span>
          <p className="text-gray-700">Strengthen customer relationships for long-term success and repeat business</p>
        </li>
        <li className="flex items-start">
          <span className="text-green-500 mr-2">✅</span>
          <p className="text-gray-700">Track provider relationships and performance metrics in a centralized system</p>
        </li>
        <li className="flex items-start">
          <span className="text-green-500 mr-2">✅</span>
          <p className="text-gray-700">Create detailed customer profiles with preference and comparison history</p>
        </li>
        <li className="flex items-start">
          <span className="text-green-500 mr-2">✅</span>
          <p className="text-gray-700">Develop targeted content recommendations based on previous comparisons</p>
        </li>
        <li className="flex items-start">
          <span className="text-green-500 mr-2">✅</span>
          <p className="text-gray-700">Implement referral programs with tracking and reward automation</p>
        </li>
        <li className="flex items-start">
          <span className="text-green-500 mr-2">✅</span>
          <p className="text-gray-700">Build segmented nurturing campaigns for different comparison verticals</p>
        </li>
        <li className="flex items-start">
          <span className="text-green-500 mr-2">✅</span>
          <p className="text-gray-700">Streamline provider onboarding and relationship management</p>
        </li>
        <li className="flex items-start">
          <span className="text-green-500 mr-2">✅</span>
          <p className="text-gray-700">Generate detailed reports on comparison trends and customer preferences</p>
        </li>
        <li className="flex items-start">
          <span className="text-green-500 mr-2">✅</span>
          <p className="text-gray-700">Develop automated cross-selling between complementary service categories</p>
        </li>
      </ul>
    </div>
  </div>

  {/* Conclusion: Why B2B Companies Need CRM */}
  <div id="conclusion" className="py-20">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">Conclusion: Why B2B Companies Need CRM</h2>
    <p className="text-gray-700 text-lg mb-6">
      A well-implemented CRM is the backbone of B2B marketing success.
    </p>
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <ul className="space-y-3">
        <li className="flex items-start">
          <span className="text-blue-500 mr-2">•</span>
          <p className="text-gray-700">Capture and nurture leads effectively with automated yet personalized outreach</p>
        </li>
        <li className="flex items-start">
          <span className="text-blue-500 mr-2">•</span>
          <p className="text-gray-700">Streamline sales processes and increase conversions through optimized workflows</p>
        </li>
        <li className="flex items-start">
          <span className="text-blue-500 mr-2">•</span>
          <p className="text-gray-700">Enhance customer relationships and improve retention with consistent communication</p>
        </li>
        <li className="flex items-start">
          <span className="text-blue-500 mr-2">•</span>
          <p className="text-gray-700">Automate email marketing and lead nurturing based on behavioral triggers</p>
        </li>
        <li className="flex items-start">
          <span className="text-blue-500 mr-2">•</span>
          <p className="text-gray-700">Reduce administrative work by 23% through process automation</p>
        </li>
        <li className="flex items-start">
          <span className="text-blue-500 mr-2">•</span>
          <p className="text-gray-700">Increase team productivity by 34% with centralized information access</p>
        </li>
        <li className="flex items-start">
          <span className="text-blue-500 mr-2">•</span>
          <p className="text-gray-700">Improve data accuracy by eliminating siloed information systems</p>
        </li>
        <li className="flex items-start">
          <span className="text-blue-500 mr-2">•</span>
          <p className="text-gray-700">Drive 29% higher sales with improved lead qualification and prioritization</p>
        </li>
        <li className="flex items-start">
          <span className="text-blue-500 mr-2">•</span>
          <p className="text-gray-700">Boost customer satisfaction by 35% through more responsive service</p>
        </li>
        <li className="flex items-start">
          <span className="text-blue-500 mr-2">•</span>
          <p className="text-gray-700">Enable data-driven decision making with comprehensive analytics</p>
        </li>
      </ul>
      <p className="mt-6 text-gray-700">
        With the right CRM, Compare Bazaar can scale operations, improve efficiency, and drive sustainable growth in the B2B marketplace. The investment in CRM technology typically delivers ROI within 13 months, with leading organizations seeing returns as quickly as 5-8 months after implementation.
      </p>
    </div>
  </div>

  {/* Implementation Process */}
  <div id="implementation" className="py-20">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">Implementation Process</h2>
    <p className="text-gray-700 text-lg mb-6">
      Implementing a CRM system involves planning, customization, data migration, and training. A well-executed implementation ensures that the CRM system meets your business needs and delivers the expected ROI.
    </p>
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h3 className="text-xl font-semibold mb-4">CRM Implementation Steps</h3>
      <ol className="space-y-4">
        <li className="flex items-start">
          <span className="font-bold mr-2">1.</span>
          <div>
            <p className="font-medium">Define Objectives & Requirements</p>
            <p className="text-gray-600">Clearly identify what you want to achieve with your CRM system.</p>
          </div>
        </li>
        <li className="flex items-start">
          <span className="font-bold mr-2">2.</span>
          <div>
            <p className="font-medium">Select the Right CRM Solution</p>
            <p className="text-gray-600">Based on your requirements, choose a CRM that fits your business needs.</p>
          </div>
        </li>
        <li className="flex items-start">
          <span className="font-bold mr-2">3.</span>
          <div>
            <p className="font-medium">Plan Data Migration</p>
            <p className="text-gray-600">Prepare your existing data for migration to the new system.</p>
          </div>
        </li>
        <li className="flex items-start">
          <span className="font-bold mr-2">4.</span>
          <div>
            <p className="font-medium">Customize & Configure</p>
            <p className="text-gray-600">Tailor the CRM to match your business processes and workflows.</p>
          </div>
        </li>
        <li className="flex items-start">
          <span className="font-bold mr-2">5.</span>
          <div>
            <p className="font-medium">Test the System</p>
            <p className="text-gray-600">Thoroughly test all features and functionalities before full deployment.</p>
          </div>
        </li>
        <li className="flex items-start">
          <span className="font-bold mr-2">6.</span>
          <div>
            <p className="font-medium">Train Users</p>
            <p className="text-gray-600">Provide comprehensive training to ensure effective adoption.</p>
          </div>
        </li>
        <li className="flex items-start">
          <span className="font-bold mr-2">7.</span>
          <div>
            <p className="font-medium">Go Live & Monitor</p>
            <p className="text-gray-600">Launch the system and continuously monitor its performance.</p>
          </div>
        </li>
      </ol>
    </div>
  </div>

  {/* Comparing Top CRM Providers */}

  <CRMComparison/>
  <Advice/>
  <FeedbackPage/>
</div>

    
      <WideDiv />
      <Footer />
       <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <CRMForm/>
         </Modal>
    </>
  );
};

export default BestCRMSoftware;





