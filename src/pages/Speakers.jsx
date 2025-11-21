import React, { useEffect, useRef, useState } from 'react';
import SectionTitle from "../components/SectionTitle";
import chiranjiv from "../assets/img/chiranjiv.png";
import snehal from "../assets/img/snehal.png";
import sandip from "../assets/img/sandip.png";
import kuldip from "../assets/img/kuldip.png";
import ccf from "../assets/img/ccf.png";
import parth from "../assets/img/parth.png";
import hiran from "../assets/img/hiran.png";
import kamal from "../assets/img/kamal.png";
import barhat from "../assets/img/barhat.png";
import piyalee from "../assets/img/piyalee.png";
import kedar from "../assets/img/kedar.png";
import munish from "../assets/img/munish.png";
import mehul from "../assets/img/mehul.png";
import milap from "../assets/img/milap.png";
import pankaj from "../assets/img/pankaj.png";
import chintan from "../assets/img/chintan.png";
import sushil from "../assets/img/sushil.png";

const Speakers = () => {
  const [visibleSections, setVisibleSections] = useState({
    speakers: false,
    mentors: false,
    moderators: false
  });
  const speakersRef = useRef(null);
  const mentorsRef = useRef(null);
  const moderatorsRef = useRef(null);

  // ⭐ Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ⭐ Intersection Observer for animations
  useEffect(() => {
    const observers = [];
    
    const createObserver = (ref, sectionName) => {
      if (ref.current) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            setVisibleSections(prev => ({
              ...prev,
              [sectionName]: entry.isIntersecting
            }));
          },
          { threshold: 0.2 }
        );
        observer.observe(ref.current);
        observers.push(observer);
      }
    };

    createObserver(speakersRef, 'speakers');
    createObserver(mentorsRef, 'mentors');
    createObserver(moderatorsRef, 'moderators');

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  // ===================== DATA =====================
  const speakers = [
    { image: chiranjiv, name: "Mr Chiranjiv Patel" },
    { image: snehal, name: "MD of PC Snehal Group, Entrepreneur, Change Maker & Motivation" },
    { image: sandip, name: "Mr Sandip Gajjar", role: "Solutions & Business Coach, NLP Master Trainer Consulting CEO at Sneh World" },
    { image: kuldip, name: "Mr Kuldipsingh Kaler (Positive Pajji)", role: "Influencer and Author" },
    { image: ccf, name: "CC- Founder & Director Marketing – Pitchvilla" },
    { image: parth, name: "Mr Parth Shah" },
  ];

  const mentors = [
    { image: hiran, name: "Hiranmay Sir", role: "CEO- iHUB Gujart" },
    { image: kamal, name: "Kamal Sir", role: "MD – GVFL" },
    { image: barhat, name: "Dr. R. D. Barhat", role: "JC of Industries" },
  ];

  const moderators = [
    { image: piyalee, name: "Piyalee", role: "Topic : Role and Impact of the state start-up Eco-system" },
    { image: kedar, name: "Kedar Dave", role: "Founder of Shuru-Up" },
    { image: munish, name: "Munish Bhatia", role: "Co – Founder India Accelerato" },
    { image: mehul, name: "Mehul Shah", role: "Partner, Rasesh Shah & Co." },
    { image: milap, name: "Milapsinh Jadeja", role: "Topic : What Gets the Investor Saying, 'Take My Money !'" },
    { image: pankaj, name: "Dr. Pankajray Patel", role: "Director GSMS – Graduate school of management studies." },
    { image: chintan, name: "Chintan Vyas", role: "VP. of IPV" },
    { image: sushil, name: "Sushil Sharma", role: "Marwari Catalyst" },
  ];

  const renderCards = (data, sectionName, startDelay = 0) => {
    return data.map((person, index) => (
      <div 
        key={index}
        className={`group bg-white rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 border-t-4 border-[#003777] ${
          visibleSections[sectionName] ? 'animate-slide-up' : ''
        }`}
        style={{ animationDelay: `${startDelay + index * 150}ms` }}
      >
        {/* Image Container */}
        <div className="relative mb-6 overflow-hidden rounded-2xl">
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={person.image}
              alt={person.name}
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          
          {/* Overlay Effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#003777]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Content */}
        <div className="text-center space-y-3">
          <h4 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-[#003777] transition-colors duration-300">
            {person.name}
          </h4>
          {person.role && (
            <p className="text-sm md:text-base text-gray-600 leading-relaxed font-medium">
              {person.role}
            </p>
          )}
        </div>
        
        {/* Hover Border Effect */}
        <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#003777] transition-colors duration-300"></div>
      </div>
    ));
  };

  return (
    <div className="bg-gradient-to-br from-white via-gray-50 to-blue-50 min-h-screen py-14">
      {/* Speakers Section */}
      <section 
        ref={speakersRef}
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20"
      >
        <div className={`transition-all duration-1000 ${visibleSections.speakers ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <SectionTitle 
            title="Speakers" 
            subtitle="Meet our distinguished speakers who shared their expertise and insights at the event."
            className="mb-16 text-center"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {renderCards(speakers, 'speakers', 300)}
        </div>
      </section>

      {/* Mentors Section */}
      <section 
        ref={mentorsRef}
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20"
      >
        <div className={`transition-all duration-1000 ${visibleSections.mentors ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <SectionTitle 
            title="Mentors" 
            subtitle="Experienced mentors who guided startups and entrepreneurs throughout the event."
            className="mb-16 text-center"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {renderCards(mentors, 'mentors', 300)}
        </div>
      </section>

      {/* Moderators Section */}
      <section 
        ref={moderatorsRef}
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className={`transition-all duration-1000 ${visibleSections.moderators ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <SectionTitle 
            title="Moderators" 
            subtitle="Skilled moderators who facilitated engaging discussions and panel sessions."
            className="mb-16 text-center"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {renderCards(moderators, 'moderators', 300)}
        </div>
      </section>
    </div>
  );
};

export default Speakers;