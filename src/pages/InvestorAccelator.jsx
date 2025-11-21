import React, { useEffect } from 'react';
import banner from "../assets/img/invest-banner.png";
import img1 from "../assets/img/investor11.png";
import img2 from "../assets/img/investor2.jpg";
import a1 from "../assets/img/accelator1.jpg";
import img3 from "../assets/img/bg-img-invest.png";
import opp1 from "../assets/img/opp1.png";
import opp2 from "../assets/img/opp2.png";
import opp3 from "../assets/img/opp3.png";
import opp4 from "../assets/img/opp4.png";
import opp5 from "../assets/img/opp5.png";
import opp6 from "../assets/img/opp6.png";
import CardContent from '../components/CardContent';
import { InvestorHeroBanner, InvestorQuoteSection, InvestorOpportunities, InvestorContentBanner } from '../components/InvestorComponents';


export default function InvestorAccelator() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const text = `<p class="para">
              We’ve curated a range of opportunities specifically designed to connect you with the key players in the industry. Whether you're looking to meet with venture capitalists, incubators, angel investors, or industry leaders, Startup Fest Gujarat is your gateway to the connections you need to take your startup to the next level.
              </p>`


  const text2 = `<p class="para">
              At Startup Fest Gujarat, you'll encounter a diverse array of startups spanning multiple industries and
               growth stages, all eager to connect with investors, incubators, and mentors. From cutting-edge Fintech
                to innovative AI, and from early-stage ventures to those seeking Series A funding, this event is designed 
                to bring together companies across sectors, providing them with the opportunity to secure mentorship, networking,
                 and potential investment to drive their growth forward.
              </p>  `

  const opportunities = [
    { img: opp1, title: "Prestige Sessions" },
    { img: opp2, title: "Awards & Pitches" },
    { img: opp3, title: "Media Center" },
    { img: opp4, title: "Live Sessions" },
    { img: opp5, title: "Connect & Collaborate" },
    { img: opp6, title: "Networking Opportunities" },
  ];

  return (
    <div className="bg-gradient-to-br from-white via-gray-50 to-blue-50 min-h-screen overflow-x-hidden">
      {/* Hero Banner */}
      <InvestorHeroBanner image={banner} alt="Investor & Accelerator Banner" />

      {/* First Content Section */}
      <section className="w-full py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CardContent
            about={img1}
            text={text}
            title="Where Startups Meet Leading Investors"
            buttonShow={true}
            to="/register" 
            linkToTitle="Register Now" 
          />
        </div>
      </section>

      {/* Quote Section */}
      <InvestorQuoteSection 
        image={img3}
        quote="I'm convinced that about half of what separates the successful entrepreneurs from the non-successful ones is pure perseverance."
        author="Steve Jobs, Co-founder of Apple"
      />

      {/* Second Content Section */}
      <section className="w-full py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CardContent
            about={img2}
            text={text2}
            title="Engage with Leading Startups from Elite Programs"
            buttonShow={true}
            to="/register" 
            linkToTitle="Register Now" 
          />
        </div>
      </section>

      {/* Content Banner */}
      <InvestorContentBanner image={a1} alt="Accelerator Programs" />

      {/* Opportunities Section */}
      <InvestorOpportunities opportunities={opportunities} />
    </div>
  );
}
