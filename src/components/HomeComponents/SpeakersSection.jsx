import React from 'react';
import abhijeet from "../../assets/img/image4.png";
import fenil from "../../assets/img/image6.png";
import naman from "../../assets/img/image3.png";
import neil from "../../assets/img/image7.png";
import raul from "../../assets/img/image2.png";
import sonu from "../../assets/img/image1.png";
import tirth from "../../assets/img/image5.png";
import SectionTitle from '../SectionTitle';

const SpeakersSection = () => {
  const speakersData = [
    { img: neil, name: "Neil Nitin Mukesh", role: "Renowned Indian Actor & Film Producer" },
    { img: sonu, name: "Sonu Sharma", role: "International Motivational Speaker" },
    { img: raul, name: "Raul John Aju", role: "India's Young AI Innovator, CEO Project 47x, TEDx Speaker" },
    { img: naman, name: "Naman Anand", role: "Mentalist, Magician" },
    { img: abhijeet, name: "Mr. Abhijeet Satani", role: "Scientist" },
    { img: tirth, name: "Mr. Tirth Patel", role: "CEO & Director – Anand Innovation Pvt Ltd" },
    { img: fenil, name: "CA. DR. CS. Fenil Shah", role: "WIRC Treasurer, Former ICAI Chairperson, CA-CS Professional" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-blue-50 py-16 md:py-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionTitle title="Speakers" className="mb-12 md:mb-16 text-center" />

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {speakersData.map((spk, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 animate-slide-up border-t-4 border-[#003777]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              
              {/* Image Container */}
              <div className="relative mb-6 overflow-hidden rounded-2xl">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={spk.img}
                    alt={spk.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                {/* Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#003777]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="text-center space-y-3">
                <h4 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-[#003777] transition-colors duration-300">
                  {spk.name}
                </h4>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed font-medium">
                  {spk.role}
                </p>
              </div>
              
              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#003777] transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default SpeakersSection;