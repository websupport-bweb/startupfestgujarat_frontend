import React from 'react';

const InvestorQuoteSection = ({ image, quote, author }) => {
  return (
    <section className="relative w-full min-h-[70vh] overflow-hidden bg-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt="Quote Background"
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75"></div>
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[70vh] px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20">
            <blockquote className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-8 leading-relaxed italic">
              "{quote}"
            </blockquote>
            <cite className="text-lg md:text-xl text-[#f8a405] font-semibold">
              {author}
            </cite>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border-l-4 border-t-4 border-[#f8a405] opacity-40"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 border-r-4 border-b-4 border-[#f8a405] opacity-40"></div>
      
      {/* Additional decorative dots */}
      <div className="absolute top-1/4 right-20 w-2 h-2 bg-[#f8a405] rounded-full opacity-60"></div>
      <div className="absolute bottom-1/4 left-20 w-3 h-3 bg-[#003777] rounded-full opacity-50"></div>
    </section>
  );
};

export default InvestorQuoteSection;