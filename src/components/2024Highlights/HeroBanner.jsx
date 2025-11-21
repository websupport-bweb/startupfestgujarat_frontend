import React from 'react';

const HeroBanner = ({ panelImage }) => {
  return (
    <section className="w-full">
      <div className="relative">
        <img 
          src={panelImage} 
          alt="2024 Highlights Panel" 
          className="w-full h-auto object-cover"
        />
        
        {/* Optional Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
      </div>
    </section>
  );
};

export default HeroBanner;