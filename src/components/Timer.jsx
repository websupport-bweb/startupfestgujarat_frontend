import React, { useState, useEffect, useRef } from "react";
import { MdLocationPin } from "react-icons/md";
import { FaCalendarAlt, FaClock } from "react-icons/fa";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const targetDate = new Date("2025-12-13T10:00:00").getTime();

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

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
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative py-16 md:py-20"
      style={{
        backgroundImage: "url('/vivid-blurred-colorful-wallpaper-background-1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* White Overlay */}
      <div className="absolute inset-0 bg-white/70"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Title */}
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-[#003777] leading-tight transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            India Startup Revolution is{" "}
            <span className="text-[#003777]">
              here and now!
            </span>
          </h2>
        </div>

        {/* Event Details Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          
          {/* Venue Card */}
          <div className={`bg-white rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transform transition-all duration-700 hover:-translate-y-2 border-t-4 border-[#003777] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
            <div className="w-20 h-20 mx-auto mb-6 bg-[#003777] rounded-full flex items-center justify-center shadow-lg">
              <MdLocationPin className="text-white text-3xl" />
            </div>
            <h4 className="text-2xl font-bold text-[#003777] mb-4">Venue</h4>
            <p className="text-gray-700 leading-relaxed">
              Gujarat University Atal Kalam Building, Ahmedabad.
            </p>
          </div>

          {/* Date Card */}
          <div className={`bg-white rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transform transition-all duration-700 hover:-translate-y-2 border-t-4 border-[#003777] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '400ms' }}>
            <div className="w-20 h-20 mx-auto mb-6 bg-[#003777] rounded-full flex items-center justify-center shadow-lg">
              <FaCalendarAlt className="text-white text-3xl" />
            </div>
            <h4 className="text-2xl font-bold text-[#003777] mb-4">Date</h4>
            <p className="text-gray-700 leading-relaxed">
              13 & 14 December, 2025
            </p>
          </div>

          {/* Time Card */}
          <div className={`bg-white rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transform transition-all duration-700 hover:-translate-y-2 border-t-4 border-[#003777] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '600ms' }}>
            <div className="w-20 h-20 mx-auto mb-6 bg-[#003777] rounded-full flex items-center justify-center shadow-lg">
              <FaClock className="text-white text-3xl" />
            </div>
            <h4 className="text-2xl font-bold text-[#003777] mb-4">Time</h4>
            <p className="text-gray-700 leading-relaxed">
              10:00 AM TO 07:00 PM
            </p>
          </div>

        </div>

        {/* Countdown Timer */}
        <div className={`bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '800ms' }}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            
            {/* Days */}
            <div className="text-center group">
              <div className="bg-gradient-to-br from-[#003777] to-[#004499] rounded-2xl p-6 md:p-8 shadow-xl transform transition-all duration-500 group-hover:scale-105">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-2">
                  {timeLeft.days}
                </h3>
                <div className="w-full h-1 bg-white/30 rounded mb-3"></div>
                <h5 className="text-sm md:text-base text-white font-bold uppercase tracking-widest">
                  Days
                </h5>
              </div>
            </div>

            {/* Hours */}
            <div className="text-center group">
              <div className="bg-gradient-to-br from-[#003777] to-[#004499] rounded-2xl p-6 md:p-8 shadow-xl transform transition-all duration-500 group-hover:scale-105">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-2">
                  {timeLeft.hours}
                </h3>
                <div className="w-full h-1 bg-white/30 rounded mb-3"></div>
                <h5 className="text-sm md:text-base text-white font-bold uppercase tracking-widest">
                  Hours
                </h5>
              </div>
            </div>

            {/* Minutes */}
            <div className="text-center group">
              <div className="bg-gradient-to-br from-[#003777] to-[#004499] rounded-2xl p-6 md:p-8 shadow-xl transform transition-all duration-500 group-hover:scale-105">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-2">
                  {timeLeft.minutes}
                </h3>
                <div className="w-full h-1 bg-white/30 rounded mb-3"></div>
                <h5 className="text-sm md:text-base text-white font-bold uppercase tracking-widest">
                  Minutes
                </h5>
              </div>
            </div>

            {/* Seconds */}
            <div className="text-center group">
              <div className="bg-gradient-to-br from-[#003777] to-[#004499] rounded-2xl p-6 md:p-8 shadow-xl transform transition-all duration-500 group-hover:scale-105">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-2">
                  {timeLeft.seconds}
                </h3>
                <div className="w-full h-1 bg-white/30 rounded mb-3"></div>
                <h5 className="text-sm md:text-base text-white font-bold uppercase tracking-widest">
                  Seconds
                </h5>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Timer;
