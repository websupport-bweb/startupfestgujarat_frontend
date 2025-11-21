import React, { useEffect, useState, useRef } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import SectionTitle from '../components/SectionTitle';

function Faq() {
  const [openIndex, setOpenIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Static FAQ data
  const faq = [
    {
      id: "1",
      que: "What is Startup Fest Gujarat Season 3?",
      ans: "Startup Fest Gujarat Season 3 is set to be the state's most critical convergence of capital and innovation, significantly raising the bar for entrepreneurship. This season elevates the stakes by bringing a national roster of VCs and Angel investors with a clear mandate to deploy significant capital, focusing on high-stakes pitching sessions designed to attract over crores in committed funding. More than just a networking event, Season 3 is the premier hub where entrepreneurs, investors, and industry giants forge the strategic alliances necessary to drive Gujarat's innovation-led growth, ensuring that the state's next market leaders get their definitive start.",
      IsActive: true
    },
    {
      id: "2",
      que: "When and where will the event take place?",
      ans: "Startup Fest Gujarat Season 3 is set to be the state's most critical convergence of capital and innovation, significantly raising the bar for entrepreneurship. Mark your calendars for December 13th and 14th, 2025, at the Gujarat University Atal-Kalam Building in Ahmedabad.",
      IsActive: true
    },
    {
      id: "3",
      que: "Who can attend Startup Fest Gujarat Season 3?",
      ans: "The event is open to entrepreneurs, investors, industry professionals, students, and anyone interested in the startup ecosystem. Whether you're looking to pitch your startup, explore investment opportunities, or gain insights from industry experts, Startup Fest Gujarat Season 3 is the place to be.",
      IsActive: true
    },
    {
      id: "4",
      que: "How can I register for the event?",
      ans: "You can register for Startup Fest Gujarat Season 3 through our official website. Early bird registration is encouraged, as space is limited. Be sure to complete the registration process to secure your spot at this premier startup event.",
      IsActive: true
    },
    {
      id: "5",
      que: "Can I participate in the pitch sessions?",
      ans: "Yes! If you're a startup looking to pitch your idea, you can apply to participate in our pitch sessions. The application process involves submitting a brief about your startup and its unique value proposition. Selected startups will be notified in advance and given the opportunity to present to our panel of investors.",
      IsActive: true
    },
    {
      id: "6",
      que: "Are there sponsorship opportunities available?",
      ans: "Absolutely! We offer a range of sponsorship packages to suit various needs and budgets. If you're interested in sponsoring the event and gaining visibility among Gujarat's startup ecosystem, please contact us at 8849361880 for more information about available packages.",
      IsActive: true
    },
    {
      id: "7",
      que: "Will there be opportunities for networking?",
      ans: "Yes, Startup Fest Gujarat Season 3 is designed with ample networking opportunities in mind. From dedicated networking sessions to informal meet-and-greets, you'll have plenty of chances to connect with other attendees, speakers, potential investors, and fellow entrepreneurs throughout the two-day event.",
      IsActive: true
    },
    {
      id: "8",
      que: "What should I bring to the event?",
      ans: "Please bring a valid ID, your event ticket (either printed or on your mobile device), and business cards for networking. If you're a startup pitching, bring any relevant materials or prototypes to showcase. We also recommend bringing a notebook for taking notes during sessions.",
      IsActive: true
    },
    {
      id: "9",
      que: "What are the event's health and safety protocols?",
      ans: "We are committed to ensuring a safe and enjoyable experience for all attendees. Our venue follows all recommended health and safety guidelines, and we have protocols in place to ensure the wellbeing of everyone participating in Startup Fest Gujarat Season 3.",
      IsActive: true
    },
    {
      id: "10",
      que: "Who can I contact for more information?",
      ans: "For any additional questions or concerns, please reach out to our event support team at snehshilpfoundation@gmail.com or call us at 8849361880. Our team is ready to assist you with registration, sponsorship inquiries, or any other event-related questions.",
      IsActive: true
    }
  ];

  useEffect(() => {
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

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-x-hidden">
      <section 
        ref={sectionRef}
        className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24"
      >
        <div className="text-center mb-12 md:mb-16">
          <SectionTitle title="Frequently Asked Questions" className="mb-6" />
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about Startup Fest Gujarat Season 3
          </p>
        </div>

        <div className="space-y-4 md:space-y-6">
          {faq && faq.map((item, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl border-2 border-gray-100 hover:border-[#003777] transition-all duration-300 shadow-lg hover:shadow-xl ${
                isVisible ? 'animate-slide-up' : ''
              }`}
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              {/* Question Header */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none group"
              >
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-[#003777] transition-colors duration-300 pr-4">
                  {item.que}
                </h3>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-[#003777] flex items-center justify-center transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  {openIndex === index ? (
                    <FaMinus className="text-white text-sm" />
                  ) : (
                    <FaPlus className="text-white text-sm" />
                  )}
                </div>
              </button>

              {/* Answer Content */}
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 md:px-8 pb-6 md:pb-8">
                  <div className="border-t border-gray-200 pt-6">
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      {item.ans}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Faq;
