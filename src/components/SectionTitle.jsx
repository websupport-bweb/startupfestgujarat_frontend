import React from 'react';

const SectionTitle = ({ title, showDivider = true, className = "" }) => {
  return (
    <div className={` mb-12 md:mb-16 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-[#003777] mb-6 animate-fade-in">
        {title}
      </h2>
      
      {showDivider && (
        <div className="flex items-center justify-center space-x-4 animate-slide-up delay-300">
          <span className="w-16 md:w-24 h-1 bg-gradient-to-r from-transparent to-[#003777]"></span>
          <span className="p-2 bg-white rounded-full shadow-lg">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#003777" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 22 12 12 22 2 12 12 2"></polygon>
            </svg>
          </span>
          <span className="w-16 md:w-24 h-1 bg-gradient-to-l from-transparent to-[#003777]"></span>
        </div>
      )}
    </div>
  );
};

export default SectionTitle;