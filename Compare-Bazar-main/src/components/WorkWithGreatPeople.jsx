import React from 'react';

const WorkWithGreatPeople = () => {
  return (
    <div className="py-16 px-8 md:px-16 bg-white">
      {/* Mission Statement */}
      <div className="max-w-6xl mx-auto mb-16 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
        <p className="text-center text-gray-600 max-w-4xl mx-auto">
          At 360Connect, it's our mission to focus on your success. If you are a buyer, expect an extraordinary buying experience so you can make a smart purchase. If you supply products & services, count on us to provide positive sales opportunities that will help your business succeed.
        </p>
      </div>

      {/* Three Pillars Section */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Three Pillars of Success</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pillar 1: Quality Connections */}
          <div className="flex flex-col">
            <div className="h-64 mb-4 overflow-hidden">
              <img 
                src="https://www.360connect.com/wp-content/uploads/2019/03/adult-african-agenda-1089556-1024x683.jpg" 
                alt="Handshake representing quality connections" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-center">Quality Connections</h3>
            <div className="space-y-6">
              <div>
                <p className="font-bold text-gray-800">Buyers:</p>
                <p className="text-gray-600">We match you with up to 5 suppliers in your area who can provide quotes for your specific business needs.</p>
              </div>
              <div>
                <p className="font-bold text-gray-800">Suppliers:</p>
                <p className="text-gray-600">In order to deliver the highest close rate possible, we constantly optimize our marketing campaigns, phone verification, and speed.</p>
              </div>
            </div>
          </div>

          {/* Pillar 2: Service */}
          <div className="flex flex-col">
            <div className="h-64 mb-4 overflow-hidden">
              <img 
                src="https://www.360connect.com/wp-content/uploads/2022/02/Business-Growth-edited-scaled.jpg" 
                alt="Business meeting showing data analysis" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-center">Service</h3>
            <div className="space-y-6">
              <div>
                <p className="font-bold text-gray-800">Buyers:</p>
                <p className="text-gray-600">Trained, reliable, and responsive team dedicated to make it simple to get what you need as fast as possible by engaging buyers in minutes.</p>
              </div>
              <div>
                <p className="font-bold text-gray-800">Suppliers:</p>
                <p className="text-gray-600">Expert team dedicated to reliable and responsive service to help you succeed.</p>
              </div>
            </div>
          </div>

          {/* Pillar 3: Results */}
          <div className="flex flex-col">
            <div className="h-64 mb-4 overflow-hidden">
              <img 
                src="https://www.360connect.com/wp-content/uploads/2018/12/Supplier-Meeting-1024x683.jpg" 
                alt="Business planning and analytics" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-center">Results</h3>
            <div className="space-y-6">
              <div>
                <p className="font-bold text-gray-800">Buyers:</p>
                <p className="text-gray-600">One stop shop to receive up to 5 competitive quotes from qualified suppliers for your exact needs.</p>
              </div>
              <div>
                <p className="font-bold text-gray-800">Suppliers:</p>
                <p className="text-gray-600">We help you grow your business by introducing new customers to your brand as a low risk turn-key marketing solution.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkWithGreatPeople;


























