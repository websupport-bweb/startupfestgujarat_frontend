import React, { useEffect } from "react";
import img1 from "../assets/img/startup-banner.jpg";
import agry from "../assets/img/mic.png";
import food from "../assets/img/network.png";
import fin from "../assets/img/camera.png";
import mobile from "../assets/img/star.png";
import about from "../assets/img/about-img.png";
import opp1 from "../assets/img/opp1.png";
import opp2 from "../assets/img/opp2.png";
import opp3 from "../assets/img/opp3.png";
import opp4 from "../assets/img/opp4.png";
import opp5 from "../assets/img/opp5.png";
import opp6 from "../assets/img/opp6.png";
import funding from "../assets/img/startup2.png";
import img3 from "../assets/img/image.png";
import startup1 from "../assets/img/startup-img2.png";
import CardContent from "../components/CardContent";
import HeroBanner from "../components/StartupComponents/HeroBanner";
import GlanceSection from "../components/StartupComponents/GlanceSection";
import QuoteSection from "../components/StartupComponents/QuoteSection";
import OpportunitiesSection from "../components/StartupComponents/OpportunitiesSection";
import ContentBanner from "../components/StartupComponents/ContentBanner";

const text = ` <p class="para">
                Startup Fest Gujarat Season 1 delivered unparalleled value with
                world-br class content, offering direct 1:1 access to industry
                leaders, speakers, and mentors throughout the event. It was a
                hub for entrepreneurial growth, featuring investment
                opportunities worth hundreds of crores awarded onsite, and
                facilitating countless networking experiences, including curated
                match-ups and interactive sessions. Designed to connect you with
                key players and resources, Startup Fest Gujarat Season I was a
                launchpad for startups to accelerate their growth and make
                meaningful industry connections.
              </p>`


const text2 = ` <p class="para">
                With an impressive ₹532+ crore pool fund, Startup Fest Gujarat Season 1 offered startups an unprecedented chance to secure the funding they need to thrive. The event was packed with opportunities to propel your business forward, from high-stakes investment pitches to targeted matchups with top investors. Whether you connected with our expert panels, networked in our exclusive investor lounge, or took the stage to pitch your vision, Startup Fest Gujarat Season 1 was the ultimate platform to unlock your startup’s potential and secure the resources to scale your business.</p>
            `


// Data for child components
const glanceFeatures = [
  { icon: agry, title: "World-class Content" },
  { icon: food, title: "Curated Networking" },
  { icon: fin, title: "Media Spotlight & Exposure" },
  { icon: mobile, title: "Investment Opportunities" },
];

const opportunities = [
  { img: opp1, title: "Prestige Sessions" },
  { img: opp2, title: "Awards & Pitches" },
  { img: opp3, title: "Media Center" },
  { img: opp4, title: "Live Sessions" },
  { img: opp5, title: "Connect & Collaborate" },
  { img: opp6, title: "Networking Opportunities" },
];



function Startup() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gradient-to-br from-white via-gray-50 to-blue-50 min-h-screen overflow-x-hidden">
      {/* Hero Banner */}
      <HeroBanner image={img1} alt="Startup Fest Gujarat Banner" />

      {/* About Section with CardContent */}
      <section className="w-full py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CardContent
            about={about}
            text={text}
            title="Empowering Tomorrow's Innovators"
            buttonShow={true}
            to="/register" 
            linkToTitle="Register Now" 
          />
        </div>
      </section>

      {/* Glance Section */}
      <GlanceSection features={glanceFeatures} />

      {/* Quote Section */}
      <QuoteSection 
        image={img3}
        quote="I knew that if I failed I wouldn't regret that, but I knew the one thing I might regret is not trying."
        author="Jeff Bezos, Founder of Amazon"
      />

      {/* Investment Section with CardContent */}
      <section className="w-full py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CardContent
            about={funding}
            text={text2}
            title="Over ₹532 Crores in Investments!"
            buttonShow={true}
            to="/register" 
            linkToTitle="Register Now" 
          />
        </div>
      </section>

      {/* Opportunities Section */}
      <OpportunitiesSection opportunities={opportunities} />
    </div>
  );
}

export default Startup;
