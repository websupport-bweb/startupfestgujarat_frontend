import React , {useState} from 'react'
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

export default function About() {

    const [map, setMap] = useState(false);

    const handleMap = () => setMap(!map);
  return (
    <>
      <section className="padding-sec light-bg">
        <Container>
          <Row className="justify-content-center">
            <Col lg={6}>
              <h6 className="txt-blue sm-title">About us</h6>
              <h3 className="title">The Largest Business Expert </h3>
              <p className="para">
                Welcome to Startup Fest Gujarat, presented by the Snehshilp
                Foundation! Get ready to immerse yourself in a dynamic ecosystem
                where innovation and entrepreneurship converge. With over 300
                startups, visionary investors, and renowned keynote speakers,
                we're setting the stage for an event that celebrates Gujarat's
                thriving business landscape.
              </p>
              <p className="para">
                Join us in Ahmedabad, the heart of entrepreneurial brilliance,
                for an unforgettable experience that amplifies business ideas
                and fosters collaboration. Embrace the future of business at
                Startup Fest Gujarat.
              </p>

            </Col>
            <Col lg="6">
              <img src={about} className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="padding-sec">
        <Container>
          <Row>
            <Col lg={6}>
              <h3 className="title mb-5">
                India <span className="gradient">Startup Revolution </span> is
                here and now!
              </h3>

              <Row>
                <Col lg={4}>
                  <div className="box">
                    <MdLocationPin />
                    <h4>Venue</h4>
                    <p>Vigyan Bhavanm, Science City, Ahmedabad.</p>
                    <div className="show">
                      <a onClick={handleMap} className='show-btn'>Show Map</a>
                        <IoIosArrowDown />
                    </div>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="box">
                    {/* <SlCalender /> */}
                    <img src={caleder} width={45} />
                    <h4>Date</h4>
                    <p>28 & 29 September, 2024</p>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="box">
                    <img src={clock} width={45} />
                    <h4>Time</h4>
                    <p>10:00 AM TO 10:00 PM</p>
                  </div>
                </Col>
              </Row>
            </Col>

            <Col lg={6}>
            <Timer />
            </Col>
          </Row>
        </Container>
        <Container fluid className="p-0 my-3">
          {map && (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3086.551930808391!2d72.4961889187413!3d23.076971500290245!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9dd1d3d9cd79%3A0xe620538d49e61b0b!2sVigyan%20Bhawan%20Science%20City!5e0!3m2!1sen!2sus!4v1726029670292!5m2!1sen!2sus"
              width="100%"
              height="400"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          )}
        </Container>
      </section>

      <section className="padding-sec light-bg">
        <Container>
          <Row className="justify-content-center">
            <Col lg={6}>
              <h3 className="title">Science city </h3>
              <p className="para">
                Located off the Sarkhej Gandhinagar Highway, Science City is an
                ambitious initiative of the government of Gujarat to trigger an
                inquiry of science in the mind of a common citizen with the aid
                of entertainment and experiential knowledge. Covering an area of
                more than 107 hectares, the idea is to create imaginative
                exhibits, virtual reality activity corners, and live
                demonstrations in an easily understandable manner.
              </p>
              <p className="para">
                Gujarat Science City is a bold initiative of the Government of
                Gujarat to realize this priority. The Government is creating a
                sprawling center at Ahmedabad which aims to provide a perfect
                blend of education and entertainment. It will showcase
                contemporary and imaginative exhibits, minds on experiences,
                working models, virtual reality, activity corners, labs and live
                demonstrations to provide an understanding of science and
                technology to the common man
              </p>
            </Col>
            <Col lg="6">
              <img src={sciencecity} className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="padding-sec">
        <Container>
          <Row className="justify-content-center">
            <Col lg="6">
              <img src={g20} className="w-100" />
            </Col>
            <Col lg={6}>
              <h3 className="title">G20 </h3>
              <p className="para">
                The G20, short for Group of Twenty, is an international forum
                consisting of 19 countries and the European Union. It brings
                together the world's major economies to discuss and coordinate
                on global economic issues. The G20 aims to promote global
                economic stability, sustainable growth, and address pressing
                challenges such as poverty, inequality, and climate change.
              </p>
            </Col>
          </Row>
        </Container>
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
