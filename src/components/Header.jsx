import React, { useState } from "react";
import { MdLocationPin } from "react-icons/md";
import { FaRegCalendarAlt, FaBars, FaTimes } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

export default function Header() {
  const [highlightsOpen, setHighlightsOpen] = useState(false);
  const [high2024Open, setHigh2024Open] = useState(false);
  const [high2023Open, setHigh2023Open] = useState(false);
  const [whyOpen, setWhyOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close all dropdowns when clicking outside
  React.useEffect(() => {
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
      {/* ---------------- TOP BAR ---------------- */}
      <div className="fixed top-0 left-0 w-full bg-[#003777] text-white py-2 px-5 z-[1100] text-sm font-semibold">
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

      {/* ---------------- HEADER ---------------- */}
      <nav className="fixed top-[32px] left-0 w-full bg-white shadow-md z-[1099] py-3">
        <div className="w-[90%] mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="block">
            <img 
              src="/logo2.svg" 
              alt="Startup Fest Gujarat Logo" 
              className="h-[55px] w-auto max-w-[180px] block"
              style={{ display: 'block', visibility: 'visible' }}
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6 mx-auto">
            <a href="/2025-Speakers" className="text-black text-[15px] font-medium hover:text-[#003777] no-underline transition-colors">
              2025 Speakers
            </a>

            {/* Highlights Dropdown */}
            <div className="relative dropdown-container">
              <button 
                className="text-black text-[15px] font-medium hover:text-[#003777] no-underline flex items-center gap-1 transition-colors"
                onClick={() => setHighlightsOpen(!highlightsOpen)}
              >
                Highlights <FiChevronDown className={`transition-transform ${highlightsOpen ? 'rotate-180' : ''}`} />
              </button>
              {highlightsOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg min-w-[200px] opacity-100 translate-y-0 transition-all duration-250">
                  {/* 2024 Submenu */}
                  <div className="relative group/sub">
                    <button 
                      className="w-full text-left px-4 py-2 text-black hover:text-[#003777] hover:bg-gray-50 flex items-center justify-between"
                      onClick={(e) => {
                        e.stopPropagation();
                        setHigh2024Open(!high2024Open);
                      }}
                    >
                      2024 Highlights <FiChevronDown className="rotate-[-90deg]" />
                    </button>
                    {high2024Open && (
                      <div className="absolute left-full top-0 ml-1 bg-white shadow-lg rounded-lg min-w-[220px]">
                        <a href="/speaker-2024" className="block px-4 py-2 text-black hover:text-[#003777] hover:bg-gray-50 no-underline">2024 Moderator & Mentors</a>
                        <a href="/sharktank-2024" className="block px-4 py-2 text-black hover:text-[#003777] hover:bg-gray-50 no-underline">Meet our Sharks</a>
                        <a href="/pre-series" className="block px-4 py-2 text-black hover:text-[#003777] hover:bg-gray-50 no-underline">Pre-Series Pitching</a>
                        <a href="/shark-teen" className="block px-4 py-2 text-black hover:text-[#003777] hover:bg-gray-50 no-underline">Shark Teens 2024</a>
                      </div>
                    )}
                  </div>

                  <div className="border-t border-gray-200 my-1"></div>

                  {/* 2023 Submenu */}
                  <div className="relative group/sub">
                    <button 
                      className="w-full text-left px-4 py-2 text-black hover:text-[#003777] hover:bg-gray-50 flex items-center justify-between"
                      onClick={(e) => {
                        e.stopPropagation();
                        setHigh2023Open(!high2023Open);
                      }}
                    >
                      2023 Highlights <FiChevronDown className="rotate-[-90deg]" />
                    </button>
                    {high2023Open && (
                      <div className="absolute left-full top-0 ml-1 bg-white shadow-lg rounded-lg min-w-[200px]">
                        <a href="/highlights" className="block px-4 py-2 text-black hover:text-[#003777] hover:bg-gray-50 no-underline">2023 Highlights</a>
                        <a href="/speakers" className="block px-4 py-2 text-black hover:text-[#003777] hover:bg-gray-50 no-underline">Speakers & Mentors</a>
                        <a href="/sharkTank" className="block px-4 py-2 text-black hover:text-[#003777] hover:bg-gray-50 no-underline">Shark Tank Startups</a>
                        <a href="/awards" className="block px-4 py-2 text-black hover:text-[#003777] hover:bg-gray-50 no-underline">Award Night</a>
                        <a href="/start-up-showcase" className="block px-4 py-2 text-black hover:text-[#003777] hover:bg-gray-50 no-underline">Startup Showcase</a>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Why Attend Dropdown */}
            <div className="relative dropdown-container">
              <button 
                className="text-black text-[15px] font-medium hover:text-[#003777] no-underline flex items-center gap-1 transition-colors"
                onClick={() => setWhyOpen(!whyOpen)}
              >
                Why Attend <FiChevronDown className={`transition-transform ${whyOpen ? 'rotate-180' : ''}`} />
              </button>
              {whyOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg min-w-[180px]">
                  <a href="/start-up" className="block px-4 py-2 text-black hover:text-[#003777] hover:bg-gray-50 no-underline">For Startups</a>
                  <a href="/investor-accelator" className="block px-4 py-2 text-black hover:text-[#003777] hover:bg-gray-50 no-underline">For Investors</a>
                  <a href="/sponser" className="block px-4 py-2 text-black hover:text-[#003777] hover:bg-gray-50 no-underline">For Sponsors</a>
                </div>
              )}
            </div>

            {/* Info Dropdown */}
            <div className="relative dropdown-container">
              <button 
                className="text-black text-[15px] font-medium hover:text-[#003777] no-underline flex items-center gap-1 transition-colors"
                onClick={() => setInfoOpen(!infoOpen)}
              >
                Info <FiChevronDown className={`transition-transform ${infoOpen ? 'rotate-180' : ''}`} />
              </button>
              {infoOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg min-w-[180px]">
                  <a href="/about" className="block px-4 py-2 text-black hover:text-[#003777] hover:bg-gray-50 no-underline">About Event</a>
                  <a href="/activities" className="block px-4 py-2 text-black hover:text-[#003777] hover:bg-gray-50 no-underline">Activities</a>
                  <a href="/faq" className="block px-4 py-2 text-black hover:text-[#003777] hover:bg-gray-50 no-underline">FAQ</a>
                  <a href="/event-flow" className="block px-4 py-2 text-black hover:text-[#003777] hover:bg-gray-50 no-underline">Event Flow</a>
                </div>
              )}
            </div>

            <a href="/contact" className="text-black text-[15px] font-medium hover:text-[#003777] no-underline transition-colors">
              Contact
            </a>
            <a href="/summary" className="text-black text-[15px] font-medium hover:text-[#003777] no-underline transition-colors">
              Summary
            </a>
          </div>

          {/* Register Button */}
          <div className="hidden lg:block relative ml-3 dropdown-container">
            <button 
              className="bg-[#003777] hover:bg-[#002a5c] text-white text-[15px] font-medium px-5 py-2 rounded-full transition-colors flex items-center gap-1"
              onClick={() => setRegisterOpen(!registerOpen)}
            >
              Register <FiChevronDown className={`transition-transform ${registerOpen ? 'rotate-180' : ''}`} />
            </button>
            {registerOpen && (
              <div className="absolute top-full right-0 mt-2 bg-[#003777] shadow-lg rounded-lg min-w-[150px]">
                <a href="/register" className="block px-4 py-2 text-white hover:bg-white/10 no-underline">Exhibitor</a>
                <a href="/register" className="block px-4 py-2 text-white hover:bg-white/10 no-underline">Visitor</a>
                <a href="/register" className="block px-4 py-2 text-white hover:bg-white/10 no-underline">Investor</a>
                <a href="/register" className="block px-4 py-2 text-white hover:bg-white/10 no-underline">Sponsors</a>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-2xl text-[#003777]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 mt-5 py-4">
            <div className="w-[90%] mx-auto flex flex-col gap-4">
              <a href="/2025-Speakers" className="text-black font-medium hover:text-[#003777] no-underline">2025 Speakers</a>
              
              <div>
                <button 
                  className="w-full text-left text-black font-medium hover:text-[#003777] flex items-center justify-between"
                  onClick={() => setHighlightsOpen(!highlightsOpen)}
                >
                  Highlights <FiChevronDown />
                </button>
                {highlightsOpen && (
                  <div className="pl-4 mt-2 flex flex-col gap-2">
                    <button 
                      className="w-full text-left text-black hover:text-[#003777] flex items-center justify-between"
                      onClick={() => setHigh2024Open(!high2024Open)}
                    >
                      2024 Highlights <FiChevronDown />
                    </button>
                    {high2024Open && (
                      <div className="pl-4 flex flex-col gap-2">
                        <a href="/speaker-2024" className="text-black hover:text-[#003777] no-underline">2024 Moderator & Mentors</a>
                        <a href="/sharktank-2024" className="text-black hover:text-[#003777] no-underline">Meet our Sharks</a>
                        <a href="/pre-series" className="text-black hover:text-[#003777] no-underline">Pre-Series Pitching</a>
                        <a href="/shark-teen" className="text-black hover:text-[#003777] no-underline">Shark Teens 2024</a>
                      </div>
                    )}
                    <button 
                      className="w-full text-left text-black hover:text-[#003777] flex items-center justify-between"
                      onClick={() => setHigh2023Open(!high2023Open)}
                    >
                      2023 Highlights <FiChevronDown />
                    </button>
                    {high2023Open && (
                      <div className="pl-4 flex flex-col gap-2">
                        <a href="/highlights" className="text-black hover:text-[#003777] no-underline">2023 Highlights</a>
                        <a href="/speakers" className="text-black hover:text-[#003777] no-underline">Speakers & Mentors</a>
                        <a href="/sharkTank" className="text-black hover:text-[#003777] no-underline">Shark Tank Startups</a>
                        <a href="/awards" className="text-black hover:text-[#003777] no-underline">Award Night</a>
                        <a href="/start-up-showcase" className="text-black hover:text-[#003777] no-underline">Startup Showcase</a>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div>
                <button 
                  className="w-full text-left text-black font-medium hover:text-[#003777] flex items-center justify-between"
                  onClick={() => setWhyOpen(!whyOpen)}
                >
                  Why Attend <FiChevronDown />
                </button>
                {whyOpen && (
                  <div className="pl-4 mt-2 flex flex-col gap-2">
                    <a href="/start-up" className="text-black hover:text-[#003777] no-underline">For Startups</a>
                    <a href="/investor-accelator" className="text-black hover:text-[#003777] no-underline">For Investors</a>
                    <a href="/sponser" className="text-black hover:text-[#003777] no-underline">For Sponsors</a>
                  </div>
                )}
              </div>

              <div>
                <button 
                  className="w-full text-left text-black font-medium hover:text-[#003777] flex items-center justify-between"
                  onClick={() => setInfoOpen(!infoOpen)}
                >
                  Info <FiChevronDown />
                </button>
                {infoOpen && (
                  <div className="pl-4 mt-2 flex flex-col gap-2">
                    <a href="/about" className="text-black hover:text-[#003777] no-underline">About Event</a>
                    <a href="/activities" className="text-black hover:text-[#003777] no-underline">Activities</a>
                    <a href="/faq" className="text-black hover:text-[#003777] no-underline">FAQ</a>
                    <a href="/event-flow" className="text-black hover:text-[#003777] no-underline">Event Flow</a>
                  </div>
                )}
              </div>

              <a href="/contact" className="text-black font-medium hover:text-[#003777] no-underline">Contact</a>
              <a href="/summary" className="text-black font-medium hover:text-[#003777] no-underline">Summary</a>

              <div>
                <button 
                  className="w-full text-left bg-[#003777] hover:bg-[#002a5c] text-white font-medium px-5 py-2 rounded-full flex items-center justify-between"
                  onClick={() => setRegisterOpen(!registerOpen)}
                >
                  Register <FiChevronDown />
                </button>
                {registerOpen && (
                  <div className="pl-4 mt-2 flex flex-col gap-2">
                    <a href="/register" className="text-black hover:text-[#003777] no-underline">Exhibitor</a>
                    <a href="/register" className="text-black hover:text-[#003777] no-underline">Visitor</a>
                    <a href="/register" className="text-black hover:text-[#003777] no-underline">Investor</a>
                    <a href="/register" className="text-black hover:text-[#003777] no-underline">Sponsors</a>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}