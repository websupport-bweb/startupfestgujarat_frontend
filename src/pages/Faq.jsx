import React, { useEffect, useState, useRef } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import axios from 'axios';
import SectionTitle from '../components/SectionTitle';

function Faq() {
  const [faq, setFaq] = useState([]);
  const [openIndex, setOpenIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const fetchFaq = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_URL}/api/auth/list/FaqMaster`);
      console.log(res.data);
      setFaq(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchFaq();

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
            Everything you need to know about the Event
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
