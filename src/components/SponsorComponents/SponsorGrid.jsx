import React, { useEffect, useRef, useState } from 'react';
import SectionTitle from "../SectionTitle";

const SponsorGrid = ({ sponsors }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
    >
        <SectionTitle 
          title="Our Valued Partners" 
          subtitle="Meet the organizations that make Startup Fest Gujarat possible through their generous support and partnership."
          className="mb-16 text-center"
        />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
        {sponsors.map((sponsor, index) => (
          <div 
            key={index}
            className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100 hover:border-[#003777] ${
              isVisible ? 'animate-slide-up' : ''
            }`}
            style={{ animationDelay: `${300 + index * 50}ms` }}
          >
            {/* Logo Container */}
            <div className="relative overflow-hidden rounded-xl transition-colors duration-300">
              <div className="aspect-square flex items-center justify-center">
                <img
                  src={sponsor.url}
                  alt={sponsor.heading}
                  className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                />
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#003777]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            </div>

            {/* Sponsor Name */}
            <div className="mt-4 text-center">
              <h4 className="text-sm font-semibold text-gray-700 group-hover:text-[#003777] transition-colors duration-300">
                {sponsor.heading}
              </h4>
            </div>
            
            {/* Hover Border Effect */}
          </div>
        ))}
      </div>


    </section>
  );
};

export default SponsorGrid;