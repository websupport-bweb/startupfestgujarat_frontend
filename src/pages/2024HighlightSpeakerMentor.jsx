import React, { useEffect } from "react";

// Import child components
import HeroBanner from "../components/2024Highlights/HeroBanner";
import EsteemedGuests from "../components/2024Highlights/EsteemedGuests";
import Moderator from "../components/2024Highlights/Moderator";
import Mentors from "../components/2024Highlights/Mentors";
import MotivationalSpeaker from "../components/2024Highlights/MotivationalSpeaker";

// Import images
import Sandeep from "../assets/img/Sandeep.jpg";
import sneh from "../assets/img/sneh.jpg";  
import panel from "../assets/img/panel.JPG";  
import Chiranjeev from "../assets/img/Chiranjeev.webp"
import Deepali from "../assets/img/Deepali.webp"
import Hirav from "../assets/img/Hirav.webp"

const Speakers2024 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // ===================== DATA =====================
    const esteemedGuests = [
        {
            name: "Mr. Sandeep Engineer",
            subtitle: "Managing Director, Astral Limited",
            image: Sandeep,
        },
        {
            name: "Mr. Hirav Shah",
            subtitle: "Astro-Business Strategist",
            image: Hirav,
        },
        {
            name: "Mr. Chiranjeev Patel",
            subtitle: "Managing Director, PC Snehal Group",
            image: Chiranjeev,
        },
    ];

    const moderator = {
        name: "Ms. Deepali Chatwani",
        image: Deepali,
        subtitle: "Business Journalist and Media Host",
    };

    const mentors = Array.from({ length: 9 }, (_, index) => ({
        image: require(`../assets/img/m${index + 1}.webp`),
    }));

    const motivationalSpeaker = {
        name: "Sneh Desai",
        image: sneh,
        subtitle: "Business Journalist and Media Host",
    };

    // ===================== RENDER =====================
    return (
        <div className="bg-gradient-to-br from-white via-gray-50 to-blue-50 min-h-screen">
            <HeroBanner panelImage={panel} />
            <EsteemedGuests guests={esteemedGuests} />
            <Moderator moderator={moderator} />
            <Mentors mentors={mentors} />
            <MotivationalSpeaker speaker={motivationalSpeaker} />
        </div>
    );
};

export default Speakers2024;
