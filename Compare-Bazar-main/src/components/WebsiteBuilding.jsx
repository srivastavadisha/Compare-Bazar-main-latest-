




import React, { useState } from 'react';

const WebsiteBuilding = () => {
  const [activeTab, setActiveTab] = useState('features');
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [activeFormTab, setActiveFormTab] = useState('contact');
  const [activePurposeTab, setActivePurposeTab] = useState('business');

  const platforms = [
    {
      id: 1,
      name: "BuilderPro",
      logo: "🏗️",
      rating: 4.9,
      price: "$12/month",
      bestFor: "Professional websites with advanced customization",
      features: [
        "Drag-and-drop interface",
        "500+ pre-designed templates",
        "Advanced SEO tools",
        "E-commerce capabilities",
        "Custom code insertion"
      ],
      pros: [
        "Highly customizable designs",
        "Excellent customer support",
        "Regular feature updates",
        "Strong SEO performance"
      ],
      cons: [
        "Steeper learning curve",
        "Premium features require higher tier plans"
      ]
    },
    {
      id: 2,
      name: "QuickSite",
      logo: "⚡",
      rating: 4.7,
      price: "$8/month",
      bestFor: "Small businesses and beginners",
      features: [
        "AI-powered site generator",
        "300+ industry-specific templates",
        "Basic SEO tools",
        "Simple online store functionality",
        "Mobile optimization"
      ],
      pros: [
        "Fastest setup time",
        "Very beginner-friendly",
        "Affordable pricing",
        "Good mobile performance"
      ],
      cons: [
        "Limited design flexibility",
        "Basic e-commerce capabilities"
      ]
    },
    {
      id: 3,
      name: "CreativeCanvas",
      logo: "🎨",
      rating: 4.8,
      price: "$15/month",
      bestFor: "Designers and creative professionals",
      features: [
        "Advanced design toolkit",
        "200+ artistic templates",
        "Portfolio showcases",
        "Animation capabilities",
        "Client collaboration tools"
      ],
      pros: [
        "Beautiful visual designs",
        "Excellent for portfolios",
        "Unique interactive elements",
        "Strong design community"
      ],
      cons: [
        "Higher price point",
        "Less focused on business features"
      ]
    },
    {
      id: 4,
      name: "BusinessBuilder",
      logo: "💼",
      rating: 4.6,
      price: "$10/month",
      bestFor: "E-commerce and business websites",
      features: [
        "Comprehensive e-commerce tools",
        "CRM integration",
        "Marketing automation",
        "Payment processing",
        "Inventory management"
      ],
      pros: [
        "All-in-one business solution",
        "Excellent e-commerce capabilities",
        "Built-in marketing tools",
        "Detailed analytics"
      ],
      cons: [
        "Less design flexibility",
        "Can be overwhelming for simple sites"
      ]
    },
  ];

  const purposeExamples = {
    business: {
      title: "Business Websites",
      description: "Professional platforms optimized for company sites, service businesses, and local establishments.",
      recommended: ["BuilderPro", "BusinessBuilder"],
      keyFeatures: [
        "Professional templates",
        "Contact forms & booking",
        "Maps & location info",
        "Client testimonials",
        "Service descriptions"
      ],
      example: "/images/business-example.jpg"
    },
    ecommerce: {
      title: "Online Stores",
      description: "Full-featured platforms built for selling products and managing inventory.",
      recommended: ["BusinessBuilder", "QuickSite"],
      keyFeatures: [
        "Product catalogs",
        "Shopping cart",
        "Secure checkout",
        "Inventory management",
        "Order tracking"
      ],
      example: "/images/ecommerce-example.jpg"
    },
    portfolio: {
      title: "Creative Portfolios",
      description: "Visually-focused builders for showcasing creative work and projects.",
      recommended: ["CreativeCanvas", "BuilderPro"],
      keyFeatures: [
        "Gallery layouts",
        "Project showcases",
        "Visual storytelling",
        "Custom typography",
        "Animation effects"
      ],
      example: "/images/portfolio-example.jpg"
    },
    blog: {
      title: "Blogs & Publishing",
      description: "Content-centric platforms optimized for writers and publishers.",
      recommended: ["QuickSite", "BuilderPro"],
      keyFeatures: [
        "Article layouts",
        "Categories & tags",
        "Comment systems",
        "Social sharing",
        "SEO optimization"
      ],
      example: "/images/blog-example.jpg"
    }
  };

  const formTypes = {
    contact: {
      title: "Contact Forms",
      description: "Essential forms for visitors to reach out to your business or organization.",
      fields: ["Name", "Email", "Phone", "Message"],
      example: `
<form class="space-y-4">
  <div>
    <label for="name" class="block text-gray-700">Name</label>
    <input type="text" id="name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
  </div>
  <div>
    <label for="email" class="block text-gray-700">Email</label>
    <input type="email" id="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
  </div>
  <div>
    <label for="message" class="block text-gray-700">Message</label>
    <textarea id="message" rows="4" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"></textarea>
  </div>
  <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded-md">Send Message</button>
</form>
      `
    },
    newsletter: {
      title: "Newsletter Signups",
      description: "Simple forms to collect email subscriptions for content and marketing.",
      fields: ["Email", "Name (optional)", "Interests (optional)"],
      example: `
<form class="space-y-4">
  <div>
    <label for="email" class="block text-gray-700">Email Address</label>
    <input type="email" id="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
  </div>
  <div>
    <label class="flex items-center">
      <input type="checkbox" class="rounded border-gray-300 text-blue-600 shadow-sm" />
      <span class="ml-2">Subscribe to weekly updates</span>
    </label>
  </div>
  <button type="submit" class="bg-green-600 text-white px-4 py-2 rounded-md">Subscribe</button>
</form>
      `
    },
    booking: {
      title: "Appointment Booking",
      description: "Forms that allow customers to schedule services or consultations.",
      fields: ["Name", "Email", "Phone", "Date", "Time", "Service Type"],
      example: `
<form class="space-y-4">
  <div class="grid grid-cols-2 gap-4">
    <div>
      <label for="name" class="block text-gray-700">Name</label>
      <input type="text" id="name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
    </div>
    <div>
      <label for="email" class="block text-gray-700">Email</label>
      <input type="email" id="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
    </div>
  </div>
  <div class="grid grid-cols-2 gap-4">
    <div>
      <label for="date" class="block text-gray-700">Date</label>
      <input type="date" id="date" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
    </div>
    <div>
      <label for="time" class="block text-gray-700">Time</label>
      <select id="time" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
        <option>9:00 AM</option>
        <option>10:00 AM</option>
        <option>11:00 AM</option>
        <option>1:00 PM</option>
        <option>2:00 PM</option>
      </select>
    </div>
  </div>
  <div>
    <label for="service" class="block text-gray-700">Service</label>
    <select id="service" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
      <option>Consultation</option>
      <option>Service Package A</option>
      <option>Service Package B</option>
    </select>
  </div>
  <button type="submit" class="bg-purple-600 text-white px-4 py-2 rounded-md">Book Appointment</button>
</form>
      `
    },
    survey: {
      title: "Surveys & Feedback",
      description: "Collect customer opinions, reviews, and feedback.",
      fields: ["Rating scales", "Multiple choice", "Text responses", "File uploads"],
      example: `
<form class="space-y-6">
  <div>
    <p class="font-medium text-gray-700 mb-2">How would you rate your experience?</p>
    <div class="flex space-x-4">
      <label class="flex items-center">
        <input type="radio" name="rating" class="text-blue-600" />
        <span class="ml-2">1</span>
      </label>
      <label class="flex items-center">
        <input type="radio" name="rating" class="text-blue-600" />
        <span class="ml-2">2</span>
      </label>
      <label class="flex items-center">
        <input type="radio" name="rating" class="text-blue-600" />
        <span class="ml-2">3</span>
      </label>
      <label class="flex items-center">
        <input type="radio" name="rating" class="text-blue-600" />
        <span class="ml-2">4</span>
      </label>
      <label class="flex items-center">
        <input type="radio" name="rating" class="text-blue-600" />
        <span class="ml-2">5</span>
      </label>
    </div>
  </div>
  <div>
    <label for="feedback" class="block text-gray-700">What could we improve?</label>
    <textarea id="feedback" rows="3" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"></textarea>
  </div>
  <button type="submit" class="bg-gray-800 text-white px-4 py-2 rounded-md">Submit Feedback</button>
</form>
      `
    }
  };

  const integrationTools = [
    {
      name: "Email Marketing",
      icon: "📧",
      description: "Connect your forms to popular email marketing platforms",
      examples: ["Mailchimp", "ConvertKit", "Constant Contact", "SendinBlue"]
    },
    {
      name: "Analytics",
      icon: "📊",
      description: "Track visitor behavior and conversion metrics",
      examples: ["Google Analytics", "Hotjar", "Matomo", "Mixpanel"]
    },
    {
      name: "CRM Systems",
      icon: "👥",
      description: "Link customer data with your relationship management software",
      examples: ["Salesforce", "HubSpot", "Zoho CRM", "Pipedrive"]
    },
    {
      name: "Payment Gateways",
      icon: "💳",
      description: "Process transactions securely on your website",
      examples: ["Stripe", "PayPal", "Square", "Braintree"]
    },
    {
      name: "Social Media",
      icon: "📱",
      description: "Integrate social platforms for sharing and engagement",
      examples: ["Facebook", "Instagram", "Twitter", "LinkedIn"]
    },
    {
      name: "Content Management",
      icon: "📝",
      description: "Platforms for creating and organizing your website content",
      examples: ["WordPress", "Contentful", "Sanity", "Strapi"]
    }
  ];

  const handlePlatformSelect = (platform) => {
    setSelectedPlatform(platform.id === selectedPlatform?.id ? null : platform);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'comparison':
        return (
          <div className="overflow-x-auto w-full mt-8">
            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
              <thead className="bg-[#000e54] text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Platform</th>
                  <th className="py-3 px-4 text-left">Best For</th>
                  <th className="py-3 px-4 text-left">Rating</th>
                  <th className="py-3 px-4 text-left">Price</th>
                  <th className="py-3 px-4 text-left">Key Feature</th>
                </tr>
              </thead>
              <tbody>
                {platforms.map((platform) => (
                  <tr key={platform.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-4 px-4 font-medium">
                      <div className="flex items-center">
                        <span className="text-2xl mr-2">{platform.logo}</span>
                        {platform.name}
                      </div>
                    </td>
                    <td className="py-4 px-4 text-lg text-gray-800">{platform.bestFor}</td>
                    <td className="py-4 px-4">
                      <span className="flex items-center text-lg text-gray-800">
                        {platform.rating}
                        <span className="text-orange-500 ml-1">★</span>
                      </span>
                    </td>
                    <td className="py-4 px-4 text-lg text-gray-800">{platform.price}</td>
                    <td className="py-4 px-4 text-lg text-gray-800">{platform.features[0]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case 'guide':
        return (
          <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">How to Choose the Right Website Builder</h3>
            <div className="space-y-6">
              <div className="relative pl-8">
                <div className="absolute left-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#000e54] text-white">1</div>
                <h4 className="font-semibold mb-1 text-gray-800">Define Your Website's Purpose</h4>
                <p className="text-lg text-gray-800">Start by clearly outlining what your website needs to accomplish. Is it a portfolio, online store, blog, or business website?</p>
              </div>
              <div className="relative pl-8">
                <div className="absolute left-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#000e54] text-white">2</div>
                <h4 className="font-semibold mb-1 text-gray-800">Assess Your Technical Skills</h4>
                <p className="text-lg text-gray-800">Be honest about your technical abilities. Some platforms are more beginner-friendly while others offer advanced customization.</p>
              </div>
              <div className="relative pl-8">
                <div className="absolute left-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#000e54] text-white">3</div>
                <h4 className="font-semibold mb-1 text-gray-800">Consider Your Budget</h4>
                <p className="text-lg text-gray-800">Website builders range from free to premium. Consider both immediate and long-term costs.</p>
              </div>
              <div className="relative pl-8">
                <div className="absolute left-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#000e54] text-white">4</div>
                <h4 className="font-semibold mb-1 text-gray-800">Evaluate Growth Potential</h4>
                <p className="text-lg text-gray-800">Choose a platform that can grow with your needs, especially if you anticipate expanding your site's functionality.</p>
              </div>
              <div className="relative pl-8">
                <div className="absolute left-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#000e54] text-white">5</div>
                <h4 className="font-semibold mb-1 text-gray-800">Test Before Committing</h4>
                <p className="text-lg text-gray-800">Take advantage of free trials and demos to ensure the platform feels right for your needs.</p>
              </div>
            </div>
          </div>
        );
      case 'forms':
        return (
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Essential Form Types for Your Website</h3>
            
            <div className="mb-6">
              <div className="flex border-b border-gray-200">
                {Object.keys(formTypes).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActiveFormTab(key)}
                    className={`${
                      activeFormTab === key
                        ? 'border-[#000e54] text-[#000e54]'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } py-3 px-6 border-b-2 font-medium text-lg`}
                  >
                    {formTypes[key].title}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-3">{formTypes[activeFormTab].title}</h4>
                <p className="text-lg text-gray-700 mb-4">{formTypes[activeFormTab].description}</p>
                
                <div className="mb-4">
                  <h5 className="font-medium text-gray-800 mb-2">Common Fields:</h5>
                  <ul className="list-disc pl-5 space-y-1">
                    {formTypes[activeFormTab].fields.map((field, idx) => (
                      <li key={idx} className="text-lg text-gray-700">{field}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-medium text-gray-800 mb-2">Best For:</h5>
                  {activeFormTab === 'contact' && <p className="text-lg text-gray-700">Business websites, contact pages, consultation requests</p>}
                  {activeFormTab === 'newsletter' && <p className="text-lg text-gray-700">Blogs, content sites, marketing-focused websites</p>}
                  {activeFormTab === 'booking' && <p className="text-lg text-gray-700">Service businesses, consultants, event venues</p>}
                  {activeFormTab === 'survey' && <p className="text-lg text-gray-700">Customer feedback, product research, testimonial collection</p>}
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gray-200 px-4 py-2 border-b border-gray-300">
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className="p-6 font-mono text-sm overflow-auto max-h-96">
                  <pre className="text-gray-800">{formTypes[activeFormTab].example}</pre>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Form Builder Tips</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h5 className="font-medium text-gray-800">Improve Conversion Rates</h5>
                  <ul className="list-disc pl-5 space-y-1">
                    <li className="text-lg text-gray-700">Keep forms short and focused</li>
                    <li className="text-lg text-gray-700">Use clear call-to-action buttons</li>
                    <li className="text-lg text-gray-700">Provide visual feedback on completion</li>
                    <li className="text-lg text-gray-700">Make error messages helpful and specific</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h5 className="font-medium text-gray-800">Enhance User Experience</h5>
                  <ul className="list-disc pl-5 space-y-1">
                    <li className="text-lg text-gray-700">Use logical tab order for keyboard navigation</li>
                    <li className="text-lg text-gray-700">Provide field hints and examples</li>
                    <li className="text-lg text-gray-700">Implement responsive design for mobile users</li>
                    <li className="text-lg text-gray-700">Use auto-fill when possible</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      case 'purpose':
        return (
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Website Builders for Every Purpose</h3>
            
            <div className="mb-6">
              <div className="flex border-b border-gray-200 overflow-x-auto">
                {Object.keys(purposeExamples).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActivePurposeTab(key)}
                    className={`${
                      activePurposeTab === key
                        ? 'border-[#000e54] text-[#000e54]'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } py-3 px-6 border-b-2 font-medium text-lg whitespace-nowrap`}
                  >
                    {purposeExamples[key].title}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">{purposeExamples[activePurposeTab].title}</h4>
                  <p className="text-lg text-gray-700 mb-4">{purposeExamples[activePurposeTab].description}</p>
                  
                  <div className="mb-6">
                    <h5 className="font-medium text-gray-800 mb-2">Recommended Platforms:</h5>
                    <div className="flex flex-wrap gap-2">
                      {purposeExamples[activePurposeTab].recommended.map((platform, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-lg font-medium">{platform}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">Essential Features:</h5>
                    <ul className="space-y-1">
                      {purposeExamples[activePurposeTab].keyFeatures.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-lg text-gray-700">
                          <span className="text-[#000e54] mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gray-100 p-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="bg-gray-200 p-2 rounded-lg shadow-inner mb-3">
                      <p className="text-gray-500 italic">Example visualization</p>
                      <p className="text-xs text-gray-400">(Image placeholder: {purposeExamples[activePurposeTab].example})</p>
                    </div>
                    <p className="text-lg text-gray-700">Check out our detailed guide on building {purposeExamples[activePurposeTab].title.toLowerCase()}</p>
                    <button className="mt-3 bg-[#000e54] text-white px-4 py-2 rounded-md">Read Full Guide</button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Additional Considerations for {purposeExamples[activePurposeTab].title}</h4>
              
              {activePurposeTab === 'business' && (
                <div className="space-y-4">
                  <p className="text-lg text-gray-700">For business websites, prioritize professional design, clear contact information, and mobile responsiveness. Consider adding:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li className="text-lg text-gray-700">Testimonial sections to build trust</li>
                    <li className="text-lg text-gray-700">Team profiles to humanize your brand</li>
                    <li className="text-lg text-gray-700">Clear service descriptions with pricing</li>
                    <li className="text-lg text-gray-700">Integration with Google Business Profile</li>
                  </ul>
                </div>
              )}
              
              {activePurposeTab === 'ecommerce' && (
                <div className="space-y-4">
                  <p className="text-lg text-gray-700">Online stores need robust product management and secure checkout options. Key additions should include:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li className="text-lg text-gray-700">High-quality product photography</li>
                    <li className="text-lg text-gray-700">Multiple payment options</li>
                    <li className="text-lg text-gray-700">Clear shipping and return policies</li>
                    <li className="text-lg text-gray-700">Product reviews and ratings</li>
                  </ul>
                </div>
              )}
              
              {activePurposeTab === 'portfolio' && (
                <div className="space-y-4">
                  <p className="text-lg text-gray-700">Creative portfolios should highlight your work with minimal distractions. Focus on:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li className="text-lg text-gray-700">High-resolution image galleries</li>
                    <li className="text-lg text-gray-700">Case studies and project details</li>
                    <li className="text-lg text-gray-700">Minimal, clean design that showcases your work</li>
                    <li className="text-lg text-gray-700">Easy contact/booking for potential clients</li>
                  </ul>
                </div>
              )}
              
              {activePurposeTab === 'blog' && (
                <div className="space-y-4">
                  <p className="text-lg text-gray-700">Blogs and publishing sites need strong content organization and readability. Consider:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li className="text-lg text-gray-700">Categorization and tagging systems</li>
                    <li className="text-lg text-gray-700">Search functionality</li>
                    <li className="text-lg text-gray-700">Email subscription for updates</li>
                    <li className="text-lg text-gray-700">Content recommendation widgets</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        );
      case 'integrations':
        return (
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Essential Website Integrations</h3>
            <p className="text-lg text-gray-700 mb-6">Modern websites need to connect with various tools and services. Here are the most important integrations to consider:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {integrationTools.map((tool, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{tool.icon}</span>
                    <h4 className="text-xl font-semibold text-gray-800">{tool.name}</h4>
                  </div>
                  <p className="text-lg text-gray-700 mb-4">{tool.description}</p>
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">Popular Options:</h5>
                    <div className="flex flex-wrap gap-2">
                      {tool.examples.map((example, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Integration Best Practices</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-gray-800 mb-2">Technical Considerations</h5>
                  <ul className="list-disc pl-5 space-y-1">
                    <li className="text-lg text-gray-700">Check API documentation before implementation</li>
                    <li className="text-lg text-gray-700">Use webhooks for real-time data updates</li>
                    <li className="text-lg text-gray-700">Implement proper error handling</li>
                    <li className="text-lg text-gray-700">Monitor integration performance</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-800 mb-2">User Experience</h5>
                  <ul className="list-disc pl-5 space-y-1">
                    <li className="text-lg text-gray-700">Maintain consistent design patterns</li>
                    <li className="text-lg text-gray-700">Provide clear loading/processing states</li>
                    <li className="text-lg text-gray-700">Ensure mobile compatibility</li>
                    <li className="text-lg text-gray-700">Keep authentication flows simple</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      case 'features':
      default:
        return (
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Top Website Building Platforms</h3>
            <p className="text-lg text-gray-700 mb-8">Compare the best website builders based on your specific needs and technical skills.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {platforms.map((platform) => (
                <div 
                  key={platform.id} 
                  className={`bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition-all duration-300 ${selectedPlatform?.id === platform.id ? 'ring-2 ring-[#000e54] transform scale-105' : 'hover:shadow-xl'}`}
                  onClick={() => handlePlatformSelect(platform)}
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="text-4xl">{platform.logo}</span>
                        <h4 className="text-xl font-semibold text-gray-800 mt-2">{platform.name}</h4>
                      </div>
                      <div className="flex items-center bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        <span className="font-medium">{platform.rating}</span>
                        <span className="ml-1">★</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-gray-700 font-medium">Best for:</p>
                      <p className="text-gray-700">{platform.bestFor}</p>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-gray-700 font-medium">Price:</p>
                      <p className="text-gray-700">{platform.price}</p>
                    </div>
                    
                    <div>
                      <p className="text-gray-700 font-medium">Key Features:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        {platform.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="text-gray-700">{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 px-6 py-3 border-t border-gray-200">
                    <button className="w-full bg-[#000e54] text-white py-2 rounded-md hover:bg-[#001a8c] transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            {selectedPlatform && (
              <div className="mt-8 bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-2xl font-semibold text-gray-800 flex items-center">
                        <span className="text-4xl mr-3">{selectedPlatform.logo}</span>
                        {selectedPlatform.name}
                      </h4>
                      <p className="text-lg text-gray-700 mt-1">{selectedPlatform.bestFor}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <p className="text-gray-500">Rating</p>
                        <div className="flex items-center justify-center">
                          <span className="text-xl font-medium">{selectedPlatform.rating}</span>
                          <span className="text-orange-500 ml-1">★</span>
                        </div>
                      </div>
                      <div className="text-center">
                        <p className="text-gray-500">Price</p>
                        <p className="text-xl font-medium">{selectedPlatform.price}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h5 className="text-xl font-semibold text-gray-800 mb-3">Features</h5>
                      <ul className="space-y-2">
                        {selectedPlatform.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <div className="mb-6">
                        <h5 className="text-xl font-semibold text-gray-800 mb-3">Pros</h5>
                        <ul className="space-y-2">
                          {selectedPlatform.pros.map((pro, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-green-500 mr-2">+</span>
                              <span className="text-gray-700">{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="text-xl font-semibold text-gray-800 mb-3">Cons</h5>
                        <ul className="space-y-2">
                          {selectedPlatform.cons.map((con, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-red-500 mr-2">-</span>
                              <span className="text-gray-700">{con}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex flex-wrap gap-4">
                    <button className="bg-[#000e54] text-white px-6 py-3 rounded-md hover:bg-[#001a8c] transition-colors">
                      Visit Website
                    </button>
                    <button className="bg-white border border-[#000e54] text-[#000e54] px-6 py-3 rounded-md hover:bg-gray-50 transition-colors">
                      Compare with Others
                    </button>
                    <button className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors">
                      Start Free Trial
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Website Building Platform Guide</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Find the perfect website builder for your needs, whether you're creating a portfolio, online store, or business website.
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
        <div className="flex border-b border-gray-200 overflow-x-auto">
          <button
            onClick={() => setActiveTab('features')}
            className={`${
              activeTab === 'features'
                ? 'border-[#000e54] text-[#000e54]'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } py-4 px-6 border-b-2 font-medium text-lg`}
          >
            Platform Features
          </button>
          <button
            onClick={() => setActiveTab('comparison')}
            className={`${
              activeTab === 'comparison'
                ? 'border-[#000e54] text-[#000e54]'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } py-4 px-6 border-b-2 font-medium text-lg`}
          >
            Quick Comparison
          </button>
          <button
            onClick={() => setActiveTab('guide')}
            className={`${
              activeTab === 'guide'
                ? 'border-[#000e54] text-[#000e54]'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } py-4 px-6 border-b-2 font-medium text-lg`}
          >
            Selection Guide
          </button>
          <button
            onClick={() => setActiveTab('purpose')}
            className={`${
              activeTab === 'purpose'
                ? 'border-[#000e54] text-[#000e54]'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } py-4 px-6 border-b-2 font-medium text-lg`}
          >
            By Purpose
          </button>
          <button
            onClick={() => setActiveTab('forms')}
            className={`${
              activeTab === 'forms'
                ? 'border-[#000e54] text-[#000e54]'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } py-4 px-6 border-b-2 font-medium text-lg`}
          >
            Essential Forms
          </button>
          <button
            onClick={() => setActiveTab('integrations')}
            className={`${
              activeTab === 'integrations'
                ? 'border-[#000e54] text-[#000e54]'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } py-4 px-6 border-b-2 font-medium text-lg`}
          >
            Integrations
          </button>
        </div>
      </div>
      
      {renderTabContent()}
      
      <div className="mt-12 bg-[#000e54] rounded-lg shadow-lg p-8 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help Choosing?</h2>
          <p className="text-xl mb-6">Our experts can help you select the perfect website builder for your specific needs and budget.</p>
          <button className="bg-white text-[#000e54] px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors">
            Get Personalized Recommendation
          </button>
        </div>
      </div>

      <div className="mt-12 bg-gray-50 rounded-lg shadow-lg p-8">
  <h2 className="text-3xl font-bold text-gray-800 mb-6">In-Depth Platform Analysis</h2>
  
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <span className="text-4xl mr-4">🏗️</span>
        <h3 className="text-2xl font-semibold">BuilderPro Deep Dive</h3>
      </div>
      <div className="space-y-4">
        <div>
          <h4 className="font-medium text-gray-800 mb-2">Template Quality</h4>
          <p className="text-gray-700">500+ professionally designed templates with industry-specific designs. All templates are fully responsive and include pre-built sections for common website elements.</p>
        </div>
        <div>
          <h4 className="font-medium text-gray-800 mb-2">E-commerce Capabilities</h4>
          <p className="text-gray-700">Full online store functionality including product variations, inventory management, abandoned cart recovery, and multi-currency support.</p>
        </div>
        <div>
          <h4 className="font-medium text-gray-800 mb-2">Learning Resources</h4>
          <p className="text-gray-700">Extensive documentation, video tutorials, and weekly live Q&A sessions with platform experts.</p>
        </div>
      </div>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <span className="text-4xl mr-4">⚡</span>
        <h3 className="text-2xl font-semibold">QuickSite Performance</h3>
      </div>
      <div className="space-y-4">
        <div>
          <h4 className="font-medium text-gray-800 mb-2">AI Features</h4>
          <p className="text-gray-700">AI-powered content suggestions, layout optimization, and automatic image resizing for optimal performance across devices.</p>
        </div>
        <div>
          <h4 className="font-medium text-gray-800 mb-2">Speed Optimization</h4>
          <p className="text-gray-700">Built-in CDN, automatic image compression, and lazy loading ensure fast page load times (average 1.2s).</p>
        </div>
        <div>
          <h4 className="font-medium text-gray-800 mb-2">Beginner Friendly</h4>
          <p className="text-gray-700">Step-by-step setup wizard, contextual help bubbles, and simplified terminology make it ideal for first-time website creators.</p>
        </div>
      </div>
    </div>
  </div>
</div>


      <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
  <h2 className="text-3xl font-bold text-gray-800 mb-6">Detailed Pricing Breakdown</h2>
  
  <div className="overflow-x-auto">
    <table className="min-w-full">
      <thead className="bg-gray-100">
        <tr>
          <th className="py-3 px-4 text-left">Feature</th>
          <th className="py-3 px-4 text-left">BuilderPro</th>
          <th className="py-3 px-4 text-left">QuickSite</th>
          <th className="py-3 px-4 text-left">CreativeCanvas</th>
          <th className="py-3 px-4 text-left">BusinessBuilder</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-gray-200">
          <td className="py-3 px-4 font-medium">Free Plan</td>
          <td className="py-3 px-4">No</td>
          <td className="py-3 px-4">Yes (with branding)</td>
          <td className="py-3 px-4">No</td>
          <td className="py-3 px-4">14-day trial</td>
        </tr>
        <tr className="border-b border-gray-200">
          <td className="py-3 px-4 font-medium">Basic Plan</td>
          <td className="py-3 px-4">$12/month</td>
          <td className="py-3 px-4">$8/month</td>
          <td className="py-3 px-4">$15/month</td>
          <td className="py-3 px-4">$10/month</td>
        </tr>
        <tr className="border-b border-gray-200">
          <td className="py-3 px-4 font-medium">E-commerce Fees</td>
          <td className="py-3 px-4">2% transaction fee</td>
          <td className="py-3 px-4">3% transaction fee</td>
          <td className="py-3 px-4">Not available</td>
          <td className="py-3 px-4">1% transaction fee</td>
        </tr>
        <tr className="border-b border-gray-200">
          <td className="py-3 px-4 font-medium">Storage Limit</td>
          <td className="py-3 px-4">Unlimited</td>
          <td className="py-3 px-4">10GB</td>
          <td className="py-3 px-4">20GB</td>
          <td className="py-3 px-4">Unlimited</td>
        </tr>
        <tr>
          <td className="py-3 px-4 font-medium">Bandwidth</td>
          <td className="py-3 px-4">Unlimited</td>
          <td className="py-3 px-4">50GB/month</td>
          <td className="py-3 px-4">100GB/month</td>
          <td className="py-3 px-4">Unlimited</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>


      <div className="mt-12 bg-gray-50 rounded-lg shadow-lg p-8">
  <h2 className="text-3xl font-bold text-gray-800 mb-6">Real-World Success Stories</h2>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-3">Boutique Retailer</h3>
      <p className="text-gray-700 mb-4">"Using BusinessBuilder, we increased our online sales by 240% in 6 months with their built-in marketing tools and seamless inventory management."</p>
      <div className="flex items-center">
        <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">E-commerce</div>
        <span className="ml-auto text-gray-500">- Sarah K., Fashion Boutique Owner</span>
      </div>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-3">Photography Studio</h3>
      <p className="text-gray-700 mb-4">"CreativeCanvas helped us showcase our portfolio beautifully, resulting in 3x more client inquiries and higher-value projects."</p>
      <div className="flex items-center">
        <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Portfolio</div>
        <span className="ml-auto text-gray-500">- Michael T., Professional Photographer</span>
      </div>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-3">Local Restaurant</h3>
      <p className="text-gray-700 mb-4">"QuickSite's easy online ordering integration helped us survive the pandemic by shifting to takeout orders quickly."</p>
      <div className="flex items-center">
        <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Small Business</div>
        <span className="ml-auto text-gray-500">- The Chen Family, Restaurant Owners</span>
      </div>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-3">Tech Startup</h3>
      <p className="text-gray-700 mb-4">"BuilderPro's custom code options let us implement complex features while maintaining a professional design as we scaled."</p>
      <div className="flex items-center">
        <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">Startup</div>
        <span className="ml-auto text-gray-500">- David R., CTO</span>
      </div>
    </div>
  </div>
</div>

      <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
  <h2 className="text-3xl font-bold text-gray-800 mb-6">Feature Availability Matrix</h2>
  
  <div className="overflow-x-auto">
    <table className="min-w-full">
      <thead className="bg-gray-100">
        <tr>
          <th className="py-3 px-4 text-left">Feature</th>
          <th className="py-3 px-4 text-center">BuilderPro</th>
          <th className="py-3 px-4 text-center">QuickSite</th>
          <th className="py-3 px-4 text-center">CreativeCanvas</th>
          <th className="py-3 px-4 text-center">BusinessBuilder</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-gray-200">
          <td className="py-3 px-4 font-medium">Mobile Editor</td>
          <td className="py-3 px-4 text-center text-green-600">✓</td>
          <td className="py-3 px-4 text-center text-green-600">✓</td>
          <td className="py-3 px-4 text-center text-green-600">✓</td>
          <td className="py-3 px-4 text-center text-gray-400">✗</td>
        </tr>
        <tr className="border-b border-gray-200">
          <td className="py-3 px-4 font-medium">Multi-language</td>
          <td className="py-3 px-4 text-center text-green-600">✓</td>
          <td className="py-3 px-4 text-center text-gray-400">✗</td>
          <td className="py-3 px-4 text-center text-green-600">✓</td>
          <td className="py-3 px-4 text-center text-green-600">✓</td>
        </tr>
        <tr className="border-b border-gray-200">
          <td className="py-3 px-4 font-medium">Membership Areas</td>
          <td className="py-3 px-4 text-center text-green-600">✓</td>
          <td className="py-3 px-4 text-center text-gray-400">✗</td>
          <td className="py-3 px-4 text-center text-gray-400">✗</td>
          <td className="py-3 px-4 text-center text-green-600">✓</td>
        </tr>
        <tr className="border-b border-gray-200">
          <td className="py-3 px-4 font-medium">API Access</td>
          <td className="py-3 px-4 text-center text-green-600">✓</td>
          <td className="py-3 px-4 text-center text-gray-400">✗</td>
          <td className="py-3 px-4 text-center text-green-600">✓</td>
          <td className="py-3 px-4 text-center text-green-600">✓</td>
        </tr>
        <tr>
          <td className="py-3 px-4 font-medium">Automated Backups</td>
          <td className="py-3 px-4 text-center text-green-600">✓</td>
          <td className="py-3 px-4 text-center text-green-600">✓</td>
          <td className="py-3 px-4 text-center text-green-600">✓</td>
          <td className="py-3 px-4 text-center text-green-600">✓</td>
        </tr>
      </tbody>
    </table>
  </div>





</div>

<div className="mt-12 bg-white rounded-lg shadow-lg p-8">
  <h2 className="text-3xl font-bold text-gray-800 mb-6">Getting Started Guides</h2>
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Guide Card 1 */}
    <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
      <div className="bg-blue-50 p-4">
        <span className="text-3xl">🛠️</span>
        <h3 className="text-xl font-semibold mt-2">Choosing Your Platform</h3>
      </div>
      <div className="p-4">
        <p className="text-gray-700 mb-4">Learn how to select the right website builder based on your skills, budget, and goals.</p>
        <button className="text-blue-600 font-medium flex items-center">
          Read Guide 
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>

    {/* Guide Card 2 */}
    <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
      <div className="bg-purple-50 p-4">
        <span className="text-3xl">📱</span>
        <h3 className="text-xl font-semibold mt-2">Mobile Optimization</h3>
      </div>
      <div className="p-4">
        <p className="text-gray-700 mb-4">Essential tips to ensure your website looks great on all devices.</p>
        <button className="text-purple-600 font-medium flex items-center">
          Read Guide 
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>

    {/* Guide Card 3 */}
    <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
      <div className="bg-green-50 p-4">
        <span className="text-3xl">🔍</span>
        <h3 className="text-xl font-semibold mt-2">SEO Fundamentals</h3>
      </div>
      <div className="p-4">
        <p className="text-gray-700 mb-4">Get found online with these essential search engine optimization techniques.</p>
        <button className="text-green-600 font-medium flex items-center">
          Read Guide 
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>







<section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
<div className="max-w-4xl mx-auto text-center">
  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
    Find Your Perfect Website Building Platform
  </h1>
  
  <p className="text-xl text-gray-600 mb-10 leading-relaxed">
    In today's digital world, having a professional website is essential. But with so many options available, 
    choosing the right platform can be overwhelming. We've tested and compared the top website builders 
    to help you make an informed decision.
  </p>
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="text-blue-600 text-3xl mb-4">🚀</div>
      <h3 className="font-semibold text-lg mb-2">Ease of Use</h3>
      <p className="text-gray-600">Compare intuitive drag-and-drop interfaces versus code-based solutions</p>
    </div>
    
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="text-blue-600 text-3xl mb-4">💎</div>
      <h3 className="font-semibold text-lg mb-2">Features</h3>
      <p className="text-gray-600">See which platforms offer the tools you actually need</p>
    </div>
    
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="text-blue-600 text-3xl mb-4">💰</div>
      <h3 className="font-semibold text-lg mb-2">Value</h3>
      <p className="text-gray-600">Understand pricing models and get the most for your budget</p>
    </div>
  </div>
  
  <div className="mt-16 bg-blue-50 p-6 rounded-lg border border-blue-100">
    <h2 className="text-2xl font-semibold text-blue-800 mb-4">Why Trust Our Recommendations?</h2>
    <p className="text-blue-700">
      Our team has built hundreds of websites across all major platforms. We evaluate based on real-world 
      performance, not just marketing claims. Whether you're a beginner or a developer, we'll help you find 
      the right solution.
    </p>
  </div>
</div>
</section> 




    </div>
  );
};

export default WebsiteBuilding;