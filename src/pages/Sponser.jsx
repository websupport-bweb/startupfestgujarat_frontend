import React, { useEffect } from "react";
import { SponsorHeroBanner, SponsorGrid } from '../components/SponsorComponents';

const sponsors = [
  { url: require('../assets/img/startup-1.png'), heading: "Sponsor 1" },
  { url: require('../assets/img/vanilla.png'), heading: "Sponsor 2" },
  { url: require('../assets/img/zippit.png'), heading: "Sponsor 3" },
  { url: require('../assets/img/def.png'), heading: "Sponsor 4" },
  { url: require('../assets/img/rogue.png'), heading: "Sponsor 5" },
  { url: require('../assets/img/mirchi.png'), heading: "Sponsor 6" },
  { url: require('../assets/img/swarnim.png'), heading: "Sponsor 7" },
  { url: require('../assets/img/gallops.png'), heading: "Sponsor 8" },
  { url: require('../assets/img/chitra.png'), heading: "Sponsor 9" },
  { url: require('../assets/img/insight.png'), heading: "Sponsor 10" },
  { url: require('../assets/img/swen.png'), heading: "Sponsor 11" },
  { url: require('../assets/img/inocen.png'), heading: "Sponsor 12" },
  { url: require('../assets/img/gyanjyot.png'), heading: "Sponsor 13" },
  { url: require('../assets/img/drona.png'), heading: "Sponsor 14" },
  { url: require('../assets/img/heritage.png'), heading: "Sponsor 15" },
  { url: require('../assets/img/amdavad.png'), heading: "Sponsor 16" },
  { url: require('../assets/img/gyani.png'), heading: "Sponsor 17" },
  { url: require('../assets/img/media.png'), heading: "Sponsor 18" },
  { url: require('../assets/img/startup.png'), heading: "Sponsor 19" },
  { url: require('../assets/img/ssip.png'), heading: "Sponsor 20" },
  { url: require('../assets/img/event.png'), heading: "Sponsor 21" },
  { url: require('../assets/img/swargam.png'), heading: "Sponsor 22" },
];

const Sponser = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-gradient-to-br from-white via-gray-50 to-blue-50 min-h-screen overflow-x-hidden">
      {/* Hero Banner */}
      <SponsorHeroBanner 
        image={require('../assets/img/startup-banner.jpg')} 
        alt="Sponsors Banner" 
      />

      {/* Sponsors Grid */}
      <SponsorGrid sponsors={sponsors} />
    </div>
  );
};

export default Sponser;
