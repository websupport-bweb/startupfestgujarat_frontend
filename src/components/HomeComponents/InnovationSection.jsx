import React from 'react';
import agry from "../../assets/img/agry.png";
import food from "../../assets/img/food.png";
import innov from "../../assets/img/innov.png";
import fin from "../../assets/img/fin.png";
import mobile from "../../assets/img/mobile.png";
import edu from "../../assets/img/edu.png";

const InnovationSection = () => {
  const innovations = [
    { img: agry, title: "Agri-Tech", delay: "0ms" },
    { img: food, title: "Food-Tech", delay: "150ms" },
    { img: innov, title: "Rural Innovation", delay: "300ms" },
    { img: fin, title: "Fin-Tech", delay: "450ms" },
    { img: mobile, title: "Rural Healthcare", delay: "600ms" },
    { img: edu, title: "Edu-Tech", delay: "750ms" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-gray-50 py-16 md:py-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Title Content */}
          <div className="text-left lg:text-left animate-slide-in-left">
            <p className="text-xl md:text-2xl font-bold text-[#003777] mb-4 uppercase tracking-wider animate-fade-in">
              SFG 2025
            </p>
            <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black leading-tight animate-slide-up delay-300">
              Innovation at Bottom of the Pyramid in{" "}
              <span className="bg-gradient-to-r from-[#003777] to-blue-800 bg-clip-text text-transparent block mt-2">
                Rural Innovations and Entrepreneurship
              </span>
            </h3>
          </div>

          {/* Right: Innovation Icons Grid */}
          <div className="animate-slide-in-right">
            <div className="grid grid-cols-3 gap-6 md:gap-8">
              {innovations.map((item, index) => (
                <div 
                  key={index}
                  className="group flex flex-col items-center p-3 md:p-3 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 animate-bounce-in border-2 border-transparent hover:border-[#003777]/20"
                  style={{ animationDelay: item.delay }}
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mb-4 overflow-hidden rounded-xl bg-gradient-to-br from-[#003777]/10 to-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src={item.img} 
                      alt={item.title}
                      className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 object-contain filter group-hover:brightness-110 transition-all duration-300"
                    />
                  </div>
                  <p className="text-xs md:text-sm lg:text-base font-bold text-[#003777] text-center leading-tight group-hover:scale-105 transition-transform duration-300">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Many More Text */}
            <div className="text-center mt-8 animate-fade-in delay-1000">
              <p className="text-lg md:text-xl font-bold text-[#003777] relative inline-block">
                Many More...
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#003777] to-blue-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;