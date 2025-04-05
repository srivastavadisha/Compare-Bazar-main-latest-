import React, { useState } from 'react';
import FAQ from './FAQ';
import { 
    Truck, 
    Map, 
    Shield, 
    BarChart3, 
    Clock, 
    Smartphone,
    MapPin,
    Satellite,
    Zap,
    Globe,
    ShieldCheck,
    TrendingUp,
    Radio,
    Users,
    AlertTriangle,
    Cpu, Settings, 
  Clipboard, Fuel, CreditCard, Calendar,
  ArrowRight, CheckCircle, PhoneCall,  Bell
    
  } from 'lucide-react';

const GPSFleetContent = () => {
    const [activeTab, setActiveTab] = useState('operational');

  // faq
  const phoneFAQs = [
    {
      question: "Can I get a second phone number without buying another phone?",
      answer: "By ordering a virtual phone number, you can forward calls to your current phone without adding another cell line or buying a separate device. Softphone apps display incoming calls by line, so you always know when a customer is calling."
    },
    {
      question: "How many VoIP lines does my business need?",
      answer: "The number of VoIP lines depends on your call volume and number of employees. A good rule is to have 1 line for every 3-4 employees who need simultaneous calling."
    },
    {
      question: "Are business phone systems secure?",
      answer: [
        "Modern business phone systems use enterprise-grade security including:",
        "End-to-end encryption for calls",
        "Secure SIP protocols",
        "Multi-factor authentication",
        "Regular security updates"
      ]
    }
  ];

  const features = [
    { 
      icon: <Truck className="w-12 h-12 text-[#000e54]" />, 
      title: "Vehicle Tracking", 
      description: "Real-time tracking of your entire fleet to optimize routes and improve response times." 
    },
    { 
      icon: <Map className="w-12 h-12 text-[#000e54]" />, 
      title: "Route Optimization", 
      description: "Reduce fuel costs and delivery times with AI-powered route planning." 
    },
    { 
      icon: <Shield className="w-12 h-12 text-[#000e54]" />, 
      title: "Safety Monitoring", 
      description: "Monitor driver behavior and vehicle health to prevent accidents and breakdowns." 
    },
    { 
      icon: <BarChart3 className="w-12 h-12 text-[#000e54]" />, 
      title: "Performance Analytics", 
      description: "Comprehensive reports and insights to improve operational efficiency." 
    },
    { 
      icon: <Clock className="w-12 h-12 text-[#000e54]" />, 
      title: "Maintenance Scheduling", 
      description: "Automated maintenance alerts to reduce downtime and extend vehicle lifespan." 
    },
    { 
      icon: <Smartphone className="w-12 h-12 text-[#000e54]" />, 
      title: "Mobile Access", 
      description: "Manage your fleet from anywhere with our responsive mobile application." 
    }
  ];

  const featureCategories = {
    operational: {
      title: "Operational Excellence",
      description: "Transform your daily operations with powerful tracking and management tools",
      color: "blue",
      features: [
        {
          icon: <MapPin className="w-12 h-12 text-blue-600" />,
          title: "Real-Time Vehicle Tracking",
          description: "Monitor your entire fleet with live GPS tracking that updates every 30-60 seconds. View current location, speed, direction, and status of each vehicle from any device.",
          benefits: ["Eliminate guesswork about vehicle locations", "Respond quickly to service requests", "Provide accurate ETAs to customers"]
        },
        {
          icon: <Truck className="w-12 h-12 text-blue-600" />,
          title: "Route Optimization",
          description: "AI-powered route planning algorithms that consider traffic patterns, delivery windows, vehicle capacity, and driver availability to create the most efficient routes.",
          benefits: ["Reduce fuel consumption by up to 30%", "Complete more jobs per day", "Minimize overtime expenses"]
        },
        {
          icon: <BarChart3 className="w-12 h-12 text-blue-600" />,
          title: "Performance Analytics",
          description: "Comprehensive reporting dashboard with customizable metrics to track key performance indicators across your entire fleet operation.",
          benefits: ["Identify inefficient routes and processes", "Compare driver and vehicle performance", "Generate client-ready reports"]
        },
        {
          icon: <Clock className="w-12 h-12 text-blue-600" />,
          title: "Automated Dispatching",
          description: "Smart dispatch system that assigns jobs based on vehicle location, driver schedules, and job requirements to optimize workforce efficiency.",
          benefits: ["Reduce dispatcher workload", "Eliminate double-booking", "Respond faster to urgent service requests"]
        }
      ]
    },
    safety: {
      title: "Safety & Compliance",
      description: "Protect your drivers, vehicles, and business with advanced safety features",
      color: "green",
      features: [
        {
          icon: <AlertTriangle className="w-12 h-12 text-green-600" />,
          title: "Driver Behavior Monitoring",
          description: "Track and score driving habits including speeding, harsh braking, rapid acceleration, and cornering to identify risky behaviors before they lead to accidents.",
          benefits: ["Reduce accident rates by up to 40%", "Lower insurance premiums", "Create data-driven safety programs"]
        },
        {
          icon: <Shield className="w-12 h-12 text-green-600" />,
          title: "Compliance Management",
          description: "Automated logging of hours of service, electronic DVIR, IFTA reporting, and regulatory documentation to ensure your fleet stays compliant with transportation regulations.",
          benefits: ["Avoid costly violations and fines", "Streamline DOT audits", "Maintain accurate electronic records"]
        },
        {
          icon: <Bell className="w-12 h-12 text-green-600" />,
          title: "Real-Time Alerts & Notifications",
          description: "Customizable alert system that notifies managers about safety violations, unauthorized vehicle use, geofence breaches, and maintenance issues.",
          benefits: ["Address issues before they escalate", "Prevent unauthorized vehicle use", "Maintain security protocols"]
        },
        {
          icon: <PhoneCall className="w-12 h-12 text-green-600" />,
          title: "Emergency Response Coordination",
          description: "Integrated emergency protocols that help dispatchers quickly locate and assist drivers in distress, with direct communication channels to emergency services.",
          benefits: ["Minimize response time during emergencies", "Provide precise location data to first responders", "Ensure driver safety in crisis situations"]
        }
      ]
    },
    maintenance: {
      title: "Fleet Maintenance",
      description: "Extend vehicle lifespan and reduce downtime with preventative maintenance",
      color: "orange",
      features: [
        {
          icon: <Settings className="w-12 h-12 text-orange-600" />,
          title: "Preventative Maintenance Scheduling",
          description: "Automated maintenance alerts based on mileage, engine hours, calendar intervals, or diagnostic trouble codes to prevent breakdowns and extend vehicle lifespan.",
          benefits: ["Reduce unexpected breakdowns by 70%", "Extend vehicle service life", "Maintain warranty compliance"]
        },
        {
          icon: <Clipboard className="w-12 h-12 text-orange-600" />,
          title: "Digital Inspection Records",
          description: "Mobile-friendly digital vehicle inspection forms that drivers can complete with photos and notes, creating a comprehensive maintenance history for each vehicle.",
          benefits: ["Ensure inspection compliance", "Track recurring issues", "Create comprehensive vehicle service records"]
        },
        {
          icon: <TrendingUp className="w-12 h-12 text-orange-600" />,
          title: "Diagnostic Trouble Code Monitoring",
          description: "Real-time engine diagnostic monitoring that alerts fleet managers to potential issues before they cause breakdowns or serious damage.",
          benefits: ["Address minor issues before they become major repairs", "Reduce roadside emergencies", "Plan repairs during scheduled downtime"]
        },
        {
          icon: <Calendar className="w-12 h-12 text-orange-600" />,
          title: "Maintenance Vendor Integration",
          description: "Seamless connectivity with maintenance providers for scheduling, parts ordering, and service history tracking across your preferred repair network.",
          benefits: ["Streamline service appointments", "Track repair costs across vendors", "Maintain centralized maintenance records"]
        }
      ]
    },
    financial: {
      title: "Financial Management",
      description: "Control costs and optimize spending with detailed financial tracking",
      color: "purple",
      features: [
        {
          icon: <Fuel className="w-12 h-12 text-purple-600" />,
          title: "Fuel Management",
          description: "Comprehensive fuel tracking system that monitors consumption patterns, identifies fuel theft, and provides detailed analysis of fuel efficiency across your fleet.",
          benefits: ["Reduce fuel expenses by 10-15%", "Detect fuel theft or misuse", "Identify vehicles with poor fuel economy"]
        },
        {
          icon: <CreditCard className="w-12 h-12 text-purple-600" />,
          title: "Expense Tracking & Allocation",
          description: "Detailed tracking of all fleet-related expenses with the ability to allocate costs to specific departments, projects, or clients for accurate accounting.",
          benefits: ["Simplify client billing", "Improve budgeting accuracy", "Enable data-driven purchasing decisions"]
        },
        {
          icon: <Users className="w-12 h-12 text-purple-600" />,
          title: "Driver Payroll Integration",
          description: "Automated calculation of driver hours, mileage, and performance metrics that integrates with payroll systems to ensure accurate compensation.",
          benefits: ["Reduce payroll processing time", "Eliminate timesheet disputes", "Track overtime and bonuses accurately"]
        },
        {
          icon: <BarChart3 className="w-12 h-12 text-purple-600" />,
          title: "Total Cost of Ownership Analysis",
          description: "Comprehensive tracking of all vehicle-related expenses throughout its lifecycle, providing insights for optimal replacement timing and fleet composition.",
          benefits: ["Identify underperforming assets", "Optimize vehicle replacement cycles", "Make data-driven procurement decisions"]
        }
      ]
    }
  };

  const renderFeature = (feature, colorClass) => (
    <div className="flex flex-col lg:flex-row gap-8 py-12 border-b border-gray-200 last:border-0">
      <div className="lg:w-1/3">
        <div className={`bg-${colorClass}-50 rounded-xl p-6 inline-block mb-4`}>
          {feature.icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{feature.title}</h3>
        <div className={`w-16 h-1 bg-${colorClass}-600 mb-4`}></div>
      </div>
      <div className="lg:w-2/3">
        <p className="text-lg text-gray-700 mb-6">
          {feature.description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {feature.benefits.map((benefit, index) => (
            <div key={index} className="flex items-start">
              <CheckCircle className={`w-5 h-5 text-${colorClass}-600 mr-2 mt-1 flex-shrink-0`} />
              <p className="text-sm text-gray-600">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAnimatedIcon = (category) => {
    const icons = {
      operational: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      safety: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      maintenance: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
      financial: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      )
    };

    return icons[category];
  };

  

  return (
    <>

      {/* introduction */}
      <div id="intro-gps"  className="max-w-6xl mx-auto p-4">
      <div className="container mx-auto  py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-semibold text-[#000e54] mb-6">
             Introduction to GPS Fleet Management
            </h1>
            <p className="text-lg text-gray-800 mb-8">
            GPS Fleet Management is a technology-driven solution designed to optimize the efficiency, safety, and productivity of vehicle fleets. By leveraging real-time GPS tracking, businesses can monitor their vehicles' locations, routes, and performance, ensuring better operational control. This system provides valuable insights into driver behavior, fuel consumption, and maintenance schedules, helping companies reduce costs and improve service delivery. With features like geofencing, route optimization, and automated reporting, GPS fleet management enhances decision-making and ensures compliance with regulatory standards. Whether for logistics, transportation, or service-based industries, implementing a GPS fleet management system leads to smarter fleet operations and increased profitability.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-lg">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
              <div className="relative">
                <img src="https://geospatialmedia.s3.amazonaws.com/wp-content/uploads/2018/08/gps-fleet.jpg" alt="Fleet Management Dashboard" className="rounded-xl shadow-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
          Complete Fleet Management Solution
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

      {/* what is gpstracking*/}
      <section id="what-is-gpstracking" className="py-10 max-w-6xl mx-auto p-4">
      <div className="container mx-auto px-4">

        {/* Key Components Grid */}
        <div className="mb-20">
          <h3 className="text-4xl font-semibold text-[#000e54] text-center mb-10">Key Components of GPS Fleet Tracking</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Radio className="w-10 h-10 text-blue-600" />,
                title: "GPS Tracking Devices",
                description: "Hardware installed in vehicles that receive satellite signals and transmit location and vehicle data to central servers."
              },
              {
                icon: <Globe className="w-10 h-10 text-green-600" />,
                title: "Data Transmission",
                description: "Cellular networks that relay information from vehicles to the cloud, allowing for real-time monitoring across wide geographical areas."
              },
              {
                icon: <Cpu className="w-10 h-10 text-purple-600" />,
                title: "Fleet Management Software",
                description: "Cloud-based platforms that process, analyze, and visualize tracking data, providing user-friendly interfaces for fleet managers."
              },
              {
                icon: <Zap className="w-10 h-10 text-orange-600" />,
                title: "Integration Systems",
                description: "APIs and connectors that link fleet tracking data with other business systems like ERP, accounting, or customer service platforms."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

       

        {/* Implementation Process */}
        <div className="mb-20">
          <h3 className="text-4xl font-semibold text-[#000e54] text-center mb-10">GPS Fleet Tracking Implementation</h3>
          <div className="flex flex-col md:flex-row items-start justify-between gap-6">
            {[
              {
                step: "1",
                title: "Assessment",
                icon: <Truck className="w-8 h-8 text-white" />,
                color: "bg-blue-600",
                description: "Evaluate your fleet size, vehicle types, and specific tracking needs to determine the appropriate solution."
              },
              {
                step: "2",
                title: "Hardware Installation",
                icon: <Cpu className="w-8 h-8 text-white" />,
                color: "bg-green-600",
                description: "Install GPS tracking devices in all vehicles, either through plug-and-play OBD-II devices or hardwired solutions."
              },
              {
                step: "3",
                title: "Software Setup",
                icon: <Globe className="w-8 h-8 text-white" />,
                color: "bg-purple-600",
                description: "Configure your fleet management software dashboard, set up geofences, and establish custom alerts and reports."
              },
              {
                step: "4",
                title: "Team Training",
                icon: <Users className="w-8 h-8 text-white" />,
                color: "bg-orange-600",
                description: "Train dispatchers, managers, and drivers on how to use the system effectively and address potential concerns."
              },
              {
                step: "5",
                title: "Optimization",
                icon: <TrendingUp className="w-8 h-8 text-white" />,
                color: "bg-red-600",
                description: "Continuously refine your tracking parameters and reporting tools based on initial results and feedback."
              }
            ].map((step, index) => (
              <div key={index} className="flex-1">
                <div className="flex flex-col items-center">
                  <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-lg`}>
                    {step.icon}
                  </div>
                  <div className="h-24 w-px bg-gray-300 hidden md:block"></div>
                </div>
                <div className="text-left">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h4>
                  <p className="text-gray-800 text-lg">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

{/* working of gpstracking */}
 <div id="gpstracking-working" className="py-10 max-w-6xl mx-auto p-4">
 <div className="text-center mb-16">
          <h2 className="text-4xl md:text-4xl font-semibold text-[#000e54] mb-4">
            What is GPS Fleet Tracking?
          </h2>
          <div className="w-24 h-1 bg-[#000e54] mx-auto mb-6"></div>
          <p className="text-lg text-gray-800 max-w-3xl mx-auto">
            GPS fleet tracking is a sophisticated system that uses satellite technology to monitor and manage vehicles in real-time, providing businesses with valuable insights to optimize operations.
          </p>
</div>
 {/* Main Concept Illustration */}
 <div id="gpstracking-working" className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-20">
          <div className="lg:w-1/2">
            <div className="relative p-8 bg-white rounded-2xl shadow-xl">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#000e54] rounded-full animate-ping opacity-25"></div>
                  <Satellite className="w-16 h-16 text-[#000e54] relative z-10" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-center text-[#000e54] mb-4">How GPS Fleet Tracking Works</h3>
              <p className="text-gray-700 mb-6">
                GPS fleet tracking utilizes the Global Positioning System—a network of 24+ satellites orbiting Earth—to determine the precise location of vehicles equipped with GPS tracking devices. These devices receive signals from multiple satellites, calculating position through trilateration.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex flex-col items-center">
                  <Satellite className="w-10 h-10 text-blue-500 mb-2" />
                  <p className="text-sm text-center">Satellite Signal</p>
                </div>
                <div className="flex items-center text-gray-400">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="flex flex-col items-center">
                  <Radio className="w-10 h-10 text-green-500 mb-2" />
                  <p className="text-sm text-center">GPS Receiver</p>
                </div>
                <div className="flex items-center text-gray-400">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="flex flex-col items-center">
                  <Globe className="w-10 h-10 text-purple-500 mb-2" />
                  <p className="text-sm text-center">Cellular Network</p>
                </div>
                <div className="flex items-center text-gray-400">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="flex flex-col items-center">
                  <Cpu className="w-10 h-10 text-red-500 mb-2" />
                  <p className="text-sm text-center">Fleet Software</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="space-y-6">
              <p className="text-lg text-gray-800">
                Modern GPS fleet tracking systems transmit not only location data but also vehicle diagnostics, driver behavior metrics, and environmental information. This data is processed and visualized through specialized software platforms that provide dispatchers and fleet managers with actionable insights.
              </p>
              <p className="text-lg text-gray-800">
                Beyond basic tracking, these systems enable comprehensive fleet management through features like geofencing, route planning, maintenance scheduling, and regulatory compliance monitoring. The combination of hardware devices and intelligent software creates a powerful tool for optimizing fleet operations.
              </p>
              <div className="p-4 bg-blue-50 border-l-4 border-[#000e54] rounded">
                <p className="font-medium text-[#000e54]">
                  GPS fleet tracking transforms raw location data into strategic intelligence, allowing businesses to make data-driven decisions that improve efficiency, safety, and profitability.
                </p>
              </div>
            </div>
          </div>
</div>
</div>

 {/* Benefits of fleet tracking Section */}
 <div id="gpstracking-benefits" className="mb-20 py-10 max-w-6xl mx-auto p-4">
          <h3 className="text-4xl font-semibold text-[#000e54] text-center mb-10">Benefits of GPS Fleet Tracking</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp className="w-12 h-12 text-green-600" />,
                title: "Increased Operational Efficiency",
                description: "Optimize routes, reduce idle time, and improve dispatching to complete more jobs with fewer resources.",
                stats: "Up to 25% reduction in fuel costs"
              },
              {
                icon: <ShieldCheck className="w-12 h-12 text-blue-600" />,
                title: "Enhanced Vehicle Security",
                description: "Prevent unauthorized use and quickly recover stolen vehicles with real-time location tracking.",
                stats: "90% higher recovery rate for stolen vehicles"
              },
              {
                icon: <Clock className="w-12 h-12 text-orange-600" />,
                title: "Improved Time Management",
                description: "Accurate arrival time predictions and proof of service timestamps improve customer satisfaction.",
                stats: "30% reduction in customer complaints"
              },
              {
                icon: <MapPin className="w-12 h-12 text-purple-600" />,
                title: "Better Route Planning",
                description: "AI-powered route optimization that accounts for traffic, weather, and vehicle constraints.",
                stats: "15-20% more deliveries per day"
              },
              {
                icon: <AlertTriangle className="w-12 h-12 text-red-600" />,
                title: "Reduced Risk & Liability",
                description: "Monitor driver behavior to discourage speeding and harsh driving, leading to fewer accidents.",
                stats: "Up to 40% reduction in accident rates"
              },
              {
                icon: <Users className="w-12 h-12 text-indigo-600" />,
                title: "Enhanced Driver Management",
                description: "Identify training opportunities and recognize top performers through objective performance data.",
                stats: "20% improvement in driver retention"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border-t-4 border-b-4" style={{ borderTopColor: benefit.icon.props.className.split(' ')[3], borderBottomColor: benefit.icon.props.className.split(' ')[3] }}>
                <div className="flex items-center mb-4">
                  {benefit.icon}
                  <h4 className="text-xl font-semibold text-gray-800 ml-4">{benefit.title}</h4>
                </div>
                <p className="text-gray-800 mb-4">{benefit.description}</p>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-semibold text-gray-800">{benefit.stats}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

{/* features of gps fleet tracking */}
<section className="py-10 max-w-6xl mx-auto p-4">
      <div className="container mx-auto px-4">
        {/* Main Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#000e54] mb-6">
            Comprehensive GPS Fleet Tracking Features
          </h2>
          <p className="text-lg text-gray-800 max-w-3xl mx-auto">
            Our advanced fleet management system delivers powerful tools to transform your operations, enhance safety, extend vehicle life, and optimize your budget.
          </p>
        </div>

        {/* Feature Navigation */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {Object.keys(featureCategories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`flex items-center px-6 py-4 rounded-full transition-all duration-300 ${
                activeTab === category 
                  ? `bg-${featureCategories[category].color}-600 text-white shadow-lg` 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span className={`mr-2 ${activeTab === category ? 'text-white' : `text-${featureCategories[category].color}-600`}`}>
                {renderAnimatedIcon(category)}
              </span>
              <span className="font-medium">
                {featureCategories[category].title}
              </span>
            </button>
          ))}
        </div>

        {/* Features Banner */}
        <div className={`bg-${featureCategories[activeTab].color}-600 text-white rounded-xl p-8 mb-12 relative overflow-hidden`}>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">{featureCategories[activeTab].title}</h3>
            <p className="text-xl max-w-2xl">{featureCategories[activeTab].description}</p>
          </div>
          
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 opacity-10">
            <svg width="400" height="400" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
              <path d="M435.7,566.7c-96.9,37.6-196.8,72.4-302.4,31.6C30.8,558.3-23.4,450.8,8.9,355.5C42.6,256.9,155.1,188.1,250.5,137
               c85.6-45.8,180-68.3,269-36.1c91.9,33.2,159.3,120.3,156.9,221.2C673.5,422.9,542.5,525.7,435.7,566.7z" fill="currentColor"/>
            </svg>
          </div>
        </div>

        {/* Features Content */}
        <div className="bg-white rounded-2xl shadow-xl mb-20 p-6 md:p-12">
          {featureCategories[activeTab].features.map((feature, index) => (
            renderFeature(feature, featureCategories[activeTab].color)
          ))}
        </div>

        {/* Interactive Feature Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-white rounded-2xl shadow-xl p-8 overflow-hidden relative">
            <div className="relative z-10">
              <h3 className="text-4xl font-semibold text-gray-800 mb-6">See the Difference</h3>
              <p className="text-gray-800 mb-8">
                Our GPS fleet tracking system provides comprehensive visibility across your entire operation, allowing you to:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className={`bg-${featureCategories[activeTab].color}-100 p-2 rounded-full mr-4`}>
                    <CheckCircle className={`w-5 h-5 text-${featureCategories[activeTab].color}-600`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Make Data-Driven Decisions</h4>
                    <p className="text-gray-600">Replace guesswork with analytics-powered insights</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className={`bg-${featureCategories[activeTab].color}-100 p-2 rounded-full mr-4`}>
                    <CheckCircle className={`w-5 h-5 text-${featureCategories[activeTab].color}-600`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Enhance Customer Experience</h4>
                    <p className="text-gray-600">Provide accurate ETAs and responsive service</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className={`bg-${featureCategories[activeTab].color}-100 p-2 rounded-full mr-4`}>
                    <CheckCircle className={`w-5 h-5 text-${featureCategories[activeTab].color}-600`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Reduce Operational Costs</h4>
                    <p className="text-gray-600">Cut fuel, maintenance, and labor expenses</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className={`bg-${featureCategories[activeTab].color}-100 p-2 rounded-full mr-4`}>
                    <CheckCircle className={`w-5 h-5 text-${featureCategories[activeTab].color}-600`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Improve Fleet Safety</h4>
                    <p className="text-gray-600">Protect drivers and reduce liability risks</p>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Background Decoration */}
            <div className="absolute -right-12 -bottom-12 opacity-5">
              <svg width="300" height="300" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.5,19.85C17.32,19.85 17.15,19.76 17.04,19.59L12.58,12.91L9.32,17.8C9.22,17.95 9.05,18.04 8.87,18.05C8.69,18.05 8.52,17.97 8.4,17.83L5.14,13.83L2.35,17.31C2.33,17.34 2.31,17.36 2.29,17.38C2.04,17.64 1.67,17.69 1.35,17.5C1.04,17.31 0.942,16.97 1.03,16.65C1.03,16.6 1.04,16.55 1.06,16.5L4.15,12.43C4.26,12.29 4.44,12.21 4.62,12.23C4.81,12.23 4.97,12.32 5.09,12.47L8.31,16.41L11.5,11.61C11.59,11.45 11.77,11.35 11.96,11.35C12.15,11.34 12.34,11.43 12.45,11.58L16.96,18.33L20.12,15.62C20.29,15.48 20.51,15.44 20.71,15.51C20.91,15.5 21.13,15.68 21.22,15.87C21.31,16.06 21.28,16.28 21.15,16.44L17.9,19.64C17.79,19.78 17.65,19.85 17.5,19.85Z"/>
              </svg>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl h-full">
              <div className="p-8 text-white relative z-10">
                <h3 className="text-2xl font-bold mb-6">Fleet Management Dashboard</h3>
                <p className="text-gray-300 mb-8">
                  Our intuitive dashboard gives you complete visibility and control over your entire fleet from a single screen.
                </p>
                
                {/* Dashboard Preview */}
                <div className="bg-gray-900 rounded-lg p-4 mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-sm text-gray-400">Fleet Overview</div>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                
                  {/* Mock Map */}
                  <div className="bg-gray-800 p-2 rounded mb-4">
                    <div className="h-32 bg-gray-700 rounded relative">
                      <div className="absolute inset-0 opacity-30">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0,50 Q50,0 100,50 T200,50 T300,50 T400,50" stroke="#4CAF50" strokeWidth="2" fill="none" />
                          <path d="M0,70 Q50,120 100,70 T200,70 T300,70 T400,70" stroke="#2196F3" strokeWidth="2" fill="none" />
                          <circle cx="50" cy="50" r="3" fill="#F44336" />
                          <circle cx="120" cy="50" r="3" fill="#F44336" />
                          <circle cx="200" cy="50" r="3" fill="#F44336" />
                          <circle cx="270" cy="50" r="3" fill="#F44336" />
                          <circle cx="70" cy="70" r="3" fill="#2196F3" />
                          <circle cx="150" cy="70" r="3" fill="#2196F3" />
                          <circle cx="230" cy="70" r="3" fill="#2196F3" />
                        </svg>
                      </div>
                      <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-xs text-white p-1 rounded">
                        Live Map View
                      </div>
                    </div>
                  </div>
                  
                  {/* Mock Data Rows */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-2 bg-gray-800 rounded">
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                        <span className="text-xs">Truck #103</span>
                      </div>
                      <span className="text-xs text-gray-400">43 mph</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-800 rounded">
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></div>
                        <span className="text-xs">Truck #217</span>
                      </div>
                      <span className="text-xs text-gray-400">Idle - 5 min</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <button className={`bg-${featureCategories[activeTab].color}-600 hover:bg-${featureCategories[activeTab].color}-700 text-white px-6 py-3 rounded-lg flex items-center transition-colors`}>
                    <span>Schedule Demo</span>
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
              
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 opacity-5">
                <svg width="400" height="400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
 
      </div>
    </section>




      {/* faq */}
      <div id="phonesystem-faq" className="">
        <FAQ faqs={phoneFAQs} />
      </div>
    </>
  );
};

export default GPSFleetContent;