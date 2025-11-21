import React from 'react';

const InvestorContentBanner = ({ image, alt = "Investor Content Banner" }) => {
  return (
    <section className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt={alt}
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      {/* Subtle Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#003777]/20 via-transparent to-[#f8a405]/20"></div>
      
      {/* Optional decorative elements */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-20 h-20 border-4 border-white/30 rounded-full animate-pulse"></div>
      </div>
    </section>
  );
};

export default InvestorContentBanner;