import React, { useEffect } from "react";
import SectionTitle from "../components/SectionTitle";
import { Sparkles } from "lucide-react";

const StartUpShowCase = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const startupGroups = [
    [
      "Pathshala",
      "CHPL",
      "Tumpudi Automotive",
      "TRI-OM",
      "MLeads",
      "Bellacraze",
      "Infitron",
      "Agrionn",
      "Nikol EV",
      "RK Cinematic",
    ],
    [
      "Shri Marut (SMEA)",
      "Yolo",
      "New Hope Industries",
      "M-Glads",
      "Tripster",
      "Gullfoss",
      "Wind Water",
      "Smart Fuel Monitering System",
      "Growio",
      "The Phoner",
    ],
    [
      "OJCB (MJO Mega)",
      "Smart FinDoc",
      "Shivay Fire & Life Safety",
      "Bhanujit MDCR",
      "Aze Automobile",
      "Dog Food",
      "Erkey Motors India Pvt Ltd",
      "Petzzco",
      "Marwix",
      "VeleSolv",
    ],
    [
      "Greenevon",
      "Ev Expert",
      "Agropreneurs",
      "Zippit",
      "Kali-meditech",
      "Dealwala",
      "Delbird",
    ],
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-blue-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <div className="mb-12">
          <SectionTitle title="2023 Startup Showcase" className="text-center" />

          {/* Sub glow line */}
        </div>

        {/* Showcase Card */}
        <div className="backdrop-blur-lg bg-white/70 border border-white/40 shadow-2xl rounded-3xl p-10 animate-fade-in">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {startupGroups.map((group, idx) => (
              <div key={idx} className="animate-slide-up" style={{ animationDelay: `${idx * 150}ms` }}>
                <ul className="space-y-4">
                  {group.map((startup, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 px-4 py-3 bg-white shadow-md hover:shadow-xl rounded-xl border border-gray-100 hover:border-blue-300 transition-all duration-300 group cursor-default"
                    >
                      <Sparkles className="w-4 h-4 text-blue-600 opacity-70 group-hover:opacity-100 transition-all" />
                      <span className="text-gray-700 font-semibold group-hover:text-blue-700 transition-all text-sm md:text-base">
                        {startup}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default StartUpShowCase;