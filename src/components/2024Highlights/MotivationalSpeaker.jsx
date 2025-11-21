import React, { useEffect, useRef, useState } from 'react';
import SectionTitle from '../SectionTitle';

const MotivationalSpeaker = ({ speaker }) => {
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
        <SectionTitle title="Motivational Speaker" className="mb-12 md:mb-16 text-center" />
      </div>

      <div className="flex justify-center">
        <div className={`max-w-md transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 border-t-4 border-[#003777]">
            
            {/* Image Container */}
            <div className="relative mb-6 overflow-hidden rounded-2xl">
              <div className="aspect-square overflow-hidden">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#003777]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Content */}
            <div className="text-center space-y-3">
              <h4 className="text-xl font-bold text-gray-900 group-hover:text-[#003777] transition-colors duration-300">
                {speaker.name}
              </h4>
              {speaker.subtitle && (
                <p className="text-base text-gray-600 leading-relaxed font-medium">
                  {speaker.subtitle}
                </p>
              )}
            </div>
            
            {/* Hover Border Effect */}
            <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#003777] transition-colors duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MotivationalSpeaker;