import React, { useState } from "react";
import Feedback from './Feedback';
import Navbar from "../components/Navbar";
import WideDiv from "../components/WideDiv";
import Footer from "../components/Footer";


const ContactPage = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_key: '4e9faa02-cb51-4253-98e6-b5794f4ece3a',
                    ...formData
                })
            });

            if (response.ok) {
                setIsSubmitted(true);
                setFormData({ name: '', email: '', phone: '', message: '' });
            } else {
                console.error('Form submission failed');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };
    return (
        <>
            <Navbar />
            <div className="font-['Quicksand'] overflow-x-hidden">
                {/* Map */}
                <div className="w-full h-[500px] flex justify-center items-center">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.1793079333634!2d73.93027927385937!3d18.520797569169968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1e490827b59%3A0xc6891bc6deabc8be!2sQuore%20B2B%20Private%20Limited!5e0!3m2!1sen!2sin!4v1739178092301!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="grayscale invert-[90%]"
                    ></iframe>
                </div>

                {/* Contact Boxes - Fixed positioning */}
                <div className="flex flex-col lg:flex-row gap-6 px-4 md:px-16 mx-auto max-w-7xl relative -mt-24 mb-12">
                    {/* First Card */}
                    <div className="bg-white shadow-lg rounded-2xl p-6 md:p-8 flex-1 z-10 min-h-[300px] flex flex-col justify-center mb-6 lg:mb-0"
                        style={{
                            boxShadow: '0 10px 25px rgba(198, 151, 119, 0.3), 0 5px 10px rgba(239, 146, 84, 0.61)'
                        }}>
                        <div className="flex flex-col items-center h-full">
                            <div className="text-center mb-6">
                                {/* Map marker SVG icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 md:w-12 text-[#000e54]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div className="flex flex-col justify-center text-center">
                                <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">ADDRESS:</h2>
                                <p className="text-xs md:text-sm leading-relaxed text-gray-600">
                                    Marvel Fuego Office 7140 seventh floor, opposite We Work,
                                    Magarpatta road Hadapsar Pune 411028
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Second Card */}
                    <div className="bg-white shadow-lg rounded-2xl p-6 md:p-8 flex-1 z-10 min-h-[300px] flex flex-col justify-center mb-6 lg:mb-0"
                        style={{
                            boxShadow: '0 10px 25px rgba(198, 151, 119, 0.3), 0 5px 10px rgba(239, 146, 84, 0.61)'
                        }}>
                        <div className="flex flex-col items-center h-full">
                            <div className="text-center mb-6">
                                {/* Phone SVG icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 md:w-12 text-[#000e54]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <div className="flex flex-col justify-center text-center">
                                <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">PHONE:</h2>
                                <p className="text-xs md:text-sm leading-relaxed text-gray-600">
                                    +918275759997 <br />
                                    contactus@quoreb2b.com
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Third Card */}
                    <div className="bg-white shadow-lg rounded-2xl p-6 md:p-8 flex-1 z-10 min-h-[300px] flex flex-col justify-center"
                        style={{
                            boxShadow: '0 10px 25px rgba(198, 151, 119, 0.3), 0 5px 10px rgba(239, 146, 84, 0.61)'
                        }}>
                        <div className="flex flex-col items-center h-full">
                            <div className="text-center mb-6">
                                {/* Clock SVG icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 md:w-12 text-[#000e54]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className="flex flex-col justify-center text-center">
                                <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">WORK HOURS:</h2>
                                <p className="text-xs md:text-sm leading-relaxed text-gray-600">
                                    Monday - Friday: 09:00 - 23:00 <br />
                                    Sunday: 09:00 - 16:00
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Get in Touch Section */}
                <div  className="flex flex-col sm:flex-col md:flex-col lg:flex-row gap-8 px-4 md:px-16 py-16">
                    {/* Left Section */}
                    <div className="flex-1 flex flex-col"> {/* Decreased flex ratio */}
                        <h2 className="text-5xl font-bold mb-6">
                            Please get in <span className="text-[#ff8633]">touch</span> with{" "}
                            <span className="text-[#ff8633]">us</span>
                        </h2>
                        <div className="flex gap-2 mb-4"> {/* Reduced margin here */}
                            <div className="w-2 h-1 bg-[#ff8633] rounded-2xl"></div>
                            <div className="w-10 h-1 bg-[#ff8633] rounded-2xl"></div>
                        </div>
                        <p className="text-1xl text-gray-600 mb-8"> {/* Added margin-bottom */}
                            When, while the lovely valley teems with vapour around me, and the
                            meridian sun strikes the upper surface of the impenetrable foliage of
                            my trees, and but a few stray gleams steal into the inner sanctuary.
                            When, while the lovely valley teems with vapour around me, and the
                            meridian sun strikes the upper surface of the impenetrable foliage of
                            my trees.
                        </p>

                        {/* New "Why Choose Us" Section (Commented Out) */}
                        <div className="mt-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition">
                                <i className="fas fa-check-circle text-3xl text-[#ff8633] mb-4"></i>
                                <h3 className="text-xl font-bold mb-2 text-[#000e54]">Reliable Service</h3>
                                <p className="text-gray-600">
                                    We provide dependable and high-quality services tailored to your needs.
                                </p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition">
                                <i className="fas fa-users text-3xl text-[#ff8633] mb-4"></i>
                                <h3 className="text-xl font-bold mb-2  text-[#000e54]">Expert Team</h3>
                                <p className="text-gray-600">
                                    Our team of professionals is dedicated to delivering exceptional results.
                                </p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition">
                                <i className="fas fa-lightbulb text-3xl text-[#ff8633] mb-4"></i>
                                <h3 className="text-xl font-bold mb-2  text-[#000e54]">Innovative Solutions</h3>
                                <p className="text-gray-600">
                                    We use cutting-edge technology to solve your business challenges.
                                </p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition">
                                <i className="fas fa-handshake text-3xl text-[#ff8633] mb-4"></i>
                                <h3 className="text-xl font-bold mb-2  text-[#000e54]">Customer-Centric</h3>
                                <p className="text-gray-600">
                                    Your satisfaction is our priority. We listen and adapt to your needs.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Send Email Form */}
                    <div id="getintouch" className="flex-1 flex flex-col">
                        <div className="bg-gradient-to-br from-white to-gray-50 shadow-xl rounded-2xl p-8 h-full flex flex-col justify-between transform hover:scale-[1.02] transition-all duration-300" style={{
                            boxShadow: "0 15px 30px rgba(255, 134, 51, 0.2), 0 8px 15px rgba(0, 14, 84, 0.1)",
                        }}>
                            <div>
                                <h2 className="text-3xl font-bold mb-8 text-[#ff8633] relative inline-block">
                                    Send message
                                    <span className="absolute -bottom-3 left-0 w-24 h-1.5 bg-[#ff8633] rounded-full"></span>
                                </h2>
                                {isSubmitted ? (
                                    <div className="flex flex-col items-center justify-center py-8">
                                        <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-[#000e54] rounded-xl p-8 w-full mb-8 shadow-lg transform hover:translate-y-[-5px] transition-all duration-300">
                                            <div className="flex justify-center mb-6">
                                                <div className="relative">
                                                    <div className="absolute inset-0 bg-[#ff8633] rounded-full opacity-20 animate-ping"></div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-[#000e54] animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <h3 className="text-2xl font-bold text-center text-[#000e54] mb-4">Thank you for your message!</h3>
                                            <p className="text-center text-[#000e54] text-lg">
                                                We appreciate your inquiry and will get back to you as soon as possible.
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => setIsSubmitted(false)}
                                            className="bg-gradient-to-r from-[#ff8633] to-[#ff9a57] text-white px-8 py-4 rounded-full text-sm font-bold hover:from-[#000e54] hover:to-[#001e74] transition-all duration-300 mt-2 w-[200px] shadow-lg hover:shadow-xl transform hover:translate-y-[-3px]"
                                        >
                                            GO BACK
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <input
                                            type="hidden"
                                            name="access_key"
                                            value="4e9faa02-cb51-4253-98e6-b5794f4ece3a"
                                        />
                                        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                                            <div className="relative bg-gray-50 rounded-xl p-4 shadow-md transform hover:translate-y-[-3px] hover:shadow-lg transition-all duration-300 border-l-4 border-[#ff8633]">
                                                {/* <label className="text-xs text-gray-500 font-medium ml-1">FULL NAME</label> */}
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="Enter your full name"
                                                    className="w-full border-b-2 border-[#ff8633] outline-none py-2 bg-transparent text-gray-800"
                                                    required
                                                />
                                            </div>
                                            <div className="relative bg-gray-50 rounded-xl p-4 shadow-md transform hover:translate-y-[-3px] hover:shadow-lg transition-all duration-300 border-l-4 border-[#ff8633]">
                                                {/* <label className="text-xs text-gray-500 font-medium ml-1">EMAIL</label> */}
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="Enter your email address"
                                                    className="w-full border-b-2 border-[#ff8633] outline-none py-2 bg-transparent text-gray-800"
                                                    required
                                                />
                                            </div>
                                            <div className="relative bg-gray-50 rounded-xl p-4 shadow-md transform hover:translate-y-[-3px] hover:shadow-lg transition-all duration-300 border-l-4 border-[#ff8633]">
                                                {/* <label className="text-xs text-gray-500 font-medium ml-1">PHONE NUMBER</label> */}
                                                <input
                                                    type="text"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    placeholder="Enter your phone number"
                                                    className="w-full border-b-2 border-[#ff8633] outline-none py-2 bg-transparent text-gray-800"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="relative bg-gray-50 rounded-xl p-4 shadow-md transform hover:translate-y-[-3px] hover:shadow-lg transition-all duration-300 border-l-4 border-[#ff8633]">
                                            {/* <label className="text-xs text-gray-500 font-medium ml-1">MESSAGE</label> */}
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Type your message here..."
                                                className="w-full border-b-2 border-[#ff8633] outline-none py-2 bg-transparent text-gray-800"
                                                rows="1"
                                            ></textarea>
                                        </div>

                                        <div className="flex justify-center mt-8">
                                            <button
                                                type="submit"
                                                className="bg-gradient-to-r from-[#ff8633] to-[#ff9a57] text-white px-10 py-4 rounded-full text-sm font-bold hover:from-[#000e54] hover:to-[#001e74] transition-all duration-300 w-[220px] shadow-lg hover:shadow-xl transform hover:translate-y-[-3px] flex items-center justify-center gap-2"
                                            >
                                                SEND NOW
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Attractive Element - FAQ Section */}
                <div className="bg-gray-100 py-16 px-4 md:px-16">
                    <h2 className="text-3xl font-bold text-center mb-12 text-[#000e54]">Frequently Asked Questions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold flex items-center mb-4 text-[#000e54]">
                                <i className="fas fa-question-circle  mr-2"></i>
                                What services do you offer?
                            </h3>
                            <p className="text-gray-600">
                                We provide a comprehensive range of B2B marketing services including lead generation,
                                content syndication, display advertising, and account-based marketing strategies.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold flex items-center mb-4  text-[#000e54] ">
                                <i className="fas fa-question-circle mr-2"></i>
                                How can I get a quote?
                            </h3>
                            <p className="text-gray-600">
                                You can request a quote by filling out our contact form or by calling our sales team directly.
                                We'll get back to you within 24 hours with a customized proposal.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold flex items-center mb-4  text-[#000e54]">
                                <i className="fas fa-question-circle  mr-2"></i>
                                Do you work with international clients?
                            </h3>
                            <p className="text-gray-600">
                                Yes, we work with clients globally and have experience in managing campaigns across
                                various markets and regions.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold flex items-center mb-4 text-[#000e54]">
                                <i className="fas fa-question-circle mr-2"></i>
                                What industries do you specialize in?
                            </h3>
                            <p className="text-gray-600">
                                We have extensive experience in technology, healthcare, finance, manufacturing, and
                                professional services, but our strategies can be adapted to any B2B industry.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Call to Action Section */}
                <div className="bg-[#000e54] text-white text-center py-16 px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to grow your business?</h2>
                    <p className="max-w-2xl mx-auto mb-8">
                        Partner with us to elevate your marketing strategy and drive measurable results for your business.
                    </p>
                    <a href="#getintouch"> {/* Replace with your section ID */}
                        <button className="bg-[#ff8633] text-[white] px-8 py-4 rounded-full font-bold  transition">
                            Get Started Today
                        </button>
                    </a>
                </div>
            </div>
            <Feedback />
            <WideDiv />
            <Footer />
        </>
    );
};

export default ContactPage;