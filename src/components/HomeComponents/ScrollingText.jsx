import React from 'react';

const ScrollingText = () => {
  return (
    <div className="bg-gradient-to-r from-[#C29343] via-[#C29343] to-[#C29343] py-3 overflow-hidden whitespace-nowrap relative">
      <div className="animate-scroll-text inline-flex text-lg md:text-xl lg:text-2xl font-bold text-white">
        <div className="flex items-center min-w-max px-4">
          ✧ LIVE STARTUP PITCHES ✧ KEYNOTE SESSIONS ✧ PANEL DISCUSSIONS ✧ FIRESIDE CHATS ✧ WORKSHOPS ✧ SPEED DATING ✧ EXHIBITIONS ✧ 
        </div>
        <div className="flex items-center min-w-max px-4">
          ✧ LIVE STARTUP PITCHES ✧ KEYNOTE SESSIONS ✧ PANEL DISCUSSIONS ✧ FIRESIDE CHATS ✧ WORKSHOPS ✧ SPEED DATING ✧ EXHIBITIONS ✧ 
        </div>
      </div>
      <style>{`
        @keyframes scroll-text {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-text {
          animation: scroll-text 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ScrollingText;