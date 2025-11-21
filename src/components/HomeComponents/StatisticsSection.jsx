import React from 'react';
import { FiUsers, FiTrendingUp, FiBriefcase, FiUser } from "react-icons/fi"; 
import SectionTitle from '../SectionTitle';

const StatisticsSection = () => {
  const statsData = [
    {
      value: "1000+",
      label: "Participants",
      icon: <FiUsers size={40} className="text-[#003777]" />,
      gradient: "from-[#003777] to-blue-600"
    },
    {
      value: "200+",
      label: "Startups",
      icon: <FiTrendingUp size={40} className="text-[#003777]" />,
      gradient: "from-[#003777] to-blue-600"
    },
    {
      value: "135+",
      label: "Investors",
      icon: <FiBriefcase size={40} className="text-[#003777]" />,
      gradient: "from-[#003777] to-blue-600"
    },
    {
      value: "15000+",
      label: "Visitors",
      icon: <FiUser size={40} className="text-[#003777]" />,
      gradient: "from-[#003777] to-blue-600"
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionTitle 
          title="Empowering India's Startup Ecosystem" 
          className="mb-12 md:mb-16 text-center" 
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Stats Cards */}
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {statsData.map((card, index) => (
                <div 
                  key={index} 
                  className={`bg-white rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 animate-slide-up border-l-4 border-gradient-to-b ${card.gradient}`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 shadow-inner">
                      {card.icon}
                    </div>
                    <div className="space-y-2">
                      <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                        {card.value}
                      </p>
                      <h4 className="text-base md:text-lg font-semibold text-gray-600 uppercase tracking-wide">
                        {card.label}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: SFG Text */}
          <div className="order-1 lg:order-2 text-center lg:text-left animate-slide-in-right">
            <div className="space-y-6">
              <p className="text-xl md:text-2xl font-bold text-[#003777] uppercase tracking-wider animate-fade-in delay-300">
                SFG 2025
              </p>
              <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black leading-tight animate-slide-up delay-500">
                India Startup Revolution is Here and now! At Ahmedabad{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block mt-2">
                  December 13 & 14, 2025
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;