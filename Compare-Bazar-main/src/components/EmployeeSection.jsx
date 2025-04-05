import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EmployeeSection = () => {
    const [activeFeature, setActiveFeature] = useState(0);
    const [showFullDescription, setShowFullDescription] = useState(false);

    const navigate = useNavigate();

    const handleContactSales = () => {
        navigate('/contact-sales');
    };

    const features = [
        {
            title: "Streamlined Recruitment",
            description: "Simplify your hiring process with our AI-powered recruitment tools. Screen candidates efficiently, schedule interviews automatically, and track applicant progress in one centralized dashboard.",
            icon: "👥"
        },
        {
            title: "Employee Onboarding",
            description: "Automate paperwork, training schedules, and resource allocation for new hires. Our digital onboarding process reduces administrative overhead by 75% and gets new employees productive faster.",
            icon: "🚀"
        },
        {
            title: "Performance Analytics",
            description: "Track employee performance with customizable KPIs and intuitive dashboards. Generate insights that help managers make data-driven decisions and identify top performers.",
            icon: "📊"
        },
        {
            title: "Benefits Management",
            description: "Simplify benefits administration with our comprehensive management system. Employees can self-service their benefits, reducing HR workload while increasing workforce satisfaction.",
            icon: "🏥"
        },
        {
            title: "Compliance Assurance",
            description: "Stay updated with changing labor laws and regulations. Our system automatically flags compliance issues and generates required documentation to keep your business protected.",
            icon: "⚖"
        }
    ];

    const getShortDescription = (description) => {
        if (description.length <= 120) return description;
        return description.substring(0, 120) + '...';
    };

    const notices = [
        {
            title: "System Upgrade",
            description: "We're enhancing our platform on March 25th. Service will be unavailable from 2AM-5AM EST. All employee data will be preserved during this upgrade.",
            priority: "high"
        },
        {
            title: "New Features Released",
            description: "The latest update includes improved time tracking, integrated payroll processing, and enhanced reporting tools. Check your dashboard for tutorials.",
            priority: "medium"
        },
        {
            title: "Compliance Update",
            description: "Recent labor law changes have been incorporated into our compliance module. All forms and procedures are now current with 2025 regulations.",
            priority: "high"
        },
        {
            title: "Customer Support Hours",
            description: "Our support team is now available 24/7 to assist with any employment management questions or technical issues you may encounter.",
            priority: "low"
        }
    ];

    const getPriorityStyles = (priority) => {
        switch (priority) {
            case 'high':
                return "border-l-4 border-[#000e54]";
            case 'medium':
                return "border-l-4 border-[#000e54]";
            case 'low':
                return "border-l-4 border-[#000e54]";
            default:
                return "";
        }
    };


    return (
        <div className="bg-white font-sans">

            {/* Features Section */}
            <div className="py-16 px-4 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Our Comprehensive Solution</h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="col-span-1">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={`p-4 mb-4 rounded-lg cursor-pointer transition-all duration-300 ${activeFeature === index
                                        ? 'bg-[#000e54] text-white border-l-4 border-[#000e54]'
                                        : 'bg-gray-50 hover:bg-gray-100'
                                    }`}
                                onClick={() => {
                                    setActiveFeature(index);
                                    setShowFullDescription(false); // Reset to short description when changing features
                                }}
                            >
                                <div className="flex items-center">
                                    <span className="text-2xl mr-4">{feature.icon}</span>
                                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="col-span-2 bg-gray-50 p-8 rounded-lg">
                        <div className="mb-4">
                            <span className="text-5xl mb-4 block">{features[activeFeature].icon}</span>
                            <h3 className="text-2xl font-bold mb-4">{features[activeFeature].title}</h3>
                        </div>
                        <p className="text-gray-700 mb-6">
                            {showFullDescription ? (
                                <>
                                    {features[activeFeature].description}{" "}
                                    <button
                                        onClick={() => setShowFullDescription(false)}
                                        className="text-[#ff8633] hover:text-[#000e54] font-medium transition-colors focus:outline-none inline-flex items-center"
                                    >
                                        less
                                    </button>
                                </>
                            ) : (
                                <>
                                    {getShortDescription(features[activeFeature].description)}
                                    {features[activeFeature].description.length > 120 && (
                                        <>
                                            ...{" "}
                                            <button
                                                onClick={() => setShowFullDescription(true)}
                                                className="text-[#ff8633] hover:text-[#000e54] font-medium transition-colors focus:outline-none inline-flex items-center"
                                            >
                                                more
                                            </button>
                                        </>
                                    )}
                                </>
                            )}
                        </p>
                    </div>
                </div>
            </div>

            {/* notice section */}
            <section className="bg-gray-50 py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-[#000e54] font-semibold">STAY INFORMED</span>
                        <h2 className="text-3xl font-bold mt-2">Important Notices for Our Customers</h2>
                        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                            We're committed to keeping you updated about changes to our service, new features, and important information that may affect your employment management system.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {notices.map((notice, index) => (
                            <div
                                key={index}
                                className={`bg-white p-6 rounded-lg shadow-md ${getPriorityStyles(notice.priority)}`}
                            >
                                <div className="flex items-center mb-4">
                                    {notice.priority === 'high' && (
                                        <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded mr-2">
                                            Important
                                        </span>
                                    )}
                                    <h3 className="font-bold text-xl">{notice.title}</h3>
                                </div>
                                <p className="text-gray-700 mb-4">{notice.description}</p>
                                <div className="flex justify-end">
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <div className="py-16 px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Employment Management?</h2>
                    <p className="text-gray-600 mb-8">Join thousands of companies that have streamlined their HR processes and improved employee satisfaction.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button
                            className="bg-[#ff8633] border border-gray-300 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-[#000e54] hover:text-white hover:border-[#ff8633] transition duration-300"
                            onClick={handleContactSales}
                        >
                            Contact Sales
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeSection;