import React, { useEffect, useRef, useState } from "react";
import SectionTitle from "../components/SectionTitle";

// Images
import abhijeet from "../assets/img/Abhijeet-Satani.jpg";
import fenil from "../assets/img/ca.jpeg";
import naman from "../assets/img/NamanAnand.jpeg";
import neil from "../assets/img/Neil.JPEG";
import raul from "../assets/img/Raul.jpeg";
import sonu from "../assets/img/SonuSharma.png";
import tirth from "../assets/img/tirth.jpeg";

const SpeakersChiefGuest = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    // ⭐ Scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // ⭐ Intersection Observer for animations
    useEffect(() => {
        const section = sectionRef.current;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.2 }
        );

        if (section) observer.observe(section);
        return () => observer.disconnect();
    }, []);

    // All Speakers Data
    const speakers = [
        {
            img: sonu,
            name: "Sonu Sharma",
            role: "International Motivational Speaker",
        },
        {
            img: raul,
            name: "Raul John Aju",
            role: "India's Young AI Innovator, CEO of Project 47x, TEDX Speaker",
        },
        {
            img: naman,
            name: "Naman Anand",
            role: "Mentalist, Magician",
        },
        {
            img: abhijeet,
            name: "Mr. Abhijeet Satani",
            role: "Scientist",
        },
        {
            img: tirth,
            name: "Mr. Tirth Patel",
            role: "CEO & Director – Anand Innovation Pvt Ltd",
        },
        {
            img: fenil,
            name: "CA. DR. CS. Fenil Shah",
            role: "WIRC Treasurer, Former ICAI Chairperson, TEDX Researcher",
        }
    ];

    return (
        <div className="bg-gradient-to-br from-white via-gray-50 to-blue-50 min-h-screen  py-14">
            
            {/* Chief Guest Section */}
            <section 
                ref={sectionRef}
                className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20"
            >
                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <SectionTitle title="Chief Guest" className="mb-16 text-center"/>
                </div>

                <div className="flex justify-center">
                    <div className={`max-w-md transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 border-t-4 border-[#003777]">
                            
                            {/* Image Container */}
                            <div className="relative mb-6 overflow-hidden rounded-2xl">
                                <div className="aspect-square overflow-hidden">
                                    <img
                                        src={neil}
                                        alt="Neil Nitin Mukesh"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                                
                                {/* Overlay Effect */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#003777]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            {/* Content */}
                            <div className="text-center space-y-3">
                                <h4 className="text-xl font-bold text-gray-900 group-hover:text-[#003777] transition-colors duration-300">
                                    Neil Nitin Mukesh
                                </h4>
                                <p className="text-base text-gray-600 leading-relaxed font-medium">
                                    Renowned Indian Actor & Film Producer
                                </p>
                            </div>
                            
                            {/* Hover Border Effect */}
                            <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#003777] transition-colors duration-300"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Speakers Section */}
            <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <SectionTitle title="Speakers" className="mb-16 text-center" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {speakers.map((speaker, index) => (
                        <div 
                            key={index}
                            className={`group bg-white rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 border-t-4 border-[#003777] ${
                                isVisible ? 'animate-slide-up' : ''
                            }`}
                            style={{ animationDelay: `${700 + index * 150}ms` }}
                        >
                            
                            {/* Image Container */}
                            <div className="relative mb-6 overflow-hidden rounded-2xl">
                                <div className="aspect-square overflow-hidden">
                                    <img
                                        src={speaker.img}
                                        alt={speaker.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                                
                                {/* Overlay Effect */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#003777]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            {/* Content */}
                            <div className="text-center space-y-3">
                                <h4 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-[#003777] transition-colors duration-300">
                                    {speaker.name}
                                </h4>
                                <p className="text-sm md:text-base text-gray-600 leading-relaxed font-medium">
                                    {speaker.role}
                                </p>
                            </div>
                            
                            {/* Hover Border Effect */}
                            <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#003777] transition-colors duration-300"></div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default SpeakersChiefGuest;
