import React, { useEffect, useRef, useState } from 'react';
import SectionTitle from '../components/SectionTitle';

function Activites() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);

    // Intersection Observer for animations
    const section = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const content = [
    { url: require('../assets/img/Activities/1.png'), heading: "Panel Discussion", para: "Panels with diverse viewpoints on trending industry topics and informal fireside chats with successful entrepreneurs sharing their journey and lessons learned." },
    { url: require('../assets/img/Activities/2.png'), heading: "Workshops", para: "Practical workshops on topics like digital marketing, growth hacking, and funding strategies." },
    { url: require('../assets/img/Activities/3.png'), heading: "Storytelling Sessions", para: "Entrepreneurs share both their successes and failures." },
    { url: require('../assets/img/Activities/4.png'), heading: "Open Mic", para: "An open mic platform for attendees to share their startup experiences." },
    { url: require('../assets/img/Activities/5.png'), heading: "Business Simulations", para: "Business simulation games to test entrepreneurial skills." },
    { url: require('../assets/img/Activities/6.png'), heading: "Startup Trivia", para: "Trivia sessions focused on startup knowledge and history." },
    { url: require('../assets/img/Activities/7.png'), heading: "Launch Pads", para: "Platform for startups to unveil new products or services." },
    { url: require('../assets/img/Activities/8.png'), heading: "Announcement Spots", para: "For startups to make significant announcements or updates." },
    { url: require('../assets/img/Activities/9.png'), heading: "Real-Time Prototyping", para: "Set up spaces where startups can engage in live prototyping." },
    { url: require('../assets/img/Activities/10.png'), heading: "Design Thinking Workshops", para: "Design sprints to tackle real-world challenges." },
    { url: require('../assets/img/Activities/11.png'), heading: "Problem-Solving Challenges", para: "Hackathons focused on specific industry problems or themes." },
    { url: require('../assets/img/Activities/12.png'), heading: "Innovation Sprints", para: "Short, intense innovation sprints with prizes for the best solutions" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-x-hidden">
      <section 
        ref={sectionRef}
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24"
      >
        <SectionTitle title="Activities" className="mb-12 md:mb-20 text-center" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {content.map((item, index) => (
            <div 
              key={index}
              className={`group bg-white rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 border-t-4 border-[#003777] ${
                isVisible ? 'animate-slide-up' : ''
              }`}
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative mb-6 overflow-hidden rounded-2xl">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.url}
                    alt={item.heading}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                {/* Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#003777]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-[#003777] transition-colors duration-300">
                  {item.heading}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {item.para}
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
}

export default Activites;
