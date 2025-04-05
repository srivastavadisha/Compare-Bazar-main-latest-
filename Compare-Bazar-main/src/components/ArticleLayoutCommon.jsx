import React from 'react';

const Article = ({ title, items, buttonText, buttonColor }) => {
  return (
    <div className="w-full bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">{title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {items.map((article) => (
            <div key={article.id} className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col h-full transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="h-48 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-800 mb-2 leading-tight text-left">
                  {article.title}
                </h3>
                
                <div className="text-sm text-gray-500 mb-3 text-left">
                  By {article.author} | {article.date}
                </div>
                
                <p className="text-gray-600 mb-4 flex-grow text-left">
                  {article.excerpt}
                </p>
                
                <a 
                  href={article.link}
                  className={`inline-block ${buttonColor} text-white font-medium py-2 px-4 rounded text-center transition-colors duration-300 self-start`}
                >
                  {buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Article;