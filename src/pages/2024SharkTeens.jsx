import React, { useEffect, useRef, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import st from "../assets/img/st.webp";
import st1 from "../assets/img/st-1 (1).JPG";
import st2 from "../assets/img/st-1 (2).JPG";
import st3 from "../assets/img/st-1 (3).JPG";
// import user from "../assets/img/st-1.JPG";

const Sharkteen = () => {
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
    const sharkteens = [
        {
            image: st1,
        },
        {
            image: st2,
        },
        {
            image: st3,
        },
        {
            image: st,
        },
    ]

    return (
        <div className="bg-gradient-to-br from-white via-gray-50 to-blue-50 min-h-screen py-14">
            <section 
                ref={sectionRef}
                className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <SectionTitle 
                        title="Shark Teens 2024" 
                        subtitle="Witness the future of entrepreneurship as young innovators present their groundbreaking ideas in our exclusive Shark Teens competition, inspiring the next generation of business leaders."
                        className="mb-16 text-center"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10">
                    {sharkteens.map((item, index) => (
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
                                        src={item.image}
                                        alt="Shark Teens Event"
                                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                                
                                {/* Overlay Effect */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#003777]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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

export default Sharkteen;
