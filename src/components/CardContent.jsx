import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "./SectionTitle";

const CardContent = ({ about, text, title, buttonShow, to, linkToTitle }) => {
  
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      
      <SectionTitle title={title} className="text-center"/>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12">

        {/* LEFT SIDE - Content */}
        <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

          <div 
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed [&>p]:mb-4 [&>ul]:mb-4 [&>li]:mb-2"
            dangerouslySetInnerHTML={{ __html: text }}
          />

          {buttonShow && (
            <div className="pt-4">
              {to === "/register" ? (
                <a 
                  href="http://register.startupfestgujarat.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#003777] hover:bg-blue-900 text-white px-8 py-2 rounded-3xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-block"
                  style={{ textDecoration: 'none' }}
                >
                  {linkToTitle}
                </a>
              ) : (
                <Link 
                  to={to} 
                  className="bg-[#003777] hover:bg-blue-900 text-white px-8 py-2 rounded-3xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-block"
                  style={{ textDecoration: 'none' }}
                >
                  {linkToTitle}
                </Link>
              )}
            </div>
          )}

        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
          <img 
            src={about} 
            alt="Content illustration"
            className="w-full h-auto rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300" 
          />
        </div>

      </div>
    </div>
  );
};

export default CardContent;
