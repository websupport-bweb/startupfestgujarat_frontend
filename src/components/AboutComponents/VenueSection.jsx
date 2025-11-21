import React, { useEffect, useRef, useState } from 'react';
import SectionTitle from "../SectionTitle";

const VenueSection = ({ venueImage, venueText }) => {
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
          title="2025 Venue : The GU Atal Kalam Building" 
          subtitle="A premier center for research, innovation, and entrepreneurship at Gujarat University."
          className="mb-16 text-center"
        />
      </div>

      {/* Main Venue Card */}
      <div className={`bg-white rounded-3xl p-8 md:p-12 shadow-xl border-t-4 border-[#003777] mb-12 ${
        isVisible ? 'animate-slide-up' : ''
      }`} style={{ animationDelay: '300ms' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-[#003777] mb-6">
              Centre for Extension, Research & Innovation (CERI)
            </h3>
            <div 
              className="text-gray-700 leading-relaxed space-y-4"
              dangerouslySetInnerHTML={{ __html: venueText }}
            />
            
            {/* Features List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {[
                "Research & Innovation Hub",
                "Industry Partnerships",
                "Product Prototyping",
                "Academic Collaboration",
                "Modern Infrastructure",
                "Multifunctional Spaces"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-[#f8a405] rounded-full"></div>
                  <span className="text-sm font-medium text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src={venueImage}
                alt="GU Atal Kalam Building"
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#f8a405] rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-[#003777] rounded-full opacity-15"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;