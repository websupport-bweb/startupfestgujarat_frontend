import React from 'react';
import SectionTitle from './SectionTitle';

const SponsorSection = ({ title, sponsors, backgroundColor = "bg-gradient-to-br from-white via-gray-50 to-blue-50" }) => {
  return (
    <section className={`min-h-[80vh] flex items-center justify-center ${backgroundColor} py-16 md:py-24`}>      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <SectionTitle title={title} className='text-center' />

        {/* Sponsor Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 mt-12">
          {sponsors.map((item, index) => (
            <div
              key={index}
              className="group animate-slide-up"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="relative w-full bg-white rounded-2xl shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-[#003777] transition-all duration-500 flex items-center justify-center p-6 md:p-8 aspect-square overflow-hidden group-hover:scale-[1.02] active:scale-[0.98]">
                {/* Subtle Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#003777]/0 to-blue-500/0 group-hover:from-[#003777]/5 group-hover:to-blue-500/5 transition-all duration-500 rounded-2xl"></div>
                
                {/* Logo Image */}
                <img
                  src={item.url}
                  alt={`Sponsor ${index}`}
                  className="relative z-10 w-full h-full object-contain grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                />
                
                {/* Shine Effect on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:left-full transition-all duration-1000"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Decorative Element */}
        <div className="flex items-center justify-center gap-2 mt-16">
          <div className="w-20 h-1 bg-gradient-to-r from-transparent to-[#003777] rounded-full"></div>
          <div className="w-3 h-3 rounded-full bg-[#003777] animate-pulse"></div>
          <div className="w-40 h-1 bg-gradient-to-r from-[#003777] to-blue-500 rounded-full"></div>
          <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" style={{ animationDelay: '300ms' }}></div>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default SponsorSection;