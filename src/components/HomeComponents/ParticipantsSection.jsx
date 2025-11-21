import React from 'react';
import { Link } from "react-router-dom";

const ParticipantsSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-bounce"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-400/20 rounded-full blur-xl animate-bounce delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-400/20 rounded-full blur-xl animate-bounce delay-500"></div>
      
      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 md:space-y-12">
          
          {/* Main Heading */}
          <div className="animate-slide-up">
            <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight max-w-4xl mx-auto">
              Be a Part of{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Gujarat's Largest
              </span>
              {" "}Startup Fest{" "}
              <span className="bg-white bg-clip-text text-transparent block mt-2">
                Setting the Pace for Innovation!
              </span>
            </h3>
          </div>
          
          {/* CTA Button */}
          <div className="animate-bounce-in delay-700">
       <a 
  href="http://register.startupfestgujarat.com/" 
  target="_blank" 
  rel="noopener noreferrer"
  className="no-underline group relative inline-flex items-center justify-center px-8 md:px-12 py-4 md:py-5 text-lg md:text-xl font-bold text-[#003777] rounded-full shadow-2xl bg-white hover:scale-105 transition-all duration-300 overflow-hidden"
>
  <span className="relative z-10 flex items-center space-x-3">
    <span>Register Now</span>
    <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  </span>
</a>

          </div>
          
          {/* Additional Info */}
          <div className="animate-fade-in delay-1000">
            <p className="text-lg md:text-xl text-blue-200 max-w-2xl mx-auto">
              Join thousands of entrepreneurs, investors, and innovators shaping the future of India's startup ecosystem
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParticipantsSection;