import React, { useEffect, useState } from 'react'
import about from "../assets/img/about-img.png";
import sciencecity from "../assets/img/science-city.jpg";
import g20 from "../assets/img/g20.jpg";
import clock from "../assets/img/clock-icon.png";
import caleder from "../assets/img/calender-icon.png";
import { MdLocationPin } from "react-icons/md";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';
import Timer from '../components/Timer';
import axios from 'axios';
import CardContent from '../components/CardContent';


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
    <>
     

      <section className="padding-sec light-bg about-sec">
        

        <CardContent
          about={about}
          text={text}
          title={`<p class="txt-blue sm-title">
            About us
            </p>
              <h3 class="title">The Largest Business Expert</h3>`}
          buttonShow={true}
          to="/register" linkToTitle="Register Now" />
      </section>

      <section className="padding-sec">
        <Timer />
      </section>

      <section className="padding-sec light-bg">
        
         <CardContent
          about={sciencecity}
          text={text2}
          title="2025 Venue : The GU Atal Kalam Building"
          buttonShow={false}
         />
      </section>

      <section className="register-sec dark-bg padding-sec">
        <Container>
          <div className="w-70 m-auto">
            <h3 className="title text-center text-white">
              Be a Part of Gujarat's Largest Startup Fest Setting the Pace for
              Innovation!
            </h3>
          </div>
          <Row>
            <Col lg={12}>
              <div className="banner-btns">
                <Link to="/register" className="theme-btn-light light-border">
                  Register Now
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
