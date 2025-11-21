import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";
import { FaRegCalendarAlt, FaBars } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

const Navbar = ({ onMobileMenuToggle }) => {
  const navigate = useNavigate();
  const [highlightsOpen, setHighlightsOpen] = useState(false);
  const [high2024Open, setHigh2024Open] = useState(false);
  const [high2023Open, setHigh2023Open] = useState(false);
  const [whyOpen, setWhyOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  // Function to handle navigation
  const handleNavigation = (path) => {
    navigate(path);
    // Close all dropdowns
    setHighlightsOpen(false);
    setHigh2024Open(false);
    setHigh2023Open(false);
    setWhyOpen(false);
    setInfoOpen(false);
    setRegisterOpen(false);
  };

  // Close all dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setHighlightsOpen(false);
        setHigh2024Open(false);
        setHigh2023Open(false);
        setWhyOpen(false);
        setInfoOpen(false);
        setRegisterOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="fixed hidden md:block top-0 left-0 w-full bg-[#003777] text-white py-2 px-5 z-[1100] text-sm font-semibold">
        <div className="flex justify-between items-center max-w-full mx-10 mx-auto">
          <span>Don't miss your chance to be part of the event. - Grab Your Passes Now!!</span>
          <div className="hidden md:flex gap-1 items-center font-medium">
            <span className="flex items-center gap-1">
              <FaRegCalendarAlt /> December 13–14, 2025
            </span>
            <span>|</span>
            <span className="flex items-center gap-1">
              <MdLocationPin /> Gujarat University Atal Kalam Building
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="fixed top-[0px] md:top-[32px] left-0 w-full bg-white shadow-md z-[1099] py-3">
        <div className="w-[90%] mx-auto flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => handleNavigation('/')} className="block bg-transparent border-none p-0">
            <img 
              src="/logo2.svg" 
              alt="Startup Fest Gujarat Logo" 
              className="h-[55px] w-auto max-w-[180px] block cursor-pointer"
            />
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6 mx-auto">
            <button 
              onClick={() => handleNavigation('/2025-Speakers')}
              className="text-black text-[15px] font-medium hover:text-[#003777] no-underline transition-colors bg-transparent border-none cursor-pointer"
            >
              2025 Speakers
            </button>

            {/* Highlights Dropdown */}
            <div className="relative dropdown-container">
              <button 
                className="text-black text-[15px] font-medium hover:text-[#003777] no-underline flex items-center gap-1 transition-colors bg-transparent border-none cursor-pointer"
                onClick={() => setHighlightsOpen(!highlightsOpen)}
              >
                Highlights <FiChevronDown className={`transition-transform ${highlightsOpen ? 'rotate-180' : ''}`} />
              </button>
              {highlightsOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg min-w-[200px] opacity-100 translate-y-0 transition-all duration-250 animate-fadeIn">
                  {/* 2024 Submenu */}
                  <div className="relative group/sub">
                    <button 
                      className="w-full text-left px-4 py-2 text-black hover:text-[#003777] hover:bg-gray-50 flex items-center justify-between bg-transparent border-none cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        setHigh2024Open(!high2024Open);
                      }}
                    >
                      2024 Highlights <FiChevronDown className="rotate-[-90deg]" />
                    </button>
                    {high2024Open && (
                      <div className="absolute left-full top-0 ml-1 bg-white shadow-lg rounded-lg min-w-[220px] animate-slideInRight">
                        <button onClick={() => handleNavigation('/speaker-2024')} className="block w-full text-left px-4 py-2 text-black hover:text-[#003777] hover:bg-gray-50 no-underline bg-transparent border-none cursor-pointer">2024 Moderator & Mentors</button>
                        <button onClick={() => handleNavigation('/sharktank-2024')} className="block w-full text-left px-4 py-2 text-black hover:text-[#003777] hover:bg-gray-50 no-underline bg-transparent border-none cursor-pointer">Meet our Sharks</button>
                        <button onClick={() => handleNavigation('/pre-series')} className="block w-full text-left px-4 py-2 text-black hover:text-[#003777] hover:bg-gray-50 no-underline bg-transparent border-none cursor-pointer">Pre-Series Pitching</button>
                        <button onClick={() => handleNavigation('/shark-teen')} className="block w-full text-left px-4 py-2 text-black hover:text-[#003777] hover:bg-gray-50 no-underline bg-transparent border-none cursor-pointer">Shark Teens 2024</button>
                      </div>
                    )}
                  </div>

                  <div className="border-t border-gray-200 my-1"></div>

                  {/* 2023 Submenu */}
                  <div className="relative group/sub">
                    <button 
                      className="w-full text-left px-4 py-2 text-black hover:text-[#003777] hover:bg-gray-50 flex items-center justify-between bg-transparent border-none cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        setHigh2023Open(!high2023Open);
                      }}
                    >
                      2023 Highlights <FiChevronDown className="rotate-[-90deg]" />
                    </button>
                    {high2023Open && (
                      <div className="absolute left-full top-0 ml-1 bg-white shadow-lg rounded-lg min-w-[200px] animate-slideInRight">
                        <button onClick={() => handleNavigation('/highlights')} className="block w-full text-left px-4 py-2 text-black hover:text-[#003777] hover:bg-gray-50 no-underline bg-transparent border-none cursor-pointer">2023 Highlights</button>
                        <button onClick={() => handleNavigation('/speakers')} className="block w-full text-left px-4 py-2 text-black hover:text-[#003777] hover:bg-gray-50 no-underline bg-transparent border-none cursor-pointer">Speakers & Mentors</button>
                        <button onClick={() => handleNavigation('/sharkTank')} className="block w-full text-left px-4 py-2 text-black hover:text-[#003777] hover:bg-gray-50 no-underline bg-transparent border-none cursor-pointer">Shark Tank Startups</button>
                        <button onClick={() => handleNavigation('/awards')} className="block w-full text-left px-4 py-2 text-black hover:text-[#003777] hover:bg-gray-50 no-underline bg-transparent border-none cursor-pointer">Award Night</button>
                        <button onClick={() => handleNavigation('/start-up-showcase')} className="block w-full text-left px-4 py-2 text-black hover:text-[#003777] hover:bg-gray-50 no-underline bg-transparent border-none cursor-pointer">Startup Showcase</button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Why Attend Dropdown */}
            <div className="relative dropdown-container">
              <button 
                className="text-black text-[15px] font-medium hover:text-[#003777] no-underline flex items-center gap-1 transition-colors bg-transparent border-none cursor-pointer"
                onClick={() => setWhyOpen(!whyOpen)}
              >
                Why Attend <FiChevronDown className={`transition-transform ${whyOpen ? 'rotate-180' : ''}`} />
              </button>
              {whyOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg min-w-[180px] animate-fadeIn">
                  <button onClick={() => handleNavigation('/start-up')} className="block w-full text-left px-4 py-2 text-black hover:text-[#003777] hover:bg-gray-50 no-underline bg-transparent border-none cursor-pointer">For Startups</button>
                  <button onClick={() => handleNavigation('/investor-accelator')} className="block w-full text-left px-4 py-2 text-black hover:text-[#003777] hover:bg-gray-50 no-underline bg-transparent border-none cursor-pointer">For Investors</button>
                  <button onClick={() => handleNavigation('/sponser')} className="block w-full text-left px-4 py-2 text-black hover:text-[#003777] hover:bg-gray-50 no-underline bg-transparent border-none cursor-pointer">For Sponsors</button>
                </div>
              )}
            </div>

            {/* Info Dropdown */}
            <div className="relative dropdown-container">
              <button 
                className="text-black text-[15px] font-medium hover:text-[#003777] no-underline flex items-center gap-1 transition-colors bg-transparent border-none cursor-pointer"
                onClick={() => setInfoOpen(!infoOpen)}
              >
                Info <FiChevronDown className={`transition-transform ${infoOpen ? 'rotate-180' : ''}`} />
              </button>
              {infoOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg min-w-[180px] animate-fadeIn">
                  <button onClick={() => handleNavigation('/about')} className="block w-full text-left px-4 py-2 text-black hover:text-[#003777] hover:bg-gray-50 no-underline bg-transparent border-none cursor-pointer">About Event</button>
                  <button onClick={() => handleNavigation('/activities')} className="block w-full text-left px-4 py-2 text-black hover:text-[#003777] hover:bg-gray-50 no-underline bg-transparent border-none cursor-pointer">Activities</button>
                  <button onClick={() => handleNavigation('/faq')} className="block w-full text-left px-4 py-2 text-black hover:text-[#003777] hover:bg-gray-50 no-underline bg-transparent border-none cursor-pointer">FAQ</button>
                  <button onClick={() => handleNavigation('/event-flow')} className="block w-full text-left px-4 py-2 text-black hover:text-[#003777] hover:bg-gray-50 no-underline bg-transparent border-none cursor-pointer">Event Flow</button>
                </div>
              )}
            </div>

            <button 
              onClick={() => handleNavigation('/contact')}
              className="text-black text-[15px] font-medium hover:text-[#003777] no-underline transition-colors bg-transparent border-none cursor-pointer"
            >
              Contact
            </button>
            <button 
              onClick={() => handleNavigation('/summary')}
              className="text-black text-[15px] font-medium hover:text-[#003777] no-underline transition-colors bg-transparent border-none cursor-pointer"
            >
              Summary
            </button>
          </div>

          {/* Register Button */}
          <div className="hidden lg:block relative ml-3 dropdown-container">
            <button 
              className="bg-[#003777] hover:bg-[#002a5c] text-white text-[15px] font-medium px-5 py-2 rounded-full transition-colors flex items-center gap-1 border-none cursor-pointer"
              onClick={() => setRegisterOpen(!registerOpen)}
            >
              Register <FiChevronDown className={`transition-transform ${registerOpen ? 'rotate-180' : ''}`} />
            </button>
            {registerOpen && (
              <div className="absolute top-full right-0 mt-2 bg-[#003777] shadow-lg rounded-lg min-w-[150px] animate-fadeIn">
                <button onClick={() => handleNavigation('/register')} className="block w-full text-left px-4 py-2 text-white hover:bg-white/10 no-underline bg-transparent border-none cursor-pointer">Exhibitor</button>
                <button onClick={() => handleNavigation('/register')} className="block w-full text-left px-4 py-2 text-white hover:bg-white/10 no-underline bg-transparent border-none cursor-pointer">Visitor</button>
                <button onClick={() => handleNavigation('/register')} className="block w-full text-left px-4 py-2 text-white hover:bg-white/10 no-underline bg-transparent border-none cursor-pointer">Investor</button>
                <button onClick={() => handleNavigation('/register')} className="block w-full text-left px-4 py-2 text-white hover:bg-white/10 no-underline bg-transparent border-none cursor-pointer">Sponsors</button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-2xl text-[#003777] bg-transparent border-none cursor-pointer p-2"
            onClick={onMobileMenuToggle}
          >
            <FaBars />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;