// components/FAQ.js
import React, { useState } from "react";

const FAQ = ({ faqs }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="faq-section py-12 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">FAQs</h2>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item border-b border-gray-200 pb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left flex justify-between items-center focus:outline-none"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {faq.question}
              </h3>
              <span className="text-gray-500 text-2xl">
                {expandedIndex === index ? '−' : '+'}
              </span>
            </button>
            
            {expandedIndex === index && (
              <div className="mt-3 text-gray-600 transition-all duration-300 ease-in-out">
                {Array.isArray(faq.answer) ? (
                  <ul className="list-disc pl-5 space-y-2">
                    {faq.answer.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{faq.answer}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;