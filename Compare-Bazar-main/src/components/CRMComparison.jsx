import React from 'react';

const CRMComparison = () => {
  return (
    <div id="comparison" className="py-20 bg-gradient-to-br from-orange-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-center text-black mb-6">
  Comprehensive CRM Provider Comparison
</h2>

        <p className="text--700 text-lg mb-8 text-center max-w-3xl mx-auto">
          Selecting the right CRM is crucial for your business growth strategy. Our detailed comparison helps you evaluate leading CRM solutions based on essential factors including features, pricing, scalability, integration capabilities, and customer support quality.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500">
            <h3 className="text-xl font-bold text-orange-600 mb-3">What to Consider When Choosing a CRM</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span><strong>Business Size:</strong> Enterprise solutions offer more complex features, while SMB-focused CRMs prioritize ease of use and affordability.</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span><strong>Industry Focus:</strong> Some CRMs offer specialized features for specific industries like healthcare, real estate, or manufacturing.</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span><strong>Integration Needs:</strong> Consider how well the CRM integrates with your existing tech stack and third-party applications.</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span><strong>Growth Potential:</strong> Choose a CRM that can scale with your business as you expand operations and customer base.</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500">
            <h3 className="text-xl font-bold text-orange-600 mb-3">Key CRM Benefits</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span><strong>Improved Customer Relationships:</strong> Track all interactions for more personalized customer service.</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span><strong>Enhanced Sales Process:</strong> Streamline lead management and optimize your sales pipeline.</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span><strong>Data-Driven Decisions:</strong> Gain insights from detailed analytics and reporting features.</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span><strong>Automation:</strong> Reduce manual tasks and increase team productivity through workflow automation.</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="relative bg-white rounded-2xl shadow-2xl p-8 mb-12 border-2 border-orange-300 transform perspective-1000 hover:scale-[1.01] transition-all duration-300">
          {/* Decorative corner accents */}
          <div className="absolute -top-2 -left-2 w-6 h-6 bg-orange-500 rounded-full"></div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-500 rounded-full"></div>
          <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-orange-500 rounded-full"></div>
          <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-orange-500 rounded-full"></div>
          
          <h3 className="text-2xl font-bold mb-6 text-center text-black-600">Top CRM Solutions - Detailed Comparison</h3>
          
          <div className="overflow-x-auto rounded-xl shadow-md">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gradient-to-r from-orange-600 to-orange-400 text-white">
                  <th className="py-5 px-4 text-left rounded-tl-lg">CRM Provider</th>
                  <th className="py-5 px-4 text-left">Best For</th>
                  <th className="py-5 px-4 text-left">Key Features</th>
                  <th className="py-5 px-4 text-left">Pricing Model</th>
                  <th className="py-5 px-4 text-left">Integration Capabilities</th>
                  <th className="py-5 px-4 text-left">Customer Support</th>
                  <th className="py-5 px-4 text-left rounded-tr-lg">User Experience</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-orange-100 hover:bg-orange-50 transition duration-200">
                  <td className="py-5 px-4 font-bold text-orange-600">Salesforce</td>
                  <td className="py-5 px-4">Enterprise & Mid-Market</td>
                  <td className="py-5 px-4">
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Einstein AI analytics</li>
                      <li>Advanced workflow automation</li>
                      <li>Extensive AppExchange marketplace</li>
                      <li>Customizable dashboards</li>
                      <li>Territory management</li>
                    </ul>
                  </td>
                  <td className="py-5 px-4">
                    <p className="font-medium">$25-$300+ per user/month</p>
                    <p className="text-sm text-gray-600">Annual billing</p>
                  </td>
                  <td className="py-5 px-4">
                    <p className="font-medium">Excellent</p>
                    <p className="text-sm text-gray-600">5000+ integrations via AppExchange</p>
                  </td>
                  <td className="py-5 px-4">
                    <p className="font-medium">24/7 Premium Support</p>
                    <p className="text-sm text-gray-600">Additional cost for higher tiers</p>
                  </td>
                  <td className="py-5 px-4">
                    <p className="font-medium">Complex</p>
                    <p className="text-sm text-gray-600">Steep learning curve</p>
                  </td>
                </tr>
                <tr className="border-b border-orange-100 hover:bg-orange-50 transition duration-200">
                  <td className="py-5 px-4 font-bold text-orange-600">HubSpot</td>
                  <td className="py-5 px-4">SMBs & Marketing-focused</td>
                  <td className="py-5 px-4">
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Inbound marketing tools</li>
                      <li>Email marketing automation</li>
                      <li>Free starter plan</li>
                      <li>Content management system</li>
                      <li>Meeting scheduler</li>
                    </ul>
                  </td>
                  <td className="py-5 px-4">
                    <p className="font-medium">Free - $1,200+ per month</p>
                    <p className="text-sm text-gray-600">Based on contacts & features</p>
                  </td>
                  <td className="py-5 px-4">
                    <p className="font-medium">Very Good</p>
                    <p className="text-sm text-gray-600">1000+ integrations</p>
                  </td>
                  <td className="py-5 px-4">
                    <p className="font-medium">Email & Phone Support</p>
                    <p className="text-sm text-gray-600">24/7 on higher tiers</p>
                  </td>
                  <td className="py-5 px-4">
                    <p className="font-medium">User-Friendly</p>
                    <p className="text-sm text-gray-600">Intuitive interface</p>
                  </td>
                </tr>
                <tr className="border-b border-orange-100 hover:bg-orange-50 transition duration-200">
                  <td className="py-5 px-4 font-bold text-orange-600">Zoho CRM</td>
                  <td className="py-5 px-4">Small Business & Startups</td>
                  <td className="py-5 px-4">
                    <ul className="list-disc pl-4 space-y-1">
                      <li>AI assistant (Zia)</li>
                      <li>Sales signals</li>
                      <li>Process management</li>
                      <li>Blueprint for sales processes</li>
                      <li>Social media integration</li>
                    </ul>
                  </td>
                  <td className="py-5 px-4">
                    <p className="font-medium">$14-$52 per user/month</p>
                    <p className="text-sm text-gray-600">Annual billing</p>
                  </td>
                  <td className="py-5 px-4">
                    <p className="font-medium">Good</p>
                    <p className="text-sm text-gray-600">Strong with Zoho suite; 500+ integrations</p>
                  </td>
                  <td className="py-5 px-4">
                    <p className="font-medium">24/5 Support</p>
                    <p className="text-sm text-gray-600">Phone, email, chat</p>
                  </td>
                  <td className="py-5 px-4">
                    <p className="font-medium">Straightforward</p>
                    <p className="text-sm text-gray-600">Some customization learning</p>
                  </td>
                </tr>
                <tr className="border-b border-orange-100 hover:bg-orange-50 transition duration-200">
                  <td className="py-5 px-4 font-bold text-orange-600">Microsoft Dynamics</td>
                  <td className="py-5 px-4">Microsoft-centric orgs</td>
                  <td className="py-5 px-4">
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Deep Office 365 integration</li>
                      <li>Power BI analytics</li>
                      <li>LinkedIn integration</li>
                      <li>AI-driven insights</li>
                      <li>Field service management</li>
                    </ul>
                  </td>
                  <td className="py-5 px-4">
                    <p className="font-medium">$65-$200+ per user/month</p>
                    <p className="text-sm text-gray-600">Annual commitment</p>
                  </td>
                  <td className="py-5 px-4">
                    <p className="font-medium">Excellent</p>
                    <p className="text-sm text-gray-600">Seamless Microsoft ecosystem integration</p>
                  </td>
                  <td className="py-5 px-4">
                    <p className="font-medium">24/7 Support</p>
                    <p className="text-sm text-gray-600">Enterprise-grade</p>
                  </td>
                  <td className="py-5 px-4">
                    <p className="font-medium">Moderate</p>
                    <p className="text-sm text-gray-600">Complex but familiar to Microsoft users</p>
                  </td>
                </tr>
                <tr className="border-b border-orange-100 hover:bg-orange-50 transition duration-200">
                  <td className="py-5 px-4 font-bold text-orange-600">Pipedrive</td>
                  <td className="py-5 px-4">Sales-focused teams</td>
                  <td className="py-5 px-4">
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Visual sales pipeline</li>
                      <li>AI sales assistant</li>
                      <li>Sales forecasting</li>
                      <li>Email integration</li>
                      <li>Mobile app</li>
                    </ul>
                  </td>
                  <td className="py-5 px-4">
                    <p className="font-medium">$15-$99 per user/month</p>
                    <p className="text-sm text-gray-600">Annual billing discount</p>
                  </td>
                  <td className="py-5 px-4">
                    <p className="font-medium">Good</p>
                    <p className="text-sm text-gray-600">300+ integrations</p>
                  </td>
                  <td className="py-5 px-4">
                    <p className="font-medium">24/7 Chat & Email</p>
                    <p className="text-sm text-gray-600">Phone on higher tiers</p>
                  </td>
                  <td className="py-5 px-4">
                    <p className="font-medium">Excellent</p>
                    <p className="text-sm text-gray-600">Intuitive, sales-focused UI</p>
                  </td>
                </tr>
                <tr className="border-b border-orange-100 hover:bg-orange-50 transition duration-200">
                  <td className="py-5 px-4 font-bold text-orange-600">Freshsales</td>
                  <td className="py-5 px-4">Growing businesses</td>
                  <td className="py-5 px-4">
                    <ul className="list-disc pl-4 space-y-1">
                      <li>AI-powered lead scoring</li>
                      <li>Built-in phone & email</li>
                      <li>Visual deal pipeline</li>
                      <li>Activity capture</li>
                      <li>Website tracking</li>
                    </ul>
                  </td>
                  <td className="py-5 px-4">
                    <p className="font-medium">Free - $69 per user/month</p>
                    <p className="text-sm text-gray-600">Annual billing</p>
                  </td>
                  <td className="py-5 px-4">
                    <p className="font-medium">Good</p>
                    <p className="text-sm text-gray-600">Strong with Freshworks suite; 100+ integrations</p>
                  </td>
                  <td className="py-5 px-4">
                    <p className="font-medium">24/5 Support</p>
                    <p className="text-sm text-gray-600">Email, phone, chat</p>
                  </td>
                  <td className="py-5 px-4">
                    <p className="font-medium">User-Friendly</p>
                    <p className="text-sm text-gray-600">Clean, modern interface</p>
                  </td>
                </tr>
                <tr className="hover:bg-orange-50 transition duration-200">
                  <td className="py-5 px-4 font-bold text-orange-600 rounded-bl-lg">Monday Sales CRM</td>
                  <td className="py-5 px-4">Visual workflow-focused teams</td>
                  <td className="py-5 px-4">
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Customizable visual boards</li>
                      <li>Workflow automation</li>
                      <li>Document management</li>
                      <li>Team collaboration tools</li>
                      <li>Timeline & Gantt views</li>
                    </ul>
                  </td>
                  <td className="py-5 px-4">
                    <p className="font-medium">$10-$20+ per user/month</p>
                    <p className="text-sm text-gray-600">Annual billing</p>
                  </td>
                  <td className="py-5 px-4">
                    <p className="font-medium">Very Good</p>
                    <p className="text-sm text-gray-600">200+ integrations</p>
                  </td>
                  <td className="py-5 px-4">
                    <p className="font-medium">24/7 Support</p>
                    <p className="text-sm text-gray-600">Email, chat; phone on higher tiers</p>
                  </td>
                  <td className="py-5 px-4 rounded-br-lg">
                    <p className="font-medium">Excellent</p>
                    <p className="text-sm text-gray-600">Highly visual, customizable</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* Decorative elements */}
          <div className="flex justify-center mt-6">
            <div className="w-16 h-1 bg-orange-300 rounded-full"></div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border-t-4 border-orange-500">
          <h3 className="text-2xl font-bold mb-6 text-center text-black-600">Making the Right CRM Choice</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4 text-orange-500">Implementation Tips</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-orange-100 rounded-full text-orange-600 flex-shrink-0 mr-3 flex items-center justify-center font-bold">1</span>
                  <span><strong>Define Clear Goals:</strong> Establish specific objectives for your CRM implementation before selecting a platform.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-orange-100 rounded-full text-orange-600 flex-shrink-0 mr-3 flex items-center justify-center font-bold">2</span>
                  <span><strong>Data Migration Planning:</strong> Create a comprehensive plan for transferring existing customer data to your new CRM.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-orange-100 rounded-full text-orange-600 flex-shrink-0 mr-3 flex items-center justify-center font-bold">3</span>
                  <span><strong>User Training:</strong> Invest in proper training to ensure your team can effectively utilize all CRM features.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-orange-100 rounded-full text-orange-600 flex-shrink-0 mr-3 flex items-center justify-center font-bold">4</span>
                  <span><strong>Phased Rollout:</strong> Consider implementing your CRM in stages to minimize disruption to daily operations.</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-4 text-orange-500">ROI Considerations</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-orange-100 rounded-full text-orange-600 flex-shrink-0 mr-3 flex items-center justify-center font-bold">1</span>
                  <span><strong>Time Savings:</strong> Measure the reduction in time spent on manual tasks and administrative work.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-orange-100 rounded-full text-orange-600 flex-shrink-0 mr-3 flex items-center justify-center font-bold">2</span>
                  <span><strong>Sales Improvement:</strong> Track increases in conversion rates, deal sizes, and sales cycle efficiency.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-orange-100 rounded-full text-orange-600 flex-shrink-0 mr-3 flex items-center justify-center font-bold">3</span>
                  <span><strong>Customer Retention:</strong> Monitor improvements in customer satisfaction and retention metrics.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-orange-100 rounded-full text-orange-600 flex-shrink-0 mr-3 flex items-center justify-center font-bold">4</span>
                  <span><strong>Total Cost of Ownership:</strong> Consider all costs including subscription, implementation, training, and maintenance.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
      
      </div>
    </div>
  );
};

export default CRMComparison;