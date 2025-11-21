import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="flex flex-col items-center space-y-4">
        {/* Spinner */}
        <div className="relative w-16 h-16">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-gray-200 rounded-full"></div>
          <div className="absolute top-0 left-0 w-full h-full border-4 border-[#003777] rounded-full border-t-transparent animate-spin"></div>
        </div>
        
        {/* Loading Text */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-[#003777] mb-2">Loading...</h3>
          <p className="text-sm text-gray-600">Please wait while we prepare the content</p>
        </div>
        
        {/* Progress Dots */}
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-[#003777] rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-[#003777] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-[#003777] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;