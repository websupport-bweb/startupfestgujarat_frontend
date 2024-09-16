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
                Located off the Sarkhej Gandhinagar Highway, Science City is an
                ambitious initiative of the government of Gujarat to trigger an
                inquiry of science in the mind of a common citizen with the aid
                of entertainment and experiential knowledge. Covering an area of
                more than 107 hectares, the idea is to create imaginative
                exhibits, virtual reality activity corners, and live
                demonstrations in an easily understandable manner.
              </p>
              <p class="para">
                Gujarat Science City is a bold initiative of the Government of Gujarat to realize this priority. The Government is creating a sprawling center at Ahmedabad which aims to provide a perfect blend of education and entertainment. It will showcase contemporary and imaginative exhibits, minds-on experiences, working models, virtual reality, activity corners, labs, and live demonstrations to provide an understanding of science and technology to the common man. Photo of Vigyan Bhavan
              </p>`
  return (
    <>
     

      <section className="padding-sec light-bg">
        

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
          title="2023 Venue : Science City"
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
