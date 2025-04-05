

import React from 'react';

const GPSFleetComponent = () => {
  const bannerStyles = {
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#0277bd',
      background: 'linear-gradient(270deg, #000e54 0%, #203299 100%)',
      borderRadius: '10px',
      padding: '32px',
      color: 'white',
      maxWidth: '800px',
      margin: '0 auto',
      overflow: 'hidden',
      position: 'relative',
    },
    content: {
      flex: '1',
      maxWidth: '60%',
      zIndex: '1',
    },
    heading: {
      fontSize: '32px',
      fontWeight: 'bold',
      marginBottom: '24px',
      lineHeight: '1.2',
    },
    button: {
      backgroundColor: '#ff8633',
      color: 'white',
      border: 'none',
      borderRadius: '50px',
      padding: '10px 20px',
      fontSize: '14px',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    image: {
      flex: '1',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      position: 'relative',
    },
    van: {
      maxWidth: '300px',
      height: 'auto',
    },
    locationIcon: {
      position: 'absolute',
      top: '20px',
      right: '130px',
      width: '50px',
      height: '50px',
      backgroundColor: 'white',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    signalWaves: {
      position: 'absolute',
      top: '10px',
      right: '120px',
      width: '70px',
      height: '70px',
    }
  };

  return (
    <div style={bannerStyles.container}>
      <div style={bannerStyles.content}>
        <h1 style={bannerStyles.heading}>
          Get The Right GPS Fleet Management Software For Your Business
        </h1>
        <button style={bannerStyles.button}>
          Get Free Quotes
        </button>
      </div>
      
      <div style={bannerStyles.image}>
        <div style={bannerStyles.locationIcon}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#0277bd">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
        </div>
        <div style={bannerStyles.signalWaves}>
          <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
            <circle cx="35" cy="35" r="10" fill="none" stroke="#66bb6a" strokeWidth="2" opacity="0.7" />
            <circle cx="35" cy="35" r="20" fill="none" stroke="#66bb6a" strokeWidth="2" opacity="0.5" />
            <circle cx="35" cy="35" r="30" fill="none" stroke="#66bb6a" strokeWidth="2" opacity="0.3" />
          </svg>
        </div>
        <img 
          src="https://placehold.co/300x200" 
          alt="Delivery van with GPS tracking" 
          style={bannerStyles.van}
        />
      </div>
    </div>
  );
};

export default GPSFleetComponent;