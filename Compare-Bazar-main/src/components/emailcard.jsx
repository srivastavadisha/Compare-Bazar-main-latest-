import React from 'react';

const emailcard = ({ system,onCompareQuotesClick }) => {
  return (
    <div className="border-2 border-[#FF8633] rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col transform hover:scale-105 transition-transform duration-300 bg-white relative overflow-hidden group mb-12">
      {/* Card Content */}
      <div className="text-lg font-semibold text-gray-900 mb-2 text-center relative z-10">{system.name}</div>
      <div className="text-sm text-gray-600 text-center mb-4 relative z-10">{system.bestFor}</div>
      
      <div className="h-10 flex items-center justify-center mb-4 bg-gray-50 rounded-lg relative z-10">
        {system.logo.startsWith('/images') ? (
          <img src={system.logo} alt={system.name} className="h-16" />
        ) : (
          <div className="text-3xl font-bold text-gray-700">{system.logo}</div>
        )}
      </div>
      
      {/* Buttons Container */}
      <div className="flex flex-col gap-2 flex-grow relative z-10">
        <a 
          href={system.link} 
          // onClick={createRipple}
          className="block text-center py-2 rounded-lg font-medium bg-gradient-to-r from-[#000E54] to-[#203299] text-white hover:from-[#203299] hover:to-[#000E54] transition-colors duration-200 relative overflow-hidden cursor-pointer"
        >
          Visit Site
        </a>

        <a 
          // href="https://example.com/compare-quotes" 
          onClick={onCompareQuotesClick}
          className="block text-center py-2 rounded-lg font-medium bg-[#FF8633] text-white hover:bg-[#E56F1F] transition-colors duration-200 relative overflow-hidden cursor-pointer"
        >
          Compare Quotes
        </a>
      </div>

      <div className="text-xs text-center text-gray-500 mb-4 relative z-10">
        {system.linkText}
      </div>

      {system.phone && (
        <div className="mb-4 text-center relative z-10">
          <a 
            href={`tel:${system.phone}`} 
            className="text-blue-600 hover:text-blue-700 flex items-center justify-center"
          >
           
            <span className="hover:underline">{system.phone}</span>
          </a>
        </div>
      )}

      <ul className="text-sm text-gray-700 space-y-2 relative z-10">
        <li>• {system.price}</li>
        <li>• {system.videoCapacity}</li>
        <li>• {system.support}</li>
      </ul>
    </div>
  );
};

export default emailcard;