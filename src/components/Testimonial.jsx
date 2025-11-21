import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import SectionTitle from './SectionTitle';

const Testimonial = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchTestimonials();
    }, []);

    const fetchTestimonials = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_URL}/api/auth/list/testimonialMaster`);
            // Filter only active testimonials
            const activeTestimonials = response.data.filter(testimonial => testimonial.isActive);
            setTestimonials(activeTestimonials);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching testimonials:', error);
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center py-20">
                <div className="flex flex-col items-center space-y-4">
                    <div className="w-12 h-12 border-4 border-[#003777] border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-lg text-gray-600">Loading testimonials...</p>
                </div>
            </div>
        );
    }

    // Don't render anything if no testimonials
    if (testimonials.length === 0) {
        return null;
    }

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
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={testimonial._id} className="!w-80 md:!w-96">
                            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 mx-4 text-center transform hover:scale-105 border border-gray-100">
                                
                                {/* Author Image */}
                                <div className="mb-6">
                                    <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-4 border-[#003777] shadow-lg">
                                        <img
                                            src={`${process.env.REACT_APP_URL}/${testimonial.image}`}
                                            alt={testimonial.title}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.target.src = '/default-avatar.png';
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* Author Info */}
                                <div className="mb-6">
                                    <h4 className="text-lg md:text-xl font-bold text-[#003777] mb-1">
                                        {testimonial.title}
                                    </h4>
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
            <style jsx>{`
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
