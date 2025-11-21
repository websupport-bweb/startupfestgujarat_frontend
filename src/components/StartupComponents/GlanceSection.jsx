import React, { useEffect, useRef, useState } from 'react';
import SectionTitle from "../SectionTitle";

const GlanceSection = ({ features }) => {
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
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <SectionTitle 
          title="Startup Fest At A Glance" 
          subtitle="Experience world-class content, networking opportunities, and investment possibilities all in one place."
          className="mb-16 text-center"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
        {features.map((feature, index) => (
          <div 
            key={index}
            className={`group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 border-t-4 border-[#003777] text-center ${
              isVisible ? 'animate-slide-up' : ''
            }`}
            style={{ animationDelay: `${300 + index * 150}ms` }}
          >
            {/* Icon Container */}
            <div className="relative mb-6 flex justify-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#003777] to-[#0056b3] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-10 h-10 object-contain filter brightness-0 invert"
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-3">
              <h4 className="text-lg font-bold text-gray-900 group-hover:text-[#003777] transition-colors duration-300">
                {feature.title}
              </h4>
            </div>
            
            {/* Hover Border Effect */}
            <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#003777] transition-colors duration-300"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GlanceSection;