import React, { useState, useEffect } from "react";
import Slider from 'react-slick';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { IoIosArrowRoundDown } from "react-icons/io";
// import video from "../assets/img/video-img.png";
import video from "../assets/img/video-home.png";
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
import RegisterYourself from "./RegisterYourself";


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
    slidesToScroll: 4,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024, // Screen width less than 1024px
        settings: {
          slidesToShow: 3, // Show 3 slides
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Screen width less than 768px
        settings: {
          slidesToShow: 3, // Show 2 slides
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Screen width less than 480px
        settings: {
          slidesToShow: 2, // Show 1 slide
          slidesToScroll: 1,
        },
      },
    ],
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const gallery = [
    { url: require('../assets/img/Sponser logo/1.png') },
    { url: require('../assets/img/Sponser logo/2.png') },
    { url: require('../assets/img/Sponser logo/3.png') },
    { url: require('../assets/img/Sponser logo/4.png') },
    { url: require('../assets/img/Sponser logo/5.png') },
    { url: require('../assets/img/Sponser logo/6.png') },
    { url: require('../assets/img/Sponser logo/7.png') },
    { url: require('../assets/img/Sponser logo/8.png') },
    { url: require('../assets/img/Sponser logo/9.png') },
    { url: require('../assets/img/Sponser logo/11.png') },
    { url: require('../assets/img/Sponser logo/12.png') },
    { url: require('../assets/img/Sponser logo/13.png') },
    { url: require('../assets/img/Sponser logo/14.png') },
    { url: require('../assets/img/Sponser logo/15.png') },
    { url: require('../assets/img/Sponser logo/16.png') },
    { url: require('../assets/img/Sponser logo/17.png') },
    { url: require('../assets/img/Sponser logo/18.png') },
    { url: require('../assets/img/Sponser logo/19.png') },
    { url: require('../assets/img/Sponser logo/20.png') },
    { url: require('../assets/img/Sponser logo/21.png') },
    { url: require('../assets/img/Sponser logo/22.png') },
  ]


  return (
    <>
      <section className="" id="target-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={12}>
              <div className=" p-relative">
                <img src={video} className="w-100" />
                <a onClick={handleShow} className="play-btn"></a>

                <Modal
                  show={show}
                  onHide={handleClose}
                  size="xl"
                  className="video-modal"
                >
                  <Modal.Header closeButton></Modal.Header>
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
                <Link to="/register" className="theme-btn">
                  Register Now
                </Link>
                {/* <button className="theme-btn-light" onClick={handleScroll}>
                  <IoIosArrowRoundDown /> Explore More
                </button> */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="padding-sec light-bg">
        <Container>
          <Row className="justify-content-between">
            <Col xs={12} md={12} lg={5}>
              <h3 className="title">About StartUp Fest</h3>
              <p className="para">
              Snehshilp Foundation's "Start-Up Fest Gujarat" highlights the thriving spirit of entrepreneurship and innovation in the region. Founded and driven by the visionary Mrs. Snehal Brahmbhatt, the event aims to fill the void in start-up support by providing a comprehensive platform for fresh ideas to flourish.
              </p>
              <p className="para">
              The annual event brings together start-ups, investors, and industry collaboration. Leaders for two days, creating an atmosphere of inspiration and fruitful collaboration.
              </p>
              

              <div className="padding-btn">
                <Link to="/about" className="theme-btn">
                  Learn More
                </Link>
              </div>
            </Col>
            <Col xs={12} md={8} lg={6} className="offset-md-2 offset-lg-0">
              <img src={about} className="w-100 img-padding" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="padding-sec">
        <Container>
          <Row className="count-box justify-content-center">
            <Col lg={6} md={12} xs={12}>
              <h3 className="title mb-5">
                India <span className="gradient">Startup Revolution </span> is
                here and now!
              </h3>

              <Row>
                <Col lg={4} md={4} xs={12}>
                  <div className="box">
                    <MdLocationPin />
                    <h4>Venue</h4>
                    <p>Vigyan Bhavanm, Science City, Ahmedabad.</p>
                  </div>
                </Col>
                <Col lg={4} md={4} xs={12}>
                  <div className="box">
                    {/* <SlCalender /> */}
                    <img src={caleder} width={45} />
                    <h4>Date</h4>
                    <p>28 & 29 September, 2024</p>
                  </div>
                </Col>
                <Col lg={4} md={4} xs={12}>
                  <div className="box">
                    <img src={clock} width={45} />
                    <h4>Time</h4>
                    <p>10:00 AM TO 10:00 PM</p>
                  </div>
                </Col>
              </Row>
            </Col>

            <Col lg={6} md={8} xs={12}>
              <Timer />
            </Col>
          </Row>
        </Container>
      </section>

      <div className="container-bg">
        <RegisterYourself />
      </div>

      <section className="padding-sec ">
        <Container>
          <Row>
            <Col lg={6} xs={12} className="order-lg-0 order-1">
              <Row className="">
                <Col lg={5} xs={6}>
                  <div className="col-card2">
                    <div className="check">
                      <FaRegCheckCircle />
                    </div>
                    <p>1000+</p>
                    <h4>Participants</h4>
                  </div>
                </Col>
                <Col lg={5} xs={6}>
                  <div className="col-card2">
                    <div className="check">
                      <FaRegCheckCircle />
                    </div>

                    <p>200+</p>
                    <h4>Startups</h4>
                  </div>
                </Col>

                <Col lg={5} xs={6}>
                  <div className="col-card2">
                    <div className="check">
                      <FaRegCheckCircle />
                    </div>

                    <p>135+</p>
                    <h4>Investors</h4>
                  </div>
                </Col>

                <Col lg={5} xs={6}>
                  <div className="col-card2">
                    <div className="check">
                      <FaRegCheckCircle />
                    </div>

                    <p>15000+</p>
                    <h4>Visitors</h4>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg={6} xs={12} className="sfg order-lg-1 order-0">
              <p className="font-blue">SFG 2024</p>
              <h3 className="title">
                India Startup Revolution is Here and now! At Ahmedabad September{" "}
                <span className="gradient"> 28 & 29, 2024 </span>
              </h3>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="container-bg padding-sec">
        <Container>
          <Row>
            <Col lg={6} md={12} xs={12} className="sfg ">
              <p className="font-blue">SFG 2024</p>
              <h3 className="title mb-5">
                Innovation at Bottom of the Pyramid in Rural Innovations and
                Entrepreneurship
              </h3>
            </Col>
            <Col lg={6} md={12} xs={12}>
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
              <Row>
                <div className="mt-4 text-center">
                  <p className="fw-bold pt-3 font-blue">Many More...</p>
                </div>
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
                  {gallery.map((item, index) => (
                    <div className="adjust-height" key={index}>
                    <img
                      // key={index}
                      src={item.url}
                      alt={`Gallery Image ${index + 1}`}
                    className="img-fluid "
                    />
                    </div>
                  ))}
                  {/* <img src={parti1} alt="participant" />
                  <img src={parti2} alt="participant" />
                  <img src={parti3} alt="participant" />
                  <img src={parti4} alt="participant" /> */}
                </Slider>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
