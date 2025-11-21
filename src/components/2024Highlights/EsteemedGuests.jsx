import React, { useEffect, useRef, useState } from 'react';
import SectionTitle from '../SectionTitle';

const EsteemedGuests = ({ guests }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20"
    >
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <SectionTitle title="Esteemed Guests" className="mb-12 md:mb-16 text-center" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {guests.map((guest, index) => (
          <div 
            key={index}
            className={`group bg-white rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 border-t-4 border-[#003777] ${
              isVisible ? 'animate-slide-up' : ''
            }`}
            style={{ animationDelay: `${300 + index * 150}ms` }}
          >
            
            {/* Image Container */}
            <div className="relative mb-6 overflow-hidden rounded-2xl">
              <div className="aspect-square overflow-hidden">
                <img
                  src={guest.image}
                  alt={guest.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#003777]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Content */}
            <div className="text-center space-y-3">
              <h4 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-[#003777] transition-colors duration-300">
                {guest.name}
              </h4>
              {guest.subtitle && (
                <p className="text-sm md:text-base text-gray-600 leading-relaxed font-medium">
                  {guest.subtitle}
                </p>
              )}
            </div>
            
            {/* Hover Border Effect */}
            <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#003777] transition-colors duration-300"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EsteemedGuests;