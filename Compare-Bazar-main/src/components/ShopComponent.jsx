import React from 'react';

const ShopComponent = () => {
  const handleGetQuotes = () => {
    // Handle the action when the button is clicked
    alert('Redirecting to get free quotes...');
  };

  return (
    <div className='bg-gradient-to-r from-[#000e54] to-[#203299]' style={{ textAlign: 'center', padding: '20px' }}>
      <h1 className='text-xl font-bold text-white'>Ready to Shop?</h1>
      <p className='mb-4 font-bold text-white'>Receive up to 5 FREE price quotes from pre-qualified suppliers.</p>
      <button
        onClick={handleGetQuotes}
        style={{
          padding: '8px 18px', // Reduced padding
          fontSize: '14px', // Reduced font size
          cursor: 'pointer',
          // background: 'linear-gradient(45deg, #4CAF50, #81C784)',
          background: '#ff8633',
          color: '#FFF',
          border: 'none',
          borderRadius: '30px',
          boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
          transition: 'background 0.3s ease',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.background = 'white';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.background= '#ff8633';
        }}
      >
        GET FREE QUOTES
      </button>
    </div>
  );
};

export default ShopComponent;