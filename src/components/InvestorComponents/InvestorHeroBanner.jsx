import React from 'react';

const InvestorHeroBanner = ({ image, alt = "Investor Banner" }) => {
  return (
    <section className="relative w-full h-[50vh] md:h-[60vh] lg:h-[100vh] overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt={alt}
          className="w-full h-full object-cover object-center"
        />
      </div>
    </section>
  );
};

export default InvestorHeroBanner;