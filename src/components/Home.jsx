import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";

// Child Components
import HeroBanner from "./HomeComponents/HeroBanner";
import ScrollingText from "./HomeComponents/ScrollingText";
import CountdownCounter from "./HomeComponents/CountdownCounter";
import AboutVideoSection from "./HomeComponents/AboutVideoSection";
import StatisticsSection from "./HomeComponents/StatisticsSection";
import SpeakersSection from "./HomeComponents/SpeakersSection";
import InnovationSection from "./HomeComponents/InnovationSection";
import ParticipantsSection from "./HomeComponents/ParticipantsSection";

// Other Components
import Timer from "./Timer";
import RegisterYourself from "./RegisterYourself";
import CardContent from "./CardContent";
import Testimonial from "./Testimonial";
import SectionTitle from "./SectionTitle";
import SponsorSection from "./SponsorSection";

// Helpers
import { aboutImage, sponsorLogosS1, sponsorLogosS2, aboutText } from "../helpers/homepageHelper.ts";

export default function Home() {
  const [mediaData, setMediaData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lightboxShow, setLightboxShow] = useState(false);
  const [lightboxImage, setLightboxImage] = useState('');
  const [lightboxTitle, setLightboxTitle] = useState('');
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const handleScroll = () => {
    window.scrollTo({
      top: document.getElementById("target-section").offsetTop,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const sections = document.querySelectorAll(".scroll-sec");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active");
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const targetDate = new Date("2025-12-13T00:00:00");

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Media API calls
  useEffect(() => {
    const fetchMediaData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_URL}/api/media`);
        // Ensure response.data is an array
        const data = Array.isArray(response.data) ? response.data : [];
        setMediaData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching media data:', error);
        // Set empty array on error
        setMediaData([]);
        setLoading(false);
      }
    };

    // Only fetch if API URL is available
    if (process.env.REACT_APP_URL) {
      fetchMediaData();
    } else {
      setMediaData([]);
      setLoading(false);
    }
  }, []);

  const handleLightboxClose = () => {
    setLightboxShow(false);
    setLightboxImage('');
    setLightboxTitle('');
  };

  const handleMediaCardClick = (item) => {
    setLightboxImage(`${process.env.REACT_APP_URL}/${item.image}`);
    setLightboxTitle(item.title);
    setLightboxShow(true);
  };

  const getMediaSettings = () => {
    // Ensure mediaData is an array before getting length
    const itemCount = Array.isArray(mediaData) ? mediaData.length : 0;
    const slidesToShow = Math.min(itemCount, 3);
    const slidesToScroll = Math.min(itemCount, 3);

    return {
      dots: false,
      infinite: itemCount > 3,
      speed: 500,
      slidesToShow: slidesToShow || 1,
      slidesToScroll: slidesToScroll || 1,
      autoplay: itemCount > 1,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: Math.min(itemCount, 2) || 1,
            slidesToScroll: Math.min(itemCount, 2) || 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: Math.min(itemCount, 2) || 1,
            slidesToScroll: Math.min(itemCount, 2) || 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
  };



  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Banner Section */}
      <HeroBanner />

      {/* Scrolling Text Section */}
      <ScrollingText />

      {/* Countdown Counter Section */}
      <CountdownCounter timeLeft={timeLeft} />

      {/* About Video Section */}
      <AboutVideoSection />

      {/* About Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CardContent about={aboutImage} text={aboutText} title="About StartUp Fest" buttonShow={true} to="/about" linkToTitle="Learn More" />
        </div>
      </section>

      {/* Timer Section */}
      <section className="min-h-[50vh] flex items-center justify-center bg-white ">
        <div className="w-full max-w-full mx-auto ">
          <Timer />
        </div>
      </section>

      {/* Registration Section */}
      <section className="flex items-center justify-center bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="w-full max-w-full mx-auto px-4">
          <RegisterYourself />
        </div>
      </section>

      {/* Statistics Section */}
      <StatisticsSection />

      {/* Speakers Section */}
      <SpeakersSection />

      {/* Innovation Section */}
      <InnovationSection />

      {/* Participants Registration Section */}
      <ParticipantsSection />

      {/* Testimonials Section */}
      <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="w-full max-w-7xl mx-auto px-4">
          <Testimonial />
        </div>
      </section>

      {/* Sponsors of Season 2 */}
      <SponsorSection 
        title="Sponsors of Season 2" 
        sponsors={sponsorLogosS2}
        backgroundColor="bg-gradient-to-br from-white via-gray-50 to-blue-50"
      />

      {/* Sponsors of Season 1 */}
      <SponsorSection 
        title="Sponsors of Season 1" 
        sponsors={sponsorLogosS1}
        backgroundColor="bg-gradient-to-br from-gray-50 via-white to-blue-50"
      />

      {/* Media & Recognition */}
      {Array.isArray(mediaData) && mediaData.length > 0 && (
        <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-gray-50 py-16 md:py-20">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle title="Media & Recognition" />
            
            <div className="w-full max-w-6xl mx-auto">
              {loading ? (
                <div className="flex flex-col items-center justify-center space-y-4 animate-pulse">
                  <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-lg text-gray-600">Loading...</p>
                </div>
              ) : Array.isArray(mediaData) && mediaData.length > 0 ? (
                <div>
                  {mediaData.length === 1 ? (
                    <div className="flex justify-center">
                      <div className="w-full max-w-md">
                        <div
                          className="group cursor-pointer animate-slide-up"
                          onClick={() => handleMediaCardClick(mediaData[0])}
                        >
                          <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                            <div className="aspect-video overflow-hidden">
                              <img
                                src={`${process.env.REACT_APP_URL}/${mediaData[0].image}`}
                                alt={mediaData[0].title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                              />
                            </div>
                            <div className="p-6">
                              <h4 className="text-xl font-bold text-gray-900 group-hover:text-[#003777] transition-colors duration-300">
                                {mediaData[0].title}
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="px-4">
                      <Slider {...getMediaSettings()}>
                        {Array.isArray(mediaData) && mediaData.map((item, index) => (
                          <div key={index} className="px-2">
                            <div
                              className="group cursor-pointer"
                              onClick={() => handleMediaCardClick(item)}
                            >
                              <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                                <div className="aspect-video overflow-hidden">
                                  <img
                                    src={`${process.env.REACT_APP_URL}/${item.image}`}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                  />
                                </div>
                                <div className="p-6">
                                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-[#003777] transition-colors duration-300">
                                    {item.title}
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </Slider>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-xl text-gray-600">No media data available</p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox Modal for Media Images */}
      {lightboxShow && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={handleLightboxClose}>
          <div className="relative max-w-6xl max-h-[90vh] mx-4" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={handleLightboxClose}
              className="absolute -top-12 right-0 text-white text-4xl hover:text-gray-300 transition-colors z-10"
            >
              ×
            </button>
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="p-4 border-b border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900">{lightboxTitle}</h3>
              </div>
              <div className="p-0 text-center">
                <img
                  src={lightboxImage}
                  alt={lightboxTitle}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Global Animations Styles */}
      <style>{`
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes slide-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-in-left {
          0% { opacity: 0; transform: translateX(-30px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-in-right {
          0% { opacity: 0; transform: translateX(30px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes bounce-in {
          0% { opacity: 0; transform: scale(0.3); }
          50% { transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes bounce-slow {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
        
        .animate-fade-in { animation: fade-in 0.6s ease-out forwards; }
        .animate-slide-up { animation: slide-up 0.6s ease-out forwards; }
        .animate-slide-in-left { animation: slide-in-left 0.6s ease-out forwards; }
        .animate-slide-in-right { animation: slide-in-right 0.6s ease-out forwards; }
        .animate-bounce-in { animation: bounce-in 0.8s ease-out forwards; }
        .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
        
        .delay-150 { animation-delay: 150ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-700 { animation-delay: 700ms; }
        .delay-1000 { animation-delay: 1000ms; }
        
        .animation-delay-150 { animation-delay: 150ms; }
        .animation-delay-300 { animation-delay: 300ms; }
        .animation-delay-500 { animation-delay: 500ms; }
      `}</style>
    </div>
  );
}