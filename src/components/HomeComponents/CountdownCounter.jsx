import React from 'react';

const CountdownCounter = ({ timeLeft }) => {
  return (
    <section className=" bg-gradient-to-br from-blue-50 to-white">
      <div className="w-full w-full mx-auto">
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl shadow-2xl p-6 md:p-8 border border-blue-200">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div className="text-center">
              <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg border border-blue-100">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#003777] mb-2">{timeLeft.days}</h3>
                <div className="w-full h-px bg-blue-300 mb-2"></div>
                <h5 className="text-sm md:text-base text-gray-700 font-medium uppercase tracking-wider">Days</h5>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg border border-blue-100">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#003777] mb-2">{timeLeft.hours}</h3>
                <div className="w-full h-px bg-blue-300 mb-2"></div>
                <h5 className="text-sm md:text-base text-gray-700 font-medium uppercase tracking-wider">Hours</h5>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg border border-blue-100">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#003777] mb-2">{timeLeft.minutes}</h3>
                <div className="w-full h-px bg-blue-300 mb-2"></div>
                <h5 className="text-sm md:text-base text-gray-700 font-medium uppercase tracking-wider">Minutes</h5>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg border border-blue-100">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#003777] mb-2">{timeLeft.seconds}</h3>
                <div className="w-full h-px bg-blue-300 mb-2"></div>
                <h5 className="text-sm md:text-base text-gray-700 font-medium uppercase tracking-wider">Seconds</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownCounter;