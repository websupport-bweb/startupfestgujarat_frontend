import React, { useEffect, useRef, useState } from "react";
import SectionTitle from "../components/SectionTitle";

import tanuj from "../assets/img/Tanuj.jpg";
import yash from "../assets/img/yash.jpg";
import devansh from "../assets/img/Devansh.jpg";
import Ronak from "../assets/img/ronak.jpg";
import arnav from "../assets/img/arnav.jpg";
import panel from "../assets/img/startuppanel.png";

const STFS2024 = () => {
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

    // ===================== DATA =====================
    const section = [

        {
            image: tanuj,
            subtitle: "CEO of Gallops Group",
            name: "Mr. Tanuj Pugalia",

        },
        {
            image: yash,
            subtitle: "CEO and Founder of The Address and True Value",
            name: "Mr. Yash Shah",
        },
        {
            image: devansh,
            subtitle: "Family Office, Urmin Group",
            name: "Mr. Devansh Majetiya",
        },
        {
            image: Ronak,
            subtitle: "Director of Chiripal Group",
            name: "Mr. Ronak Chiripal",
        },
        {
            image: arnav,
            subtitle: "Founder of Ambassador Fintech",
            name: "Mr. Arnav Patel",
        },
    ]


    // ===================== RENDER =====================
    return (
        <div className="bg-gradient-to-br from-white via-gray-50 to-blue-50 min-h-screen ">
            {/* Hero Image Section */}
            <section className="relative mb-20 ">
                <img src={panel} alt="Shark Panel" className="w-full h-auto object-contain"/>
            </section>
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
    <h4 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 leading-relaxed text-center">
        The Startup Shark Panel brought together some of Gujarat’s most influential investors and 
        entrepreneurs for an electrifying live pitching experience. Startups presented their ideas to 
        leading industry figures who shared insights, offered mentorship, and explored real-time investment opportunities.
    </h4>
</div>

            {/* Main Content Section */}
            <section 
                ref={sectionRef}
                className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <SectionTitle 
                        title="Meet Our Sharks 2024" 
                        subtitle="The Startup Shark Panel brought together some of Gujarat's most influential investors and entrepreneurs for an electrifying live pitching experience. Startups presented their ideas to leading industry figures who shared insights, offered mentorship, and explored real-time investment opportunities."
                        className="mb-16 text-center"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {section.map((person, index) => (
                        <div 
                            key={index}
                            className={`group bg-white rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 border-t-4 border-[#003777] ${
                                isVisible ? 'animate-slide-up' : ''
                            }`}
                            style={{ animationDelay: `${300 + index * 150}ms` }}
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
                                {person.subtitle && (
                                    <p className="text-sm md:text-base text-gray-600 leading-relaxed font-medium">
                                        {person.subtitle}
                                    </p>
                                )}
                            </div>
                            
                            {/* Hover Border Effect */}
                            <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#003777] transition-colors duration-300"></div>
                        </div>
                    ))}
                </div>
                
                {/* Closing Message */}
                <div className={`mt-20 text-center max-w-4xl mx-auto transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="bg-gradient-to-br from-[#003777] to-blue-700 rounded-3xl p-8 text-white shadow-xl">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                            Innovation Meets Opportunity
                        </h3>
                        <p className="text-lg leading-relaxed opacity-90">
                            The session created an inspiring space where innovation met opportunity, empowering startups to connect, collaborate, and grow with the guidance of Gujarat's leading business visionaries.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default STFS2024;
