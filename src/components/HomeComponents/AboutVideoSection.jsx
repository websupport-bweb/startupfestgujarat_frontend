import React, { useState } from 'react';
import { Link } from "react-router-dom";
import video from "../../assets/img/video-thumb.png";

const AboutVideoSection = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-cover bg-center bg-no-repeat py-16 md:py-20" 
      style={{ backgroundImage: "url('/vivid-blurred-colorful-wallpaper-background.png')" }}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* LEFT SIDE CONTENT */}
          <div className="animate-slide-in-left">
            
            {/* INITIATED BY */}
            <div className="mb-6">
              <p className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                Initiated By
              </p>
              <img
                src="/snehalshilplogo.svg"
                alt="logo"
                className="h-16 md:h-20 mt-2 animate-fade-in delay-300"
              />
            </div>

            {/* MAIN HEADING */}
            <h2 className="text-3xl md:text-5xl font-black leading-tight mb-4 max-w-3xl text-black tracking-wide animate-slide-up delay-500">
              TRANSFORMING IDEAS <br />
              INTO LASTING{" "}
              <span className="text-[#003777] font-black tracking-wide">
                IMPACT
              </span>
            </h2>

            <p className="text-lg md:text-xl lg:text-2xl font-medium mb-8 text-gray-900 animate-fade-in delay-700">
              Empowering Tomorrow's Bharat
            </p>

            {/* BUTTON */}
            <a
              href="http://register.startupfestgujarat.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#003777] hover:bg-blue-900 text-white px-10 py-2 rounded-3xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-bounce-in delay-1000 inline-block no-underline"
              style={{ textDecoration: 'none' }}
            >
              Register
            </a>

          </div>

          {/* RIGHT SIDE - VIDEO */}
          <div className="md:p-20">
            <div className="relative group cursor-pointer" onClick={handleShow}>
              <img 
                src={video} 
                className="w-full rounded-2xl  duration-500 group-hover:scale-105" 
                alt="Startup Fest Video" 
              />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-2xl transform transition-all duration-300 group-hover:scale-110 hover:bg-gray-100 cursor-pointer">
                  <svg 
                    width="32" 
                    height="32" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    className="text-[#003777] ml-1"
                  >
                    <path 
                      d="M8 5v14l11-7z" 
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>

            </div>

            {/* Video Modal */}
            {show && (
              <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4" onClick={handleClose}>
                <div className="relative w-full max-w-5xl mx-auto" onClick={(e) => e.stopPropagation()}>
                  <button 
                    onClick={handleClose}
                    className="absolute -top-12 right-0 text-white text-4xl hover:text-red-400 transition-colors z-10 bg-black/50 rounded-full w-12 h-12 flex items-center justify-center"
                  >
                    ×
                  </button>
                  <div className="bg-black rounded-xl overflow-hidden shadow-2xl">
                    <div className="relative pb-[56.25%] h-0">
                      <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/kKACoyYyHpg?autoplay=1"
                        title="Startup Fest 2023"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutVideoSection;