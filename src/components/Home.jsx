import React, { useState, useEffect } from "react";
import Slider from 'react-slick';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { IoIosArrowRoundDown } from "react-icons/io";
import video from "../assets/img/video-img.png";
import about from "../assets/img/about-img.png";
import clock from "../assets/img/clock-icon.png";
import caleder from "../assets/img/calender-icon.png";
import { MdLocationPin } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { FaRegCheckCircle } from "react-icons/fa";
import img1 from "../assets/img/img-1.png";
import img2 from "../assets/img/img-2.png";
import img3 from "../assets/img/img-3.png";
import parti1 from "../assets/img/client/1.jpg";
import parti2 from "../assets/img/client/2.jpg";
import parti3 from "../assets/img/client/3.jpg";
import parti4 from "../assets/img/client/4.jpg";
import agry from "../assets/img/agry.png";
import food from "../assets/img/food.png";
import innov from "../assets/img/innov.png";
import fin from "../assets/img/fin.png";
import mobile from "../assets/img/mobile.png";
import edu from "../assets/img/edu.png";
import { Link } from "react-router-dom";
import Timer from "./Timer";


export default function Home() {

  const handleScroll = () => {
    window.scrollTo({
      top: document.getElementById("target-section").offsetTop,
      behavior: "smooth",
    });
  };

  const [settings] = useState({
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);




  return (
    <>
      <section className="top-banner">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="text-center">
                <h5 className="subheading">
                  Connecting Innovators and Investors.
                </h5>
                <h3 className="banner-text">
                  Join the Junction of Vision and Opportunity at
                  <span className="gradient">Startup Fest</span> Gujarat!
                </h3>
              </div>
            </Col>
            <Col lg={12}>
              <div className="banner-btns">
                <Link to="/register" className="theme-btn">Register Now</Link>
                <button className="theme-btn-light" onClick={handleScroll}>
                  <IoIosArrowRoundDown /> Explore More
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="" id="target-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={12}>
              <div className=" p-relative">
                <img src={video} className="w-100" />
                <a onClick={handleShow} className="play-btn"></a>

                <Modal show={show} onHide={handleClose} size="xl" className="video-modal">
                  <Modal.Header closeButton>

                  </Modal.Header>
                  <Modal.Body>
                    <iframe
                      width="100%"
                      height="450"
                      src="https://www.youtube.com/embed/kKACoyYyHpg"
                      title="Startup Fest 2023"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    ></iframe>
                  </Modal.Body>

                </Modal>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="padding-sec light-bg">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={6} lg={6}>
              <h3 className="title">About start up fest</h3>
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


              <div className="mt-5">
                <Link to="/about" className="theme-btn">Learn More</Link>

              </div>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <img src={about} className="w-100 img-padding" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="padding-sec">
        <Container>
          <Row className="count-box">
            <Col lg={6} xs={12} >
              <h3 className="title mb-5">
                India <span className="gradient">Startup Revolution </span> is
                here and now!
              </h3>

              <Row>
                <Col lg={4} xs={12} >
                  <div className="box">
                    <MdLocationPin />
                    <h4>Venue</h4>
                    <p>Vigyan Bhavanm, Science City, Ahmedabad.</p>
                  </div>
                </Col>
                <Col lg={4} xs={12} >
                  <div className="box">
                    {/* <SlCalender /> */}
                    <img src={caleder} width={45} />
                    <h4>Date</h4>
                    <p>28 & 29 September, 2024</p>
                  </div>
                </Col>
                <Col lg={4} xs={12} >
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
      </section>

      <section className="container-bg padding-sec">
        <Container>
          <Row>
            <Col lg={8} xs={6}>
            <h3 className="title">Register Yourself</h3>
            </Col>
            <Col lg={4} xs={6} className="text-end">
            <Link to="/register" className="theme-btn">Register Now</Link>
            </Col>
            <Col lg={6} xs={12}>
            <h5 className="para-custom">
                People who register for the Start-Up Fest will be allotted a
                5-minute time slot to present their startup in front of
                potential investors.
              </h5>
            </Col>
          </Row>
          <Row className="justify-content-between">
            <Col lg={3} xs={12} className="col-card">
              <h3>Pitcher</h3>
              <p>
                Pitchers will get a 3 by 3 stall and a chance to
                <span className="yellow-bg">present their project/idea/</span>
                startup on stage in front of all the investors.
              </p>
              <img src={img1} className="w-100" />
            </Col>
            <Col lg={3} xs={12} className="col-card">
              <h3>Startup</h3>
              <p>
                Startups/ franchises will get a 2/2 stall and
                <span className="yellow-bg">
                  visibility in front of all the investors
                </span>
                coming in.
              </p>
              <img src={img2} className="w-100" />
            </Col>
            <Col lg={3} xs={12} className="col-card">
              <h3>Investors</h3>
              <p>
                Investors will get a chance to talk to all the startups and an
                opportunity to
                <span className="yellow-bg">

                  multiply their money by 2-3 times.
                </span>
              </p>
              <img src={img3} className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="padding-sec ">
        <Container>
          <Row>
            <Col className="">
              <Row className="margin-between row-gap">
                <Col className=" col-card2">
                  <Row>
                    <Col lg={2}>
                      <div className="check">

                        <FaRegCheckCircle />
                      </div>
                    </Col>
                    <Col>
                      <p>1000+</p>
                      <h4>Participants</h4>
                    </Col>
                  </Row>
                </Col>
                <Col className=" col-card2">
                  <Row>
                    <Col lg={2}>
                      <div className="check">

                        <FaRegCheckCircle />
                      </div>
                    </Col>
                    <Col>
                      <p>1000+</p>
                      <h4>Participants</h4>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="margin-between row-gap mt-4">
                <Col className=" col-card2">
                  <Row>
                    <Col lg={2}>
                      <div className="check">

                        <FaRegCheckCircle />
                      </div>
                    </Col>
                    <Col>
                      <p>1000+</p>
                      <h4>Participants</h4>
                    </Col>
                  </Row>
                </Col>
                <Col className=" col-card2">
                  <Row>
                    <Col lg={2}>
                      <div className="check">

                        <FaRegCheckCircle />
                      </div>
                    </Col>
                    <Col>
                      <p>1000+</p>
                      <h4>Participants</h4>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col className="sfg">
              <p className="font-blue">SFG 2024</p>
              <h3 className="title mb-5">
                India Startup Revolution is Here and now! At Ahmedabad Septem
                <span className="gradient">ber 28 & 29, 2024 </span>
              </h3>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="container-bg padding-sec">
        <Container>
          <Row>
            <Col className="sfg ">
              <p className="font-blue">SFG 2024</p>
              <h3 className="title mb-5">
                Innovation at Bottom of the Pyramid in Rural Innovations and
                Entrepreneurship
              </h3>
            </Col>
            <Col>
              <Row className="text-center border-custom">
                <Col>
                  <img src={agry} />
                  <p className="fw-bold pt-3 font-blue "> Agri-Tech</p>
                </Col>
                <Col className="outer-border">
                  <img src={food} />
                  <p className="fw-bold pt-3 font-blue">Food- Tech</p>
                </Col>
                <Col>
                  <img src={innov} />
                  <p className="fw-bold pt-3 font-blue">Rural Innovation</p>
                </Col>
              </Row>
              <Row className="text-center">
                <Col className="pt-4">
                  <img src={fin} />
                  <p className="fw-bold pt-3 font-blue ">Fin-Tech</p>
                </Col>
                <Col className="outer-border pt-4">
                  <img src={mobile} />
                  <p className="fw-bold pt-3 font-blue">Rural Healthcare</p>
                </Col>
                <Col className="pt-4">
                  <img src={edu} />
                  <p className="fw-bold pt-3 font-blue">Edu-Tech</p>
                </Col>
              </Row>
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
                <button className="theme-btn-light light-border">
                  Register Now
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="padding-sec participant-sec">
        <Container>
          <Row className="justify-content-center">
            <Col lg={12}>
              <h3 className="title text-center">Participants</h3>
            </Col>
            <Col lg={10}>
              <div>
                <Slider {...settings}>
                  <img src={parti1} alt="participant" />
                  <img src={parti2} alt="participant" />
                  <img src={parti3} alt="participant" />
                  <img src={parti4} alt="participant" />
                </Slider>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
