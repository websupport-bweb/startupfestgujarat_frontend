import React from 'react';

const ContentBanner = ({ image, alt = "Content Banner" }) => {
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
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/30"></div>
    </section>
  );
};

export default ContentBanner;