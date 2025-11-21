import React, { useEffect, useRef, useState } from 'react';
import SectionTitle from "../components/SectionTitle";
import urban from "../assets/img/urban.png";
import jainam from "../assets/img/jainam.png";
import bull from "../assets/img/bull.png";
import dharmil from "../assets/img/dharmil.png";
import harsh from "../assets/img/harsh.png";
import pabi from "../assets/img/pabi.png";
import rabari from "../assets/img/rabari.png";

const STFS = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // ⭐ Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ⭐ Intersection Observer for animations
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

  // ===================== DATA =====================
  const featuredStartups = [
    { image: urban, name: "Urban Naps", isLogo: true },
    { image: bull, name: "BullSpree", isLogo: true },
    { image: pabi, name: "Pabiben.com", isLogo: true },
  ];

  const urbanNapsTeam = [
    { image: urban, name: "Urban Naps", isLogo: true },
    { image: jainam, name: "Mr Jainam Mehta", role: "Founder" },
  ];

  const bullSpreeTeam = [
    { image: bull, name: "BullSpree", isLogo: true },
    { image: dharmil, name: "Dharmil Bavishi", role: "Co-Founder" },
    { image: harsh, name: "Harsh Dhanawat", role: "Co-Founder" },
  ];

  const pabibenTeam = [
    { image: pabi, name: "Pabiben.com", isLogo: true },
    { image: rabari, name: "Ms Pabiben Rabari", role: "Founder" },
  ];

  const renderCards = (data, startDelay = 0) => {
    return data.map((item, index) => (
      <div 
        key={index}
        className={`group bg-white rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 border-t-4 border-[#003777] ${
          isVisible ? 'animate-slide-up' : ''
        }`}
        style={{ animationDelay: `${startDelay + index * 150}ms` }}
      >
        {/* Image Container */}
        <div className="relative mb-6 overflow-hidden rounded-2xl">
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className={`w-full h-full transition-transform duration-700 group-hover:scale-110 ${
                item.isLogo 
                  ? 'object-contain bg-white p-4' 
                  : 'object-cover object-center'
              }`}
            />
          </div>
          
          {/* Overlay Effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#003777]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Content */}
        <div className="text-center space-y-3">
          <h4 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-[#003777] transition-colors duration-300">
            {item.name}
          </h4>
          {item.role && (
            <p className="text-sm md:text-base text-gray-600 leading-relaxed font-medium">
              {item.role}
            </p>
          )}
        </div>
        
        {/* Hover Border Effect */}
        <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#003777] transition-colors duration-300"></div>
      </div>
    ));
  };

  return (
    <div className="bg-gradient-to-br from-white via-gray-50 to-blue-50 min-h-screen py-14">
      {/* Hero Section */}
      <section 
        ref={sectionRef}
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20"
      >
       
          <SectionTitle 
            title="Shark Tank Featured Startup Journey" 
            subtitle="Discover the incredible journey of startups that made it to Shark Tank and their inspiring entrepreneurial stories."
            className="mb-16 text-center"
          />

        {/* Featured Startup Logos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-20">
          {renderCards(featuredStartups, 300)}
        </div>
      </section>

      {/* Urban Naps Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <SectionTitle 
            title="Urban Naps" 
            subtitle="Revolutionizing sleep comfort with innovative products and solutions."
            className="mb-16 text-center"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {renderCards(urbanNapsTeam, 800)}
        </div>
      </section>

      {/* BullSpree Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <SectionTitle 
            title="BullSpree" 
            subtitle="Innovative fintech solutions empowering the next generation of investors."
            className="mb-16 text-center"
          />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {renderCards(bullSpreeTeam, 1200)}
        </div>
      </section>

      {/* Pabiben.com Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Pabiben.com" 
            subtitle="Empowering rural communities through digital innovation and e-commerce solutions."
            className="mb-16 text-center"
          />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {renderCards(pabibenTeam, 1600)}
        </div>
      </section>
    </div>
  );
}

export default STFS
