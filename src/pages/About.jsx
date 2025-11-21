import React, { useEffect, useState } from 'react'
import about from "../assets/img/about-img.png";
import venue from "../assets/img/venue.webp";
import { MdLocationPin } from "react-icons/md";

import { Link } from 'react-router-dom';
import Timer from '../components/Timer';
import axios from 'axios';
import CardContent from '../components/CardContent';
import { VenueSection, CtaSection } from '../components/AboutComponents';


export default function About() {

  const [map, setMap] = useState(false);

  const handleMap = () => setMap(!map);
  const [faq, setFaq] = useState([])

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchAbout = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_URL}/api/auth/cms/get-content/66e2c092b91cb37980f500b1`)
        console.log(res.data)

        setFaq(res.data);
      }
      catch (error) {
        console.error(error)
      }
    }

    fetchAbout()
  }, [])


  const text = ` <p class="para">
              Welcome to Startup Fest Gujarat, presented by the Snehshilp Foundation! Get ready to immerse yourself in a dynamic ecosystem where innovation and entrepreneurship converge. With over 300 startups, visionary investors, and renowned keynote speakers, we're setting the stage for an event that celebrates Gujarat's thriving business landscape.
              </p>
              <p class="para">
              The annual event brings together start-ups, investors, and industry collaboration. Leaders for two days, creating an atmosphere of inspiration and fruitful collaboration.
              </p>
              `

  const text2 =` <p class="para">
               The GU Atal Kalam Building at Gujarat University is a premier center for research, innovation, and entrepreneurship, inspired by the vision of Dr. A. P. J. Abdul Kalam. Housing the Centre for Extension, Research & Innovation (CERI), it provides a collaborative ecosystem where students, researchers, innovators, and industry experts work together on incubation programs, technical research, product prototyping, and academic partnerships.
              </p>
              <p class="para">
               Located within the university’s lush green campus, the building hosts major conferences, exhibitions, academic ceremonies, and innovation-driven events. With its modern infrastructure and multifunctional spaces, it has become a symbol of Gujarat University’s commitment to advancing science and technology. It also serves as the venue for Startup Fest Gujarat Season 3.0, offering the ideal platform for showcasing ideas and driving the state’s innovation movement. </p>`


             
            
  return (
    <div className="bg-gradient-to-br from-white via-gray-50 to-blue-50 min-h-screen overflow-x-hidden">
      {/* About Section */}
      <section className="w-full py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CardContent
            about={about}
            text={text}
            title="About Us - The Largest Business Expert"
            buttonShow={true}
            to="/register" 
            linkToTitle="Register Now" 
          />
        </div>
      </section>

      {/* Timer Section */}
      <section className="w-full py-20 bg-white">
          <Timer />
      </section>

      {/* Venue Section */}
      <VenueSection venueImage={venue} venueText={text2} />

      {/* Call to Action Section */}
      <CtaSection />
    </div>
  );
}
