import React, { useState } from 'react';
import Navbar from './Navbar';
import WideDiv from './WideDiv';
import Footer from './Footer';
import { ArrowRight, Monitor, Calculator, Megaphone } from 'lucide-react';
import { sendFormData } from './emailService';


const StartABusiness = () => {
  
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const TOOLKIT_TEMPLATE_ID = 'template_0h77k1d'; // Replace with your actual template ID

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Prepare minimal form data required for the toolkit download
      const formData = {
        email: email,
        firstName_sab: 'Subscriber', // Default value or you could add a name field
        lastName_sab: '',
        fullName_sab: 'Subscriber', // Default value
        // Add any other required fields from your EmailJS template
      };

      await sendFormData(formData, TOOLKIT_TEMPLATE_ID);
      
      setIsSuccess(true);
      setEmail('');
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    } catch (err) {
      setError('Failed to send email. Please try again later.');
      console.error('Error sending email:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const categories = [
    {
      id: 'website',
      title: '🖥️ Website Builders',
      icon: <Monitor className="w-6 h-6" />,
      description: 'Create your professional online presence without coding',
      tools: [
        {
          name: 'Wix',
          description: 'Drag-and-drop website builder with hundreds of templates',
          link: '/affiliate/wix'
        },
        {
          name: 'Shopify',
          description: 'Complete e-commerce platform to start and grow your business',
          link: '/affiliate/shopify'
        },
        {
          name: 'Squarespace',
          description: 'Beautiful templates with integrated e-commerce capabilities',
          link: '/affiliate/squarespace'
        }
      ]
    },
    {
      id: 'accounting',
      title: '📊 Accounting Software',
      icon: <Calculator className="w-6 h-6" />,
      description: 'Manage your finances and stay tax compliant',
      tools: [
        {
          name: 'QuickBooks',
          description: 'Complete accounting solution for small businesses',
          link: '/affiliate/quickbooks'
        },
        {
          name: 'FreshBooks',
          description: 'Simple cloud accounting for invoicing and expense tracking',
          link: '/affiliate/freshbooks'
        }
      ]
    },
    {
      id: 'marketing',
      title: '📢 Marketing Tools',
      icon: <Megaphone className="w-6 h-6" />,
      description: 'Attract and engage customers to grow your business',
      tools: [
        {
          name: 'Mailchimp',
          description: 'Email marketing platform with automation capabilities',
          link: '/affiliate/mailchimp'
        },
        {
          name: 'Canva',
          description: 'Design platform for creating professional marketing materials',
          link: '/affiliate/canva'
        }
      ]
    }
  ];

  const toggleCategory = (id) => {
    if (expandedCategory === id) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(id);
    }
  };

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-[#000e54] text-white">
        <div className="max-w-6xl mx-auto px-4 py-8 sm:px-4 lg:px-4">
          <h2 className="text-4xl font-semibold mb-4">Start a Business</h2>
          <p className="text-lg max-w-6xl">
            Our mission is to help you compare products, services, and solutions to make the best decisions for your business.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8 sm:px-4 lg:px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Steps to Start */}
          <div className="md:col-span-2">
            <h2 className="text-4xl font-semibold mb-6">How to Start Your Business</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-3">1. Choose Your Business Idea</h3>
                <p className="text-lg text-gray-800">
                  Compare different business models and industries to find the right fit for your skills and market demand.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-3">2. Research the Market</h3>
                <p className="text-lg text-gray-800">
                  Use our comparison tools to analyze competitors, pricing, and customer needs in your target market.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-3">3. Create a Business Plan</h3>
                <p className="text-lg text-gray-800">
                  Outline your business goals, strategies, and financial projections with our templates and guides.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-3">4. Compare Funding Options</h3>
                <p className="text-lg text-gray-800">
                  Evaluate loans, investors, and grants to find the best financing solution for your startup.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-3">5. Register Your Business</h3>
                <p className="text-lg text-gray-800">
                  Compare legal structures (LLC, Corporation, etc.) and registration services to properly establish your business.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Resources */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Popular Comparisons</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-blue-800 hover:underline">Business Formation Services</a></li>
                <li><a href="#" className="text-blue-600 hover:underline">E-commerce Platforms</a></li>
                <li><a href="#" className="text-blue-600 hover:underline">Payment Processors</a></li>
                <li><a href="#" className="text-blue-600 hover:underline">Business Insurance Providers</a></li>
                <li><a href="#" className="text-blue-600 hover:underline">POS Systems</a></li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Tools & Calculators</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-blue-600 hover:underline">Startup Cost Calculator</a></li>
                <li><a href="#" className="text-blue-600 hover:underline">Break-even Analysis</a></li>
                <li><a href="#" className="text-blue-600 hover:underline">Business Loan Comparison</a></li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Guides & Templates</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-blue-600 hover:underline">Business Plan Template</a></li>
                <li><a href="#" className="text-blue-600 hover:underline">Marketing Strategy Guide</a></li>
                <li><a href="#" className="text-blue-600 hover:underline">Legal Requirements by State</a></li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>

    <section className="bg-white to-white py-8 px-4 sm:px-6 lg:px-8">
  <div className="max-w-6xl mx-auto px-4 py-8">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-semibold text-[#000e54] mb-4">Compare Business Types</h2>
      <p className="text-lg text-gray-800 max-w-3xl mx-auto">
        Find the perfect business model for your entrepreneurial journey with our detailed comparison
      </p>
    </div>
    
    <div className="grid md:grid-cols-3 gap-8">
      {/* E-commerce Card */}
      <div className="border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:border-[#ff8633] bg-white">
        <div className="flex items-center mb-4">
          <div className="bg-[#000e54] p-3 rounded-lg mr-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-[#000e54]">E-commerce Business</h3>
        </div>
        <ul className="space-y-3 text-gray-800 mb-6 text-lg">
          <li className="flex items-start">
            <span className="text-[#ff8633] mr-2">•</span>
            <span><strong>Startup cost:</strong> $3,000-$10,000</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#ff8633] mr-2">•</span>
            <span><strong>Best for:</strong> Tech-savvy entrepreneurs</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#ff8633] mr-2">•</span>
            <span><strong>Growth potential:</strong> <span className="text-[#ff8633]">★★★★★</span></span>
          </li>
        </ul>
        <button className="w-full bg-[#000e54] text-white px-6 py-3 rounded-lg hover:bg-[#ff8633] transition-colors font-semibold">
          Compare Platforms
        </button>
      </div>

      {/* Service Business Card */}
      <div className="border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:border-[#ff8633] bg-white">
        <div className="flex items-center mb-4">
          <div className="bg-[#000e54] p-3 rounded-lg mr-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-[#000e54]">Service Business</h3>
        </div>
        <ul className="space-y-3 text-gray-800 mb-6 text-lg">
          <li className="flex items-start">
            <span className="text-[#ff8633] mr-2">•</span>
            <span><strong>Startup cost:</strong> $1,000-$5,000</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#ff8633] mr-2">•</span>
            <span><strong>Best for:</strong> Skilled professionals</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#ff8633] mr-2">•</span>
            <span><strong>Growth potential:</strong> <span className="text-[#ff8633]">★★★★☆</span></span>
          </li>
        </ul>
        <button className="w-full bg-[#000e54] text-white px-6 py-3 rounded-lg hover:bg-[#ff8633] transition-colors font-semibold">
          Compare Tools
        </button>
      </div>

      {/* Local Retail Card */}
      <div className="border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:border-[#ff8633] bg-white">
        <div className="flex items-center mb-4">
          <div className="bg-[#000e54] p-3 rounded-lg mr-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-[#000e54]">Local Retail</h3>
        </div>
        <ul className="space-y-3 text-gray-700 mb-6 text-lg">
          <li className="flex items-start">
            <span className="text-[#ff8633] mr-2">•</span>
            <span><strong>Startup cost:</strong> $10,000-$50,000</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#ff8633] mr-2">•</span>
            <span><strong>Best for:</strong> Community-focused owners</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#ff8633] mr-2">•</span>
            <span><strong>Growth potential:</strong> <span className="text-[#ff8633]">★★★☆☆</span></span>
          </li>
        </ul>
        <button className="w-full bg-[#000e54] text-white px-6 py-3 rounded-lg hover:bg-[#ff8633] transition-colors font-medium">
          Compare POS Systems
        </button>
      </div>
    </div>
  </div>
</section>


<section className="bg-white">
  <div className="max-w-6xl mx-auto px-4 py-8">
    <h2 className="text-4xl font-semibold text-center mb-8 text-[#000e54]">Essential Tools to Launch Faster</h2>
    
    <div className="grid gap-6">
      {categories.map((category) => (
        <div key={category.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <div 
            className="p-6 flex items-center justify-between cursor-pointer"
            onClick={() => toggleCategory(category.id)}
          >
            <div className="flex items-center space-x-4">
              <div className="bg-[#000e54] bg-opacity-10 p-3 rounded-full">
                <div className="text-white">
                  {category.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#000e54]">{category.title}</h3>
                <p className="text-lg text-gray-600">{category.description}</p>
              </div>
            </div>
            <ArrowRight 
              className={`w-5 h-5 transition-transform duration-300 text-[#000e54] ${expandedCategory === category.id ? 'rotate-90' : ''}`} 
            />
          </div>
          
          {expandedCategory === category.id && (
            <div className="bg-gray-50 border-t">
              {category.tools.map((tool, index) => (
                <div 
                  key={index} 
                  className="p-4 border-b last:border-b-0 hover:bg-gray-100 transition"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium text-xl text-[#000e54]">{tool.name}</h4>
                      <p className="text-lg text-gray-600">{tool.description}</p>
                    </div>
                    <a 
                      href={tool.link} 
                      className="bg-[#000e54] hover:bg-blue-900 text-white py-2 px-4 rounded text-lg transition"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              ))}
              <div className="p-3 text-sm text-gray-500 text-center">
                <p>* Some links above are affiliate links. We may earn a commission if you sign up.</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
</section>

<section className="bg-[#000e54] py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Begin Your Journey?
        </h2>
        
        <div className="max-w-xl mx-auto mb-10">
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-grow px-4 py-3 rounded-lg text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-[#ff8633]"
              disabled={isSubmitting}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#ff8633] hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300 flex items-center justify-center"
            >
              {isSubmitting ? (
                <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : "Send"}
            </button>
          </form>
          
          {error && <p className="text-red-300 mt-2">{error}</p>}
          {isSuccess && <p className="text-green-200 mt-2">Success!</p>}
        </div>
        
        <div className="mt-8">
          <a
            href="/consultation"
            className="inline-block bg-transparent border-2 border-[#ff8633] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#ff8633] hover:text-white transition-colors duration-300"
          >
            Talk to a Business Advisor
          </a>
        </div>
        
        <p className="text-white text-sm mt-6 opacity-80">
          Join thousands of entrepreneurs who have successfully launched their startups with our guidance.
        </p>
      </div>
    </section>





    <div className="max-w-6xl mx-auto px-4 sm:px-4 lg:px-4 py-8">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-4xl font-semibold text-gray-900 mb-6">
          How to Start a Business in 2024: Complete Guide
        </h1>
        <p className="text-xl text-gray-800 max-w-6xl mx-auto mb-8">
          Compare the best tools, services, and strategies to launch your business successfully. 
          Our data-driven comparisons help you make smarter decisions from day one.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="cursor-pointer bg-[#000e54] hover:bg-[#ff8633] text-white font-medium py-3 px-6 rounded-lg">
            Compare Business Tools
          </button>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section className="mb-16 max-w-6xl mx-auto">
  <h2 className="text-4xl font-semibold text-center mb-10">Your 7-Step Business Launch Plan</h2>
  
  <div className="space-y-10">
    {/* Step 1 */}
    <div>
      <div className="flex items-center gap-4 mb-3">
        <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold text-[#000e54]">
          1
        </div>
        <h3 className="text-xl font-semibold">Validate Your Business Idea</h3>
      </div>
      
      <div className="prose text-gray-800 mb-5 pl-14">
        <p className="text-lg">
          Before investing time and money, verify that your business idea solves a real problem. 
          Our market research tools help you:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Analyze search volume for your product/service</li>
          <li>Compare competitor pricing and offerings</li>
          <li>Identify underserved customer needs</li>
        </ul>
      </div>
      
      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 ml-14">
        <h4 className="font-medium mb-2">Compare Market Research Tools:</h4>
        <div className="flex flex-wrap gap-2">
          {['Google Trends', 'SEMrush', 'Ahrefs', 'SurveyMonkey'].map((tool) => (
            <a key={tool} href="#" className="text-blue-600 hover:underline text-sm bg-blue-50 px-3 py-1 rounded">
              {tool}
            </a>
          ))}
        </div>
      </div>
    </div>

    {/* Step 2 */}
    <div>
      <div className="flex items-center gap-4 mb-3">
        <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold text-[#000e54]">
          2
        </div>
        <h3 className="text-xl font-semibold">Choose Your Business Structure</h3>
      </div>
      
      <div className="prose text-gray-800 mb-5 pl-14">
        <p className="text-lg">
          The legal structure you choose impacts taxes, liability, and paperwork. 
          Compare the most common options:
        </p>
        
        <div className="overflow-x-auto mt-4 mb-5">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-lg font-semibold text-gray-800">Type</th>
                <th className="px-4 py-3 text-left text-lg font-semibold text-gray-800">Liability</th>
                <th className="px-4 py-3 text-left text-lg font-semibold text-gray-800">Taxes</th>
                <th className="px-4 py-3 text-left text-lg font-semibold text-gray-800">Complexity</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-4 whitespace-nowrap font-semibold">Sole Proprietorship</td>
                <td className="px-4 py-4">Unlimited</td>
                <td className="px-4 py-4">Pass-through</td>
                <td className="px-4 py-4">Low</td>
              </tr>
              <tr>
                <td className="px-4 py-4 whitespace-nowrap font-medium">LLC</td>
                <td className="px-4 py-4">Limited</td>
                <td className="px-4 py-4">Flexible</td>
                <td className="px-4 py-4">Medium</td>
              </tr>
              <tr>
                <td className="px-4 py-4 whitespace-nowrap font-medium">Corporation</td>
                <td className="px-4 py-4">Limited</td>
                <td className="px-4 py-4">Double taxation</td>
                <td className="px-4 py-4">High</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="text-lg">
          Our comparison of business formation services can help you register properly.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Success Story */}
      <section className="mb-20 bg-blue-50 rounded-2xl p-8 md:p-12">
        <div className="max-w-4xl mx-auto">
          <div className="md:flex gap-12 items-center">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e" 
                alt="Entrepreneur success story" 
                className="rounded-xl shadow-md w-full h-auto"
              />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">How Comparing Options Helped Grow a $100K/Month Business</h2>
              <blockquote className="text-lg text-gray-700 mb-6 border-l-4 border-blue-500 pl-4">
                "Using Compare Bazaar's platform comparisons saved us $12,000 in our first year by choosing the right tools from day one."
              </blockquote>
              <div className="prose text-gray-600 mb-6">
                <p>
                  When Jessica Rodriguez launched her eco-friendly home goods store, she nearly signed up for an expensive e-commerce platform before discovering our comparison tools. 
                </p>
                <p className="mt-3">
                  Our side-by-side analysis revealed a better fit that saved on transaction fees and offered the specific inventory features she needed.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h4 className="font-medium mb-2">Key Decisions Informed by Comparisons:</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Selected Shopify over BigCommerce for better app ecosystem</li>
                  <li>Chose Square over PayPal for lower in-person transaction fees</li>
                  <li>Picked Mailchimp over Klaviyo for simpler email automation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>





    <WideDiv />
    <Footer/>
    </>
  );
};

export default StartABusiness;