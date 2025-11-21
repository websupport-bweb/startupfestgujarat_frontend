import React from 'react';

const HeroBanner = ({ image, alt = "Startup Banner" }) => {
  return (
    <section className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
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

export default HeroBanner;