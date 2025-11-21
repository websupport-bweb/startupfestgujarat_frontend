import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "./SectionTitle";

export default function RegisterYourself() {

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
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24" ref={sectionRef}>
      
      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 lg:mb-12">
        <div className={`lg:w-2/3 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <SectionTitle title="Register Yourself" className="text-left !mb-6" showDivider={false} />
          <p className="text-lg text-gray-700 leading-relaxed">
            People who register for the Start-Up Fest will be allotted a
            5-minute time slot to present their startup in front of
            potential investors.
          </p>
        </div>
        
        <div className={`mt-6 lg:mt-0 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Link 
            to="/register" 
            className="bg-[#003777] hover:bg-blue-900 text-white px-8 py-2 rounded-3xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-block"
            style={{ textDecoration: 'none' }}
          >
            Register Now
          </Link>
        </div>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">

        {/* Exhibitor Card */}
        <Link 
          to="/register"
          className={`group block transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ textDecoration: 'none' }}
        >
          <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 h-full border border-gray-100 group-hover:border-[#003777] transform group-hover:scale-105">
            <div className="border-l-4 border-[#003777] pl-4 mb-4">
              <h3 className="text-xl font-bold text-[#003777]">Exhibitor</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Exhibitors will get a 3 by 3 stall and a chance to{" "}
              <span className="bg-[#f8a405] bg-opacity-20 px-1 rounded font-medium">present their project/idea/</span>
              startup on stage in front of all the investors.
            </p>
          </div>
        </Link>

        {/* Visitor Card */}
        <Link 
          to="/register"
          className={`group block transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ textDecoration: 'none' }}
        >
          <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 h-full border border-gray-100 group-hover:border-[#003777] transform group-hover:scale-105">
            <div className="border-l-4 border-[#003777] pl-4 mb-4">
              <h3 className="text-xl font-bold text-[#003777]">Visitor</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Visitors get a chance to connect with exhibitors, explore innovative startups, and{" "}
              <span className="bg-[#f8a405] bg-opacity-20 px-1 rounded font-medium">discover new business opportunities</span>
              across multiple industries.
            </p>
          </div>
        </Link>

        {/* Investors Card */}
        <Link 
          to="/register"
          className={`group block transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ textDecoration: 'none' }}
        >
          <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 h-full border border-gray-100 group-hover:border-[#003777] transform group-hover:scale-105">
            <div className="border-l-4 border-[#003777] pl-4 mb-4">
              <h3 className="text-xl font-bold text-[#003777]">Investors</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Investors get access to all startups and an opportunity to{" "}
              <span className="bg-[#f8a405] bg-opacity-20 px-1 rounded font-medium">multiply their money by 2–3x.</span>
            </p>
          </div>
        </Link>

        {/* Sponsors Card */}
        <Link 
          to="/register"
          className={`group block transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ textDecoration: 'none' }}
        >
          <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 h-full border border-gray-100 group-hover:border-[#003777] transform group-hover:scale-105">
            <div className="border-l-4 border-[#003777] pl-4 mb-4">
              <h3 className="text-xl font-bold text-[#003777]">Sponsors</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Sponsors get{" "}
              <span className="bg-[#f8a405] bg-opacity-20 px-1 rounded font-medium">premier visibility and direct access</span>
              to high-growth founders & capital-ready investors.
            </p>
          </div>
        </Link>

      </div>

    </section>
  );
}
