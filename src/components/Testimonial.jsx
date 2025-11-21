import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import SectionTitle from './SectionTitle';

const Testimonial = () => {
    // Static testimonials data
    const testimonials = [
        {
            id: "1",
            title: "Harsh",
            designation: "CTO",
            description: "Very interesting event! The networking opportunities and innovative ideas showcased were truly inspiring. Startup Fest Gujarat has created an amazing platform for entrepreneurs to connect and grow.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
            isActive: true
        },
        {
            id: "2", 
            title: "Vaishali",
            designation: "CEO",
            description: "An exceptional gathering of brilliant minds and groundbreaking startups. The event provided invaluable insights into the latest industry trends and fostered meaningful collaborations.",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
            isActive: true
        },
        {
            id: "3",
            title: "Harshal", 
            designation: "CEO of Marwiz",
            description: "Nice event with great organization and fantastic speakers. The startup ecosystem in Gujarat is thriving, and this fest perfectly captures that energy and innovation.",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
            isActive: true
        },
        {
            id: "4",
            title: "Priya Sharma",
            designation: "Founder, TechVenture",
            description: "Startup Fest Gujarat exceeded all my expectations. The quality of mentorship, investor connections, and peer learning opportunities were phenomenal.",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
            isActive: true
        },
        {
            id: "5", 
            title: "Rajesh Patel",
            designation: "Angel Investor",
            description: "As an investor, I was impressed by the caliber of startups presented. The event showcases Gujarat's potential as a major startup hub in India.",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
            isActive: true
        }
    ];

    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50">
            
            <SectionTitle 
                title="What People Say About Us" 
                subtitle="Hear from our community members and participants"
                className="mb-12 md:mb-16 text-center" 
            />

            <div className="relative">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    navigation={{
                        nextEl: '.testimonial-button-next',
                        prevEl: '.testimonial-button-prev',
                    }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                    className="pb-16"
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id} className="!w-80 md:!w-96">
                            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 mx-4 text-center transform hover:scale-105 border border-gray-100">
                                
                                {/* Author Image */}
                                <div className="mb-6">
                                    <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-4 border-[#003777] shadow-lg">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.title}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.target.src = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face';
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* Author Info */}
                                <div className="mb-6">
                                    <h4 className="text-lg md:text-xl font-bold text-[#003777] mb-1">
                                        {testimonial.title}
                                    </h4>
                                    <p className="text-sm md:text-base text-gray-600 font-medium">
                                        {testimonial.designation}
                                    </p>
                                </div>

                                {/* Testimonial Content */}
                                <div className="relative">
                                    {/* Quote Icon */}
                                    <div className="absolute -top-2 -left-2 text-4xl text-[#003777] opacity-20">
                                        "
                                    </div>
                                    
                                    <p className="text-gray-700 italic leading-relaxed text-base md:text-lg relative z-10">
                                        {testimonial.description}
                                    </p>
                                    
                                    {/* Quote Icon */}
                                    <div className="absolute -bottom-4 -right-2 text-4xl text-[#003777] opacity-20 rotate-180">
                                        "
                                    </div>
                                </div>

                                {/* Star Rating */}
                                <div className="flex justify-center mt-6 space-x-1">
                                    {[...Array(5)].map((_, i) => (
                                        <svg 
                                            key={i} 
                                            className="w-5 h-5 text-yellow-400 fill-current" 
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Navigation Buttons */}
                <div className="flex justify-center space-x-4 mt-8">
                    <button className="testimonial-button-prev w-12 h-12 bg-[#003777] hover:bg-blue-900 text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <button className="testimonial-button-next w-12 h-12 bg-[#003777] hover:bg-blue-900 text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Custom Swiper Pagination Styles */}
            <style>{`
                .swiper-pagination-bullet {
                    background-color: #003777 !important;
                    opacity: 0.3 !important;
                    width: 12px !important;
                    height: 12px !important;
                }
                
                .swiper-pagination-bullet-active {
                    opacity: 1 !important;
                    transform: scale(1.2) !important;
                }
                
                .swiper-slide {
                    height: auto !important;
                }
            `}</style>
        </section>
    );
};

export default Testimonial;
