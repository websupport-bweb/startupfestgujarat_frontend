import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";
import { FaRegCalendarAlt, FaTimes } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

const Sidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [highlightsOpen, setHighlightsOpen] = useState(false);
  const [high2024Open, setHigh2024Open] = useState(false);
  const [high2023Open, setHigh2023Open] = useState(false);
  const [whyOpen, setWhyOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  // Function to handle navigation and close sidebar
  const handleNavigation = (path) => {
    navigate(path);
    onClose();
    // Reset all states
    setHighlightsOpen(false);
    setHigh2024Open(false);
    setHigh2023Open(false);
    setWhyOpen(false);
    setInfoOpen(false);
    setRegisterOpen(false);
  };

  // Handle sidebar close
  const handleClose = () => {
    onClose();
    // Reset all states when closing
    setHighlightsOpen(false);
    setHigh2024Open(false);
    setHigh2023Open(false);
    setWhyOpen(false);
    setInfoOpen(false);
    setRegisterOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="lg:hidden fixed inset-0 z-[1098]">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fadeIn" 
        onClick={handleClose}
      />
      
      {/* Sidebar Panel */}
      <div className="absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl animate-slideInRight overflow-hidden flex flex-col">
        
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-[#003777] to-blue-700 shrink-0">
          <img 
            src="/logo2.svg" 
            alt="Startup Fest Gujarat" 
            className="h-10 w-auto"
          />
          <button 
            onClick={handleClose}
            className="text-white text-2xl hover:text-gray-200 transition-colors duration-200 p-1 hover:bg-white/10 rounded-full"
          >
            <FaTimes />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-6 space-y-4">
            
            {/* 2025 Speakers */}
            <button 
              onClick={() => handleNavigation('/2025-Speakers')}
              className="w-full text-left text-gray-800 font-medium hover:text-[#003777] hover:bg-blue-50 px-4 py-3 rounded-lg transition-all duration-200 bg-transparent border-none cursor-pointer"
            >
              2025 Speakers
            </button>
            
            {/* Highlights Dropdown */}
            <div className="space-y-2">
              <button 
                className="w-full text-left text-gray-800 font-medium hover:text-[#003777] hover:bg-blue-50 px-4 py-3 rounded-lg transition-all duration-200 flex items-center justify-between bg-transparent border-none cursor-pointer"
                onClick={() => setHighlightsOpen(!highlightsOpen)}
              >
                <span>Highlights</span>
                <FiChevronDown className={`transition-transform duration-300 ${highlightsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {highlightsOpen && (
                <div className="ml-6 space-y-1 animate-slideDown">
                  {/* 2024 Highlights */}
                  <button 
                    className="w-full text-left text-gray-700 hover:text-[#003777] hover:bg-blue-50 px-4 py-2 rounded-lg transition-all duration-200 flex items-center justify-between bg-transparent border-none cursor-pointer"
                    onClick={() => setHigh2024Open(!high2024Open)}
                  >
                    2024 Highlights
                    <FiChevronDown className={`transition-transform duration-300 ${high2024Open ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {high2024Open && (
                    <div className="ml-4 space-y-1 animate-slideDown">
                      <button 
                        onClick={() => handleNavigation('/speaker-2024')}
                        className="w-full text-left text-gray-600 hover:text-[#003777] hover:bg-blue-50 px-3 py-2 rounded-md transition-all duration-200 bg-transparent border-none cursor-pointer"
                      >
                        2024 Moderator & Mentors
                      </button>
                      <button 
                        onClick={() => handleNavigation('/sharktank-2024')}
                        className="w-full text-left text-gray-600 hover:text-[#003777] hover:bg-blue-50 px-3 py-2 rounded-md transition-all duration-200 bg-transparent border-none cursor-pointer"
                      >
                        Meet our Sharks
                      </button>
                      <button 
                        onClick={() => handleNavigation('/pre-series')}
                        className="w-full text-left text-gray-600 hover:text-[#003777] hover:bg-blue-50 px-3 py-2 rounded-md transition-all duration-200 bg-transparent border-none cursor-pointer"
                      >
                        Pre-Series Pitching
                      </button>
                      <button 
                        onClick={() => handleNavigation('/shark-teen')}
                        className="w-full text-left text-gray-600 hover:text-[#003777] hover:bg-blue-50 px-3 py-2 rounded-md transition-all duration-200 bg-transparent border-none cursor-pointer"
                      >
                        Shark Teens 2024
                      </button>
                    </div>
                  )}
                  
                  {/* 2023 Highlights */}
                  <button 
                    className="w-full text-left text-gray-700 hover:text-[#003777] hover:bg-blue-50 px-4 py-2 rounded-lg transition-all duration-200 flex items-center justify-between bg-transparent border-none cursor-pointer"
                    onClick={() => setHigh2023Open(!high2023Open)}
                  >
                    2023 Highlights
                    <FiChevronDown className={`transition-transform duration-300 ${high2023Open ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {high2023Open && (
                    <div className="ml-4 space-y-1 animate-slideDown">
                      <button 
                        onClick={() => handleNavigation('/highlights')}
                        className="w-full text-left text-gray-600 hover:text-[#003777] hover:bg-blue-50 px-3 py-2 rounded-md transition-all duration-200 bg-transparent border-none cursor-pointer"
                      >
                        2023 Highlights
                      </button>
                      <button 
                        onClick={() => handleNavigation('/speakers')}
                        className="w-full text-left text-gray-600 hover:text-[#003777] hover:bg-blue-50 px-3 py-2 rounded-md transition-all duration-200 bg-transparent border-none cursor-pointer"
                      >
                        Speakers & Mentors
                      </button>
                      <button 
                        onClick={() => handleNavigation('/sharkTank')}
                        className="w-full text-left text-gray-600 hover:text-[#003777] hover:bg-blue-50 px-3 py-2 rounded-md transition-all duration-200 bg-transparent border-none cursor-pointer"
                      >
                        Shark Tank Startups
                      </button>
                      <button 
                        onClick={() => handleNavigation('/awards')}
                        className="w-full text-left text-gray-600 hover:text-[#003777] hover:bg-blue-50 px-3 py-2 rounded-md transition-all duration-200 bg-transparent border-none cursor-pointer"
                      >
                        Award Night
                      </button>
                      <button 
                        onClick={() => handleNavigation('/start-up-showcase')}
                        className="w-full text-left text-gray-600 hover:text-[#003777] hover:bg-blue-50 px-3 py-2 rounded-md transition-all duration-200 bg-transparent border-none cursor-pointer"
                      >
                        Startup Showcase
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Why Attend Dropdown */}
            <div className="space-y-2">
              <button 
                className="w-full text-left text-gray-800 font-medium hover:text-[#003777] hover:bg-blue-50 px-4 py-3 rounded-lg transition-all duration-200 flex items-center justify-between bg-transparent border-none cursor-pointer"
                onClick={() => setWhyOpen(!whyOpen)}
              >
                <span>Why Attend</span>
                <FiChevronDown className={`transition-transform duration-300 ${whyOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {whyOpen && (
                <div className="ml-6 space-y-1 animate-slideDown">
                  <button 
                    onClick={() => handleNavigation('/start-up')}
                    className="w-full text-left text-gray-600 hover:text-[#003777] hover:bg-blue-50 px-4 py-2 rounded-lg transition-all duration-200 bg-transparent border-none cursor-pointer"
                  >
                    For Startups
                  </button>
                  <button 
                    onClick={() => handleNavigation('/investor-accelator')}
                    className="w-full text-left text-gray-600 hover:text-[#003777] hover:bg-blue-50 px-4 py-2 rounded-lg transition-all duration-200 bg-transparent border-none cursor-pointer"
                  >
                    For Investors
                  </button>
                  <button 
                    onClick={() => handleNavigation('/sponser')}
                    className="w-full text-left text-gray-600 hover:text-[#003777] hover:bg-blue-50 px-4 py-2 rounded-lg transition-all duration-200 bg-transparent border-none cursor-pointer"
                  >
                    For Sponsors
                  </button>
                </div>
              )}
            </div>

            {/* Info Dropdown */}
            <div className="space-y-2">
              <button 
                className="w-full text-left text-gray-800 font-medium hover:text-[#003777] hover:bg-blue-50 px-4 py-3 rounded-lg transition-all duration-200 flex items-center justify-between bg-transparent border-none cursor-pointer"
                onClick={() => setInfoOpen(!infoOpen)}
              >
                <span>Info</span>
                <FiChevronDown className={`transition-transform duration-300 ${infoOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {infoOpen && (
                <div className="ml-6 space-y-1 animate-slideDown">
                  <button 
                    onClick={() => handleNavigation('/about')}
                    className="w-full text-left text-gray-600 hover:text-[#003777] hover:bg-blue-50 px-4 py-2 rounded-lg transition-all duration-200 bg-transparent border-none cursor-pointer"
                  >
                    About Event
                  </button>
                  <button 
                    onClick={() => handleNavigation('/activities')}
                    className="w-full text-left text-gray-600 hover:text-[#003777] hover:bg-blue-50 px-4 py-2 rounded-lg transition-all duration-200 bg-transparent border-none cursor-pointer"
                  >
                    Activities
                  </button>
                  <button 
                    onClick={() => handleNavigation('/faq')}
                    className="w-full text-left text-gray-600 hover:text-[#003777] hover:bg-blue-50 px-4 py-2 rounded-lg transition-all duration-200 bg-transparent border-none cursor-pointer"
                  >
                    FAQ
                  </button>
                  <button 
                    onClick={() => handleNavigation('/event-flow')}
                    className="w-full text-left text-gray-600 hover:text-[#003777] hover:bg-blue-50 px-4 py-2 rounded-lg transition-all duration-200 bg-transparent border-none cursor-pointer"
                  >
                    Event Flow
                  </button>
                </div>
              )}
            </div>

            {/* Contact */}
            <button 
              onClick={() => handleNavigation('/contact')}
              className="w-full text-left text-gray-800 font-medium hover:text-[#003777] hover:bg-blue-50 px-4 py-3 rounded-lg transition-all duration-200 bg-transparent border-none cursor-pointer"
            >
              Contact
            </button>

            {/* Summary */}
            <button 
              onClick={() => handleNavigation('/summary')}
              className="w-full text-left text-gray-800 font-medium hover:text-[#003777] hover:bg-blue-50 px-4 py-3 rounded-lg transition-all duration-200 bg-transparent border-none cursor-pointer"
            >
              Summary
            </button>

            {/* Register Section */}
            <div className="space-y-2 pt-4 border-t border-gray-200">
              <button 
                className="w-full text-left bg-gradient-to-r from-[#003777] to-blue-700 hover:from-[#002a5c] hover:to-blue-800 text-white font-medium px-4 py-3 rounded-lg transition-all duration-200 flex items-center justify-between shadow-lg border-none cursor-pointer"
                onClick={() => setRegisterOpen(!registerOpen)}
              >
                <span>Register</span>
                <FiChevronDown className={`transition-transform duration-300 ${registerOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {registerOpen && (
                <div className="ml-6 space-y-1 animate-slideDown">
                  <button 
                    onClick={() => handleNavigation('/register')}
                    className="w-full text-left text-gray-600 hover:text-[#003777] hover:bg-blue-50 px-4 py-2 rounded-lg transition-all duration-200 bg-transparent border-none cursor-pointer"
                  >
                    Exhibitor
                  </button>
                  <button 
                    onClick={() => handleNavigation('/register')}
                    className="w-full text-left text-gray-600 hover:text-[#003777] hover:bg-blue-50 px-4 py-2 rounded-lg transition-all duration-200 bg-transparent border-none cursor-pointer"
                  >
                    Visitor
                  </button>
                  <button 
                    onClick={() => handleNavigation('/register')}
                    className="w-full text-left text-gray-600 hover:text-[#003777] hover:bg-blue-50 px-4 py-2 rounded-lg transition-all duration-200 bg-transparent border-none cursor-pointer"
                  >
                    Investor
                  </button>
                  <button 
                    onClick={() => handleNavigation('/register')}
                    className="w-full text-left text-gray-600 hover:text-[#003777] hover:bg-blue-50 px-4 py-2 rounded-lg transition-all duration-200 bg-transparent border-none cursor-pointer"
                  >
                    Sponsors
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* Event Info Footer - Fixed at bottom */}
        <div className="p-6 bg-gray-50 border-t border-gray-200 shrink-0">
          <div className="space-y-3 text-center">
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
              <FaRegCalendarAlt className="text-[#003777]" />
              December 13–14, 2025
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
              <MdLocationPin className="text-[#003777]" />
              Gujarat University Atal Kalam Building
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;