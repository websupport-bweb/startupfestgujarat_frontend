import React from 'react';
import mainBanner from "../../assets/img/banner-1.png";

const HeroBanner = () => {
  return (
    <section className=" md:min-h-screen flex items-center justify-center relative overflow-hidden" id="target-section">
      <div className="w-full h-full relative">
        <img 
          src={mainBanner} 
          className="w-full h-screen object-cover animate-fade-in" 
          alt="Startup Fest Banner" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 animate-fade-in delay-300"></div>
      </div>
    </section>
  );
};

export default HeroBanner;